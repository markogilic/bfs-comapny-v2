import SingleProgramFrame from './_components/SingleProgramFrame';
import ProudOfSection from '@/app/_components/sections/ProudOfSection';
import BestProgramsSection from '@/app/_components/sections/BestProgramsSection';
import { topPrograms } from '@/lib/data';
import { getProgramById } from '@/lib/utils';

export async function generateMetadata({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  const program = getProgramById(topPrograms, id);

  const { title, desc, imageUrl } = program || { title: '', description: '' };

  return {
    title: title,
    description: desc,
    imageUrl: imageUrl,
  };
}

const SingleProgram = ({ params }: { params: { id: string } }) => {
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
