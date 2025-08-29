import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, Github, Linkedin, Download, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactInfo = [
    {
      icon: Phone,
      label: 'Phone',
      value: '+92 323 4190011',
      href: 'tel:+923234190011',
      gradient: 'from-primary to-secondary',
    },
    {
      icon: Mail,
      label: 'Email',
      value: 'turabbali06@gmail.com',
      href: 'mailto:turabbali06@gmail.com',
      gradient: 'from-secondary to-accent',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Lahore, Pakistan',
      href: '#',
      gradient: 'from-accent to-primary',
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/turabbb',
      color: 'hover:text-primary',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/ali-turab-825b91333/',
      color: 'hover:text-secondary',
    },
  ];

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-muted/20 to-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border-2 border-primary rounded-full animate-pulse" />
        <div className="absolute bottom-32 right-32 w-24 h-24 border-2 border-secondary rounded-lg rotate-45 animate-pulse" />
        <div className="absolute top-1/2 left-1/3 w-16 h-16 border-2 border-accent rounded-full animate-pulse" />
      </div>

      <div className="container mx-auto px-8 sm:px-12 lg:px-16 xl:px-24 2xl:px-32 max-w-[95vw] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-4">
            Let's Connect
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Ready to collaborate on exciting projects or discuss opportunities? 
            I'm always open to new challenges and innovative ideas.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Left Side - Contact Info */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className="flex items-center space-x-4 p-4 glass rounded-lg border-neon hover-lift group transition-all duration-300"
                  whileHover={{ scale: 1.02, x: 10 }}
                  variants={itemVariants}
                >
                  <div className={`p-3 rounded-lg bg-gradient-to-r ${item.gradient} group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="text-foreground font-medium group-hover:text-gradient transition-all duration-300">
                      {item.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Follow Me</h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    className={`p-3 glass rounded-lg border-neon hover-lift group transition-all duration-300 ${social.color}`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Resume Download */}
            <motion.div variants={itemVariants}>
              <Button
                size="lg"
                className="w-full bg-gradient-primary hover:shadow-neon transition-all duration-300 hover-lift group"
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
            </motion.div>
          </motion.div>

          {/* Right Side - Visual Element */}
          <motion.div
            variants={itemVariants}
            className="relative h-96 lg:h-[500px] flex items-center justify-center"
          >
            {/* Animated Contact Visualization */}
            <div className="relative">
              {/* Central Node */}
              <motion.div
                className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center glow-neon relative z-10"
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Mail className="w-8 h-8 text-primary-foreground" />
              </motion.div>

              {/* Orbiting Elements */}
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  className="absolute w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center"
                  style={{
                    top: '50%',
                    left: '50%',
                    marginTop: '-24px',
                    marginLeft: '-24px',
                  }}
                  animate={{
                    x: [0, Math.cos((index * 120) * Math.PI / 180) * 100],
                    y: [0, Math.sin((index * 120) * Math.PI / 180) * 100],
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "linear",
                    delay: index * 0.5,
                  }}
                >
                  <item.icon className="w-5 h-5 text-secondary-foreground" />
                </motion.div>
              ))}

              {/* Connection Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {contactInfo.map((_, index) => (
                  <motion.line
                    key={index}
                    x1="50%"
                    y1="50%"
                    x2={`${50 + Math.cos((index * 120) * Math.PI / 180) * 20}%`}
                    y2={`${50 + Math.sin((index * 120) * Math.PI / 180) * 20}%`}
                    stroke="url(#gradient)"
                    strokeWidth="2"
                    opacity="0.3"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "reverse",
                      delay: index * 0.3,
                    }}
                  />
                ))}
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="hsl(var(--primary))" />
                    <stop offset="100%" stopColor="hsl(var(--secondary))" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;