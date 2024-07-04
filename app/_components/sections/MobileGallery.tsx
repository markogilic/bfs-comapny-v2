import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { FaArrowCircleRight } from 'react-icons/fa';
import MobileSubHeadin from '../ui/MobileSubHeading';
import Image, { StaticImageData } from 'next/image';
import PrimaryBtn from '../ui/primary-btn';

interface imageProps {
  id: number;
  imageUrl: StaticImageData;
  title: string;
}

const MobileGallery = ({ galleryImage }: { galleryImage: imageProps[] }) => {
  let sliderRef = useRef<Slider | null>(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipe: true,
    arrows: false,
  };
  return (
    <>
      <MobileSubHeadin>momenti sa radionica</MobileSubHeadin>
      <Slider ref={sliderRef} {...settings} className="mt-8">
        {galleryImage.map((image) => (
          <div
            key={image.id}
            className=" w-[267px] h-[267px]  overflow-hidden  shadow-sm relative px-4"
          >
            <Image
              src={image.imageUrl}
              alt={image.title}
              className="object-cover w-full h-full rounded-sm shadow-lg "
            />
          </div>
        ))}
      </Slider>
      <div className="flex z-55 mt-10  justify-center items-center gap-5">
        <button onClick={() => sliderRef?.current?.slickPrev()}>
          <FaArrowCircleLeft size={24} color="#495696" />
        </button>
        <button
          onClick={() => sliderRef?.current?.slickNext()}
          className="cursor-pointer"
        >
          <FaArrowCircleRight size={24} color="#495696" />
        </button>
      </div>
      <div className="mt-8">
        <PrimaryBtn path="/gallery">poseti galeriju</PrimaryBtn>
      </div>
    </>
  );
};

export default MobileGallery;
