"use client";
import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { X, Menu } from "lucide-react";
import HamburgerButton from "./HamburgerButton";
import { motion, AnimatePresence } from "framer-motion";

export default function Topbar({ onScrollClick, refs }: any) {
  const menuItem = [
    {
      name: "About",
      ref: refs.aboutRef,
    },
    {
      name: "My Skills",
      ref: refs.mySkillsRef,
    },
    {
      name: "Portfolio",
      ref: refs.portfolioRef,
    },

    {
      name: "Contact",
      ref: refs.contactRef,
    },
  ];
  return (
    <div className="sticky top-0  z-50 flex justify-between second-bg  px-10">
      <Logo />

      <div className="hidden lg:flex justify-between gap-10 items-center  font-serif">
        {menuItem.map((item, index) => (
          <p
            onClick={() => onScrollClick(item.ref)}
            className="cursor-pointer"
            key={index}
          >
            {item.name}
          </p>
        ))}
      </div>

      <MobileFullMenu onScrollClick={onScrollClick} refs={refs} />
    </div>
  );
}

function MobileFullMenu({ onScrollClick, refs }: any) {
  const [isOpen, setIsOpen] = useState(false);

  const menuItem = [
    { name: "About", ref: refs.aboutRef },
    { name: "My Skills", ref: refs.mySkillsRef },
    { name: "Portfolio", ref: refs.portfolioRef },
    { name: "Contact", ref: refs.contactRef },
  ];

  return (
    <>
      <button
        className="lg:hidden z-50 fixed top-3 right-5 text-white cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={32} /> : <Menu size={32} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="lg:hidden fixed inset-0 second-bg text-white flex flex-col items-center justify-center gap-12 z-40"
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.4 }}
          >
            {menuItem.map((item, i) => (
              <p
                key={i}
                onClick={() => {
                  setIsOpen(false);
                  setTimeout(() => {
                    onScrollClick(item.ref);
                  }, 300);
                }}
                className="text-3xl font-serif tracking-wider cursor-pointer hover:text-gray-400 transition"
              >
                {item.name}
              </p>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
