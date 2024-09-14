import { auth } from '@/auth';
export const UserNavigation = async () => {
  const session = await auth();

  if (session) {
    return (
      <div className="absolute mt-[150px]  z-50 flex justify-center items-center gap-4 border bg-slate-100 border-gray-300 shadow-inner px-4 py-2 rounded-full right-10">
        <button className="">Logout</button>
      </div>
    );
  }

  return (
    <div className="absolute mt-[150px]  z-50 flex justify-center items-center gap-4 border bg-slate-100 border-gray-300 shadow-inner px-4 py-2 rounded-full right-10">
      <button className="">Login</button>
      <button className="">Register</button>
    </div>
  );
};
