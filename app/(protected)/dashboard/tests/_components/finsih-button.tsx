import { finished } from '../test-slice/testSlice';
import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '@/lib/store';
import { webtestRecordCreate } from '@/actions/webtest-record-create';
import { subtractTime } from '@/lib/utils';
export const FinishButton = () => {
  const dispatch = useDispatch();
  const { questions, points, userId, testType, timeRemaining } = useSelector(
    (state: RootState) => state.test
  );
  const result = Math.round((points / questions.length) * 100);
  const stringResult = result.toString();

  const handleFinish = async () => {
    const testTime = subtractTime(timeRemaining, 10);
    let setMinutes;
    let setSeconds;

    if (testTime.minutes < 10) {
      setMinutes = `0${testTime.minutes}`;
    } else {
      setMinutes = testTime.minutes;
    }
    if (testTime.seconds < 10) {
      setSeconds = `0${testTime.seconds}`;
    } else {
      setSeconds = testTime.seconds;
    }

    const dbTime = `${setMinutes}:${setSeconds}`;
    await webtestRecordCreate({
      userId: userId,
      testType: testType,
      testResult: stringResult,
      testTime: dbTime,
    });
    dispatch(finished());
  };

  return (
    <button
      onClick={handleFinish}
      className="bg-bg-light text-white px-4 py-2 rounded-md w-fit hover:bg-bg-darck transition-colors"
    >
      Finish
    </button>
  );
};
