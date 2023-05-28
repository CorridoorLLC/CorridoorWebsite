import React, { useState, Fragment } from "react";
import Link from "next/link";
import Logo from "@/components/imageComponents/logo";
import Footer from "@/components/allPages/footer";
import FloatingMenu from "@/components/allPages/floatingMenu";
import { initFireBase } from "@/api/firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Image from "next/image";
import googleLogo from "public/googleLogin.png";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
const Login = () => {
  //initialize firebase app
  initFireBase();

  //create instances for firebase auth
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  const router = useRouter();

  //get authorization status
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <div>loading</div>;
  }

  //login rendering
  if (user) {
    router.push("/dashboard");
    //render dashboard if user is logged in
    return <div>Welcome {user.displayName}</div>;
  }
  const googleSignIn = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result.user);
  };

  return (
    <Fragment>
      <div className="min-h-screen flex flex-col justify-between bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-700 via-pink-500 to-red-500">
        <FloatingMenu />
        <div className="flex flex-col items-center pt-8 md:pt-14 lg:pt-14">
          <div className="flex items-center justify-center px-4 pt-14">
            <Logo />
          </div>
          <div className="font-bold italic mt-8 mb-4 text-2xl md:text-2xl text-gray-200 lg:text-4xl">
            Find your way.
          </div>
          <div className="flex justify-center mt-2 md:mt-10">
            <div className="text-black bg-white p-6 md:p-12 mx-auto w-1/2rounded-lg shadow-lg w-full mx-3 mt-5 md:max-w-4xl lg:max-w-7xl">
              <button
                onClick={googleSignIn}
                className="flex items-center justify-center text-white bg-purple-700 py-4 px-6 w-full transform transition duration-500 ease-in-out hover:bg-purple-800 hover:scale-110"
              >
                <Image
                  className="pr-4"
                  src="/googleLogin.png"
                  width={50}
                  height={50}
                  alt="Picture of the author"
                />
                Continue With Google
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default Login;
