import { motion } from 'framer-motion';

export const SimpleAnimatedBackground = () => {
  return (
    <div className="relative w-full h-full overflow-hidden">
      {/* Main gradient orb */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1.1, 1],
          rotate: [0, 180, 360],
          opacity: [0.3, 0.7, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Floating particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary/40 rounded-full"
          style={{
            left: `${10 + (i * 4)}%`,
            top: `${20 + (i * 3)}%`,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, Math.sin(i) * 20, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: 4 + (i * 0.2),
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 0.1,
          }}
        />
      ))}
      
      {/* Geometric shapes */}
      <motion.div
        className="absolute top-16 right-20 w-12 h-12 border-2 border-secondary/40"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      
      <motion.div
        className="absolute bottom-24 left-16 w-8 h-8 bg-accent/30 rounded-full"
        animate={{
          y: [0, -40, 0],
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.8, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />
      
      {/* Ripple effect */}
      <motion.div
        className="absolute bottom-32 right-24 w-16 h-16 border border-primary/20 rounded-full"
        animate={{
          scale: [1, 2.5, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeOut"
        }}
      />
    </div>
  );
};
