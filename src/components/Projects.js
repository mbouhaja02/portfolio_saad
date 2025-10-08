import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';


// -----------------------------
// Data
// -----------------------------
const allProjects = [
  {
    title: 'Malware Detection with ML',
    date: 'May 2024 – Sep 2024',
    description:
      'Malware detection model utilizing Random Forests and Neural Networks (VirusTotal dataset).',
    skills: ['Python', 'Scikit-learn', 'Cyber Security'],
    theme: 'Cyber',
    details: {
      overview:
        'End-to-end pipeline for static malware detection: dataset curation, feature engineering (byte n-grams, PE header fields), model training and evaluation, packaging as an API.',
      highlights: [
        'Preprocessing pipeline (hashing, dedup, stratified split).',
        'Benchmarked RF, XGBoost, and MLP with cross-validation.',
        'Explainability via permutation importance.',
        'Exported as a FastAPI microservice + Docker image.'
      ],
      links: { repo: '', demo: '' }
    }
  },
  
];

const themesOrder = ['Cyber'];

const themedProjects = themesOrder.reduce((acc, theme) => {
  acc[theme] = allProjects.filter((p) => p.theme === theme).slice(0, 4);
  return acc;
}, {});

// -----------------------------
// Animations
// -----------------------------
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const themeBlockVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const projectCardVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.35,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

// -----------------------------
// Modal (JS only)
// -----------------------------
function ProjectModal({ project, onClose }) {
  // Lock scroll only when modal is open + close on ESC
  useEffect(() => {
    if (!project) return; // do nothing if closed

    function onKey(e) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', onKey);

    const prevOverflow = document.body.style.overflow;
    const prevPaddingRight = document.body.style.paddingRight;
    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    if (scrollBarWidth > 0) document.body.style.paddingRight = `${scrollBarWidth}px`;

    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
      document.body.style.paddingRight = prevPaddingRight;
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          aria-modal="true"
          role="dialog"
          onClick={onClose}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Dialog */}
          <motion.div
            className="relative z-[101] w-full max-w-3xl overflow-hidden rounded-2xl border border-indigo-500/20 bg-white dark:bg-gray-900 shadow-2xl"
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: 12 }}
            transition={{ type: 'spring', stiffness: 230, damping: 22 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header image */}
            <div className="relative h-56 w-full md:h-64">
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 h-full w-full object-cover"
                draggable="false"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

              <div className="absolute bottom-4 left-4 right-14">
                <h3 id="project-title" className="text-2xl font-bold text-white drop-shadow">
                  {project.title}
                </h3>
                <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
                  <span>{project.date}</span>
                  <span className="opacity-60">•</span>
                  <span>{project.theme}</span>
                </div>
              </div>

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute right-3 top-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/90 text-gray-900 shadow hover:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                aria-label="Close dialog"
              >
                ×
              </button>
            </div>

            {/* Scrollable body */}
            <div className="max-h-[75vh] overflow-y-auto">
              <div className="grid gap-6 p-6 md:grid-cols-5">
                <div className="md:col-span-3">
                  <p className="text-sm leading-relaxed text-gray-700 dark:text-gray-200">
                    {project.details?.overview || project.description}
                  </p>

                  {project.details?.highlights?.length ? (
                    <div className="mt-4">
                      <h4 className="mb-2 text-sm font-semibold text-gray-900 dark:text-gray-100">Highlights</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-gray-700 dark:text-gray-200">
                        {project.details.highlights.map((h, i) => (
                          <li key={i}>{h}</li>
                        ))}
                      </ul>
                    </div>
                  ) : null}
                </div>
                <div className="md:col-span-2 space-y-4">
                  <div>
                    <h4 className="mb-2 text-sm font-semibold text-gray-900 dark:text-gray-100">Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.skills?.map((s, i) => (
                        <span
                          key={i}
                          className="rounded-full bg-indigo-100 px-2 py-1 text-[11px] font-medium text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-200"
                        >
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.details?.links && (project.details.links.repo || project.details.links.demo || project.details.links.paper) ? (
                    <div>
                      <h4 className="mb-2 text-sm font-semibold text-gray-900 dark:text-gray-100">Links</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.details.links.repo ? (
                          <a
                            href={project.details.links.repo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center rounded-xl border border-indigo-300 bg-white px-3 py-1.5 text-xs font-semibold text-indigo-700 shadow-sm hover:-translate-y-0.5 hover:shadow transition dark:bg-gray-800 dark:text-indigo-200 dark:border-indigo-700"
                          >
                            Repository
                          </a>
                        ) : null}
                        {project.details.links.demo ? (
                          <a
                            href={project.details.links.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center rounded-xl border border-indigo-300 bg-white px-3 py-1.5 text-xs font-semibold text-indigo-700 shadow-sm hover:-translate-y-0.5 hover:shadow transition dark:bg-gray-800 dark:text-indigo-200 dark:border-indigo-700"
                          >
                            Live Demo
                          </a>
                        ) : null}
                        {project.details.links.paper ? (
                          <a
                            href={project.details.links.paper}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center rounded-xl border border-indigo-300 bg-white px-3 py-1.5 text-xs font-semibold text-indigo-700 shadow-sm hover:-translate-y-0.5 hover:shadow transition dark:bg-gray-800 dark:text-indigo-200 dark:border-indigo-700"
                          >
                            Paper / Doc
                          </a>
                        ) : null}
                      </div>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// -----------------------------
// Card (JS only)
// -----------------------------
function ProjectCard({ project, idx, isActive, setActive, onOpen }) {
  return (
    <motion.div
      variants={projectCardVariants}
      className="group relative h-48 cursor-pointer overflow-hidden rounded-xl shadow-lg"
      onClick={() => onOpen(project)}
      onMouseEnter={() => setActive(`${project.theme}-${idx}`)}
      onMouseLeave={() => setActive(null)}
    >
      {/* Background Image */}
      <img
        src={project.image}
        alt={project.title}
        className="absolute inset-0 h-full w-full transform object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900/40 to-gray-900/80 transition-colors duration-500 group-hover:from-indigo-900/60" />

      {/* Title & date */}
      <div className="absolute bottom-3 left-3 right-3 z-10">
        <h4 className="text-md drop-shadow text-white">{project.title}</h4>
        <p className="text-xs text-gray-200">{project.date}</p>
      </div>

      {/* Hover overlay preview */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={isActive ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
        transition={{ duration: 0.2 }}
        className="pointer-events-none absolute inset-0 flex flex-col justify-center bg-black/60 p-4 text-xs text-gray-200 backdrop-blur-sm"
      >
        <p className="mb-2 max-h-24 overflow-y-auto leading-snug">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-1">
          {project.skills.map((skill, i) => (
            <span
              key={i}
              className="rounded-full bg-indigo-300/30 px-2 py-0.5 text-[0.65rem] font-medium text-indigo-100"
            >
              {skill}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

// -----------------------------
// Main component
// -----------------------------
export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const [activeCard, setActiveCard] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const openProject = (p) => setSelectedProject(p);
  const closeProject = () => setSelectedProject(null);

  return (
    <section
      id="projects"
      ref={ref}
      className="w-full bg-white py-20 px-4 dark:bg-[#01161E] sm:px-8 lg:px-16"
    >
      <motion.div
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="mx-auto max-w-7xl"
      >
        {/* Section header */}
        <motion.div variants={themeBlockVariants} className="mb-12 text-center">
          <h2 className="mb-2 inline-block text-3xl font-bold text-black dark:text-white sm:text-4xl">
            My Projects
          </h2>
          <div className="mx-auto h-1 w-24 rounded-full bg-indigo-500" />
        </motion.div>

        {/* Main 2x2 Grid for Project Themes */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {themesOrder.map((theme) => (
            <motion.div
              variants={themeBlockVariants}
              key={theme}
              className="flex flex-col items-center rounded-2xl border border-indigo-200 bg-gray-100 p-6 shadow-xl dark:border-indigo-700 dark:bg-gray-800"
            >
              <h3 className="mb-6 text-center text-2xl font-bold text-black dark:text-white">
                {theme}
              </h3>

              {/* Nested grid for projects */}
              {themedProjects[theme]?.length > 0 ? (
                <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
                  {themedProjects[theme].map((project, idx) => (
                    <ProjectCard
                      key={idx}
                      project={project}
                      idx={idx}
                      isActive={activeCard === `${project.theme}-${idx}`}
                      setActive={setActiveCard}
                      onOpen={openProject}
                    />
                  ))}
                </div>
              ) : (
                <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
                  No projects in this category yet, or more than 4 are present and only the first 4 are shown.
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Modal */}
      <ProjectModal project={selectedProject} onClose={closeProject} />
    </section>
  );
}
