import Header from "./components/Header.jsx";

function App() {
  return (
    <div className="relative min-h-screen bg-[#FCFCFC]">
      <Header />

      <main className="absolute inset-0 flex items-center justify-center px-4">
        <h1 className="w-full max-w-2xl text-center text-[clamp(40px,6.6667vw,128px)] font-light leading-[0.9375] tracking-[-0.07em] text-[#1A1B1C]">
          <span className="block">Sophisticated</span>
          <span className="block">skincare</span>
        </h1>
      </main>
    </div>
  )
}

export default App