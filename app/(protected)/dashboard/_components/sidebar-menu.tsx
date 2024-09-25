import { SideBarMenuLink } from './sidebar-menu-link';
import { TbLayoutDashboard } from 'react-icons/tb';
import { GiNotebook } from 'react-icons/gi';
import { IoVideocamOutline } from 'react-icons/io5';
import { SiCodementor } from 'react-icons/si';
import { GrLineChart } from 'react-icons/gr';
import { FaPeopleGroup } from 'react-icons/fa6';
import { IoMdChatboxes } from 'react-icons/io';

export const SideBarMenu = () => {
  return (
    <div className=" border border-slate-300 px-2 py-2 bg-white shadow-md rounded-md w-[258px] h-fit">
      <SideBarMenuLink label="Dashboard" pageLink="/dashboard">
        {' '}
        <TbLayoutDashboard size={26} />{' '}
      </SideBarMenuLink>
      <SideBarMenuLink label="Testovi" pageLink="/dashboard/tests">
        {' '}
        <GiNotebook size={26} />{' '}
      </SideBarMenuLink>
      <SideBarMenuLink label="Progres" pageLink="/dashboard/results">
        {' '}
        <GrLineChart size={26} />{' '}
      </SideBarMenuLink>
      <SideBarMenuLink label="Lekcije" pageLink="/dashboard/lecture">
        {' '}
        <IoVideocamOutline size={26} />{' '}
      </SideBarMenuLink>
      <SideBarMenuLink label="Webinari" pageLink="/dashboard/webinar">
        {' '}
        <SiCodementor size={26} />{' '}
      </SideBarMenuLink>
      <hr className="my-2 h-0.5 border-t-0 bg-neutral-100 dark:bg-white/10" />
      <SideBarMenuLink label="Alumni Klub" pageLink="/dashboard/group">
        {' '}
        <FaPeopleGroup size={26} />{' '}
      </SideBarMenuLink>
      <SideBarMenuLink label="Live Chat" pageLink="/dashboard/chat">
        {' '}
        <IoMdChatboxes size={26} />{' '}
      </SideBarMenuLink>
    </div>
  );
};
