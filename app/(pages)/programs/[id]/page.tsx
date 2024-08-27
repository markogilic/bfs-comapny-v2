import SingleProgramFrame from './_components/SingleProgramFrame';
import ProudOfSection from '@/app/_components/sections/ProudOfSection';
import BestProgramsSection from '@/app/_components/sections/BestProgramsSection';
import { topPrograms } from '@/lib/data';
import { getProgramById } from '@/lib/utils';

export async function generateMetadata({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  const program = getProgramById(topPrograms, id);
  const baseUrl = process.env.BASE_PROGRAM_IMAGE_URL;
  const openGraphImageUrl = `${baseUrl}${id}.jpg`;
  const { title, desc } = program || { title: '', description: '' };
  const fullTitle = `${title} | BFS Comapny`;
  return {
    title: fullTitle,
    description: desc,
    imageUrl: openGraphImageUrl,
    openGraph: {
      title: fullTitle,
      description: desc,
      images: [
        {
          url: openGraphImageUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
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
