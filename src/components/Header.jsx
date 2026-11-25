export default function Header({ location = "INTRO" }) {
  return (
    <header className="relative z-10 flex h-16 w-full items-center justify-between px-8">
      <div className="flex items-center gap-4 text-[#1A1B1C]">
        <span className="text-[14px] font-semibold leading-4 tracking-[-0.02em] uppercase">
          SKINSTRIC
        </span>

        <span className="text-[14px] font-semibold leading-4 tracking-[-0.02em] uppercase">
          [ {location} ]
        </span>
      </div>

      <button
        type="button"
        className="h-8 w-23 bg-[#1A1B1C] text-[10px] font-semibold leading-4 tracking-[-0.02em] text-[#FCFCFC] uppercase"
      >
        ENTER CODE
      </button>
    </header>
  );
}