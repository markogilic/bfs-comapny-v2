'use client';
import Image from 'next/image';
import HeroImage from '@/public/des/Hero-des.jpg';

import PrimaryBtn from '../ui/primary-btn';
import { UseScreenWidth } from '@/app/hooks/screen-width';
import MobileHeroSection from './MobileHeroSection';

const HeroSection = () => {
  const width = UseScreenWidth();

  return (
    <section className="relative md:mt-14">
      {width < 768 ? (
        <MobileHeroSection />
      ) : (
        <>
          <div>
            <Image
              src={HeroImage}
              alt="Hero image"
              priority
              style={{ objectFit: 'contain' }}
            />
          </div>
          <article className=" flex flex-col absolute top-0 left-[200px] px-[150px] py-[150px] gap-[40px]">
            <h1 className="text-[48px]  font-bold leading-[58.09px] ">
              TRANSFORMIŠEMO <br /> ZNANJE U USPEH
            </h1>
            <p className="text-[18px] leading-[25.2px] font-normal">
              Inovativni pristupi u Finansijskom Kontrolingu i Menadžmentu,{' '}
              <br />
              Edukacija i Savetovanje za Poslovno napredovanje
            </p>
            <PrimaryBtn path="/programs">POGLEDAJ PROGRAME</PrimaryBtn>
          </article>
        </>
      )}
    </section>
  );
};

export default HeroSection;
