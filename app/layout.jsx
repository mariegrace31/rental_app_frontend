"use client"
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import "./globals.css";
import { Ubuntu } from 'next/font/google';

const ubuntu = Ubuntu({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
});

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}