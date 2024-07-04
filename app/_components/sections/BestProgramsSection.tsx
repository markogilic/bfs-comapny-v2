'use client';
import Image from 'next/image';

import SubHeading from '../ui/subHeading';

import PrimaryBtn from '../ui/primary-btn';
import finkonImage from '@/public/des/programme-3.jpg';
import fzpImage from '@/public/des/programme-4.jpg';
import emolidImage from '@/public/des/programme-2.jpg';
import intervjuImage from '@/public/des/programme-1.jpg';
import chekIcon from '@/public/des/carbon_checkmark-filled.svg';
import { UseScreenWidth } from '@/app/hooks/screen-width';
import MobileBPS from './MobileBPS';
import { topPrograms } from '@/lib/data';
import ProgramFrame from '@/app/(pages)/programs/_components/ProgramFrame';

const BestProgramsSection = () => {
  const width = UseScreenWidth();
  const programs = topPrograms.slice(0, 4);

  return (
    <section className="md:px-[150px] md:py-[96px] flex flex-col gap-[48px] flex-wrap py-12 px-4">
      {width < 768 ? (
        <MobileBPS />
      ) : (
        <>
          <SubHeading>POPULARNI PROGRAMI</SubHeading>
          <p className="text-center text-[18px] ">
            Najtraženiji kursevi za vaš profesionalni razvoj
          </p>
          <div className="flex gap-[48px] mx-auto ">
            {programs.map((program) => (
              <ProgramFrame key={program.id} program={program} />
            ))}
          </div>
          <div className="flex justify-center gap-6">
            <p className="flex items-center justify-center gap-1">
              <Image src={chekIcon} alt="check icon" />
              Duboko Razumevanje Finansijskog Kontrolinga
            </p>
            <p className="flex items-center justify-center gap-1">
              <Image src={chekIcon} alt="check icon" />
              Rast i Optimizacija Poslovanja
            </p>
            <p className="flex items-center justify-center gap-1">
              <Image src={chekIcon} alt="check icon" />
              Razvoj Veština i Liderstva
            </p>
          </div>
          <div className="mx-auto">
            <PrimaryBtn path="/programs">POGLEDAJ PROGRAME</PrimaryBtn>
          </div>
        </>
      )}
    </section>
  );
};

export default BestProgramsSection;
