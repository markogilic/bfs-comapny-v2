import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '@/lib/store';
import { next } from '../../test-slice/leadSlice';
import { LeadFinishButton } from './lead-finish-bth';

export const LeadButton = () => {
  const disaptch = useDispatch();
  const { index, currAnswer, questions } = useSelector(
    (state: RootState) => state.leadTest
  );

  const numQuestion = questions.length;

  if (currAnswer === null) return null;

  if (index < numQuestion - 1) {
    return (
      <button
        onClick={() => disaptch(next())}
        className="bg-bg-light text-white px-4 py-2 rounded-md w-fit hover:bg-bg-darck transition-colors"
      >
        Sledeće pitanje
      </button>
    );
  }
  if (index === numQuestion - 1) {
    return <LeadFinishButton />;
  }
};
