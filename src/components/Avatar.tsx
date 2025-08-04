import Image from "next/image";

export default function Avatar() {
  return (
    <div className="relative w-24 h-25 lg:w-40 lg:h-40 rounded-full overflow-hidden bg-gray-600">
      <Image
        fill
        src="/assets/bilge.png"
        alt="myprofile"
        className="object-cover"
      />
    </div>
  );
}
