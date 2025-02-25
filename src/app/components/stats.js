"use client";
import { FiCode, FiBook, FiAward, FiUsers } from "react-icons/fi";

export default function Stats() {
  const stats = [
    { icon: FiCode, label: "Projects Completed", value: "15+" },
    { icon: FiBook, label: "Years Experience", value: "2+" },
    { icon: FiAward, label: "Certifications", value: "5+" },
    { icon: FiUsers, label: "Satisfied Clients", value: "10+" },
  ];

  return (
    <section className="py-12">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <stat.icon className="w-8 h-8 mb-4 text-indigo-500" />
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
              {stat.value}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm text-center">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}