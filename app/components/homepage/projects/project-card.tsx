// @flow strict

import * as React from 'react';

interface ProjectCardProps {
  project: any;
}

function ProjectCard({ project }: ProjectCardProps) {

  return (
    <div className="bg-slate-900/40 backdrop-blur-md relative rounded-xl border border-white/10 shadow-[0_0_30px_rgba(6,182,212,0.15)] w-full">
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-cyan-500 to-purple-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-purple-600 to-transparent"></div>
      </div>
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative">
        <div className="flex flex-row space-x-1 lg:space-x-2 absolute top-1/2 -translate-y-1/2">
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></div>
          <div className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></div>
        </div>
        <p className="text-center ml-3 text-cyan-400 font-bold tracking-wide text-base lg:text-xl drop-shadow-sm">
          {project.name}
        </p>
      </div>
      <div className="overflow-hidden border-t-[1px] border-white/10 px-4 lg:px-8 py-4 lg:py-8">
        <code className="font-mono text-xs md:text-sm lg:text-base">
          <div className="blink">
            <span className="mr-2 text-purple-400">const</span>
            <span className="mr-2 text-slate-100">project</span>
            <span className="mr-2 text-purple-400">=</span>
            <span className="text-slate-400">{'{'}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-slate-200">name:</span>
            <span className="text-slate-400">{`'`}</span>
            <span className="text-cyan-300">{project.name}</span>
            <span className="text-slate-400">{`',`}</span>
          </div>

          <div className="ml-4 lg:ml-8 mr-2">
            <span className=" text-slate-200">tools:</span>
            <span className="text-slate-400">{` ['`}</span>
            {
              project.tools.map((tag: string, i: number) => (
                <React.Fragment key={i}>
                  <span className="text-cyan-300">{tag}</span>
                  {
                    project.tools.length - 1 !== i &&
                    <span className="text-slate-400">{`', '`}</span>
                  }
                </React.Fragment>
              ))
            }
            <span className="text-slate-400">{"],"}</span>
          </div>
          <div>
            <span className="ml-4 lg:ml-8 mr-2 text-slate-200">myRole:</span>
            <span className="text-orange-400">{project.role}</span>
            <span className="text-slate-400">,</span>
          </div>
          <div className="ml-4 lg:ml-8 mr-2">
            <span className="text-slate-200">Description:</span>
            <span className="text-cyan-400">{' ' + project.description}</span>
            <span className="text-slate-400">,</span>
          </div>
          <div><span className="text-slate-400">{`};`}</span></div>
        </code>
      </div>
    </div>
  );
};

export default ProjectCard;