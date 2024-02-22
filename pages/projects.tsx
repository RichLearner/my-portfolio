import React from "react";
import Header from "../components/Header";
import { sanityClient } from "../sanity";
import { GetStaticProps } from "next";
import ProjectCard from "../components/ProjectCard";
import { Project, Social } from "../typings";
import ContactMe from "../components/ContactMe";

type Props = { projects: Project[]; socials: Social[] };

const Projects = ({ socials, projects }: Props) => {
  return (
    <div className="bg-lightBackground text-darkBlack overflow-x-hidden z-0 scrollbar-thin scrollbar-track-green-400/20 scrollbar-thumb-[#698C5A]/80">
      <div className="gradient-01 z-0" />
      <Header />

      <div className="flex flex-col justify-center items-center px-4 sm:px-20 z-10 gap-10">
        <h1 className="text-3xl text-green-900 font-bold">Projects</h1>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mx-auto justify-items-center">
            {projects?.map((project, i) => (
              <ProjectCard key={project._id} project={project} index={i} />
            ))}
          </div>
        </div>
      </div>

      <section id="contact" className="pt-20">
        <ContactMe socials={socials} />
      </section>
    </div>
  );
};

export default Projects;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfoQuery = "*[_type == 'pageInfo'][0]";
  const pageInfo = await sanityClient.fetch(pageInfoQuery);

  const experienceQuery = `
  *[_type == 'experience'] {
    ...,
    technologies[]->
  }
`;
  const experiences = await sanityClient.fetch(experienceQuery);

  const skillsQuery = "*[_type == 'skill']";
  const skills = await sanityClient.fetch(skillsQuery);

  const projectsQuery = `
  *[_type == 'project'] {
    ...,
    technologies[]->
  }
`;
  const projects = await sanityClient.fetch(projectsQuery);

  const socialsQuery = "*[_type == 'social']";
  const socials = await sanityClient.fetch(socialsQuery);

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    revalidate: 10,
  };
};
