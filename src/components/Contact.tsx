import { ArrowRightIcon, ArrowDownIcon } from "lucide-react";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <div className="w-full h-dvh flex justify-center items-center p-5">
      <div className="w-full space-y-20 lg:flex gap-5 ">
        <div className="lg:w-1/2">
          <div className="hidden lg:block border-t-4 gap-10 border-t-white p-4 w-24 lg:w-48"></div>
          <div className="h-full w-full space-y-10 ">
            <h1 className="w-full lg:text-3xl xl:text-5xl tracking-widest text-center lg:text-start ">
              Interested in working together ? Let’s talk
              <ArrowRightIcon className="hidden lg:inline  w-20 h-20 text-blue-700  ml-3" />
              <ArrowDownIcon className=" inline lg:hidden w-10 h-10 text-blue-700  ml-3" />
            </h1>
          </div>
        </div>
        <div className="lg:w-1/3">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
