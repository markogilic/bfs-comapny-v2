'use client';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '@/lib/store';
import { leadTest } from '@/tests/lead';
import { loadQuestions, newAnswer } from '../../test-slice/leadSlice';
import { LeatTestInfo } from './lead-test-info';

import { TestModal } from '../static/test-modal';
import { TestHeader } from '../static/test-header';
import { TestProgressBar } from '../static/test-progress-bar';
import { TestBodyFrame } from '../static/test-body-frame';

import { FakeBtn } from '../static/fake-btn';

import { LeadButton } from './lead-button';
import { LeadFinishedScreen } from './lead-finished-screen';
import { LeadShowQuestion } from './lead-show-question';

interface StateAnswerProps {
  answer: string;
  value: number;
}
export const LeadTestInit = () => {
  const dispatch = useDispatch();

  const { status, index, questions, currAnswer } = useSelector(
    (state: RootState) => state.leadTest
  );

  useEffect(() => {
    const importQuestions = () => {
      if (!leadTest) return;
      dispatch(loadQuestions(leadTest));
    };
    importQuestions();
  }, [dispatch]);
  console.log(questions);
  const numQuestion = questions.length;
  const progressWidth =
    ((index + Number(currAnswer !== null)) / numQuestion) * 100;

  return (
    <TestModal>
      {status === 'loading' && <div>loading...</div>}
      {status === 'ready' && <LeatTestInfo />}
      {status === 'active' && (
        <TestBodyFrame>
          <TestHeader
            testName="Test Liderstva"
            index={index}
            numQuestion={numQuestion}
          />
          <TestProgressBar progressWidth={progressWidth} />
          <LeadShowQuestion />
          <div className="flex justify-between">
            <FakeBtn />
            <LeadButton />
          </div>
        </TestBodyFrame>
      )}
      {status === 'finished' && <LeadFinishedScreen />}
    </TestModal>
  );
};
