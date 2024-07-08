'use client';
import SubHeading from '../ui/subHeading';
import PrimaryBtn from '../ui/primary-btn';
import MobileGallery from './MobileGallery';
import Image from 'next/image';
import { galleryImages } from '@/lib/data';

import { UseScreenWidth } from '@/app/hooks/screen-width';
import { shuffleArray } from '@/lib/shuffleArray';

const Gallery = () => {
  // shuffle the images
  // const suffledArray = shuffleArray(galleryImages);
  const suffledArray = shuffleArray(galleryImages);
  const slicedGalleryImages = suffledArray.slice(0, 8);
  const width = UseScreenWidth();

  return (
    <section className="md:my-[96px] md:mx-auto my-12 mx-4">
      {width < 768 ? (
        <MobileGallery galleryImage={slicedGalleryImages} />
      ) : (
        <>
          <SubHeading>MOMENTI SA RADIONICA</SubHeading>
          {/* images */}
          <div className="galleryCards mt-12 max-w-[1140px] mx-auto ">
            {slicedGalleryImages.map((image) => (
              <div
                key={image.id}
                className="mx-auto w-[267px] h-[267px] overflow-hidden rounded-lg shadow-lg relative"
              >
                <Image
                  src={image.imageUrl}
                  alt={image.title}
                  className="object-cover w-full h-full"
                />
              </div>
            ))}
          </div>
          <div className="flex justify-center items- mt-12">
            <PrimaryBtn path="/gallery">POSETI GALERIJU</PrimaryBtn>
          </div>
        </>
      )}
    </section>
  );
};

export default Gallery;
