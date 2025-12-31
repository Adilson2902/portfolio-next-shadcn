"use client";

import { useEffect, useState } from "react";

interface CountdownProps {
  targetDate: Date;
  onComplete?: () => void;
}

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function Countdown({ targetDate, onComplete }: CountdownProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        if (onComplete) onComplete();
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate, onComplete]);

  return (
    <div className="flex gap-4 justify-center">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="flex flex-col items-center">
          <div className="glass-effect px-6 py-4 rounded-2xl border border-purple-500/30 min-w-[80px]">
            <span className="text-4xl font-bold gradient-text">
              {value.toString().padStart(2, "0")}
            </span>
          </div>
          <span className="text-sm text-gray-400 mt-2 capitalize">{unit}</span>
        </div>
      ))}
    </div>
  );
}
