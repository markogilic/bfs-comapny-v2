import Link from 'next/link';
type UserMenuLinkProps = {
  pageLink: string;
  children: React.ReactNode;
  label: string;
};

const UserMenuLink = ({ children, label, pageLink }: UserMenuLinkProps) => {
  return (
    <Link href={pageLink}>
      <div className="w-full px-4 rounded-xl  py-3 flex items-center gap-2 group hover:bg-slate-100 transition-colors    ">
        {children}
        <span className="text-slate-500 font-semibold text-md">{label}</span>
      </div>
    </Link>
  );
};

export default UserMenuLink;
