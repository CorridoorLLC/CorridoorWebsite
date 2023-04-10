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
        <h1 className="uppercasefont-extrabold font-black text-center text-7xl md:text-8xl lg:text-9xl">
          Corridoor
        </h1>
        <div className="font-bold	italic mt-8 mb-4text-2xl md:text-3xl lg:text-5xl">
          Find your way.
        </div>
        <div className="mt-8 text-xl text-center px-10 md:text-1xl lg:text-3xl text-gray-200">
          Corridoor is an indoor navigation application that will be coming to
          the University of Michigan & beyond this upcoming school year! You
          will never be late to class again!
        </div>

        {/* Add a new div with a white background and padding */}
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
