import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { auth } from "../../api/firebase";
import { useStore } from "../../api/store";
import Image from "next/image";
const FloatingMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false); // State to hold signed-in status
  const router = useRouter();
  const clearUser = useStore((state) => state.clearUser);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsSignedIn(!!user); // Update signed-in state based on user
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  const handleLoginClick = () => {
    router.push("/login");
  };

  const handleLogoutClick = () => {
    auth
      .signOut()
      .then(() => {
        // User signed out, clear user data
        clearUser();
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
    router.push("/");
  };

  const handleAboutUsClick = () => {
    router.push("/aboutus");
  };

  const handleCorridoorClick = () => {
    router.push("/");
  };
  return (
    <nav className="border-b-4 border-indigo-500 sticky top-0 flex items-center justify-between flex-wrap bg-white p-6">
      <div
        onClick={handleCorridoorClick}
        className="flex items-center flex-shrink-0 cursor-pointer text-black mr-6"
      >
        <span className="font-semibold text-xl tracking-tight">Corridoor</span>
      </div>
      <div className="block lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center px-3 py-2 border rounded text-indigo-500 border-indigo-500 hover:text-indigo-500 hover:border-indigo-500"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full block overflow-hidden transition-all ease-out duration-500 ${
          isOpen ? "max-h-96" : "max-h-0"
        } flex-grow lg:flex lg:items-center lg:w-auto lg:max-h-full`}
      >
        <div className="text-sm lg:flex-grow">
          <a
            onClick={handleAboutUsClick}
            className="cursor-pointer block mt-4 lg:inline-block lg:mt-0 text-indigo-500 hover:font-bold hover:duration-500 mr-4"
          >
            About Us
          </a>
          <a
            onClick={handleAboutUsClick}
            className="cursor-pointer block mt-4 lg:inline-block lg:mt-0 text-indigo-500 hover:font-bold hover:duration-500 mr-4"
          >
            Products
          </a>
        </div>
        <div>
          {isSignedIn ? (
            <a
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-windigo-500 border-indigo-500 hover:bg-indigo-100 hover:duration-500 hover:text-indigo-950 hover:bg-indigo-500 mt-4 lg:mt-0"
              onClick={handleLogoutClick}
            >
              Logout
            </a>
          ) : (
            <a
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-indigo-500 border-indigo-500 hover:bg-indigo-100 hover:duration-500 hover:text-indigo-950 hover:bg-indigo-500 mt-4 lg:mt-0"
              onClick={handleLoginClick}
            >
              Login
            </a>
          )}
        </div>
      </div>
    </nav>
  );
};

export default FloatingMenu;
