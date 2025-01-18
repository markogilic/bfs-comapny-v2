export const TestModal = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" fixed left-0 top-0 flex justify-center items-center bg-black/45 h-full w-full z-[1055] overflow-y-hidden overflow-x-hidden outline-none">
      {children}
    </div>
  );
};
