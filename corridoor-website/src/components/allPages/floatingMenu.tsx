import React, { useState } from "react";
import { useRouter } from "next/router";

const FloatingMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const handleTermsClick = () => {
    router.push("/terms");
  };

  const handleLoginClick = () => {
    router.push("/login");
  };

  const handleAboutUsClick = () => {
    router.push("/aboutus");
  };

  return (
    <div className="fixed top-0 right-0 left-0 z-10 md:top-4 md:right-4 md:left-auto">
      <button
        className="w-full text-white bg-violet-500 font-bold py-2 px-4 md:w-auto md:rounded hover:bg-violet-700 transition-colors duration-200 border border-2 text-left md:text-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        Menu
      </button>
      <div
        className={`overflow-hidden transition-max-height duration-300 ease-in-out md:absolute md:right-0 md:mt-2 md:w-32 bg-white shadow-md ${
          isOpen ? "border-b border-black md:rounded-lg max-h-60 md:max-h-32" : "max-h-0"
        }`}
      >
        <ul>

          <li className="hover:bg-blue-100 duration-200 text-black cursor-pointer px-5 py-2 transition-colors duration-200"
          onClick={handleLoginClick}
          >
            Login
          </li>
          <li className="hover:bg-blue-100 duration-200 text-black cursor-pointer px-5 py-2 transition-colors duration-200"
            onClick={handleAboutUsClick}
          >
            About Us
          </li>
        </ul>
      </div>
    </div>
  );
};

export default FloatingMenu;
