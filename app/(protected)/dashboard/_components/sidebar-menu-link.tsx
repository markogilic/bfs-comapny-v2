import Link from 'next/link';
type SideBarMenuLinkProps = {
  pageLink: string;
  children: React.ReactNode;
  label: string;
};

export const SideBarMenuLink = ({
  children,
  label,
  pageLink,
}: SideBarMenuLinkProps) => {
  return (
    <Link href={pageLink}>
      <div className="w-full  rounded-xl px-2  py-3 flex items-center gap-3 group hover:bg-slate-100 transition-colors    ">
        {children}
        <span className="text-slate-500 font-semibold text-md">{label}</span>
      </div>
    </Link>
  );
};
