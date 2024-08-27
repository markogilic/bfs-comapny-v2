import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import '@/css/embla.css';
import Header from '@/app/_components/header';
import Footer from '@/app/_components/footer';
import { Toaster } from 'react-hot-toast';
import GoogleAnalytics from './_components/GoogleAnalytics';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'BFS Company | Mentorstva, Edukacije',
    template: '%s | BFS Company',
  },
  description:
    'Edukacija i mentorstvo u finansijama, kontrolingu, liderstvu i web programiranju - unapredite svoju karijeru uz nas!',
  icons: {
    icon: '/favicon.png ',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics />
      <body className="relative ">
        <Header />
        {children}
        <Footer />

        <Toaster position="bottom-center" />
      </body>
    </html>
  );
}
