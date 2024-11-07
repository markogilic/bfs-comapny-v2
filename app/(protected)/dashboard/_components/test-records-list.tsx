'use client';

import { useState } from 'react';
import { TestRecordItem } from './test-record-item';

interface TestListRecordsProps {
  testRecords:
    | {
        id: string;
        userId: string;
        testResult: string;
        testDate: Date;
        testType: string;
        testTime: string;
        testName: string;
      }[]
    | null
    | undefined;
}

export const TestListRecords = ({ testRecords }: TestListRecordsProps) => {
  const [testRecordsLoad, setTestRecordsLoad] = useState(testRecords);
  const [currFilter, setCurrFilter] = useState<string>('all');

  const handleBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    let word = e.currentTarget.value;
    setCurrFilter(word);
    if (word === 'all') {
      setTestRecordsLoad(testRecords);
    } else if (word === 'soft') {
      const filtered = testRecords?.filter((item) => item.testType === 'soft');
      setTestRecordsLoad(filtered);
    } else if (word === 'web') {
      const filtered = testRecords?.filter((item) => item.testType === 'web');
      setTestRecordsLoad(filtered);
    }
  };

  return (
    <div className="border border-slate-300 px-10 py-[26px] bg-white shadow-md rounded-md w-full h-[calc(100vh-100px)] overflow-y-auto">
      <h1 className="text-xl font-semibold text-black uppercase mb-5 text-center">
        Uradjeni testovi
      </h1>
      {/* <div className="flex flex-col gap-4">
        {testRecords?.map((testRecord) => (
          <div key={testRecord.id} className="flex gap-4">
            <p>{testRecord.testType}</p>
            <p>{testRecord.testResult}</p>
          </div>
        ))}
      </div> */}
      <div className="mb-4 flex gap-4 justify-center items-center">
        Filter:
        <button
          value="all"
          onClick={handleBtn}
          className={` shadow-md border border-bg-light  font-semibold text-sm  px-3 py-2 rounded-xl w-fit hover:bg-bg-light transition-colors hover:text-white ${
            currFilter === 'all'
              ? 'bg-bg-light text-white'
              : 'bg-white text-bg-darck '
          }`}
        >
          Svi testovi
        </button>
        <button
          value="soft"
          onClick={handleBtn}
          className={` shadow-md border border-bg-light  font-semibold text-sm  px-3 py-2 rounded-xl w-fit hover:bg-bg-light transition-colors hover:text-white ${
            currFilter === 'soft'
              ? 'bg-bg-light text-white'
              : 'bg-white text-bg-darck '
          }`}
        >
          Soft
        </button>
        <button
          value="web"
          onClick={handleBtn}
          className={` shadow-md border border-bg-light  font-semibold text-sm  px-3 py-2 rounded-xl w-fit hover:bg-bg-light transition-colors hover:text-white ${
            currFilter === 'web'
              ? 'bg-bg-light text-white'
              : 'bg-white text-bg-darck '
          }`}
        >
          Web
        </button>
      </div>
      <div className="relative overflow-x-auto mb-5 ">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Naziv testa
              </th>
              <th scope="col" className="px-6 py-3">
                Rezultat
              </th>
              <th scope="col" className="px-6 py-3">
                Vreme
              </th>
              <th scope="col" className="px-6 py-3">
                Datum
              </th>
            </tr>
          </thead>
          <tbody>
            {testRecordsLoad?.map((testRecord) => (
              <TestRecordItem key={testRecord.id} testRecord={testRecord} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
