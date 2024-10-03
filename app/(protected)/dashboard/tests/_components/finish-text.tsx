import { resultText } from '@/lib/result-text';
import { useSelector } from 'react-redux';
import type { RootState } from '@/lib/store';
import { useState, useEffect } from 'react';

type Level = 'low' | 'mid' | 'high' | '';

export const FinishText = () => {
  const { questions, points } = useSelector((state: RootState) => state.test);
  const [level, setLevel] = useState<Level>('');
  const result = (points / questions.length) * 100;

  useEffect(() => {
    if (result < 40) setLevel('low');
    if (result >= 40 && result < 70) setLevel('mid');
    if (result >= 70) setLevel('high');
  }, [result]);

  return (
    <div className="w-[600px] flex flex-col gap-4">
      <h1 className="font-semibold">Hvala vam što ste završili test!</h1>
      {level ? (
        resultText[level].map((text: { p: string }, index: number) => (
          <p key={index}>{text.p}</p>
        ))
      ) : (
        <p>Loding....</p>
      )}
    </div>
  );
};
