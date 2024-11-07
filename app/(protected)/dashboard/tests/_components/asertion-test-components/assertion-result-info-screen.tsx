import { EmoResultProgressBar } from '../emo-tets-components/emo-result-progress-bar';
import { AssertionFinishText } from '../asertion-test-components/assertion-finish-text';
import { useSelector } from 'react-redux';
import type { RootState } from '@/lib/store';

export const AssertionResultInfoScreen = () => {
  const { points } = useSelector((state: RootState) => state.assertionTest);
  return (
    <div className="bg-[#f2e8d5] flex flex-col lg:flex-row justify-center items-center   px-2 lg:py-8 py-4   shadow-md  lg:rounded-lg rounded-sm">
      <EmoResultProgressBar points={points} maxPoints={40} />
      <div className="lg:inline-block h-[250px] min-h-[1em] w-0.5 self-stretch bg-black/45 mr-10 hidden "></div>
      <AssertionFinishText />
    </div>
  );
};
