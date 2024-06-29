'use client';
import { useState } from 'react';
import { clsx } from 'clsx';
import ProgramDisplay from './ProgramsDisplay';
import Image from 'next/image';
import chekIcon from '@/public/des/carbon_checkmark-filled.svg';

const ProgramsFrame = () => {
  const [activeTab, setActiveTab] = useState('');
  const [leftBtn, setLeftBtn] = useState(false);
  const [rightBtn, setRightBtn] = useState(false);

  const hadleLeftBtn = () => {
    if (activeTab === 'group') setActiveTab('');
    if (rightBtn) setRightBtn(false);
    if (activeTab === 'individual' || activeTab === '') setActiveTab('group');

    setLeftBtn(!leftBtn);
  };
  const hadleRightBtn = () => {
    if (activeTab === 'individual') setActiveTab('');
    if (leftBtn) setLeftBtn(false);
    if (activeTab === 'group' || activeTab === '') setActiveTab('individual');

    setRightBtn(!rightBtn);
  };

  return (
    <div className=" flex flex-col md:gap-12 gap-4 md:pb-[96px] ">
      <div className="md:flex-row gap-4 w-[90%]  mx-auto flex flex-col  md:w-fit">
        <button
          onClick={hadleLeftBtn}
          className={clsx(
            'md:w-[320px] md:hover:scale-[1.025] text-center  rounded-[4px] text-bg-light w-full uppercase py-[10px] md:px-6 bg-card-bg transition-transform',
            leftBtn &&
              'border-2  border-bg-light font-semibold  bg-bg-light/10 '
          )}
        >
          grupne edukacije
        </button>
        <button
          onClick={hadleRightBtn}
          className={clsx(
            'md:w-[320px] md:hover:scale-[1.025] rounded-[4px]  text-bg-light uppercase py-[10px] md:px-6 bg-card-bg transition-transform',
            rightBtn &&
              'border-2  border-bg-light font-semibold  bg-bg-light/10 '
          )}
        >
          individulani programi
        </button>
      </div>
      <div className="w-full">
        <ProgramDisplay type={activeTab} />
      </div>
      <div className="md:flex-row justify-center md:gap-6 flex flex-col gap-2 mb-12 ">
        <p className="flex items-center justify-center gap-1">
          <Image src={chekIcon} alt="check icon" />
          Duboko Razumevanje Finansijskog Kontrolinga
        </p>
        <p className="flex items-center justify-center gap-1">
          <Image src={chekIcon} alt="check icon" />
          Rast i Optimizacija Poslovanja
        </p>
        <p className="flex items-center justify-center gap-1">
          <Image src={chekIcon} alt="check icon" />
          Razvoj Veština i Liderstva
        </p>
      </div>
    </div>
  );
};

export default ProgramsFrame;
