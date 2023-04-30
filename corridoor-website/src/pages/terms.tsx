import React from "react";
import Link from "next/link";
import { Fragment } from "react";
import Logo from "@/components/imageComponents/logo";
interface PrivacyProps {
  message?: string;
}

const Terms: React.FC<PrivacyProps> = ({
  message = "At Corridoor, we value your privacy and the trust you place in us when you share your personal data. Our mission is to cultivate a digital landscape that respects individual privacy and promotes data transparency. We do collect some personal data to enhance user experience and ensure the smooth functioning of our services. We believe that you have the right to know and understand the type and nature of data we collect, which may include your browser type, device type, and location data. Our purpose in collecting this data is not to invade your privacy, but to tailor our services to meet your needs better. Rest assured, we are committed to safeguarding your data from unauthorized access. However, in the spirit of complete transparency, it's important to note that to provide you with the comprehensive services we offer, we may sometimes share your data with our trusted partners. This only occurs under strict confidentiality agreements and only when necessary to provide the services you've requested. We also use cookies to provide a seamless user experience, which you can opt out of at any time. As we evolve and innovate, our privacy policy may change, so we encourage you to review it periodically. We're grateful for your trust and promise to handle your data with the utmost care and respect.",
}) => {
  return (
    <Fragment>
      <div className="h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-purple-700 via-pink-500 to-red-500 flex flex-col items-center pt-8 md:pt-14 lg:pt-14">
        <div className="flex items-center justify-center px-5">
          <Logo />
        </div>
        <div className="flex justify-center mt-2 md:mt-10">
          <div className="text-black bg-white p-4 md:p-8 rounded-lg shadow-lg w-full mx-3 mt-5 md:max-w-3xl lg:max-w-6xl">
            <h1 className="text-xl md:text-2xl text-black bg-center font-bold mb-4">
              Terms and Conditions
            </h1>
            <p className="text-sm md:text-base text-black">
              {message}{" "}
              <Link className="font-bold" href="/">
                Go Back.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Terms;
