import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Logos
import enseirbMatmeca_logo from "../assets/enseirbMatmeca_logo.jpeg";
import cpgemed5_logo from "../assets/cpge_mohamed_v_casablanca_cover.jpeg";
import univ_bordeaux from "../assets/og-default.jpg"
import univ_logo from "../assets/logo_univ.png"


// Bannières / photos (ajoute tes propres images dans `assets`)
import enseirbMatmeca_photo from "../assets/visuel_batiment.jpg"; // 1280×720 idéalement

const formations = [
  {
    id: 1,
    logo: enseirbMatmeca_logo,
    banner: enseirbMatmeca_photo,
    institution: "ENSEIRB-MATMECA",
    diplome: "Engineering Degree, Computer Science",
    periode: "2022 – 2026",
    competences: "Software Engineering, AI, DevOps",
  },
  {
    id: 1,
    logo: univ_logo,
    banner: univ_bordeaux,
    institution: "Université de Bordeaux",
    diplome: "Master’s Degree in Applied Mathematics & Statistics",
    periode: "2025 – 2026",
    competences: "Applied Mathematics & Statistics",
  },
  {
    id: 2,
    logo: cpgemed5_logo,
    banner: cpgemed5_logo,
    institution: "CPGE Mohamed 5",
    diplome: "Preparatory Class MP* (Maths/Physics Track)",
    periode: "Sep. 2020 – Jul. 2022",
    competences: "Mathematics, Physics, Engineering Sciences",
  },
];


const FormationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  /* ───── Variantes d'animation ───── */
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const timelineVariants = {
    hidden: { scaleY: 0 },
    visible: {
      scaleY: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="formations"
      ref={ref}
      className="w-full py-24 px-4 sm:px-8 lg:px-16 bg-white text-gray-800 dark:bg-[#01161E] dark:text-[#AEC3B0]"
    >
      <motion.div
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
        className="max-w-5xl mx-auto"
      >
        {/* En‑tête */}
        <motion.div variants={itemVariants} className="mb-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-black dark:text-white mb-2">
            Academic Background
          </h2>
          <div className="mx-auto w-24 h-1 bg-indigo-400 rounded-full" />
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          <motion.div
            variants={timelineVariants}
            className="absolute left-6 top-0 h-full w-1 bg-indigo-400/40 dark:bg-indigo-400 origin-top rounded-full"
          />

          <div className="space-y-12">
            {formations.map((formation) => (
              <motion.div
                key={formation.id}
                variants={itemVariants}
                className="relative pl-16"
              >
                {/* Point */}
                <div className="absolute left-0 top-12 transform -translate-x-1/2">
                  <div className="w-6 h-6 rounded-full bg-indigo-700 border-4 border-indigo-400 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-[#EFF6E0]" />
                  </div>
                </div>

                {/* Carte */}
                <div className="bg-white dark:bg-gray-800/80 backdrop-blur-md border border-indigo-400 rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                  {/* Bannière */}
                  <div className="relative w-full h-48 sm:h-56 lg:h-64 overflow-hidden">
                    <img
                      src={formation.banner}
                      alt={`Photo ${formation.institution}`}
                      className="object-cover w-full h-full"
                    />
                    {/* Filtre gradient pour lisser la transition avec la carte */}
                    <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-black/10 to-black/30 dark:from-gray-900/0 dark:via-gray-900/20 dark:to-gray-900/40" />
                  </div>

                  {/* Contenu */}
                  <div className="p-6 flex flex-col sm:flex-row gap-6">
                    {/* Logo */}
                    <div className="flex-shrink-0 -mt-12 sm:mt-0 sm:relative">
                      <img
                        src={formation.logo}
                        alt={`Logo ${formation.institution}`}
                        className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover border-4 border-white dark:border-gray-900 shadow-lg"
                      />
                    </div>

                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-black dark:text-white">
                        {formation.institution}
                      </h3>
                      <p className="text-indigo-600 dark:text-indigo-400 font-medium">
                        {formation.diplome}
                      </p>
                      <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                        {formation.periode}
                      </p>
                      {formation.competences && (
                        <div className="mt-4 pt-4 border-t border-indigo-400/50">
                          <p className="text-sm text-gray-600 dark:text-gray-300">
                            <span className="font-semibold text-indigo-600 dark:text-indigo-400">
                              Compétences :
                            </span>{" "}
                            {formation.competences}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default FormationSection;
