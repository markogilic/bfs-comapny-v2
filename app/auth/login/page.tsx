import React from 'react';
import Link from 'next/link';

import { LoginForm } from '@/app/_components/auth/login-form';
import { Social } from '@/app/_components/auth/social';

const LoginPage = () => {
  return (
    <div className=" h-screen flex flex-col space-y-4 justify-center items-center border-4 ">
      <div className="w-[400px] py-12 px-12 rounded-lg border border-gray flex shadow-md flex-col gap-4  justify-center">
        <h2 className="text-lg font-semibold text-bg-light text-center">
          Ulogujte se
        </h2>
        <LoginForm />

        <p>
          Jos uvek nemate nalog?{' '}
          <Link href="/auth/register">
            <span className="text-bg-light font-semibold">
              {' '}
              Registrujte se.
            </span>{' '}
          </Link>
        </p>
        <div className=" w-full py-3 flex items-center text-xs text-gray-400 uppercase before:flex-1 before:border-t before:border-gray-200 before:me-6 after:flex-1 after:border-t after:border-gray-200 after:ms-6 dark:text-neutral-500 dark:before:border-neutral-600 dark:after:border-neutral-600">
          ILI
        </div>
        {/* <div className="w-full space-y-4">
      <button className="flex hover:bg-slate-100 transition-colors justify-center items-center gap-2 border-2 border-gray-300 rounded-lg py-2 w-full">
        <FcGoogle size={30} /> <span>Ulogujte se preko Googla-a</span>
      </button>
    </div> */}
        <Social />
      </div>
    </div>
  );
};

export default LoginPage;
