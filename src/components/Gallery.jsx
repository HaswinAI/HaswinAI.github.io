/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaCamera, FaCode, FaTrophy, FaUsers } from 'react-icons/fa';

// Dynamically import all images from the gallery directory
const imageModules = import.meta.glob('../assets/gallery/*.{png,jpg,jpeg,svg,webp}', { eager: true });

// Helper to assign mock categories to images
const categories = [
    { name: "Hackathon", icon: <FaTrophy className="text-yellow-400" /> },
    { name: "Project Demo", icon: <FaCode className="text-blue-400" /> },
    { name: "Conference", icon: <FaCamera className="text-purple-400" /> },
    { name: "Team Event", icon: <FaUsers className="text-emerald-400" /> }
];

const Gallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    // Generate the image array from dynamic imports
    const galleryImages = useMemo(() => {
        return Object.keys(imageModules).map((key, index) => ({
            id: index + 1,
            src: imageModules[key].default || imageModules[key],
            alt: `Gallery Image ${index + 1}`,
            category: categories[index % categories.length]
        }));
    }, []);

    // Split images into two rows
    const row1Images = useMemo(() => {
        const half = Math.ceil(galleryImages.length / 2);
        return galleryImages.slice(0, half);
    }, [galleryImages]);

    const row2Images = useMemo(() => {
        const half = Math.ceil(galleryImages.length / 2);
        return galleryImages.slice(half);
    }, [galleryImages]);

    // Prevent background scrolling when modal is open
    useEffect(() => {
        if (selectedImage) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [selectedImage]);

    if (galleryImages.length === 0) {
        return (
            <section id="gallery" className="relative min-h-[50vh] bg-black flex items-center justify-center">
                <p className="text-white text-xl">No gallery images found in src/assets/gallery...</p>
            </section>
        );
    }

    return (
        <section
            id="gallery"
            className="relative bg-black overflow-hidden section-padding py-24 flex flex-col justify-center items-center"
        >
            <style dangerouslySetInnerHTML={{
                __html: `
                @keyframes scrollLeft {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                }
                @keyframes scrollRight {
                    0% { transform: translateX(-50%); }
                    100% { transform: translateX(0); }
                }
                .animate-scroll-left {
                    animation: scrollLeft 80s linear infinite;
                }
                .animate-scroll-right {
                    animation: scrollRight 80s linear infinite;
                }
                /* Pause animations on hover for better UX (optional but elegant) */
                .marquee-container:hover .animate-scroll-left,
                .marquee-container:hover .animate-scroll-right {
                    animation-play-state: paused;
                }
            `}} />

            {/* Centered Title */}
            <div className="z-20 w-full mb-12 flex flex-col items-center">
                <motion.h2
                    className="text-4xl md:text-5xl font-bold mb-4 gradient-text text-center px-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Gallery Showcase
                </motion.h2>
                <motion.div
                    className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-teal-600 mb-4"
                    initial={{ width: 0 }}
                    whileInView={{ width: 64 }}
                    viewport={{ once: true }}
                />
                <motion.p
                    className="text-gray-400 max-w-2xl text-center px-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    A continuous visual journey through our events, achievements, and technical milestones.
                </motion.p>
            </div>

            {/* Two-Row Marquee Container */}
            <motion.div
                className="w-full flex flex-col gap-6 md:gap-8 marquee-container overflow-hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
            >
                {/* Row 1: Left to Right (scrollRight animation) */}
                <div className="flex animate-scroll-right w-max">
                    {/* First instance of Row 1 */}
                    <div className="flex gap-4 sm:gap-6 pr-4 sm:pr-6">
                        {row1Images.map((image) => (
                            <ImageCard key={`r1-a-${image.id}`} image={image} onSelect={setSelectedImage} />
                        ))}
                    </div>
                    {/* Second instance to create seamless loop */}
                    <div className="flex gap-4 sm:gap-6 pr-4 sm:pr-6">
                        {row1Images.map((image) => (
                            <ImageCard key={`r1-b-${image.id}`} image={image} onSelect={setSelectedImage} />
                        ))}
                    </div>
                </div>

                {/* Row 2: Right to Left (scrollLeft animation) */}
                <div className="flex animate-scroll-left w-max">
                    {/* First instance of Row 2 */}
                    <div className="flex gap-4 sm:gap-6 pr-4 sm:pr-6">
                        {row2Images.map((image) => (
                            <ImageCard key={`r2-a-${image.id}`} image={image} onSelect={setSelectedImage} />
                        ))}
                    </div>
                    {/* Second instance to create seamless loop */}
                    <div className="flex gap-4 sm:gap-6 pr-4 sm:pr-6">
                        {row2Images.map((image) => (
                            <ImageCard key={`r2-b-${image.id}`} image={image} onSelect={setSelectedImage} />
                        ))}
                    </div>
                </div>
            </motion.div>

            {/* Modal Preview */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
                        onClick={() => setSelectedImage(null)}
                    >
                        {/* Blur Backdrop */}
                        <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

                        {/* Modal Content */}
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                            className="relative max-w-5xl w-full max-h-[90vh] flex flex-col overflow-hidden rounded-2xl bg-black border border-white/10 shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-4 right-4 z-20 p-2.5 bg-black/50 hover:bg-red-500/80 rounded-full text-white transition-all backdrop-blur-sm group"
                                aria-label="Close preview"
                            >
                                <FaTimes size={20} className="group-hover:rotate-90 transition-transform duration-300" />
                            </button>

                            {/* Large Image View */}
                            <div className="relative w-full h-[60vh] sm:h-[75vh] bg-gray-900 overflow-hidden flex items-center justify-center">
                                <img
                                    src={selectedImage.src}
                                    alt={selectedImage.alt}
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            {/* Caption Footer */}
                            <div className="bg-gray-950 p-5 px-6 sm:px-8 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center sm:items-start gap-4 z-10 shrink-0">
                                <div className="flex items-center gap-3">
                                    <div className="p-3 rounded-full bg-white/5 border border-white/10">
                                        {selectedImage.category.icon}
                                    </div>
                                    <div>
                                        <h4 className="text-white font-semibold text-lg">{selectedImage.category.name}</h4>
                                        <p className="text-gray-400 text-sm">Portfolio Capture</p>
                                    </div>
                                </div>
                                <div className="hidden sm:block text-right">
                                    <span className="text-xs tracking-widest text-gray-500 uppercase font-bold">Image {selectedImage.id} of {galleryImages.length}</span>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

// Extracted reusable ImageCard component
const ImageCard = ({ image, onSelect }) => {
    return (
        <div
            onClick={() => onSelect(image)}
            className="
                group relative cursor-pointer flex-shrink-0 
                rounded-2xl overflow-hidden bg-gray-900 border border-gray-800 
                transition-all duration-300 ease-out
                hover:scale-[1.04] hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:border-cyan-500/50 hover:z-10
                h-[180px] sm:h-[220px] md:h-[240px]
                w-[260px] sm:w-[320px] md:w-[350px]
            "
        >
            <img
                src={image.src}
                alt={image.alt}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out"
            />
            {/* Soft dark overlay at bottom for the tag */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-4">
                <div className="flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {image.category.icon}
                    <span className="text-white text-sm font-medium tracking-wide shadow-sm">
                        {image.category.name}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
