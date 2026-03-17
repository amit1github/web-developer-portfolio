// @flow strict
import Image from "next/image";

import { educations } from "@/utils/data/educations";
import { BsPersonWorkspace } from "react-icons/bs";
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";
import study from "../../../../public/lottie/study.json";

function Education() {
  return (
    <div id="education" className="relative z-50 border-t my-12 lg:my-24 border-white/10">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />
      <div className="flex justify-center -translate-y-[1px]">
        <div className="w-3/4">
          <div className="h-[1px] bg-gradient-to-r from-transparent via-cyan-500 to-transparent w-full" />
        </div>
      </div>

      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[1px] bg-gradient-to-r from-transparent to-cyan-500"></span>
          <span className="bg-slate-900/60 backdrop-blur-md border border-white/10 w-fit text-slate-200 p-2 px-5 text-xl rounded-md shadow-[0_0_20px_rgba(6,182,212,0.1)] uppercase tracking-widest font-semibold flex items-center justify-center">
            Educations
          </span>
          <span className="w-24 h-[1px] bg-gradient-to-l from-transparent to-cyan-500"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="flex justify-center items-start">
            <div className="w-3/4 h-3/4">
              <AnimationLottie animationPath={study} />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-6">
              {
                educations.map(education => (
                  <GlowCard key={education.id} identifier={`education-${education.id}`}>
                    <div className="p-3 relative text-white">
                      <Image
                        src="/blur-23.svg"
                        alt="Hero"
                        width={1080}
                        height={200}
                        className="absolute bottom-0 opacity-80"
                      />
                      <div className="flex justify-center">
                        <p className="text-xs sm:text-sm text-cyan-400 font-medium tracking-wide">
                          {education.duration}
                        </p>
                      </div>
                      <div className="flex items-center gap-x-8 px-3 py-5">
                        <div className="text-purple-400 transition-all duration-300 hover:scale-125 drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]">
                          <BsPersonWorkspace size={36} />
                        </div>
                        <div>
                          <p className="text-base sm:text-xl mb-2 font-semibold uppercase text-slate-100">
                            {education.title}
                          </p>
                          <p className="text-sm sm:text-base text-slate-400">{education.institution}</p>
                        </div>
                      </div>
                    </div>
                  </GlowCard>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;