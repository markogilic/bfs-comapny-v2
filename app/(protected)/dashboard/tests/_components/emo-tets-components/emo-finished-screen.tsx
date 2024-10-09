'use client';
import { SeiResult } from './emo-result/sei-result';
import { EieResult } from './emo-result/eie-result';
import { TetResult } from './emo-result/tet-result';
import { TotalPointsResult } from './emo-result/total-points-result';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { back } from '../../test-slice/emoTestSlice';
import { setLoading } from '../../test-slice/testSlice';

export const EmoFinishedScreen = () => {
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
    <div className="bg-white shadow-inner    border border-slate-300 grid grid-cols-2 mx-10    gap-4 px-4 py-4 rounded-xl ">
      <TetResult />
      <SeiResult />
      <EieResult />
      <TotalPointsResult />
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
