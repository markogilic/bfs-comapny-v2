import { configureStore } from '@reduxjs/toolkit';
import testSlice from '@/app/(protected)/dashboard/tests/test-slice/testSlice';
import emoTestSlice from '@/app/(protected)/dashboard/tests/test-slice/emoTestSlice';

export const store = configureStore({
  reducer: {
    test: testSlice,
    emoTest: emoTestSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
