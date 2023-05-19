import React, { useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Logo from "../components/imageComponents/logo";
import FloatingMenu from '@/components/allPages/floatingMenu';

const Signup: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleEmailSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // TODO: handle email sign up
    alert(`Email submitted: ${email}`);
  };

  const handleGoogleSignup = async () => {
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    try {
      const result = await signInWithPopup(auth, provider);
      // The signed-in user info.
      const user = result.user;
      // TODO: handle the user info
      alert(`Google Auth successful: ${user}`);
    } catch (error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // TODO: handle the errors
      console.error(errorCode, errorMessage, email, credential);
    }
  };

  return (
    <div
      className="
          h-screen
          flex flex-col items-center justify-start
          bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-700 via-pink-500 to-red-500
          px-4 // Add padding on the x-axis for small screens
        "
    >
      <FloatingMenu />
      <div className="lg:pt-14 md:pt-14 sm:pt-8 pt-8">
        <Logo />
      </div>
      <div className="flex flex-col items-center justify-center mt-8">
        <form onSubmit={handleEmailSubmit} className="w-80 space-y-4">
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter Your Email Here..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:border-indigo-500 focus:ring focus:ring-indigo-500 text-black focus:ring-opacity-50"
          />
          <button
            type="submit"
            className="w-full duration-700 py-2 text-white bg-indigo-500 rounded-md hover:bg-indigo-900 focus:bg-indigo-700 focus:ring focus:ring-indigo-500 focus:ring-opacity-50"
          >
            Sign Up with Email
          </button>
        </form>
        <button
          onClick={handleGoogleSignup}
          className="w-80 duration-700 py-2 mt-4 text-white bg-red-500 rounded-md hover:bg-red-900 focus:bg-red-700 focus:ring focus:ring-red-500 focus:ring-opacity-50"
        >
          Sign Up with Google
        </button>
      </div>
    </div>
  );
};

export default Signup;
