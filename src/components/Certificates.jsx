/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
/* eslint-disable no-unused-vars */
import { motion, AnimatePresence } from 'framer-motion';
import ParticlesBackground from './ParticlesBackground';

const Certificates = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // List all certification images from both folders
  const certificateImages = [
    // Haswin_Archievements folder
    '/certifications/Haswin_Archievements/Haswin_Archievements_page-0001.jpg',
    '/certifications/Haswin_Archievements/Haswin_Archievements_page-0002.jpg',
    '/certifications/Haswin_Archievements/Haswin_Archievements_page-0003.jpg',

    // Haswin_online_certifications folder
    '/certifications/Haswin_online_certifications/Haswin_online_certifications_page-0001.jpg',
    '/certifications/Haswin_online_certifications/Haswin_online_certifications_page-0002.jpg',
    '/certifications/Haswin_online_certifications/Haswin_online_certifications_page-0003.jpg',
    '/certifications/Haswin_online_certifications/Haswin_online_certifications_page-0004.jpg',
    '/certifications/Haswin_online_certifications/Haswin_online_certifications_page-0005.jpg',
    '/certifications/Haswin_online_certifications/Haswin_online_certifications_page-0006.jpg',
    '/certifications/Haswin_online_certifications/Haswin_online_certifications_page-0007.jpg',
    '/certifications/Haswin_online_certifications/Haswin_online_certifications_page-0008.jpg',
    '/certifications/Haswin_online_certifications/Haswin_online_certifications_page-0009.jpg',
    '/certifications/Haswin_online_certifications/Haswin_online_certifications_page-0010.jpg',
    '/certifications/Haswin_online_certifications/Haswin_online_certifications_page-0011.jpg',
    '/certifications/Haswin_online_certifications/Haswin_online_certifications_page-0012.jpg',
    '/certifications/Haswin_online_certifications/Haswin_online_certifications_page-0013.jpg',
    '/certifications/Haswin_online_certifications/Haswin_online_certifications_page-0014.jpg',
    '/certifications/Haswin_online_certifications/Haswin_online_certifications_page-0015.jpg',
    '/certifications/Haswin_online_certifications/Haswin_online_certifications_page-0016.jpg',
    '/certifications/Haswin_online_certifications/Haswin_online_certifications_page-0017.jpg',
    '/certifications/Haswin_online_certifications/Haswin_online_certifications_page-0018.jpg',
    '/certifications/Haswin_online_certifications/Haswin_online_certifications_page-0019.jpg',
    '/certifications/Haswin_online_certifications/Haswin_online_certifications_page-0020.jpg',
    '/certifications/Haswin_online_certifications/Haswin_online_certifications_page-0021.jpg',
    '/certifications/Haswin_online_certifications/Haswin_online_certifications_page-0022.jpg',
    '/certifications/Haswin_online_certifications/Haswin_online_certifications_page-0023.jpg',
    '/certifications/Haswin_online_certifications/Haswin_online_certifications_page-0024.jpg',
    '/certifications/Haswin_online_certifications/Haswin_online_certifications_page-0025.jpg',
    '/certifications/Haswin_online_certifications/Haswin_online_certifications_page-0026.jpg',
  ];

  // Auto-advance slideshow every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        (prevIndex + 1) % certificateImages.length
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [certificateImages.length]);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex + 1) % certificateImages.length
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prevIndex) =>
      (prevIndex - 1 + certificateImages.length) % certificateImages.length
    );
  };

  const goToImage = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <section id="certificates" className="section-padding bg-black relative overflow-hidden min-h-screen flex items-center">
      <ParticlesBackground />

      <div className="max-w-7xl mx-auto w-full relative z-10 py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            My Certifications
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Browse through my certifications and achievements
          </p>
        </motion.div>

        {/* Slideshow Container */}
        <div className="relative max-w-4xl mx-auto">
          {/* Main Image Display */}
          <div className="relative bg-gray-900/50 rounded-xl p-4 border border-gray-700/50 backdrop-blur-sm overflow-hidden min-h-[40vh] md:min-h-[50vh] flex items-center justify-center">

            <AnimatePresence mode="wait">
              <motion.div
                key={currentImageIndex}
                initial={{ opacity: 0, x: 20, filter: 'blur(10px) hue-rotate(90deg)' }}
                animate={{ opacity: 1, x: 0, filter: 'blur(0px) hue-rotate(0deg)' }}
                exit={{ opacity: 0, x: -20, filter: 'blur(10px) hue-rotate(-90deg)' }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="relative w-full flex justify-center"
              >
                <img
                  src={certificateImages[currentImageIndex]}
                  alt={`Certificate ${currentImageIndex + 1}`}
                  className="w-full h-auto max-h-[45vh] md:max-h-[55vh] object-contain mx-auto drop-shadow-2xl"
                  onError={(e) => {
                    e.target.src = '/HASWIN.jpeg'; // Fallback image
                  }}
                />
              </motion.div>
            </AnimatePresence>

            {/* Image Counter */}
            <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-xs font-medium z-10 border border-white/10">
              {currentImageIndex + 1} / {certificateImages.length}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-between items-center mt-8">
            {/* Previous Button */}
            <motion.button
              onClick={prevImage}
              className="flex items-center space-x-2 px-6 py-3 bg-gray-800/50 hover:bg-gray-700/50 rounded-full border border-gray-600/50 text-gray-300 hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              <span>Previous</span>
            </motion.button>

            {/* Next Button */}
            <motion.button
              onClick={nextImage}
              className="flex items-center space-x-2 px-6 py-3 bg-gray-800/50 hover:bg-gray-700/50 rounded-full border border-gray-600/50 text-gray-300 hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Next</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Certificates;