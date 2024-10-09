'use client';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '@/lib/store';
import { emoTest } from '@/tests/emo';
import { loadQuestions } from '../../test-slice/emoTestSlice';
import { EmoTestInfo } from './emo-test-info';
import { EmoShowQuestion } from './emo-quesiotn';
import { EmoTestHeader } from './emo-test-header';
import { EmoProgressBar } from './emo-progress-bar';
import { EmoResultComponents } from './emo-test-components';
import { EmoFinishedScreen } from './emo-finished-screen';

import { EmoButton } from './emo-button';

export const EmoTestInit = () => {
  const dispatch = useDispatch();
  const { status } = useSelector((state: RootState) => state.emoTest);
  useEffect(() => {
    const importQuestions = () => {
      if (!emoTest) return;
      dispatch(loadQuestions(emoTest));
    };
    importQuestions();
  }, [dispatch]);

  return (
    <div className=" fixed left-0 top-0 flex justify-center items-center  bg-black/45 h-full w-full z-[1055] overflow-y-auto overflow-x-hidden outline-none">
      {/* {status === 'loading ' && <div>loading...</div>}
      {status === 'ready' && (
        <InfoTestFrame type={type}>
          <button
            onClick={() => dispatch(start())}
            className="text-white bg-bg-light px-4 py-2 rounded-md font-semibold shadow-md hover:bg-bg-darck transition-color"
          >
            Zapocni Test
          </button>
        </InfoTestFrame>
      )}
      {status === 'active' && (
        <div className="flex flex-col gap-4 bg-white px-28 py-14 rounded-md shadow-lg ">
          <TestHeader />
          <ProgressBar />
          <ShowQuestion />
          <div className="flex justify-between">
            <button className="bg-bg-light invisible text-white px-4 py-2 rounded-md w-fit hover:bg-bg-darck transition-colors">
              fake button
            </button>
            <Button />
          </div>
        </div>
      )}
      {status === 'finished' && <FinisedScreen />} */}
      {status === 'loading' && <div>loading...</div>}
      {status === 'ready' && <EmoTestInfo />}
      {status === 'active' && (
        <div className="flex flex-col gap-4 bg-white px-28 py-14 rounded-md shadow-lg">
          <EmoResultComponents />
          <EmoTestHeader />
          <EmoProgressBar />
          <EmoShowQuestion />
          <div className="flex justify-between">
            <button className="bg-bg-light invisible text-white px-4 py-2 rounded-md w-fit hover:bg-bg-darck transition-colors">
              fake button
            </button>
            <EmoButton />
          </div>
        </div>
      )}
      {status === 'finished' && <EmoFinishedScreen />}
    </div>
  );
};
