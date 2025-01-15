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
            <div className="nav-container flex-none h-auto sticky top-0 z-50">
                <nav className={`${isMenuOpen? 'flex-col': 'flex-row items-center'} flex justify-between flex-nowrap relative w-screen bg-[rgba(31,31,31,0.5)] h-[85px] opacity-100 px-4 md:px-[60px] backdrop-blur-[20px]`}>
                    <div className={`logo w-max`}>
                        <Link href="/">
                            <Image width={200} height={200} src="/logo/white_logo.png" alt="logo" />
                        </Link>
                    </div>
                    <div className="lg:hidden">
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
                                    className="h-6 w-6 top-6 right-6"
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
                            isMenuOpen ? 'translate-x-0 block' : 'hidden top-[85px]'
                        } transition-transform duration-500 ease-in-out lg:flex lg:flex-none lg:flex-nowrap gap-[35px] h-min overflow-visible p-0 relative w-full lg:w-min bg-[rgba(31,31,31,0.9)] lg:bg-transparent lg:static  left-0 lg:top-auto lg:left-auto lg:p-0 z-20`}
                    >
                        <div className="flex flex-col lg:flex-row lg:flex-nowrap w-full lg:w-max lg:gap-x-8" style={{ fontFamily: 'var(--font-aileron-bold)' }}>
                            <Link href="#" onClick={closeMenu} className="block py-4 px-6 lg:py-0 lg:px-0 lg:inline">Home</Link>
                            <Link href="#AU" onClick={closeMenu} className="block py-4 px-6 lg:py-0 lg:px-0 lg:inline">About Us</Link>
                            <Link href="#whyCA" onClick={closeMenu} className="block py-4 px-6 lg:py-0 lg:px-0 lg:inline">Why CA</Link>
                            <Link href="#incentives" onClick={closeMenu} className="block py-4 px-6 lg:py-0 lg:px-0 lg:inline">Incentives</Link>
                            <Link href="#responsibilities" onClick={closeMenu} className="block py-4 px-6 lg:py-0 lg:px-0 lg:inline">Responsibilities</Link>
                            <Link href="#FAQ" onClick={closeMenu} className="block py-4 px-6 lg:py-0 lg:px-0 lg:inline">FAQ</Link>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default Nav;
