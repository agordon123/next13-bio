"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import "../public/portrait.png";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { BsDownload } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { BsMedium } from "react-icons/bs";

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
              width="300"
              height="300"
              quality="95"
              priority={true}
              className="h-228 w-28 rounded-2xl object-cover border-[0.05rem] border-white shadow-xl"
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
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Hi, I&apos;m <span className="font-bold"> Adam Gordon. </span>I&apos;m a
        <span className="font-bold"> software developer </span>based in the
        <span className="font-bold"> NYC Area. </span>
        My most used technologies are
        <span className="font-bold"> NextJS 13, Vue or React</span>
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
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full hover:scale-110 0
          focus:scale-110 hover:bg-gray-950 active:scale-105 transition group-hover:translate-x-1"
        >
          Contact Me Here
          <BsArrowRight className="opacity-70" />
        </Link>

        <a
          className="group bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950
        active:scale-105 transition cursor-pointer  border border-black/10 "
          href="/printableresume.docx"
        >
          Download CV{" "}
          <BsDownload className="opacity-60 group-hover:trahslate-x-1 transition" />
        </a>
        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950
        active:scale-105 transition cursor-pointer  border border-black/10"
          href="https://www.linkedin.com/in/adam-gordon119/"
        >
          <BsLinkedin />
        </a>
        <a
          className="bg-white p-4 text-gray-700 flex items-center gap-2 rounded-full text-[1.35rem]  focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950
        active:scale-105 transition cursor-pointer  border border-black/10"
          href="https://github.com/agordon/123"
        >
          <FaGithubSquare />
        </a>

      </motion.div>
    </section>
  );
}
