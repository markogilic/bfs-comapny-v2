import ProgramsFrame from './_components/ProgramsFrame';
import ProudOfSection from '@/app/_components/sections/ProudOfSection';
import ClientSection from '@/app/_components/sections/ClientSection';
import { Metadata } from 'next';

export const generateMetadata = (): Metadata => {
  const baseUrl = process.env.BASE_METADATA_IMAGE_URL;
  const imageName = 'metadata_programs_page.jpg';
  const openGraphImageUrl = `${baseUrl}${imageName}`;

  return {
    title: 'Programi | BFS Company',
    description:
      'Pogledajte naše programe edukacija, radionica i događaja iz oblasti finansija, liderstva i web programiranja!',
    openGraph: {
      title: 'Programi | BFS Company',
      description:
        'Pogledajte naše programe edukacija, radionica i događaja iz oblasti finansija, liderstva i web programiranja!',
      images: [
        {
          url: openGraphImageUrl,
          width: 1200,
          height: 630,
          alt: 'Programi',
        },
      ],
    },
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
