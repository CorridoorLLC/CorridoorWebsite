import React, { Fragment } from "react";
import Link from "next/link";
import Logo from "@/components/imageComponents/logo";
import FloatingMenu from "@/components/allPages/floatingMenu";
import Footer from "@/components/allPages/footer";

const AboutUs: React.FC = () => {
  return (
    <Fragment>
      <div className="min-h-screen flex flex-col justify-between bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-700 via-pink-500 to-red-500 pb-20">
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
                About Us
              </h1>
              <hr className="border-t-2 border-gray-300 my-8" />

              <div>
                <h2 className="text-lg md:text-xl font-bold mb-2">Our Mission</h2>
                <p className="text-sm md:text-base mb-4">
                  Our mission is to make finding anything inside a building easy
                  for you. We are building an infrastructure to make finding
                  rooms, water fountains, restrooms, etc. into a quick and
                  seamless task for you. You will never be lost again!
                </p>
              </div>
              <div>
                <h2 className="text-lg md:text-xl font-bold mb-2">Our Team</h2>
                <p className="text-sm md:text-base mb-4">
                  Our team consists of 2 engineers, Dev Kunjadia and Kevin Wang. We came up with the idea for Corridoor while brainstorming random problems we had. And now we are building it!
                </p>
              </div>
              <div>
                <h2 className="text-lg md:text-xl font-bold mb-2">Our Launch</h2>
                <p className="text-sm md:text-base mb-4">
                  We plan to reach the University of Michigan campus this upcoming fall, and after that go wherever the world takes us!
                </p>
              </div>
              <hr className="border-t-2 border-gray-300 my-8" />

              <Link href="/" className="text-blue-500 hover:text-blue-800">Go Back</Link>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Fragment>
  );
};

export default AboutUs;
