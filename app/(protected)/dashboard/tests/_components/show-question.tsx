import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '@/lib/store';
import { newAnswer } from '../test-slice/testSlice';

export const ShowQuestion = () => {
  const dispatch = useDispatch();
  const { questions, index, currAnswer } = useSelector(
    (state: RootState) => state.test
  );
  const { options, question, answer } = questions[index];
  const hasAnswered = currAnswer !== null;

  return (
    <div className="md:w-[800px] flex flex-col gap-4  ">
      <div className="shadow-inner border flex justify-start items-center gap-4  bg-bg-light border-slate-300 px-8 py-4 rounded-md">
        <span className="text-xl mr-2 text-white ">Qusetion:{index + 1}</span>{' '}
        <div className="inline-block w-[2px] h-[90%] self-stretch bg-neutral-200 dark:bg-white/10"></div>
        <span className=" text-xl text-slate-50">{question}</span>
      </div>

      {options.map((option, index) => (
        <button
          onClick={() => dispatch(newAnswer(index))}
          disabled={hasAnswered}
          className={`shadow-inner border hover:bg-slate-100 transition-colors  gap-4 disabled:cursor-not-allowed  border-slate-300 px-4 py-2 rounded-md ${
            currAnswer === index ? 'bg-slate-100 ' : ''
          } `}
          key={index}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

// ${
//   hasAnswered
//     ? answer === index
//       ? 'bg-green-100'
//       : ' bg-red-300'
//     : ''
// }
