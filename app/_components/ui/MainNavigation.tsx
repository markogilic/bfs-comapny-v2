'use client';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import UserNaviagtion from '@/app/_components/user/user-navigation';
import { UseScreenWidth } from '../../hooks/screen-width';

import type { Session } from 'next-auth';

const MainNavigation = ({ session }: { session: Session | null }) => {
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

  console.log(session);

  if (width < 768) {
    return <MobileNav />;
  }
  return (
    <>
      <DesktopNav />
      <UserNaviagtion session={session} />
    </>
  );
};

export default MainNavigation;
