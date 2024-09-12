import Link from 'next/link';
export const UserNav = () => {
  return (
    <div className="flex justify-center items-center gap-2 border border-gray-300 shadow-inner px-2 py-1 rounded-full">
      <Link
        href="/auth/login"
        className="px-4 py-2 hover:bg-slate-200 rounded-full  transition-colors"
      >
        Uloguj se!
      </Link>
      <Link
        href="/auth/register"
        className="bg-btn-primary  text-white px-4 py-2 rounded-full font-semibold hover:bg-btn-primary-hover transition-colors"
      >
        Registruj se!
      </Link>
    </div>
  );
};
