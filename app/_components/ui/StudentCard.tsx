import React from 'react';
import testImafe from '@/public/des/review-1.jpg';
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
      <div className="flex flex-col items-center  bg-card-bg w-[364px] h-[595px] py-6 px-4 rounded-[4px] shadow-md">
        <div className="w-[166px] h-[166px] rounded-full overflow-hidden relative">
          <Image src={imageUrl} layout="fill" objectFit="cover" alt="student" />
        </div>
        <h3 className="text-[24px] font-bold mt-[30px]">{name}</h3>
        <StarReview value={ratings} />
        <p className="text-[16px] mt-[10px] text-center">{review}</p>
      </div>
    </div>
  );
};

export default StudentCard;
