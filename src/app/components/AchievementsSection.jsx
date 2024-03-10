"use client";
import React from "react";
import dynamic from "next/dynamic";
import Image from "next/image";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const AchievementsSection = () => {
  return (
    <section className="text-white" id="about">
    <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">   
      <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
        <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
        <p className="text-base lg:text-lg">
          We are a full stack web developer with a passion for creating
          interactive and responsive web applications. I have experience
          working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
          Sequelize, HTML, CSS, and Git. We are a quick learner and We are always
          looking to expand my knowledge and skill set. We are a team player and
          We are excited to work with others to create amazing applications.
With a comprehensive skill set encompassing JavaScript, React, Redux, Node.js, Express, PostgreSQL, Sequelize, HTML, CSS, and Git, I possess the versatility to tackle diverse challenges in web development. My passion lies in creating interactive and responsive 
applications that captivate users and deliver unparalleled experiences. 
        </p>
      </div>
      <Image src="/images/service.png" width={500} height={500} />   
      <Image src="/images/service.png" width={500} height={500} />     
     </div>
     <div src="/images/video.mp4"></div>
  </section>
  );
};

export default AchievementsSection;
