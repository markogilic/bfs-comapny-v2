import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '@/lib/store';
import { newAnswer } from '../../test-slice/leadSlice';

export const LeadShowQuestion = () => {
  const dispatch = useDispatch();
  const { questions, index, currAnswer } = useSelector(
    (state: RootState) => state.leadTest
  );

  const { question, answers } = questions[index];

  return (
    <div className="md:w-[800px] flex flex-col gap-4">
      <div className="shadow-inner border flex justify-start items-center gap-4  bg-bg-light border-slate-300 px-8 py-4 rounded-md">
        <span className="text-xl mr-2 text-white ">Qusetion:{index + 1}</span>{' '}
        <div className="inline-block w-[2px] h-[90%] self-stretch bg-neutral-200 dark:bg-white/10"></div>
        <span className=" text-xl text-slate-50">{question}</span>
      </div>
      {answers.map((answer, index: number) => (
        <button
          onClick={() => dispatch(newAnswer(index))}
          className={`shadow-inner border font-semibold text-slate-500 hover:bg-slate-100 transition-colors  gap-4 disabled:cursor-not-allowed  border-slate-300 px-4 py-2 rounded-md ${
            currAnswer === index ? 'bg-slate-300 ' : ''
          }`}
          key={index}
        >
          {answer.text}
        </button>
      ))}
    </div>
  );
};
