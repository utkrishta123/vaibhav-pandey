"use client";
import React from "react";
import { FloatingNav } from "./ui/floating-navbar";
import { IconHome, IconMail, IconMessage, IconProgress, IconUser } from "@tabler/icons-react";
import FeaturedProjects from "./FeaturedProjects";
export default function Navbar() {
  const navItems = [
    {
      name: "Home",
      link: "/#hero-section",
      icon: <IconHome className="h-4 w-4 text-black dark:text-white" />,
    },
    {
      name: "Resume",
      link: "https://drive.google.com/file/d/1QiP7YL4OPXG2zxvcRWfta-9OMcwGhks7/view?usp=sharing",
      icon: <IconUser className="h-4 w-4 text-black dark:text-white" />,
    },
    {
      name: "Projects",
      link: "/#projects-section",
      icon: (
        <IconProgress className="h-4 w-4 text-black dark:text-white" />
      ),
    },
    {
      name: "Get in touch",
      link: "/#contact-section",
      icon: (
        <IconMail className="h-4 w-4 text-black dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative  w-full dark:bg-slate-800">
      <FloatingNav navItems={navItems} />
    </div>
  );
}
