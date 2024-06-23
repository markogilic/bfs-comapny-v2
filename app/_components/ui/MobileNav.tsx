'use client';
import Hamburger from 'hamburger-react';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';

const MobileNav = () => {
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
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default MobileNav;
