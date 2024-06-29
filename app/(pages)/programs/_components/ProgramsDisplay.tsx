import React, { useEffect, useState } from 'react';
import { topPrograms } from '@/lib/data';
import { getProgramsByType } from '@/lib/utils';
import ProgramFrame from './ProgramFrame';
import CarouselTempate from '@/app/_components/template/CarouselTempate';
import { UseScreenWidth } from '@/app/hooks/screen-width';

const ProgramDisplay = ({ type }: { type: string }) => {
  const [programs, setPrograms] = useState([] as any[]);
  const widht = UseScreenWidth();
  useEffect(() => {
    if (type === '') {
      setPrograms(topPrograms);
      return;
    }
    const programs = getProgramsByType(type, topPrograms);

    setPrograms(programs);
  }, [type]);

  if (widht < 768) {
    return (
      <div className="mx-auto w-[90%]">
        <CarouselTempate toShow={1} customeDots={true}>
          {programs?.map((program, idx) => (
            <ProgramFrame key={idx} program={program} />
          ))}
        </CarouselTempate>
      </div>
    );
  }

  return (
    <div className=" w-[1140px] grid grid-cols-4 mx-auto gap-6 ">
      {programs?.map((program, idx) => (
        <ProgramFrame key={idx} program={program} />
      ))}
    </div>
  );
};

export default ProgramDisplay;
