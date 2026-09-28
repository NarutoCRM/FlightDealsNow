const PHONE_NUMBER = "(888) 348-7083"
const DISPLAY_PHONE = "(888) 348-7083"

const FloatingCall = () => {
  return (
    <a
      href={`tel:${PHONE_NUMBER}`}
      aria-label={`Call an Expert ${DISPLAY_PHONE}`}
      className="
        fixed
        right-4
        bottom-4
        z-[9997]

        flex
        items-center
        gap-3

        rounded-full
        bg-[#1687d9]
        px-4
        py-3

        text-white
        shadow-xl

        hover:bg-[#123b7a]
        hover:-translate-y-1
        transition-all
        duration-300

        md:hidden
      "
    >
      {/* Phone Icon */}
      <span
        className="
          flex
          h-10
          w-10
          shrink-0
          items-center
          justify-center
          rounded-full
          bg-white/15
          text-xl
        "
      >

      </span>

      {/* Text */}
      <span className="pr-1">
        <span className="block text-[11px] text-white/80">
          Talk to an Expert
        </span>

        <span className="block text-base font-extrabold leading-5">
          {DISPLAY_PHONE}
        </span>
      </span>
    </a>
  )
}

export default FloatingCall