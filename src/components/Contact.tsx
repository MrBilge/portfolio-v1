import { ArrowRightIcon } from "lucide-react";
import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <div className="w-full h-dvh flex justify-center items-center p-10">
      <div className="flex gap-5 w-full">
        <div className="w-1/2">
          <div className="border-t-4 border-t-white p-4 w-24 lg:w-48"></div>
          <div>
            <h1 className="text-3xl lg:text-5xl 2xl:text-5xl tracking-widest  ">
              Interested in working together ? Let’s talk
              <ArrowRightIcon className="w-20 h-20 text-blue-700 inline ml-3" />
            </h1>
          </div>
        </div>
        <div className="w-1/2">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
