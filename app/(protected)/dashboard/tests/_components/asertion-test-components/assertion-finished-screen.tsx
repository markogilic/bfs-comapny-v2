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
    <div className="bg-white shadow-inner border border-slate-300 flex flex-col gap-4 px-8 py-4 rounded-xl">
      <AssertionResultInfoScreen />
      <div className="flex gap-4">
        <button
          onClick={goNewTest}
          className="bg-bg-light text-white shadow-lg px-4 py-2 rounded-xl w-fit hover:bg-bg-darck transition-colorss"
        >
          Izaberi novi test
        </button>
        <button
          onClick={goDashBoard}
          className="bg-bg-light text-white  px-4 py-2 rounded-xl w-fit hover:bg-bg-darck transition-colorss"
        >
          Dashboard
        </button>
      </div>
    </div>
  );
};
