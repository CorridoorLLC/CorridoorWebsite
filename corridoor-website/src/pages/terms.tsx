import React, { useEffect, useState, useRef } from 'react';
import Link from 'next/link';

const Footer: React.FC = () => {
    const [opacity, setOpacity] = useState(0);
    const footerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            const rect = footerRef.current.getBoundingClientRect();
            const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight;
            setOpacity(isInViewport ? 1 : 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <footer
            ref={footerRef}
            style={{
                opacity: opacity,
                transition: 'opacity 0.5s',
                background: 'linear-gradient(to top, rgba(76, 175, 80, 0.7), rgba(76, 175, 80, 0))'
            }}
            className="bg-white text-center text-xs p-3 w-full"
        >
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
