import bgLP from "../assets/LandPageBG2.svg";
import profilePic from "../assets/Pic_noBG.svg";
import { Header } from "../components/Header";

export const LandingPage = () => {
  return (
    <div className="h-[93%] relative">
      <div
        className="flex flex-col justify-between items-center h-full bg-cover bg-bottom"
        style={{
          backgroundImage: `url(${bgLP})`,
        }}
      >
        <Header />

        <div
          className="h-[50%] w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 bg-no-repeat bg-center mb-12"
          style={{
            backgroundImage: `url(${profilePic})`,
            backgroundSize: "contain",
          }}
        ></div>
      </div>
    </div>
  );
};