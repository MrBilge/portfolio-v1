import Image from "next/image";
import { PortfolioCardProps } from "@/app/types/portfoliaCards";
export default function PortfolioCard({
  title,
  description,
  primaryButton,
  secondaryButton,
  mainImage,
  mainView,
  subImage1,
  subImage2,
  mobileCard,
}: PortfolioCardProps) {
  return (
    <div className="group rounded-2xl  bg-gray-800 transition-all duration-500 hover:scale-105 overflow-hidden space-y-5 cursor-pointer">
      <div className="px-5 xl:px-10 py-5">
        <div className="flex justify-end gap-2">
          <button className="bg-gray-200 p-2 rounded-2xl text-xs text-gray-700  font-semibold">
            {primaryButton}
          </button>
          <button className="bg-gray-200 p-2 rounded-2xl text-xs text-gray-700 font-semibold">
            {secondaryButton}
          </button>
        </div>
        <div className="space-y-2">
          <p className="lg:text-xl xl:text-4xl font-semibold">{title} </p>
          <div>
            <p className=" lg: text-sm font-serif">{description}</p>
          </div>
        </div>
      </div>

      {mobileCard ? (
        <div className="flex flex-row  gap-4 px-4 pb-6 transition-all duration-300 group-hover:scale-105 skew-x-10">
          <div className="relative w-1/2 aspect-[3/2] overflow-hidden">
            <Image
              width={100}
              height={100}
              fill
              alt="portfoy"
              src={subImage1}
              className="w-full h-full rounded-xl bg-gray-200 object-cover"
            />
          </div>
          <div className="relative w-1/3 aspect-[3/2] overflow-hidden">
            <Image
              width={100}
              height={100}
              fill
              alt="portfoy"
              src={subImage2}
              className=" rounded-xl bg-gray-200 object-cover"
            />
          </div>
          <div className="w-1/3  overflow-hidden">
            <Image
              width={100}
              height={100}
              fill
              alt="portfoy"
              src={mainImage}
              className="w-full h-full rounded-xl bg-gray-200 object-cover"
            />
          </div>
        </div>
      ) : (
        <div className="flex flex-col md:flex-row justify-center transition-all duration-300 group-hover:scale-110">
          <div className="flex flex-row md:flex-col gap-2 skew-x-10 w-full md:w-1/2">
            <div className="relative w-2/3 md:w-full aspect-[3/2] overflow-hidden -ml-5">
              <Image
                width={100}
                height={100}
                fill
                alt="portfoy"
                src={subImage1}
                className=" rounded-xl bg-gray-200"
              />
            </div>
            <div className=" relative w-2/3 md:w-full aspect-[3/2] overflow-hidden -ml-5">
              <Image
                width={100}
                height={100}
                fill
                alt="portfoy"
                src={subImage2}
                className=" rounded-xl bg-gray-200"
              />
            </div>
          </div>
          <div
            className={`relative skew-x-10 w-full md:${mainView} aspect-[3/2] overflow-hidden -mr-10`}
          >
            <Image
              width={100}
              height={100}
              fill
              alt="portfoy"
              src={mainImage}
              className=" rounded-xl bg-gray-200"
            />
          </div>
        </div>
      )}
    </div>
  );
}
