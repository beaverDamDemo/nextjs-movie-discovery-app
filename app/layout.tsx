import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Image from 'next/image';
import Link from 'next/link';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Popular Movies - Next.js Movie Discovery App',
  description: 'Discover popular movies using Next.js and TMDB API',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="header flex items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2">
            <Image src="/favicon.png" alt="App Logo" width={32} height={32} />
            <span className="font-bold text-lg">Movie Discovery</span>
          </Link>
        </header>

        <main className="p-6">{children}</main>

        <footer className="footer flex items-center justify-center px-6 py-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Movie Discovery. All rights
            reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}
