import SingleProgramFrame from './_components/SingleProgramFrame';
import ProudOfSection from '@/app/_components/sections/ProudOfSection';
import BestProgramsSection from '@/app/_components/sections/BestProgramsSection';
import { topPrograms } from '@/lib/data';
import { getProgramById } from '@/lib/utils';
import { StaticImageData } from 'next/image';
type ProgramType = {
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
  fullDesc?: {
    main: string;
    tags: string[];
    list: string[];
  };
};

const SingleProgram = ({ params }: { params: { id: number } }) => {
  const id = Number(params.id);

  const program = getProgramById(topPrograms, id);

  return (
    <div className="md:mt-[40px] mt-[61px]">
      {program && <SingleProgramFrame program={program} />}
      <ProudOfSection />
      <BestProgramsSection />
    </div>
  );
};

export default SingleProgram;
