/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform, useInView } from 'framer-motion';
import ParticlesBackground from './ParticlesBackground';
import {
    FaPython, FaBrain, FaChartLine, FaMusic, FaCalendarAlt,
    FaBuilding, FaAward, FaTimes, FaCloud, FaExpand
} from 'react-icons/fa';
import { SiScikitlearn, SiStreamlit } from 'react-icons/si';

import ElevateLogo from '../assets/elevate_labs_logo.svg';
import EdunetLogo from '../assets/edunet_logo.svg';

/* ─── Data ─────────────────────────────────────────────────── */
const internships = [
    {
        company: 'ELEVATE LABS',
        logo: ElevateLogo,
        role: 'Machine Learning Intern',
        period: 'Jun 2025 – Jul 2025',
        description:
            'Developed a Human Emotion Detection system using voice recordings. Extracted MFCC audio features with Librosa and trained a classification model — awarded Best Performer.',
        skills: [
            { name: 'Python', icon: FaPython },
            { name: 'Librosa', icon: FaMusic },
            { name: 'AI / ML', icon: FaBrain },
        ],
        accent: '#22d3ee',
        gradient: 'from-cyan-500 via-blue-500 to-indigo-600',
        glow: 'rgba(34,211,238,0.18)',
        certificates: [
            { src: '/Intenship/Elevate_labs_intern.png', label: 'Certificate of Completion' },
        ],
        badge: '🏆 Best Performer',
        side: 'right',
    },
    {
        company: 'EDUNET FOUNDATION (AICTE)',
        logo: EdunetLogo,
        role: 'AI & ML Intern',
        period: 'Jun 2025 – Jul 2025',
        description:
            'Completed 6-week AICTE-approved AI & ML internship. Built an Employee Salary Prediction app with Scikit-learn and Streamlit, covering data preprocessing and visualization.',
        skills: [
            { name: 'Python', icon: FaPython },
            { name: 'Scikit-learn', icon: SiScikitlearn },
            { name: 'Streamlit', icon: SiStreamlit },
            { name: 'Data Viz', icon: FaChartLine },
        ],
        accent: '#a855f7',
        gradient: 'from-purple-500 via-fuchsia-500 to-pink-500',
        glow: 'rgba(168,85,247,0.18)',
        certificates: [
            { src: '/Intenship/AICTE_IBM_internship.png', label: 'AICTE Certificate' },
            { src: '/Intenship/Edunet-AI-IBM_final.png', label: 'IBM SkillsBuild' },
        ],
        badge: '🎓 AICTE Certified',
        side: 'left',
    },
    {
        company: 'MICROSOFT AZURE (AICTE)',
        logo: null,
        role: 'Cloud & AI Intern',
        period: '2025',
        description:
            'AICTE-approved virtual internship on Microsoft Azure covering cloud fundamentals, cognitive services, and AI/ML model deployment on Azure infrastructure.',
        skills: [
            { name: 'Azure Cloud', icon: FaCloud },
            { name: 'AI Services', icon: FaBrain },
            { name: 'Python', icon: FaPython },
        ],
        accent: '#38bdf8',
        gradient: 'from-sky-400 via-blue-500 to-cyan-600',
        glow: 'rgba(56,189,248,0.18)',
        certificates: [
            { src: '/Intenship/AI_Azure_internship_certificate.png', label: 'Azure Certificate' },
        ],
        badge: '☁️ Azure Certified',
        side: 'right',
    },
    {
        company: 'INFOSYS SPRINGBOARD',
        logo: null,
        role: 'AI Intern (Remote)',
        period: 'Nov 2024 – Jan 2025',
        description:
            'Built a Real-Time AI Sales Intelligence and Sentiment-Driven Deal Negotiation Assistant using NLP and ML. Recognized by Infosys for outstanding delivery.',
        skills: [
            { name: 'Python', icon: FaPython },
            { name: 'NLP / AI', icon: FaBrain },
            { name: 'Data Analysis', icon: FaChartLine },
        ],
        accent: '#34d399',
        gradient: 'from-emerald-400 via-teal-500 to-green-600',
        glow: 'rgba(52,211,153,0.18)',
        certificates: [
            { src: '/Intenship/Infosys_SB_5.png', label: 'Completion Certificate' },
        ],
        badge: '🤝 Infosys Certified',
        side: 'left',
    },
];

/* ─── Lightbox ──────────────────────────────────────────────── */
const Lightbox = ({ cert, onClose }) => (
    <motion.div
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
    >
        <motion.div
            className="relative max-w-4xl w-full"
            initial={{ scale: 0.75, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.75, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 280, damping: 22 }}
            onClick={e => e.stopPropagation()}
        >
            <button
                onClick={onClose}
                className="absolute -top-4 -right-4 z-10 w-9 h-9 rounded-full bg-gray-800 border border-gray-600 flex items-center justify-center text-gray-300 hover:text-white hover:bg-red-500/80 transition-all"
            >
                <FaTimes />
            </button>
            <img src={cert.src} alt={cert.label} className="w-full h-auto rounded-2xl shadow-2xl ring-1 ring-white/20" />
            <p className="text-center text-gray-400 text-xs mt-3 font-mono">{cert.label}</p>
        </motion.div>
    </motion.div>
);

/* ─── Timeline Card ─────────────────────────────────────────── */
const TimelineCard = ({ item, index }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '-70px' });
    const [lightbox, setLightbox] = useState(null);
    const [cardHovered, setCardHovered] = useState(false);
    const isRight = item.side === 'right';

    const cardVariants = {
        hidden: { opacity: 0, x: isRight ? 70 : -70, scale: 0.93 },
        visible: {
            opacity: 1, x: 0, scale: 1,
            transition: { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94], delay: index * 0.1 },
        },
    };

    const skillVariants = {
        visible: { transition: { staggerChildren: 0.07, delayChildren: 0.35 + index * 0.1 } },
    };

    const skillChild = {
        hidden: { opacity: 0, y: 10, scale: 0.8 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { type: 'spring', stiffness: 260, damping: 18 } },
    };

    return (
        <>
            <AnimatePresence>
                {lightbox && <Lightbox cert={lightbox} onClose={() => setLightbox(null)} />}
            </AnimatePresence>

            <div className="relative flex w-full items-start md:justify-center" ref={ref}>

                {/* ── Card ── */}
                <motion.div
                    className={`relative w-full md:w-[46%] ${isRight ? 'md:ml-auto md:pl-10' : 'md:mr-auto md:pr-10'}`}
                    variants={cardVariants}
                    initial="hidden"
                    animate={inView ? 'visible' : 'hidden'}
                >
                    <motion.div
                        className="relative bg-gray-900/60 backdrop-blur-lg border border-gray-700/50 rounded-2xl overflow-hidden group"
                        whileHover={{
                            y: -8,
                            boxShadow: `0 0 40px ${item.glow}, 0 0 80px ${item.glow}`,
                            borderColor: item.accent + '88',
                        }}
                        transition={{ duration: 0.35 }}
                        onMouseEnter={() => setCardHovered(true)}
                        onMouseLeave={() => setCardHovered(false)}
                        onTouchStart={() => setCardHovered(true)}
                        onTouchEnd={() => setTimeout(() => setCardHovered(false), 1800)}
                    >
                        {/* Gradient top bar */}
                        <div className={`h-[3px] w-full bg-gradient-to-r ${item.gradient}`} />

                        <div className="p-6">
                            {/* Header */}
                            <div className="flex items-center gap-3 mb-4">
                                <div
                                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 border border-gray-700/60"
                                    style={{ background: item.glow }}
                                >
                                    {item.logo
                                        ? <img src={item.logo} alt={item.company} className="w-9 h-9 object-contain" />
                                        : <FaBuilding style={{ color: item.accent }} className="text-xl" />
                                    }
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className="text-white font-bold text-base leading-tight">{item.role}</h3>
                                    <p className="text-xs font-semibold mt-0.5 truncate" style={{ color: item.accent }}>
                                        {item.company}
                                    </p>
                                </div>
                                <span
                                    className="text-[10px] px-2 py-0.5 rounded-full border flex-shrink-0 leading-5"
                                    style={{ borderColor: item.accent + '55', color: item.accent, background: item.glow }}
                                >
                                    {item.badge}
                                </span>
                            </div>

                            {/* Period */}
                            <div className="flex items-center gap-1.5 mb-3">
                                <FaCalendarAlt className="text-gray-500 text-[11px]" />
                                <span className="text-xs font-mono text-gray-400">{item.period}</span>
                            </div>

                            {/* Description */}
                            <p className="text-gray-300 text-sm leading-relaxed mb-4">{item.description}</p>

                            {/* Skills */}
                            <motion.div
                                className="flex flex-wrap gap-2 mb-5"
                                variants={skillVariants}
                                initial="hidden"
                                animate={inView ? 'visible' : 'hidden'}
                            >
                                {item.skills.map((skill, si) => (
                                    <motion.span
                                        key={si}
                                        className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border"
                                        style={{ borderColor: item.accent + '44', color: item.accent, background: item.glow }}
                                        variants={skillChild}
                                        whileHover={{ scale: 1.1, boxShadow: `0 0 10px ${item.glow}` }}
                                    >
                                        <skill.icon className="text-[11px]" />
                                        {skill.name}
                                    </motion.span>
                                ))}
                            </motion.div>

                            {/* ── Certificates ── hover-only reveal */}
                            <div>
                                {/* Hint badge shown when NOT hovering */}
                                <motion.div
                                    className="flex items-center gap-2 mb-2 pb-2 border-b border-gray-700/40"
                                    animate={{ opacity: 1 }}
                                >
                                    <FaAward style={{ color: item.accent }} className="text-sm" />
                                    <span className="text-xs font-semibold text-gray-400 tracking-wide uppercase">
                                        {item.certificates.length > 1 ? 'Certificates' : 'Certificate'}
                                    </span>
                                    {!cardHovered && (
                                        <span
                                            className="ml-auto text-[10px] px-2 py-0.5 rounded-full border animate-pulse"
                                            style={{ borderColor: item.accent + '55', color: item.accent, background: item.glow }}
                                        >
                                            Hover to view
                                        </span>
                                    )}
                                </motion.div>

                                {/* Certificate images – fade + slide in on hover */}
                                <motion.div
                                    className={`grid gap-3 ${item.certificates.length > 1 ? 'grid-cols-2' : 'grid-cols-1'}`}
                                    initial={false}
                                    animate={{ height: cardHovered ? 'auto' : 0, opacity: cardHovered ? 1 : 0 }}
                                    transition={{ duration: 0.4, ease: 'easeInOut' }}
                                    style={{ overflow: 'hidden' }}
                                >
                                    {item.certificates.map((cert, ci) => (
                                        <motion.div
                                            key={ci}
                                            className="relative rounded-xl overflow-hidden cursor-pointer"
                                            initial={{ y: 16, opacity: 0 }}
                                            animate={cardHovered ? { y: 0, opacity: 1 } : { y: 16, opacity: 0 }}
                                            transition={{ delay: ci * 0.08, type: 'spring', stiffness: 280, damping: 22 }}
                                            whileHover={{ scale: 1.04 }}
                                            onClick={() => setLightbox(cert)}
                                        >
                                            <img
                                                src={cert.src}
                                                alt={cert.label}
                                                className="w-full h-28 object-cover rounded-xl ring-1 ring-gray-700"
                                            />
                                            {/* Expand overlay */}
                                            <motion.div
                                                className="absolute inset-0 rounded-xl flex flex-col items-center justify-center gap-1"
                                                style={{ background: `${item.glow.replace('0.18', '0.85')}` }}
                                                initial={{ opacity: 0 }}
                                                whileHover={{ opacity: 1 }}
                                                transition={{ duration: 0.2 }}
                                            >
                                                <FaExpand style={{ color: item.accent }} className="text-xl" />
                                                <span className="text-[10px] font-bold" style={{ color: item.accent }}>
                                                    {cert.label}
                                                </span>
                                            </motion.div>
                                        </motion.div>
                                    ))}
                                </motion.div>
                            </div>
                        </div>

                        {/* Breathing corner glow */}
                        <motion.div
                            className="absolute bottom-0 right-0 w-32 h-32 rounded-full pointer-events-none"
                            style={{ background: `radial-gradient(circle, ${item.glow}, transparent 70%)` }}
                            animate={{ scale: [1, 1.5, 1], opacity: [0.25, 0.55, 0.25] }}
                            transition={{ duration: 3.5 + index * 0.5, repeat: Infinity, ease: 'easeInOut' }}
                        />
                    </motion.div>
                </motion.div>

                {/* ── Center node (md+) ── */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 flex-col items-center z-20">
                    <motion.div
                        className="w-11 h-11 rounded-full border-2 flex items-center justify-center"
                        style={{ borderColor: item.accent }}
                        animate={{ boxShadow: [`0 0 0 0 ${item.glow}`, `0 0 0 16px transparent`] }}
                        transition={{ duration: 1.8, repeat: Infinity, ease: 'easeOut', delay: index * 0.3 }}
                    >
                        <motion.div
                            className="w-5 h-5 rounded-full"
                            style={{ background: `linear-gradient(135deg, ${item.accent}, #818cf8)` }}
                            animate={{ scale: [1, 1.25, 1] }}
                            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: index * 0.3 }}
                        />
                    </motion.div>
                    {/* Date badge */}
                    <div
                        className={`absolute ${isRight ? '-left-[5rem]' : '-right-[5rem]'} top-1/2 -translate-y-1/2 px-2.5 py-1 rounded-full text-[10px] font-bold whitespace-nowrap border`}
                        style={{ background: item.glow, borderColor: item.accent + '55', color: item.accent }}
                    >
                        {item.period.split('–')[0].trim()}
                    </div>
                </div>
            </div>
        </>
    );
};

/* ─── Main Section ──────────────────────────────────────────── */
const Internship = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start 0.8', 'end 0.3'] });
    const lineScaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section
            id="internships"
            className="section-padding bg-black relative overflow-hidden py-24"
        >
            <ParticlesBackground />

            <div className="max-w-7xl mx-auto px-4 relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                    className="text-center mb-20"
                >
                    <motion.p
                        className="text-cyan-400 font-mono text-sm tracking-[0.25em] uppercase mb-3"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        Professional Journey
                    </motion.p>
                    <h2 className="text-4xl md:text-5xl font-bold mb-5 gradient-text">
                        Internship Experience
                    </h2>
                    <motion.div
                        className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.3 }}
                    />
                </motion.div>

                {/* Timeline body */}
                <div className="relative" ref={containerRef}>

                    {/* Glowing vertical line */}
                    <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-gray-800/80 z-0 rounded-full">
                        <motion.div
                            className="w-full origin-top bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-600 rounded-full"
                            style={{ scaleY: lineScaleY, height: '100%' }}
                        />
                        <motion.div
                            className="absolute inset-0 blur-sm bg-gradient-to-b from-cyan-500 via-blue-500 to-purple-600 opacity-40 rounded-full"
                            style={{ scaleY: lineScaleY, height: '100%', transformOrigin: 'top' }}
                        />
                    </div>

                    {/* Cards */}
                    <div className="flex flex-col gap-16 relative z-10">
                        {internships.map((item, index) => (
                            <TimelineCard key={index} item={item} index={index} />
                        ))}
                    </div>

                    {/* End cap dot */}
                    <motion.div
                        className="hidden md:block absolute left-1/2 -translate-x-1/2 -bottom-4 w-3 h-3 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 z-20"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.8, type: 'spring' }}
                    />
                </div>
            </div>
        </section>
    );
};

export default Internship;
