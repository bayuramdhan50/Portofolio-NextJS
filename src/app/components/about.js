"use client";
import { motion } from "framer-motion";
import { FiUser, FiMail, FiMapPin, FiGithub, FiLinkedin } from "react-icons/fi";

export default function About() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            About{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

          <div className="grid md:grid-cols-5 gap-8">
            {/* Profile Image */}
            <div className="md:col-span-2">
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-500 to-purple-500 p-1">
                  <div className="w-full h-full rounded-2xl overflow-hidden">
                    {/* Replace with your image */}
                    <div className="w-full h-full bg-gray-200 dark:bg-gray-700" />
                  </div>
                </div>
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:scale-110 transition-transform"
                  >
                    <FiGithub className="w-5 h-5" />
                  </a>
                  <a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:scale-110 transition-transform"
                  >
                    <FiLinkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Info */}
            <div className="md:col-span-3 space-y-6">
              <div className="prose dark:prose-invert max-w-none">
                <h3 className="text-2xl font-semibold mb-4">Web Developer & UI Designer</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Saya adalah seorang web developer yang bersemangat dalam menciptakan
                  pengalaman digital yang menarik dan fungsional. Dengan fokus pada
                  teknologi modern dan desain yang berpusat pada pengguna, saya
                  berusaha menghadirkan solusi web yang inovatif.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <FiUser className="w-5 h-5 text-indigo-500" />
                  <span>Nama Lengkap Anda</span>
                </div>
                <div className="flex items-center gap-3">
                  <FiMail className="w-5 h-5 text-indigo-500" />
                  <span>email@example.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <FiMapPin className="w-5 h-5 text-indigo-500" />
                  <span>Lokasi Anda</span>
                </div>
              </div>

              <div className="pt-6">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg hover:shadow-lg transition-shadow"
                >
                  Download Resume
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}