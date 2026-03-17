// @flow strict
import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";


function AboutSection() {
  return (
    <div id="about" className="my-12 lg:my-16 relative">
      <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
        <span className="bg-slate-900/60 backdrop-blur-md border border-white/10 w-fit text-slate-200 rotate-90 p-2 px-5 text-xl rounded-md shadow-lg">
          ABOUT ME
        </span>
        <span className="h-36 w-[2px] bg-gradient-to-b from-transparent via-cyan-500 to-transparent"></span>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
        <div className="order-2 lg:order-1">
          <p className="font-semibold mb-5 text-cyan-400 text-xl uppercase tracking-widest drop-shadow-sm">
            Who I am?
          </p>
          <p className="text-slate-300 text-sm lg:text-lg leading-relaxed">
            {personalData.description}
          </p>
        </div>
        <div className="flex justify-center order-1 lg:order-2">
          <Image
            src={personalData.profile}
            width={280}
            height={280}
            alt=""
            className="rounded-xl transition-all duration-500 hover:scale-110 hover:-translate-y-2 cursor-pointer shadow-[0_0_30px_rgba(6,182,212,0.2)] hover:shadow-[0_0_50px_rgba(168,85,247,0.4)] border border-white/5"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutSection;