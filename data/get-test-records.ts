import { db } from '@/lib/db';
export const getTestRecordsByUserId = async (userId: string) => {
  if (!userId) {
    return null;
  }
  const testRecords = await db.webSkillTestRecord.findMany({
    where: {
      userId,
    },
    orderBy: {
      testDate: 'desc',
    },
  });

  return testRecords;
};
