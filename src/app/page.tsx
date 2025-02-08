"use client";
import React from "react";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { TracingBeam } from "@/components/ui/tracing-beam";
import HeroSection from "@/components/HeroSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import MoreProjects from "@/components/MoreProjects";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="w-full mx-auto dark:bg-black antialiased pt-1 relative">
      {/* <TracingBeam className="px-1"> */}
      <HeroSection />
      <FeaturedProjects />
      <MoreProjects />
      <Footer />
      {/* </TracingBeam> */}
    </div>
  );
}
