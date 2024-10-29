import { formatDate } from '@/lib/utils';
import { useState, useEffect } from 'react';

interface TestRecordProps {
  id: string;
  userId: string;
  testResult: string;
  testDate: Date;
  testType: string;
  testTime: string;
  testName: string;
}

export const TestRecordItem = ({
  testRecord,
}: {
  testRecord: TestRecordProps;
}) => {
  const [mark, setMark] = useState<string>('');

  useEffect(() => {
    if (testRecord.testType === 'web') {
      setMark('%');
      return;
    }
    if (testRecord.testName === 'asertivnost') {
      setMark('poena');
      return;
    }
  }, [testRecord.testType, testRecord.testName]);

  //   const time = new Date(testRecord.testDate)
  const dateString = testRecord.testDate.toString();
  const formatedDate = formatDate(dateString);

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {testRecord.testName.toUpperCase()}
      </th>
      <td className="px-6 py-4 ">
        {testRecord.testResult} {mark}
      </td>
      <td className="px-6 py-4">{testRecord.testTime}</td>
      <td className="px-6 py-4">{formatedDate}</td>
    </tr>
  );
};

// {testRecord.testType === 'web' ? '%' : 'poena'}
