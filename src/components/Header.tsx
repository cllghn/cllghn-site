'use client'
import React, { useState } from 'react';
import Link from 'next/link';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="fixed px-4 sm:px-6 md:px-8 py-6 lg:pt-8 flex items-center justify-between text-[#3b3b3b] font-thin text-lg leading-6 bg-[#fffff7] h-24 w-screen z-50">
            <div className='text-right uppercase'>
                <Link href="/">chris<br /> callaghan</Link>
            </div>
            <div className="relative">
                <button
                    className="md:hidden z-60"
                    onClick={toggleMenu}
                >
                    {isMenuOpen ? (
                        <svg
                            className="w-6 h-6"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M6 18L18 6M6 6L18 18"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    ) : (
                        <svg
                            className="w-6 h-6"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M4 6H20M4 12H20M4 18H20"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    )}
                </button>

                {isMenuOpen && (
                    <nav className="md:hidden absolute top-full right-0 mt-2 bg-[#fffff7] shadow-md shadow-[#3b3b3b] rounded-lg">
                        <ul className="flex flex-col gap-y-4 p-4 min-w-[200px]">
                            <li>
                                <a
                                    href="/about"
                                    className="block py-1"
                                >
                                    about
                                </a>
                            </li>
                            <li>
                                <a
                                    href="/projects"
                                    className="block py-1"
                                >
                                    projects
                                </a>
                            </li>
                            <li>
                                <a
                                    href="callaghan-resume.pdf"
                                    download
                                    className="block py-1"
                                >
                                    resume
                                </a>
                            </li>
                        </ul>
                    </nav>
                )}

                <div className="hidden md:flex items-center">
                    <nav>
                        <ul className="flex items-center gap-x-8">
                            <li>
                                <a href="/about">about</a>
                            </li>
                            <li>
                                <a href="/projects">projects</a>
                            </li>
                            <li>
                                <a href="callaghan-resume.pdf" download>
                                    resume
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Header;