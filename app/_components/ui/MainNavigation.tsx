'use client';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import UserNavigation from '@/app/_components/user/user-navigation';
import { Session } from 'next-auth';

import { UseScreenWidth } from '../../hooks/screen-width';

const MainNavigation = ({ session }: { session: Session | null }) => {
  const width = UseScreenWidth();

  if (width < 768) {
    return <MobileNav />;
  }
  return (
    <>
      <DesktopNav />
      <UserNavigation session={session} />
    </>
  );
};

export default MainNavigation;
