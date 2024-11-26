import React from 'react';
import { FaEnvelope } from "react-icons/fa";

export default function Home() {
  return (
    <main className="container px-20 py-10">
      <div class="flex lg:flex-row md:flex-row sm:flex-col">
        <div class="basis-2/5">
          <section class="hero container max-w-screen-lg mx-auto pb-10">
            <img class="mx-auto size-64 rounded-full" src="/ccallaghan-headshot.jpg" alt="screenshot" />
          </section>
          <h2 className='text-center text-5xl'>
            Chris Callaghan
          </h2>
          <br />
          <h3 className='text-center text-xl'>
            Data Science Program Director
          </h3>
          <br />
          <div className='flex justify-center gap-x-6'>
            <a href="mailto:cjcallaghan88@gmail.com" className="text-gray-600 hover:text-gray-800">
              <FaEnvelope size={25} />
            </a>
          </div>
        </div>
        <div class="basis-3/5 pl-4 py-10">
          <h2 className='text-6xl py-10 fancy-header'>
            Background
          </h2>
          <p className='text-lg pb-10'>
            I’m a data scientist and budding software engineer dedicated to advancing criminal justice research. My work focuses on creating analytics and software solutions that empower non-technical audiences to make informed policy decisions. When I’m not coding or diving into data, I enjoy exploring the outdoors through backpacking or finding balance on my yoga mat. I live in California with my husband and our cat.
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
