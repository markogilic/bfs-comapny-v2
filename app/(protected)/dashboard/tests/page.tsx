'use client';

import React, { useState } from 'react';

import { TestInit } from './_components/test-init';
import { MainInfoTestFrame } from './_components/main-info-test-frame';

import type { RootState } from '@/lib/store';
import { useSelector } from 'react-redux';

const TestsPage = () => {
  // const [type, setType] = useState<string | ''>('');
  // const [
  //   { questions, status, index, currAnswer, points, wrongAnswers },
  //   dispatch,
  // ] = useReducer(reducer, initialState);

  // const numQuestion = questions.length;

  // useEffect(() => {
  //   dispatch({ type: 'dataRecived', payload: html });
  // }, []);
  const type = useSelector((state: RootState) => state.test.testType);

  return (
    <div className="flex justify-center px-8 py-4  w-full bg-white shadow-md h-fit">
      {/* <TestInit type={type} /> */}
      {type === '' ? <MainInfoTestFrame /> : <TestInit type={type} />}
    </div>
  );
};

export default TestsPage;
