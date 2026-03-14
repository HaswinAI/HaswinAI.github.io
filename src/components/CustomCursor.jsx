/* eslint-disable no-unused-vars */
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
            {/* Outer Glowing Ring */}
            <motion.div
                className="fixed top-0 left-0 w-10 h-10 border-2 border-cyan-500/50 rounded-full pointer-events-none z-[9999] mix-blend-screen shadow-[0_0_15px_rgba(6,182,212,0.5)] flex items-center justify-center hidden md:flex"
                animate={{
                    x: mousePosition.x - 20,
                    y: mousePosition.y - 20,
                    scale: isHovering ? 1.5 : 1,
                    borderColor: isHovering ? 'rgba(20, 184, 166, 0.8)' : 'rgba(6, 182, 212, 0.5)', // Changes to teal on hover
                }}
                transition={{
                    type: 'spring',
                    stiffness: 250,
                    damping: 20,
                    mass: 0.5,
                }}
            >
                {/* Inner Solid Dot */}
                <motion.div
                    className="w-2 h-2 bg-cyan-400 rounded-full pointer-events-none shadow-[0_0_10px_rgba(6,182,212,0.8)]"
                    animate={{
                        scale: isHovering ? 0 : 1,
                        opacity: isHovering ? 0 : 1
                    }}
                    transition={{ duration: 0.2 }}
                />
            </motion.div>
        </>
    );
};

export default CustomCursor;
