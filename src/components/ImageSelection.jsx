import Header from "./Header.jsx";
import NavigationButton from "./NavigationButton.jsx";
import camera from "../assets/camera.svg";
import cameraConnector from "../assets/camera-connector.svg";
import gallery from "../assets/gallery.svg";
import galleryConnector from "../assets/gallery-connector.svg";

function Rhombuses({ className = "" }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none absolute ${className}`}>
      <div className="absolute left-1/2 top-1/2 h-[340.83px] w-[340.83px] -translate-x-1/2 -translate-y-1/2">
        <div className="h-full w-full animate-diamond-outer motion-reduce:animate-none">
          <div className="h-full w-full rotate-45 border-2 border-dotted border-[#A0A4AB] opacity-30" />
        </div>
      </div>
      <div className="absolute left-1/2 top-1/2 h-[314.20px] w-[314.20px] -translate-x-1/2 -translate-y-1/2">
        <div className="h-full w-full animate-diamond-middle motion-reduce:animate-none">
          <div className="h-full w-full rotate-45 border-2 border-dotted border-[#A0A4AB] opacity-60" />
        </div>
      </div>
      <div className="absolute left-1/2 top-1/2 h-[286.51px] w-[286.51px] -translate-x-1/2 -translate-y-1/2">
        <div className="h-full w-full animate-diamond-inner motion-reduce:animate-none">
          <div className="h-full w-full rotate-45 border-2 border-dotted border-[#A0A4AB]" />
        </div>
      </div>
    </div>
  );
}

export default function ImageSelection({ onBack }) {
  return (
    <div className="relative min-h-screen overflow-y-auto bg-[#FCFCFC] lg:overflow-hidden">
      <Header showEnterCode={false} />

      <p className="absolute left-8 top-21.5 z-10 text-[16px] font-semibold leading-6 tracking-[-0.02em] text-[#1A1B1C]">
        TO START ANALYSIS
      </p>

      <main className="absolute inset-x-0 top-1/2 hidden h-[482px] -translate-y-1/2 lg:block">
        <button
          type="button"
          aria-label="Use camera"
          className="absolute left-[calc(25%-241px)] top-0 h-[482px] w-[520px] origin-[241px_241px] scale-[0.75] bg-transparent text-left focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#1A1B1C] xl:scale-[0.85] 2xl:scale-100"
        >
          <Rhombuses className="left-[70.585px] top-[70.585px] h-[340.83px] w-[340.83px]" />
          <img
            src={camera}
            alt=""
            aria-hidden="true"
            className="absolute left-[173px] top-[173px] h-[136px] w-[136px]"
          />
          <div className="absolute left-[281px] top-[126px] h-[76px] w-[239px]">
            <img
              src={cameraConnector}
              alt=""
              aria-hidden="true"
              className="absolute left-0 top-[17px] h-[59px] w-[66px]"
            />
            <p className="absolute left-[72px] top-0 h-12 w-[167px] text-left text-[14px] font-normal leading-6 tracking-[0] text-[#1A1B1C] uppercase">
              <span className="block">ALLOW A.I.</span>
              <span className="block">TO SCAN YOUR FACE</span>
            </p>
          </div>
        </button>

        <button
          type="button"
          aria-label="Use gallery"
          className="absolute left-[calc(75%-247px)] top-0 h-[482px] w-[488px] origin-[247px_241px] scale-[0.75] bg-transparent text-left focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-[#1A1B1C] xl:scale-[0.85] 2xl:scale-100"
        >
          <Rhombuses className="left-[76.585px] top-[70.585px] h-[340.83px] w-[340.83px]" />
          <img
            src={gallery}
            alt=""
            aria-hidden="true"
            className="absolute left-[179px] top-[173px] h-[136px] w-[136px]"
          />
          <div className="absolute left-0 top-[281px] h-[93px] w-[210px]">
            <img
              src={galleryConnector}
              alt=""
              aria-hidden="true"
              className="absolute left-[143.67px] top-0 h-[59.37px] w-[66.33px]"
            />
            <p className="absolute left-0 top-[45px] h-12 w-[136px] text-right text-[14px] font-normal leading-6 tracking-[0] text-[#1A1B1C] uppercase">
              <span className="block">ALLOW A.I.</span>
              <span className="block">ACCESS GALLERY</span>
            </p>
          </div>
        </button>
      </main>

      <main className="mx-auto flex w-full flex-col items-center gap-28 px-8 pb-32 pt-24 lg:hidden">
        <button
          type="button"
          aria-label="Use camera"
          className="relative flex h-[220px] w-[220px] shrink-0 items-center justify-center bg-transparent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1A1B1C]"
        >
          <Rhombuses className="left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 [&>*]:scale-[0.646]" />
          <img src={camera} alt="" aria-hidden="true" className="relative z-10 h-24 w-24" />
          <p className="absolute -bottom-12 left-1/2 w-64 -translate-x-1/2 text-center text-[14px] font-normal leading-6 tracking-[0] text-[#1A1B1C] uppercase">
            ALLOW A.I. TO SCAN YOUR FACE
          </p>
        </button>

        <button
          type="button"
          aria-label="Use gallery"
          className="relative flex h-[220px] w-[220px] shrink-0 items-center justify-center bg-transparent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#1A1B1C]"
        >
          <Rhombuses className="left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 [&>*]:scale-[0.646]" />
          <img src={gallery} alt="" aria-hidden="true" className="relative z-10 h-24 w-24" />
          <p className="absolute -bottom-12 left-1/2 w-64 -translate-x-1/2 text-center text-[14px] font-normal leading-6 tracking-[0] text-[#1A1B1C] uppercase">
            ALLOW A.I. ACCESS GALLERY
          </p>
        </button>
      </main>

      <div className="relative z-20 mb-9 ml-8 lg:absolute lg:bottom-9 lg:left-8 lg:m-0">
        <NavigationButton label="Back" direction="left" onClick={onBack} />
      </div>
    </div>
  );
}
