import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";
import pdp from "../assets/saad_portoflio.png";

const aboutMeContent = {
  intro1: "Currently a second-year engineering student at ",
  highlight1: "ENSEIRB-MATMECA (Bordeaux INP)",
  intro2: ", I am pursuing a degree in ",
  highlight2: "Applied Mathematics and Scientific Computing",
  intro3: " while also completing a ",
  highlight3: "Master’s in Applied Mathematics & Statistics",
  intro4: " at the University of Bordeaux. Passionate about ",
  highlight4: "data science, HPC, and numerical modeling",
  intro5: ", I’m actively seeking a ",
  highlight5: "6-month end-of-studies internship (PFE)",
  intro6: " starting in February 2026.",

  block2_1: "My academic background combines ",
  highlight6: "mathematical modeling",
  block2_2: ", ",
  highlight7: "parallel computing (MPI, OpenMP, CUDA)",
  block2_3: ", and ",
  highlight8: "data-driven optimization",
  block2_4: ", allowing me to design efficient and scalable scientific applications. I enjoy working on algorithms, uncertainty analysis, and large-scale numerical simulations.",

  block3_1: "During my recent projects with ",
  highlight9: "KAEL Ingénierie",
  block3_2: " and ",
  highlight10: "Gascogne Bois",
  block3_3: ", I developed pipelines for ",
  highlight11: "deep learning and photogrammetry",
  block3_4: ", applied to industrial use cases such as wood defect detection and 3D forest mapping (SAVEWOOD).",

  block4_1: "Curious, rigorous, and passionate about innovation, I thrive in interdisciplinary environments involving ",
  highlight12: "data, simulation, and HPC",
  block4_2: ". I’m looking to contribute to cutting-edge R&D projects where performance, accuracy, and real-world impact meet.",
};

const AboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, delay: 0.3 } },
  };

  return (
    <section
      id="about"
      className="relative overflow-hidden py-24 sm:py-32 md:py-40 bg-gray-50 dark:bg-[#01161E] text-gray-900 dark:text-white"
    >
      {/* Subtle Gradient Background */}
      <div className="absolute inset-0 z-0 opacity-10 dark:opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 dark:from-indigo-900/10 dark:to-purple-900/10 animate-gradient-shift" />
      </div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 flex flex-col items-center"
      >
        {/* Section Title */}
        <motion.div variants={itemVariants} className="mb-24 text-center w-full">
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-extrabold leading-tight tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-700 dark:from-indigo-400 dark:to-purple-500">
            About Me
          </h2>
          <div className="mx-auto mt-4 h-2 w-56 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full" />
        </motion.div>

        {/* Main Layout: Image + Text */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-x-20 gap-y-16 w-full">
          {/* Profile Image */}
          <motion.div
            variants={imageVariants}
            className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[450px] lg:h-[450px] overflow-hidden shadow-2xl ring-4 ring-indigo-500/50 dark:ring-indigo-300/30 rounded-2xl hover:scale-[1.02] transition-transform duration-500"
          >
            <img
              src={pdp}
              alt="Portrait of Saad Khattab"
              className="w-full h-full object-contain object-center bg-gray-200 dark:bg-gray-700"
            />
          </motion.div>

          {/* Text Blocks */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-y-8 flex-grow max-w-3xl">
            {/* Intro Block */}
            <motion.div variants={itemVariants} className="p-6 bg-white/10 dark:bg-gray-800/10 rounded-2xl shadow-lg border border-indigo-200/20 dark:border-indigo-700/30">
              <p className="text-lg md:text-xl font-medium text-gray-800 dark:text-gray-100 leading-relaxed">
                {aboutMeContent.intro1}
                <span className="font-semibold text-indigo-600 dark:text-indigo-400">{aboutMeContent.highlight1}</span>
                {aboutMeContent.intro2}
                <span className="font-semibold text-indigo-600 dark:text-indigo-400">{aboutMeContent.highlight2}</span>
                {aboutMeContent.intro3}
                <span className="font-semibold text-indigo-600 dark:text-indigo-400">{aboutMeContent.highlight3}</span>
                {aboutMeContent.intro4}
                <span className="font-semibold text-indigo-600 dark:text-indigo-400">{aboutMeContent.highlight4}</span>
                {aboutMeContent.intro5}
                <span className="font-semibold text-indigo-600 dark:text-indigo-400">{aboutMeContent.highlight5}</span>
                {aboutMeContent.intro6}
              </p>
            </motion.div>

            {/* Academic / Technical Focus */}
            <motion.div variants={itemVariants} className="p-6 bg-white/10 dark:bg-gray-800/10 rounded-2xl shadow-lg border border-indigo-200/20 dark:border-indigo-700/30">
              <p className="text-lg md:text-xl font-medium text-gray-800 dark:text-gray-100 leading-relaxed">
                {aboutMeContent.block2_1}
                <span className="font-semibold text-indigo-600 dark:text-indigo-400">{aboutMeContent.highlight6}</span>
                {aboutMeContent.block2_2}
                <span className="font-semibold text-indigo-600 dark:text-indigo-400">{aboutMeContent.highlight7}</span>
                {aboutMeContent.block2_3}
                <span className="font-semibold text-indigo-600 dark:text-indigo-400">{aboutMeContent.highlight8}</span>
                {aboutMeContent.block2_4}
              </p>
            </motion.div>

            {/* Experience Block */}
            <motion.div variants={itemVariants} className="p-6 bg-white/10 dark:bg-gray-800/10 rounded-2xl shadow-lg border border-indigo-200/20 dark:border-indigo-700/30">
              <p className="text-lg md:text-xl font-medium text-gray-800 dark:text-gray-100 leading-relaxed">
                {aboutMeContent.block3_1}
                <span className="font-semibold text-indigo-600 dark:text-indigo-400">{aboutMeContent.highlight9}</span>
                {aboutMeContent.block3_2}
                <span className="font-semibold text-indigo-600 dark:text-indigo-400">{aboutMeContent.highlight10}</span>
                {aboutMeContent.block3_3}
                <span className="font-semibold text-indigo-600 dark:text-indigo-400">{aboutMeContent.highlight11}</span>
                {aboutMeContent.block3_4}
              </p>
            </motion.div>

            {/* Closing Block */}
            <motion.div variants={itemVariants} className="p-6 bg-white/10 dark:bg-gray-800/10 rounded-2xl shadow-lg border border-indigo-200/20 dark:border-indigo-700/30">
              <p className="text-lg md:text-xl font-medium text-gray-800 dark:text-gray-100 leading-relaxed">
                {aboutMeContent.block4_1}
                <span className="font-semibold text-indigo-600 dark:text-indigo-400">{aboutMeContent.highlight12}</span>
                {aboutMeContent.block4_2}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Contact Button */}
        <motion.div variants={itemVariants} className="mt-20 w-full flex justify-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-gradient-to-r from-indigo-600 to-purple-700 text-white font-bold text-xl hover:from-indigo-700 hover:to-purple-800 hover:shadow-xl hover:shadow-indigo-500/40 dark:hover:shadow-purple-600/40 transition-all duration-300 transform hover:-translate-y-1"
          >
            Contact Me <ArrowRight className="w-7 h-7 ml-2" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
