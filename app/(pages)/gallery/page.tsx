import GalleryFrame from './_components/GalleryFrame';
import NavigateToProgram from '@/app/_components/sections/NavigateToProgram';
import { Metadata } from 'next';
import TestGallery from './_components/TestGallery';

export const generateMetadata = (): Metadata => {
  return {
    title: 'Galerija',
    description:
      'Pogledajte našu galeriju slika i video zapisa sa edukacija, radionica i događaja iz oblasti finansija, liderstva i web programiranja!',
  };
};

const Gallery = () => {
  return (
    <main className="mt-[30px]">
      <GalleryFrame />
      {/* <TestGallery /> */}
      <NavigateToProgram />
    </main>
  );
};

export default Gallery;
