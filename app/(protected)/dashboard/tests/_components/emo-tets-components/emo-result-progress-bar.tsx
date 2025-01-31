'use client';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useEffect, useState, useRef } from 'react';

export const EmoResultProgressBar = ({
  points,
  maxPoints,
}: {
  points: number;
  maxPoints?: number;
}) => {
  const [count, setCount] = useState<number>(0);
  const MAXPOINTS = maxPoints ? maxPoints : 56;
  const result = (points / MAXPOINTS) * 100;
  const interval = useRef<any>(null);

  useEffect(() => {
    if (count < result) {
      interval.current = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 30);
    }
    return () => {
      clearInterval(interval.current);
    };
  }, [count, result]);

  return (
    <div className=" lg:w-[200px] w-[150px] flex flex-col justify-center items-center lg:gap-8 gap-4 px-4   py-8 rounded-lg">
      <div className="  lg:w-[100px] w-[75px]  ">
        <CircularProgressbar
          value={count}
          text={`${count}%`}
          styles={{
            root: {
              width: '100%',
              height: '100%',
            },
            path: {
              stroke: '#ec6e15',
            },
            trail: {
              stroke: '#fff',
            },
            text: {
              fill: '#000',
              fontSize: '18px',
              fontWeight: 'bold',
            },
          }}
        />
      </div>
      <p className="text-black/95 text-sm text-center font-semibold ">
        Procentualni broj osvojenih poena{' '}
      </p>
    </div>
  );
};
