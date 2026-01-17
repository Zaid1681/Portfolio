"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { TbMenu2, TbX } from "react-icons/tb";
import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";

const navLinks = [
  { name: "About", href: "/" },
  { name: "Experiences", href: "/experience" },
  { name: "Skills", href: "/skills" },
  { name: "Education", href: "/education" },
  { name: "Projects", href: "/projects" },
  { name: "Achievement", href: "/achievements" },
  { name: "Contact", href: "/contact" },
  // { name: "Courses", href: "/contact" },
  // { name: "Courses", href: "/certification" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-slate-950/80 backdrop-blur-md border-white/5 shadow-sm"
          : "bg-transparent border-transparent"
      )}
    >
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
        >
          Zaid<span className="text-white"> Khan</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium relative transition-colors",
                  isActive
                    ? "text-primary"
                    : "text-slate-300 hover:text-primary"
                )}
              >
                {link.name}
                {isActive && (
                  <motion.span
                    layoutId="active-nav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-secondary"
                  />
                )}
              </Link>
            );
          })}

          {/* {portfolioData.blogUrl && (
            <a
              href={portfolioData.blogUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-slate-300 hover:text-primary"
            >
              Blog
            </a>
          )} */}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-300"
          onClick={() => setIsMobileMenuOpen((p) => !p)}
        >
          {isMobileMenuOpen ? <TbX size={24} /> : <TbMenu2 size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-slate-950/95 backdrop-blur-lg border-t border-white/5"
        >
          <nav className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={cn(
                    "text-lg font-medium",
                    isActive
                      ? "text-primary"
                      : "text-slate-300 hover:text-primary"
                  )}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </motion.div>
      )}
    </header>
  );
}
