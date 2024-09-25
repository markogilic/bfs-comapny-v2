'use client';
import { store } from '@/lib/store';
import { Provider } from 'react-redux';
export default function TestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <div>{children}</div>
    </Provider>
  );
}
