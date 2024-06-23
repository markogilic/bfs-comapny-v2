import Link from 'next/link';

interface PrimaryBtnProps {
  children: React.ReactNode;
  path: string;
}

const PrimaryBtn = ({ children, path }: PrimaryBtnProps) => {
  return (
    <div className="  bg-btn-primary uppercase text-white py-[12px] px-[32px] md:w-fit w-[90%] flex justify-center items-center   rounded-[4px] hover:bg-btn-primary-hover transition-colors font-bold leading-[22.4px] tracking-[0.05rem] mx-auto">
      <Link href={path}>{children}</Link>
    </div>
  );
};

export default PrimaryBtn;
