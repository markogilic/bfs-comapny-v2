'use client';
import { useState, useEffect, useRef } from 'react';

export const TotalPointsProgressBar = ({ points }: { points: number }) => {
  const [count, setCount] = useState<number>(0);
  const interval = useRef<any>(null);
  useEffect(() => {
    if (count < points) {
      interval.current = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 30);
    }
    return () => {
      clearInterval(interval.current);
    };
  }, [count, points]);
  return (
    <div className="w-[200px] flex flex-col justify-center items-center gap-8 px-4   py-8 rounded-lg">
      <span className="text-7xl  font-semibold text-btn-primary">{count}</span>
      <p className="text-black/95 text-sm text-center font-semibold ">
        Procentualni broj osvojenih poena iz emocionalne inteligecije{' '}
      </p>
    </div>
  );
};
