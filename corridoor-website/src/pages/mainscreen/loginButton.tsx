import React from "react";

const LoginButton: React.FC = () => {
  return (
    <div className="fixed bottom-4 right-4 flex justify-center items-center">
      <button
        className={`
        bg-white
        text-black
          rounded-full
          p-2 md:p-3
          shadow-lg
          hover:bg-purple-300
          focus:outline-none
          focus:ring-2
          focus:ring-purple-500
          focus:ring-opacity-50
          transition
        `}
      >
        Login
      </button>
    </div>
  );
};

export default LoginButton;
