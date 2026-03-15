"use client";

import { Navbar } from "@/components/admin/layout/navbar";
import { Sidebar } from "@/components/admin/layout/sidebar";
import { useState } from "react";

interface MainLayoutProps {
  children: React.ReactNode;
}

export function MainLayout({ children }: MainLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className='flex min-h-screen bg-normal'>
      {/* Sidebar — drawer on mobile, fixed on lg+ */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Main content area — no offset on mobile, ml-60 on lg+ */}
      <div className='flex max-w-full flex-1 flex-col overflow-x-hidden lg:ml-60'>
        <Navbar onMenuToggle={() => setIsSidebarOpen((prev) => !prev)} />

        <main className='flex-1 bg-content-bg p-4 sm:p-6'>{children}</main>
      </div>
    </div>
  );
}
