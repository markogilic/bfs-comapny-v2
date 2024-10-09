import { useState, useEffect } from 'react';
import { TetPointsText } from '../../../emo-result-data/tetPoints-text';
import { EmoResultProgressBar } from '../emo-result-progress-bar';
import { useSelector } from 'react-redux';
import type { RootState } from '@/lib/store';

export const TetResult = () => {
  const [value, setValue] = useState<'mid' | 'hi' | null>(null);
  const { tetPoints } = useSelector((state: RootState) => state.emoTest);
  useEffect(() => {
    if (tetPoints <= 35) setValue('mid');
    if (tetPoints >= 36) setValue('hi');
  }, [tetPoints]);

  return (
    <div className="bg-[#f2e8d5] flex  px-4 py-8 shadow-md rounded-lg">
      <EmoResultProgressBar points={tetPoints} />
      <div className="inline-block h-[250px] min-h-[1em] w-0.5 self-stretch bg-black/45 mr-10"></div>
      <div className="flex flex-col">
        <p className="font-semibold">
          Odnos prema sebi:{' '}
          <span className="uppercase">Intimna emocionalna inteligencija</span>
        </p>
        <p className="mb-4">{TetPointsText['desc']}</p>
        <span className="font-semibold">Zakljucak:</span>
        {value !== null && <p>{TetPointsText[value]}</p>}
      </div>
    </div>
  );
};
