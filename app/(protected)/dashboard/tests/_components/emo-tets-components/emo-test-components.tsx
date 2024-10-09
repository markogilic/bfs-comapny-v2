import { useSelector } from 'react-redux';
import type { RootState } from '@/lib/store';

export const EmoResultComponents = () => {
  const { tetPoints, seiPoints, eiePoints, totalPoints } = useSelector(
    (state: RootState) => state.emoTest
  );

  return (
    <div className="shadow-inner border flex justify-between items-center gap-4  border-slate-300 px-8 py-4 rounded-md">
      {' '}
      <div className="font-semibold text-slate-400">
        {tetPoints} / {seiPoints} / {eiePoints} / {totalPoints}
      </div>
    </div>
  );
};
