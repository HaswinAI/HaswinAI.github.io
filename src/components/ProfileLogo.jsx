/* eslint-disable no-unused-vars */
import { motion } from 'framer-motion';

const ProfileLogo = ({ size = 'md', className = '', showInitials = true, initials = 'HR', animateRotation = true, rounded = '', src }) => {
  const sizeClasses = {
    sm: 'w-8 h-8 text-sm',
    md: 'w-10 h-10 text-base',
    lg: 'w-12 h-12 text-lg',
    xl: 'w-16 h-16 text-xl',
    '2xl': 'w-20 h-20 text-2xl',
    'full': 'w-full h-full'
  };

  const sizeClass = sizeClasses[size] || sizeClasses.md;

  const rotationProps = animateRotation ? {
    animate: { rotate: 360 },
    transition: { duration: 20, repeat: Infinity, ease: "linear" }
  } : {};

  return (
    <motion.div
      className={`${sizeClass} ${className} ${rounded} flex items-center justify-center relative z-10`}
      {...rotationProps}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <img src={src || '/intro.png'} alt="Profile" className="w-full h-full object-cover" />
    </motion.div>
  );
};

export default ProfileLogo;