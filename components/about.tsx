"use client";
import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div>
      <h2
        className="text-4xl font-extrabold "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        About Me
      </h2>
      <p className="mb-3">
        After completing my{" "}
        <span className="font-medium">Bachelor of Computer Application</span>{" "}
        degree, I decided to further my education by pursuing a <span className="font-medium">Master of Computer Application</span>, driven by my passion for programming. Additionally, I enrolled in a coding bootcamp to enhance my skills in {" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-medium">
          C++, Python, React, Next.js, Node.js, and MongoDB
        </span>
        . I am also familiar with TypeScript and Framer Motion. I am always
        looking to learn new technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and reading books. I also enjoy{" "}
        <span className="font-medium">learning new things</span>. I am currently
        learning about{" "}
        <span className="font-medium">history and philosophy</span>. I'm also
        learning Machine Learning Algorithms, Deep Learning and Neural Networks.
      </p>
    </motion.div>
  );
}
