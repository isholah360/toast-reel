'use client';

import React from 'react';
import VideoReel from './VideoReel';

const MainContent = ({ isSidebarOpen }) => {
  return (
    <div className={`ml-64 h-screen flex items-center justify-center bg-black text-white overflow-y-auto ${isSidebarOpen ? 'ml-64' : 'ml-0'} md:ml-64`}>
      <div className="w-full md:w-1/2">
         {/* <VideoReel/> */}
      </div>
    </div>
  );
};

export default MainContent;