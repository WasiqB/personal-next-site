"use client";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import { motion } from "framer-motion";
import Image from "next/image";
import me from "@/assets/imgs/me.jpg";
import Link from "next/link";

type Props = {};

const Hero = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Hi, This is Wasiq Bhamla",
      "Test Automation specialist",
      "Freelancer",
      "Open Sourcer",
      "Blogger",
      "Trainer",
      "Mentor",
    ],
    loop: true,
    delaySpeed: 2000,
  });

  return (
    <section id="hero" className="snap-center">
      <motion.div
        className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden"
        initial={{
          opacity: 0,
        }}
        animate={{
          scale: [1, 2, 2, 3, 1],
          opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1.0],
          borderRadius: ["20%", "20%", "50%", "80%", "20%"],
        }}
        transition={{
          duration: 2.5,
        }}
      >
        <BackgroundCircles />
        <Image
          src={me}
          alt={"Wasiq Bhamla"}
          className="relative rounded-full h-32 w-32 mx-auto object-cover"
        />
        <div className="z-20">
          <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
            QA Freelancer
          </h2>
          <h1 className="text-5xl lg:text-6xl font-semibold px-10">
            <span className="mr-3">{text}</span>
            <Cursor cursorColor="#F7AB0A" />
          </h1>
          <div className="pt-5">
            <Link href={"#about"}>
              <button className="heroButton">About</button>
            </Link>
            <Link href={"#experience"}>
              <button className="heroButton">Experience</button>
            </Link>
            <Link href={"#skills"}>
              <button className="heroButton">Skills</button>
            </Link>
            <Link href={"#projects"}>
              <button className="heroButton">Projects</button>
            </Link>
            <Link href={"#services"}>
              <button className="heroButton">Services</button>
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
