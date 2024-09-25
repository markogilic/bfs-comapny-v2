import { MdOutlineRecordVoiceOver } from 'react-icons/md';
import { PiUsersThreeFill } from 'react-icons/pi';
import { FaHeadSideVirus } from 'react-icons/fa6';
import Link from 'next/link';

const softSkill = [
  {
    name: 'Komunikacija',
    path: 'dashboard/soft/communication',
    icon: MdOutlineRecordVoiceOver,
  },
  {
    name: 'Stilovi liderstva',
    path: 'dashboard/soft/leadership',
    icon: PiUsersThreeFill,
  },
  {
    name: 'Emocionalna intelingencija',
    path: 'dashboard/soft/emotional-intelligence',
    icon: FaHeadSideVirus,
  },
] as const;

export const SoftSkillNav = () => {
  return (
    <div className="shadow-inner border flex gap-4 justify-center items-center h-[62px] border-slate-300 px-4 py-2 rounded-md w-fit">
      <h1>Soft - Skill</h1>
      <div className="inline-block  min-h-[1em] w-0.5 self-stretch bg-neutral-200 dark:bg-white/10"></div>
      <div className="flex gap-4">
        {softSkill.map((skill) => (
          <Link href={skill.path} key={skill.name}>
            <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 p-2 rounded-md transition-colors">
              <skill.icon size={24} />
              <p>{skill.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
