"use client";

import React from "react";

import { Achievement, Project } from "@/data/portfolio";
import { motion } from "framer-motion";
import { TbBrandGithub, TbExternalLink } from "react-icons/tb";
import Link from "next/link";
import Image from "next/image";
import {
 Trophy
  // import other icons from lucide-react as needed
} from "lucide-react";
export const CertificationCard = React.memo(function CertificationCard({
  achivement,
  index,
}: {
  achivement: Achievement;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-slate-800/30 rounded-2xl overflow-hidden border border-slate-800 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-2 flex flex-col"
    >
      {/* Image Container */}
      <div className="relative aspect-video w-full overflow-hidden flex-shrink-0">
        <Image
          src={achivement.thumbnail}
          alt={achivement.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
       <h3 className="flex items-center gap-2 text-xl font-bold text-slate-100 mb-2 group-hover:text-primary transition-colors">
      {achivement.title}
      </h3>

        <p className="text-slate-400 text-sm mb-4 line-clamp-6">
          {achivement.description}
        </p>
       <p className="items-center gap-2 text-slate-400 mb-3 text-sm line-clamp-5">
            <span >
              Issued By:
            </span>
            <span className="bg-white/10 px-2 py-1 text-primary rounded-md ">{achivement.awardedBy}</span>
        </p>
         <p className=" items-center gap-2 text-slate-400 text-sm line-clamp-6">
            <span >
                Date : 
              </span>
              <span className="bg-white/10 px-2 py-1 text-primary rounded-md ">
              {achivement.date}
              </span>
            {/* <span>{achivement.awardedAt}</span> */}
        </p>
        
      </div>
    </motion.div>
  );
});
