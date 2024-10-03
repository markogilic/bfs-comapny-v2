'use client';
import { test } from 'gray-matter';
import React from 'react';
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
      }[]
    | null;
}

export const TestListRecords = ({ testRecords }: TestListRecordsProps) => {
  return (
    <div className="border border-slate-300 px-10 py-[26px] bg-white shadow-md rounded-md w-full h-fit ">
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

      <div className="relative overflow-x-auto">
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
            {testRecords?.map((testRecord) => (
              <TestRecordItem key={testRecord.id} testRecord={testRecord} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
