"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const transition = { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.9] };

const PortfolioPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={transition}
      className="min-h-screen bg-gray-900 text-white font-sans"
    >
      <header className="p-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Your Name</h1>
        <nav className="space-x-4">
          <Link
            href="#projects"
            className="hover:text-gray-300 transition-colors"
          >
            Projects
          </Link>
          <Link href="#about" className="hover:text-gray-300 transition-colors">
            About
          </Link>
          <Link
            href="#contact"
            className="hover:text-gray-300 transition-colors"
          >
            Contact
          </Link>
        </nav>
      </header>

      <motion.section
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ...transition, delay: 0.2 }}
        className="text-center py-20"
      >
        <h2 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h2>
        <p className="text-lg text-gray-400 mb-8">
          Showcasing my latest projects and skills.
        </p>
        <Link
          href="#projects"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-6 rounded-full transition-colors"
        >
          View My Work
        </Link>
      </motion.section>

      <section id="projects" className="py-16 px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project Card Example (Repeat and customize) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ ...transition, delay: 0.3 }}
            className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
          >
            <Image
              src="/placeholder.png" //replace with your image
              alt="Project 1"
              width={600}
              height={400}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Project 1</h3>
              <p className="text-gray-400">Description of Project 1.</p>
              <Link
                href="#"
                className="mt-4 inline-block text-indigo-400 hover:text-indigo-300"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
          {/* Add more project cards here */}
        </div>
      </section>

      <section id="about" className="py-16 px-8 bg-gray-800">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0.4 }}
          className="max-w-3xl mx-auto text-gray-400"
        >
          <p className="mb-4">
            A brief description about yourself, your skills, and your passion.
          </p>
          <p>More details about your experience and background.</p>
        </motion.div>
      </section>

      <section id="contact" className="py-16 px-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Contact</h2>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ ...transition, delay: 0.5 }}
          className="max-w-md mx-auto"
        >
          <p className="text-gray-400 text-center mb-4">
            Feel free to reach out!
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href="mailto:your.email@example.com"
              className="text-indigo-400 hover:text-indigo-300"
            >
              Email
            </Link>
            <Link href="#" className="text-indigo-400 hover:text-indigo-300">
              LinkedIn
            </Link>
            <Link href="#" className="text-indigo-400 hover:text-indigo-300">
              GitHub
            </Link>
          </div>
        </motion.div>
      </section>

      <footer className="py-8 text-center text-gray-500">
        <p>
          &copy; {new Date().getFullYear()} rishawraj . All rights reserved.
        </p>
      </footer>
    </motion.div>
  );
};

export default PortfolioPage;
