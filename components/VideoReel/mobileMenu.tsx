'use client';

import { useState } from 'react';
import { FiMenu } from 'react-icons/fi';

const MobileMenuButton = ({ setIsSidebarOpen }) => {
  return (
    <button
      className="md:hidden fixed top-4 left-4 text-white"
      onClick={() => setIsSidebarOpen(!isSidebarOpen)}
    >
      <FiMenu />
    </button>
  );
};

export default MobileMenuButton;