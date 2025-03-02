"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiMail,
  FiSun,
  FiMoon,
} from "react-icons/fi";
import {
  SiTypescript,
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiPostgresql,
  SiTailwindcss,
  SiDocker,
  SiMongodb,
  SiGraphql,
  SiRedux,
  SiExpress,
  SiAmazonwebservices,
} from "react-icons/si";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check user`s preferred color scheme
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      setDarkMode(true);
    }

    // Add dark mode class to body
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with payment processing and inventory management",
      image: "/api/placeholder/450/300",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
      link: "#",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative project management tool with real-time updates and notifications",
      image: "/api/placeholder/450/300",
      tech: ["React", "Node.js", "MongoDB", "Socket.io"],
      link: "#",
    },
    {
      title: "Content Management System",
      description:
        "Custom CMS with role-based access control and markdown support",
      image: "/api/placeholder/450/300",
      tech: ["TypeScript", "Express", "PostgreSQL", "AWS"],
      link: "#",
    },
  ];

  const skills = {
    Frontend: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux",
      "Framer Motion",
    ],
    Backend: [
      "Node.js",
      "Express",
      "GraphQL",
      "REST API Design",
      "Authentication & Authorization",
    ],
    Database: ["PostgreSQL", "MongoDB", "Redis", "Prisma ORM", "SQL"],
    DevOps: ["Docker", "AWS", "CI/CD", "Git", "GitHub Actions"],
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        darkMode ? "dark:bg-gray-900 dark:text-white" : "bg-white text-gray-800"
      }`}
    >
      {/* Header */}
      <header className="fixed w-full z-50 backdrop-blur-md bg-white/80 dark:bg-gray-900/80 border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-xl font-bold"
          >
            rishawraj
            <span className="text-blue-600 dark:text-blue-400">.site</span>
          </motion.div>
          <nav>
            <ul className="flex space-x-8">
              <li>
                <a
                  href="#about"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <button
                  onClick={toggleDarkMode}
                  className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Toggle dark mode"
                >
                  {darkMode ? (
                    <FiSun className="text-yellow-400" />
                  ) : (
                    <FiMoon />
                  )}
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="h-screen flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-800 dark:to-gray-900 z-0"></div>

          {/* Animated Background Elements */}
          <div className="absolute inset-0 z-0">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full bg-blue-500 dark:bg-blue-600 opacity-20"
                style={{
                  width: `${Math.random() * 400 + 100}px`,
                  height: `${Math.random() * 400 + 100}px`,
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  x: [0, Math.random() * 100 - 50],
                  y: [0, Math.random() * 100 - 50],
                }}
                transition={{
                  duration: Math.random() * 15 + 15,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            ))}
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                Hi, I&apos;m{" "}
                <span className="text-blue-600 dark:text-blue-400">
                  Rishaw Raj
                </span>
              </h1>
              <div className="h-1 w-24 bg-blue-600 dark:bg-blue-400 mx-auto mb-6"></div>
              <h2 className="text-xl md:text-3xl mb-8 max-w-2xl mx-auto">
                <span className="font-medium">Full-Stack Web Developer</span>
                <span className="block mt-2 text-gray-600 dark:text-gray-300">
                  Building Scalable and Elegant Web Solutions
                </span>
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-colors duration-300"
                >
                  Contact Me
                </motion.a>
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-md font-medium transition-colors duration-300"
                >
                  Download Resume
                </motion.a>
              </div>
            </motion.div>
          </div>

          <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
            <a href="#about" aria-label="Scroll down">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
              </svg>
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>

              <div className="flex flex-col md:flex-row items-center gap-12">
                <div className="w-full md:w-1/3">
                  <div className="aspect-square relative rounded-2xl overflow-hidden bg-blue-100 dark:bg-blue-900/30">
                    <Image
                      width={500}
                      height={500}
                      alt="profile"
                      src="/profile.png"
                      // layout="fill"
                      objectFit="cover"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/40 to-transparent"></div>
                  </div>
                </div>

                <div className="w-full md:w-2/3">
                  <p className="text-lg mb-6 text-gray-700 dark:text-gray-300">
                    I&apos;m a passionate full-stack web developer with
                    expertise in building scalable, robust, and user-friendly
                    web applications. With a strong foundation in both frontend
                    and backend technologies, I specialize in creating seamless
                    digital experiences that combine elegant design with
                    powerful functionality.
                  </p>
                  <p className="text-lg mb-8 text-gray-700 dark:text-gray-300">
                    My journey in web development began 5 years ago, and since
                    then, I&apos;ve worked on a diverse range of projects from
                    e-commerce platforms to content management systems and
                    real-time applications. I&apos;m constantly exploring new
                    technologies and methodologies to enhance my skills and
                    deliver exceptional solutions.
                  </p>

                  <h3 className="text-xl font-semibold mb-4">
                    Technologies I Work With
                  </h3>
                  <div className="flex flex-wrap gap-4">
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg"
                    >
                      <SiNextdotjs className="text-black dark:text-white" />{" "}
                      Next.js
                    </motion.div>
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg"
                    >
                      <SiTypescript className="text-blue-600" /> TypeScript
                    </motion.div>
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg"
                    >
                      <SiReact className="text-blue-500" /> React
                    </motion.div>
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg"
                    >
                      <SiNodedotjs className="text-green-600" /> Node.js
                    </motion.div>
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg"
                    >
                      <SiPostgresql className="text-blue-700" /> PostgreSQL
                    </motion.div>
                    <motion.div
                      whileHover={{ y: -5 }}
                      className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 px-4 py-2 rounded-lg"
                    >
                      <SiTailwindcss className="text-teal-500" /> Tailwind CSS
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {projects.map((project, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10 }}
                    className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="relative">
                      <Image
                        width={500}
                        height={500}
                        alt="profile"
                        src="/projects.jpg"
                        objectFit="cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-6">
                        <h3 className="text-xl font-bold text-white mb-2">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tech.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm rounded-full"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <a
                        href={project.link}
                        className="inline-block text-blue-600 dark:text-blue-400 font-medium hover:underline"
                      >
                        View Project →
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="text-center mt-12">
                <motion.a
                  href="#"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-block px-6 py-3 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-md font-medium transition-colors duration-300"
                >
                  View All Projects
                </motion.a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-white dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl font-bold mb-12 text-center">
                Skills & Technologies
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {Object.entries(skills).map(
                  ([category, skillList], categoryIndex) => (
                    <motion.div
                      key={category}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-gray-50 dark:bg-gray-700 p-6 rounded-xl"
                    >
                      <h3 className="text-xl font-bold mb-4">{category}</h3>
                      <ul className="space-y-3">
                        {skillList.map((skill, skillIndex) => (
                          <li key={skillIndex} className="flex items-center">
                            <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full mr-2"></div>
                            <span>{skill}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )
                )}
              </div>

              <div className="mt-16">
                <h3 className="text-xl font-bold mb-8 text-center">
                  My Tech Stack
                </h3>
                <div className="flex flex-wrap justify-center gap-8">
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="flex flex-col items-center"
                  >
                    <SiReact className="text-5xl text-blue-500 mb-2" />
                    <span className="text-sm">React</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="flex flex-col items-center"
                  >
                    <SiNextdotjs className="text-5xl text-black dark:text-white mb-2" />
                    <span className="text-sm">Next.js</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="flex flex-col items-center"
                  >
                    <SiTypescript className="text-5xl text-blue-600 mb-2" />
                    <span className="text-sm">TypeScript</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="flex flex-col items-center"
                  >
                    <SiNodedotjs className="text-5xl text-green-600 mb-2" />
                    <span className="text-sm">Node.js</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="flex flex-col items-center"
                  >
                    <SiExpress className="text-5xl text-gray-600 dark:text-gray-300 mb-2" />
                    <span className="text-sm">Express</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="flex flex-col items-center"
                  >
                    <SiPostgresql className="text-5xl text-blue-700 mb-2" />
                    <span className="text-sm">PostgreSQL</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="flex flex-col items-center"
                  >
                    <SiMongodb className="text-5xl text-green-500 mb-2" />
                    <span className="text-sm">MongoDB</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="flex flex-col items-center"
                  >
                    <SiGraphql className="text-5xl text-pink-600 mb-2" />
                    <span className="text-sm">GraphQL</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="flex flex-col items-center"
                  >
                    <SiTailwindcss className="text-5xl text-teal-500 mb-2" />
                    <span className="text-sm">Tailwind</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="flex flex-col items-center"
                  >
                    <SiRedux className="text-5xl text-purple-600 mb-2" />
                    <span className="text-sm">Redux</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="flex flex-col items-center"
                  >
                    <SiDocker className="text-5xl text-blue-600 mb-2" />
                    <span className="text-sm">Docker</span>
                  </motion.div>
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="flex flex-col items-center"
                  >
                    <SiAmazonwebservices className="text-5xl text-orange-500 mb-2" />
                    <span className="text-sm">AWS</span>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <h2 className="text-3xl font-bold mb-12 text-center">
                Get In Touch
              </h2>

              <div className="max-w-3xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">
                      Contact Information
                    </h3>
                    <p className="mb-6 text-gray-600 dark:text-gray-300">
                      Feel free to reach out for collaboration, job
                      opportunities, or just to say hello!
                    </p>

                    <div className="space-y-4">
                      <a
                        href="mailto:hello@rishaw.dev"
                        className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <FiMail className="text-xl" />
                        <span>hello@rishaw.dev</span>
                      </a>
                    </div>

                    <h3 className="text-xl font-semibold mt-8 mb-4">
                      Connect With Me
                    </h3>
                    <div className="flex gap-4">
                      <motion.a
                        href="https://github.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        whileHover={{ y: -5 }}
                        className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <FiGithub className="text-xl" />
                      </motion.a>
                      <motion.a
                        href="https://linkedin.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        whileHover={{ y: -5 }}
                        className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <FiLinkedin className="text-xl" />
                      </motion.a>
                      <motion.a
                        href="https://twitter.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Twitter"
                        whileHover={{ y: -5 }}
                        className="w-12 h-12 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-blue-900/30 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                      >
                        <FiTwitter className="text-xl" />
                      </motion.a>
                    </div>
                  </div>

                  <div>
                    <form className="space-y-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-sm font-medium mb-1"
                        >
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium mb-1"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="message"
                          className="block text-sm font-medium mb-1"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          rows={5}
                          className="w-full px-4 py-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          required
                        ></textarea>
                      </div>
                      <motion.button
                        type="submit"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-medium transition-colors duration-300"
                      >
                        Send Message
                      </motion.button>
                    </form>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <div className="text-xl font-bold">
                rishawraj
                <span className="text-blue-600 dark:text-blue-400">.site</span>
              </div>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                © {new Date().getFullYear()} Rishaw Raj. All rights reserved.
              </p>
            </div>

            <div className="flex gap-6">
              <a
                href="#about"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Projects
              </a>
              <a
                href="#skills"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Skills
              </a>
              <a
                href="#contact"
                className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
