export const TestBodyFrame = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col gap-4 bg-white w-full lg:w-fit lg:px-20 px-4 py-14 mx-2 rounded-md shadow-xl">
      {children}
    </div>
  );
};
