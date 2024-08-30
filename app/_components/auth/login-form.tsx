'use client';
import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { LoginSchema } from '@/schemas';
import { useTransition, useState } from 'react';
import { clsx } from 'clsx';
import { FaRegQuestionCircle } from 'react-icons/fa';
import FormError from './from-error';
import FormSuccess from './form-success';
import Link from 'next/link';
import { login } from '@/actions/login';
import { useSearchParams } from 'next/navigation';

export const LoginForm = () => {
  const searchParams = useSearchParams();
  const urlError =
    searchParams.get('error') === 'OAuthAccountNotLinked'
      ? 'Molimo vas da se prijavite sa emailom i lozinkom'
      : '';

  const [showTwoFactor, setShowTwoFactor] = useState(false);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit = async (data: z.infer<typeof LoginSchema>) => {
    setError('');
    setSuccess('');

    startTransition(() => {
      login(data)
        .then(
          (
            response:
              | { error?: string; success?: string; twoFactor?: boolean }
              | undefined
          ) => {
            if (response?.error) {
              reset();
              setError(response.error);
            }
            if (response?.success) {
              reset();
              setSuccess(response.success);
            }
            if (response?.twoFactor) {
              setShowTwoFactor(true);
            }
          }
        )
        .catch(() => setError('Doslo je do greske'));
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-4">
        {showTwoFactor && (
          <div className="w-full relative">
            <label htmlFor="email" className="px-1 text-sm text-gray-600">
              Unesi 2FA kod:
            </label>
            <input
              {...register('code')}
              placeholder="123456"
              name="code"
              type="text"
              disabled={isPending}
              className={clsx(
                `text-md block px-3 py-2  rounded-lg w-full 
            bg-white border-2 border-gray-300 placeholder-gray-300 shadow-md focus:outline-none`,
                errors.code && 'border-red-500'
              )}
            />
            {errors.code && (
              <p className="absolute right-0 text-sm -bottom-6 text-red-500">
                {errors.code.message}
              </p>
            )}
          </div>
        )}
        {!showTwoFactor && (
          <>
            <div className="w-full relative">
              <label htmlFor="email" className="px-1 text-sm text-gray-600">
                Email:
              </label>
              <input
                {...register('email')}
                placeholder="pera@exapmle.com"
                name="email"
                type="email"
                disabled={isPending}
                className={clsx(
                  `text-md block px-3 py-2  rounded-lg w-full 
                bg-white border-2 border-gray-300 placeholder-gray-300 shadow-md focus:outline-none`,
                  errors.email && 'border-red-500'
                )}
              />
              {errors.email && (
                <p className="absolute right-0 text-sm -bottom-6 text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="w-full relative">
              <label htmlFor="password" className="px-1 text-sm text-gray-600">
                Password:
              </label>
              <input
                {...register('password')}
                name="password"
                placeholder="******"
                type="password"
                disabled={isPending}
                className={clsx(
                  `text-md block px-3 py-2  rounded-lg w-full 
                bg-white border-2 border-gray-300 placeholder-gray-300 shadow-md focus:outline-none`,
                  errors.password && 'border-red-500'
                )}
              />
              {errors.password && (
                <p className="absolute right-0 text-sm -bottom-6 text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>
          </>
        )}

        <p className="mt-2 flex justify-start items-center gap-2">
          <Link href="/reset" className="flex items-center gap-2">
            <FaRegQuestionCircle color="red" />
            <span className="underline"> Zaboravili ste lozinku?</span>
          </Link>
        </p>
        <FormError message={error || urlError} />
        <FormSuccess message={success} />
        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-bg-light py-3 mt-4 rounded-lg shadow-md text-white font-semibold hover:bg-bg-light/90"
        >
          {showTwoFactor ? 'Potvrdi' : 'Prijavi se'}
        </button>
      </div>
      {/* {errors.email && <p className="mt-4">{errors.email.message}</p>} */}
    </form>
  );
};
