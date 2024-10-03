import { formatDate } from '@/lib/utils';

interface TestRecordProps {
  id: string;
  userId: string;
  testResult: string;
  testDate: Date;
  testType: string;
  testTime: string;
}

export const TestRecordItem = ({
  testRecord,
}: {
  testRecord: TestRecordProps;
}) => {
  //   const time = new Date(testRecord.testDate)
  const dateString = testRecord.testDate.toString();
  const formatedDate = formatDate(dateString);

  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        {testRecord.testType.toUpperCase()}
      </th>
      <td className="px-6 py-4 ">{testRecord.testResult} %</td>
      <td className="px-6 py-4">{testRecord.testTime}</td>
      <td className="px-6 py-4">{formatedDate}</td>
    </tr>
  );
};
