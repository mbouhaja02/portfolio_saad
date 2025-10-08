import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaFilePdf } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import avatar from "../assets/saad_portoflio.png"; 
import cvFile from "../assets/saad_portoflio.png"; 

// --- Infos personnelles ---
const NAME = "Saad KHATTAB";
const TAGLINE = "Ingénieur en Calcul Haute Performance (HPC) • IA scientifique • Modélisation numérique";

const LINKS = {
  linkedin: "https://www.linkedin.com/in/saad-khattab-hpc/",
  github: "https://github.com/saadkhattab",
  email: "mailto:saad.khattab@example.com",
};

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function ProfileHeader() {
  return (
    <section className="relative px-4 sm:px-8 lg:px-32 py-16 lg:pt-[120px]">
      {/* Fond décoratif */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-1/2 top-[-120px] h-72 w-72 -translate-x-1/2 rounded-full blur-3xl opacity-25 dark:opacity-15 bg-gradient-to-tr from-cyan-500 via-blue-500 to-indigo-400" />
        <div className="absolute right-10 bottom-[-120px] h-64 w-64 rounded-full blur-3xl opacity-20 dark:opacity-10 bg-gradient-to-tr from-indigo-600 to-sky-500" />
      </div>

      <motion.div
        className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-6 p-6 md:p-8 bg-white/95 dark:bg-gray-900/90 backdrop-blur-lg rounded-3xl shadow-xl border border-gray-200 dark:border-gray-800"
        initial="hidden"
        animate="show"
        variants={fadeUp}
      >
        {/* À gauche : avatar + texte */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          {/* Avatar */}
          <motion.div
            whileHover={{ rotate: 2, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative group"
          >
            <div className="relative p-1 rounded-full bg-gradient-to-tr from-cyan-500 via-blue-500 to-indigo-400">
              <img
                src={avatar}
                alt={`${NAME} portrait`}
                className="block h-36 w-36 sm:h-40 sm:w-40 md:h-44 md:w-44 rounded-full object-cover ring-4 ring-white dark:ring-gray-900"
                draggable="false"
              />
            </div>

            {/* Badge Hover */}
            <div className="absolute inset-0 hidden place-items-center rounded-full bg-gradient-to-tr from-blue-600/70 to-cyan-400/70 group-hover:grid transition-opacity duration-300">
              <span className="text-white font-medium text-lg select-none">
                🚀 HPC
              </span>
            </div>
          </motion.div>

          {/* Nom + tagline */}
          <div className="text-center sm:text-left">
            <h1 className="text-gray-900 dark:text-white text-3xl font-extrabold tracking-tight">
              {NAME}
            </h1>
            <p className="mt-2 text-sm sm:text-base text-blue-700 dark:text-blue-300">
              {TAGLINE}
            </p>

            {/* Liens sociaux */}
            <div className="mt-4 flex justify-center sm:justify-start gap-4">
              <a
                href={LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex items-center justify-center h-10 w-10 rounded-xl border border-blue-200 dark:border-blue-900 bg-white dark:bg-gray-800 hover:-translate-y-0.5 hover:shadow-md transition"
              >
                <FaLinkedin className="text-blue-600 dark:text-blue-400 text-xl" />
              </a>
              <a
                href={LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="inline-flex items-center justify-center h-10 w-10 rounded-xl border border-blue-200 dark:border-blue-900 bg-white dark:bg-gray-800 hover:-translate-y-0.5 hover:shadow-md transition"
              >
                <FaGithub className="text-blue-600 dark:text-blue-400 text-xl" />
              </a>
            </div>
          </div>
        </div>

        {/* À droite : boutons actions */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
          <a
            href={cvFile}
            download="Cv_Saad_KHATTAB_HPC.pdf"
            className="w-full sm:w-auto"
          >
            <button
              className="w-full sm:w-auto h-12 px-6 inline-flex items-center justify-center gap-2 rounded-2xl font-semibold text-white shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/40 active:translate-y-[1px] transition bg-gradient-to-tr from-blue-600 to-cyan-500"
            >
              <FaFilePdf />
              <span className="truncate">Télécharger le CV</span>
            </button>
          </a>

          <a href={LINKS.email} className="w-full sm:w-auto">
            <button
              className="w-full sm:w-auto h-12 px-6 inline-flex items-center justify-center gap-2 rounded-2xl font-semibold text-blue-600 dark:text-blue-300 bg-white dark:bg-gray-800 border-2 border-blue-500 hover:border-blue-400 hover:-translate-y-0.5 active:translate-y-[1px] transition"
            >
              <HiOutlineMail />
              <span className="truncate">Me contacter</span>
            </button>
          </a>
        </div>
      </motion.div>
    </section>
  );
}
