'use server';
import { z } from 'zod';
import { db } from '@/lib/db';
import { TestRecordSchema } from '@/schemas';

export const webtestRecordCreate = async (
  data: z.infer<typeof TestRecordSchema>
) => {
  const validateFields = TestRecordSchema.safeParse(data);

  if (!validateFields.success) {
    return { error: 'Invalde fields' };
  }

  await db.webSkillTestRecord.create({
    data: {
      userId: data.userId,
      testType: data.testType,
      testResult: data.testResult,
      testDate: new Date(),
      testTime: data.testTime,
    },
  });

  return {
    success: 'Test record created',
  };
};
