'use client';
import React, { useState, useEffect } from 'react';
import { galleryImages } from '@/lib/data';
import { StaticImageData } from 'next/image';
import GalleryTemplateGrid from './GalleryTemplateGrid';
import { UseScreenWidth } from '@/app/hooks/screen-width';
import { clsx } from 'clsx';
import CarouselTempate from '@/app/_components/template/CarouselTempate';
import Image from 'next/image';

interface GalleryProps {
  id: number;
  imageUrl: StaticImageData;
  title: string;
}

const GalleryFrame = () => {
  const [galleryOne, setGalleryOne] = useState<GalleryProps[]>([]);
  const [galleryTwo, setGalleryTwo] = useState<GalleryProps[]>([]);
  const [galleryOneActive, setGalleryOneActive] = useState(true);
  const [galleryTwoActive, setGalleryTwoActive] = useState(false);

  const width = UseScreenWidth();

  useEffect(() => {
    setGalleryOne(galleryImages.slice(0, 10));
    setGalleryTwo(galleryImages.slice(10, galleryImages.length));
  }, []);

  const handleGalleryOne = () => {
    setGalleryOneActive(true);
    setGalleryTwoActive(false);
  };
  const handleGalleryTwo = () => {
    setGalleryOneActive(false);
    setGalleryTwoActive(true);
  };

  return (
    <section className="md:py-[96px] md:px-[150px] md:flex md:flex-col   md:gap-12 pt-6 pb-12 px-4">
      {width < 768 ? (
        <div className="mt-10 w-[90%] mx-auto ">
          <CarouselTempate toShow={1}>
            {galleryImages.map((gallery, index) => (
              <div key={index} className="h-[250px]">
                <Image
                  src={gallery.imageUrl}
                  alt={gallery.title}
                  className="px-1"
                />
              </div>
            ))}
          </CarouselTempate>
        </div>
      ) : (
        <>
          <div className="mx-auto w-fit flex  ">
            <span
              onClick={handleGalleryOne}
              className={clsx(
                'cursor-pointer  border-black py-2 px-6  hover:text-btn-primary hover:border-btn-primary transition-colors',
                galleryOneActive ? 'border-b-[3px]' : 'border-b-[1px]'
              )}
            >
              Kategorija 1
            </span>
            <span
              onClick={handleGalleryTwo}
              className={clsx(
                'cursor-pointer  border-black py-2 px-6  hover:text-btn-primary hover:border-btn-primary transition-colors',
                galleryTwoActive ? 'border-b-[3px]' : 'border-b-[1px]'
              )}
            >
              Kategorija 2
            </span>
          </div>
          <div>
            {galleryOneActive && <GalleryTemplateGrid gallery={galleryOne} />}
            {galleryTwoActive && <GalleryTemplateGrid gallery={galleryTwo} />}
          </div>
        </>
      )}
    </section>
  );
};

export default GalleryFrame;
