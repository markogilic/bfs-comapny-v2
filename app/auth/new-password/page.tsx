import React from 'react';
import BfsLogoBlue from '@/public/des/logo_bfs_blue.svg';
import Image from 'next/image';
import { NewPasswordForm } from '@/app/_components/auth/new-password-form';
const NewPasswordPage = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-[400px] py-12 px-12 rounded-lg border border-gray flex shadow-md flex-col gap-4 items-center justify-center">
        <Image src={BfsLogoBlue} alt="BFS Logo" width={84} />

        <NewPasswordForm />
      </div>
    </div>
  );
};

export default NewPasswordPage;
