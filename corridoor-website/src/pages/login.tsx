import React, { useState, Fragment } from "react";
import Link from "next/link";
import Logo from "@/components/imageComponents/logo";
import FloatingMenu from "@/components/allPages/floatingMenu";
import { initFireBase } from "@/api/firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { get } from "http";

const Login = () => {
  //initialize firebase app
  initFireBase();
  //create instances for firebase auth
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const googleSignIn = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result.user);
  };

  return (
    <Fragment>
      <FloatingMenu />
      <div className="h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-700 via-pink-500 to-red-500 flex flex-col items-center pt-8 md:pt-14 lg:pt-14">
        <div className="flex items-center justify-center px-4 pt-7">
          <Logo />
        </div>
        <div className="flex justify-center mt-2 md:mt-10">
          <div className="text-black bg-white p-6 md:p-12 rounded-lg shadow-lg w-full mx-3 mt-5 md:max-w-4xl lg:max-w-7xl">
            <button
              onClick={googleSignIn}
              className="text-white bg-purple-700 py-4 px-6 w-full transform transition duration-500 ease-in-out hover:bg-purple-800 hover:scale-110"
            >
              Log In With Google
            </button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Login;
