'use client';
import SubHeading from '../ui/subHeading';
import EmblaCarousel from '../embla-carousel/EmblaCarousel';
import { EmblaOptionsType } from 'embla-carousel';
import { UseScreenWidth } from '@/app/hooks/screen-width';
import MobileClientSection from './MobileClientSection';

const OPTIONS: EmblaOptionsType = {};

const ClientSection = () => {
  const width = UseScreenWidth();
  return (
    <section className="md:px-[150px] md:py-[96px] px-4 py-12  ">
      {width < 768 ? (
        <MobileClientSection />
      ) : (
        <>
          <SubHeading>ZADOVOLJNI POLAZNICI</SubHeading>

          <EmblaCarousel options={OPTIONS} />
        </>
      )}
    </section>
  );
};

export default ClientSection;
