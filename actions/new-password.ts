'use server';

import * as z from 'zod';
import { db } from '@/lib/db';
import { NewPasswordSchema } from '@/schemas';
import { getPasswordResetTokenByToken } from '@/data/pass-reset-token';
import { getUserByEmail } from '@/data/user';
import bcrypt from 'bcryptjs';

export const newPassword = async (
  data: z.infer<typeof NewPasswordSchema>,
  token?: string | null
) => {
  if (!token) {
    return { error: 'Token nije pronadjen' };
  }
  const validateFields = NewPasswordSchema.safeParse(data);

  if (!validateFields.success) {
    return { error: 'Lozinka nije validna' };
  }

  const { password } = validateFields.data;
  const existingToken = await getPasswordResetTokenByToken(token);
  if (!existingToken) {
    return { error: 'Token nije pronajden!' };
  }

  const hasExpired = new Date(existingToken.expires) < new Date();

  if (hasExpired) {
    return { error: 'Token je istekao!' };
  }

  const existigUser = await getUserByEmail(existingToken.email);

  if (!existigUser) {
    return { error: 'Korisnik nije pronadjen!' };
  }
  const hashedPassword = await bcrypt.hash(password, 10);

  await db.user.update({
    where: { id: existigUser.id },
    data: {
      password: hashedPassword,
    },
  });
  await db.passwordResetToken.delete({
    where: { id: existingToken.id },
  });

  return { success: 'Lozinka je uspesno promenjena' };
};
