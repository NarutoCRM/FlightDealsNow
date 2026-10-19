import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { existsSync, mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { setTimeout as delay } from "node:timers/promises";
import test from "node:test";
import { preview } from "vite";

// Use an installed Chromium browser and its DevTools protocol; no browser package required.
const executable = process.env.CHROME_PATH || [
  "C:/Program Files/Google/Chrome/Application/chrome.exe",
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe",
].find(existsSync);

test("call telephone link, destination search, and airline routes in desktop and mobile browsers", { timeout: 120000 }, async () => {
  assert.ok(executable, "Set CHROME_PATH to an installed Chromium browser");
  const server = await preview({ preview: { host: "127.0.0.1", port: 0, open: false } });
  const profile = mkdtempSync(join(tmpdir(), "flightdealsnow-browser-"));
  const browser = spawn(executable, ["--headless=new", "--no-sandbox", "--disable-dev-shm-usage", "--disable-gpu", "--no-first-run", "--no-default-browser-check", "--remote-debugging-pipe", `--user-data-dir=${profile}`, "about:blank"], { windowsHide: true, stdio: ["ignore", "ignore", "pipe", "pipe", "pipe"] });
  let closeBrowser;
  try {
    let nextId = 0;
    const pending = new Map();
    const errors = [];
    let buffer = "";
    let sessionId;
    browser.stdio[4].on("data", chunk => {
      buffer += chunk.toString();
      let index;
      while ((index = buffer.indexOf("\0")) >= 0) {
        const message = JSON.parse(buffer.slice(0, index));
        buffer = buffer.slice(index + 1);
        if (message.method === "Runtime.exceptionThrown") errors.push(message.params.exceptionDetails.text);
        const request = pending.get(message.id);
        if (request) {
          pending.delete(message.id);
          if (message.error) request.reject(new Error(message.error.message));
          else request.resolve(message.result);
        }
      }
    });
    const send = (method, params = {}) => new Promise((resolve, reject) => {
      const id = ++nextId;
      const timer = setTimeout(() => reject(new Error('DevTools command timed out: ' + method)), 10000);
      pending.set(id, { resolve: value => { clearTimeout(timer); resolve(value); }, reject: error => { clearTimeout(timer); reject(error); } });
      if (process.env.DEBUG_CDP) console.log("SEND", method);
      browser.stdio[3].write(JSON.stringify({ id, method, params, sessionId }) + "\0");
    });
    closeBrowser = () => { sessionId = undefined; return send("Browser.close"); };
    const evaluate = async expression => {
      const result = await send("Runtime.evaluate", { expression, returnByValue: true, awaitPromise: true });
      if (result.exceptionDetails) throw new Error(result.exceptionDetails.text + ": " + result.exceptionDetails.exception?.description);
      return result.result.value;
    };
    const waitFor = async (expression, message) => {
      for (let attempt = 0; attempt < 100; attempt++) {
        if (await evaluate(expression)) return;
        await delay(50);
      }
      assert.fail(message || expression);
    };
    const click = async selector => {
      const point = await evaluate(`(() => {
        const el = document.querySelector(${JSON.stringify(selector)});
        if (!el) throw new Error('Missing click target');
        el.scrollIntoView({block: 'center', behavior: 'instant'});
        const box = el.getBoundingClientRect();
        const x = box.x + box.width / 2, y = box.y + box.height / 2;
        if (!el.contains(document.elementFromPoint(x, y))) throw new Error('Click target is covered: ' + ${JSON.stringify(selector)} + ' target=' + el.outerHTML.slice(0,160) + ' by ' + document.elementFromPoint(x,y)?.closest('button')?.outerHTML.slice(0,600) + ' count=' + document.querySelectorAll('button[aria-haspopup=dialog]').length);
        return {x, y};
      })()`);
      await send("Input.dispatchMouseEvent", { type: "mousePressed", ...point, button: "left", clickCount: 1 });
      await send("Input.dispatchMouseEvent", { type: "mouseReleased", ...point, button: "left", clickCount: 1 });
    };
    const fill = async (selector, value) => {
      await evaluate(`(() => {
        const el = document.querySelector(${JSON.stringify(selector)});
        const proto = el.tagName === 'SELECT' ? HTMLSelectElement.prototype : HTMLInputElement.prototype;
        Object.getOwnPropertyDescriptor(proto, 'value').set.call(el, ${JSON.stringify(value)});
        el.dispatchEvent(new Event('input', {bubbles:true}));
        el.dispatchEvent(new Event('change', {bubbles:true}));
      })()`);
    };
    const { targetId } = await send("Target.createTarget", { url: "about:blank" });
    ({ sessionId } = await send("Target.attachToTarget", { targetId, flatten: true }));
    await send("Runtime.enable");
    const base = server.resolvedUrls.local[0];
    const navigate = async path => {
      const previousDocument = await evaluate("performance.timeOrigin");
      await send("Page.navigate", { url: new URL(path, base).href });
      await waitFor(`location.pathname === ${JSON.stringify(path)} && performance.timeOrigin !== ${previousDocument} && !!document.querySelector('#flight-search')`, "Page failed to render: " + path);
      await delay(150);
    };
    const reload = async () => {
      const previousDocument = await evaluate("performance.timeOrigin");
      await send("Page.reload");
      await waitFor(`performance.timeOrigin !== ${previousDocument} && !!document.querySelector('#flight-search')`);
      await delay(150);
    };
    for (const width of [1440, 390, 768]) {
      await send("Emulation.setDeviceMetricsOverride", { width, height: 900, deviceScaleFactor: 1, mobile: width < 768 });
      for (const [path, name] of [["/cheap-flights-to-new-york-city", "New York City"], ["/cheap-flights-to-los-angeles", "Los Angeles"], ["/cheap-flights-to-patna", "Patna"]]) {
        await navigate(path);
        if (await evaluate("document.body.innerText.includes('We use cookies')")) {
          await click('.fixed.inset-x-0.bottom-0 button:last-child');
          assert.equal(await evaluate("localStorage.getItem('flightdealsnow_cookie_consent')"), 'accepted');
        }
        await reload();
        await waitFor("!!document.querySelector('#flight-search') && !document.body.innerText.includes('We use cookies')");
        assert.equal(await evaluate(`document.querySelectorAll('#flight-search').length`), 1);
        assert.equal(await evaluate(`document.querySelectorAll('#flight-search input')[1].value`), name);
        assert.ok(await evaluate("document.documentElement.scrollWidth <= innerWidth"), `Horizontal overflow at ${width}: ${path}`);
        // Exercise real pointer clicks and autocomplete selection.
        await click('#flight-search input');
        await fill('#flight-search input', 'LAX');
        await waitFor("!!document.querySelector('#flight-search button[type=button] b')");
        await click('#flight-search button[type=button]:has(b)');
        await fill('#flight-search input[type=date]', '2027-06-15');
        await evaluate(`(() => {
          const el = document.querySelectorAll('#flight-search input[type=date]')[1];
          Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,'value').set.call(el,'2027-06-22');
          el.dispatchEvent(new Event('input',{bubbles:true}));
        })()`);
        await fill('#flight-search select', '3');
        await evaluate(`(() => {
          const el = document.querySelectorAll('#flight-search select')[1];
          Object.getOwnPropertyDescriptor(HTMLSelectElement.prototype,'value').set.call(el,'Business');
          el.dispatchEvent(new Event('change',{bubbles:true}));
        })()`);
        await click('#flight-search button:not([type])');
        await waitFor("document.body.innerText.includes('Finding flight options...')");
        await waitFor("location.pathname === '/flight-quote'", "Search did not navigate to quote");
        const state = await evaluate("history.state.usr");
        assert.equal(state.to, name);
        assert.equal(state.from, "Los Angeles (LAX)");
        assert.equal(state.travelers, 3);
        assert.equal(state.cabin, "Business");
        assert.equal(state.returnDate, "2027-06-22");
      }
      await navigate('/airlines/abcd');
      const phoneSelector = 'a[aria-label^="Call an Expert"]';
      assert.equal(await evaluate(`document.querySelectorAll('${phoneSelector}').length`), 1);
      assert.equal(await evaluate(`document.querySelector('${phoneSelector}').getAttribute('href')`), 'tel:+1-888-348-7083');
      // Intercept the native telephone action so the test does not launch a dialer.
      await evaluate(`document.querySelector('${phoneSelector}').addEventListener('click', event => { event.preventDefault(); window.testPhoneLink = event.currentTarget.getAttribute('href'); })`);
      await click(phoneSelector);
      assert.equal(await evaluate('window.testPhoneLink'), 'tel:+1-888-348-7083');
      assert.equal(await evaluate("document.querySelector('[role=dialog]') === null"), true);
      assert.equal(await evaluate("document.querySelector('.fixed.inset-x-0.top-0 a').getAttribute('href')"), 'tel:+1-888-348-7083');
      for (const [path, name] of [['/airlines/alaska-airlines','Alaska Airlines'], ['/airlines/abcd','Abcd'], ['/airlines/delta-air-lines','Delta Air Lines']]) {
        await navigate(path);
        for (let attempt = 0; attempt < 2; attempt++) {
          await waitFor(`document.title.includes(${JSON.stringify(name)})`);
          assert.ok(await evaluate(`document.querySelector('h1').innerText.includes(${JSON.stringify(name)})`));
          assert.equal(await evaluate("document.querySelectorAll('link[rel=canonical]').length"), 1);
          assert.equal(await evaluate("document.querySelectorAll('meta[name=description]').length"), 1);
          assert.equal(await evaluate("document.querySelector('link[rel=canonical]').href"), 'https://flightdealsnow.com'+path);
          if (!attempt) { await reload(); await waitFor("!!document.querySelector('#flight-search')"); }
        }
      }
      console.log(`Verified telephone link, destination searches, and direct airline routes at ${width}px`);
    }
    assert.deepEqual(errors, []);
  } finally {
    await closeBrowser?.().catch(() => browser.kill());
    server.httpServer.closeAllConnections();
    await new Promise(resolve => server.httpServer.close(resolve));
    await delay(1000);
    try {
      rmSync(profile, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 });
    } catch (error) {
      console.warn(`Browser profile cleanup: ${error.code} (${profile})`);
    }
  }
});
