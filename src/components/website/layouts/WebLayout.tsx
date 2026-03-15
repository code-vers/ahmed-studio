"use client";

import Footer from "./footer/Footer";
import { Navbar } from "./navbar/Navbar";

interface WebLayoutProps {
  children: React.ReactNode;
}

export function WebLayout({ children }: WebLayoutProps) {
  return (
    <main className='w-full min-h-screen'>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </main>
  );
}
