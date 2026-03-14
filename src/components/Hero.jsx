/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
import { useStaggeredReveal } from '../hooks/useAnimation';
import ParticlesBackground from './ParticlesBackground';
import TypewriterText from './TypewriterText';
import { FaGithub, FaLinkedin, FaYoutube, FaInstagram, FaPython, FaJava, FaDatabase, FaServer, FaBrain } from 'react-icons/fa';
import { addOptimizedScrollListener } from '../utils/scrollUtils';
import heroProfileImg from '../assets/hero_profile.jpg';

const Hero = () => {
  const { container, item } = useStaggeredReveal(0.3);



  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/HaswinAI', icon: FaGithub },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/HaswinAI/', icon: FaLinkedin },
    { name: 'YouTube', url: 'https://www.youtube.com/@coderconnects', icon: FaYoutube },
    { name: 'Instagram', url: 'https://www.instagram.com/trending_haswin/', icon: FaInstagram }
  ];

  useEffect(() => {
    // Set active section on mount
    const handleScroll = () => {
      const heroSection = document.getElementById('hero');
      if (heroSection) {
        const rect = heroSection.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          // Update active section in context if needed
        }
      }
    };

    const cleanup = addOptimizedScrollListener(handleScroll, handleScroll, 100);
    return cleanup;
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-black">
      <ParticlesBackground />

      {/* Enhanced Floating Tech Logos Animation - More programming languages */}
      <div className="absolute inset-0 z-30 overflow-hidden pointer-events-none">
        {[
          { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", top: "10%", size: 12, duration: 30, delay: 0 },
          { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", top: "25%", size: 12, duration: 28, delay: 3 },
          { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", top: "80%", size: 14, duration: 35, delay: 1 },
          { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", top: "60%", size: 12, duration: 32, delay: 2 },
          { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", top: "40%", size: 12, duration: 25, delay: 4 },
          { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", top: "70%", size: 12, duration: 27, delay: 5 },
          { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", top: "30%", size: 10, duration: 30, delay: 6 },
          { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", top: "50%", size: 10, duration: 29, delay: 7 },
          { icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", top: "20%", size: 10, duration: 31, delay: 8 },
        ].map((logoItem, index) => (
          <motion.div
            key={index}
            className="absolute opacity-20 transition-all duration-300 pointer-events-none"
            initial={{ x: -100, y: (index % 3) * 10 }}
            animate={{ x: "120vw" }}
            transition={{
              x: {
                repeat: Infinity,
                duration: logoItem.duration,
                ease: "linear",
                delay: logoItem.delay,
              },
            }}
            style={{
              top: logoItem.top,
              width: `${logoItem.size * 3}px`,
              height: `${logoItem.size * 3}px`
            }}
            whileHover={{
              scale: 1.2,
              opacity: 1,
              zIndex: 10,
              filter: "brightness(1.5) saturate(1.5)"
            }}
          >
            <img src={logoItem.icon} alt="tech-logo" className="w-full h-full object-contain" draggable={false} />
          </motion.div>
        ))}
      </div>



      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16 lg:pt-0">
        {/* Changed flex-col-reverse to flex-col to keep image on top in mobile */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
        >
          {/* Central Image (appears first on mobile, right grid on desktop) */}
          <motion.div
            variants={item}
            className="relative flex justify-center lg:justify-end lg:order-last order-first mt-8 lg:mt-0"
          >
            {/* Small round on mobile, larger standard shape on desktop */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-[80%] lg:max-w-[400px] lg:h-auto flex items-center justify-center py-2 lg:py-10 scale-100 lg:scale-95 origin-center transition-transform duration-500"
            >
              <div className="relative z-0 w-full h-full lg:h-auto rounded-full overflow-hidden lg:rounded-none ring-4 ring-cyan-500/30 lg:ring-0 shadow-lg shadow-cyan-500/20 lg:shadow-none">
                <img
                  src={heroProfileImg}
                  alt="Intro Profile"
                  className="w-full h-full object-cover lg:object-contain object-top"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Text Content */}
          <div className="text-center lg:text-left order-last lg:order-first">
            <motion.div variants={item} className="mb-6 hidden lg:block">
              {/* Hide "Hello I'm" badge on mobile for better space usage, show on large screens */}
              <span className="inline-block px-4 py-2 bg-cyan-500/10 text-cyan-400 rounded-full text-sm font-medium mb-4 border border-cyan-500/20">
                Hello, I'm
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="text-5xl md:text-6xl lg:text-7xl lg:text-[5rem] xl:text-[6rem] font-bold mb-4 lg:mb-6 leading-tight pb-2"
            >
              <div
                className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-500 font-sans font-bold"
                style={{ textShadow: "0 0 25px rgba(6, 182, 212, 0.4)" }}
              >
                Haswin Raj
              </div>
            </motion.h1>

            <motion.div variants={item} className="mb-6 lg:mb-8 font-mono">
              <h2 className="text-lg md:text-xl lg:text-2xl font-medium text-gray-300 h-[30px] md:h-auto">
                <TypewriterText
                  text="Aspiring Software Engineer | Backend & AIML Enthusiast"
                  speed={50}
                  delay={500}
                  className="text-cyan-100"
                />
              </h2>

              {/* Tech Stack Line */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 mt-4 mb-2">
                <div className="flex items-center gap-2 text-gray-300 bg-gray-900/60 px-3 py-1.5 rounded-full border border-gray-800 transition-colors hover:border-cyan-500/50">
                  <FaPython className="text-blue-400" /> <span className="text-xs md:text-sm">Python</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300 bg-gray-900/60 px-3 py-1.5 rounded-full border border-gray-800 transition-colors hover:border-cyan-500/50">
                  <FaJava className="text-orange-400" /> <span className="text-xs md:text-sm">Java</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300 bg-gray-900/60 px-3 py-1.5 rounded-full border border-gray-800 transition-colors hover:border-cyan-500/50">
                  <FaBrain className="text-purple-400" /> <span className="text-xs md:text-sm">Machine Learning</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300 bg-gray-900/60 px-3 py-1.5 rounded-full border border-gray-800 transition-colors hover:border-cyan-500/50">
                  <FaServer className="text-green-400" /> <span className="text-xs md:text-sm">Backend</span>
                </div>
                <div className="flex items-center gap-2 text-gray-300 bg-gray-900/60 px-3 py-1.5 rounded-full border border-gray-800 transition-colors hover:border-cyan-500/50">
                  <FaDatabase className="text-yellow-400" /> <span className="text-xs md:text-sm">Data Structures</span>
                </div>
              </div>

              <div className="w-16 lg:w-24 h-1 bg-gradient-to-r from-cyan-500 to-teal-600 mt-6 mx-auto lg:mx-0 rounded-full"></div>
            </motion.div>

            <motion.p
              variants={item}
              className="text-base lg:text-lg text-gray-400 mb-8 lg:mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              I enjoy building practical applications and exploring modern technologies. Passionate about backend development, problem solving, and creating intelligent solutions through continuous learning and experimentation.
            </motion.p>

            <motion.div variants={item} className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
              <motion.button
                onClick={() => {
                  const element = document.getElementById('projects');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="relative px-8 py-3.5 bg-gradient-to-r from-cyan-500 to-teal-600 rounded-full font-medium transition-all duration-300 text-white overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Gradient Glowing Border Effect */}
                <div className="absolute inset-0 rounded-full border border-white/20 group-hover:border-cyan-300/60 transition-colors duration-300"></div>
                <div className="absolute inset-0 rounded-full shadow-[0_0_15px_rgba(6,182,212,0.5)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <span className="relative z-10 font-sans tracking-wide">View My Projects</span>
              </motion.button>

              <motion.a
                href="/resume.pdf"
                download="Haswin_Raj_Resume.pdf"
                className="px-8 py-3.5 border-2 border-gray-700 text-gray-300 rounded-full font-medium transition-all duration-300 hover:border-cyan-500/80 hover:text-white hover:bg-cyan-500/10 flex items-center justify-center shadow-lg hover:shadow-cyan-500/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="font-sans tracking-wide">Download Resume</span>
              </motion.a>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={item} className="flex justify-center lg:justify-start space-x-6 mt-10 lg:mt-12">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative group"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <div className="absolute inset-0 bg-cyan-500/20 blur-md rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl overflow-hidden group-hover:border-cyan-500/50 transition-all duration-300">
                    <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <link.icon className="w-5 h-5 lg:w-6 lg:h-6 text-gray-300 group-hover:text-cyan-400 transition-colors z-10" />

                    {/* Screen scanline effect */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent -translate-y-full group-hover:translate-y-full transition-transform duration-1000 ease-in-out pointer-events-none" />
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </div>

        </motion.div>

        {/* Scroll Indicator - Optimized */}
        <motion.div
          className="absolute bottom-4 lg:bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block" // Hidden on very small screens to save space
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <div className="flex flex-col items-center text-gray-400">
            <span className="text-xs lg:text-sm mb-2">Scroll to explore</span>
            <div className="w-5 h-8 lg:w-6 lg:h-10 border-2 border-gray-400 rounded-full flex justify-center relative overflow-hidden">
              <motion.div
                className="w-1 h-2 lg:h-3 bg-gray-400 rounded-full mt-2 absolute top-1 lg:top-2"
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;