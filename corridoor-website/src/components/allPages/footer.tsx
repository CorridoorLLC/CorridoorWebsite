import React from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
    return (
        <footer className="bg-white bg-opacity-70 text-center text-xs p-3 w-full bg-gray-400">
            <div className="flex justify-center items-center space-x-4">
                <div>
                    <Link href="/terms" className="px-5">
                        <span className="text-black hover:text-gray-800 cursor-pointer">
                            Terms & Conditions
                        </span>
                    </Link>
                    <Link href="https://www.linkedin.com/company/corridoor-app/">
                        <span className="text-black hover:text-gray-800 cursor-pointer">
                            LinkedIn
                        </span>
                    </Link>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
