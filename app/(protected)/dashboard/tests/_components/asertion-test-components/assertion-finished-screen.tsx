'use client';

import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { back } from '../../test-slice/assertionSlice';
import { setLoading } from '../../test-slice/testSlice';

import { AssertionResultInfoScreen } from './assertion-result-info-screen';
export const AssertionFinishedScreen = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const goDashBoard = () => {
    dispatch(setLoading());
    dispatch(back());
    router.push('/dashboard');
  };

  const goNewTest = () => {
    dispatch(setLoading());
    dispatch(back());
  };
  return (
    <div className="bg-white shadow-inner border border-slate-300 flex flex-col w-full mx-2  lg:w-fit  gap-4 lg:px-8 px-4 py-4 rounded-xl h-fit">
      <AssertionResultInfoScreen />
      <div className=" lg:flex gap-4 grid grid-cols-2">
        <button
          onClick={goNewTest}
          className="bg-bg-light text-white shadow-lg px-4 py-2  lg:rounded-xl rounded-md lg:w-fit w-full text-sm font-semibold lg:text-base lg:font-normal hover:bg-bg-darck transition-colorss"
        >
          Izaberi novi test
        </button>
        <button
          onClick={goDashBoard}
          className="bg-bg-light text-white  px-4 py-2 lg:rounded-xl rounded-md lg:w-fit w-full hover:bg-bg-darck transition-colorss text-sm font-semibold lg:text-base lg:font-normal"
        >
          Dashboard
        </button>
      </div>
    </div>
  );
};
