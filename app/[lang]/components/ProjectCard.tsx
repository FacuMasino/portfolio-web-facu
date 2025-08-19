import Link from 'next/link';
import React from 'react';
import {
  CodeBracketIcon,
  EyeIcon,
  LockClosedIcon,
} from '@heroicons/react/24/outline';
import Image from 'next/image';

const ProjectCard = ({
  imgSrc,
  title,
  description,
  link,
  github,
  buttons,
}: {
  imgSrc: string;
  title: string;
  description: string;
  link: string;
  github: string;
  buttons: {
    view: string;
    code: string;
    private: string;
  };
}) => {
  return (
    <div>
      <div className="group relative h-52 rounded-t-xl md:h-72">
        <Image
          fill
          className="absolute left-0 top-0 rounded-t-xl"
          src={imgSrc}
          style={{ backgroundPosition: 'center', objectFit: 'cover' }}
          alt={`${title} preview`}
        />
        <div
          className="overlay invisible absolute left-0 top-0 flex h-full 
                  w-full items-center justify-center gap-2 bg-[#1d1d1d]
                  bg-opacity-80 opacity-0 transition-all duration-500 group-hover:visible group-hover:opacity-100"
        >
          <Link
            href={link}
            title={buttons.view}
            target="_blank"
            className="group/link relative flex h-14 w-14 items-center rounded-full border-2 text-[#c2c2c2] hover:border-white"
          >
            <EyeIcon className="m-2 h-10 w-10 cursor-pointer text-[#c2c2c2] group-hover/link:text-white" />
          </Link>
          {github ? (
            <Link
              href={github}
              title={buttons.code}
              target="_blank"
              className="group/link relative flex h-14 w-14 items-center rounded-full border-2 text-[#c2c2c2] hover:border-white"
            >
              <CodeBracketIcon className="m-2 h-10 w-10 cursor-pointer text-[#c2c2c2] group-hover/link:text-white" />
            </Link>
          ) : (
            <span
              title={buttons.private}
              className="group/link relative flex h-14 w-14 items-center rounded-full border-2 text-[#c2c2c2] hover:border-white"
            >
              <LockClosedIcon className="m-2 h-10 w-10 cursor-pointer text-[#c2c2c2] group-hover/link:text-white" />
            </span>
          )}
        </div>
      </div>
      <div className="rounded-b-xl bg-[#1d1d1d] px-4 py-6 text-white">
        <h3 className="mb-2 text-xl font-semibold">{title}</h3>
        <p className="text-[#c2c2c2]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
