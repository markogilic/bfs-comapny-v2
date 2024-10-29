import { useSelector } from 'react-redux';
import type { RootState } from '@/lib/store';

export const AssertionTestHeader = () => {
  const { index, questions } = useSelector(
    (state: RootState) => state.assertionTest
  );
  const numQuestion = questions.length;
  return (
    <div className="shadow-inner border flex justify-between items-center gap-4  border-slate-300 px-8 py-4 rounded-md">
      {' '}
      <div className="font-semibold text-slate-400">Test Asertivnosti</div>
      <div className="text-slate-400 font-semibold">
        {index + 1} / {numQuestion}
      </div>
    </div>
  );
};
