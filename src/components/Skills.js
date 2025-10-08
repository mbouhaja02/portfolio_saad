import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPython,
  faJs,
  faC,
  faJava,
  faGitAlt
} from '@fortawesome/free-brands-svg-icons';
import {
  faServer,
  faProjectDiagram,
  faDatabase,
  faCogs,
  faMicrochip,
  faAtom,
  faInfinity,
  faCalculator,
  faChartLine,
  faNetworkWired
} from '@fortawesome/free-solid-svg-icons';

/* --------------------------------------------------
  SkillBar – single skill with animated progress bar
-------------------------------------------------- */
const SkillBar = ({ skill, percentage, icon, variants }) => {
  const getLevel = (pct) =>
    pct >= 80 ? 'Advanced' : pct >= 60 ? 'Intermediate' : 'Beginner';

  return (
    <motion.div variants={variants} className="w-full p-2">
      <div className="bg-white dark:bg-gray-800/70 rounded-2xl p-4 shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-700 h-full">
        <div className="flex items-center gap-3 mb-3">
          <div className="text-cyan-600 dark:text-cyan-400 text-xl">
            <FontAwesomeIcon icon={icon} />
          </div>
          <h4 className="font-semibold text-gray-800 dark:text-white text-base">
            {skill}
          </h4>
        </div>

        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 mb-1.5">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 1.3, delay: 0.2, type: 'spring' }}
            className="h-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600"
          />
        </div>

        <div className="flex justify-between text-xs font-medium">
          <span className="text-gray-500 dark:text-gray-400">
            {getLevel(percentage)}
          </span>
          <span className="text-cyan-600 dark:text-cyan-400">
            {percentage}%
          </span>
        </div>
      </div>
    </motion.div>
  );
};

/* --------------------------------------------------
  HPC-Oriented Categories
-------------------------------------------------- */
const categories = [
  {
    name: 'Programming & HPC',
    skills: [
      // { skill: 'C / C++', percentage: 90, icon: faC },
      { skill: 'Python (NumPy / SciPy)', percentage: 85, icon: faPython },
      { skill: 'Java (Scientific)', percentage: 70, icon: faJava },
      { skill: 'Parallel Programming (MPI / OpenMP)', percentage: 80, icon: faProjectDiagram },
      { skill: 'GPU Computing (CUDA)', percentage: 70, icon: faMicrochip }
    ]
  },
  {
    name: 'Math & Physics Applied',
    skills: [
      { skill: 'Numerical Analysis', percentage: 85, icon: faCalculator },
      { skill: 'Linear Algebra & Optimization', percentage: 80, icon: faInfinity },
      { skill: 'Differential Equations (PDE/ODE)', percentage: 75, icon: faAtom },
      { skill: 'Modeling & Simulation', percentage: 80, icon: faChartLine }
    ]
  },
  {
    name: 'Data & Storage',
    skills: [
      { skill: 'SQL & Scientific Databases', percentage: 70, icon: faDatabase },
      { skill: 'Big Data Processing', percentage: 65, icon: faServer },
      { skill: 'Data Visualization (Matplotlib, Plotly)', percentage: 75, icon: faChartLine }
    ]
  },
  {
    name: 'High-Performance Systems',
    skills: [
      { skill: 'Cluster & Supercomputing', percentage: 85, icon: faNetworkWired },
      { skill: 'Job Scheduling (Slurm)', percentage: 75, icon: faCogs },
      { skill: 'Linux System Tuning', percentage: 70, icon: faCogs }
    ]
  },
  {
    name: 'Tools & DevOps',
    skills: [
      { skill: 'Git & Version Control', percentage: 80, icon: faGitAlt },
      { skill: 'Bash / Shell Scripting', percentage: 75, icon: faCogs },
      { skill: 'Containers (Docker, Singularity)', percentage: 65, icon: faServer }
    ]
  }
];

/* --------------------------------------------------
  Main component – 2-row / 3-column category grid
-------------------------------------------------- */
const HPCSkills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.25 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section
      id="skills"
      className="w-full py-20 px-4 sm:px-8 lg:px-16 bg-white dark:bg-[#01161E]"
      ref={ref}
    >
      <motion.div
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        variants={containerVariants}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <motion.div variants={itemVariants} className="mb-14 text-center md:text-left">
          <h2 className="text-4xl font-bold text-black dark:text-white mb-2">
            HPC & Applied Mathematics Skills
          </h2>
          <div className="w-24 h-1 bg-cyan-500 dark:bg-cyan-400 rounded-full mx-auto md:mx-0" />
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto md:mx-0">
            Core competencies in high-performance computing, applied mathematics, and physics for large-scale simulations and scientific computing.
          </p>
        </motion.div>

        {/* Category grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {categories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-gray-50 dark:bg-gray-800/60 rounded-3xl p-6 shadow border border-gray-100 dark:border-gray-700 flex flex-col"
            >
              <h3 className="text-xl font-semibold text-cyan-600 dark:text-cyan-400 mb-4 text-center">
                {category.name}
              </h3>

              {/* Skills */}
              <div className="flex grow flex-wrap -mx-2">
                {category.skills.map((skillItem, i) => (
                  <SkillBar
                    key={i}
                    skill={skillItem.skill}
                    percentage={skillItem.percentage}
                    icon={skillItem.icon}
                    variants={itemVariants}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HPCSkills;
