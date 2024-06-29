import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const DesktopNav = () => {
  const pathname = usePathname();

  return (
    <nav>
      <ul className=" md:flex  gap-6  hidden  ">
        <li className={pathname === '/programs' ? 'text-btn-primary' : ''}>
          <Link href="/programs">Programi</Link>
        </li>
        <li className={pathname === '/gallery' ? 'text-btn-primary' : ''}>
          <Link href="/gallery">Galerija</Link>
        </li>
        <li className={pathname === '/blog' ? 'text-btn-primary' : ''}>
          <Link href="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopNav;
