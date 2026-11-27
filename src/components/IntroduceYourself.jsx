import { useRef, useState } from "react";
import Header from "./Header.jsx";
import NavigationButton from "./NavigationButton.jsx";

const normalizeValidEntry = (value) => {
  const normalizedValue = value.trim();
  const isValid = /^[\p{L}\p{M}]+(?:\s+[\p{L}\p{M}]+)*$/u.test(normalizedValue);

  return isValid ? normalizedValue : null;
};

export default function IntroduceYourself({
  onBack,
  onProceed,
  name,
  setName,
  city,
  setCity,
  step,
  setStep,
}) {
  const [errorMessage, setErrorMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const submissionPendingRef = useRef(false);

  const isNameStep = step === "name";
  const isCityStep = step === "city";
  const isCityLayout = !isNameStep;

  const handleNameKeyDown = (event) => {
    if (event.key !== "Enter") return;
    event.preventDefault();

    const validName = normalizeValidEntry(name);
    if (!validName) {
      setName("");
      setErrorMessage("Please enter a valid name without numbers or special characters");
      return;
    }

    setName(validName);
    setErrorMessage("");
    setStep("city");
  };

  const handleCityKeyDown = (event) => {
    if (event.key !== "Enter") return;
    event.preventDefault();

    const validCity = normalizeValidEntry(city);
    if (!validCity) {
      setCity("");
      setErrorMessage("Please enter a valid city without numbers or special characters");
      return;
    }

    setCity(validCity);
    setErrorMessage("");
    setStep("complete");
  };

  const handleProceed = async () => {
    if (submissionPendingRef.current) return;

    const validName = normalizeValidEntry(name);
    const validCity = normalizeValidEntry(city);

    if (!validName) {
      setErrorMessage("Please enter a valid name without numbers or special characters");
      setStep("name");
      return;
    }

    if (!validCity) {
      setErrorMessage("Please enter a valid city without numbers or special characters");
      setStep("city");
      return;
    }

    setName(validName);
    setCity(validCity);
    setErrorMessage("");
    submissionPendingRef.current = true;
    setIsSubmitting(true);

    try {
      const response = await fetch(
        "https://us-central1-api-skinstric-ai.cloudfunctions.net/skinstricPhaseOne",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: validName,
            location: validCity,
          }),
        },
      );

      if (!response.ok) {
        throw new Error(`Submission failed (${response.status} ${response.statusText})`);
      }

      const data = await response.json();
      console.log("Skinstric API response:", data);
      onProceed();
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? `Unable to submit. ${error.message}. Please try again.`
          : "Unable to submit. Please try again.",
      );
    } finally {
      submissionPendingRef.current = false;
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#FCFCFC]">
      <Header showEnterCode={false} />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[clamp(220px,22.1875vw,426px)] -translate-x-1/2 -translate-y-1/2 rotate-45 animate-diamond-inner border-2 border-dotted border-[#A0A4AB] motion-reduce:animate-none"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[clamp(249px,25.1172vw,482.25px)] -translate-x-1/2 -translate-y-1/2 rotate-45 animate-diamond-middle border-2 border-dotted border-[#A0A4AB] opacity-60 motion-reduce:animate-none"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 aspect-square w-[clamp(278px,28.0635vw,538.82px)] -translate-x-1/2 -translate-y-1/2 rotate-45 animate-diamond-outer border-2 border-dotted border-[#A0A4AB] opacity-30 motion-reduce:animate-none"
      />

      <p className="absolute left-8 top-21.5 z-10 text-[16px] font-semibold leading-6 tracking-[-0.02em] text-[#1A1B1C]">
        TO START ANALYSIS
      </p>

      <div
        className={`absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-[clamp(24px,3.125vw,60px)] ${
          isCityLayout
            ? "w-[min(488px,calc(100vw-64px))]"
            : "w-[min(420px,calc(100vw-64px))]"
        }`}
      >
        <div className="absolute bottom-16.5 left-1/2 flex w-full -translate-x-1/2 flex-col items-center text-center">
          <p className="whitespace-nowrap text-[14px] font-normal leading-6 tracking-normal text-[#1A1B1C]/40">
            {step === "complete" ? "WHERE ARE YOU FROM?" : "CLICK TO TYPE"}
          </p>
          {errorMessage && (
            <p
              id="introduce-yourself-error"
              role="alert"
              className="w-full text-[14px] font-normal leading-6 text-red-600"
            >
              {errorMessage}
            </p>
          )}
        </div>

        {step === "complete" ? (
          <p className="min-h-16 w-full text-center font-normal leading-16 tracking-[-0.07em] text-[#1A1B1C]">
            <span className="relative inline-block max-w-full wrap-break-word after:absolute after:bottom-0 after:-left-px after:-right-px after:h-px after:bg-[#1A1B1C] after:content-['']">
              {city}
            </span>
          </p>
        ) : (
          <>
            <label className="sr-only" htmlFor="introduce-yourself-name">
              {isNameStep ? "Introduce Yourself" : "Where are you from?"}
            </label>
            <input
              id="introduce-yourself-name"
              type="text"
              value={isNameStep ? name : city}
              aria-invalid={Boolean(errorMessage)}
              aria-describedby={errorMessage ? "introduce-yourself-error" : undefined}
              onChange={(event) => {
                if (isNameStep) {
                  setName(event.target.value);
                } else {
                  setCity(event.target.value);
                }
              }}
              onKeyDown={isNameStep ? handleNameKeyDown : handleCityKeyDown}
              placeholder={isNameStep ? "Introduce Yourself" : "Where are you from?"}
              className="peer h-16 w-full bg-transparent text-center font-normal leading-16 tracking-[-0.07em] text-[#1A1B1C] placeholder:text-[#1A1B1C] placeholder:opacity-100 focus:outline-none"
            />
            <span
              aria-hidden="true"
              className={`absolute bottom-0 left-1/2 block h-px -translate-x-1/2 bg-[#1A1B1C] peer-focus:h-0.5 ${
                isCityStep
                  ? "w-[min(8.0167em,calc(100vw-64px))]"
                  : "w-[min(6.95em,calc(100vw-64px))]"
              }`}
            />
          </>
        )}
      </div>

      <div className="absolute bottom-9 left-8 z-20">
        <NavigationButton
          label="Back"
          direction="left"
          onClick={onBack}
        />
      </div>
      {step === "complete" && (
        <div
          className="absolute bottom-9 right-8 z-20"
          aria-busy={isSubmitting}
        >
          <NavigationButton
            label="Proceed"
            direction="right"
            onClick={handleProceed}
          />
        </div>
      )}
    </div>
  );
}
