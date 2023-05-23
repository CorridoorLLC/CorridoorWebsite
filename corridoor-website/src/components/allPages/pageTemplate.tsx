import React, { FC, ReactNode } from 'react';
import FloatingMenu from './floatingMenu';
import Footer from './footer';
import Logo from '../imageComponents/logo';
interface YourComponentProps {
  renderComponent: ReactNode;
}

//for people reading typescript for the first time FC is functional component
const YourComponent: FC<YourComponentProps> = ({ renderComponent }) => {
  return (
    <>
<div className="min-h-screen flex flex-col justify-between bg-gradient-to-tr from-purple-700 via-pink-500 to-red-500">
        <FloatingMenu />
        <div className="flex flex-col items-center pt-8 md:pt-14 lg:pt-14">
          <div className="flex items-center justify-center px-4">
            <Logo />
          </div>
          <div className="font-bold italic mt-8 mb-4 text-2xl md:text-2xl lg:text-4xl">
            Find your way.
          </div>
          {renderComponent}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default YourComponent;
