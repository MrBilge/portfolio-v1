import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { Facebook, Instagram, Github, Youtube, Linkedin } from "lucide-react";

import Avatar from "./Avatar";

export default function Footer() {
  return (
    <div className="w-full h-max flex justify-center md:items-center second-bg md:px-0 lg:px-10 border-t border-gray-600">
      <div className="w-full p-10 gap-15 md:gap-20 lg:gap-0 flex flex-col-reverse   md:flex-row justify-center lg:justify-between     ">
        <div className="lg:w-1/3 flex justify-center items-end   space-x-5 ">
          <div>
            <Avatar />
          </div>

          <div className=" flex  flex-col justify-center">
            <div className="space-y-2 ">
              <h1 className="lg:text-2xl font-serif tracking-widest">
                A. Bilgehan Eybek
              </h1>
              <h2 className="lg:text-lg text-gray-600 font-semibold">
                Software dev. at M.E.B
              </h2>
              <div className="flex mt-2 w-max space-x-3 group">
                <Facebook className="w-6 h-6 transition-all duration-300 group-hover:opacity-40 hover:opacity-100 hover:scale-110 hover:translate-y-1 cursor-pointer" />
                <Instagram className="w-6 h-6 transition-all duration-300 group-hover:opacity-40 hover:opacity-100 hover:scale-110 hover:translate-y-1 cursor-pointer" />
                <Github className="w-6 h-6 transition-all duration-300 group-hover:opacity-40 hover:opacity-100 hover:scale-110 hover:translate-y-1 cursor-pointer" />
                <Youtube className="w-6 h-6 transition-all duration-300 group-hover:opacity-40 hover:opacity-100 hover:scale-110 hover:translate-y-1 cursor-pointer" />
                <Linkedin className="w-6 h-6 transition-all duration-300 group-hover:opacity-40 hover:opacity-100 hover:scale-110 hover:translate-y-1 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        <div className="md:w-2/3 lg:w-full flex items-center flex-col   space-y-10">
          <h1 className="group md:text-2xl lg:text-4xl font-serif w-max cursor-pointer">
            Get in touch
            <ArrowRightIcon className="inline w-10 h-10 text-blue-600 ml-2 transition-all duration-300 group-hover:ml-5" />
          </h1>

          <div className="flex gap-10 ">
            <div className="w-full space-y-2  font-semibold">
              <p className="text-gray-500">EMAIL ME:</p>
              <div className="group w-max flex items-center">
                <p className=" border-b border-gray-500 transition-all duration-300 hover:border-white w-max py-1 ">
                  contact@bilgehan.com
                </p>
                <span>
                  <ArrowRightIcon className=" w-6 h-6 ml-2 transition-all duration-300 group-hover:ml-4" />
                </span>
              </div>
            </div>
            <div className="w-full space-y-2 font-semibold">
              <p className="text-gray-500">CALL ME:</p>
              <div className="group w-max flex items-center">
                <p className="border-b border-gray-500 transition-all duration-300 hover:border-white w-max py-1 text-gray-300">
                  0546 881 00 94
                </p>
                <span>
                  <ArrowRightIcon className=" w-6 h-6 ml-2 transition-all duration-300 group-hover:ml-4" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
