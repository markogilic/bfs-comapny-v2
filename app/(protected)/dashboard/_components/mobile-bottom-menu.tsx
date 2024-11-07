'use client';
import { SideBarMenuLink } from './sidebar-menu-link';
import { TbLayoutDashboard } from 'react-icons/tb';
import { GiNotebook } from 'react-icons/gi';
import { IoVideocamOutline } from 'react-icons/io5';
import { SiCodementor } from 'react-icons/si';
import { GrLineChart } from 'react-icons/gr';
import { FaPeopleGroup } from 'react-icons/fa6';
import { IoMdChatboxes } from 'react-icons/io';
import { usePathname, useRouter } from 'next/navigation';

export const MobileBottomMenu = () => {
  const pathname = usePathname();
  const newPathename = pathname.slice(1);
  const router = useRouter();

  console.log('pathname', newPathename);

  return (
    <div className="lg:hidden fixed bottom-0 left-0 w-full mx-auto px-4 bg-white shadow-md border-t border-gray-200 py-2 flex justify-between items-center">
      <div
        onClick={() => router.push('/dashboard')}
        className={`flex-1 flex flex-col justify-center items-center cursor-pointer ${
          newPathename === 'dashboard' ? 'text-btn-primary' : 'text-black'
        }`}
      >
        <TbLayoutDashboard size={24} />
      </div>
      <div
        onClick={() => router.push('/dashboard/tests')}
        className={`flex-1 flex flex-col justify-center items-center cursor-pointer ${
          newPathename.includes('tests') ? 'text-btn-primary' : 'text-black'
        }`}
      >
        <GiNotebook size={24} />
      </div>
      <div className="flex-1 flex justify-center items-center cursor-pointer">
        <GrLineChart size={24} />
      </div>
      <div className="flex-1 flex justify-center items-center">
        <IoVideocamOutline size={24} />
      </div>
      <div className="flex-1 flex justify-center items-center">
        <SiCodementor size={24} />
      </div>
      <div className="flex-1 flex justify-center items-center">
        <FaPeopleGroup size={24} />
      </div>
      <div className="flex-1 flex justify-center items-center">
        <IoMdChatboxes size={24} />
      </div>
    </div>
  );
};
