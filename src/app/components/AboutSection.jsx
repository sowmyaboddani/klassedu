"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const AboutSection = () => {
  // const [tab, setTab] = useState("skills");
  // const [isPending, startTransition] = useTransition();

  // const handleTabChange = (id) => {
  //   startTransition(() => {
  //     setTab(id);
  //   });
  // };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Us</h2>
          <p className="text-base lg:text-lg">
            We are a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. We are a quick learner and We are always
            looking to expand my knowledge and skill set. We are a team player and
            We are excited to work with others to create amazing applications.
            Continuously seeking to broaden my knowledge, I am a quick learner, always staying abreast of the latest technologies and trends in the industry.  I possess the versatility to tackle diverse challenges in web development. My passion lies in creating interactive and responsive
 applications that captivate users and deliver unparalleled experiences. 
          </p>
        </div>
       </div>
       <Image src="/images/projects/1.png" />
    </section>
 
  );
};

export default AboutSection;
