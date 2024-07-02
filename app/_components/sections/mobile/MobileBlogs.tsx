import React, { useRef } from 'react';

import BlogFrame from '../../ui/BlogFrame';
import MobileSubHeading from '../../ui/MobileSubHeading';
import PrimaryBtn from '../../ui/primary-btn';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { FaArrowCircleRight } from 'react-icons/fa';
import Slider from 'react-slick';

const MobileBlogs = ({ data }: any) => {
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
      <MobileSubHeading>NAJNOVIJE NA NAŠEM BLOGU</MobileSubHeading>
      <Slider ref={sliderRef} {...settings}>
        {data.map((post: any, index: number) => (
          <BlogFrame blogPost={post} key={index} />
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
      <PrimaryBtn path="/blog">POSETI BLOG</PrimaryBtn>
    </>
  );
};

export default MobileBlogs;
