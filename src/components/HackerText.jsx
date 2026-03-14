/* eslint-disable no-unused-vars */
import { useState, useEffect, useRef } from 'react';

const HackerText = ({ text, className = '', speed = 30 }) => {
    const [displayText, setDisplayText] = useState(text);
    const [isHovering, setIsHovering] = useState(false);
    const intervalRef = useRef(null);
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=[]{}|;':,./<>?";

    const animate = () => {
        let iteration = 0;

        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            setDisplayText(prev =>
                text
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return text[index];
                        }

                        return letters[Math.floor(Math.random() * letters.length)];
                    })
                    .join("")
            );

            if (iteration >= text.length) {
                clearInterval(intervalRef.current);
            }

            iteration += 1 / 3;
        }, speed);
    };

    useEffect(() => {
        animate();
        return () => clearInterval(intervalRef.current);
    }, [text]);

    const handleMouseEnter = () => {
        setIsHovering(true);
        animate();
    };

    return (
        <span
            className={`inline-block font-mono ${className}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={() => setIsHovering(false)}
        >
            {displayText}
        </span>
    );
};

export default HackerText;
