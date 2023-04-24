// LoginPopup.tsx
import React, { useState } from 'react';

const LoginPopup: React.FC = () => {
  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <>
      <button
        onClick={togglePopup}
        className={`
          bg-purple-500
          text-white
          rounded-full
          p-2 md:p-3
          shadow-lg
          hover:bg-purple-600
          focus:outline-none
          focus:ring-2
          focus:ring-purple-400
          focus:ring-opacity-50
          transition
          fixed
          top-4
          right-4
        `}
      >
        Login
      </button>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center">
          {/* Add onClick event to backdrop to close popup when backdrop is clicked */}
          <div className="fixed inset-0 bg-black bg-opacity-50 z-10" onClick={togglePopup}></div>
          {/* Add fade-in animation class to the popup */}
          <div className="bg-white border-4 p-3 rounded-md relative z-20 fade-in">
            <button
              onClick={togglePopup}
              className="absolute top-2 right-2 text-xl font-bold text-black"
            >
              &times;
            </button>
            <h2 className="text-xl font-bold mb-4">Login</h2>
            <form>
              <div className="mb-2">
                <label className="block mb-2 font-bold text-black">Username</label>
                <input
                  type="text"
                  className="border border-gray-300 p-2 rounded-md w-full"
                  placeholder="Enter username"
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 font-bold text-black">Password</label>
                <input
                  type="password"
                  className="border border-gray-300 p-2 rounded-md w-full"
                  placeholder="Enter password"
                />
              </div>
              <button
                type="submit"
                className="bg-purple-700 transition hover:bg-purple-900 text-white px-4 py-2 rounded-md"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginPopup;
