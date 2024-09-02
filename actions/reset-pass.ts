'use server';
import * as z from 'zod';
import { ResetPassSchema } from '@/schemas';
import { getUserByEmail } from '@/data/user';
import { sendPasswordResetEmail } from '@/lib/mail';
import { generatePasswordResetToken } from '@/lib/tokens';

export const resetPass = async (data: z.infer<typeof ResetPassSchema>) => {
  const validateFields = ResetPassSchema.safeParse(data);

  if (!validateFields.success) {
    return { error: 'Email nije validan' };
  }

  const { email } = validateFields.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser) {
    return { error: 'Korisnik sa ovim emailom ne postoji' };
  }

  const passwordResetToken = await generatePasswordResetToken(email);

  await sendPasswordResetEmail(
    passwordResetToken.email,
    passwordResetToken.token,
    existingUser.name || ''
  );

  return { success: 'Email za resetovanje sifre je poslat' };
};
