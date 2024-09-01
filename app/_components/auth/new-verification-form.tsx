'use client';
import { BeatLoader } from 'react-spinners';
import { useSearchParams } from 'next/navigation';
import { useCallback, useEffect, useState } from 'react';
import { newVerification } from '@/actions/new-verification';
import FormError from './from-error';
import FormSuccess from './form-success';
import Image from 'next/image';
import Link from 'next/link';
import { MdOutlineLogin } from 'react-icons/md';

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
    <div className="w-[400px] h-[350px] py-8 px-12 rounded-lg border border-gray flex shadow-md flex-col gap-4  justify-center items-center">
      <Image
        src="/des/logo_bfs_blue.svg"
        width={100}
        height={100}
        alt="bfs comapny logo"
      />
      {!success && !error && (
        <>
          {' '}
          <p>Verifikacija je u toku</p>
          <BeatLoader />
        </>
      )}
      <FormError message={error} />
      <FormSuccess message={success} />
      {success && (
        <Link
          href="auth/login"
          className=" flex  items-center justify-center px-5 py-2 gap-4 text-base font-medium text-gray-500 rounded-lg bg-gray-50 hover:text-gray-900 hover:bg-gray-100"
        >
          <span>Ulogujte se</span> <MdOutlineLogin size={24} />{' '}
        </Link>
      )}
    </div>
  );
};
