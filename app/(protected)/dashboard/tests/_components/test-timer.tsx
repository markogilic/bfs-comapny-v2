'use client';

import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { finished, tick } from '../test-slice/testSlice';
import type { RootState } from '@/lib/store';
import { webtestRecordCreate } from '@/actions/webtest-record-create';

export const TestTimer = () => {
  //   const [testDuration, setTestDuration] = useState(20);
  const { timeRemaining, questions, points, userId, testType, testName } =
    useSelector((state: RootState) => state.test);
  const disaptch = useDispatch();
  //   const { testDuration } = useSelector((state: RootState) => state.test);
  const minutes = Math.floor(timeRemaining / 60);
  const seconds = timeRemaining % 60;
  const result = Math.round((points / questions.length) * 100);
  const stringResult = result.toString();
  const updateDB = async () => {
    await webtestRecordCreate({
      userId: userId,
      testType: testType,
      testResult: stringResult,
      testTime: 'Istek vremana',
      testName: testName,
    });
  };

  useEffect(() => {
    const id = setInterval(() => {
      disaptch(tick());
    }, 1000);
    if (timeRemaining === 0) {
      updateDB();
      clearInterval(id);
      disaptch(finished());
    }
    return () => clearInterval(id);
  }, [timeRemaining, disaptch]);

  return (
    <>
      Time: {minutes < 10 && '0'}
      {minutes}:{seconds < 10 && '0'}
      {seconds}
    </>
  );
};
