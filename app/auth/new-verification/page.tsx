import { Suspense } from 'react';
import { NewVerificationForm } from '@/app/_components/auth/new-verification-form';

const NewVerificationPage = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <Suspense fallback={<div>Loading...</div>}>
        <NewVerificationForm />
      </Suspense>
    </div>
  );
};

export default NewVerificationPage;
