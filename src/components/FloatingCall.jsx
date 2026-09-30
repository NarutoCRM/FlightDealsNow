import img from "../../public/Call Animated Icon.gif";

const PHONE_NUMBER = "+1-888-348-7083";
const DISPLAY_PHONE = "+1-888-348-7083";

const FloatingCall = () => {
  return (
    <a
      href={`tel:${PHONE_NUMBER}`}
      aria-label={`Call an Expert ${DISPLAY_PHONE}`}
      className="
        fixed
        left-1/2
        bottom-5
        z-[9997]
        -translate-x-1/2
        flex
        w-[88%]
        max-w-[360px]
        items-center
        justify-center
        gap-5
        rounded-full
        bg-[#1687d9]
        px-5
        py-3
        text-white
        shadow-xl
        transition-all
        duration-300
        hover:bg-[#123b7a]
        hover:-translate-y-1
        md:hidden
      "
    >
      {/* Phone Icon */}
      <span
        className="
          flex
          h-14
          w-14
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-white/15
        "
      >
        <img
          src={img}
          alt=""
          className="h-9 w-9 object-contain"
        />
      </span>

      {/* Text */}
      <span className="pr-1">
        <span className="block text-[11px] text-white/80">
          Talk to an Expert
        </span>

        <span className="block text-base font-extrabold leading-5 whitespace-nowrap">
          {DISPLAY_PHONE}
        </span>
      </span>
    </a>
  );
};

export default FloatingCall;