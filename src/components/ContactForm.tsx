"use client";

import { useState, useEffect } from "react";
import { toast } from "sonner";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { AddContact } from "@/app/api/contact/route";
export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [describe, setDescribe] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Lütfen geçerli bir email adresi girin.");
      return;
    }

    const payload = {
      name: name,
      email: email,
      describe: describe,
    };

    try {
      const res = await AddContact(payload);

      toast("İletişim Sağlandı !", {
        description: "Bilgiler Gönderildi.",
        style: {
          backgroundColor: "#16a34a",
          color: "white",
          border: "1px solid #15803d",
          fontWeight: "600",
        },
      });

      setName("");
      setEmail("");
      setDescribe("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-10">
      <div className="transition-all duration-300 hover:border-white border-b border-gray-500">
        <input
          required
          type="text"
          className="w-full pb-10 placeholder:text-2xl placeholder:text-white outline-none text-2xl "
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
        />
      </div>
      <div className="transition-all duration-300 hover:border-white border-b border-gray-500">
        <input
          required
          type="e-mail"
          className="w-full pb-10 placeholder:text-2xl placeholder:text-white outline-none text-2xl "
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Your email address"
        />
      </div>
      <div className="transition-all duration-300 hover:border-white border-b border-gray-500">
        <textarea
          required
          className=" resize-none w-full pb-10 placeholder:text-2xl placeholder:text-white outline-none text-2xl "
          value={describe}
          onChange={(e) => setDescribe(e.target.value)}
          placeholder=" Describe your project"
        />
      </div>
      <div className="group flex space-x-2 p-2 transition-all duration-700 hover:border-b-white border-gray-600 w-max border-b-2 mt-5 ">
        <button
          type="submit"
          className="flex items-center text-2xl cursor-pointer"
        >
          Contact me
          <ArrowRightIcon className="w-8 transition-all duration-300 group-hover:ml-2 ml-1" />
        </button>
      </div>
    </form>
  );
}
