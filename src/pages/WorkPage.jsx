import React, { useState } from "react";
import menuBG from "../assets/mainPageMenu3.svg";
import ProjectCard from "../components/ProjectCard";

import calmSC from "../assets/calm/splashScreen.jpg";
import hiToyzEB from "../assets/hiToyz/eventBanner1.png";
import nouScanSC from "../assets/nourishScan/splashScreen2.png";
import jmpLP from "../assets/jmp/jmpLandingPage.png";
import wporto from "../assets/webPorto.png";

export const WorkPage = () => {
  const [activeTab, setActiveTab] = useState("work");

  const projectCards = [
    {
      id: 1,
      imageSrc: calmSC,
      title: "Calm",
      description: "UI/UX Design",
      cardDetailRoute: "/project/project1-detail",
    },
    {
      id: 2,
      imageSrc: hiToyzEB,
      title: "HIToyz",
      description: "UI/UX Design, Front-End",
      cardDetailRoute: "/project/project2-detail",
    },
    {
      id: 3,
      imageSrc: nouScanSC,
      title: "NourishScan",
      description: "Machine Learning Model Development and Integration",
      cardDetailRoute: "/project/project3-detail",
    },
    {
      id: 4,
      imageSrc: jmpLP,
      title: "Jayabaru Mandiri Perkasa (JMP)",
      description: "Full Web-Dev",
      cardDetailRoute: "/project/project4-detail",
    },
    {
      id: 5,
      imageSrc: wporto,
      title: "Personal Profile Website",
      description: "Front-End",
      cardDetailRoute: "/project/project5-detail",
    },
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case "work":
        return (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {projectCards.map((card) => (
              <ProjectCard
                key={card.id}
                imageSrc={card.imageSrc}
                title={card.title}
                description={card.description}
                cardDetailRoute={card.cardDetailRoute}
              />
            ))}
          </div>
        );
      case "experience":
        return <div>Experience content goes here...</div>;
      case "education":
        return <div>Education content goes here...</div>;
      default:
        return null;
    }
  };

  return (
    <div className="relative min-h-screen w-screen">
      <div className="relative flex-col">
        {/* menu work/exp/edu */}
        <div
          className="relative w-full flex justify-center items-center bg-cover bg-top bg-no-repeat"
          style={{
            backgroundImage: `url(${menuBG})`,
            height: "187px",
          }}
        >
          <div className="absolute w-1/2 flex justify-between items-center text-2xl text-white">
            <h3
              className={`cursor-pointer ${
                activeTab === "work" ? "font-bold" : ""
              }`}
              onClick={() => setActiveTab("work")}
            >
              Work
            </h3>
            <h3
              className={`cursor-pointer ${
                activeTab === "experience" ? "font-bold" : ""
              }`}
              onClick={() => setActiveTab("experience")}
            >
              Experience
            </h3>
            <h3
              className={`cursor-pointer ${
                activeTab === "education" ? "font-bold" : ""
              }`}
              onClick={() => setActiveTab("education")}
            >
              Education
            </h3>
          </div>
        </div>

        {/* content */}
        <div className="mt-1 w-screen min-h-screen bg-gradient-to-b from-[#372B37] to-[#19161B] px-8 py-10">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
};
