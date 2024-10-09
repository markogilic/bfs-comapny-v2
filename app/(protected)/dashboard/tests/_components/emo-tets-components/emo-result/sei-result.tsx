import { useState, useEffect } from 'react';
import { SeiPointsText } from '../../../emo-result-data/seiPoints-text';
import { EmoResultProgressBar } from '../emo-result-progress-bar';
import { useSelector } from 'react-redux';
import type { RootState } from '@/lib/store';

export const SeiResult = () => {
  const [value, setValue] = useState<'mid' | 'hi' | null>(null);
  const { seiPoints } = useSelector((state: RootState) => state.emoTest);
  useEffect(() => {
    if (seiPoints <= 35) setValue('mid');
    if (seiPoints >= 36) setValue('hi');
  }, [seiPoints]);

  return (
    <div className="bg-[#f2e8d5] flex  px-4 py-8 shadow-md rounded-lg">
      <EmoResultProgressBar points={seiPoints} />
      <div className="inline-block h-[250px] min-h-[1em] w-0.5 self-stretch bg-black/45 mr-10"></div>
      <div className="flex flex-col">
        <p className="font-semibold">
          Odnos prema drugima:{' '}
          <span className="uppercase">Socijalna emocionalna inteligencija</span>{' '}
        </p>
        <p className="mb-4 ">{SeiPointsText['desc']}</p>
        <span className="font-semibold">Zakljucak:</span>
        {value !== null && <p>{SeiPointsText[value]}</p>}
      </div>
    </div>
  );
};
