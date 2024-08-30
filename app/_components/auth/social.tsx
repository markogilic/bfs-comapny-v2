'use client';
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { signIn } from 'next-auth/react';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';

const Social = () => {
  const onClick = (provider: 'google') => {
    signIn(provider, { callbackUrl: DEFAULT_LOGIN_REDIRECT });
  };

  return (
    <div className="w-full space-y-4">
      <button
        onClick={() => onClick('google')}
        className="flex hover:bg-slate-100 transition-colors justify-center items-center gap-2 border-2 border-gray-300 rounded-lg py-2 w-full"
      >
        <FcGoogle size={30} /> <span>Ulogujte se preko Googla-a</span>
      </button>
    </div>
  );
};

export default Social;
