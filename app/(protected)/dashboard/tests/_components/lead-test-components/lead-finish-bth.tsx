import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '@/lib/store';
import { finished, updateSortResult } from '../../test-slice/leadSlice';
import { webtestRecordCreate } from '@/actions/webtest-record-create';
import { sortResultLeaderTest } from '@/lib/utils';
import { useTransition } from 'react';
import { ClipLoader } from 'react-spinners';

export const LeadFinishButton = () => {
  const [isPending, startTransition] = useTransition();
  const dispatch = useDispatch();
  const {
    autkratskiPoints,
    demokratskiPoints,
    slobodniPoints,
    situacioniPoints,
    testType,
    testName,
  } = useSelector((state: RootState) => state.leadTest);
  const { userId } = useSelector((state: RootState) => state.test);

  const handleFinish = async () => {
    let result: string = '';
    const sortedResult = sortResultLeaderTest(
      autkratskiPoints,
      demokratskiPoints,
      slobodniPoints,
      situacioniPoints
    );
    const highestValue = sortedResult.filter(
      (result) => result.value === Math.max(...sortedResult.map((r) => r.value))
    );
    if (highestValue.length === 1) {
      result = highestValue[0].name;
    }
    if (highestValue.length > 1) {
      highestValue.map((value) => {
        result += value.name + ',';
      });
    }
    startTransition(() => {
      webtestRecordCreate({
        userId,
        testType,
        testResult: result,
        testName,
      });
    });

    dispatch(updateSortResult(sortedResult));
    dispatch(finished());
  };

  return (
    <button
      onClick={handleFinish}
      className="bg-bg-light text-white px-4 py-2 rounded-md w-fit hover:bg-bg-darck transition-colors"
    >
      {isPending ? <ClipLoader size={20} color="#fff" /> : 'Završi test'}
    </button>
  );
};
