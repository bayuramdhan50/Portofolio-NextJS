"use client"
import Skills from "../components/skills";
import Navbar from "../components/navbar";
import React, { useState } from "react";

export default function SkillsPage() {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = (value) => {
    setDarkMode(value);
    localStorage.setItem('darkMode', JSON.stringify(value));
  };

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="dark:bg-gray-900 dark:text-gray-100 min-h-screen">
        <Navbar darkMode={darkMode} toggleDarkMode={handleDarkMode} />
        <Skills />
      </div>
    </div>
  );
}
