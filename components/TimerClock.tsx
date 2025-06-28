'use client';

import { useEffect, useState } from 'react';

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

  return (
    <div className="flex flex-wrap justify-center items-center gap-4 text-[#E62B1E] font-bold text-lg md:text-3xl tracking-wide">
      <div className="text-center">
        <div className="text-3xl">{timeLeft.days}</div>
        <div className="text-sm uppercase">Days</div>
      </div>
      <div className="text-2xl">:</div>
      <div className="text-center">
        <div className="text-3xl">{timeLeft.hours}</div>
        <div className="text-sm uppercase">Hours</div>
      </div>
      <div className="text-2xl">:</div>
      <div className="text-center">
        <div className="text-3xl">{timeLeft.minutes}</div>
        <div className="text-sm uppercase">Minutes</div>
      </div>
      <div className="text-2xl">:</div>
      <div className="text-center">
        <div className="text-3xl">{timeLeft.seconds}</div>
        <div className="text-sm uppercase">Seconds</div>
      </div>
    </div>
  );
}
