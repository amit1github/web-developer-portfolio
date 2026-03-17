// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";

function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute -top-[98px] -z-10"
      />

      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 className="text-3xl font-bold leading-10 text-slate-100 md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Hello, <br />
            This is {' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 drop-shadow-sm">{personalData.name}</span>
            {` , I'm a Senior `}
            <span className="text-cyan-400 drop-shadow-sm">{personalData.designation}</span>
            .
          </h1>

          <div className="my-12 flex items-center gap-5">
            <Link
              href={personalData.github}
              target='_blank'
              className="text-slate-400 hover:text-cyan-400 transition-all hover:scale-125 duration-300 drop-shadow-md"
            >
              <BsGithub size={30} />
            </Link>
            <Link
              href={personalData.linkedIn}
              target='_blank'
              className="text-slate-400 hover:text-cyan-400 transition-all hover:scale-125 duration-300 drop-shadow-md"
            >
              <BsLinkedin size={30} />
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link href="#contact" className="bg-gradient-to-r from-cyan-500 to-purple-600 p-[1px] rounded-full transition-all duration-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.5)]">
              <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0A0A0A] rounded-full text-center md:text-sm font-semibold uppercase tracking-wider text-slate-100 transition-all duration-200 ease-out hover:bg-transparent flex items-center gap-1 hover:gap-3">
                <span>Contact me</span>
                <RiContactsFill size={16} />
              </button>
            </Link>

            {/* <Link className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold" role="button" target="_blank" href={personalData.resume}
            >
              <span>Get Resume</span>
              <MdDownload size={16} />
            </Link> */}
          </div>

        </div>
        <div className="order-1 lg:order-2 bg-slate-900/40 backdrop-blur-md relative rounded-xl border border-white/10 shadow-[0_0_30px_rgba(6,182,212,0.15)]">
          <div className="flex flex-row">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-500 to-purple-600"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-purple-600 to-transparent"></div>
          </div>
          <div className="px-4 lg:px-8 py-5">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-orange-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-200"></div>
            </div>
          </div>
          <div className="overflow-hidden border-t-[1px] border-white/10 px-4 lg:px-8 py-4 lg:py-8">
            <code className="font-mono text-xs md:text-sm lg:text-base">
              <div className="blink">
                <span className="mr-2 text-purple-400">const</span>
                <span className="mr-2 text-slate-100">coder</span>
                <span className="mr-2 text-purple-400">=</span>
                <span className="text-slate-400">{'{'}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-slate-200">name:</span>
                <span className="text-slate-400">{`'`}</span>
                <span className="text-cyan-300">Amit Yadav</span>
                <span className="text-slate-400">{`',`}</span>
              </div>
              <div className="ml-4 lg:ml-8 mr-2">
                <span className=" text-slate-200">skills:</span>
                <span className="text-slate-400">{`['`}</span>
                <span className="text-cyan-300">Javascript</span>
                <span className="text-slate-400">{"', '"}</span>
                <span className="text-cyan-300">Typescript</span>
                <span className="text-slate-400">{"', '"}</span>
                <span className="text-cyan-300">NodeJS</span>
                <span className="text-slate-400">{"', '"}</span>
                <span className="text-cyan-300">ReactJS</span>
                <span className="text-slate-400">{"', '"}</span>
                <span className="text-cyan-300">NextJS</span>
                <span className="text-slate-400">{"', '"}</span>
                <span className="text-cyan-300">Typescript</span>
                <span className="text-slate-400">{"', '"}</span>
                <span className="text-cyan-300">ExpressJS</span>
                <span className="text-slate-400">{"', '"}</span>
                <span className="text-cyan-300">NestJS</span>
                <span className="text-slate-400">{"', '"}</span>
                <span className="text-cyan-300">MySql</span>
                <span className="text-slate-400">{"', '"}</span>
                <span className="text-cyan-300">MongoDB</span>
                <span className="text-slate-400">{"', '"}</span>
                <span className="text-cyan-300">Docker</span>
                <span className="text-slate-400">{"', '"}</span>
                <span className="text-cyan-300">AWS</span>
                <span className="text-slate-400">{"'],"}</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-slate-200">hardWorker:</span>
                <span className="text-orange-400">true</span>
                <span className="text-slate-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-slate-200">quickLearner:</span>
                <span className="text-orange-400">true</span>
                <span className="text-slate-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-slate-200">problemSolver:</span>
                <span className="text-orange-400">true</span>
                <span className="text-slate-400">,</span>
              </div>
              <div>
                <span className="ml-4 lg:ml-8 mr-2 text-green-400">hireable:</span>
                <span className="text-purple-400">function</span>
                <span className="text-slate-400">{'() {'}</span>
              </div>
              <div>
                <span className="ml-8 lg:ml-16 mr-2 text-purple-400">return</span>
                <span className="text-slate-400">{`(`}</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-slate-200">hardWorker</span>
                <span className="text-orange-400">&amp;&amp;</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-slate-200">problemSolver</span>
                <span className="text-orange-400">&amp;&amp;</span>
              </div>
              <div>
                <span className="ml-12 lg:ml-24 text-cyan-400">this.</span>
                <span className="mr-2 text-slate-200">skills.length</span>
                <span className="mr-2 text-orange-400">&gt;=</span>
                <span className="text-orange-400">5</span>
              </div>
              <div><span className="ml-8 lg:ml-16 mr-2 text-slate-400">{`);`}</span></div>
              <div><span className="ml-4 lg:ml-8 text-slate-400">{`};`}</span></div>
              <div><span className="text-slate-400">{`};`}</span></div>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;