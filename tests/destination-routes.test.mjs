import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import test from "node:test";
import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
import { HelmetProvider } from "react-helmet-async";
import { matchRoutes, MemoryRouter, Routes, Route } from "react-router-dom";
import { createServer, preview } from "vite";
import { destinationFromPath } from "../src/components/destinationContent.js";

test("destination routes render reusable content and SEO while preserving existing routes", async () => {
    const server = await createServer({ server: { middlewareMode: true }, appType: "custom" });
    try {
        const { default: Page } = await server.ssrLoadModule("/src/components/CheapFlightsNewYork.jsx");
        const { default: App } = await server.ssrLoadModule("/src/App.jsx");
        const routes = App().props.children.props.children.filter(React.isValidElement).map(route => route.props);

        for (const [slug, name] of [["patna", "Patna"], ["dubai", "Dubai"], ["abcd", "Abcd"], ["new-york-city", "New York City"], ["rio-de-janeiro", "Rio De Janeiro"]]) {
            const path = `/cheap-flights-to-${slug}`;
            const destination = destinationFromPath(path.slice(1));
            assert.equal(destination.name, name);
            assert.equal(matchRoutes(routes, path).at(-1).route.path, slug === "new-york-city" ? path : "/:destinationPath");
            const html = renderToStaticMarkup(React.createElement(HelmetProvider, {}, React.createElement(MemoryRouter, {}, React.createElement(Page, { destination }))));
            assert.ok(html.includes(`<title>Cheap Flights to ${name} | Flight Deals | FlightDealsNow</title>`));
            assert.ok(html.includes(`Planning travel to ${name}?`));
            assert.ok(html.includes(`href="https://flightdealsnow.com${path}"`));
            assert.match(html, new RegExp(`<h1[^>]*>Cheap Flights to.*${name}.*</h1>`));
            assert.ok(html.includes('href="#flight-search"'));
            assert.ok(html.includes('href="#destination-guide"'));
            assert.ok(html.includes('id="destination-guide"'));
            assert.ok(html.includes('id="flight-search"'));
            assert.ok(html.includes(`value="${name}"`));
            if (destination.isNewYork) {
                for (const text of ["Times Square", "JFK", "LaGuardia", "Spring"]) assert.ok(html.includes(text));
            } else {
                assert.doesNotMatch(html, /New York|JFK|LaGuardia|Times Square|Broadway/);
                assert.ok(html.includes("require confirmation"));
            }
        }

        for (const path of ["/contact-us", "/flight-quote", "/thank-you", "/cheap-flights-to-paris", "/cheap-flights-to-los-angeles", "/cheap-flights-to-boston", "/cheap-flights-to-san-francisco"]) {
            assert.equal(matchRoutes(routes, path).at(-1).route.path, path);
        }
        for (const [component, name] of [["CheapFlightsLosAngeles", "Los Angeles"], ["CheapFlightsBoston", "Boston"], ["CheapFlightsParis", "Paris"], ["CheapFlightsSanFrancisco", "San Francisco"]]) {
            const { default: City } = await server.ssrLoadModule('/src/components/' + component + '.jsx');
            const html = renderToStaticMarkup(React.createElement(HelmetProvider, {}, React.createElement(MemoryRouter, {}, React.createElement(City))));
            assert.equal((html.match(/id="flight-search"/g) || []).length, 1);
            assert.ok(html.includes('value="' + name + '"'));
        }
        const { default: Airline } = await server.ssrLoadModule("/src/components/DynamicAirline.jsx");
        for (const [slug, name] of [["abcd", "Abcd"], ["delta-air-lines", "Delta Air Lines"]]) {
            const path = '/airlines/' + slug;
            assert.equal(matchRoutes(routes, path).at(-1).route.path, "/airlines/:airlineSlug");
            const html = renderToStaticMarkup(React.createElement(HelmetProvider, {}, React.createElement(MemoryRouter, { initialEntries: [path] }, React.createElement(Routes, {}, React.createElement(Route, { path: "/airlines/:airlineSlug", element: React.createElement(Airline) })))));
            assert.ok(html.includes('<title>' + name + ' Flight Planning | FlightDealsNow</title>'));
            assert.ok(html.includes('href="https://flightdealsnow.com' + path + '"'));
            assert.ok(html.includes('id="flight-search"'));
            assert.ok(html.includes('require confirmation'));
        }
        assert.equal(matchRoutes(routes, "/airlines/alaska-airlines").at(-1).route.path, "/airlines/alaska-airlines");
        for (const segment of ["unrelated", "cheap-flights-to-", "cheap-flights-to---"]) assert.equal(destinationFromPath(segment), null);
        assert.equal(destinationFromPath("cheap-flights-to-DUBAI").name, "Dubai");
        assert.deepEqual(destinationFromPath("cheap-flights-to--NEW--YORK-CITY-"), {
            name: "New York City",
            path: "/cheap-flights-to-new-york-city",
            isNewYork: true,
        });
        const originalPage = renderToStaticMarkup(React.createElement(HelmetProvider, {}, React.createElement(MemoryRouter, {}, React.createElement(Page))));
        assert.ok(originalPage.includes("Times Square"));
        assert.ok(originalPage.includes("https://flightdealsnow.com/cheap-flights-to-new-york-city"));
        for (const path of ["/cheap-flights-to-patna/", "/cheap-flights-to-dubai?travel=round-trip", "/cheap-flights-to-abcd#destination-guide"]) {
            assert.equal(matchRoutes(routes, path).at(-1).route.path, "/:destinationPath");
        }
        assert.match(readFileSync("netlify.toml", "utf8"), /from = "\/\*"\s+to = "\/index.html"\s+status = 200/);
    } finally {
        await server.close();
    }
});

test("production SPA serves direct destination requests and refreshes", async () => {
    const server = await preview({ preview: { host: "127.0.0.1", port: 0, open: false } });
    try {
        const base = server.resolvedUrls.local[0];
        const home = await (await fetch(base)).text();
        assert.match(home, /<div id="root"><\/div>/);
        for (const path of ["/cheap-flights-to-new-york-city", "/cheap-flights-to-patna", "/cheap-flights-to-dubai", "/cheap-flights-to-abcd", "/airlines/alaska-airlines", "/airlines/abcd"]) {
            for (let request = 0; request < 2; request++) {
                const response = await fetch(new URL(path, base));
                assert.equal(response.status, 200);
                assert.equal(await response.text(), home);
            }
        }
    } finally {
        await new Promise((resolve, reject) => server.httpServer.close(error => error ? reject(error) : resolve()));
    }
});
