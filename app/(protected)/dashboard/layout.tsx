import { UserCard } from '@/app/(protected)/dashboard/_components/user-card';
// import { WebSkillNav } from './_components/web-skill-nav';
// import { SoftSkillNav } from './_components/soft-skill-nav';
import { SideBarMenu } from './_components/sidebar-menu';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className=" h-screen pt-[86px]  flex  md:px-[150px] gap-4 bg-gradient-to-tr from-zinc-200 to-zinc-100">
      <div className="flex flex-col gap-4  justify-start ">
        <UserCard />
        <SideBarMenu />

        {/* <WebSkillNav />
        <SoftSkillNav /> */}
      </div>

      {children}
    </div>
  );
}
