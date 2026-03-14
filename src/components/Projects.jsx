/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ParticlesBackground from './ParticlesBackground';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaCode } from 'react-icons/fa';

//Optional: you can place your images in src/assets/projects/ directory
import ragImg from '../assets/projects/rag.png';
import emotionImg from '../assets/projects/emotion.png';
import jobImg from '../assets/projects/job_role.png';
import medicalImg from '../assets/projects/medical.png';
import audioImg from '../assets/projects/audio.png';
import salesImg from '../assets/projects/sales.png';


const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  // Helper to generate deterministic random gradients based on project ID fallback
  const getGradient = (id) => {
    const gradients = [
      "from-purple-600 to-blue-600",
      "from-cyan-500 to-blue-500",
      "from-pink-500 to-rose-500",
      "from-emerald-500 to-teal-500",
      "from-orange-500 to-red-500",
      "from-indigo-500 to-purple-500",
    ];
    return gradients[(id - 1) % gradients.length];
  };

  const projects = [
    {
      id: 1,
      title: "RAG Chatbot",
      description: "A state-of-the-art Retrieval-Augmented Generation (RAG) chatbot capable of providing intelligent, accurate context-aware answers extracted from uploaded PDF documents. Built with LangChain, LLaMA 3 via Groq LLMs, FAISS vector store, and HuggingFace Embeddings, featuring a highly interactive Streamlit user interface.",
      tags: ["Python", "LangChain", "Groq AI", "FAISS", "Streamlit"],
      github: "https://github.com/HaswinAI/RAG_chatbot",
      demo: "#",
      image: ragImg,
    },
    {
      id: 2,
      title: "Smart Job Role Analyzer",
      description: "An AI-powered web platform designed to analyze resumes and predict the most suitable job role for the applicant. Leverages advanced Natural Language Processing (NLP) techniques and robust Machine Learning algorithms to match skills, experience, and terminology to industry job descriptions.",
      tags: ["Python", "NLP", "Scikit-learn", "Data Science"],
      github: "https://github.com/HaswinAI/Smart-job-role-analyser",
      demo: "#",
      image: jobImg,
    },
    {
      id: 3,
      title: "Medical Image Analyzer",
      description: "A smart diagnostic support system for radiology that integrates complex hybrid deep learning architectures. This AI application assists in rapidly processing medical imagery (X-rays, MRIs) to identify patterns indicative of critical diseases, providing supplementary decision support for medical practitioners.",
      tags: ["Deep Learning", "TensorFlow", "Computer Vision", "AI"],
      github: "https://github.com/HaswinAI/Medical_imaging_analyzer",
      demo: "#",
      image: medicalImg,
    },
    {
      id: 4,
      title: "Emotion Detection",
      description: "A highly responsive Python-based emotion recognition system utilizing machine learning and DSP algorithms to analyze human speech patterns and vocal tones. It accurately classifies emotional states from audio recordings and displays confidence metrics on a sleek Streamlit dashboard.",
      tags: ["Python", "Librosa", "TensorFlow", "Signal Processing"],
      github: "https://github.com/HaswinAI/Emotion-detection-project",
      demo: "#",
      image: emotionImg,
    },
    {
      id: 5,
      title: "Audio Transcription",
      description: "A real-time speech-to-text conversion engine leveraging the Google Web Speech API and SpeechRecognition library. The application captures live microphone input or processes audio files to generate highly accurate textual transcripts asynchronously.",
      tags: ["Python", "SpeechRecognition", "Audio Analysis"],
      github: "https://github.com/HaswinAI/Audio-transcription",
      demo: "#",
      image: audioImg,
    },
    {
      id: 6,
      title: "Recommendation & Negotiation Assistance",
      description: "An advanced real-time AI sales intelligence system architecture that dynamically provides personalized deal recommendations and active negotiation assistance. Uses sophisticated Large Language Models to simulate and support complex B2B sales scenarios.",
      tags: ["Python", "LLMs", "Groq AI", "Sales Tech"],
      github: "https://github.com/HaswinAI/Recommendation-and-negotiation",
      demo: "#",
      image: salesImg,
    }
  ];

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedProject]);

  return (
    <section id="projects" className="section-padding bg-black relative min-h-screen py-20">
      <ParticlesBackground />

      <div className="max-w-7xl mx-auto relative z-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">My Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8" />
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A curated showcase of my impactful work in AI, Machine Learning, and Intelligent Web Applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-gray-900/40 backdrop-blur-md rounded-2xl overflow-hidden border border-gray-700/50 hover:border-blue-500/80 transition-all duration-300 group flex flex-col h-full cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, boxShadow: "0 10px 40px -10px rgba(59, 130, 246, 0.4)" }}
              onClick={() => setSelectedProject(project)}
            >
              <div className={`h-40 sm:h-56 w-full relative overflow-hidden group-hover:scale-105 transition-transform duration-500 ${!project.image && `bg-gradient-to-br ${getGradient(project.id)}`}`}>
                {project.image ? (
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center opacity-40 group-hover:opacity-60 transition-opacity">
                    <FaCode size={60} className="text-white" />
                  </div>
                )}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
              </div>

              <div className="p-4 sm:p-6 flex-1 flex flex-col">
                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-2 sm:mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-xs sm:text-sm mb-4 sm:mb-6 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a
            href="https://github.com/HaswinAI?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-full transition-colors border border-gray-700 hover:border-blue-500"
          >
            <FaGithub size={20} />
            <span>Explore My Full GitHub</span>
          </a>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 pt-10 pb-10 sm:p-0"
            onClick={() => setSelectedProject(null)}
          >
            {/* Modal Backdrop with Blur */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", bounce: 0, duration: 0.3 }}
              className="relative bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl overflow-hidden max-w-4xl w-full max-h-[90vh] flex flex-col sm:flex-row my-auto z-10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-20 p-2 bg-black/40 hover:bg-red-500/80 rounded-full text-white transition-colors"
                aria-label="Close modal"
              >
                <FaTimes size={20} />
              </button>

              {/* Image Section */}
              <div className={`sm:w-2/5 flex-shrink-0 relative overflow-hidden ${!selectedProject.image && `bg-gradient-to-br ${getGradient(selectedProject.id)}`}`}>
                {selectedProject.image ? (
                  <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-48 sm:h-full object-cover" />
                ) : (
                  <div className="w-full h-48 sm:h-full flex items-center justify-center opacity-50 relative">
                    <div className="absolute inset-0 bg-black/30" />
                    <FaCode size={80} className="text-white relative z-10" />
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="p-6 sm:p-8 flex flex-col flex-1 overflow-y-auto custom-scrollbar">
                <h3 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h3>

                <div className="flex flex-wrap gap-2 mb-6 mt-3">
                  {selectedProject.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mb-8 text-gray-300 leading-relaxed text-[15px]">
                  <p>{selectedProject.description}</p>
                </div>

                {/* Actions */}
                <div className="mt-auto pt-6 border-t border-gray-800 flex flex-wrap gap-4">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white rounded-lg transition-colors border border-gray-700 hover:border-gray-500 flex-1 justify-center sm:flex-none font-medium"
                  >
                    <FaGithub size={18} />
                    <span>Source Code</span>
                  </a>

                  {selectedProject.demo && selectedProject.demo !== "#" ? (
                    <a
                      href={selectedProject.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors shadow-lg shadow-blue-500/20 flex-1 justify-center sm:flex-none font-medium"
                    >
                      <FaExternalLinkAlt size={16} />
                      <span>Live Demo</span>
                    </a>
                  ) : (
                    <span
                      className="flex items-center space-x-2 px-6 py-3 bg-gray-800/50 text-gray-500 rounded-lg border border-gray-800 flex-1 justify-center sm:flex-none cursor-not-allowed font-medium"
                      title="Demo currently unavailable"
                    >
                      <FaExternalLinkAlt size={16} />
                      <span>Demo Not Available</span>
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
