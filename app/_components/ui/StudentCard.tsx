import React from 'react';

import Image from 'next/image';
import StarReview from './StarReview';
import { StaticImageData } from 'next/image';

interface StudentProp {
  student: {
    imageUrl: StaticImageData;
    name: string;
    ratings: number;
    review: string;
  };
}

const StudentCard = ({ student }: StudentProp) => {
  const { imageUrl, name, ratings, review } = student;

  return (
    <div>
      <div className="flex flex-col items-center  bg-card-bg md:w-[364px] h-[540px] py-6 px-4 mx-4 rounded-[4px] shadow-md">
        <div className="md:w-[166px] md:h-[166px] w-[128px] h-[128px] rounded-full overflow-hidden relative">
          <Image src={imageUrl} layout="fill" objectFit="cover" alt="student" />
        </div>
        <h3 className="text-[18px] font-bold mt-[16px]">{name}</h3>
        <StarReview value={ratings} />
        <p className="text-base mt-[10px] text-center leading-5">{review}</p>
      </div>
    </div>
  );
};

export default StudentCard;
