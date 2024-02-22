import React from "react";
import { Project } from "../typings";
import { urlFor } from "../sanity";

type Props = { project: Project; index: number };

const ProjectCard = ({ project, index }: Props) => {
  return (
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <a
          href={project?.linkToBuild}
          target="_blank"
          rel="noreferrer"
          className="md:flex-shrink-0 flex items-center"
        >
          <img
            className="h-48 w-full object-cover md:w-72 mx-auto md:mx-0"
            src={urlFor(project?.image).url()}
            alt=""
          />
        </a>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-green-500 font-semibold">
            Project {index + 1}
          </div>
          <a
            href={project?.linkToBuild}
            target="_blank"
            rel="noreferrer"
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            {project?.title}
          </a>
          <p className="mt-2 text-gray-500">{project?.summary}</p>
          <div className="mt-4">
            <div className="flex flex-wrap">
              {project?.technologies.map((technology) => (
                <img
                  key={technology._id}
                  className="h-8 w-8 rounded-full object-cover mr-2 mb-2"
                  src={urlFor(technology?.image).url()}
                  alt=""
                />
              ))}
            </div>
          </div>
          <div className="mt-4">
            <a
              href={project?.linkToBuild}
              target="_blank"
              rel="noreferrer"
              className="inline-block bg-green-500 px-4 py-2 text-white rounded hover:bg-green-600"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
