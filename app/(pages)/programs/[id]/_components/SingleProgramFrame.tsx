import React from 'react';
import { StaticImageData } from 'next/image';
import SubHeading from '@/app/_components/ui/subHeading';
import ProgramForm from '@/app/_components/forms/ProgramForm';

interface ProgramProps {
  id: number;
  imageUrl: StaticImageData;
  typeData: string;
  type: string;
  title: string;
  desc: string;
  stats: {
    duration: string;
    location: string;
    price: string;
  };
  fullDesc: {
    main: string;
    tags?: string[];
    titleList?: string;
    list: string[];
    optionalFileds?: string[];
    final?: string;
  };
}

const SingleProgramFrame = ({ program }: { program: ProgramProps }) => {
  const { title, stats, fullDesc, typeData } = program;

  return (
    <div className="md:px-[150px] md:py-[96px] pt-6 px-4 pb-12">
      <h1 className="md:text-[36px] text-center mx-auto font-bold uppercase text-[28px]">
        {title}
      </h1>
      <div className="md:flex md:mt-12 mt-6">
        <div className="md:w-1/2">
          <p className="font-semibold">
            {typeData === 'individual'
              ? 'Individualni program uz podršku mentora'
              : 'Grupni program'}
          </p>
          <p className="font-semibold"> Trajanje: {stats.duration}</p>
          <p className="font-semibold"> Lokacija: {stats.location}</p>
          <p className="font-semibold"> Cena: {stats.price}</p>
          <p className="font-base text-xs mt-4">
            *plaćanje se vrši u dinarskoj protivvrednosti po srednjem <br />
            kursu Narodne banke Srbije na dan plaćannja
          </p>
          <p className="mt-6">{fullDesc.main}</p>
          <p className="mt-6">
            {fullDesc?.titleList ? fullDesc.titleList : 'Kurs obuhvata:'}
          </p>
          <ul className="list-disc pl-10 mt-2">
            {fullDesc?.list.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          {fullDesc?.final && <p className="mt-6">{fullDesc.final}</p>}
        </div>
        {/* form compnent */}
        <div className="md:w-1/2 w-full mt-8 md:mt-0">
          <div className="md:w-[70%] mx-auto">
            <p className="font-bold text-lg uppercase">prijava</p>
            <ProgramForm
              programName={program.title}
              optionalFields={fullDesc.optionalFileds}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProgramFrame;
