/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
/* eslint-disable no-unused-vars */
import { useScrollReveal } from '../hooks/useAnimation';
import ParticlesBackground from './ParticlesBackground';
import { FaUniversity, FaCode, FaLayerGroup, FaPython, FaBrain, FaRobot } from 'react-icons/fa';
import CollegeLogo from '../assets/college_logo.png';
import aboutProfileImg from '../assets/about_profile.jpg';

const About = () => {
  const { controls, variants } = useScrollReveal();

  const floatingItems = [
    // Top Lane (~10-20%)
    { image: CollegeLogo, label: "Panimalar Engineering College", top: "12%", size: 60, duration: 35, delay: 0 },
    { icon: FaLayerGroup, label: "Full Stack Engineering", top: "18%", size: 35, duration: 30, delay: 5 },

    // Middle Lane (~40-50%)
    { icon: FaBrain, label: "Artificial Intelligence", top: "45%", size: 30, duration: 32, delay: 2 },
    { icon: FaPython, label: "Python Development", top: "52%", size: 45, duration: 28, delay: 8 },

    // Bottom Lane (~75-85%)
    { icon: FaCode, label: "Web Development", top: "80%", size: 30, duration: 38, delay: 4 },
    { icon: FaRobot, label: "Machine Learning", top: "85%", size: 35, duration: 34, delay: 10 },
  ];

  const education = {
    degree: "B.Tech(Hons) \nArtificial Intelligence and Machine Learning",
    college: "Panimalar Engineering College",
    year: "2023 - 2027 (Current)",
    gpa: "8.65 CGPA"
  };

  const achievements = [
    "Winner – Aviskar National Level Conference 2025",
    "Top 10 – Ideathon 2023 (50+ teams)",
    "SIH 2025 Intra College Winner",
    "Research Paper Presenter – ICONIC International Conference (2024 & 2025)"
  ];


  const interests = [
    "Backend Development",
    "Artificial Intelligence",
    "Machine Learning",
    "Generative AI",
    "Large Language Models",
    "Problem Solving"
  ];

  return (
    <section id="about" className="section-padding bg-black relative overflow-hidden">
      <ParticlesBackground />

      {/* Floating Icons Animation */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {floatingItems.map((item, index) => (
          <motion.div
            key={index}
            className="absolute opacity-20 hover:opacity-100 hover:z-20 hover:scale-110 transition-all duration-300 cursor-pointer flex flex-col items-center justify-center text-cyan-500/50 hover:text-cyan-400 pointer-events-auto"
            initial={{ x: "-20vw", opacity: 0 }}
            animate={{
              x: "110vw",
              opacity: [0, 0.4, 0.4, 0]
            }}
            transition={{
              x: {
                repeat: Infinity,
                duration: item.duration,
                ease: "linear",
                delay: item.delay,
              },
              opacity: {
                duration: item.duration,
                times: [0, 0.1, 0.9, 1],
                repeat: Infinity,
                delay: item.delay,
              }
            }}
            style={{
              top: item.top,
            }}
            whileHover={{
              scale: 1.1,
              filter: "brightness(1.5) saturate(1.5)"
            }}
          >
            {item.image ? (
              <img
                src={item.image}
                alt={item.label}
                className="w-16 h-16 object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 pointer-events-auto"
              />
            ) : item.icon ? (
              <item.icon size={item.size} className="hover:drop-shadow-[0_0_10px_rgba(34,211,238,0.8)] transition-all duration-300" />
            ) : null}
            <span className="text-xs mt-2 whitespace-nowrap font-mono">{item.label}</span>
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={variants}
        >
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl md:text-5xl font-bold mb-6 gradient-text"
              variants={variants}
            >
              About Me
            </motion.h2>
            <motion.div
              className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"
              variants={variants}
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mt-8">
            {/* Left Column: Image & Intro */}
            <motion.div
              className="relative flex flex-col items-center lg:items-start xl:pl-4"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Increased Desktop Size to fill space */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[420px] xl:h-[420px] mx-auto lg:mx-0 mb-8 lg:mb-12">
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="w-full h-full lg:rounded-none rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/20 lg:shadow-none border border-cyan-500/30 lg:border-none lg:bg-transparent">
                    <img
                      src={aboutProfileImg}
                      alt="Haswin Raj"
                      className="w-full h-full object-cover object-center lg:object-contain filter hover:brightness-110 transition-all duration-300 mix-blend-lighten"
                    />
                  </div>
                </div>

                {/* Decorative Elements */}
                <motion.div
                  className="absolute -top-6 -right-6 w-24 h-24 bg-cyan-500/10 rounded-full blur-xl z-0"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -bottom-6 -left-6 w-20 h-20 bg-teal-500/10 rounded-full blur-xl z-0"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                />
              </div>

              <div className="w-full">
                <p className="text-gray-300 leading-relaxed text-base sm:text-lg text-center lg:text-left">
                  I am an AIML undergraduate passionate about building practical software and exploring modern technologies.
                  I enjoy backend development, working on AI-based projects, and improving my problem-solving skills
                  through Data Structures and Algorithms. I like participating in hackathons, research activities,
                  and collaborative projects that help me apply technology to real-world problems.
                </p>
              </div>
            </motion.div>

            {/* Right Column: Details */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="space-y-8 lg:space-y-10">

                {/* Education Card */}
                <div>
                  <h4 className="text-xl lg:text-2xl font-bold text-white mb-4 lg:mb-5 flex items-center">
                    <FaUniversity className="text-cyan-400 mr-3" /> Education
                  </h4>
                  <motion.div
                    className="bg-gray-900/50 rounded-2xl p-5 border border-gray-800 hover:border-cyan-500/40 relative overflow-hidden group"
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="relative z-10">
                      <h5 className="text-lg sm:text-xl font-bold text-gray-100 mb-1 leading-tight whitespace-pre-line">{education.degree}</h5>
                      <p className="text-cyan-400 font-medium mb-4 mt-2">{education.college}</p>
                      <div className="flex flex-wrap gap-3">
                        <span className="px-3 py-1 bg-gray-800 text-gray-300 rounded-lg text-sm font-mono border border-gray-700">
                          {education.year}
                        </span>
                        <span className="px-3 py-1 bg-cyan-500/10 text-cyan-300 rounded-lg text-sm font-mono border border-cyan-500/20">
                          {education.gpa}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="text-xl lg:text-2xl font-bold text-white mb-4 lg:mb-5 flex items-center">
                    <span className="text-cyan-400 mr-3 text-xl">🏆</span> Achievements
                  </h4>
                  <div className="grid grid-cols-1 gap-2">
                    {achievements.map((achievement, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start space-x-3 p-3 bg-gray-900/40 border border-gray-800/60 rounded-xl hover:bg-gray-800/60 transition-colors"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2.5 shrink-0 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
                        <span className="text-gray-300 leading-snug text-sm">{achievement}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>


                {/* Interests */}
                <div>
                  <h4 className="text-xl lg:text-2xl font-bold text-white mb-4 lg:mb-5 flex items-center">
                    <FaBrain className="text-cyan-400 mr-3" /> Areas of Interest
                  </h4>
                  <div className="flex flex-wrap gap-2.5">
                    {interests.map((interest, index) => (
                      <motion.span
                        key={index}
                        className="px-3.5 py-1.5 bg-gradient-to-r from-cyan-500/10 to-teal-600/10 text-cyan-300 rounded-full text-sm border border-cyan-500/20"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{
                          scale: 1.05,
                          backgroundColor: "rgba(6, 182, 212, 0.15)",
                          borderColor: "rgba(6, 182, 212, 0.4)"
                        }}
                      >
                        {interest}
                      </motion.span>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;