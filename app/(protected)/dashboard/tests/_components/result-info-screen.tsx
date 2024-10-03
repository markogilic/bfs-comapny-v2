import { ResultProgressBar } from './result-progressbar';
import { FinishText } from './finish-text';

export const ResultInfoScreen = () => {
  return (
    <div className="bg-[#f2e8d5] flex  px-4 py-8 shadow-md rounded-lg">
      <ResultProgressBar />
      <div className="inline-block h-[250px] min-h-[1em] w-0.5 self-stretch bg-black/45 mr-10"></div>
      <FinishText />
    </div>
  );
};
