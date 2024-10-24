import React, { useState } from "react";
import menuBG from "../assets/mainPageMenu3.svg";
import calmImage1 from "../assets/calm/splashScreen.jpg";
import calmImage2 from "../assets/calm/home page.jpg";
import calmImage3 from "../assets/calm/counseling page.jpg";
import { useParams, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

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
  
  
};

const ProjectDetailPage = () => {
  const { projectId } = useParams();
  const project = projectDetails[projectId];
  const navigate = useNavigate();

  // Image Slider State
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Handle Next and Previous image navigation
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
    <div className="relative min-h-screen w-screen">
      <div className="relative flex-col">
        <div
          className="relative w-full flex justify-center items-center bg-cover bg-top bg-no-repeat"
          style={{
            backgroundImage: `url(${menuBG})`,
            height: "187px",
          }}
        >
          <h1 className="text-3xl text-white font-semibold">{project.title}</h1>
        </div>

        <div className="mt-1 w-screen min-h-screen bg-gradient-to-b from-[#372B37] to-[#19161B] px-8 py-10 text-white">
          {/* Back Button */}
          <button
            onClick={() => navigate(-1)}
            className="mb-6 hover:font-bold text-white py-2 px-4 text-lg"
          >
            <FontAwesomeIcon icon={faChevronLeft} /> Back
          </button>

          {/* Project Details */}
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <div className="grid grid-cols-2 gap-6">
            {/* Left Side: Project Image Slider */}
            <div className="flex flex-col items-center relative group">
              {/* Project Images Slider */}
              <img
                src={project.images[currentImageIndex]} // Display current image
                alt={`Project Image ${currentImageIndex + 1}`}
                className="max-w-full"
              />
              {/* Navigation Buttons */}
              <button
                className="absolute left-0 p-2 text-xl bg-transparent hover:bg-gray-500 hover:bg-opacity-50 w-10 h-full bg-opacity-0 transition-opacity duration-300 flex items-center justify-start"
                onClick={handlePrevImage}
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </button>
              <button
                className="absolute right-0 text-xl p-2 bg-transparent hover:bg-gray-500 hover:bg-opacity-50 w-10 h-full bg-opacity-0 transition-opacity duration-300 flex items-center justify-end"
                onClick={handleNextImage}
              >
                <FontAwesomeIcon icon={faChevronRight} />
              </button>
            </div>

            {/* Right Side: Details */}
            <div>
              <h2 className="text-2xl font-semibold mb-3 text-gray-300">Description</h2>
              <p className="mb-6">{project.description}</p>
              <hr className="border-gray-500 my-4" />

              <h2 className="text-2xl font-semibold mb-3 text-gray-300">Key Features:</h2>
              <ul className="list-disc list-inside mb-6">
                {project.keyFeatures.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <hr className="border-gray-500 my-4" />

              <h2 className="text-2xl font-semibold mb-3 text-gray-300">Software Used:</h2>
              <ul className="list-disc list-inside mb-6">
                {project.softwareUsed.map((software, index) => (
                  <li key={index}>
                    <strong>{software.name}:</strong> {software.usage}
                  </li>
                ))}
              </ul>
              <hr className="border-gray-500 my-4" />

              <h2 className="text-2xl font-semibold mb-3 text-gray-300">My Role:</h2>
              <p>{project.role}</p>

              <hr className="border-gray-500 my-4" />

              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-xl font-semibold mb-3 text-gray-300 hover:underline">
                  Project Link
              </a>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
