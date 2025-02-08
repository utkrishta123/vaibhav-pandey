"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBehance,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMailBulk } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { BackgroundBeams } from "./ui/background-beams";

export default function Footer() {
  return (
    <section id="contact-section">
      <div className="h-[15rem] w-full rounded-md bg-gray-900 relative flex flex-col items-center justify-center antialiased pt-10">
        <BackgroundBeams className="absolute top-0 left-0 w-full h-full z-0" />
        <div className="w-full mx-auto p-4 z-10">
          <h1 className="bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-2xl font-medium tracking-tight text-transparent md:text-5xl">
            Connect with me
          </h1>
          <div className="items-center justify-center flex flex-wrap">
            <Link
              href={"https://www.linkedin.com/in/vaibhav-pandey-a671b3213"}
              target="_blank"
            >
              <FontAwesomeIcon className="p-7 text-3xl" icon={faLinkedin} />
            </Link>
            <Link href={"mailto:pandeyvaibhav8109@gmail.com"} target="_blank">
              <FontAwesomeIcon className="p-7 text-3xl" icon={faEnvelope} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
