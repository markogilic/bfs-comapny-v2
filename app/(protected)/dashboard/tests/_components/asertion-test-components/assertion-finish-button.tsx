import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '@/lib/store';
import { finished } from '../../test-slice/assertionSlice';
import { webtestRecordCreate } from '@/actions/webtest-record-create';
export const AssertionFinishButton = () => {
  const dispatch = useDispatch();

  const { points, testType, testName } = useSelector(
    (state: RootState) => state.assertionTest
  );
  const strPoints = points.toString();
  const { userId } = useSelector((state: RootState) => state.test);

  const handleFinish = async () => {
    await webtestRecordCreate({
      userId,
      testType,
      testResult: strPoints,
      testName,
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
