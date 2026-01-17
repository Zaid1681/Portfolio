"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";
import { TbArrowRight, TbDownload } from "react-icons/tb";
import Link from "next/link";
import { SocialIcons } from "@/components/ui/SocialIcons";

export const HeroSection = React.memo(function HeroSection() {
  // const handleScrollToProjects = (e: React.MouseEvent<HTMLAnchorElement>) => {
  //   e.preventDefault();
  //   const element = document.getElementById("projects");
  //   if (element) {
  //     element.scrollIntoView({ behavior: "smooth" });
  //     window.history.replaceState(null, "", window.location.pathname);
  //   }
  // };

  /* ---------------- Typing Animation ---------------- */
  const roles = ["Software Developer", "Curious Programmer", "Lifelong Learner"];

  const [roleIndex, setRoleIndex] = React.useState(0);
  const [displayText, setDisplayText] = React.useState("");
  const [charIndex, setCharIndex] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);

  React.useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < currentRole.length) {
        setDisplayText(currentRole.slice(0, charIndex + 1));
        setCharIndex(charIndex + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(currentRole.slice(0, charIndex - 1));
        setCharIndex(charIndex - 1);
      } else if (!isDeleting && charIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 1200);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);
  /* -------------------------------------------------- */

  return (
    <section
      id="about"
      className="relative flex min-h-[85vh] items-center justify-center pt-16 pb-20"
    >
      {/* Background Gradients */}
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl -z-10 opacity-60" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-secondary/20 rounded-full blur-3xl -z-10 opacity-60" />

      <div className="container mx-auto px-4 xl:px-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-primary font-medium mb-1tracking-wide">
            Hi, I&apos;m
          </p>

          <h1 className="text-5xl md:text-7xl font-bold text-slate-100 mb-3">
            {portfolioData.name}
          </h1>

          {/* Typing Role */}
         <h2 className="text-2xl md:text-2xl font-semibold text-slate-100 mb-6 tracking-wide">
            {displayText}
            <span className="ml-1 inline-block w-[2px] h-[1.2em] bg-indigo-400 animate-blink align-middle" />
          </h2>


          <p className="text-lg text-slate-400  leading-relaxed">
            {portfolioData.about}
            
          </p>
          <p className="text-lg text-slate-400 mb-5 leading-relaxed">
           Welcome to my digital portfolio!
          </p>

          {/* Social Icons */}
          <div className="flex justify-center mb-5">
            <SocialIcons variant="default" />
          </div>

          {/* CTA Buttons */}
          {/* <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/projects"
              // onClick={handleScrollToProjects}
              className="px-8 py-3 border-2 border-primary text-primary font-bold rounded-full hover:bg-primary/10 transition-all flex items-center gap-2"
            >
              Projects <TbArrowRight size={20} />
            </Link>
             */}

            {/* <Link
              href="https://flowcv.com/resume/j75hjc01cc"
              target="_blank"
              className="px-8 py-3 border-2 border-slate-700 text-slate-300 font-bold rounded-full hover:bg-slate-800 transition-all flex items-center gap-2"
            >
              Resume <TbDownload size={20} />
            </Link> */}
          {/* </div> */}
        </motion.div>
      </div>
    </section>
  );
});

/*

// {/* Right Image */
//           <motion.div
//             initial={{ opacity: 0, scale: 0.9 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="flex-1 flex justify-center lg:justify-end"
//           >
//             <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 group perspective-1000">
//               {/* Deep Glow Background */}
//               <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 to-secondary/40 rounded-[2rem] rotate-6 scale-105 blur-2xl opacity-40 group-hover:opacity-60 transition-all duration-500" />

//               {/* Second Layer (Rotated Card) */}
//               <div className="absolute inset-0 bg-slate-800/80 backdrop-blur-sm rounded-[2rem] rotate-3 border border-white/10 group-hover:rotate-6 transition-transform duration-500" />

//               {/* Main Image Container with Gradient Border */}
//               <div className="relative w-full h-full rounded-[2rem] p-[2px] bg-gradient-to-br from-primary to-secondary -rotate-3 group-hover:rotate-0 transition-transform duration-500 shadow-2xl">
//                 <div className="w-full h-full rounded-[calc(2rem-2px)] overflow-hidden bg-slate-900 relative">
//                   {/* Use a placeholder if image fails or is missing */}
//                   <div className="w-full h-full flex items-center justify-center text-slate-500 bg-slate-800 relative">
//                     <Image
//                       src={portfolioData.profileImage}
//                       alt={portfolioData.name}
//                       fill
//                       sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
//                       className="object-cover transition-transform duration-700 group-hover:scale-110"
//                       priority
//                       onError={(e) => {
//                         const target = e.target as HTMLImageElement;
//                         target.style.display = "none";
//                       }}
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </motion.div>

// */