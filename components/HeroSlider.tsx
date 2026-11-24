"use client";
import { useEffect, useState, useCallback } from "react";

interface HeroSliderProps {
  title: string;
  date?: string;
}

const slides = [
  { id: 1, imgUrl: "/pic1.avif" },
  { id: 2, imgUrl: "/banner1.avif" },
  { id: 3, imgUrl: "/3.avif" },
  { id: 4, imgUrl: "/pic1.avif" },
];

export default function HeroSlider({ title, date }: HeroSliderProps) {
  const [current, setCurrent] = useState(0);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, []);

  const next = useCallback(() => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, []);

  // Auto-advance slides every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      next();
    }, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <div className="w-full h-[250px] sm:h-[350px] lg:h-[450px]">
      <div
        className="w-full h-full flex justify-center items-center text-center bg-no-repeat bg-cover bg-center px-[20px] relative transition-all duration-700 select-none"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("${slides[current]?.imgUrl}")`,
        }}
      >
        {/* Left Arrow Button */}
        <button
          type="button"
          aria-label="Previous Slide"
          onClick={prev}
          className="z-20 absolute top-[45%] left-2 text-white hover:text-[#E6CFCF] cursor-pointer p-1 transition-colors"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 320 512"
            height="30"
            width="30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M34.52 239.03L228.87 44.69c9.37-9.37 24.57-9.37 33.94 0l22.67 22.67c9.36 9.36 9.37 24.52.04 33.9L131.49 256l154.02 154.75c9.34 9.38 9.32 24.54-.04 33.9l-22.67 22.67c-9.37 9.37-24.57 9.37-33.94 0L34.52 272.97c-9.37-9.37-9.37-24.57 0-33.94z" />
          </svg>
        </button>

        {/* Video for Slide 0 */}
        <div className="absolute w-full h-full top-0 left-0 overflow-hidden">
          {current === 0 && (
            <video
              autoPlay
              muted
              loop
              playsInline
              className="h-full w-full object-cover transition-opacity duration-700"
            >
              <source src="/intro.mp4" type="video/mp4" />
            </video>
          )}
        </div>

        {/* Right Arrow Button */}
        <button
          type="button"
          aria-label="Next Slide"
          onClick={next}
          className="z-20 absolute top-[45%] right-2 text-white hover:text-[#E6CFCF] cursor-pointer p-1 transition-colors"
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 320 512"
            height="30"
            width="30"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z" />
          </svg>
        </button>

        {/* Title Overlay */}
        <div className="flex flex-col items-center gap-2 z-10 mx-[30px] max-w-[700px]">
          <h1 className="text-[16px] sm:text-[22px] lg:text-[28px] font-serif font-semibold text-white drop-shadow-md text-center">
            {title}
          </h1>
          {date && (
            <p className="text-[15px] sm:text-[19px] lg:text-[22px] font-serif font-medium text-white/95 drop-shadow-md tracking-wide">
              {date}
            </p>
          )}
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-3 flex gap-2 z-20">
          {slides.map((s, index) => (
            <button
              key={s.id}
              onClick={() => setCurrent(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                current === index ? "w-8 bg-white" : "w-2.5 bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
