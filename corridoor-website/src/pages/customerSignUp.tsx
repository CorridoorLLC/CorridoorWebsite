import React from "react";
import Link from "next/link";
import Logo from "@/components/imageComponents/logo";
import FloatingMenu from "@/components/allPages/floatingMenu";
import Footer from "@/components/allPages/footer";
import { Fragment } from "react";
import CustomerEmailBox from "@/components/customerForm/customerEmails";
const CustomerSignUp = () => {
    return (
        <Fragment>
     <div className="min-h-screen flex flex-col bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-700 via-pink-500 to-red-500">
       <FloatingMenu />
       <div className="flex flex-col items-center pt-8 md:pt-14 lg:pt-14 pb-10">
         <div className="flex items-center justify-center px-4 pt-14">
           <Logo />
         </div>
         <div className="font-bold italic mt-8 mb-4 text-2xl md:text-2xl text-gray-200 lg:text-4xl">
           Find your way.
         </div>
         <div className="text-black bg-white p-4 md:p-10 rounded-lg shadow-lg text-center mx-3 mt-10 md:max-w-3xl lg:max-w-4xl">
            <h1 className="text-xl md:text-2xl text-black bg-center font-bold mb-4 text-center w-80">
                Interested in implementing Corridoor at your business? Fill out the form below and we will get back to you!
            </h1>
            <CustomerEmailBox />
         </div>
       </div>
     </div>
     <Footer />
   </Fragment>
    );
};
export default CustomerSignUp;