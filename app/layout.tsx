"use client";

import MainContent from "@/components/VideoReel/mainContent";
import MobileMenuButton from "@/components/VideoReel/mobileMenu";
import Sidebar from "@/components/VideoReel/Sidebar";
import { useState } from "react";
import '../global.css'

export default function RootLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <html lang="en">
      <body className="bg-black text-white">
        {/* Mobile menu button */}
        <MobileMenuButton setIsSidebarOpen={setIsSidebarOpen} />
        
        {/* Layout structure: flex for sidebar and main content */}
        <div className="flex min-h-screen" style={{display:"flex"}}>
          {/* Sidebar */}
          <div className="sticky top-0 left-0 h-screen w-1/4 z-10">
            <Sidebar isSidebarOpen={isSidebarOpen} />
          </div>

          {/* Main Content */}
          <div className="flex-1 overflow-y-auto p-4">
            {/* Main content goes here */}
            {/* <MainContent isSidebarOpen={isSidebarOpen} /> */}
            {/* This is where your children will be rendered */}
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
