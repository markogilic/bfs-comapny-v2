'use server';
import * as z from 'zod';

import { RegisterSchema } from '@/schemas';

export const registration = async (data: z.infer<typeof RegisterSchema>) => {
  const validateFields = RegisterSchema.safeParse(data);

  if (!validateFields.success) {
    return { error: 'Invalde fields' };
  }
  return { success: 'Email sent' };
};
