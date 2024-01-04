"use client";
import React, { useRef } from "react";
import ProjectCard from "./ProjectCard";
import { animate, motion, useInView } from "framer-motion";

const projectData = [
  {
    id: 1,
    title: "AI Summarizer",
    description:
      "A web app that summarizes text using AWS Lambda with admin dashboard",
    imgUrl: "/images/projects/ai-summarizer.png",
    tag: [
      "Node.js",
      "Express.js",
      "Javascript",
      "Web",
      "Python",
      "SQL",
      "Hugging Face",
      "Tailwind CSS",
    ],
    gitUrl: "https://github.com/pangchunh/ai-summarizer",
    previewUrl: "https://isa-ai-summarizer.onrender.com/",
  },
  {
    id: 2,
    title: "AWS timesheet engine",
    description:
      "A serverless timesheet engine using AWS Lambda, Step Functions and API Gateway",
    imgUrl: "/images/projects/aws-timesheet-system.png",
    tag: [
      "AWS",
      "Lambda",
      "Step Functions",
      "API Gateway",
      "Serverless",
      "DynamoDB",
      "NoSQL",
      "Javascript",
      "Tailwind CSS",
    ],
    gitUrl: "https://github.com/pangchunh/ChronoSystems-AWS-TimeSheet-Engine",
  },
  {
    id: 3,
    title: "Cloud Photo App",
    description:
      "A cloud based web albums that utilize AWS S3, DynamoDB and AWS EC2",
    imgUrl: "/images/projects/cloud-photo-app.png",
    tag: ["AWS", "Web", "NoSQL", "Javascript", "Node.js", "Express.js"],
    gitUrl: "https://github.com/pangchunh/cloud-project-photo-app",
    previewUrl: "https://belalk.xyz/",
  },
  {
    id: 4,
    title: "ServTennis",
    description:
      "A Python application that helps tennis players visuilize their performance using Machine Learning and Computer Vision.",
    imgUrl: "/images/projects/serv-tennis.png",
    tag: [
      "Python",
      "Machine Learning",
      "Computer Vision",
      "OpenCV",
      "Pytorch",
      "Pandas",
      "Matplotlib",
    ],
    previewUrl: "/serv-tennis.pdf",
  },
  {
    id: 5,
    title: "YVR student Hackathon - Keep it Clean",
    description:
      "An initiative to keep the YVR airport clean using Machine Learning and Computer Vision.",
    imgUrl: "/images/projects/yvr-hack.png",
    tag: ["Python", "Machine Learning", "Computer Vision", "OpenCV", "Pytorch"],
    previewUrl: "https://www.yvr.ca/en/blog/2023/innovation-hub-hackathon",
  },
  {
    id: 6,
    title: "Slack Heroku Integration",
    description:
      "Integrate Slack with Heroku to get webhook notifications on your Slack channel when your Heroku app is deployed.",
    imgUrl: "/images/projects/slack-heroku-integration.png",
    tag: ["Heroku", "Slack", "Javascript", "Node.js", "Express.js"],
    gitUrl: "https://github.com/pangchunh/herokuwebhook",
  },
  {
    id: 7,
    title: "Serenity Meditation Web App",
    description:
      "This browser based web application aims to help busy people connect with spirit and feel a sense of peace and relaxation by providing fun and easy to learn practices in less than 7 minutes.",
    imgUrl: "/images/projects/serenity-meditation-app.png",
    tag: ["Web", "Javascript", "HTML", "CSS", "NoSQL", "Bootstrap"],
    gitUrl: "https://github.com/pangchunh/Serenity",
    previewUrl: "https://project-1800-10643.web.app/",
  },
];

const cardVariants = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <section id="projects">
      <div className="pt-12">
        <h2 className="text-center text-4xl font-extrabold text-white mt-4 mb-8">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
            My Projects
          </span>
        </h2>
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
          {projectData.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{duration: 0.3, delay: index * 0.4}}
            >
              <ProjectCard
                key={project.id}
                imgUrl={project.imgUrl}
                title={project.title}
                description={project.description}
                tags={project.tag}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ProjectsSection;
