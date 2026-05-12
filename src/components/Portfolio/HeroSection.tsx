import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Download, Mail } from 'lucide-react';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { SplineScene } from '@/components/ui/splite';

const FloatingParticles = () => {
  const particles = Array.from({ length: 16 }, (_, i) => (
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
        duration: 4.5 + Math.random() * 2,
        repeat: Infinity,
        delay: Math.random() * 2,
      }}
    />
  ));

  return <>{particles}</>;
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

  return (
    <section 
      ref={ref}
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Full-screen 3D Robot Background */}
      <div className="absolute inset-0 z-0">
        <SplineScene
          scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
          className="w-full h-full pointer-events-auto"
        />
      </div>

      {/* Dark overlays for readability */}
      <div className="absolute inset-0 z-[1] pointer-events-none bg-gradient-to-b from-black/70 via-black/55 to-black/75" />
      <div className="absolute inset-0 z-[1] pointer-events-none bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.16),transparent_34%),radial-gradient(circle_at_20%_80%,rgba(125,211,252,0.12),transparent_30%)]" />

      {/* Ambient particles */}
      <motion.div 
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{ y, opacity }}
      >
        {Array.from({ length: 8 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full pointer-events-none"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 0.6, 0],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut",
            }}
          />
        ))}
        <FloatingParticles />
      </motion.div>

      <div className="container mx-auto px-8 sm:px-12 lg:px-16 xl:px-24 2xl:px-32 max-w-[95vw] py-10 md:py-14 z-10 relative pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="max-w-4xl space-y-8"
        >
          <div className="space-y-4">
            <motion.h1
              className="text-5xl md:text-7xl font-display font-bold leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <motion.span className="text-gradient">
                <TypewriterText text="Ali" delay={isInView ? 0.4 : 0} />
              </motion.span>
              <br />
              <motion.span className="text-neon">
                <TypewriterText text="Turab" delay={isInView ? 1 : 0} />
              </motion.span>
            </motion.h1>

            <motion.div
              className="text-xl md:text-2xl text-muted-foreground font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <span className="text-neon">Full Stack AI Engineer</span>
            </motion.div>

            <motion.p
              className="text-lg text-muted-foreground max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              Full Stack AI Engineer with 2+ years of experience delivering scalable web products,
              AI-powered applications, and automation solutions with modern engineering practices.
            </motion.p>
          </div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 1.0, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <Button
              size="lg"
              className="bg-gradient-primary hover:shadow-neon transition-all duration-300 hover-lift group pointer-events-auto"
              onClick={() => {
                const link = document.createElement('a');
                link.href = '/resume/ALI-TURAB-Resume.pdf';
                link.download = 'ALI-TURAB-Resume.pdf';
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
              className="border-neon hover:bg-primary/10 hover:glow-neon transition-all duration-300 pointer-events-auto"
            >
              <Mail className="w-5 h-5 mr-2" />
              Contact Me
            </Button>
          </motion.div>

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