import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { FaArrowCircleRight } from 'react-icons/fa';
import { students } from '@/lib/data';
import StudentCard from '../ui/StudentCard';
import MobileSubHeading from '../ui/MobileSubHeading';

const MobileClientSection = () => {
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
    <div>
      <MobileSubHeading>ZADOVOLJNI POLAZNICI</MobileSubHeading>
      <Slider ref={sliderRef} {...settings} className="mt-8">
        {students.map((student, index) => (
          <StudentCard key={index} student={student} />
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
    </div>
  );
};

export default MobileClientSection;
