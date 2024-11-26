import React from 'react';

const Header = () => {
    return (
        <div className="relative px-4 sm:px-6 md:px-8 py-6 lg:pt-8 flex items-center justify-between text-slate-700 font-thin text-lg leading-6 bg-[#fffff7] h-24">
            <div className=''><a href="/">chris<br /> callaghan</a></div>
            <div className="flex items-center" >
                <div className="hidden md:flex items-center">
                    <nav>
                        <ul className="flex items-center gap-x-8">
                            <a href="/about">about</a>
                            {/* <a href="/blog">blog</a> */}
                            <a href="/projects">projects</a>
                            <a href="callaghan-resume.pdf" download>resume</a>
                        </ul>
                    </nav>
                </div>
            </div >
        </div >
    );
};

export default Header;
