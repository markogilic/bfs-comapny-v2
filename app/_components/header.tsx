import Image from 'next/image';
import HeaderLogo from '../../public/des/BFS-logo.svg';
import Link from 'next/link';
import MainNavigation from './ui/MainNavigation';
import { auth } from '@/auth';

export default async function Header() {
  const session = await auth();

  return (
    <header className=" w-full fixed top-0 flex justify-between md:px-[150px] px-3 py-3 bg-slate-50 shadow-md bg-opacity-90 items-center z-[999] backdrop-blur-[0.5rem]">
      {/* logo div */}
      <div>
        <Link href={'/'}>
          <Image priority src={HeaderLogo} alt="Logo image" />
        </Link>
      </div>
      <MainNavigation session={session} />
    </header>
  );
}
