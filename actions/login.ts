'use server';

import * as z from 'zod';
import { signIn } from '@/auth';
import { LoginSchema } from '@/schemas';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { AuthError } from 'next-auth';
import { generateVerificationToken } from '@/lib/tokens';
import { getUserByEmail } from '@/data/user';
import { sendVerificationEmail } from '@/lib/mail';

export const login = async (data: z.infer<typeof LoginSchema>) => {
  const validateFields = LoginSchema.safeParse(data);

  if (!validateFields.success) {
    return { error: 'Invalde fields' };
  }
  const { email, password } = validateFields.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser || !existingUser.email || !existingUser.password) {
    return { error: 'Korisnik ne postoji' };
  }

  if (!existingUser.emailVerified) {
    const verificationToken = await generateVerificationToken(
      existingUser.email
    );
    await sendVerificationEmail(
      verificationToken.email,
      verificationToken.token
    );
    return {
      error: 'Nalog nije aktiviran, link za aktivaciju vam je poslat na email',
    };
  }

  try {
    await signIn('credentials', {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case 'CredentialsSignin':
          return { error: 'Podaci nisu tacni, pokusajte ponovo' };
        default:
          return { error: 'Doslo je do greske, pokusajte ponovo' };
      }
    }
    throw error;
  }
};
