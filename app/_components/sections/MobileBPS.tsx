import { useRef } from 'react';
import Image from 'next/image';
import Slider from 'react-slick';
import { topPrograms } from '@/lib/data';
import MobileSubHeading from '../ui/MobileSubHeading';
import MobileBestProgramFrame from '../ui/MobileBestProgramFrame';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { FaArrowCircleRight } from 'react-icons/fa';
import chekIcon from '@/public/des/carbon_checkmark-filled.svg';
import PrimaryBtn from '../ui/primary-btn';

const MobileBPS = () => {
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
    <div className="w-full">
      <MobileSubHeading>POPULARNI PROGRAMI</MobileSubHeading>
      <p className="text-center text-base mb-4">
        Najtraženiji kursevi za vaš <br /> profesionalni razvoj
      </p>

      <Slider ref={sliderRef} {...settings}>
        {topPrograms.map((program, index) => (
          <MobileBestProgramFrame key={index} bestProgram={program} />
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
      <div className="mt-8 flex flex-col gap-2">
        <p className="flex items-center justify-center gap-1 text-sm">
          <Image src={chekIcon} alt="check icon" width={18} />
          Duboko Razumevanje Finansijskog Kontrolinga
        </p>
        <p className="flex items-center justify-center gap-1 text-sm">
          <Image src={chekIcon} alt="check icon" width={18} />
          Rast i Optimizacija Poslovanja
        </p>
        <p className="flex items-center justify-center gap-1 text-sm">
          <Image src={chekIcon} alt="check icon" width={18} />
          Razvoj Veština i Liderstva
        </p>
      </div>
      <div className="mx-auto mt-8">
        <PrimaryBtn path="/programs">POGLEDAJ SVE PROGRAME</PrimaryBtn>
      </div>
    </div>
  );
};

export default MobileBPS;
