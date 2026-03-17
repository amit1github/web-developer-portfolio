import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';

const Projects = () => {

  return (
    <div id='projects' className="relative z-50  my-12 lg:my-24">
      <div className="relative mb-5 lg:py-8 z-[80]">
        <div className="w-[80px] h-[80px] bg-cyan-500 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-slate-900/60 backdrop-blur-md border border-white/10 absolute left-0 w-fit text-slate-200 px-5 py-3 text-xl rounded-md shadow-[0_0_20px_rgba(6,182,212,0.15)] tracking-widest uppercase font-bold">
            PROJECTS
          </span>
          <span className="w-full h-[1px] bg-gradient-to-r from-cyan-500 to-transparent"></span>
        </div>
      </div>

      <div className="pt-24">
        <div className="flex flex-col gap-6">
          {projectsData.slice(0, 4).map((project, index) => (
            <div
              id={`sticky-card-${index + 1}`}
              key={index}
              className="sticky-card w-full mx-auto max-w-2xl sticky"
            >
              <div className="box-border flex items-center justify-center rounded-xl shadow-[0_0_30px_0_rgba(0,0,0,0.4)] transition-all duration-[0.5s]">
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;