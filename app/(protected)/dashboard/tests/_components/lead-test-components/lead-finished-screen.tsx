'use client';
import CountUp from 'react-countup';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '@/lib/store';
import { PieChart, Pie, Cell } from 'recharts';
import { calcPrecentige } from '@/lib/utils';
import { UseScreenWidth } from '@/app/hooks/screen-width';
import { LeadResultData } from '@/result-data/lead-result-data';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { back } from '../../test-slice/leadSlice';
import { setLoading } from '../../test-slice/testSlice';
import { useRouter } from 'next/navigation';

const colors = ['#003f5c', '#7a5195', '#ef5675', '#ffa600'];
const textColor = [
  'text-[#003f5c]',
  'text-[#7a5195]',
  'text-[#ef5675]',
  'text-[#ffa600]',
];

type SortedResult = {
  name: 'autokratski' | 'demokratski' | 'slobodni' | 'situacioni';
  value: number;
};

export const LeadFinishedScreen = () => {
  const screenWidth = UseScreenWidth();
  const { sortedResult } = useSelector(
    (state: RootState) => state.leadTest
  ) as { sortedResult: SortedResult[] };
  // const highestValue = returnHighestValue(sortedResult);
  // console.log(highestValue);
  const dispatch = useDispatch();
  const router = useRouter();
  const {
    autkratskiPoints,
    demokratskiPoints,
    slobodniPoints,
    situacioniPoints,
  } = useSelector((state: RootState) => state.leadTest);

  const sum =
    autkratskiPoints + demokratskiPoints + slobodniPoints + situacioniPoints;

  const highestValue = sortedResult.filter(
    (result) => result.value === Math.max(...sortedResult.map((r) => r.value))
  );

  const goDashBoard = () => {
    dispatch(setLoading());
    dispatch(back());
    router.push('/dashboard');
  };
  const goNewTest = () => {
    dispatch(setLoading());
    dispatch(back());
  };

  return (
    <div className="bg-white lg:w-[1100px] w-[96%] h-fit shadow-inner flex flex-col border border-slate-300  gap-4 px-4 py-4  rounded-xl">
      <div className="flex flex-col lg:flex-row">
        <div className="flex lg:flex-col justify-center items-center">
          <PieChart
            width={screenWidth < 500 ? 150 : 250}
            height={screenWidth < 500 ? 150 : 250}
          >
            <Pie dataKey="value" data={sortedResult} fill="#ec6e15">
              {sortedResult.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </Pie>
          </PieChart>

          {/* result sstats */}
          <div className="flex flex-col lg:flex-row lg:gap-4 gap-1">
            {sortedResult.map((result, index) => (
              <div
                key={result.name}
                className={`${textColor[index]} uppercase mb-2 font-semibold gap-4 lg:gap-0 flex flex-row lg:flex-col items-center justify-center lg:text-sm text-xs `}
              >
                <p>{result.name}</p>
                <p>
                  {
                    <CountUp
                      end={calcPrecentige(result.value, sum)}
                      decimals={2}
                    />
                  }
                  %
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="lg:inline-block hidden  h-auto py-4 min-h-[1em]  w-0.5 self-stretch bg-neutral-200 dark:bg-white/10"></div>
        <div className="w-full lg:px-5 lg:py-4">
          {/* {highestValue.length  === 1 ? (
          <p>{LeadResultData[highestValue[0]]}</p>
        ):(highestValue.map((result, index) => ())} */}
          {highestValue.length === 1 ? (
            <p className="font-semibold lg:text-base text-sm text-slate-500  tracking-wider">
              {LeadResultData[highestValue[0].name]}
            </p>
          ) : (
            <Accordion type="single" collapsible className="w-full">
              {highestValue.map((result, index) => (
                // <p
                //   className="font-semibold text-md text-slate-600 mb-4"
                //   key={result.name}
                // >
                //   {LeadResultData[result.name]}
                // </p>
                <AccordionItem value={result.name} key={index}>
                  <AccordionTrigger className="font-semibold lg:text-md text-sm text-slate-600  uppercase">
                    <div className=" w-full flex justify-between items-center">
                      {result.name}
                      <span className="lg:text-sm text-xs mr-2 lowercase ">
                        procitaj vise
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <p className="font-semibold lg:text-base text-[12px] text-slate-500  tracking-wider">
                      {LeadResultData[result.name]}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          )}
          {/* {sortedResult.map((result, index) => (
          <p key={result.name}>{LeadResultData[result.name]}</p>
        ))} */}
        </div>
      </div>
      <div className="lg:flex gap-4 grid grid-cols-2">
        <button
          onClick={goNewTest}
          className="bg-bg-light text-white shadow-lg px-4 py-2  lg:rounded-xl rounded-md lg:w-fit w-full text-xs font-semibold lg:text-base lg:font-normal hover:bg-bg-darck transition-colorss"
        >
          Izaberi novi test
        </button>
        <button
          onClick={goDashBoard}
          className="bg-bg-light text-white  px-4 py-2 lg:rounded-xl rounded-md lg:w-fit w-full hover:bg-bg-darck transition-colorss text-xs font-semibold lg:text-base lg:font-normal "
        >
          Dashboard
        </button>
      </div>
    </div>
  );
};
