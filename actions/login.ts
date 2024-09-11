'use server';

import * as z from 'zod';
import { signIn } from '@/auth';
import { LoginSchema } from '@/schemas';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { AuthError } from 'next-auth';
import {
  generateVerificationToken,
  generateTwoFactorToken,
} from '@/lib/tokens';
import { getUserByEmail } from '@/data/user';
import { sendVerificationEmail, sendTwoFactorTokenEmail } from '@/lib/mail';
import { getTwoFactorTokenByEmial } from '@/data/two-factor-token';
import { getTwoFactorConfirmationByUserId } from '@/data/two-factor-confirmation';
import { db } from '@/lib/db';

export const login = async (data: z.infer<typeof LoginSchema>) => {
  const validateFields = LoginSchema.safeParse(data);

  if (!validateFields.success) {
    return { error: 'Invalde fields' };
  }
  const { email, password, code } = validateFields.data;

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
      verificationToken.token,
      existingUser?.name || ''
    );
    return {
      error: 'Nalog nije aktiviran, link za aktivaciju vam je poslat na email',
    };
  }

  if (existingUser.isTwoFactorEnabled && existingUser.email) {
    if (code) {
      const twoFactorToken = await getTwoFactorTokenByEmial(existingUser.email);

      if (!twoFactorToken) {
        return { error: 'Pogresan kod!' };
      }

      if (twoFactorToken.token !== code) {
        return { error: 'Pogresan kod!' };
      }

      const hasexpired = new Date(twoFactorToken.expires) < new Date();

      if (hasexpired) {
        return { error: 'Kod je istekao, pokusajte ponovo' };
      }

      await db.twoFactorToken.delete({
        where: { id: twoFactorToken.id },
      });

      const existingConfirmation = await getTwoFactorConfirmationByUserId(
        existingUser.id
      );

      if (existingConfirmation) {
        await db.twoFactorConfirmation.delete({
          where: { id: existingConfirmation.id },
        });
      }

      await db.twoFactorConfirmation.create({
        data: {
          userId: existingUser.id,
        },
      });
    } else {
      const twoFactorToken = await generateTwoFactorToken(existingUser.email);
      await sendTwoFactorTokenEmail(twoFactorToken.email, twoFactorToken.token);

      return { twoFactor: true };
    }
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
