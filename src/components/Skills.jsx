/* eslint-disable no-unused-vars */

/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import ParticlesBackground from './ParticlesBackground';
import { FaReact, FaPython, FaJava, FaNodeJs, FaBrain, FaDatabase, FaCode, FaServer, FaCogs, FaTools, FaRobot } from 'react-icons/fa';
import { SiSwift, SiTensorflow, SiPytorch, SiFastapi, SiFlask, SiMysql, SiMongodb, SiPandas, SiNumpy, SiGit, SiGithub, SiDocker, SiN8N, SiCanva } from 'react-icons/si';

/* ─── Skill Data ─────────────────────────────────────────── */
/* ─── Skill Data ─────────────────────────────────────────── */
const categories = [
  {
    id: 'programming',
    label: 'Programming',
    icon: FaCode,
    accent: '#3b82f6', // blue-500
    glow: 'rgba(59, 130, 246, 0.15)',
    skills: [
      { name: 'Python', icon: FaPython },
      { name: 'Java', icon: FaJava },
      { name: 'Swift', icon: SiSwift },
    ],
  },
  {
    id: 'ai-ml',
    label: 'AI & Machine Learning',
    icon: FaBrain,
    accent: '#8b5cf6', // violet-500
    glow: 'rgba(139, 92, 246, 0.15)',
    skills: [
      { name: 'Machine Learning', icon: FaBrain },
      { name: 'Deep Learning', icon: FaBrain },
      { name: 'TensorFlow', icon: SiTensorflow },
      { name: 'PyTorch', icon: SiPytorch },
    ],
  },
  {
    id: 'gen-ai',
    label: 'Generative AI',
    icon: FaRobot,
    accent: '#ec4899', // pink-500
    glow: 'rgba(236, 72, 153, 0.15)',
    skills: [
      { name: 'Large Language Models (LLMs)', icon: FaRobot },
      { name: 'LangChain', icon: FaCogs },
      { name: 'Prompt Engineering', icon: FaRobot },
      { name: 'AI Agents', icon: FaRobot },
    ],
  },
  {
    id: 'backend',
    label: 'Backend Development',
    icon: FaServer,
    accent: '#10b981', // emerald-500
    glow: 'rgba(16, 185, 129, 0.15)',
    skills: [
      { name: 'FastAPI', icon: SiFastapi },
      { name: 'Flask', icon: SiFlask },
      { name: 'Node.js', icon: FaNodeJs },
    ],
  },
  {
    id: 'databases',
    label: 'Data & Databases',
    icon: FaDatabase,
    accent: '#f59e0b', // amber-500
    glow: 'rgba(245, 158, 11, 0.15)',
    skills: [
      { name: 'MySQL', icon: SiMysql },
      { name: 'MongoDB', icon: SiMongodb },
      { name: 'Pandas', icon: SiPandas },
      { name: 'NumPy', icon: SiNumpy },
    ],
  },
  {
    id: 'tools',
    label: 'Tools & Workflows',
    icon: FaTools,
    accent: '#06b6d4', // cyan-500
    glow: 'rgba(6, 182, 212, 0.15)',
    skills: [
      { name: 'Git', icon: SiGit },
      { name: 'GitHub', icon: SiGithub },
      { name: 'Docker', icon: SiDocker },
      { name: 'N8N', icon: SiN8N },
      { name: 'Canva', icon: SiCanva },
    ],
  },
];

/* ─── Category Card ───────────────────────────────────────── */
const CategoryCard = ({ cat, index }) => {
  const Icon = cat.icon;

  return (
    <motion.div
      className="relative bg-gray-900/40 backdrop-blur-md border rounded-2xl p-6 overflow-hidden group"
      style={{ borderColor: 'rgba(75,85,99,0.3)' }}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5, borderColor: cat.accent + '88', boxShadow: `0 10px 30px ${cat.glow}` }}
    >
      {/* Top subtle gradient string */}
      <div
        className="absolute top-0 left-0 h-1 w-full opacity-50 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, transparent, ${cat.accent}, transparent)` }}
      />

      {/* Header */}
      <div className="flex items-center gap-4 mb-5 relative z-10">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center border transition-all duration-300 group-hover:scale-110"
          style={{ background: cat.glow, borderColor: cat.accent + '40' }}
        >
          <Icon style={{ color: cat.accent }} className="text-2xl" />
        </div>
        <h3 className="text-white font-bold text-lg tracking-wide">{cat.label}</h3>
      </div>

      {/* Skill Chips */}
      <div className="flex flex-wrap gap-2.5 relative z-10">
        {cat.skills.map((sk, si) => (
          <span
            key={si}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full text-sm font-medium border transition-colors duration-300"
            style={{
              borderColor: 'rgba(75,85,99,0.4)',
              color: '#d1d5db',
              background: 'rgba(17,24,39,0.5)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = cat.accent + '66';
              e.currentTarget.style.color = cat.accent;
              e.currentTarget.style.background = cat.glow;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(75,85,99,0.4)';
              e.currentTarget.style.color = '#d1d5db';
              e.currentTarget.style.background = 'rgba(17,24,39,0.5)';
            }}
          >
            <sk.icon className="text-[14px]" style={{ color: 'inherit' }} />
            {sk.name}
          </span>
        ))}
      </div>

      {/* Decorative Glow background */}
      <div
        className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-500 blur-2xl"
        style={{ background: cat.accent }}
      />
    </motion.div>
  );
};

/* ─── Main ────────────────────────────────────────────────── */
const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-black relative overflow-hidden py-24">
      <ParticlesBackground />

      <div className="max-w-6xl mx-auto px-4 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.p
            className="text-cyan-400 font-mono text-sm tracking-[0.25em] uppercase mb-3"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Tech Stack
          </motion.p>
          <h2 className="text-4xl md:text-5xl font-bold mb-5 gradient-text">Skills & Expertise</h2>
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-600 mx-auto"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <p className="text-gray-400 text-sm mt-4">A showcase of tools, languages, and frameworks I use.</p>
        </motion.div>

        {/* Cards Grid: 2 columns on tablet/desktop, 1 column on mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {categories.map((cat, i) => (
            <CategoryCard
              key={cat.id}
              cat={cat}
              index={i}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
