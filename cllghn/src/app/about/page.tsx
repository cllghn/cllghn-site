import GaugeChart from '@/components/viz/gauges';
import React from 'react';
import { FaCode, FaCodeBranch, FaMountain, FaPalette, FaUtensils, FaGlobeAmericas, FaSpa, FaChalkboardTeacher, FaBicycle, FaGraduationCap } from "react-icons/fa";

export default function About() {
    return (
        <main className="container px-44 min-w-full pt-20 pb-52">
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
                    I've been lucky enough to spend most of my adult life in the central coast of California, though I am native to Mexico. My husband and I currently live in Sacramento with our opinionated cat. When we can get away, we often backpack around the Sierra Nevada.
                </p>
            </div>

            <div className="flex lg:flex-row md:flex-col sm:flex-col gap-x-2 pb-20">
                <div className="basis-1/2">
                    <h2 className='text-center text-6xl fancy-header'>
                        INTERESTS
                    </h2>
                    <div className='py-5'>
                        <ul className='list-none text-lg'>
                            <li className='flex space-x-2 items-center'>
                                <FaCodeBranch size={15} />&nbsp;<span>Reproducible quantitative research in Python and R.</span>
                            </li>
                            <li className='flex space-x-2 items-center'>
                                <FaPalette size={15} />&nbsp;<span>Building pretty things with JS, CSS, and HTML.</span>
                            </li>
                            <li className='flex space-x-2 items-center'>
                                <FaCode size={15} />&nbsp;<span>Open-source software (developing and using).</span>
                            </li>
                            <li className='flex space-x-2 items-center'>
                                <FaChalkboardTeacher size={15} />&nbsp;<span>Learning from others and sharing what I've picked up.</span>
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
                            </li>
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
                    <h2 className='text-6xl fancy-header row text-center pb-5'>
                        SKILLS
                    </h2>
                    <a href="#footnote-1">[1]</a>
                </span>
                <div className='flex py-5 sm:flex-col md:flex-col lg:flex-row space-x-2'>
                    <div className="flex basis-1/5 pb-5">
                        <span className='flex justify-center'>
                            <h2 className='text-left text-2xl regular-header'>
                                Programming Languages
                            </h2>
                        </span>
                    </div>
                    <div className='flex basis-2/5 pb-5 space-x-4'>
                        <GaugeChart value={80} label={'JS'} fillColor={'#a6cee3'} />
                        <GaugeChart value={90} label={'Python'} fillColor={'#1f78b4'} />
                    </div>
                    <div className='flex basis-2/5 pb-5 space-x-4'>
                        <GaugeChart value={95} label={'R'} fillColor={'#b2df8a'} />
                        <GaugeChart value={85} label={'SQL'} fillColor={'#33a02c'} />
                    </div>
                </div>
                <div className='flex py-5 sm:flex-col md:flex-col lg:flex-row space-x-2'>
                    <div className="flex basis-1/5 pb-5">
                        <span className='flex justify-center'>
                            <h2 className='text-left text-2xl regular-header'>
                                Data Science
                            </h2>
                        </span>
                    </div>
                    <div className='basis-4/5 pb-5'>
                        <div className='pb-2'>
                            <h3 className='text-left text-xl regular-header'>
                                Data Wrangling
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan mi quis mauris faucibus, non tristique eros scelerisque. Nunc egestas magna ac tortor elementum tempor. Nunc cursus sodales nibh, ut vestibulum est hendrerit ut. Aliquam vel odio at diam scelerisque lacinia. Cras venenatis orci lacus, et feugiat velit interdum nec. Mauris id risus ac elit auctor porta non id lacus. Nullam auctor libero ut nulla accumsan vulputate. Aliquam semper in ex in feugiat. In hac habitasse platea dictumst. Fusce sit amet porttitor eros.
                            </p>
                        </div>
                        <div className='pb-2'>
                            <h3 className='text-left text-xl regular-header'>
                                Database Management
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan mi quis mauris faucibus, non tristique eros scelerisque. Nunc egestas magna ac tortor elementum tempor. Nunc cursus sodales nibh, ut vestibulum est hendrerit ut. Aliquam vel odio at diam scelerisque lacinia. Cras venenatis orci lacus, et feugiat velit interdum nec. Mauris id risus ac elit auctor porta non id lacus. Nullam auctor libero ut nulla accumsan vulputate. Aliquam semper in ex in feugiat. In hac habitasse platea dictumst. Fusce sit amet porttitor eros.
                            </p>
                        </div>
                        <div className='pb-2'>
                            <h3 className='text-left text-xl regular-header'>
                                Data Visualization
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan mi quis mauris faucibus, non tristique eros scelerisque. Nunc egestas magna ac tortor elementum tempor. Nunc cursus sodales nibh, ut vestibulum est hendrerit ut. Aliquam vel odio at diam scelerisque lacinia. Cras venenatis orci lacus, et feugiat velit interdum nec. Mauris id risus ac elit auctor porta non id lacus. Nullam auctor libero ut nulla accumsan vulputate. Aliquam semper in ex in feugiat. In hac habitasse platea dictumst. Fusce sit amet porttitor eros.
                            </p>
                        </div>
                        <div className='pb-2'>
                            <h3 className='text-left text-xl regular-header'>
                                Statistics
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan mi quis mauris faucibus, non tristique eros scelerisque. Nunc egestas magna ac tortor elementum tempor. Nunc cursus sodales nibh, ut vestibulum est hendrerit ut. Aliquam vel odio at diam scelerisque lacinia. Cras venenatis orci lacus, et feugiat velit interdum nec. Mauris id risus ac elit auctor porta non id lacus. Nullam auctor libero ut nulla accumsan vulputate. Aliquam semper in ex in feugiat. In hac habitasse platea dictumst. Fusce sit amet porttitor eros.
                            </p>
                        </div>
                        <div className='pb-2'>
                            <h3 className='text-left text-xl regular-header'>
                                Machine Learning
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan mi quis mauris faucibus, non tristique eros scelerisque. Nunc egestas magna ac tortor elementum tempor. Nunc cursus sodales nibh, ut vestibulum est hendrerit ut. Aliquam vel odio at diam scelerisque lacinia. Cras venenatis orci lacus, et feugiat velit interdum nec. Mauris id risus ac elit auctor porta non id lacus. Nullam auctor libero ut nulla accumsan vulputate. Aliquam semper in ex in feugiat. In hac habitasse platea dictumst. Fusce sit amet porttitor eros.
                            </p>
                        </div>
                    </div>
                </div>
                <div className='flex py-5 sm:flex-col md:flex-col lg:flex-row space-x-2'>
                    <div className="flex basis-1/5 pb-5">
                        <span className='flex justify-center'>
                            <h2 className='text-left text-2xl regular-header'>
                                Software Development
                            </h2>
                        </span>
                    </div>
                    <div className='basis-4/5 pb-5'>
                        <div className='pb-2'>
                            <h3 className='text-left text-xl regular-header'>
                                Front-End Development
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan mi quis mauris faucibus, non tristique eros scelerisque. Nunc egestas magna ac tortor elementum tempor. Nunc cursus sodales nibh, ut vestibulum est hendrerit ut. Aliquam vel odio at diam scelerisque lacinia. Cras venenatis orci lacus, et feugiat velit interdum nec. Mauris id risus ac elit auctor porta non id lacus. Nullam auctor libero ut nulla accumsan vulputate. Aliquam semper in ex in feugiat. In hac habitasse platea dictumst. Fusce sit amet porttitor eros.
                            </p>
                        </div>
                        <div className='pb-2'>
                            <h3 className='text-left text-xl regular-header'>
                                Back-End Development
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan mi quis mauris faucibus, non tristique eros scelerisque. Nunc egestas magna ac tortor elementum tempor. Nunc cursus sodales nibh, ut vestibulum est hendrerit ut. Aliquam vel odio at diam scelerisque lacinia. Cras venenatis orci lacus, et feugiat velit interdum nec. Mauris id risus ac elit auctor porta non id lacus. Nullam auctor libero ut nulla accumsan vulputate. Aliquam semper in ex in feugiat. In hac habitasse platea dictumst. Fusce sit amet porttitor eros.
                            </p>
                        </div>
                        <div className='pb-2'>
                            <h3 className='text-left text-xl regular-header'>
                                Version Control (Git)
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan mi quis mauris faucibus, non tristique eros scelerisque. Nunc egestas magna ac tortor elementum tempor. Nunc cursus sodales nibh, ut vestibulum est hendrerit ut. Aliquam vel odio at diam scelerisque lacinia. Cras venenatis orci lacus, et feugiat velit interdum nec. Mauris id risus ac elit auctor porta non id lacus. Nullam auctor libero ut nulla accumsan vulputate. Aliquam semper in ex in feugiat. In hac habitasse platea dictumst. Fusce sit amet porttitor eros.
                            </p>
                        </div>
                        <div className='pb-2'>
                            <h3 className='text-left text-xl regular-header'>
                                Cloud Platforms and Deployment
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan mi quis mauris faucibus, non tristique eros scelerisque. Nunc egestas magna ac tortor elementum tempor. Nunc cursus sodales nibh, ut vestibulum est hendrerit ut. Aliquam vel odio at diam scelerisque lacinia. Cras venenatis orci lacus, et feugiat velit interdum nec. Mauris id risus ac elit auctor porta non id lacus. Nullam auctor libero ut nulla accumsan vulputate. Aliquam semper in ex in feugiat. In hac habitasse platea dictumst. Fusce sit amet porttitor eros.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <p id="footnote-1" className='pt-10'>[1] Per my best, but probably not fully objective, guess.</p>
        </main >
    );
}
