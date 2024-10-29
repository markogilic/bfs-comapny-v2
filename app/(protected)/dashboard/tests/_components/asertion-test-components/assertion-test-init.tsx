'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '@/lib/store';
import { assertion } from '@/tests/assertion';
import { dataRecived } from '../../test-slice/assertionSlice';

import { AssertionInfoFrame } from './assertion-info-frame';
import { AssertionTestHeader } from './assertion-test-header';
import { AssertionProgressBar } from './assertion-progress-bar';
import { AssertionShowQuestion } from './assertion-show-question';
import { AssertionButton } from './assertion-button';
import { AssertionFinishedScreen } from './assertion-finished-screen';

export const AssertionTestInit = () => {
  const dispatch = useDispatch();
  const { status } = useSelector((state: RootState) => state.assertionTest);
  useEffect(() => {
    const questions = assertion;
    console.log(questions);
    dispatch(dataRecived(questions));
  }, [dispatch]);

  return (
    <div className=" fixed left-0 top-0 flex justify-center items-center bg-black/45 h-full w-full z-[1055] overflow-y-hidden overflow-x-hidden outline-none">
      {status === 'loading' && <div>loading...</div>}
      {status === 'ready' && <AssertionInfoFrame />}
      {status === 'active' && (
        <div className="flex flex-col gap-4 bg-white px-28 py-14 rounded-md shadow-xl">
          <AssertionTestHeader />
          <AssertionProgressBar />
          <AssertionShowQuestion />
          <div className="flex justify-between">
            <button className="bg-bg-light invisible text-white px-4 py-2 rounded-md w-fit hover:bg-bg-darck transition-colors">
              fake button
            </button>
            <AssertionButton />
          </div>
        </div>
      )}
      {status === 'finished' && <AssertionFinishedScreen />}
    </div>
  );
};
