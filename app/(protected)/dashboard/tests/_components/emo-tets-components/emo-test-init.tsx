'use client';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '@/lib/store';
import { emoTest } from '@/tests/emo';
import { loadQuestions } from '../../test-slice/emoTestSlice';

import { TestModal } from '../static/test-modal';
import { TestBodyFrame } from '../static/test-body-frame';
import { TestHeader } from '../static/test-header';
import { TestProgressBar } from '../static/test-progress-bar';
import { FakeBtn } from '../static/fake-btn';

import { EmoTestInfo } from './emo-test-info';
import { EmoShowQuestion } from './emo-quesiotn';

import { EmoFinishedScreen } from './emo-finished-screen';
import { EmoButton } from './emo-button';

export const EmoTestInit = () => {
  const dispatch = useDispatch();
  const { status, index, questions, currAnswer } = useSelector(
    (state: RootState) => state.emoTest
  );
  useEffect(() => {
    const importQuestions = () => {
      if (!emoTest) return;
      dispatch(loadQuestions(emoTest));
    };
    importQuestions();
  }, [dispatch]);

  const numQuestion = questions.length;
  const progressWidth =
    ((index + Number(currAnswer !== null)) / numQuestion) * 100;

  return (
    <TestModal>
      {status === 'loading' && <div>loading...</div>}
      {status === 'ready' && <EmoTestInfo />}
      {status === 'active' && (
        <TestBodyFrame>
          <TestHeader
            testName="Test Emocionalne inteligencije"
            index={index}
            numQuestion={numQuestion}
          />
          <TestProgressBar progressWidth={progressWidth} />
          <EmoShowQuestion />
          <div className="flex justify-between">
            <FakeBtn />
            <EmoButton />
          </div>
        </TestBodyFrame>
      )}
      {status === 'finished' && <EmoFinishedScreen />}
    </TestModal>
  );
};
