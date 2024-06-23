'use client';
import DesktopNav from './DesktopNav';
import MobileNav from './MobileNav';

import { UseScreenWidth } from '../../hooks/screen-width';

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
  return <DesktopNav />;
};

export default MainNavigation;
