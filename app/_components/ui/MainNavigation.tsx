'use client';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

import { UseScreenWidth } from '../../hooks/screen-width';

const MainNavigation = ({ session }: any) => {
  const width = UseScreenWidth();

  if (width < 768) {
    return <MobileNav />;
  }
  return <DesktopNav session={session} />;
};

export default MainNavigation;
