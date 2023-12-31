import { Inter } from 'next/font/google';
import './globals.css';
import Providers from './providers';
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: "In1Box",
  description: "All your mail in 1 inbox!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
          <Analytics />
        </Providers>
      </body>
    </html>
  );
}
