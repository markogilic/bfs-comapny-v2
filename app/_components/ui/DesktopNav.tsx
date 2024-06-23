import React from 'react';
import Link from 'next/link';

const DesktopNav = () => {
  return (
    <nav>
      <ul className=" md:flex  gap-6  hidden  ">
        <li>
          <Link href="/programs" target="_blank">
            Programi
          </Link>
        </li>
        <li>
          <Link href="/gallery">Galerija</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
  );
};

export default DesktopNav;
