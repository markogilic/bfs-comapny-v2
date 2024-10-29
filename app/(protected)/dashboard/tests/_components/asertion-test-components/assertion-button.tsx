import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '@/lib/store';
import { nextQuestion } from '../../test-slice/assertionSlice';
import { AssertionFinishButton } from './assertion-finish-button';

export const AssertionButton = () => {
  const dispatch = useDispatch();
  const { index, currAnswer, questions } = useSelector(
    (state: RootState) => state.assertionTest
  );

  const numQuestion = questions.length;

  if (currAnswer === null) return null;

  if (index < numQuestion - 1) {
    return (
      <button
        onClick={() => dispatch(nextQuestion())}
        className="bg-bg-light text-white px-4 py-2 rounded-md w-fit hover:bg-bg-darck transition-colors"
      >
        Next
      </button>
    );
  }
  if (index === numQuestion - 1) {
    return <AssertionFinishButton />;
  }
};
