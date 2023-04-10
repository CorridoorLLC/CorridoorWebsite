import React from "react";
import { Fragment } from "react";
import EmailBox from "./emailBox";

const HomePage: React.FC = () => {
  return (
    <Fragment>
      <div
        className="
          h-screen
          flex flex-col items-center justify-center
          bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-900 via-fuchsia-600 to-pink-800
          px-4 // Add padding on the x-axis for small screens
        "
      >
        <h1 className="font-bold text-center text-6xl md:text-6xl lg:text-9xl">Corridoor</h1>
        <div className="mt-8 text-2xl md:text-3xl lg:text-5xl">Find your way.</div>
        <div className="mt-8 text-xl text-center px-10 md:text-1xl lg:text-3xl text-gray-200">Corridoor is an indoor navigation application that will be coming to the University of Michigan & beyond this upcoming school year! You will never be late to class again!</div>

        <div className="mt-8 md:mt-12 lg:mt-16 text-lg md:text-xl lg:text-xl">Join the waitlist!</div>
        <div className="mt-4 md:mt-6 lg:mt-8 w-full md:w-auto">
          <EmailBox />
        </div>
      </div>
    </Fragment>
  );
};

export default HomePage;
