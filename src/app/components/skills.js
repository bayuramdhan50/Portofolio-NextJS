"use client";
import { motion } from "framer-motion";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiMysql,
  SiGit,
  SiFigma,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "HTML", icon: SiHtml5, progress: 90, color: "text-orange-500" },
    { name: "CSS", icon: SiCss3, progress: 85, color: "text-blue-500" },
    { name: "JavaScript", icon: SiJavascript, progress: 80, color: "text-yellow-400" },
    { name: "React", icon: SiReact, progress: 85, color: "text-cyan-400" },
    { name: "Next.js", icon: SiNextdotjs, progress: 75, color: "text-gray-800 dark:text-white" },
    { name: "Tailwind", icon: SiTailwindcss, progress: 90, color: "text-cyan-500" },
    { name: "Node.js", icon: SiNodedotjs, progress: 70, color: "text-green-500" },
    { name: "MySQL", icon: SiMysql, progress: 75, color: "text-blue-600" },
    { name: "Git", icon: SiGit, progress: 80, color: "text-orange-600" },
    { name: "Figma", icon: SiFigma, progress: 70, color: "text-purple-500" },
  ];

  const timeline = [
    {
      year: "2021",
      title: "Started Programming Journey",
      description: "Began learning web development fundamentals",
    },
    {
      year: "2022",
      title: "First Projects",
      description: "Created several personal and client projects",
    },
    {
      year: "2023",
      title: "Advanced Development",
      description: "Mastered modern frameworks and tools",
    },
  ];

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-16">
            My <span className="text-indigo-600 dark:text-indigo-400">Skills</span>
          </h2>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-center gap-4 mb-4">
                  <skill.icon className={`w-8 h-8 ${skill.color}`} />
                  <h3 className="text-lg font-semibold">{skill.name}</h3>
                </div>
                <div className="relative h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.progress}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-indigo-500 to-purple-500"
                  />
                </div>
                <span className="text-sm text-gray-600 dark:text-gray-400 mt-2 block">
                  {skill.progress}%
                </span>
              </motion.div>
            ))}
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-indigo-500 to-purple-500" />
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className={`relative flex items-center ${
                  index !== timeline.length - 1 ? "mb-12" : ""
                }`}
              >
                <div
                  className={`w-1/2 ${
                    index % 2 === 0 ? "pr-8 text-right" : "pl-8 ml-auto"
                  }`}
                >
                  <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                    <span className="text-indigo-600 dark:text-indigo-400 font-bold">
                      {item.year}
                    </span>
                    <h3 className="text-lg font-semibold mt-2">{item.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">
                      {item.description}
                    </p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-indigo-500 rounded-full" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}