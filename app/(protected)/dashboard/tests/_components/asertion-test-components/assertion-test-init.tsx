'use client';

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from '@/lib/store';
import { assertion } from '@/tests/assertion';
import { dataRecived, newAnswer } from '../../test-slice/assertionSlice';

import { TestModal } from '../static/test-modal';
import { TestHeader } from '../static/test-header';
import { TestProgressBar } from '../static/test-progress-bar';
import { TestBodyFrame } from '../static/test-body-frame';
import { FakeBtn } from '../static/fake-btn';

import { AssertionInfoFrame } from './assertion-info-frame';
import { AssertionShowQuestion } from './assertion-show-question';

import { AssertionButton } from './assertion-button';
import { AssertionFinishedScreen } from './assertion-finished-screen';

export const AssertionTestInit = () => {
  const dispatch = useDispatch();
  const { status, index, questions, currAnswer } = useSelector(
    (state: RootState) => state.assertionTest
  );
  useEffect(() => {
    const questions = assertion;

    dispatch(dataRecived(questions));
  }, [dispatch]);

  const numQuestion = questions.length;
  const progressWidth =
    ((index + Number(currAnswer !== null)) / numQuestion) * 100;

  return (
    <TestModal>
      {status === 'loading' && <div>loading...</div>}
      {status === 'ready' && <AssertionInfoFrame />}
      {status === 'active' && (
        <TestBodyFrame>
          {/* <AssertionTestHeader /> */}
          <TestHeader
            testName="Test Asertivnosti"
            index={index}
            numQuestion={numQuestion}
          />
          {/* <AssertionProgressBar /> */}
          <TestProgressBar progressWidth={progressWidth} />
          <AssertionShowQuestion />

          <div className=" flex justify-between">
            <FakeBtn />
            <AssertionButton />
          </div>
        </TestBodyFrame>
      )}
      {status === 'finished' && <AssertionFinishedScreen />}
    </TestModal>
  );
};
