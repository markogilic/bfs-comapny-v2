'use server';

import { z } from 'zod';
import { db } from '@/lib/db';
import { EmoTestSchema } from '@/schemas';

export const emoRecordCreate = async (data: z.infer<typeof EmoTestSchema>) => {
  const validateFields = EmoTestSchema.safeParse(data);

  if (!validateFields.success) {
    return { error: 'Invalde fields' };
  }

  await db.emoTestRecords.create({
    data: {
      userId: data.userId,
      testType: data.testType,
      tetPoints: data.tetPoints,
      seiPoints: data.seiPoints,
      eiePoints: data.eiePoints,
      totalPoints: data.totalPoints,
      testDate: new Date(),
    },
  });
  return {
    success: 'Test record created',
  };
};
