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
 We possess the versatility to tackle diverse challenges in web development. Our passion lies in creating interactive and responsive 
applications that captivate users and deliver unparalleled experiences. 
        </p>
      </div>
      <Image src="/images/service.png" width={12000} height={12000} />   
       </div>
       <Image src="/images/projects/1.png" width={10000} height={10000} />     
    <br /><br />
    <Image src="/images/projects/4.png" width={10000} height={1000} />     
     
  </section>
  );
};

export default AchievementsSection;
