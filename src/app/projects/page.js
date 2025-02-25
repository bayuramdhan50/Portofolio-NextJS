"use client";
import { useState } from "react";
import Navbar from "../components/navbar";
import Projects from "../components/projects";

export default function ProjectsPage() {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = (value) => {
    setDarkMode(value);
    localStorage.setItem('darkMode', JSON.stringify(value));
  };

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="dark:bg-gray-900 dark:text-gray-100 min-h-screen">
        <Navbar darkMode={darkMode} toggleDarkMode={handleDarkMode} />
        <Projects />
      </div>
    </div>
  );
}
