import MobileHeroImage from '@/public/mob/Hero-mob.jpg';
import Image from 'next/image';
import PrimaryBtn from '../ui/primary-btn';

const MobileHeroSection = () => {
  return (
    <>
      <article className="flex flex-col  top-0 left-0 px-[20px] py-[20px] gap-5 bg-card-bg pt-[100px]">
        <h1 className="text-[24px] font-bold leading-[29.09px] text-center">
          TRANSFORMIŠEMO <br /> ZNANJE U USPEH
        </h1>
        <p className="text-[14px] leading-[20.2px] font-normal text-center">
          Inovativni pristupi u Finansijskom <br /> Kontrolingu i Menadžmentu,{' '}
          <br />
          Edukacija i Savetovanje za Poslovno napredovanje
        </p>
        <PrimaryBtn path="/programs">POGLEDAJ PROGRAME</PrimaryBtn>
      </article>
      <Image src={MobileHeroImage} alt="Mobile Hero image" />
    </>
  );
};

export default MobileHeroSection;
