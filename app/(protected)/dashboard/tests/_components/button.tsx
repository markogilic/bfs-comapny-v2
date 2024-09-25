import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '@/lib/store';
import { next, finished } from '../test-slice/testSlice';

export const Button = () => {
  const dispatch = useDispatch();
  const { index, currAnswer, questions } = useSelector(
    (state: RootState) => state.test
  );
  const numQuestion = questions.length;

  if (currAnswer === null) return null;

  if (index < numQuestion - 1) {
    return (
      <button
        onClick={() => dispatch(next())}
        className="bg-bg-light text-white px-4 py-2 rounded-md w-fit hover:bg-bg-darck transition-colors"
      >
        Next
      </button>
    );
  }
  if (index === numQuestion - 1) {
    return (
      <button
        onClick={() => dispatch(finished())}
        className="bg-bg-light text-white px-4 py-2 rounded-md w-fit hover:bg-bg-darck transition-colors"
      >
        Finish
      </button>
    );
  }
};
