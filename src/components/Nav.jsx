"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            <div className="nav-container flex-none h-auto sticky top-0 z-10">
                <nav className={`${isMenuOpen? 'flex-col': 'flex-row items-center'} flex justify-between md:justify-normal flex-nowrap relative w-screen bg-[rgba(31,31,31,0.5)] h-[85px] opacity-100 px-4 md:px-[60px] backdrop-blur-[20px]`}>
                    <div className={`logo w-max`}>
                        <Link href="/">
                            <Image width={200} height={200} src="/logo/white_logo.png" alt="logo" />
                        </Link>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-white focus:outline-none z-20 relative"
                        >
                            {isMenuOpen ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 fixed top-6 right-4"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                    <div
                        className={`${
                            isMenuOpen ? 'translate-x-0 block' : 'translate-x-full hidden top-[85px]'
                        } transition-transform duration-500 ease-in-out md:flex md:flex-none md:flex-nowrap gap-[35px] h-min overflow-visible p-0 relative w-full md:w-min bg-[rgba(31,31,31,0.9)] md:bg-transparent md:static  left-0 md:top-auto md:left-auto md:p-0 z-20`}
                    >
                        <div className="flex flex-col md:flex-row md:flex-nowrap w-full md:w-max md:gap-x-8" style={{ fontFamily: 'var(--font-aileron-bold)' }}>
                            <Link href="#" onClick={closeMenu} className="block py-4 px-6 md:py-0 md:px-0 md:inline">Home</Link>
                            <Link href="#AU" onClick={closeMenu} className="block py-4 px-6 md:py-0 md:px-0 md:inline">About Us</Link>
                            <Link href="#whyCA" onClick={closeMenu} className="block py-4 px-6 md:py-0 md:px-0 md:inline">Why CA</Link>
                            <Link href="#incentives" onClick={closeMenu} className="block py-4 px-6 md:py-0 md:px-0 md:inline">Incentives</Link>
                            <Link href="#responsibilities" onClick={closeMenu} className="block py-4 px-6 md:py-0 md:px-0 md:inline">Responsibilities</Link>
                            <Link href="#FAQ" onClick={closeMenu} className="block py-4 px-6 md:py-0 md:px-0 md:inline">FAQ</Link>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Nav;
