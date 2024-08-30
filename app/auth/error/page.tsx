import { BiSolidErrorAlt } from 'react-icons/bi';
import Link from 'next/link';

const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-4">
      <div className="flex items-center text-red-500">
        <BiSolidErrorAlt size={124} color="red" />
        <span className="text-7xl font-bold">Oops!</span>
      </div>
      <span className="text-3xl font-semibold text-slate-400">
        {' '}
        Doslo je do greske!
      </span>
      <Link href="/login">
        <button>Vrati se na login stranicu </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
