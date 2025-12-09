"use client";

import React from "react";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";

import { motion } from "framer-motion";
import { FlipWords } from "@/components/ui/flip-words";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { LinkPreview } from "@/components/ui/link-preview";

const words = [
  "Javascript",
  "Python",
  "SQl",
  "React",
  "NextJS",
  "TailwindCSS",
  "Redux",
  "Express",
  "Django",
];
export function HeroSection() {
  return (
    <div className="relative  -top-16">
      <HeroHighlight>
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-2xl px-4  md:text-4xl lg:text-5xl  font-bold text-neutral-700 dark:text-white max-w-4xl leading-loose! !lg:leading-snug text-center mx-auto "
        >
          My name is{" "}
          <Highlight className="text-black dark:text-white">
            {/* <LinkPreview url="https://myfirstblogwebsite.vercel.app/"> */}
            Saurav Sanjel
            {/* </LinkPreview> */}
          </Highlight>
          , <br />
          {"  "} and I live in Bangalore, India. {"  "}
          <br />I am most profecient in
          <Highlight className="text-black dark:text-white">
            Typescript.
          </Highlight>
          <br />
          {"  "} I am proficient in {"  "}
          <Highlight className="text-black dark:text-white">
            <AnimatedTooltip
              item={{
                id: 1,
                designation: words.join(", "),
                text: <FlipWords words={words} />,
              }}
            />{" "}
            {"  "} .
          </Highlight>
        </motion.h1>
      </HeroHighlight>
    </div>
  );
}
