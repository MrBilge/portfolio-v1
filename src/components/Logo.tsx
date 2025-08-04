import Image from "next/image";
export default function Logo() {
  return (
    <div className="flex space-x-5">
      <Image alt="logo" width={20} height={24} src="/assets/html-logo.png" />

      <div className="flex  justify-center items-center">
        <h1 className=" font-serif"> Front End - Mobile Dev </h1>
      </div>
    </div>
  );
}
