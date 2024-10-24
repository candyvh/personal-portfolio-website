import React from "react";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ imageSrc, title, description, cardDetailRoute }) => {
  const navigate = useNavigate();

  return (
    <div
      className="relative overflow-hidden cursor-pointer w-full h-[30vh]"
      onClick={() => navigate(cardDetailRoute)}
    >
      {/* Image */}
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-full object-cover object-center transform transition-transform duration-300 hover:scale-110"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="text-center text-white">
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="mt-2">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
