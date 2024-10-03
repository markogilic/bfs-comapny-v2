import { TestTimer } from './test-timer';
import { useSelector } from 'react-redux';
import type { RootState } from '@/lib/store';

export const TestHeader = () => {
  const { index, questions } = useSelector((state: RootState) => state.test);
  const numQuestion = questions.length;
  return (
    <div className="shadow-inner border flex justify-between items-center gap-4  border-slate-300 px-8 py-4 rounded-md">
      {' '}
      <div className="font-semibold text-slate-400">{<TestTimer />}</div>
      <div className="text-slate-400 font-semibold">
        {index + 1} / {numQuestion}
      </div>
    </div>
  );
};
