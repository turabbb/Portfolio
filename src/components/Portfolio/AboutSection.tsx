import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, MapPin, Code, Brain } from 'lucide-react';

const AboutSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut" as const
      },
    },
  };

  const rightItemVariants = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { 
        duration: 0.8,
        ease: "easeOut" as const
      },
    },
  };

  const stats = [
    { icon: GraduationCap, label: 'Education', value: 'COMSATS University' },
    { icon: MapPin, label: 'Location', value: 'Lahore, Pakistan' },
    { icon: Code, label: 'Specialization', value: 'Full Stack Development' },
    { icon: Brain, label: 'Focus', value: 'AI Engineering' },
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto px-8 sm:px-12 lg:px-16 xl:px-24 2xl:px-32 max-w-[95vw]">
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 2xl:gap-32 items-center"
        >
          {/* Left Side - Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="space-y-4">
              <motion.h2
                variants={itemVariants}
                className="text-4xl md:text-5xl font-display font-bold text-gradient"
              >
                About Me
              </motion.h2>
              
              <motion.div
                variants={itemVariants}
                className="w-20 h-1 bg-gradient-primary rounded-full"
              />
            </div>

            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              I'm a passionate Software Engineering student at COMSATS University, specializing in 
              scalable web applications and AI engineering. With a strong foundation in both 
              frontend and backend technologies, I love creating innovative solutions that 
              bridge the gap between cutting-edge AI and practical web development.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-muted-foreground leading-relaxed"
            >
              My journey spans from building comprehensive e-commerce platforms to AI & Automation.
              Recently, I've focused on creating intelligent systems that combine real-world data with 
              advanced models to deliver practical, personalized results - whether it's financial guidance, 
              predictive models, or automation tools.
              I'm constantly exploring new technologies and methodologies 
              to solve complex problems and deliver exceptional user experiences.
            </motion.p>

            {/* Stats Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="glass p-4 rounded-lg border-neon hover-lift group"
                  whileHover={{ scale: 1.02 }}
                >
                  <stat.icon className="w-6 h-6 text-primary mb-2 group-hover:text-secondary transition-colors" />
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="font-semibold text-foreground">{stat.value}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Visual Element */}
          <motion.div
            variants={rightItemVariants}
            className="relative"
          >
            <div className="relative h-96 lg:h-[500px] flex items-center justify-center">
              {/* Animated Rings */}
              <motion.div
                className="absolute inset-0 border-2 border-primary/20 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-4 border-2 border-secondary/20 rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-8 border-2 border-accent/20 rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />

              {/* Center Element */}
              <motion.div
                className="relative z-10 w-32 h-32 bg-gradient-primary rounded-full flex items-center justify-center glow-neon"
                whileHover={{ scale: 1.1 }}
                animate={{
                  boxShadow: [
                    "0 0 20px hsl(192 100% 50% / 0.3)",
                    "0 0 40px hsl(271 81% 56% / 0.3)",
                    "0 0 20px hsl(142 76% 36% / 0.3)",
                    "0 0 20px hsl(192 100% 50% / 0.3)",
                  ],
                }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                <Code className="w-12 h-12 text-primary-foreground" />
              </motion.div>

              {/* Floating Icons */}
              <motion.div
                className="absolute top-16 right-16 w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center"
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              >
                <Brain className="w-6 h-6 text-secondary" />
              </motion.div>

              <motion.div
                className="absolute bottom-20 left-16 w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center"
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
              >
                <GraduationCap className="w-6 h-6 text-accent" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;