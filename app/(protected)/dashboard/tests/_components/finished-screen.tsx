'use clinet';
import { back } from '../test-slice/testSlice';
import { ResultInfoScreen } from './result-info-screen';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';

export const FinisedScreen = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const goDashBoard = () => {
    dispatch(back());
    router.push('/dashboard');
    router.refresh();
  };
  return (
    <div className=" bg-white shadow-inner border flex flex-col  gap-4   border-slate-300 px-8 py-4 rounded-xl">
      <ResultInfoScreen />
      <div className="flex gap-4">
        <button
          onClick={() => dispatch(back())}
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
