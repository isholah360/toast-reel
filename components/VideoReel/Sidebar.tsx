'use client';

import { FiHome, FiSearch, FiCompass, FiFilm, FiMessageSquare, FiHeart, FiPlus, FiUser, FiMenu } from 'react-icons/fi';

const Sidebar = ({ isSidebarOpen }) => {
  return (
    <div className={`fixed top-0 left-0 h-full bg-black text-white w-64 p-4 ${isSidebarOpen ? '' : 'hidden'} md:block`}>
      <h1 className="text-2xl font-bold mb-4">Toast-Reel</h1>
      <nav>
        <ul className='list-none mt-10'>
          <li className="flex items-center mb-4 py-1">
            <FiHome className="mr-2 text-3xl " /> 
            Home
          </li>
          <li className="flex items-center mb-4 py-1">
            <FiSearch className="mr-3 text-xl" /> 
            Search
          </li>
          <li className="flex items-center mb-4 py-1">
            <FiCompass className="mr-3 text-3xl" /> 
            Explore
          </li>
          <li className="flex items-center mb-4 py-1">
            <FiFilm className="mr-3 text-3xl" /> 
            Reels
          </li>
          <li className="flex items-center mb-4 py-1">
            <FiMessageSquare className="mr-3 text-3xl" /> 
            Messages
          </li>
          <li className="flex items-center mb-4 py-1">
            <FiHeart className="mr-3 text-3xl" /> 
            Notifications
          </li>
          <li className="flex items-center mb-4 py-1">
            <FiPlus className="mr-3 text-3xl" /> 
            Create
          </li>
          <li className="flex items-center mb-4  py-1">
            <FiUser className="mr-3 text-3xl" /> 
            Profile
          </li>
          <li className="flex items-center list-none py-1">
            <FiMenu className="mr-3 text-3xl" /> 
            More
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
