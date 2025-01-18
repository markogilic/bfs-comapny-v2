export const TestProgressBar = ({
  progressWidth,
}: {
  progressWidth: number;
}) => {
  return (
    <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
      <div
        className="bg-bg-light h-1.5 rounded-full dark:bg-blue-500 transition-all"
        style={{
          width: `${progressWidth}%`,
        }}
      ></div>
    </div>
  );
};
