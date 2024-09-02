import { SendEmailToResetPassForm } from '@/app/_components/auth/send-email-to-reset-pass';
import BfsLogoBlue from '@/public/des/logo_bfs_blue.svg';
import Image from 'next/image';

const NewPassword = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-[400px] py-12 px-8 rounded-lg border border-gray flex shadow-md flex-col gap-4 items-center justify-center">
        <Image src={BfsLogoBlue} alt="BFS Logo" width={84} />

        <SendEmailToResetPassForm />
      </div>
    </div>
  );
};

export default NewPassword;
