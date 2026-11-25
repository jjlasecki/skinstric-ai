export default function NavigationButton({ label, direction, onClick }) {
  const isLeft = direction === "left";

  const icon = (
    <span
      aria-hidden="true"
      className="relative flex h-11 w-11 shrink-0 items-center justify-center"
    >
      <span className="h-[31.1px] w-[31.1px] rotate-45 border border-solid border-[#1A1B1C]" />
      <span
        className={`absolute h-[10.89px] w-[9.43px] bg-[#1A1B1C] ${
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
      className="flex h-11 items-center gap-4 bg-transparent text-[14px] font-semibold leading-4 uppercase tracking-[-0.02em] text-[#1A1B1C]/70"
    >
      {isLeft && icon}
      <span>{label}</span>
      {!isLeft && icon}
    </button>
  );
}
