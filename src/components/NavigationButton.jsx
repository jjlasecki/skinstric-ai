export default function NavigationButton({
  label,
  direction,
  onClick,
  expanded = false,
  onFocus,
  onBlur,
}) {
  const isLeft = direction === "left";

  const icon = (
    <span
      aria-hidden="true"
      className={`relative flex shrink-0 items-center justify-center transition-[height,width] duration-400 ease-in-out motion-reduce:transition-none ${
        expanded ? "h-19.5 w-19.5" : "h-11 w-11"
      }`}
    >
      <span
        className={`absolute rotate-45 border border-solid border-[#1A1B1C] transition-[height,width] duration-400 ease-in-out motion-reduce:transition-none ${
          expanded ? "h-[55.15px] w-[55.15px]" : "h-[31.1px] w-[31.1px]"
        }`}
      />
      <span
        className={`absolute rotate-45 border border-dashed border-[#1A1B1C] transition-[height,width,opacity] duration-400 ease-in-out motion-reduce:transition-none ${
          expanded
            ? "h-[42.7px] w-[42.7px] opacity-100"
            : "h-0 w-0 opacity-0"
        }`}
      />
      <span
        className={`absolute bg-[#1A1B1C] transition-[height,width,transform] duration-400 ease-in-out motion-reduce:transition-none ${
          expanded ? "h-[8.72px] w-[7.55px]" : "h-[10.89px] w-[9.43px]"
        } ${
          isLeft
            ? "-translate-x-px [clip-path:polygon(100%_0,100%_100%,0_50%)]"
            : "translate-x-px [clip-path:polygon(0_0,100%_50%,0_100%)]"
        }`}
      />
    </span>
  );

  return (
    <button
      type="button"
      onClick={onClick}
      onFocus={onFocus}
      onBlur={onBlur}
      className={`flex items-center bg-transparent text-[14px] font-semibold leading-4 uppercase tracking-[-0.02em] transition-[gap,height,color] duration-400 ease-in-out motion-reduce:transition-none ${
        expanded ? "h-19.5 gap-6 text-[#1A1B1C]" : "h-11 gap-4 text-[#1A1B1C]/70"
      }`}
    >
      {isLeft && icon}
      <span>{label}</span>
      {!isLeft && icon}
    </button>
  );
}
