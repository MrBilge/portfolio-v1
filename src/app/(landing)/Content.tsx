"use client";

import { useRef } from "react";
import Contact from "@/components/Contact";
import { Hero } from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import MySkills from "@/components/MySkills";
import MyPortfolio from "@/components/MyPortfolio";
import Footer from "@/components/Footer";
import Topbar from "@/components/Topbar";

export default function Content() {
  const aboutRef = useRef<HTMLDivElement>(null);
  const portfolioRef = useRef<HTMLDivElement>(null);
  const mySkillsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);

  const scroll = (ref: React.RefObject<HTMLDivElement | null>) => {
    ref.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <Topbar
        refs={{
          aboutRef,
          portfolioRef,
          mySkillsRef,
          contactRef,
        }}
        onScrollClick={scroll}
      />

      <Hero onScrollClick={() => scroll(aboutRef)} />

      <div ref={aboutRef}>
        <AboutMe />
      </div>

      <div ref={mySkillsRef}>
        <MySkills />
      </div>

      <div ref={portfolioRef}>
        <MyPortfolio />
      </div>

      <div ref={contactRef}>
        <Contact />
      </div>

      <Footer />
    </>
  );
}
