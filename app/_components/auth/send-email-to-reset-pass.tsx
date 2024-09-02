'use client';
import * as z from 'zod';
import { useTransition, useState } from 'react';
import { clsx } from 'clsx';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { ResetPassSchema } from '@/schemas';
import FormError from './from-error';
import FormSuccess from './form-success';
import { resetPass } from '@/actions/reset-pass';
import { ClipLoader } from 'react-spinners';

export const SendEmailToResetPassForm = () => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof ResetPassSchema>>({
    resolver: zodResolver(ResetPassSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = async (data: z.infer<typeof ResetPassSchema>) => {
    setError('');
    setSuccess('');

    startTransition(() => {
      resetPass(data).then(
        (response: { error?: string; success?: string } | undefined) => {
          setError(response?.error);
          setSuccess(response?.success);
        }
      );
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full">
      <div className="flex flex-col gap-4">
        <div className="w-full relative mt-4">
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
              `text-md block px-3 py-2   rounded-lg w-full 
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

        <FormError message={error} />
        <FormSuccess message={success} />
        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-bg-light py-3 mt-4 flex justify-center items-center rounded-lg shadow-md text-white font-semibold hover:bg-bg-light/90"
        >
          {isPending ? <ClipLoader size={20} color="#fff" /> : 'Posalji zahtev'}
        </button>
      </div>
      {/* {errors.email && <p className="mt-4">{errors.email.message}</p>} */}
    </form>
  );
};
