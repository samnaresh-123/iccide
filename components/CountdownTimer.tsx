"use client";
import { useEffect, useState } from "react";

const TARGET = new Date("2026-11-27T09:00:00");

function pad(n: number) {
  return String(n).padStart(2, "0");
}

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calc = () => {
      const diff = TARGET.getTime() - Date.now();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / (1000 * 60)) % 60);
      const seconds = Math.floor((diff / 1000) % 60);
      setTimeLeft({ days, hours, minutes, seconds });
    };
    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, []);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="flex gap-3.75 lg:gap-8.75">
      {units.map(({ label, value }) => (
        <div key={label} className="flex flex-col gap-2.5 items-center justify-center text-center">
          <p className="bg-[#E6CFCF] p-5 text-[12px] sm:text-[14px] lg:text-[16px] text-[#650010] font-semibold font-serif min-w-12 text-center">
            {pad(value)}
          </p>
          <p className="text-white text-[14px] sm:text-[18px] lg:text-[22px]">{label}</p>
        </div>
      ))}
    </div>
  );
}
