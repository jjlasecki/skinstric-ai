import Header from "./components/Header.jsx";
import NavigationButton from "./components/NavigationButton.jsx";

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#FCFCFC]">
      <Header />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-0 top-1/2 aspect-square w-[clamp(220px,22.1875vw,426px)] -translate-x-1/2 -translate-y-1/2 rotate-45 border-2 border-dotted border-[#A0A4AB]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/2 aspect-square w-[clamp(220px,22.1875vw,426px)] translate-x-1/2 -translate-y-1/2 rotate-45 border-2 border-dotted border-[#A0A4AB]"
      />

      <div className="absolute left-8 top-1/2 z-20 -translate-y-1/2">
        <NavigationButton label="Discover A.I." direction="left" onClick={() => {}} />
      </div>
      <div className="absolute right-8 top-1/2 z-20 -translate-y-1/2">
        <NavigationButton label="Take Test" direction="right" onClick={() => {}} />
      </div>

      <main className="absolute inset-0 flex items-center justify-center px-4">
        <h1 className="w-full max-w-170 text-center text-[clamp(40px,6.6667vw,128px)] font-light leading-[0.9375] tracking-[-0.07em] text-[#1A1B1C]">
          <span className="block">Sophisticated</span>
          <span className="block">skincare</span>
        </h1>
        <p className="absolute bottom-6.5 left-8 w-full max-w-79 text-left text-[14px] font-normal leading-6 tracking-normal text-[#1A1B1C] uppercase">
          Skinstric developed an A.I. that creates a highly-personalised routine tailored to what your skin needs.
        </p>
      </main>
    </div>
  )
}

export default App