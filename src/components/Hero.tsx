"use client";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import me from "@/assets/imgs/me.jpg";

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
    <section id="hero" className="snap-start">
      <div className="h-screen flex flex-col space-y-0 items-center justify-center text-center overflow-hidden">
        <BackgroundCircles />
        <Image
          src={me}
          alt={"Wasiq Bhamla"}
          className="relative rounded-full h-32 w-32 mx-auto object-cover"
        />
        <div className="z-20">
          <h2 className="text-sm uppercase text-gray-500 p-2 tracking-[15px]">
            QA Freelancer
          </h2>
          <h1 className="text-5xl lg:text-6xl font-semibold px-10">
            <span className="mr-3">{text}</span>
            <Cursor cursorColor="#F7AB0A" />
          </h1>
          <div className="pt-5">
            <a href="#about">
              <button className="heroButton">About</button>
            </a>
            <a href="#experience">
              <button className="heroButton">Experience</button>
            </a>
            <a href="#skills">
              <button className="heroButton">Skills</button>
            </a>
            <a href="#projects">
              <button className="heroButton">Projects</button>
            </a>
            <a href="#services">
              <button className="heroButton">Services</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
