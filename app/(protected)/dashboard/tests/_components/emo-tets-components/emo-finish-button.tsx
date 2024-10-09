import { useSelector, useDispatch } from 'react-redux';
import type { RootState } from '@/lib/store';
import { finished } from '../../test-slice/emoTestSlice';
import { emoRecordCreate } from '@/actions/emo-record-create';

export const EmoFinishButton = () => {
  const dispatch = useDispatch();
  const { tetPoints, seiPoints, eiePoints, totalPoints, testType } =
    useSelector((state: RootState) => state.emoTest);
  const { userId } = useSelector((state: RootState) => state.test);

  const handleFinish = async () => {
    dispatch(finished());
    await emoRecordCreate({
      userId: userId,
      testType: testType,
      tetPoints: tetPoints,
      seiPoints: seiPoints,
      eiePoints: eiePoints,
      totalPoints: totalPoints,
    });
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
