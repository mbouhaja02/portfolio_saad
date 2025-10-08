import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import gascogne from "../assets/Gascogne-bois-le-comptoir-gris.png";
import kael from "../assets/KAEL - logo inversé_portfolio.png";

const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.15 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.25, 1, 0.5, 1] }
    }
  };

  const experiences = [
    {
      id: 1,
      title: "HPC Project — Forest Mapping by Lightweight Drone",
      date: "2025",
      company: "Gascogne Bois",
      location: "France",
      imageUrl: gascogne,
      summary: "Photogrammetry and 3D canopy modeling for the SAVEWOOD application.",
      tasks: [
        "Performed photogrammetry and 3D modeling of forest canopies.",
        "Generated orthophotos and vegetation indices.",
        "Used Python, QGIS, and WebODM for large-scale data processing."
      ],
      skills: ["Python", "QGIS", "WebODM", "3D Modeling", "Photogrammetry"]
    },
    {
      id: 2,
      title: "Internship — AI Project for Wood",
      date: "2024 – 2025",
      company: "KAEL Ingénierie",
      location: "France",
      imageUrl: kael,
      summary: "Development of an image-processing and deep-learning pipeline (YOLOv8, Python) for analyzing internal wood structures.",
      tasks: [
        "Developed and trained YOLOv8 models for wood defect analysis.",
        "Performed preprocessing and analysis of 2D/3D data (images, .xyz files).",
        "Optimized CPU/GPU computation and implemented HPC best practices."
      ],
      skills: ["YOLOv8", "Python", "Deep Learning", "2D/3D Analysis", "HPC Optimization"]
    }
  ];

  return (
    <section
      id="experience"
      ref={ref}
      className="w-full py-24 px-4 sm:px-8 lg:px-24 bg-gradient-to-b from-gray-50 to-white dark:from-gray-950 dark:to-gray-900 text-gray-800 dark:text-gray-300"
    >
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-5xl mx-auto"
      >
        {/* Section header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <div className="mx-auto w-28 h-1.5 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full"></div>
        </motion.div>

        {/* Timeline container */}
        <div className="relative">
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="absolute left-8 top-0 h-full w-1 bg-gradient-to-b from-indigo-400 via-indigo-500 to-indigo-600 dark:from-indigo-600 dark:via-indigo-500 dark:to-indigo-400 origin-top rounded-full shadow-md"
          ></motion.div>

          <div className="space-y-16 sm:space-y-20">
            {experiences.map((exp) => (
              <motion.div
                key={exp.id}
                variants={itemVariants}
                className="relative pl-20 sm:pl-24"
              >
                {/* Timeline dot */}
                <div className="absolute left-8 top-6 transform -translate-x-1/2">
                  <div className="w-7 h-7 rounded-full bg-indigo-600 border-4 border-indigo-300 flex items-center justify-center shadow-lg">
                    <div className="w-2.5 h-2.5 rounded-full bg-white"></div>
                  </div>
                </div>

                {/* Experience card */}
                <motion.div
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="bg-white/80 dark:bg-gray-800/70 backdrop-blur-xl rounded-2xl p-8 border border-gray-200 dark:border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                    <img
                      src={exp.imageUrl}
                      alt={exp.company}
                      className="w-32 h-32 sm:w-36 sm:h-36 rounded-full object-contain border-4 border-indigo-400 dark:border-indigo-500 bg-white shadow-md"
                    />
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                            {exp.title}
                          </h3>
                          <p className="text-indigo-600 dark:text-indigo-400 font-semibold">
                            {exp.company}
                          </p>
                        </div>
                        <p className="text-gray-600 dark:text-gray-400 font-medium mt-2 sm:mt-0">
                          {exp.date}
                        </p>
                      </div>

                      <p className="mt-4 text-base text-gray-700 dark:text-gray-200 bg-indigo-50/50 dark:bg-gray-700/50 p-4 rounded-lg border border-indigo-100 dark:border-gray-600 shadow-inner">
                        {exp.summary}
                      </p>

                      {/* Tasks */}
                      <div className="mt-6">
                        <h4 className="text-lg font-semibold mb-3 text-gray-800 dark:text-gray-100">
                          Key Contributions:
                        </h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {exp.tasks.map((task, i) => (
                            <motion.li
                              key={i}
                              whileHover={{ x: 5 }}
                              className="flex items-start gap-3 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-3 shadow-sm"
                            >
                              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white text-xs mt-1">
                                ✓
                              </div>
                              <p className="text-sm text-gray-700 dark:text-gray-300">
                                {task}
                              </p>
                            </motion.li>
                          ))}
                        </ul>
                      </div>

                      {/* Skills */}
                      <div className="mt-6">
                        <h4 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">
                          Skills:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.skills.map((skill, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-blue-100 to-indigo-100 text-indigo-800 dark:from-blue-900 dark:to-indigo-800 dark:text-blue-100 shadow-sm"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
