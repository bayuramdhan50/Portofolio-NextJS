"use client";
import { useState } from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Stats from "./components/stats";
import FeaturedWork from "./components/featured-work";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkMode = (value) => {
    setDarkMode(value);
    localStorage.setItem('darkMode', JSON.stringify(value));
  };

  return (
    <div className={`${darkMode ? "dark" : ""}`}>
      <div className="dark:bg-gray-900 dark:text-gray-100 min-h-screen">
        <Navbar darkMode={darkMode} toggleDarkMode={handleDarkMode} />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-24 py-16">
            <Hero />
            <Stats />
            <FeaturedWork />
            <Contact />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}
