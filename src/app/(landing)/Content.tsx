"use client";

import { useRef } from "react";
import Contact from "@/components/Contact";
import { Hero } from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import MySkills from "@/components/MySkills";
import MyPortfolio from "@/components/MyPortfolio";
import Footer from "@/components/Footer";

export default function Content() {
  const aboutRef = useRef<HTMLDivElement>(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <Hero onScrollClick={scrollToAbout} />

      <div ref={aboutRef}>
        <AboutMe />
      </div>

      <MySkills />

      <MyPortfolio />

      <Contact />

      <Footer />
    </>
  );
}
