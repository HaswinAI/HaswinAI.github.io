import { useState, useEffect } from 'react';
/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';

const CustomCursor = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e) => {
            // Check if hovering over clickable elements
            if (
                e.target.tagName.toLowerCase() === 'a' ||
                e.target.tagName.toLowerCase() === 'button' ||
                e.target.closest('a') ||
                e.target.closest('button') ||
                e.target.classList.contains('cursor-pointer')
            ) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <>
            {/* Outer AI Glow Ring */}
            <motion.div
                className="fixed top-0 left-0 w-12 h-12 rounded-full pointer-events-none z-[9998] mix-blend-screen shadow-[0_0_20px_rgba(6,182,212,0.6)] flex items-center justify-center hidden md:flex border border-cyan-400/30 bg-cyan-500/10 backdrop-blur-[2px]"
                animate={{
                    x: mousePosition.x - 24,
                    y: mousePosition.y - 24,
                    scale: isHovering ? 1.8 : 1,
                    borderColor: isHovering ? 'rgba(20, 184, 166, 0.6)' : 'rgba(6, 182, 212, 0.3)',
                    backgroundColor: isHovering ? 'rgba(20, 184, 166, 0.15)' : 'rgba(6, 182, 212, 0.1)',
                }}
                transition={{
                    type: 'spring',
                    stiffness: 150,
                    damping: 15,
                    mass: 0.5,
                }}
            >
                {/* Inner AI Core */}
                <motion.div
                    className="w-3 h-3 bg-white rounded-full pointer-events-none shadow-[0_0_15px_rgba(255,255,255,0.9),0_0_20px_rgba(6,182,212,0.8)]"
                    animate={{
                        scale: isHovering ? 0 : [1, 1.3, 1],
                        opacity: isHovering ? 0 : 1
                    }}
                    transition={{
                        duration: isHovering ? 0.2 : 2,
                        repeat: isHovering ? 0 : Infinity,
                        repeatType: "reverse"
                    }}
                />
            </motion.div>

            {/* Direct Cursor Target */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-cyan-300 rounded-full pointer-events-none z-[9999] shadow-[0_0_10px_rgba(103,232,249,1)] hidden md:block"
                animate={{
                    x: mousePosition.x - 4,
                    y: mousePosition.y - 4,
                    opacity: isHovering ? 1 : 0.8,
                    scale: isHovering ? 2.5 : 1,
                    backgroundColor: isHovering ? 'rgba(20, 184, 166, 1)' : 'rgba(103, 232, 249, 1)'
                }}
                transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 20
                }}
            />
        </>
    );
};

export default CustomCursor;
