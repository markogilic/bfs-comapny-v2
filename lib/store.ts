import { configureStore } from '@reduxjs/toolkit';
import testSlice from '@/app/(protected)/dashboard/tests/test-slice/testSlice';
import emoTestSlice from '@/app/(protected)/dashboard/tests/test-slice/emoTestSlice';
import assertionSlice from '@/app/(protected)/dashboard/tests/test-slice/assertionSlice';
import leadSlice from '@/app/(protected)/dashboard/tests/test-slice/leadSlice';

export const store = configureStore({
  reducer: {
    test: testSlice,
    emoTest: emoTestSlice,
    assertionTest: assertionSlice,
    leadTest: leadSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
