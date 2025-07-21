"use client";
import { useRef } from "react";
import { Hero } from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
export default function Home() {
  const aboutRef = useRef<HTMLDivElement>(null);

  const scrollToAbout = () => {
    aboutRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="">
      <Hero onScrollClick={scrollToAbout} />
      <div ref={aboutRef}>
        <AboutMe />
      </div>
    </div>
  );
}
