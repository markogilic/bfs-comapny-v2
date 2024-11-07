'use client';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '@/lib/store';
import { leadTest } from '@/tests/lead';
import { loadQuestions } from '../../test-slice/leadSlice';
import { LeatTestInfo } from './lead-test-info';

import { LeadTestHeader } from './lead-test-header';
import { LeadProgressBar } from './lead-progress-bar';
import { LeadShowQuestion } from './lead-show-question';
import { LeadButton } from './lead-button';
import { LeadFinishedScreen } from './lead-finished-screen';
export const LeadTestInit = () => {
  const dispatch = useDispatch();
  const { status } = useSelector((state: RootState) => state.leadTest);
  useEffect(() => {
    const importQuestions = () => {
      if (!leadTest) return;
      dispatch(loadQuestions(leadTest));
    };
    importQuestions();
  }, [dispatch]);
  return (
    <div className="fixed left-0 top-0 flex justify-center items-center  bg-black/45 h-full w-full z-[1055] overflow-y-auto overflow-x-hidden outline-none">
      {status === 'loading' && <div>loading...</div>}
      {status === 'ready' && <LeatTestInfo />}
      {status === 'active' && (
        <div className="flex flex-col gap-4 bg-white px-28 py-14 rounded-md shadow-lg">
          <LeadTestHeader />
          <LeadProgressBar />
          <LeadShowQuestion />
          <div className="flex justify-between">
            <button className="bg-bg-light invisible text-white px-4 py-2 rounded-md w-fit hover:bg-bg-darck transition-colors">
              fake button
            </button>
            <LeadButton />
          </div>
        </div>
      )}
      {status === 'finished' && <LeadFinishedScreen />}
    </div>
  );
};
