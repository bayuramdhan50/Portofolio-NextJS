import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import About from "./about";

export default function Hero() {
  return (
    <>
      <section className="min-h-screen flex items-center pt-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center"
          >
            <div className="md:w-1/2">
              <h1 className="text-5xl font-bold mb-6 dark:text-white">
                Hi, Saya{" "}
                <span className="text-indigo-600">
                  <TypeAnimation
                    sequence={[
                      "Web Developer",
                      2000,
                      "Full Stack",
                      2000,
                      "UI/UX Enthusiast",
                      2000,
                    ]}
                    repeat={Infinity}
                  />
                </span>
              </h1>
              <p className="text-xl mb-8 text-gray-600 dark:text-gray-300">
                Spesialis dalam pengembangan aplikasi web modern dan responsif
              </p>
              <a
                href="/cv.pdf"
                download
                className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Download CV
              </a>
            </div>
            <div className="md:w-1/2 mt-12 md:mt-0">
              {/* Tambahkan ilustrasi atau foto disini */}
            </div>
          </motion.div>
        </div>
      </section>
      <About />
    </>
  );
}
