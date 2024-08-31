'use client';
import { BeatLoader } from 'react-spinners';
import { useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { newVerification } from '@/actions/new-verification';
import FormError from './from-error';
import FormSuccess from './form-success';

export const NewVerificationForm = () => {
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const onSubmit = useCallback(() => {
    if (!token) {
      setError('Token nije pronadjen');
      return;
    }
    newVerification(token)
      .then((data) => {
        setSuccess(data?.success);
        setError(data?.error);
      })
      .catch(() => {
        setError('Greska prilikom verifikacije');
      });
  }, [token]);

  useEffect(() => {
    onSubmit();
  }, [onSubmit]);

  return (
    <div className="w-[400px] py-12 px-12 rounded-lg border border-gray flex shadow-md flex-col gap-4  justify-center">
      {!success && !error && (
        <>
          {' '}
          <p>Verifikacija je u toku</p>
          <BeatLoader />
        </>
      )}
      <FormError message={error} />
      <FormSuccess message={success} />
    </div>
  );
};
