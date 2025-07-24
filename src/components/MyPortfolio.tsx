import PortfolioCard from "./PortfolioCard";

export default function MyPortfolio() {
  return (
    <div
      style={{ height: "180vh" }}
      className="w-full flex justify-center items-center gap-5 second-bg  px-30"
    >
      <div className="w-full flex gap-32 justify-between px-30 ">
        <div className="space-y-5 w-1/2 ">
          <h2 className="text-2xl">
            <span className="text-amber-300 text-2xl">//</span> My portfolio
          </h2>
          <h1 className="text-4xl">
            Take a look at the latest projects I’ve done
          </h1>

          <div className="w-max border-b border-b-cyan-200">
            <p>Browse all projects</p>
          </div>
          <div className="mt-40">
            <PortfolioCard
              primaryButton="React Native Expo"
              secondaryButton="Mobile Development"
              title="Urbon Pop"
              description="Billboard tracking"
              mainImage="/assets/urbanpop1.jpg"
              subImage1="/assets/urbanpop2.png"
              subImage2="/assets/urbanpop3.png"
              mainView="w-1/3"
              mobileCard={true}
            />
          </div>
        </div>
        <div className="w-1/2 flex flex-col gap-20  ">
          <PortfolioCard
            primaryButton="React"
            secondaryButton="Web Development"
            title="Green Drive"
            description="E sarj Website"
            mainImage="/assets/greendrive1.png"
            mainView="w-1/2"
            subImage1="/assets/greendrive.png"
            subImage2="/assets/greendrive.png"
          />
          <PortfolioCard
            primaryButton="Next Js"
            secondaryButton="Web Development"
            title="Şarj Noktası"
            description="E- Sarj Website"
            mainImage="/assets/eSarj4.png"
            mainView="w-1/2"
            subImage1="/assets/eSarj2.png"
            subImage2="/assets/eSarj3.png"
          />
        </div>
      </div>
    </div>
  );
}
