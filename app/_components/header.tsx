import Image from 'next/image';
import HeaderLogo from '../../public/des/BFS-logo.svg';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="w-full fixed top-0 flex justify-between px-[150px] py-[12px] bg-slate-50 shadow-md bg-opacity-90 items-center z-[999]">
      {/* logo div */}
      <div>
        <Link href={'/'}>
          <Image priority src={HeaderLogo} alt="Logo image" />
        </Link>
      </div>
      <nav>
        <ul className="flex  gap-6 text- ">
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
    </header>
  );
};

export default Header;
