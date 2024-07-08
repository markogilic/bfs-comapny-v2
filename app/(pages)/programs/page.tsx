import ProgramsFrame from './_components/ProgramsFrame';
import ProudOfSection from '@/app/_components/sections/ProudOfSection';
import ClientSection from '@/app/_components/sections/ClientSection';
import { Metadata } from 'next';

export const generateMetadata = (): Metadata => {
  return {
    title: 'Programi',
    description:
      'Pogledajte naše programe edukacija, radionica i događaja iz oblasti finansija, liderstva i web programiranja!',
  };
};

const Programs = () => {
  return (
    <div className="mt-[72px] pt-6 ">
      <ProgramsFrame />
      <ProudOfSection />
      <ClientSection />
    </div>
  );
};

export default Programs;
