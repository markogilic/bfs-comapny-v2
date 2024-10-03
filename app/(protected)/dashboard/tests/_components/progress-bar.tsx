import { useSelector } from 'react-redux';
import type { RootState } from '@/lib/store';

export const ProgressBar = () => {
  const { index, questions, currAnswer } = useSelector(
    (state: RootState) => state.test
  );

  return (
    <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
      <div
        className="bg-bg-light h-1.5 rounded-full dark:bg-blue-500 transition-all"
        style={{
          width: `${
            ((index + Number(currAnswer !== null)) / questions.length) * 100
          }%`,
        }}
      ></div>
    </div>
  );
};
