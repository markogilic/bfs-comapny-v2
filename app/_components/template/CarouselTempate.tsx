'use client';
import React, { ReactNode, useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { FaArrowCircleRight } from 'react-icons/fa';
import { clsx } from 'clsx';

const CarouselTempate = ({
  children,
  toShow,
  customeDots,
}: {
  children: ReactNode;
  toShow: number;
  customeDots?: boolean;
}) => {
  let sliderRef = useRef<Slider | null>(null);
  const settings = {
    dots: customeDots,
    infinite: true,
    speed: 500,
    slidesToShow: toShow,
    slidesToScroll: 1,
    swipe: true,
    arrows: false,
  };
  return (
    <>
      <Slider ref={sliderRef} {...settings} className="mt-8">
        {children}
      </Slider>
      <div
        className={clsx(
          'flex z-55   justify-center items-center gap-5',
          customeDots ? 'mt-10' : 'sm:mt-5'
        )}
      >
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
    </>
  );
};

export default CarouselTempate;
