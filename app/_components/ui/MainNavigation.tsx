'use client';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';
import UserNaviagtion from '@/app/_components/user/user-navigation';
import { UseScreenWidth } from '../../hooks/screen-width';

interface SessionProp {
  session?: {
    user: {
      name: string;
      email: string;
      image?: string;
      id: string;
      role: 'USER' | 'ADMIN';
    };
    expires: string;
  } | null;
}

const MainNavigation = ({ session }: any) => {
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
      <UserNaviagtion session={session} />
    </>
  );
};

export default MainNavigation;
