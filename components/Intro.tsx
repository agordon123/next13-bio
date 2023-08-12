"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import "../public/portrait.png";
import Link from "next/link";
import { BsArrowRight,BsGithub,BsLinkedin } from "react-icons/bs";
import { BsDownload } from "react-icons/bs";

export default function Intro() {
  return (
    <section className="mb-28 max-w-[50rem]">
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/portrait.png"
              alt="picture"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>
          <motion.span
            className="absolute bottom-0 right-0 text-4xl"
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            👋
          </motion.span>
        </div>
      </div>
      <motion.p
        className="mb-10 mt-4 px-4 text-2xl font-medium !leadimg-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Hi, I&apos;m <span className="font-bold"> Adam Gordon. </span>I&apos;m a
        <span className="font-bold"> software developer </span>based in the
        <span className="font-bold"> NYC Area. </span>
        My most used technologies are
        <span className="font-bold underline"> Next.JS 13, Vue or React</span>
        (with and without Typescript), and the
        <span className="font-bold"> Laravel framework.</span>
      </motion.p>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center  gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full"
        >
          Contact Me Here
          <BsArrowRight />
        </Link>
        <a className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full">
          Download CV <BsDownload />
        </a>
        <a className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full">
          <BsLinkedin />
        </a>
        <a className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full">
          <BsGithub />
        </a>
      </motion.div>
    </section>
  );
}
