import React from 'react';
import { ProjectsData } from '@/app/assets';
import ProjectCard from './ProjectCard';

type ProjectsList = {
  title: string;
  description: string;
};

type ProjectsLang = {
  title: string;
  list: ProjectsList[];
};

const ProjectsSection = ({ projects }: { projects: ProjectsLang }) => {
  return (
    <section>
      <h2 className="mb-4 mt-4 text-center text-2xl font-bold text-white md:text-4xl">
        {projects.title}
      </h2>
      <div className="grid gap-8 md:grid-cols-3 md:gap-12">
        {projects.list.map((prj, i) => (
          <ProjectCard
            key={i}
            imgSrc={ProjectsData[i].image}
            title={prj.title}
            description={prj.description}
            link={ProjectsData[i].link}
            github={ProjectsData[i].github}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
