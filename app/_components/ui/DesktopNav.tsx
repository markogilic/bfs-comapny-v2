'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const DesktopNav = ({ session }: any) => {
  const pathname = usePathname();

  return (
    <>
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
      <div className="flex justify-center items-center gap-2 border border-gray-300 shadow-inner px-2 py-1 rounded-full">
        {session ? (
          <p>Sada ste ulogovani </p>
        ) : (
          <>
            <Link
              href="/auth/login"
              className="px-4 py-2 hover:bg-slate-200 rounded-full  transition-colors"
            >
              Uloguj se!
            </Link>
            <Link
              href="/auth/register"
              className="bg-btn-primary  text-white px-4 py-2 rounded-full font-semibold hover:bg-btn-primary-hover transition-colors"
            >
              Registruj se!
            </Link>
          </>
        )}
      </div>
    </>
  );
};

export default DesktopNav;
