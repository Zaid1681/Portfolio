"use client";

import React from "react";

import { portfolioData, type Skill } from "@/data/portfolio"; // <-- add type import
import { SectionHeading } from "@/components/ui/SectionHeading";
import { motion } from "framer-motion";
import { skillIcons } from "@/app/skills/skillIcons";
import { CertificationCard } from '@/components/ui/CertificationCard';

import {
  Terminal,
} from "lucide-react";
const AchievementCategory = React.memo(function AchievementCategory({
  title,
  skills,
}: {
  title: string;
  skills: Skill[];
})
 {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-slate-800/30 p-6 rounded-2xl border border-slate-800 hover:border-primary/50 transition-colors"
    >
      <h3 className="text-xl flex font-semibold text-slate-200 mb-4 border-b  border-slate-800 pb-2">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
  <span
  key={index}
  className="flex flex-col items-start gap-1 px-5 py-3 bg-slate-800 text-slate-300 text-sm rounded hover:bg-primary/20 hover:text-primary transition-colors cursor-default"
>
  {/* Icon + Skill Name */}
  <div className="flex items-center gap-2 mb-2">
    {skillIcons[skill.name] && <span className="text-primary">{skillIcons[skill.name]}</span>}
    <span className="font-medium">{skill.name}</span>
  </div>

  {/* Proficiency below */}
  <span className="text-xs border rounded px-2 text-slate-200/35 italic">{skill.proficiency}</span>
</span>

))}
      </div>
    </motion.div>
  );
});


export const CertificationSection = React.memo(function TechStack() {
  return (
    <div className="h-full">
      <SectionHeading
        title="Courses & Certifications"
        subtitle="Courses & Certifications I've Significantly completed"
        center={false}
      />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {portfolioData.courses.map((achivement, index) => (
                  <CertificationCard key={index} achivement={achivement} index={index} />
                ))}
        </div>
    </div>
  );
});
