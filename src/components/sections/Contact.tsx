"use client";

import React, { useState, useCallback } from "react";
import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";

import {
  TbBrandGithub,
  TbBrandLinkedin,
  TbBrandInstagram,
  TbMail,
} from "react-icons/tb";
import { SiLeetcode } from "react-icons/si";

export const ContactSection = React.memo(function ContactSection() {
  const [formState, setFormState] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("loading");
  }, []);

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center"
    >
      <div className="container mx-auto px-4">

        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6 text-center md:text-left"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-100 mb-4">
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>

            <p className="text-slate-400 leading-relaxed">
              Hey there, in the world of coding and development, there's a vast
              universe waiting to be explored. I'm thrilled that you've landed
              here to dive into my coding adventures. I believe in developing
              applications that solve real-world problems and I invite you to
              connect with me via my links.
              <br />
              <span className="text-primary font-semibold">
                Thank you for visiting my portfolio :)
              </span>
            </p>
          </motion.div>

          {/* RIGHT LINKS CARD */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-slate-800/30 p-4 rounded-2xl border border-slate-800 mx-auto md:ml-auto w-full max-w-md"
          >
            <div className="space-y-4">

              {/* Email */}
              <a
                href={portfolioData.social.find(s => s.platform === "Email")?.url}
                className="flex items-center gap-4 p-2 bg-slate-800/30 rounded-xl border border-slate-800 text-slate-300 hover:text-primary transition-colors"
              >
                <div className="bg-primary/10 p-2 rounded-full text-primary">
                  <TbMail size={22} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Email</p>
                  <p className="font-medium">
                    {portfolioData.social
                      .find(s => s.platform === "Email")
                      ?.url.replace("mailto:", "")}
                  </p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href={portfolioData.social.find(s => s.platform === "LinkedIn")?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-2 bg-slate-800/30 rounded-xl border border-slate-800 text-slate-300 hover:text-primary transition-colors"
              >
                <div className="bg-primary/10 p-2 rounded-full text-primary">
                  <TbBrandLinkedin size={22} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">LinkedIn</p>
                  <p className="font-medium">View Profile</p>
                </div>
              </a>

              {/* Instagram */}
              <a
                href={portfolioData.social.find(s => s.platform === "Instagram")?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-2 bg-slate-800/30 rounded-xl border border-slate-800 text-slate-300 hover:text-primary transition-colors"
              >
                <div className="bg-primary/10 p-2 rounded-full text-primary">
                  <TbBrandInstagram size={22} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">Instagram</p>
                  <p className="font-medium">Follow Me</p>
                </div>
              </a>

              {/* LeetCode */}
              <a
                href={portfolioData.social.find(s => s.platform === "Leetcode")?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-2 bg-slate-800/30 rounded-xl border border-slate-800 text-slate-300 hover:text-primary transition-colors"
              >
                <div className="bg-primary/10 p-2 rounded-full text-primary">
                  <SiLeetcode size={22} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">LeetCode</p>
                  <p className="font-medium">View Coding Profile</p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href={portfolioData.social.find(s => s.platform === "GitHub")?.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-2 bg-slate-800/30 rounded-xl border border-slate-800 text-slate-300 hover:text-primary transition-colors"
              >
                <div className="bg-primary/10 p-2 rounded-full text-primary">
                  <TbBrandGithub size={22} />
                </div>
                <div>
                  <p className="text-sm text-slate-500">GitHub</p>
                  <p className="font-medium">View Repositories</p>
                </div>
              </a>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
});
