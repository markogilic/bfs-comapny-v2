import { currentUser } from '@/lib/auth';
import { CiSettings } from 'react-icons/ci';
import { MdKeyboardArrowRight } from 'react-icons/md';
import Link from 'next/link';

export const UserCard = async () => {
  const user = await currentUser();

  return (
    <div className="  border border-slate-300 bg-white px-4 py-2 shadow-md rounded-md w-fit h-fit">
      <div className="flex items-center gap-4">
        <div>
          <h1 className="text-slate-700 font-semibold text-md">{user?.name}</h1>
          <p className="text-slate-500 font-semibold text-sm">{user?.email}</p>
        </div>
        <Link href="dashboard/settings">
          <div className="flex  justify-center items-center hover:scale-[1.1] transition-transform cursor-pointer">
            <CiSettings size={32} />
            <MdKeyboardArrowRight size={16} />
          </div>
        </Link>
      </div>
    </div>
  );
};
