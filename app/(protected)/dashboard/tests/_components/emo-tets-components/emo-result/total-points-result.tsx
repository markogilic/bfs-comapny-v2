import { useState, useEffect } from 'react';
import { totalPointsText } from '../../../emo-result-data/totalPoints-text';
import { TotalPointsProgressBar } from '../../total-points-progress-bar';
import { useSelector } from 'react-redux';
import type { RootState } from '@/lib/store';

export const TotalPointsResult = () => {
  const [value, setValue] = useState<'low' | 'mid' | 'hi' | null>(null);
  const { totalPoints } = useSelector((state: RootState) => state.emoTest);
  useEffect(() => {
    if (totalPoints <= 80) setValue('low');
    if (totalPoints >= 81 && totalPoints <= 120) setValue('mid');
    if (totalPoints >= 121) setValue('hi');
  }, [totalPoints]);

  return (
    <div className="bg-[#f2e8d5] flex  px-4 py-8 shadow-md rounded-lg">
      <TotalPointsProgressBar points={totalPoints} />
      <div className="inline-block h-[250px] min-h-[1em] w-0.5 self-stretch bg-black/45 mr-10"></div>
      <div>
        <p className="font-semibold mb-6">
          <span className="uppercase">Emocionalna inteligencija</span>{' '}
        </p>

        <span className="font-semibold">Zakljucak:</span>
        {value !== null && <p>{totalPointsText[value]}</p>}
      </div>
    </div>
  );
};
