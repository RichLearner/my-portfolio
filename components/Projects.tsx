import { motion } from "framer-motion";
import React from "react";
import { urlFor } from "../sanity";
import { Project } from "../typings";

type Props = { projects: Project[] };

export default function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className=" h-screen relative flex overflow-hidden flex-col text-left max-w-full justify-evenly mx-auto items-center z-10"
    >
      <h3 className="absolute top-20 md:top-24 uppercase tracking-[20px] text-green-600 text-xl md:text-2xl">
        Projects
      </h3>

      {/* <h4 className="absolute top-64 md:top-40 tracking-[4px] text-green-600 text-md md:text-lg z-10 text-center">
        Swipe or use the scrollbar below
      </h4>
      <h4 className="absolute top-72 md:top-48 tracking-[4px] text-green-600 text-md md:text-lg z-10 text-center">
        for more projects
      </h4> */}

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-green-400/20 scrollbar-thumb-[#698C5A]/80">
        {projects?.map((project, i) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-3 items-center justify-center p-10 md:p-44 h-screen mt-20"
          >
            <a href={project?.linkToBuild} target="_blank" rel="noreferrer">
              <motion.img
                initial={{ y: -100, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.2 }}
                viewport={{ once: true }}
                className=" h-28 xl:h-72 md:h-60 object-contain"
                src={urlFor(project?.image).url()}
                alt=""
              />
            </a>

            <div className="space-y-5 md:space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-lg md:text-2xl lg:text-4xl font-semibold text-center">
                <span className="underline decoration-darkGreen/50">
                  Project {i + 1}:
                </span>{" "}
                {project?.title}
              </h4>
              <div className="flex items-center space-x-2 justify-center ">
                {project?.technologies.map((technology) => (
                  <img
                    key={technology._id}
                    className="h-10 w-10 rounded-full object-cover"
                    src={urlFor(technology?.image).url()}
                    alt=""
                  />
                ))}
              </div>

              <p className="text-sm md:text-md lg:text-lg text-justify ">
                {project?.summary}
              </p>

              <a
                href={project?.linkToBuild}
                target="_blank"
                rel="noreferrer"
                className="flex justify-center items-center mx-auto w-40 h-10 bg-green-700 text-white font-bold rounded-full hover:bg-green-500 "
              >
                Project Page
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[20%] md:top-[30%] bg-lime-100 left-0 h-[500px] -skew-y-12"></div>
    </motion.div>
  );
}
