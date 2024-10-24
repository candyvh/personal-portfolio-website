import React, { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { WorkPage } from "./pages/WorkPage";
import ProjectDetailPage from "./components/ProjectDetailPage";

const App = () => {
  const [scrollLocked, setScrollLocked] = useState(true);
  const [contentVisible, setContentVisible] = useState(false);

  // Ref for the WorkPage container
  const workPageRef = useRef(null);

  useEffect(() => {
    if (scrollLocked) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [scrollLocked]);

  const handleContentClick = () => {
    setContentVisible(true);
    setScrollLocked(false); // Enable scroll
  };

  const handleHeaderClick = () => {
    setContentVisible(false);
    setScrollLocked(true); // Lock scroll

    if (workPageRef.current) {
      workPageRef.current.scrollTo(0, 0); // Reset scroll
    }
  };

  return (
    <Router basename="/personal-portfolio-website">
      <div className="bg-[#4B2A33] relative">
        {/* LandingPage */}
        <div className="h-screen z-10" onClick={handleHeaderClick}>
          <LandingPage />
        </div>

        {/* WorkPage */}
        <div
          onClick={handleContentClick}
          ref={workPageRef} // Attach the ref here
          className={`fixed bottom-0 w-full transition-transform duration-500 ease-in-out z-20 ${
            contentVisible ? "translate-y-[10vh]" : "translate-y-[83vh]"
          }`}
          style={{
            height: "100vh",
            overflow: contentVisible ? "auto" : "hidden",
          }}
        >
          <Routes>
            <Route path="/" element={<WorkPage />} />
            {/* Dynamic route for project detail pages */}
            <Route path="/project/:projectId" element={<ProjectDetailPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;