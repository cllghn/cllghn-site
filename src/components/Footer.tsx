import React from 'react';
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { RiBlueskyLine } from "react-icons/ri";

const Footer = () => {
    return (
        <div className='fixed bottom-0 max-w-full min-w-full'>
            <footer className="bg-[#fffff7]">
                <div className="mx-auto max-w-7xl px-6 py-6 sm:flex sm:items-center sm:justify-between lg:px-8">
                    <div className="flex justify-center sm:order-1">
                        Made with &hearts; and&nbsp;<a href='https://github.com/cllghn/cllghn-site'>version control</a>.
                        {/* <p className="flex mt-8 text-center text-sm/6 text-slate-700 md:order-2 md:mt-0" ></p> */}
                    </div>
                    <div className="flex justify-center gap-x-6 sm:order-2">
                        <a href="https://bsky.app/profile/cllghn.bsky.social" className="text-gray-600 hover:text-gray-800">
                            <RiBlueskyLine size={25} />
                        </a>
                        <a href="https://github.com/cllghn" className="text-gray-600 hover:text-gray-800">
                            <FaGithub size={25} />
                        </a>
                        <a href="https://www.linkedin.com/in/christopher-callaghan/" className="text-gray-600 hover:text-gray-800">
                            <FaLinkedinIn size={25} />
                        </a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;