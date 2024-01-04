"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Languages",
    id: "languages",
    content: (
      <ul class="list-disc">
        <li>Typescript</li>
        <li>Javascript</li>
        <li>Python</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Java</li>
        <li>SQL (PostgreSQL, MySQL)</li>
        <li>NoSQL(DynamoDB, MongoDB)</li>
        <li>C</li>
      </ul>
    ),
  },
  {
    title: "Tools",
    id: "tools",
    content: (
      <ul class="list-disc">
        <li>Docker</li>
        <li>Kubernetes</li>
        <li>Git</li>
        <li>Postman</li>
        <li>Linux</li>
        <li>Jira</li>
        <li>AWS Lambda</li>
        <li>Step functions</li>
        <li>API Gateway</li>
        <li>Cloud Formation</li>
      </ul>
    ),
  },
  {
    title: "Frameworks",
    id: "frameworks",
    content: (
      <ul class="list-disc">
        <li>Node.js</li>
        <li>Express.js</li>
        <li>Next.js</li>
        <li>React.js</li>
        <li>Deno.js</li>
        <li>RestAPI</li>
        <li>Robot Framework</li>
        <li>Selenium</li>
        <li>OpenCV</li>
        <li>Pytorch</li>
      </ul>
    ),
  },
  {
    title: "Domains",
    id: "domains",
    content: (
      <ul class="list-disc">
        <li>Object Oriented Programming</li>
        <li>Full Stack Web Development</li>
        <li>Serverless Architecture</li>
        <li>Microservices</li>
        <li>Cloud Computing</li>
        <li>Test Automation</li>
        <li>DevOps</li>
        <li>Quality Assurance</li>
        <li>Machine Learning</li>
        <li>Data Analytics</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("languages");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="about" className="text-white">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-32 xl:px-16">
        <Image
          src="/images/about-image.png"
          alt="about image"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-lef flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg text-center lg:text-left">
            As a Full Stack Developer and Software Engineer, my adaptability and
            quick learning skills are at the forefront of my professional
            approach. This was highlighted in my team's first-place finish at
            the YVR's student hackathon, showcasing our innovative
            problem-solving capabilities. My experience in various roles has
            strengthened my proficiency in programming languages such as
            Python, Typescript and JavaScript, and has allowed me to excel in API
            integration, database script development, and automated testing.
          </p>
          <div id="skills" className=""></div>
          <h3 className="text-4xl font-bold text-white mt-16 lg:mt-8">
            Skills
          </h3>{" "}
          <div className="flex flex-row mt-4">
            <TabButton
              selectTab={() => {
                handleTabChange("languages");
              }}
              active={tab === "languages"}
            >
              {" "}
              Languages{" "}
            </TabButton>
            <TabButton
              selectTab={() => {
                handleTabChange("tools");
              }}
              active={tab === "tools"}
            >
              {" "}
              Tools{" "}
            </TabButton>
            <TabButton
              selectTab={() => {
                handleTabChange("frameworks");
              }}
              active={tab === "frameworks"}
            >
              {" "}
              Frameworks{" "}
            </TabButton>
            <TabButton
              selectTab={() => {
                handleTabChange("domains");
              }}
              active={tab === "domains"}
            >
              {" "}
              Domains{" "}
            </TabButton>
          </div>
          <div className="mt-4">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
