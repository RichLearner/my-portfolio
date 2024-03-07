import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { SocialIcon } from "react-social-icons";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-7xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: -200,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 2.0,
        }}
        className="flex flex-row items-center gap-4 pt-3 z-10"
      >
        <Link
          href="/"
          className="text-green-700 text-md hover:text-green-500 font-semibold hover:font-bold"
        >
          HOME
        </Link>
        <Link
          href="/projects"
          className="text-green-700 text-md hover:text-green-500 font-semibold hover:font-bold"
        >
          PROJECTS
        </Link>
      </motion.div>

      <Link href="#contact">
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 2.0,
          }}
          className="flex flex-row items-center justify-center text-gray-300 cursor-pointer bg-green-700 px-4 rounded-full
          hover:bg-green-500"
        >
          <SocialIcon
            className="cursor-pointer hover:text-white"
            network="email"
            fgColor="white"
            bgColor="transparent"
          />
          <p className="uppercase hidden md:inline-flex text-sm text-white pr-2">
            Get in touch
          </p>
        </motion.div>
      </Link>
      <div className="absolute w-[50%] inset-0 gradient-01 z-0" />
    </header>
  );
}
