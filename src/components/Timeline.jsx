/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';
/* eslint-disable no-unused-vars */
import { useScrollReveal } from '../hooks/useAnimation';
import ParticlesBackground from './ParticlesBackground';
import { FaPython, FaBrain, FaNetworkWired, FaEye, FaRobot } from 'react-icons/fa';

const Timeline = () => {
    const { variants } = useScrollReveal();

    const timelineData = [
        {
            id: "01",
            title: "Foundations",
            subtitle: "Python & Data Structures",
            description: "Mastered core programming concepts, data structures (DSA), and Python libraries like NumPy and Pandas for data manipulation.",
            icon: <FaPython />,
            isRight: false
        },
        {
            id: "02",
            title: "Machine Learning",
            subtitle: "Scikit-learn & Algorithms",
            description: "Built predictive models using regression, classification, and clustering algorithms. Gained proficiency in Scikit-learn and model evaluation.",
            icon: <FaBrain />,
            isRight: true
        },
        {
            id: "03",
            title: "Deep Learning",
            subtitle: "Neural Networks & TensorFlow",
            description: "Explored Artificial Neural Networks (ANNs), CNNs, and RNNs. Developed deep learning models using TensorFlow and Keras.",
            icon: <FaNetworkWired />,
            isRight: false
        },
        {
            id: "04",
            title: "Computer Vision",
            subtitle: "OpenCV & Object Detection",
            description: "Implemented image processing techniques, face detection, and object recognition systems using OpenCV and YOLO.",
            icon: <FaEye />,
            isRight: true
        },
        {
            id: "05",
            title: "Generative AI",
            subtitle: "LLMs, RAG & Transformers",
            description: "Building advanced AI applications with Large Language Models, Retrieval-Augmented Generation (RAG), and LangChain.",
            icon: <FaRobot />,
            isRight: false
        }
    ];

    return (
        <section id="timeline" className="section-padding bg-black relative min-h-screen py-20 overflow-hidden">
            <ParticlesBackground />

            <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={variants}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">AI Learning Journey</h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-8" />
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        My path from coding basics to building advanced Generative AI systems.
                    </p>
                </motion.div>

                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500/0 via-blue-500/50 to-purple-600/0 rounded-full"></div>

                    <div className="space-y-16">
                        {timelineData.map((item, index) => (
                            <TimelineItem key={item.id} item={item} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

const TimelineItem = ({ item, index }) => {
    // Determine alignment based on index if not explicitly set
    const isEven = index % 2 === 0;

    return (
        <motion.div
            className={`relative flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''
                } items-center md:justify-between w-full group`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
        >
            {/* Spacer for desktop layout alignment */}
            <div className="hidden md:block w-5/12"></div>

            {/* Center Marker */}
            <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-12 h-12 rounded-full bg-gray-900 border-4 border-blue-500 z-20 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.5)] group-hover:scale-125 transition-transform duration-300">
                <div className="text-blue-400 text-lg">
                    {item.icon}
                </div>
            </div>

            {/* Content Card */}
            <div className={`w-full md:w-5/12 pl-16 md:pl-0 ${isEven ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                <motion.div
                    className="bg-gray-900/40 backdrop-blur-md p-8 rounded-2xl border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:bg-gray-800/60 group-hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.15)] relative overflow-hidden"
                    whileHover={{ y: -5 }}
                >
                    {/* Step Number Background */}
                    <div className={`absolute -bottom-6 ${isEven ? 'md:-left-6 -right-6' : 'md:-right-6 -right-6'} text-8xl font-bold text-white/5 pointer-events-none select-none`}>
                        {item.id}
                    </div>

                    <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                        {item.title}
                    </h3>

                    <span className="inline-block px-3 py-1 mb-4 bg-blue-500/10 text-blue-300 text-sm font-medium rounded-full border border-blue-500/20">
                        {item.subtitle}
                    </span>

                    <p className="text-gray-300 leading-relaxed relative z-10">
                        {item.description}
                    </p>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Timeline;
