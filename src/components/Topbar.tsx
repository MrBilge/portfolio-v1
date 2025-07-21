import Link from "next/link";
import Logo from "./Logo";

export default function Topbar() {
  return (
    <div className=" flex justify-between    mx-10 lg:mx-20 ">
      <Logo />

      <div className="hidden lg:flex justify-between gap-10 items-center  font-serif">
        <Link href="/">Home</Link>
        <Link href="/hakkimda">About</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/portfolio">Portfolio</Link>
        <p>Pages</p>
      </div>

      <MobileMenu />
    </div>
  );
}

const MobileMenu = () => {
  return (
    <div className="lg:hidden flex flex-col justify-center items-center space-y-1  h-full">
      <div className="w-8 h-0.5 bg-white"></div>
      <div className="w-8 h-0.5 bg-white"></div>
      <div className="w-8 h-0.5 bg-white"></div>
    </div>
  );
};
