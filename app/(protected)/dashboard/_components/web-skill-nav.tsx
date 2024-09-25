import Link from 'next/link';
import { ImHtmlFive2 } from 'react-icons/im';
import { BsFiletypeCss } from 'react-icons/bs';
import { TbBrandJavascript } from 'react-icons/tb';
import { FaReact } from 'react-icons/fa6';

export const webSkill = [
  {
    name: 'HTML',
    path: 'dashboard/web/html',
    icon: ImHtmlFive2,
  },
  {
    name: 'CSS',
    path: 'dashboard/web/css',
    icon: BsFiletypeCss,
  },
  {
    name: 'JavaScript',
    path: 'dashboard/web/js',
    icon: TbBrandJavascript,
  },
  {
    name: 'React',
    path: 'dashboard/web/react',
    icon: FaReact,
  },
] as const;

export const WebSkillNav = () => {
  return (
    <div className="shadow-inner border flex gap-4 justify-center items-center h-[62px] border-slate-300 px-4 py-2 rounded-md w-fit">
      <h1>Web - Skill</h1>
      <div className="inline-block  min-h-[1em] w-0.5 self-stretch bg-neutral-200 dark:bg-white/10"></div>
      <div className="flex gap-4">
        {webSkill.map((skill) => (
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
