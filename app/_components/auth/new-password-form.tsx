'use client';
import * as z from 'zod';
import { useTransition, useState } from 'react';
import { clsx } from 'clsx';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { NewPasswordSchema } from '@/schemas';
import FormError from './from-error';
import FormSuccess from './form-success';
import { useSearchParams } from 'next/navigation';
import { newPassword } from '@/actions/new-password';

export const NewPasswordForm = () => {
  const searchParams = useSearchParams();
  const token = searchParams.get('token');
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<z.infer<typeof NewPasswordSchema>>({
    resolver: zodResolver(NewPasswordSchema),
    defaultValues: {
      password: '',
    },
  });

  const onSubmit = async (data: z.infer<typeof NewPasswordSchema>) => {
    setError('');
    setSuccess('');

    startTransition(() => {
      newPassword(data, token).then(
        (response: { error?: string; success?: string } | undefined) => {
          setError(response?.error);
          setSuccess(response?.success);
        }
      );
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-4">
        <div className="w-full relative">
          <label htmlFor="email" className="px-1 text-sm text-gray-600">
            Nova lozinka:
          </label>
          <input
            {...register('password')}
            placeholder="******"
            name="password"
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

        <FormError message={error} />
        <FormSuccess message={success} />
        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-bg-light py-3 mt-4 rounded-lg shadow-md text-white font-semibold hover:bg-bg-light/90"
        >
          Resetuj lozinku
        </button>
      </div>
      {/* {errors.email && <p className="mt-4">{errors.email.message}</p>} */}
    </form>
  );
};
