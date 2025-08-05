import { ArrowRightIcon } from "@heroicons/react/24/solid";
export default function AboutMe() {
  return (
    <div className="h-screen -mt-30 flex flex-col space-y-5 justify-center items-center md:flex-row md:justify-between gap-5 sm:gap-10   second-bg px-5 lg:px-40  ">
      <div className="flex flex-col space-y-5 md:w-1/2">
        <h3 className="text-2xl text-amber-50 ">
          <span className="text-amber-300 text-3xl">{`//`}</span> About Me
        </h3>
        <div className="flex flex-col space-y-5">
          <h1 className="text-4xl font-semibold ">
            I`ve Been developing websites since 2022
          </h1>
          <p className="text-gray-500 font-sans">
            I’m passionate about building clean, responsive, and user-friendly
            websites. With a strong eye for detail and a love for learning, I
            constantly strive to improve both my code and user experience. I
            enjoy turning complex problems into simple, elegant solutions.
          </p>
        </div>
        <div className="flex group space-x-2 border-b border-gray-500 transition-all duration-700 hover:border-white w-max">
          <p className="flex justify-center items-center  md:text-2xl cursor-pointer">
            More about me
            <ArrowRightIcon className="w-6 h-6 text-amber-200 inline transition-all duration-700 ml-2 group-hover:ml-5" />
          </p>
        </div>
      </div>
      <div className="flex flex-col space-y-2 sm:w-1/2 md:w-1/3">
        <div className="flex justify-between ">
          <div className="flex space-x-2">
            <p className="text-6xl">3 </p>
            <p className="flex justify-center items-center">
              Years of Experience
            </p>
          </div>
          <div className="flex space-x-2">
            <p className="text-6xl">17 </p>
            <p className="flex justify-center items-center">
              Successful project
            </p>
          </div>
        </div>
        <p className="text-gray-500 font-sans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi unde
          ullam repellat eius maiores. Iusto quas totam repudiandae
          exercitationem mollitia, praesentium, dolorem magni
        </p>
      </div>
    </div>
  );
}
