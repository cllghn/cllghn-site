import React from 'react';
import { FaEnvelope } from "react-icons/fa";
import Image from 'next/image';

export default function Home() {
  return (
    <main className="container px-16 sm:px-32 pt-36 py-10 min-w-full pb-60">
      <div className="flex flex-col md:flex-row space-x-10">
        <div className="basis-2/5 md:py-5">
          <section className="hero container max-w-screen-lg mx-auto pb-10">
            <div className="relative w-full max-w-xs mx-auto">
              <Image
                className="mx-auto rounded-full"
                src="/ccallaghan-headshot.jpg"
                alt="screenshot"
                width={500}
                height={500}
              />
            </div>
          </section>
          <h2 className='text-center text-5xl regular-header pb-5'>
            Chris Callaghan
          </h2>
          <div className='flex justify-center gap-x-6'>
            <a href="mailto:cjcallaghan88@gmail.com" className="text-gray-600 hover:text-gray-800">
              <FaEnvelope size={25} />
            </a>
          </div>
        </div>
        <hr className="block md:hidden my-10 bg-[#3b3b3b] h-0.5 w-3/4 self-center" />
        <div className="basis-3/5 pl-4 md:py-10">
          <h2 className='text-5xl md:text-6xl py-10 fancy-header text-center'>
            BACKGROUND
          </h2>
          <p className='text-lg pb-10'>
            I’m a data scientist and budding software engineer dedicated to advancing criminal justice research. My work focuses on creating analytics and software solutions that empower non-technical audiences to make informed policy decisions. When I’m not coding or squinting at a computer screen, I enjoy exploring the outdoors through backpacking or finding balance on my yoga mat. I live in California with my husband and our cat.
          </p>
          <div className='text-sm text-right'>
            <a href='/about'>Learn more about me... &rarr;</a>
            <br />
            <a href='/projects'>or my work.&rarr;</a>
          </div>
        </div>
      </div>
    </main >
  );
}
