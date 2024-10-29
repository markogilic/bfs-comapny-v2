import { useSelector } from 'react-redux';
import type { RootState } from '@/lib/store';

export const LeadTestHeader = () => {
  const { index, questions } = useSelector(
    (state: RootState) => state.leadTest
  );
  const emoNumQuestion = questions.length;

  return (
    <div className="shadow-inner border flex justify-between items-center gap-4  border-slate-300 px-8 py-4 rounded-md">
      {' '}
      <div className="font-semibold text-slate-400">Test Liderstva</div>
      <div className="text-slate-400 font-semibold">
        {index + 1} / {emoNumQuestion}
      </div>
    </div>
  );
};
