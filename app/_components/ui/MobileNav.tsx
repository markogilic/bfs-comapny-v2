'use client';
import Hamburger from 'hamburger-react';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Session } from 'next-auth';
import { MdLogin } from 'react-icons/md';
import { HiOutlineUserPlus } from 'react-icons/hi2';
import { LuLogOut } from 'react-icons/lu';
import { signOut } from 'next-auth/react';

const MobileNav = ({ session }: { session: Session | null }) => {
  const [isOpen, setOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const handlesr = (e: MouseEvent) => {
      if (!(menuRef.current as HTMLElement)?.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handlesr);
    return () => {
      document.removeEventListener('mousedown', handlesr);
    };
  }, []);
  const onClick = () => {
    signOut();
    setOpen((prev) => !prev);
  };

  return (
    <nav ref={menuRef}>
      <Hamburger size={20} toggled={isOpen} toggle={setOpen} />
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial={{ opacity: 0, scaleY: 0 }}
            animate={{ opacity: 1, scaleY: 1 }}
            exit={{ opacity: 0, scaleY: 0 }}
            className=" absolute top-[72px] left-0 w-full bg-white text-center divide-y divide-slate-200 border-b border-slate-200 z-50 shadow-md origin-top"
          >
            <li
              className="py-2  hover:bg-card-bg  transition-colors "
              onClick={() => setOpen(false)}
            >
              <Link href="/programs">Programi</Link>
            </li>
            <li
              className="py-2 hover:bg-card-bg  transition-colors"
              onClick={() => setOpen(false)}
            >
              <Link href="/gallery">Galerija</Link>
            </li>
            <li
              className="py-2 hover:bg-card-bg  transition-colors"
              onClick={() => setOpen(false)}
            >
              <Link href="/blog">Blog</Link>
            </li>
            {!session ? (
              <li className="flex justify-evenly items-center py-2  text-slate-500 font-semibold text-sm">
                <Link
                  onClick={() => setOpen(false)}
                  className="flex justify-center items-center gap-1 px-2"
                  href="/auth/login"
                >
                  <MdLogin size={23} className="text-slate-500" />
                  Prijava
                </Link>
                <Link
                  onClick={() => setOpen(false)}
                  className="flex justify-center items-center gap-1 px-2"
                  href="/auth/register"
                >
                  <HiOutlineUserPlus size={23} className="text-slate-500" />
                  Registracija
                </Link>
              </li>
            ) : (
              <li className="flex justify-evenly items-center py-2  text-slate-500 font-semibold text-sm">
                <button
                  onClick={() => onClick()}
                  className="flex justify-center items-center gap-1 px-2"
                >
                  <LuLogOut size={23} />
                  Log Out
                </button>
              </li>
            )}
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default MobileNav;
