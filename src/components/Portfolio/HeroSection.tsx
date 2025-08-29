import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, Mail } from 'lucide-react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const FloatingParticles = () => {
  const particles = Array.from({ length: 50 }, (_, i) => (
    <motion.div
      key={i}
      className="absolute w-1 h-1 bg-primary rounded-full opacity-60"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
      }}
      animate={{
        y: [0, -30, 0],
        opacity: [0.6, 1, 0.6],
      }}
      transition={{
        duration: 3 + Math.random() * 2,
        repeat: Infinity,
        delay: Math.random() * 2,
      }}
    />
  ));

  return <>{particles}</>;
};

// Simple CSS-based animated sphere
const AnimatedSphere = () => {
  return (
    <motion.div
      className="relative w-64 h-64 mx-auto"
      initial={{ scale: 0, rotate: 0 }}
      animate={{ 
        scale: 1, 
        rotate: 360,
        y: [0, -20, 0]
      }}
      transition={{ 
        scale: { duration: 1, ease: "easeOut" },
        rotate: { duration: 20, repeat: Infinity, ease: "linear" },
        y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
      }}
    >
      {/* Main sphere */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 via-purple-500 to-cyan-400 opacity-80 blur-sm animate-pulse" />
      <div className="absolute inset-4 rounded-full bg-gradient-to-tr from-blue-500 via-purple-600 to-cyan-500 shadow-2xl shadow-blue-500/50" />
      
      {/* Orbiting rings */}
      <motion.div
        className="absolute inset-0 border-2 border-blue-400/40 rounded-full"
        animate={{ rotateY: 360 }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        style={{ transformStyle: "preserve-3d" }}
      />
      <motion.div
        className="absolute inset-8 border-2 border-purple-400/40 rounded-full"
        animate={{ rotateX: 360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        style={{ transformStyle: "preserve-3d" }}
      />
      
      {/* Floating particles around sphere */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-cyan-400 rounded-full"
          style={{
            top: "50%",
            left: "50%",
            transformOrigin: `${100 + Math.cos(i * 45 * Math.PI / 180) * 150}px ${Math.sin(i * 45 * Math.PI / 180) * 150}px`,
          }}
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 8 + i,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
    </motion.div>
  );
};

const TypewriterText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  return (
    <motion.span
      initial={{ width: 0 }}
      animate={{ width: "auto" }}
      transition={{ duration: 2, delay }}
      className="inline-block overflow-hidden whitespace-nowrap"
    >
      {text}
    </motion.span>
  );
};

const HeroSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true, 
    amount: 0.2,
    margin: "0px 0px -200px 0px" // Trigger earlier for smoother effect
  });
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']); // Reduced parallax intensity
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]); // Fade out later

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <section 
      ref={ref}
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Enhanced Background Particles */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{ y, opacity }}
      >
        <FloatingParticles />
        {/* Additional Background Effects */}
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 0.8, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
      </motion.div>

      <div className="container mx-auto px-8 sm:px-12 lg:px-16 xl:px-24 2xl:px-32 max-w-[95vw] py-20 z-10">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-20 xl:gap-28 2xl:gap-36 items-center"
        >
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
            transition={{ 
              duration: 1.2, 
              ease: [0.25, 0.46, 0.45, 0.94], // Professional cubic-bezier easing
              delay: 0.1 
            }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h1
                className="text-5xl md:text-7xl font-display font-bold leading-tight"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <motion.span className="text-gradient">
                  <TypewriterText text="Ali" delay={isInView ? 0.5 : 0} />
                </motion.span>
                <br />
                <motion.span className="text-neon">
                  <TypewriterText text="Turab" delay={isInView ? 1.2 : 0} />
                </motion.span>
              </motion.h1>

              <motion.div
                className="text-xl md:text-2xl text-muted-foreground font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                <span className="text-neon">AI Engineer</span> &{' '}
                <span className="text-neon-purple">Full Stack Developer</span>
              </motion.div>

              <motion.p
                className="text-lg text-muted-foreground max-w-2xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              >
                Passionate CS student from COMSATS specializing in scalable web applications 
                and AI engineering. Creating innovative solutions with cutting-edge technology.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <Button
                size="lg"
                className="bg-gradient-primary hover:shadow-neon transition-all duration-300 hover-lift group"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/resume/ALI_TURAB_Resume.pdf';
                  link.download = 'ALI_TURAB_Resume.pdf';
                  link.click();
                }}
              >
                <Download className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Download Resume
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                onClick={scrollToContact}
                className="border-neon hover:bg-primary/10 hover:glow-neon transition-all duration-300"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Me
              </Button>
            </motion.div>

            {/* Location */}
            <motion.div
              className="flex items-center space-x-2 text-sm text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <div className="w-2 h-2 bg-accent rounded-full pulse-neon"></div>
              <span>Lahore, Pakistan</span>
            </motion.div>
          </motion.div>

          {/* Right Side - CSS Animated Sphere */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }}
            transition={{ 
              duration: 1.2, 
              ease: [0.25, 0.46, 0.45, 0.94], // Professional cubic-bezier easing
              delay: 0.3 
            }}
            className="relative h-96 lg:h-[500px] flex items-center justify-center"
          >
            <AnimatedSphere />
            
            {/* Floating Decorative Elements */}
            <motion.div 
              className="absolute top-10 right-10 w-20 h-20 border-2 border-secondary/40 rounded-full"
              animate={{ 
                rotate: 360,
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                rotate: { duration: 10, repeat: Infinity, ease: "linear" },
                scale: { duration: 3, repeat: Infinity }
              }}
            />
            <motion.div 
              className="absolute bottom-20 left-10 w-12 h-12 border-2 border-accent/40 rounded-lg"
              animate={{ 
                y: [0, -20, 0],
                rotateZ: [0, 180, 360]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                delay: 2
              }}
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 4.5 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-primary rounded-full flex justify-center"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-primary rounded-full mt-2"
            animate={{ scaleY: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;