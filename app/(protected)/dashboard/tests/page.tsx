'use client';

import React, { useState, useEffect } from 'react';

import { TestInit } from './_components/test-init';
import { MainInfoTestFrame } from './_components/main-info-test-frame';
import { EmoTestInit } from './_components/emo-tets-components/emo-test-init';
import { AssertionTestInit } from './_components/asertion-test-components/assertion-test-init';
import { LeadTestInit } from './_components/lead-test-components/lead-test-init';
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
  const type = useSelector((state: RootState) => state.test.testName);

  return (
    <div className="flex justify-center  px-8 py-4  w-full bg-white shadow-md h-fit">
      {/* <TestInit type={type} /> */}
      {type === '' && <MainInfoTestFrame />}
      {type === 'emo' && <EmoTestInit />}
      {type !== '' &&
        type !== 'emo' &&
        type !== 'assertion' &&
        type !== 'lead' && <TestInit type={type} />}
      {/* {type === 'emo' && <EmoTestInit />}
      {type === '' ? <MainInfoTestFrame /> : <TestInit type={type} />} */}
      {type === 'assertion' && <AssertionTestInit />}
      {type === 'lead' && <LeadTestInit />}
    </div>
  );
};

export default TestsPage;
