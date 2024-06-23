import Image from 'next/image';

import LinkImage from '@/public/des/last_cta.jpg';
import Link from 'next/link';

const NavigateToProgram = () => {
  return (
    <section className="sm:flex justify-center items-center bg-card-bg pt-12">
      <div className="sm:w-1/2 sm:ml-[150px] border  px-4 mb-8 ">
        <h3 className="sm:text-[36px] font-bold uppercase sm:mx-auto leading-8 text-[28px]">
          Istražite programe <br /> koji će doprineti <br /> vašem poslovanju
        </h3>
        <Link
          href="/programs"
          className=" bg-btn-primary uppercase text-white py-[12px] px-[32px] sm:w-fit w-full  flex justify-center items-center   rounded-[4px] hover:bg-btn-primary-hover transition-colors font-bold leading-[22.4px] tracking-[0.05rem] mt-12"
        >
          pogledaj programe
        </Link>
      </div>
      <Image
        className="sm:w-1/2 object-cover"
        src={LinkImage}
        alt="Link to program"
      />
    </section>
  );
};

export default NavigateToProgram;
