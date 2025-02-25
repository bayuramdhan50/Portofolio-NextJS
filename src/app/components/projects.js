"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiX, FiGithub, FiExternalLink } from "react-icons/fi";
import Image from "next/image";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Modern E-Commerce",
      description: "Platform e-commerce dengan fitur modern dan responsif",
      image: "/projects/project1.jpg",
      category: "Web App",
      tech: ["React", "Next.js", "Tailwind CSS", "Node.js"],
      github: "https://github.com/yourusername/project1",
      live: "https://project1.com",
      details: "Deskripsi lengkap tentang project, fitur-fitur utama, dan teknologi yang digunakan.",
    },
    // Add more projects here
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-16">
            My <span className="text-indigo-600 dark:text-indigo-400">Projects</span>
          </h2>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                layoutId={`project-${project.id}`}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="relative aspect-video">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <span className="text-white font-medium">View Details</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="text-sm text-indigo-600 dark:text-indigo-400 font-medium">
                      {project.category}
                    </span>
                    <h3 className="text-xl font-semibold mt-2 mb-3">{project.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Project Detail Modal */}
          <AnimatePresence>
            {selectedProject && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
                onClick={() => setSelectedProject(null)}
              >
                <motion.div
                  layoutId={`project-${selectedProject.id}`}
                  className="relative w-full max-w-4xl bg-white dark:bg-gray-800 rounded-2xl overflow-hidden"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors"
                  >
                    <FiX className="w-6 h-6 text-white" />
                  </button>

                  <div className="relative aspect-video">
                    <Image
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="p-8">
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-bold">{selectedProject.title}</h3>
                      <div className="flex gap-4">
                        <a
                          href={selectedProject.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        >
                          <FiGithub className="w-6 h-6" />
                        </a>
                        <a
                          href={selectedProject.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
                        >
                          <FiExternalLink className="w-6 h-6" />
                        </a>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {selectedProject.details}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}