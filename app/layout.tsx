'use client';

import { ReactNode } from 'react';  
import MobileMenuButton from "@/components/VideoReel/mobileMenu";
import Sidebar from "@/components/VideoReel/Sidebar";
import { useState } from "react";
import '../global.css';

interface RootLayoutProps {
  children: ReactNode; 
}

export default function RootLayout({ children }: RootLayoutProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <html lang="en">
      <body className="bg-black text-white">
        <MobileMenuButton setIsSidebarOpen={setIsSidebarOpen} />
        <div className="flex min-h-screen" style={{ display: "flex" }}>
          <div className="sticky top-0 left-0 h-screen w-1/4 z-10">
            <Sidebar isSidebarOpen={isSidebarOpen} />
          </div>

          <div className="flex-1 overflow-y-auto p-4">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
