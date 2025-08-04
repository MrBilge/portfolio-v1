import { ChevronDownIcon, ArrowRightIcon } from "@heroicons/react/24/solid";
import { Facebook, Instagram, Github, Youtube, Linkedin } from "lucide-react";

type HeroProps = {
  onScrollClick: () => void;
};

export function Hero({ onScrollClick }: HeroProps) {
  return (
    <div className="flex h-screen w-full justify-between bg-[url('/assets/bilge.png')] bg-no-repeat px-20 xl:py-10  bg-center ">
      <div className="flex flex-col gap-10 w-1/2 mt-20 space-y-5">
        <div className="bg-white w-32 h-1"></div>
        <div className="space-y-10">
          <h1 className="text-4xl  3xl:text-2xl  text-amber-100 font-mono tracking-wider ">
            I`m Bilgehan,
            <span className="block mt-5 tracking-wider">
              a Web - Mobile Developer
            </span>
          </h1>
          <p className="text-sm xl:text-lg  font-serif text-gray-400 tracking-widest">
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
          className="w-max p-6 xl:p-10 bg-blue-600 cursor-pointer transition-all duration-300 hover:scale-75"
        >
          <ChevronDownIcon className="h-9 xl:w-9 animate-bounce-large" />
        </div>
      </div>

      <div className="text-xs flex flex-col md:space-y-10 xl:space-y-5 2xl:space-y-10 md:w-1/3  lg:w-1/3 mt-20">
        <div className="space-y-2">
          <h1 className="text-lg xl:text-2xl text-amber-100">About Me</h1>
          <p className="text-sm xl:text-lg  text-gray-400 font-serif tracking-wider">
            I’m a developer who enjoys problem-solving and creating innovative
            solutions. I write code to make technology more accessible and
            closer to people.
          </p>
          <div className="group flex w-max mt-5 ">
            <p className="text-sm  xl:text-lg cursor-pointer border-b border-gray-500 transition-all duration-600  group-hover:border-white ">
              LEARN MORE
            </p>
            <span>
              <ArrowRightIcon className="inline w-6 h-6 ml-2 transition-all duration-300 group-hover:ml-5 " />
            </span>
          </div>
        </div>
        <div className="flex flex-col space-y-2">
          <h1 className="text-lg xl:text-2xl text-amber-100">My Work</h1>
          <p className="text-sm xl:text-lg  text-gray-400 font-serif tracking-wider">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga ipsa
            eveniet harum, mollitia velit provident iste officiis eum. Voluptas
            totam aspernatur dicta nihil, libero nam velit pariatur harum porro
            culpa.
          </p>
          <div className="group flex w-max  mt-5 space-x-2">
            <p className="text-sm xl:text-lg cursor-pointer border-b border-gray-500 transition-all duration-700 group-hover:border-white">
              BROWSE PORTFOLIO
            </p>
            <span>
              <ArrowRightIcon className="inline w-6 h-6 ml-2 transition-all duration-300 group-hover:ml-5" />
            </span>
          </div>
        </div>
        <div className="space-y-2">
          <h1 className="text-lg xl:text-2xl text-amber-100">Follow Me</h1>
          <div className="flex w-max space-x-3 group text-md">
            <Facebook className="w-6 h-6 transition-all duration-300 group-hover:opacity-40 hover:opacity-100 hover:scale-110 hover:translate-y2 cursor-pointer" />
            <Instagram className="w-6 h-6 transition-all duration-300 group-hover:opacity-40 hover:opacity-100 hover:scale-110 hover:translate-y2 cursor-pointer" />
            <Github className="w-6 h-6 transition-all duration-300 group-hover:opacity-40 hover:opacity-100 hover:scale-110 hover:translate-y2 cursor-pointer" />
            <Youtube className="w-6 h-6 transition-all duration-300 group-hover:opacity-40 hover:opacity-100 hover:scale-110 hover:translate-y2 cursor-pointer" />
            <Linkedin className="w-6 h-6 transition-all duration-300 group-hover:opacity-40 hover:opacity-100 hover:scale-110 hover:translate-y2 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}
