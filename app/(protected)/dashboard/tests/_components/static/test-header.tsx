interface TestHeaderProps {
  testName: string;
  index: number;
  numQuestion: number;
}
export const TestHeader = ({
  testName,
  index,
  numQuestion,
}: TestHeaderProps) => {
  return (
    <div className="shadow-inner border flex justify-between items-center gap-4  border-slate-300 lg:px-8 px-4 text-sm lg:text-base py-4 rounded-md">
      {' '}
      <div className="font-semibold text-slate-400">{testName}</div>
      <div className="text-slate-400 font-semibold">
        {index + 1} / {numQuestion}
      </div>
    </div>
  );
};
