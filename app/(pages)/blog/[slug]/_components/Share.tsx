'use client';
import { UseScreenWidth } from '@/app/hooks/screen-width';
import { useEffect, useState } from 'react';
import { FaFacebookF, FaLinkedinIn, FaWhatsapp, FaViber } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  WhatsappShareButton,
  ViberShareButton,
} from 'react-share';

const Share = ({ title, bio }: { title: string; bio: string }) => {
  const [url, setUrl] = useState('');
  useEffect(() => {
    const url = window.location.href;
    setUrl(url);
  }, []);
  const width = UseScreenWidth();
  return (
    <div className="md:w-[768px] mx-auto p-8 ">
      <p className="mb-2 font-semibold">Podeli:</p>
      <div className="flex gap-4">
        <FacebookShareButton url={url}>
          <p className="bg-blue-500 md:px-6  md:py-2 flex justify-center items-center md:rounded-md rounded-full p-2">
            <FaFacebookF color="white" />
            <span className="ml-2 text-white md:block hidden">Facebook</span>
          </p>
        </FacebookShareButton>
        <TwitterShareButton url={url} title={title}>
          <p className="bg-black md:px-6  md:py-2 flex justify-center items-center md:rounded-md rounded-full p-2">
            <FaXTwitter color="white" />
            <span className="ml-2 text-white md:block hidden">Twitter</span>
          </p>
        </TwitterShareButton>
        <LinkedinShareButton
          url={url}
          title={title}
          summary={bio}
          source="bfscomapny.rs"
        >
          <p className="bg-blue-800 md:px-6  md:py-2 flex justify-center items-center md:rounded-md rounded-full p-2">
            <FaLinkedinIn color="white" />
            <span className="ml-2 text-white md:block hidden ">LinkedIn</span>
          </p>
        </LinkedinShareButton>
        {width < 768 && (
          <>
            <WhatsappShareButton url={url} title={title}>
              <p className="bg-green-500  flex justify-center items-center  rounded-full p-2">
                <FaWhatsapp color="white" />
              </p>
            </WhatsappShareButton>
            <ViberShareButton url={url} title={title}>
              <p className="bg-purple-500  flex justify-center items-center  rounded-full p-2">
                <FaViber color="white" />
              </p>
            </ViberShareButton>
          </>
        )}
      </div>
    </div>
  );
};

export default Share;
