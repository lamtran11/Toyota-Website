import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/share-components/Navbar';
import Footer from '@/components/share-components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'トヨタ ウェブサイト',
  description: 'Toyota Land Cruiser',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='jp'>
      <body className='p-0 m-0'>
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
