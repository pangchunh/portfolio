"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 lg:text-8xl lg:leading-normal text-4xl  sm:text-5xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Peter",
                1500,
                "Full Stack Dev",
                1500,
                "Software Engineer",
                1500,
                "Tennis Player",
                1500,
              ]}
              wrapper="span"
              speed={20}
              repeat={Infinity}
            />
          </h1>
          <p className="text-[#ADB7BE] text-base sm:text-lg lg:text-xl mb-6">
            A dedicated full-stack developer with a strong foundation in
            cloud computing and a knack for creating robust automated tests.
          </p>
          <div>
            <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-r from-primary-500 from-10% via-sky-500 via-30% to-secondary-500 to-90% hover:bg-slate-200 text-white">
              Hire Me
            </button>
            <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-r from-primary-500 from-10% via-sky-500 via-30% to-secondary-500 to-90% hover:bg-slate-800 text-white mt-3">
              <a href="/resume.pdf">
                <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                  Download Resume
                </span>
              </a>
            </button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="lg:mt-0 mt-4 rounded-full bg-[#181818] w-[230px] h-[230px] lg:w-[300px] lg:h-[300px] relative">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
              width={230}
              height={230}
            />
            <br />
            <br />
            <br />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
