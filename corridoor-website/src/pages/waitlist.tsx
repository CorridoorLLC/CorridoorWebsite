import React from "react";
import { Fragment } from "react";
import ImageUpload from "../components/dashboard/imageUpload";
import FloatingMenu from "@/components/allPages/floatingMenu";
import { useStore } from "../api/store";
import { useState } from "react";
import Logo from "@/components/imageComponents/logo";
import Link from "next/link";
import Footer from "@/components/allPages/footer";
const Waitlist: React.FC = () => {
  const { nameOfUser, emailOfUser } = useStore((state) => state);
  //return in case the user is not logged in
  if (!nameOfUser) {
    return <p>Error: Please Login</p>;
  }
  let firstName = nameOfUser.split(" ")[0];
  return (
    <Fragment>
    <div className="min-h-screen flex flex-col bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-700 via-pink-500 to-red-500 pb-10">
      <FloatingMenu />
      <div className="flex flex-col items-center pt-8 md:pt-14 lg:pt-14">
        <div className="flex items-center justify-center px-4 pt-14">
          <Logo />
        </div>
        <div className="font-bold italic mt-8 mb-4 text-2xl md:text-2xl text-gray-200 lg:text-4xl">
          Find your way.
        </div>
        <div className="flex justify-center mt-2 md:mt-10">
          <div className="text-black bg-white p-4 md:p-8 rounded-lg shadow-lg w-full mx-3 mt-5 md:max-w-3xl lg:max-w-4xl">
            <h1 className="text-xl md:text-2xl text-black bg-center font-bold mb-4">
              Hey {firstName}!
            </h1>
            <hr className="border-t-2 border-gray-300 my-8" />

            <div>
              <p className="text-sm md:text-base mb-4">
                We cannot wait to help you find your way! We will be sending you an email at {emailOfUser} when we launch this upcoming fall. Stay tuned!
              </p>
            </div>
            <hr className="border-t-2 border-gray-300 my-8" />
            <Link href="/" className="text-blue-500 hover:text-blue-800">
              Go Back
            </Link>
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </Fragment>
  );
};
export default Waitlist;
