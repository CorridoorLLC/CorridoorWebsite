import React, { useState } from 'react';
import { useRouter } from 'next/router';

const FloatingMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleTermsClick = () => {
    router.push('/terms');
  };

  return (
    <div className="fixed top-4 md:top-8 right-4">
      <button
        className="bg-violet-500 hover:bg-violet-700 text-white font-bold py-2 px-4 rounded transition-colors duration-200 border border-white border-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        Menu
      </button>
      <div
        className={`absolute mt-2 bg-white shadow-md rounded-lg w-32 right-0 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        } ${!isOpen ? 'pointer-events-none' : ''} border border-black`}
      >
        <ul>
          <li
            className="hover:bg-blue-100 duration-200 hover:rounded-lg text-black cursor-pointer px-5 py-2 transition-colors duration-200"
            onClick={handleTermsClick}
          >
            Terms
          </li>
          <li className="hover:bg-blue-100 duration-200 hover:rounded-lg text-black cursor-pointer px-5 py-2 transition-colors duration-200">
            Login
          </li>
          <li className="hover:bg-blue-100 duration-200 hover:rounded-lg text-black cursor-pointer px-5 py-2 transition-colors duration-200">
            About Us
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FloatingMenu;
