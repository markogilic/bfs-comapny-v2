'use server';
import * as z from 'zod';
import bcrypt from 'bcryptjs';
import { RegisterSchema } from '@/schemas';
import { db } from '@/lib/db';
export const registration = async (data: z.infer<typeof RegisterSchema>) => {
  const validateFields = RegisterSchema.safeParse(data);

  if (!validateFields.success) {
    return { error: 'Invalde fields' };
  }
  const { email, password, name } = validateFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);

  const existingUser = await db.user.findUnique({
    where: { email },
  });
  if (existingUser) {
    return { error: 'Email adresa je vec u upotrebi' };
  }

  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
    },
  });

  // todo:send verification toke email
  return {
    success:
      'Uspesno ste kreirali nalog, link za akativaciju vam je poslat na email.',
  };
};
