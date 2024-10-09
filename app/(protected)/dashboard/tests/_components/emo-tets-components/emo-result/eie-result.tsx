import { useState, useEffect } from 'react';
import { EiePointsText } from '../../../emo-result-data/eiePoints-text';
import { EmoResultProgressBar } from '../emo-result-progress-bar';
import { useSelector } from 'react-redux';
import type { RootState } from '@/lib/store';

export const EieResult = () => {
  const [value, setValue] = useState<'mid' | 'hi' | null>(null);
  const { eiePoints } = useSelector((state: RootState) => state.emoTest);
  useEffect(() => {
    if (eiePoints <= 35) setValue('mid');
    if (eiePoints >= 36) setValue('hi');
  }, [eiePoints]);

  return (
    <div className="bg-[#f2e8d5] flex  px-4 py-8 shadow-md rounded-lg">
      <EmoResultProgressBar points={eiePoints} />
      <div className="inline-block h-[250px] min-h-[1em] w-0.5 self-stretch bg-black/45 mr-10"></div>
      <div>
        <p className="font-semibold">
          Odnos prema životu:{' '}
          <span className="uppercase">
            Emocionalna inteligencija egzistencije
          </span>{' '}
        </p>
        <p className="mb-4">{EiePointsText['desc']}</p>
        <span className="font-semibold">Zakljucak:</span>
        {value !== null && <p>{EiePointsText[value]}</p>}
      </div>
    </div>
  );
};
