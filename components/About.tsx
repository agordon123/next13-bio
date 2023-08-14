"use client"
import SectionHeader from "./SectionHeader";
import { motion } from "framer-motion";
// import useSectionInView from "../hooks/useSectionView";

export default function About() {
        return (
          <motion.section
            className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.175 }}
            id="about"
          >
            <SectionHeader>About me</SectionHeader>
            <p className="mb-3">
              After going through my early adulthood without a clear career path,
              having some success but feeling unfulfilled, I decided to return to school
              in my 30&apos;s and get{" "}
              <span className="font-medium">
                a B.S. in Computer Programming and Information Systems from SUNY
                Farmingdale, Long Island, NY
              </span>
              . Since early 2022, I&apos;ve worked in multiple
              <span className="font-medium text-xl">
                {" "}
                Full-Stack Web Development{" "}
              </span>
               roles, as an intern, with an international company, and as a
              freelancer.
              <span className="">
                I enjoy the challenge of learning new things and solving
                problems, and I like the idea of being able to create something
                with a team that can make our lives{" "}
                <span className="font-bold italic">easier.</span>
              </span>{" "}
              My stack of choice is{" "}
              <span className="font-medium text-xl">
                React, Next.js, Node.js, and Postgres/MYSQL,
              </span>
              with the{" "}
              <span className="font-medium text-xl">Laravel framework</span> for
              either use an API or with IntertiaJS to use it as a monolith. I am
              also familiar with TypeScript and various DBMS tools. I am always
              looking to learn new technologies. I am currently looking for a{" "}
              <span className="font-bold text-xl">Full-Time Position</span> in a field that uses all my talents, preferably in the NYC area. I am open to
              remote work or even relocating if the opportunity is right.
            </p>

            <p>
              When I&apos;m not working on my career, I{" "}
              <span className="bold">enjoy</span> learning about Neuroscience, Psychology, and History.  I also try to maintain a
              work life balance and like to spend time at the gym, because of the increasing importance of maintaining physical and mental health.
            </p>
          </motion.section>
        );
}
