'use client';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import { UserNav } from '@/app/_components/user/user-nav';
import { UseScreenWidth } from '../../hooks/screen-width';

import type { Session } from 'next-auth';

const MainNavigation = () => {
  //   const [width, setWidth] = useState(0);
  //   const updateWidth = () => {
  //     const newWidth = window.innerWidth;
  //     setWidth(newWidth);
  //   };

  //   useEffect(() => {
  //     window.addEventListener('resize', updateWidth);
  //     updateWidth();
  //     return () => window.removeEventListener('resize', updateWidth);
  //   }, []);

  const width = UseScreenWidth();

  if (width < 768) {
    return <MobileNav />;
  }
  return (
    <>
      <DesktopNav />
      <UserNav />
    </>
  );
};

export default MainNavigation;
