'use client';

import { useEffect, useState } from 'react';
import clsx from 'clsx';

export default function CountdownTimer() {
  const targetDate = new Date('2025-08-22T10:00:00');

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      return {
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00',
      };
    }

    const days = String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(2, '0');
    const hours = String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(2, '0');
    const minutes = String(Math.floor((difference / 1000 / 60) % 60)).padStart(2, '0');
    const seconds = String(Math.floor((difference / 1000) % 60)).padStart(2, '0');

    return { days, hours, minutes, seconds };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const boxStyle = "transition-all duration-500 ease-in-out transform hover:scale-105 bg-white/10 backdrop-blur-md shadow-xl rounded-xl px-4 py-2 border border-white/20";

  return (
    <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 text-[#E62B1E] font-extrabold text-xl md:text-4xl tracking-widest">
      <TimeBox label="Days" value={timeLeft.days} style={boxStyle} />
      <Colon />
      <TimeBox label="Hours" value={timeLeft.hours} style={boxStyle} />
      <Colon />
      <TimeBox label="Minutes" value={timeLeft.minutes} style={boxStyle} />
      <Colon />
      <TimeBox label="Seconds" value={timeLeft.seconds} style={boxStyle} />
    </div>
  );
}

function TimeBox({ label, value, style }: { label: string; value: string; style: string }) {
  return (
    <div className={clsx("flex flex-col items-center", style)}>
      <div className="text-5xl md:text-6xl animate-pulse">{value}</div>
      <div className="text-xs md:text-sm uppercase text-white/80 tracking-wider">{label}</div>
    </div>
  );
}

function Colon() {
  return <div className="text-4xl md:text-5xl text-white animate-bounce">:</div>;
}
