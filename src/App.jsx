import { useState } from "react";
import Header from "./components/Header.jsx";
import IntroduceYourself from "./components/IntroduceYourself.jsx";
import ImageSelection from "./components/ImageSelection.jsx";
import NavigationButton from "./components/NavigationButton.jsx";

function App() {
  const [currentPage, setCurrentPage] = useState("landing");
  const [name, setName] = useState("");
  const [city, setCity] = useState("");
  const [introductionStep, setIntroductionStep] = useState("name");
  const [isTakeTestHovered, setIsTakeTestHovered] = useState(false);
  const [isTakeTestFocused, setIsTakeTestFocused] = useState(false);
  const [isDiscoverHovered, setIsDiscoverHovered] = useState(false);
  const [isDiscoverFocused, setIsDiscoverFocused] = useState(false);
  const isTakeTestActive = isTakeTestHovered || isTakeTestFocused;
  const isDiscoverActive = isDiscoverHovered || isDiscoverFocused;

  if (currentPage === "introduction") {
    return (
      <IntroduceYourself
        onBack={() => setCurrentPage("landing")}
        onProceed={() => setCurrentPage("imageSelection")}
        name={name}
        setName={setName}
        city={city}
        setCity={setCity}
        step={introductionStep}
        setStep={setIntroductionStep}
      />
    );
  }

  if (currentPage === "imageSelection") {
    return (
      <ImageSelection onBack={() => setCurrentPage("introduction")} />
    );
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#FCFCFC]">
      <Header />

      <div
        aria-hidden="true"
        className={`pointer-events-none absolute left-0 top-1/2 aspect-square w-[clamp(220px,22.1875vw,426px)] -translate-x-1/2 -translate-y-1/2 rotate-45 border-2 border-dotted border-[#A0A4AB] transition-opacity duration-600 ease-in-out motion-reduce:transition-none ${
          isTakeTestActive ? "opacity-0" : "opacity-100"
        }`}
      />
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute right-0 top-1/2 aspect-square w-[clamp(220px,22.1875vw,426px)] translate-x-1/2 -translate-y-1/2 rotate-45 border-2 border-dotted border-[#A0A4AB] transition-opacity duration-600 ease-in-out motion-reduce:transition-none ${
          isDiscoverActive ? "opacity-0" : "opacity-100"
        }`}
      />
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute left-0 top-1/2 aspect-square w-[clamp(249px,25.1172vw,482.25px)] -translate-x-1/2 -translate-y-1/2 rotate-45 border-2 border-dotted border-[#A0A4AB] transition-opacity duration-600 ease-in-out motion-reduce:transition-none ${
          isDiscoverActive ? "opacity-60" : "opacity-0"
        }`}
      />
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute left-0 top-1/2 aspect-square w-[clamp(278px,28.0635vw,538.82px)] -translate-x-1/2 -translate-y-1/2 rotate-45 border-2 border-dotted border-[#A0A4AB] transition-opacity duration-600 ease-in-out motion-reduce:transition-none ${
          isDiscoverActive ? "opacity-30" : "opacity-0"
        }`}
      />
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute right-0 top-1/2 aspect-square w-[clamp(249px,25.1172vw,482.25px)] translate-x-1/2 -translate-y-1/2 rotate-45 border-2 border-dotted border-[#A0A4AB] transition-opacity duration-600 ease-in-out motion-reduce:transition-none ${
          isTakeTestActive ? "opacity-60" : "opacity-0"
        }`}
      />
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute right-0 top-1/2 aspect-square w-[clamp(278px,28.0635vw,538.82px)] translate-x-1/2 -translate-y-1/2 rotate-45 border-2 border-dotted border-[#A0A4AB] transition-opacity duration-600 ease-in-out motion-reduce:transition-none ${
          isTakeTestActive ? "opacity-30" : "opacity-0"
        }`}
      />

      <div
        aria-hidden={isTakeTestActive}
        inert={isTakeTestActive}
        className={`absolute left-8 top-1/2 z-20 flex h-20 w-56 -translate-y-1/2 items-center justify-start transition-opacity duration-300 ease-in-out motion-reduce:transition-none ${
          isTakeTestActive ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
        onMouseEnter={() => {
          if (
            window.matchMedia(
              "(min-width: 1024px) and (hover: hover) and (pointer: fine)",
            ).matches
          ) {
            setIsDiscoverHovered(true);
            setIsTakeTestHovered(false);
            setIsTakeTestFocused(false);
          }
        }}
        onMouseLeave={() => setIsDiscoverHovered(false)}
      >
        <NavigationButton
          label="Discover A.I."
          direction="left"
          expanded={isDiscoverActive}
          onClick={() => {}}
          onFocus={(event) => {
            if (event.currentTarget.matches(":focus-visible")) {
              setIsDiscoverFocused(true);
              setIsTakeTestHovered(false);
              setIsTakeTestFocused(false);
            }
          }}
          onBlur={() => setIsDiscoverFocused(false)}
        />
      </div>
      <div
        aria-hidden={isDiscoverActive}
        inert={isDiscoverActive}
        className={`absolute right-8 top-1/2 z-20 flex h-20 w-48 -translate-y-1/2 items-center justify-end transition-opacity duration-300 ease-in-out motion-reduce:transition-none ${
          isDiscoverActive ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
        onMouseEnter={() => {
          if (
            window.matchMedia(
              "(min-width: 1024px) and (hover: hover) and (pointer: fine)",
            ).matches
          ) {
            setIsTakeTestHovered(true);
            setIsDiscoverHovered(false);
            setIsDiscoverFocused(false);
          }
        }}
        onMouseLeave={() => setIsTakeTestHovered(false)}
      >
        <NavigationButton
          label="Take Test"
          direction="right"
          expanded={isTakeTestActive}
          onClick={() => {
            setIsTakeTestHovered(false);
            setIsTakeTestFocused(false);
            setCurrentPage("introduction");
          }}
          onFocus={(event) => {
            if (event.currentTarget.matches(":focus-visible")) {
              setIsTakeTestFocused(true);
              setIsDiscoverHovered(false);
              setIsDiscoverFocused(false);
            }
          }}
          onBlur={() => setIsTakeTestFocused(false)}
        />
      </div>

      <main className="absolute inset-0 flex items-center justify-center px-4">
        <h1
          className={`absolute left-1/2 top-1/2 w-[calc(100%-2rem)] max-w-170 -translate-y-1/2 text-[clamp(40px,6.6667vw,128px)] font-light leading-[0.9375] tracking-[-0.07em] text-[#1A1B1C] transition-[translate] duration-1200 ease-[cubic-bezier(0.25,1,0.5,1)] motion-reduce:transition-none ${
            isTakeTestActive
              ? "translate-x-[calc(2rem-50vw)] text-left"
              : isDiscoverActive
                ? "translate-x-[calc(50vw-2rem-100%)] text-right"
                : "-translate-x-1/2 text-center"
          }`}
        >
          <span className="block">Sophisticated</span>
          <span className="block">skincare</span>
        </h1>
        <p className="absolute bottom-6.5 left-8 w-full max-w-79 text-left text-[14px] font-normal leading-6 tracking-normal text-[#1A1B1C] uppercase">
          Skinstric developed an A.I. that creates a highly-personalised routine
          tailored to what your skin needs.
        </p>
      </main>
    </div>
  );
}

export default App;
