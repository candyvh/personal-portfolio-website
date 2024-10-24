import React, { useState } from "react";
import menuBG from "../assets/mainPageMenu3.svg";

import calmImage1 from "../assets/calm/splashScreen.jpg";
import calmImage2 from "../assets/calm/home page.jpg";
import calmImage3 from "../assets/calm/counseling page.jpg";

import HTImage1 from "../assets/hiToyz/eventBanner.png";
import HTImage2 from "../assets/hiToyz/landingPage.png";
import HTImage3 from "../assets/hiToyz/productPage.png";
import HTImage4 from "../assets/hiToyz/productDetailPage.png";

import NSImage1 from "../assets/nourishScan/SplashScreen1.png";
import NSImage2 from "../assets/nourishScan/Home Page.png";
import NSImage3 from "../assets/nourishScan/Scan.png";
import NSImage4 from "../assets/nourishScan/Details.png";

import JMPImage1 from "../assets/jmp/landingPageJMP.png";
import JMPImage2 from "../assets/jmp/loadJMP.png";
import JMPImage3 from "../assets/jmp/fleetJMP.png";
import JMPImage4 from "../assets/jmp/shipNowJMP.png";

import portImage1 from "../assets/personalWeb/personalWebLP.png"

import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const projectDetails = {
  "project1-detail": {
    title: "Calm",
    description:
      '"Calm" is a mental health support platform designed to help users manage their well-being by offering services such as mental health information, counseling, chat-based support, and appointment scheduling with therapists.',
    keyFeatures: [
      "Profile Page: Displays user information and preferences.",
      "Home Page: Introduces the platform's mission and services related to mental health.",
      "Counseling Page: A space for users to connect with mental health professionals.",
      "Chat Page: Fast response, real-time chat with counselors for immediate support.",
      "Appointment Page: Allows users to schedule sessions with counselors, view their calendar, and make payments.",
    ],
    softwareUsed: [{ name: "Figma", usage: "Design and Prototyping" }],
    role: "UI/UX designer, designed the entire interface on Figma",
    images: [calmImage1, calmImage2, calmImage3],
    link: "https://www.figma.com/proto/tTiSmAxuV6jl8IGmWtBm2X/2602168961---CandyVH---UTS-HCI---CALM?node-id=39-73&node-type=canvas&t=vIq7UcSB2hdhvAgY-1&scaling=contain&content-scaling=fixed&page-id=10%3A288&starting-point-node-id=39%3A67",
  },

  "project2-detail": {
    title: "HIToyz",
    description:
      '"HIToyz" is an e-commerce platform for collectors, specializing in collectible toys such as action figures, model cars, and limited edition items. This is a project that i built for my final assignment in Human Computer Interaction class.',
    keyFeatures: [
      "Home Page: Highlights special offers and events with eye-catching banners and featured products.",
      "Product Page: Displays a comprehensive catalog of available toys, complete with descriptions, pricing, and product images.",
      "Product Description Page: Detailed information about individual items, including availability and related products.",
      "Register Page: User registration form for account creation, allowing users to sign up and manage their profiles.",
      "Event Page: Promotes ongoing events and special offers",
      "Gallery Page: Showcases stores, collections, and highlights the best-selling or top-rated products",
    ],
    softwareUsed: [
      { name: "Figma", usage: "Design and Prototyping" },
      { name: "HTML, CSS, JS", usage: "Front-End Development" },
    ],
    role: "Designed the entire interface on Figma and deeveloped the Front-End using HTML CSS JS",
    images: [HTImage1, HTImage2, HTImage3, HTImage4],
    link: "https://github.com/candyvh/HIToyz",
  },

  "project3-detail": {
    title: "NourishScan",
    description:
      "“Nourish Scan” is a mobile application designed to address the growing need for nutritional awareness and balanced eating. Utilizing computer vision and machine learning, Nourish Scan allows users to capture or upload images of food, which are then processed by a Convolutional Neural Network (CNN) classification model to accurately identify the food items. The system retrieves nutritional information and return it to the user. This project was developed as part of a final group assignment for the Software Engineering course.",
    keyFeatures: [
      "Food Scanner: The core feature that allows users to scan food using their phone camera. It provides instant nutritional information about the scanned food, making it convenient for users to access dietary data anytime, anywhere.",
      "Logbook Page: This feature keeps track of the user's scanned foods, allowing them to monitor their nutritional intake over time.",
      "Search Food: Users can search for detailed nutritional information and ingredients of various foods in the database.",
      "Diet Planner (Membership Only): An exclusive feature for members, offering personalized diet planning based on individual nutritional needs and goals.",
    ],
    softwareUsed: [
      {
        name: "Python",
        usage:"Machine Learning Convolutional Neural Network (CNN) model development",
      },
      { name: "React-Native", usage: "Front-End Development" },
      {
        name: "Flask",
        usage:"Back-end development, handling server logic and machine learning model integration",
      },
      { name: "MySQL", usage: "Database to store food information" },
    ],
    role: "Machine learning CNN model development using Python adn integration using Flask",
    images: [NSImage1, NSImage2, NSImage3, NSImage4],
    link: "https://github.com/candyvh/NourishScan",
  },

  "project4-detail": {
    title: "Jayabaru Mandiri Perkasa (JMP) Company Website",
    description:
      '“JMP” is my personal project that i am currently developing for a client. The project focuses on showcasing expedition and construction services. The website serves as an informational hub, helping users explore the services offered by the company. For the Expedition Service section, a "SHIP NOW" feature allows users to input shipping details, which are sent directly to the company via WhatsApp for easy communication. This project is still in development as i have just nearly finished the expedition service.',
    keyFeatures: [
      "Expedition Service Overview**: Display of the company's fleet options (light, medium, and heavy loads) and services offered.",
      "SHIP NOW Functionality: Users can input their shipment details (name, phone number, item type, pick-up location, and destination), which are sent directly to the company's WhatsApp for quick response.",
      "Informational Pages: Detailed information about the company's values, services, and industries they serve.",

    ],
    softwareUsed: [
      { name: "React.js", usage: "Front-End Development"},
      { name: "Express.js", usage: "Back-End Development" },
    ],
    role: "Full web-development",
    images: [JMPImage1, JMPImage2, JMPImage3, JMPImage4],
    link: "https://github.com/candyvh/JMP",
  },

  "project5-detail": {
    title: "Personal Portfolio Website",
    description:
      "This is my personal portfolio website designed to showcase my professional journey, skills, and projects. The web provides introduction to who I am, highlighting my trials and errors on how to develop a software.",
    keyFeatures: [
      "Displaying my goals and interests.",
      "Project gallery",
      "Responsive layout",
    ],
    softwareUsed: [
      { name: "React.js", usage: "Front-End Development"},
    ],
    role: "Designer and Front-End Developer",
    images: [portImage1],
    link: "https://github.com/candyvh/personal-portfolio-website",
  },
};

const ProjectDetailPage = () => {
  const { projectId } = useParams();
  const project = projectDetails[projectId];
  const navigate = useNavigate();

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex + 1) % project.images.length
    );
  };

  const handlePrevImage = () => {
    setCurrentImageIndex(
      (prevIndex) =>
        (prevIndex - 1 + project.images.length) % project.images.length
    );
  };

  if (!project) {
    return (
      <div className="p-8 bg-gray-100 min-h-screen text-center">
        <h1 className="text-3xl font-bold">Project Not Found</h1>
        <p>The project you're looking for doesn't exist.</p>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen w-screen overflow-hidden">
      <div className="relative flex-col">
        <div
          className="relative w-full flex justify-center items-center bg-cover bg-top bg-no-repeat"
          style={{
            backgroundImage: `url(${menuBG})`,
            height: "128px",
          }}
        >
          <h1 className="text-xl text-white font-semibold">{project.title}</h1>
        </div>
  
        <div className="mt-1 w-screen min-h-screen bg-gradient-to-b from-[#372B37] to-[#19161B] px-8 py-10 text-white">
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="mb-6 hover:font-bold text-white py-2 px-4 text-md"
          >
            <FontAwesomeIcon icon={faChevronLeft} /> Back
          </button>
  
          {/* Project Details */}
          <h1 className="text-xl font-bold mb-4">{project.title}</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col items-center relative">
              {/* Project Images Slider */}
              <div className="relative w-full max-h-[50vh] flex justify-center items-center">
                <img
                  src={project.images[currentImageIndex]}
                  alt={`Project Image ${currentImageIndex + 1}`}
                  className="max-h-full object-contain"
                />
                {/* Navigation Buttons */}
                <button
                  className="absolute left-0 top-0 p-2 text-xl bg-transparent hover:bg-gray-500 hover:bg-opacity-50 w-10 h-full bg-opacity-0 transition-opacity duration-300 flex items-center justify-start"
                  onClick={handlePrevImage}
                >
                  <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button
                  className="absolute right-0 top-0 p-2 text-xl bg-transparent hover:bg-gray-500 hover:bg-opacity-50 w-10 h-full bg-opacity-0 transition-opacity duration-300 flex items-center justify-end"
                  onClick={handleNextImage}
                >
                  <FontAwesomeIcon icon={faChevronRight} />
                </button>
              </div>
            </div>
  
            {/* Right Side: Details */}
            <div>
              <div className="relative group overflow-y-auto max-h-[50vh] text-sm">
                <h2 className="text-md font-semibold mb-3 text-gray-300">
                  Description
                </h2>
                <p className="mb-6">{project.description}</p>
                <hr className="border-gray-500 my-4" />
  
                <h2 className="text-md font-semibold mb-3 text-gray-300">
                  Key Features:
                </h2>
                <ul className="list-disc list-inside mb-6">
                  {project.keyFeatures.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
                <hr className="border-gray-500 my-4" />
  
                <h2 className="text-md font-semibold mb-3 text-gray-300">
                  Software Used:
                </h2>
                <ul className="list-disc list-inside mb-6">
                  {project.softwareUsed.map((software, index) => (
                    <li key={index}>
                      <strong>{software.name}:</strong> {software.usage}
                    </li>
                  ))}
                </ul>
                <hr className="border-gray-500 my-4" />
  
                <h2 className="text-md font-semibold mb-3 text-gray-300">My Role:</h2>
                <p>{project.role}</p>
  
                <hr className="border-gray-500 my-4" />
  
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-md font-semibold mb-3 text-gray-300 hover:underline"
                >
                  Project Link
                </a>
  
                <br />
  
                {project.title === "NourishScan" && (
                  <a
                    href="https://drive.google.com/drive/u/1/folders/1TgkGACG40PyyN65f1qK8Wi43PaG0c0Oe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-md font-semibold mb-3 text-gray-300 hover:underline"
                  >
                    Demo Video Link
                  </a>
                )}
              </div>
              <div className="text-sm my-3">Scroll for more</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );  
};

export default ProjectDetailPage;