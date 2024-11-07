import { RegisterForm } from '@/app/_components/auth/register-form';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { FcVideoProjector } from 'react-icons/fc';
import { FcReadingEbook } from 'react-icons/fc';
import { FcKey } from 'react-icons/fc';
import discount from '@/public/des/discount.png';
import Social from '@/app/_components/auth/social';

const RegisterPage = () => {
  return (
    <div className="lg:h-screen flex justify-center items-center pb-4 lg:pb-0">
      <div className="lg:w-[1000px] lg:mt-0 mt-[100px]  h-fit lg:py-12 w-[96%] px-4 py-4  rounded-lg border border-gray flex flex-col  lg:flex-row shadow-md ">
        {/* leva strana */}
        <div className=" h-full lg:w-1/2 flex flex-col justify-center items-center lg:px-12 gap-4 ">
          <h2 className="text-lg font-semibold text-bg-light">
            Kreirajte nalog
          </h2>
          <RegisterForm />

          <p>
            Vec ste se registrovali?{' '}
            <Link href="/login">
              <span className="text-bg-light"> Ulogujte se</span>{' '}
            </Link>
          </p>
          <div className=" w-full py-3 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600">
            ILI
          </div>
          <Social />
        </div>
        <div className="lg:inline-block hidden  h-[500px] w-0.5 self-stretch bg-neutral-100 dark:bg-white/10 my-auto"></div>
        <div className="inline-block lg:hidden  w-[86%] h-0.5 self-stretch bg-neutral-100 dark:bg-white/10 my-8 mx-auto"></div>
        {/* desna strana */}
        <div className="flex flex-col space-y-4 justify-center items-center lg:w-1/2 lg:px-16 ">
          <h2 className="lg:text-xl text-center font-semibold text-slate-400 mb-10 ">
            <q>
              Pridružite se našoj platformi za ekskluzivnu edukaciju i testove
              iz oblasti emocionalne inteligencije, liderstva i
              web-developmenta!
            </q>
          </h2>
          <div className="flex gap-4 text-sm lg:text-base">
            <div>
              <FcReadingEbook size={32} />
            </div>
            <div>
              <span className="font-semibold">
                Personalizovani Testovi znanja.&nbsp;
                <br />
              </span>
              Proverite svoje znanje u finansijama, liderstvu i više!
              Registrujte se za besplatni test.
            </div>
          </div>
          <div className="flex gap-4">
            <div>
              <FcKey size={32} />
            </div>
            <div>
              <span className="font-semibold">
                Ekskluzivan Pristup Edukativnim Resursima.&nbsp;
                <br />
              </span>
              Registrujte se i pristupite ekskluzivnim kursevima iz liderstva,
              web developmenta i emocionalne inteligencije.
            </div>
          </div>
          <div className="flex gap-4">
            <div>
              <FcVideoProjector size={32} />
            </div>
            <div>
              <span className="font-semibold">
                Interaktivni Webinar i Q&A Sesije.&nbsp;
                <br />
              </span>
              Pridružite se našim stručnjacima uživo! Registrujte se za
              nadolazeće webinare.
            </div>
          </div>
          <div className="flex gap-4">
            <div>
              <Image src={discount} alt="discount" width={32} />
            </div>
            <div>
              <span className="font-semibold">
                Ekskluzivni Popusti na Kurseve.&nbsp;
                <br />
              </span>
              Registrujte se danas i ostvarite popust na sve kurseve!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
