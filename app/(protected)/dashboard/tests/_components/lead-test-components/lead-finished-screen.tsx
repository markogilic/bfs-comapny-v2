'use client';
import CountUp from 'react-countup';
import { useSelector } from 'react-redux';
import type { RootState } from '@/lib/store';
import { PieChart, Pie, Cell } from 'recharts';
import { calcPrecentige } from '@/lib/utils';
import { LeadResultData } from '@/result-data/lead-result-data';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

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
  const { sortedResult } = useSelector(
    (state: RootState) => state.leadTest
  ) as { sortedResult: SortedResult[] };
  // const highestValue = returnHighestValue(sortedResult);
  // console.log(highestValue);

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

  return (
    <div className="bg-white w-[1100px] shadow-inner flex  border border-slate-300  gap-4 px-4 py-4 rounded-xl">
      <div className="flex flex-col justify-center items-center">
        <PieChart width={250} height={250}>
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
        <div className="flex gap-4">
          {sortedResult.map((result, index) => (
            <div
              key={result.name}
              className={`${textColor[index]} uppercase mb-2 font-semibold flex flex-col items-center justify-center text-sm `}
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
      <div className="inline-block h-auto py-4 min-h-[1em]  w-0.5 self-stretch bg-neutral-200 dark:bg-white/10"></div>
      <div className="w-full px-5 py-4">
        {/* {highestValue.length  === 1 ? (
          <p>{LeadResultData[highestValue[0]]}</p>
        ):(highestValue.map((result, index) => ())} */}
        {highestValue.length === 1 ? (
          <p className="font-semibold text-base text-slate-500  tracking-wider">
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
                <AccordionTrigger className="font-semibold text-md text-slate-600  uppercase">
                  <div className=" w-full flex justify-between items-center">
                    {result.name}
                    <span className="text-sm mr-2 lowercase ">
                      procitaj vise
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="font-semibold text-base text-slate-500  tracking-wider">
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
  );
};
