import { EmoResultProgressBar } from '../emo-tets-components/emo-result-progress-bar';
import { AssertionFinishText } from '../asertion-test-components/assertion-finish-text';
import { useSelector } from 'react-redux';
import type { RootState } from '@/lib/store';

export const AssertionResultInfoScreen = () => {
  const { points } = useSelector((state: RootState) => state.assertionTest);
  return (
    <div className="bg-[#f2e8d5] flex  px-4 py-8 shadow-md rounded-lg">
      <EmoResultProgressBar points={points} maxPoints={40} />
      <div className="inline-block h-[250px] min-h-[1em] w-0.5 self-stretch bg-black/45 mr-10"></div>
      <AssertionFinishText />
    </div>
  );
};
