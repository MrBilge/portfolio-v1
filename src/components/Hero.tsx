import { ChevronDownIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { Facebook, Instagram, Github, Youtube, Linkedin } from "lucide-react";

export function Hero({ onScrollClick }: any) {
  return (
    <div className="flex h-screen w-full justify-between bg-[url('/assets/bilge.png')] bg-no-repeat px-20 py-10  bg-center ">
      <div className="flex flex-col gap-10 w-1/2 mt-20 space-y-5">
        <div className="bg-white w-32 h-1"></div>
        <div className="space-y-10">
          <h1 className="text-6xl  text-amber-50 font-mono tracking-wider ">
            I`m Bilgehan, <span className="block mt-5">a Web Developer</span>
          </h1>
          <p className="text-md  font-mono text-gray-300 tracking-widest">
            I build modern, fast, and user-friendly web experiences using
            Next.js,
            <span className="block mt-2">
              React, and Tailwind CSS. I care deeply about clean code and
              elegant design.
            </span>
          </p>
        </div>

        <div
          style={{ borderRadius: "50%" }}
          onClick={onScrollClick}
          className="bg-blue-600  p-10  w-max cursor-pointer transition-all duration-300 hover:scale-75 animate-bounce"
        >
          <ChevronDownIcon className="h-9 w-9 animate-bounce" />
        </div>
      </div>

      <div className="text-xs flex flex-col space-y-20 w-1/3 mt-20 ">
        <div className="space-y-2">
          <h1 className="text-2xl text-amber-50">About Me</h1>
          <p className="text-lg  text-gray-400 font-mono tracking-wide ">
            I’m a developer who enjoys problem-solving and creating innovative
            solutions. I write code to make technology more accessible and
            closer to people.
          </p>
          <div className="flex space-x-2 mt-2 border-b w-max p-2">
            <p>Learn More </p>
            <ArrowRightIcon className="w-4 h-4" />
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <h1 className="text-2xl text-amber-50">My Work</h1>
          <p className="text-lg  text-gray-400 font-mono  ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga ipsa
            eveniet harum, mollitia velit provident iste officiis eum. Voluptas
            totam aspernatur dicta nihil, libero nam velit pariatur harum porro
            culpa.
          </p>
          <div className="flex space-x-2 mt-2 border-b w-max p-2">
            <p>Browse Portfolio </p>
            <ArrowRightIcon className="w-4 h-4" />
          </div>
        </div>
        <div className="text-lg">
          <h1 className="text-2xl text-amber-50">Follow Me</h1>
          <div className="flex space-x-3 mt-2 group">
            <Facebook className="w-6 h-6 transition-all duration-300 group-hover:opacity-40 hover:opacity-100 hover:scale-110 hover:mt-2" />
            <Instagram className="w-6 h-6 transition-all duration-300 group-hover:opacity-40 hover:opacity-100 hover:scale-110 hover:mt-2" />
            <Github className="w-6 h-6 transition-all duration-300 group-hover:opacity-40 hover:opacity-100 hover:scale-110 hover:mt-2" />
            <Youtube className="w-6 h-6 transition-all duration-300 group-hover:opacity-40 hover:opacity-100 hover:scale-110 hover:mt-2" />
            <Linkedin className="w-6 h-6 transition-all duration-300 group-hover:opacity-40 hover:opacity-100 hover:scale-110 hover:mt-2" />
          </div>
        </div>
      </div>
    </div>
  );
}
