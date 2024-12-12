import GaugeChart from '@/components/viz/gauges';
import RadarChart from '@/components/viz/radar';
import React from 'react';
import { IconType } from 'react-icons';
import { FaCode, FaCodeBranch, FaMountain, FaPalette, FaUtensils, FaGlobeAmericas, FaChalkboardTeacher, FaBicycle, FaGraduationCap, FaServer, FaImage, FaCloud, FaFileCode, FaJs, FaToolbox, FaVial, FaDocker, FaGithub, FaPython, FaNodeJs, FaDatabase } from "react-icons/fa";
import { FaArrowsRotate, FaEllipsis, FaRobot } from 'react-icons/fa6';

const makeTWBullet = (
    text: string,
    size: number,
    IconComponent: IconType,
    liTWCSS?: string,
    iconTWCSS?: string
) => {
    return (
        <li className={liTWCSS || 'flex space-x-2 text-start sm:items-center sm:text-left pb-2 sm:pb-0'}>
            {IconComponent && <IconComponent size={size} className={iconTWCSS || 'mt-1 sm:mt-0'} />}&nbsp;
            <span>{text}</span>
        </li>
    );
};

const interests = [
    makeTWBullet('Reproducible quantitative research in Python and R.', 15, FaCodeBranch),
    makeTWBullet('Building pretty things with JS, CSS, and HTML.', 15, FaPalette),
    makeTWBullet('Open-source software (developing and using).', 15, FaCode),
    makeTWBullet('Learning from others and sharing what I&apos;ve picked up.', 15, FaChalkboardTeacher),
    makeTWBullet('Hiking, camping, and backpacking (usually in CA).', 15, FaMountain),
    makeTWBullet('Spicy foods that melt my mouth.', 15, FaUtensils),
    makeTWBullet('Traveling to experience and learn.', 15, FaGlobeAmericas),
    makeTWBullet('Riding my bike around town with those I love.', 15, FaBicycle),
];

const feSkills = [
    makeTWBullet('HTML and CSS (+Tailwind).', 15, FaFileCode),
    makeTWBullet('JavaScript with the support of React and Next.js.', 15, FaJs),
    makeTWBullet('NPM, Yarn, and Vite.', 15, FaToolbox),
    makeTWBullet('Desing with Figma and build with component libraries (Material UI, Bootstrap).', 15, FaPalette),
    makeTWBullet('Testing in Jest.', 15, FaVial),
    makeTWBullet('And so much more!', 15, FaEllipsis),
];

const beSkills = [
    makeTWBullet('Prefer working in Python, powered by Django and Flask.', 15, FaPython),
    makeTWBullet('Can handle myself in Node.js + Express.js.', 15, FaNodeJs),
    makeTWBullet('Worked primaraly with RDBMS (MSSQL, PostgreSQL, and SQLite).', 15, FaDatabase),
    makeTWBullet('REST API user, documenter (Swagger), and builder (Express.js, Flask, Plumber).', 15, FaRobot),
    makeTWBullet('And so much more!', 15, FaEllipsis),
];

const cloudSkills = [
    makeTWBullet('Mostly AWS, sometimes Google Cloud Platform, rarely Azure.', 15, FaCloud),
    makeTWBullet('Containarize with Docker.', 15, FaDocker),
    makeTWBullet('CI/CD with GitHub Actions.', 15, FaArrowsRotate),
    makeTWBullet('Working on AWS cert (slowly).', 15, FaGraduationCap)
];

export default function About() {
    return (
        <main className="container px-44 min-w-full pt-36 pb-52">
            <div className="flex flex-col pb-20">
                <h2 className='text-6xl fancy-header row text-center pb-5'>
                    ABOUT ME
                </h2>
                <p className='pb-5 text-lg'>
                    I currently serve as a Data Science Program Director at the <a href='https://csgjusticecenter.org/' target='_blank'>Council of State Governments (CSG) Justice Center</a>, where I lead the research efforts for <a href='https://justicecounts.csgjusticecenter.org/' target='_blank'>Justice Counts</a>. Previously, I started and directed the <a href='https://csgjusticecenter.org/projects/state-corrections-data-analysts-in-residence/' target='_blank'>Resident Corrections Analyst initiative</a>, embedding data analysts in state correctional agencies to enhance data-driven strategies.
                </p>
                <p className='pb-5 text-lg'>
                    Before joining the CSG Justice Center, I was a faculty researcher for the U.S. Navy at the Naval Postgraduate School in the <a href='https://nps.edu/web/da' target='_blank'>Department of Defense Analysis</a>. There, I supported homeland security and defense research through the lens of data science and taught courses on social networks analysis and data visualization to military, law enforcement, and international security professionals.
                </p>
                <p className='pb-5 text-lg'>
                    I&apos;ve been lucky enough to spend most of my adult life in the central coast of California, though I am native to Mexico. My husband and I currently live in Sacramento with our opinionated cat. When we can get away, we often backpack around the Sierra Nevada.
                </p>
            </div>

            <div className="flex lg:flex-row md:flex-col sm:flex-col gap-x-2 pb-20">
                <div className="basis-1/2">
                    <h2 className='text-center text-6xl fancy-header'>
                        INTERESTS
                    </h2>
                    <div className='py-5'>
                        <ul className='list-none text-lg'>
                            {interests}
                            {/* <li className='flex space-x-2 items-center'>
                                <FaCodeBranch size={15} />&nbsp;<span>Reproducible quantitative research in Python and R.</span>
                            </li>
                            <li className='flex space-x-2 items-center'>
                                <FaPalette size={15} />&nbsp;<span>Building pretty things with JS, CSS, and HTML.</span>
                            </li>
                            <li className='flex space-x-2 items-center'>
                                <FaCode size={15} />&nbsp;<span>Open-source software (developing and using).</span>
                            </li>
                            <li className='flex space-x-2 items-center'>
                                <FaChalkboardTeacher size={15} />&nbsp;<span>Learning from others and sharing what I&apos;ve picked up.</span>
                            </li>
                            <li className='flex space-x-2 items-center'>
                                <FaMountain size={15} />&nbsp;<span>Hiking, camping, and backpacking (usually in CA).</span>
                            </li>
                            <li className='flex space-x-2 items-center'>
                                <FaUtensils size={15} />&nbsp;<span>Spicy foods that melt my mouth.</span>
                            </li>
                            <li className='flex space-x-2 items-center'>
                                <FaGlobeAmericas size={15} />&nbsp;<span>Traveling to experience and learn.</span>
                            </li>
                            <li className='flex space-x-2 items-center'>
                                <FaBicycle size={15} />&nbsp;<span>Riding my bike around town with those I love.</span>
                            </li> */}
                        </ul>
                    </div>
                </div>
                <div className="basis-1/2">
                    <h2 className='text-center text-6xl fancy-header'>
                        EDUCATION
                    </h2>
                    <div className='flex py-5'>
                        <div className="flex basis-1/4 pb-5 justify-center">
                            <FaGraduationCap size={30} />
                        </div>
                        <div className="basis-3/4">
                            <p className='text-2xl'>MPA, 2016</p>
                            <p className='text-lg'>Middlebury Institute of International Studies at Monterey</p>
                        </div>
                    </div>
                    <div className='flex py-5'>
                        <div className="flex basis-1/4 pb-5 justify-center">
                            <FaGraduationCap size={30} />
                        </div>
                        <div className="basis-3/4">
                            <p className='text-2xl'>BS in Biologogy, 2012</p>
                            <p className='text-lg'>University of California, Santa Cruz</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-col">
                <span className='flex justify-center'>
                    <h2 className='text-6xl fancy-header row text-center pb-10'>
                        SKILLS
                    </h2>
                    <a href="#footnote-1">[1]</a>
                </span>
                <div className='flex pb-10 flex-col lg:flex-row space-x-2'>
                    <div className="flex basis-1/5 pb-5">
                        <span className='flex justify-center'>
                            <h2 className='text-left text-2xl regular-header'>
                                Programming Languages
                            </h2>
                        </span>
                    </div>
                    <div className='flex flex-col md:flex-row basis-2/5 pb-5 space-x-4'>
                        <GaugeChart value={80} label={'JS'} fillColor={"#1192e8"} />
                        <GaugeChart value={90} label={'Python'} fillColor={"#fa4d56"} />
                    </div>
                    <div className='flex flex-col md:flex-row basis-2/5 pb-5 space-x-4'>
                        <GaugeChart value={95} label={'R'} fillColor={"#002d9c"} />
                        <GaugeChart value={85} label={'SQL'} fillColor={"#009d9a"} />
                    </div>
                </div>
                <div className='flex pb-10 sm:flex-col md:flex-col lg:flex-row space-x-2'>
                    <div className="flex basis-1/5 pb-5">
                        <span className='flex justify-center'>
                            <h2 className='text-left text-2xl regular-header'>
                                Data Science
                            </h2>
                        </span>
                    </div>
                    <div className='basis-4/5 pb-5'>
                        <RadarChart />
                    </div>
                </div>
                <div className='flex py-b sm:flex-col md:flex-col lg:flex-row space-x-2'>
                    <div className="flex basis-1/5 pb-5">
                        <span className='flex justify-center'>
                            <h2 className='text-left text-2xl regular-header'>
                                Software Development
                            </h2>
                        </span>
                    </div>
                    <div className='basis-4/5 pb-5'>
                        <div className='pb-5'>
                            <h3 className='flex text-left text-xl regular-header space-x-2 pb-2 sm:pb-0'>
                                <FaImage size={25} />&nbsp;<span>Front-End Development</span>
                            </h3>
                            <ul className='list-none text-lg sm:px-10 sm:py-2'>
                                {feSkills}
                            </ul>
                        </div>
                        <div className='pb-5'>
                            <h3 className='flex text-left text-xl regular-header space-x-2'>
                                <FaServer size={25} />&nbsp;<span>Back-End Development</span>
                            </h3>
                            <ul className='list-none text-lg sm:px-10 sm:py-2'>
                                {beSkills}
                            </ul>
                        </div>
                        <div className='pb-5'>
                            <h3 className='flex text-left text-xl regular-header space-x-2'>
                                <FaCodeBranch size={25} />&nbsp;<span>Version Control</span>
                            </h3>
                            <ul className='list-none text-lg sm:px-10 sm:py-2'>
                                <li className='flex space-x-2 text-start  sm:text-left pb-2 sm:pb-0'>
                                    <FaGithub size={25} className='mt-1 sm:mt-0' />&nbsp;<span>When it comes to version control, I am all in on Git. I am less enamored with the idea of hosting my code on GitHub, though they make it all too easy. Check out my public facing profile <a href='https://github.com/cllghn' target='_blank'>here</a>.</span>
                                </li>
                            </ul>
                        </div>
                        <div className='pb-5'>
                            <h3 className='flex text-left text-xl regular-header space-x-2'>
                                <FaCloud size={25} />&nbsp;<span>Cloud Platforms and Deployment</span>
                            </h3>
                            <ul className='list-none text-lg sm:px-10 sm:py-2'>
                                {cloudSkills}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <p id="footnote-1" className='pt-10'>[1] Per my best, but probably not fully objective, guess.</p>
        </main >
    );
}
