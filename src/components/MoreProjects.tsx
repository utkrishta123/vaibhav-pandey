"use client";
import { MaskContainer } from "./ui/svg-mask-effect";
import { HoverEffect } from "./ui/card-hover-effect";
export const projects = [
  {
    title: "SUPRA SAEINDIA 2022",
    description:
      "I contributed to vehicle fabrication by leading CAD modeling, structural simulations (ANSYS & RULA), material procurement, and precision fabrication. I optimized stability through iterative steering geometry and managed Impact Attenuator fabrication, testing, and reporting, enhancing my skills in CAD, composites, and project management.",
    link: "https://drive.google.com/drive/folders/1edDXfP3xRbRiEk55es4ZB4ponZ7ytwxX",
  },
  {
    title: "SAE NIS EFFI-CYCLE 2024",
    description:
      "I contributed to Effi-Cycle, a human-electric hybrid vehicle designed for efficiency, performance, and safety. The project emphasized aerodynamics, ergonomics, and sustainability, fostering innovation in eco-friendly mobility. I worked on Effi-Que, integrating ADAS features like collision avoidance, tire pressure monitoring, and blind spot detection. These features were evaluated through virtual and physical testing to enhance vehicle safety and future readiness.",
    link: "https://drive.google.com/drive/folders/1BQgndiVtKFu9bfmT8UCZKmCaW_cJil2I",
  },
  {
    title: "Ongoing Projects",
    description:
      "I am currently working on a few projects that I will be sharing soon.",
    link: "",
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
          items={projects.map((project) => ({
            ...project,
            linkProps: { target: "_blank", rel: "noopener noreferrer" },
          }))}
        />
      </div>
    </div>
  );
}
