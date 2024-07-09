'use client';
import SubHeading from '@/app/_components/ui/subHeading';
import Link from 'next/link';
import LogoImage from '@/public/des/logo_bfs_co 3.svg';
import Image from 'next/image';
import { MdEmail } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';
import { FaPhoneAlt } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import ConatctForm from './forms/ConatctForm';

const Footer = () => {
  return (
    <section className=" bg-bg-darck md:px-[150px] md:pt-[96px] py-12 px-4 flex flex-col gap-12">
      <SubHeading style="text-white">KOPNTAKTIRAJTE NAS</SubHeading>
      <div className="mx-auto flex justify-center items-center  md:flex-row flex-col-reverse gap-8 ">
        <div className="md:w-[540px] w-[120px] ">
          <Image src={LogoImage} alt="logo" className="mr-[60px]" />
        </div>
        <ConatctForm />
      </div>
      <div className="flex flex-col gap-4 justify-evenly items-center md:flex-row">
        <div className="flex justify-center items-center gap-2">
          <MdEmail className="text-white " />
          <p className="text-white text-base">office@bfscomapny.rs</p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <FaLocationDot className="text-white " />
          <p className="text-white text-base">Jurija Gagarina 14nj, Beograd</p>
        </div>
        <div className="flex justify-center items-center gap-2">
          <FaPhoneAlt className="text-white " />
          <p className="text-white text-base">+381604557700</p>
        </div>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/company/bfs-institut/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-white text-2xl" />
          </a>
          <a
            href="https://www.instagram.com/bfs_company/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="text-white text-2xl" />
          </a>
        </div>
      </div>
      <div className="text-white mx-auto">
        © 2023 BFS Company. All rights reserved.{' '}
        <Link href="/tearms" className="underline">
           Tearms of Services | Privacy Policy
        </Link>
      </div>
    </section>
  );
};

export default Footer;
