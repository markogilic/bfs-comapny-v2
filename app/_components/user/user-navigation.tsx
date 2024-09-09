'use client';
import { FaUserCircle } from 'react-icons/fa';
import { signOut } from 'next-auth/react';
import { useState } from 'react';
import UserMenuLink from './user-menu-link';
import { CiSettings } from 'react-icons/ci';
import { IoPersonOutline } from 'react-icons/io5';
import { CiCreditCard1 } from 'react-icons/ci';
import { FiHelpCircle } from 'react-icons/fi';
import { IoBagCheckOutline } from 'react-icons/io5';
import { LuLogOut } from 'react-icons/lu';
import { IoMdArrowDropdown } from 'react-icons/io';
import { MdLogin } from 'react-icons/md';
import { HiOutlineUserPlus } from 'react-icons/hi2';
import { AnimatePresence, motion } from 'framer-motion';

import Image from 'next/image';

const UserNaviagtion = ({ session }: any) => {
  // const { data } = useSession();
  // const user = data?.user;
  // const user = useCurrentUser();
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => {
    signOut();
    setIsOpen((prev) => !prev);
  };

  const openMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <div className="flex gap-4 items-center">
        <div
          onClick={openMenu}
          className="flex items-center relative rounded-full  shadow-inner px-4 py-1 border border-slate-300 cursor-pointer"
        >
          {session ? (
            <>
              <span className="text-slate-600 font-semibold mr-2">
                {session.user.name}
              </span>
              <div className="mr-2">
                {session.user.image ? (
                  <Image
                    src={session.user.image}
                    alt="user image"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                ) : (
                  <FaUserCircle size={32} className="text-bg-light" />
                )}

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0   mt-4 bg-white px-4  py-2 rounded-xl shadow-inner border border-slate-300"
                    >
                      <UserMenuLink
                        label="Podesavanja"
                        pageLink="/dashboard/settings"
                      >
                        {' '}
                        <CiSettings size={24} />{' '}
                      </UserMenuLink>
                      <UserMenuLink
                        label="Profil"
                        pageLink="/dashboard/profile"
                      >
                        <IoPersonOutline size={24} />
                      </UserMenuLink>

                      <hr className=" h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
                      <UserMenuLink label="Placanje" pageLink="/dashboard">
                        <CiCreditCard1 size={24} />
                      </UserMenuLink>
                      <UserMenuLink label="Pretplata" pageLink="/dashboard">
                        <IoBagCheckOutline size={24} />
                      </UserMenuLink>

                      <hr className=" h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:via-neutral-400" />
                      <UserMenuLink label="Pomoc" pageLink="/dashboard">
                        <FiHelpCircle size={24} />
                      </UserMenuLink>

                      <div
                        onClick={onClick}
                        className="w-full px-4 rounded-xl  py-3 flex items-center gap-2 group hover:bg-slate-100 transition-colors    "
                      >
                        <LuLogOut size={23} />
                        <span className="text-slate-500 font-semibold text-md">
                          Izloguj se
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </>
          ) : (
            <div>
              <FaUserCircle size={32} className="text-btn-primary" />
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-0  mt-4 bg-white px-4  py-2 rounded-xl shadow-inner border border-slate-300"
                  >
                    <UserMenuLink label="Prijava" pageLink="/auth/sigin">
                      <MdLogin size={24} />
                    </UserMenuLink>
                    <UserMenuLink
                      label="Registracija"
                      pageLink="/auth/register"
                    >
                      <HiOutlineUserPlus size={24} />
                    </UserMenuLink>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          )}

          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            className="origin-center ml-1"
          >
            <IoMdArrowDropdown className="origin-center " />
          </motion.div>
        </div>
      </div>

      {/* <div className="flex gap-4 items-center">
        <Link
          href="/signin"
          className="text-slate-600 font-semibold hover:text-slate-500"
        >
          Prijava
        </Link>
        <Link
          href="/regiser"
          className="text-slate-600 font-semibold hover:text-slate-500"
        >
          Registruj se
        </Link>
      </div> */}
    </div>
  );
};

export default UserNaviagtion;
