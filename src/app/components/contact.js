import { FaGithub, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="py-20" id="contact">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12 dark:text-white">
          Hubungi Saya
        </h2>
        <div className="flex justify-center space-x-8">
          <motion.a
            whileHover={{ scale: 1.1 }}
            className="p-4 rounded-full bg-indigo-100 dark:bg-gray-700 text-indigo-600 dark:text-indigo-400"
            href="https://wa.me/yournumber"
            target="_blank"
          >
            <FaWhatsapp className="text-3xl" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            className="p-4 rounded-full bg-indigo-100 dark:bg-gray-700 text-indigo-600 dark:text-indigo-400"
            href="https://github.com/yourusername"
            target="_blank"
          >
            <FaGithub className="text-3xl" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            className="p-4 rounded-full bg-indigo-100 dark:bg-gray-700 text-indigo-600 dark:text-indigo-400"
            href="mailto:youremail@example.com"
          >
            <FaEnvelope className="text-3xl" />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
