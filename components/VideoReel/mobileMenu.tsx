'use client';

import React from 'react';
import { FiMenu } from 'react-icons/fi';


interface MobileMenuButtonProps {
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>; 
}

const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({ setIsSidebarOpen }) => {
  return (
    <button
      className="md:hidden fixed top-4 left-4 text-white"
      onClick={() => setIsSidebarOpen((prev) => !prev)}  
    >
      <FiMenu />
    </button>
  );
};

export default MobileMenuButton;
