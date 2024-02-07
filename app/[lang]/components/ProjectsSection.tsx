'use client';
import React, { useState } from 'react';
import { ProjectsData, ProjectsDataType, TagsType } from '@/app/assets';
import ProjectCard from './ProjectCard';
import ProjectType from './ProjectType';

type ProjectsList = {
  title: string;
  description: string;
  id: number;
};

type TagNamesType = {
  [key: string]: string;
};

type ProjectsLang = {
  title: string;
  tagNames: TagNamesType;
  list: ProjectsList[];
};

type TagKeys = { tagName: TagsType }[];

const tagKeys: TagKeys = [
  {
    tagName: 'all',
  },
  {
    tagName: 'web',
  },
  {
    tagName: 'desktop',
  },
];

const ProjectsSection = ({ projects }: { projects: ProjectsLang }) => {
  const [tag, setTag] = useState<TagsType>('all');

  const handleTagChange = (newTag: TagsType) => {
    setTag(newTag);
  };

  const filteredList = ProjectsData.filter((proj) => proj.tags.includes(tag));
  const getProjectById = (id: number): ProjectsList | undefined => {
    return projects.list.find((prjId) => prjId.id == id);
  };

  return (
    <section id="projects">
      <h2 className="mb-4 mt-4 text-center text-2xl font-bold text-white md:text-4xl">
        {projects.title}
      </h2>
      <div className="flex flex-row items-center justify-center gap-2 py-6 text-white">
        {tagKeys.map(({ tagName }, i) => (
          <ProjectType
            key={i}
            name={projects.tagNames[tagName]}
            onClick={() => handleTagChange(tagName)}
            isSelected={tag === tagName}
          />
        ))}
      </div>
      <div className="grid gap-8 md:grid-cols-3 md:gap-12">
        {filteredList.map((prj, i) => (
          <ProjectCard
            key={i}
            imgSrc={prj.image}
            title={getProjectById(prj.id)?.title || ''}
            description={getProjectById(prj.id)?.description || ''}
            link={prj.link}
            github={prj.github}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
