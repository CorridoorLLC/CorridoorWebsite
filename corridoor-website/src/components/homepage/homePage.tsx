import React from "react";
import { Fragment } from "react";
import EmailBox from "./emailBox";
import Logo from "../imageComponents/logo";
import Link from "next/link";

const HomePage: React.FC = () => {
  return (
    <Fragment>
      <div className="pt-14 md:pt-14 lg:pt-8 h-screen flex flex-col items-center justify-start bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-700 via-pink-500 to-red-500 px-4">
        <div className="md:pt-14 sm:pt-8 pt-10">
          <Logo />
        </div>
        <div className="font-bold	italic mt-8 mb-4 text-2xl md:text-2xl lg:text-4xl">
          Find your way.
        </div>
        <div className="mt-8 w-full md:w-3/4 lg:w-1/2 text-xl text-center px-10 md:text-1xl lg:text-3xl text-gray-100">
          Corridoor is an indoor navigation application that will be coming to
          the University of Michigan & beyond this upcoming school year! You
          will never be late to class again!
        </div>
        <div className="mt-8 md:mt-12 lg:mt-16 bg-white p-4 rounded-md">
          <div className="font-bold	 underline underline-offset-8 text-2xl md:text-2xl lg:text-4xl text-black justify-center flex items-center">
            Join The Waitlist
          </div>
          <div className="mt-2 md:mt-4 lg:mt-6 w-full md:w-auto">
            <EmailBox />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default HomePage;
