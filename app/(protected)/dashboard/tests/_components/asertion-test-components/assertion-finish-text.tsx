import { assertionPointsData } from '@/result-data/assertion-result-data';
import { useSelector } from 'react-redux';
import type { RootState } from '@/lib/store';
import { useState, useEffect } from 'react';

export const AssertionFinishText = () => {
  const { points } = useSelector((state: RootState) => state.assertionTest);
  const [level, setLevel] = useState<'low' | 'mid' | 'hi' | ''>('');

  useEffect(() => {
    if (points < 20) setLevel('low');
    if (points >= 20 && points < 35) setLevel('mid');
    if (points >= 35) setLevel('hi');
  }, [points]);

  return (
    <div className=" lg:w-[600px] w-full flex flex-col gap-4">
      <h1 className="font-semibold">Hvala vam što ste završili test!</h1>
      {level ? <p>{assertionPointsData[level]}</p> : <p>Loading....</p>}
    </div>
  );
};
