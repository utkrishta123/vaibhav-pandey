"use client";
import { MaskContainer } from "./ui/svg-mask-effect";
import { HoverEffect } from "./ui/card-hover-effect";
export const projects = [
  {
    title: "Portfolio Website",
    description: "A Portfolio website created using NextJs with Aceternity UI.",
    link: "https://github.com/utkrishta24/Utkrishta-Portfolio",
  },
  {
    title: "U&I Dark",
    description:
      "Custom Visual Studio Code theme designed for a modern and sleek coding experience.",
    link: "https://marketplace.visualstudio.com/items?itemName=UtkrishtaSinha.u-i-dark",
  },
  {
    title: "TEDxKIET Official Website",
    description:
      "The official website of TEDxKIET, designed and developed as an individual contributor exhibiting the motto of ’ideas worth spreading.’",
    link: "https://tedxkiet.com/",
  },
];

export default function MoreProjects() {
  return (
    <div
      className="w-full items-center justify-center overflow-hidden p-12 bg-gray-950"
      id="projects-section"
    >
      <MaskContainer
        revealText={
          <h1 className="bg-gradient-to-br from-slate-300 to-slate-500 py-12 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
            Featured Projects
          </h1>
        }
        className="h-[20rem] border rounded-md"
      >
        <h1 className="bg-gradient-to-br from-slate-300 to-slate-500 py-12 bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
          Featured Projects
        </h1>
      </MaskContainer>
      <div className="max-w-5xl mx-auto px-8 flex flex-wrap ">
        <HoverEffect
          items={projects.map(project => ({
            ...project,
            linkProps: { target: "_blank", rel: "noopener noreferrer" }
          }))}
        />
      </div>
    </div>
  );
}
