import { UserCard } from '@/app/(protected)/dashboard/_components/user-card';
import { MobileBottomMenu } from './_components/mobile-bottom-menu';
// import { WebSkillNav } from './_components/web-skill-nav';
// import { SoftSkillNav } from './_components/soft-skill-nav';
import { SideBarMenu } from './_components/sidebar-menu';
import { SessionProvider } from 'next-auth/react';
import { auth } from '@/auth';
export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <div className=" h-screen lg:pt-[86px]  flex  md:px-[150px]  gap-4 bg-gradient-to-tr from-zinc-200 to-zinc-100">
      <div className="lg:flex flex-col gap-4  justify-start hidden  ">
        <UserCard />
        <SideBarMenu />

        {/* <WebSkillNav />
        <SoftSkillNav /> */}
      </div>
      <SessionProvider session={session}>{children}</SessionProvider>
      {/* mobile menu platform */}
      <MobileBottomMenu />
    </div>
  );
}
