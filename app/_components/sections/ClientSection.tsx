'use client';
import SubHeading from '../ui/subHeading';

import { EmblaOptionsType } from 'embla-carousel';
import { UseScreenWidth } from '@/app/hooks/screen-width';
import MobileClientSection from './MobileClientSection';
import CarouselTempate from '../template/CarouselTempate';
import { students } from '@/lib/data';
import StudentCard from '../ui/StudentCard';

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
          <div className="w-[1130px] mx-auto">
            <CarouselTempate toShow={3} customeDots={true}>
              {students.map((student, idx) => (
                <StudentCard key={idx} student={student} />
              ))}
            </CarouselTempate>
          </div>
          {/* <EmblaCarousel options={OPTIONS} /> */}
        </>
      )}
    </section>
  );
};

export default ClientSection;
