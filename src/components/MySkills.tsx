"use client";
import { useRef } from "react";
import { ArrowRightIcon, ArrowLeftIcon } from "lucide-react";
import Image from "next/image";

export default function MySkills() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const MySkills = [
    {
      icon: (
        <Image width={20} height={20} src="/assets/html5.png" alt="html5" />
      ),
      name: "HTML & CSS",
      description: "Duis aute irure dolor in reprehenderit in voluptate.",
    },
    {
      icon: (
        <Image
          width={20}
          height={20}
          src="/assets/js.png"
          alt="html5"
          className="w-20 h-20"
        />
      ),
      name: "Javascript",
      description: "Duis aute irure dolor in reprehenderit in voluptate.",
    },
    {
      icon: (
        <Image width={20} height={20} src="/assets/react.png" alt="html5" />
      ),
      name: "React",
      description: "Duis aute irure dolor in reprehenderit in voluptate.",
    },
    {
      icon: (
        <Image width={20} height={20} src="/assets/nextjs.png" alt="html5" />
      ),
      name: "Next Js",
      description: "Duis aute irure dolor in reprehenderit in voluptate.",
    },

    {
      icon: (
        <Image width={20} height={20} src="/assets/tailwind.png" alt="html5" />
      ),
      name: "Tailwind CSS",
      description: "Duis aute irure dolor in reprehenderit in voluptate.",
    },
    {
      icon: <Image width={20} height={20} src="/assets/expo.png" alt="html5" />,
      name: "React Native Expo",
      description: "Duis aute irure dolor in reprehenderit in voluptate.",
    },

    {
      icon: (
        <Image width={20} height={20} src="/assets/figma.png" alt="html5" />
      ),
      name: "Figma",
      description: "Duis aute irure dolor in reprehenderit in voluptate.",
    },
    {
      icon: (
        <Image width={20} height={20} src="/assets/react.png" alt="html5" />
      ),
      name: "React",
      description: "Duis aute irure dolor in reprehenderit in voluptate.",
    },
    {
      icon: (
        <Image width={20} height={20} src="/assets/nextjs.png" alt="html5" />
      ),
      name: "Next Js",
      description: "Duis aute irure dolor in reprehenderit in voluptate.",
    },

    {
      icon: (
        <Image width={20} height={20} src="/assets/tailwind.png" alt="html5" />
      ),
      name: "Tailwind CSS",
      description: "Duis aute irure dolor in reprehenderit in voluptate.",
    },
  ];

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 250;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex h-screen w-full  justify-center items-center px-20 ">
      <div className="flex flex-col space-y-5 w-full">
        <h3 className="text-2xl text-amber-50">
          <span className="text-4xl text-blue-600">{`//`}</span> My Skills
        </h3>

        <div className="flex justify-between w-1/2 ">
          <h1 className="text-4xl font-semibold flex justify-center items-center">
            My extensive list of skills
          </h1>

          <div className="flex h-max gap-2 ">
            <button
              onClick={() => handleScroll("left")}
              className="rounded-3xl p-5 bg-gray-800 hover:bg-cyan-600 transition-all duration-300 hover:scale-75 cursor-pointer"
            >
              <ArrowLeftIcon className="w-6 h-6" />
            </button>
            <button
              onClick={() => handleScroll("right")}
              className="rounded-3xl p-5 bg-gray-800  hover:bg-cyan-600  transition-all duration-300 hover:scale-75 cursor-pointer"
            >
              <ArrowRightIcon className="w-6 h-6" />
            </button>
          </div>
        </div>

        <div
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          ref={scrollRef}
          className="flex  overflow-x-auto  gap-5 mt-10 w-full "
        >
          {MySkills.map((item, index) => (
            <div
              className="shrink-0 w-[250px]  space-y-5 py-20 px-5 bg-gray-800 rounded-2xl"
              key={index}
            >
              {item.icon}
              <p className="text-2xl font-semibold">{item.name}</p>
              <p className="font-playfair">{item.description}</p>

              <div className="border-b border-2 w-20 "> </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
