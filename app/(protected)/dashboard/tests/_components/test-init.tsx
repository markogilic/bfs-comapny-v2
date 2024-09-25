import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '@/lib/store';
import { tests, Tests } from '@/tests/html';
import { dataRecived, start } from '../test-slice/testSlice';
import { InfoTestFrame } from '../_components/info-test-frame';
import { ShowQuestion } from '../_components/show-question';
import { Button } from '../_components/button';
import { TestHeader } from './test-seader';
import { ProgressBar } from './progress-bar';

type TestType = keyof Tests;
export const TestInit = ({ type }: { type: string }) => {
  const dispatch = useDispatch();
  const { questions, status } = useSelector((state: RootState) => state.test);
  useEffect(() => {
    const dispatchTest = (type: TestType) => {
      dispatch(dataRecived(tests[type]));
    };
    dispatchTest(type as TestType);
  }, [type, dispatch]);
  const numQuestion = questions.length;
  return (
    <div>
      {status === 'loading ' && <div>loading...</div>}
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
        <div className="flex flex-col gap-4">
          <TestHeader />
          <ProgressBar />
          <ShowQuestion />
          <Button />
        </div>
      )}
    </div>
  );
};
