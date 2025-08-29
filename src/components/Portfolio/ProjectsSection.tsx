import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ProjectsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      title: 'Future Finance',
      category: 'AI & Finance',
      description: 'Financial RAG assistant with ETF predictions using LSTM neural networks. Features stock forecasting algorithms and automated API-based newsletter generation for market insights.',
      technologies: ['Python', 'LSTM', 'RAG', 'FastAPI', 'TensorFlow'],
      github: 'https://github.com/turabbb',
      demo: 'https://github.com/turabbb',
      image: '/projects/FutureFinance.jpeg',
      gradient: 'from-primary to-secondary',
    },
    {
      title: 'Shariah Law Assistant',
      category: 'AI & Religion',
      description: 'Intelligent RAG system built on Quran, Hadith, and Shariah law with multilingual embeddings. Features Streamlit UI for seamless Islamic jurisprudence queries.',
      technologies: ['Python', 'RAG', 'Streamlit', 'NLP', 'Embeddings'],
      github: 'https://github.com/turabbb',
      demo: 'https://github.com/turabbb',
      image: '/projects/Shariah.jpeg',
      gradient: 'from-secondary to-accent',
    },
    {
      title: 'Gesture Controller Mouse',
      category: 'Computer Vision',
      description: 'Computer Vision-based hand tracking mouse control system using OpenCV and MediaPipe. Enables touchless computer interaction through gesture recognition.',
      technologies: ['Python', 'OpenCV', 'MediaPipe', 'Computer Vision'],
      github: 'https://github.com/turabbb',
      demo: 'https://github.com/turabbb',
      image: '/projects/Mouse.jpeg',
      gradient: 'from-accent to-primary',
    },
    {
      title: 'SK Sports',
      category: 'E-commerce',
      description: 'Full-featured MERN stack e-commerce platform with shopping cart, secure checkout, admin dashboard, order tracking, and integrated payment processing.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      github: 'https://github.com/turabbb',
      demo: 'https://sksportspk.com',
      image: '/projects/SK.jpeg',
      gradient: 'from-primary to-accent',
    },
    {
      title: 'Ayosi',
      category: 'E-commerce',
      description: 'Elegant jewellery e-commerce platform featuring sophisticated product catalogs, secure transactions, and premium user experience design.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Payment Gateway'],
      github: 'https://github.com/turabbb',
      demo: 'https://github.com/turabbb',
      image: '/projects/ayosi.PNG',
      gradient: 'from-secondary to-primary',
    },
    {
      title: 'Tehvar',
      category: 'Event Management',
      description: 'Comprehensive events management platform enabling seamless event creation, attendee management, ticketing, and real-time event coordination.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      github: 'https://github.com/turabbb',
      demo: 'https://github.com/turabbb',
      image: '/projects/tehvar.PNG',
      gradient: 'from-accent to-secondary',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50, x: -30 },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { 
        duration: 0.6,
        ease: "easeOut" as const
      },
    },
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-8 sm:px-12 lg:px-16 xl:px-24 2xl:px-32 max-w-[95vw]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-4">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Showcasing innovative solutions across AI, web development, and computer vision. 
            Each project demonstrates technical expertise and creative problem-solving.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12 2xl:gap-16"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <motion.div
                className="glass rounded-lg border-neon h-full overflow-hidden relative"
                whileHover={{ y: -10, rotateX: 5, rotateY: 5 }}
                transition={{ duration: 0.3 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden rounded-t-lg">
                  <div 
                    className={`w-full h-full bg-gradient-to-br ${project.gradient} opacity-20`}
                    style={{
                      backgroundImage: `url(${project.image})`,
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      backgroundRepeat: 'no-repeat'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  
                  {/* Category Badge */}
                  <motion.div
                    className="absolute top-4 left-4 px-3 py-1 bg-background/80 backdrop-blur-sm text-primary text-xs font-medium rounded-full border border-primary/20"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {project.category}
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Title */}
                  <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-gradient transition-all duration-300">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={techIndex}
                        className="px-2 py-1 bg-muted text-muted-foreground text-xs rounded border-neon"
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <motion.div
                    className="flex space-x-3 relative z-10 pointer-events-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: hoveredProject === index ? 1 : 0.7,
                      y: hoveredProject === index ? 0 : 10,
                    }}
                    transition={{ duration: 0.3 }}
                    style={{ pointerEvents: 'auto' }}
                  >
                    <button
                      type="button"
                      className="inline-flex items-center justify-center gap-2 h-9 rounded-md px-3 text-sm font-medium border border-primary/30 bg-background hover:bg-primary/10 hover:border-primary flex-1 transition-colors cursor-pointer relative z-10 pointer-events-auto"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        console.log('GitHub button clicked:', project.github);
                        window.open(project.github, '_blank');
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.cursor = 'pointer';
                      }}
                    >
                      <Github className="w-4 h-4 mr-2 pointer-events-none" />
                      Code
                    </button>
                    <button
                      type="button"
                      className="inline-flex items-center justify-center gap-2 h-9 rounded-md px-3 text-sm font-medium bg-gradient-primary hover:shadow-neon flex-1 transition-colors cursor-pointer relative z-10 pointer-events-auto"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        console.log('Demo button clicked:', project.demo);
                        window.open(project.demo, '_blank');
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.cursor = 'pointer';
                      }}
                    >
                      <ExternalLink className="w-4 h-4 mr-2 pointer-events-none" />
                      Demo
                    </button>
                  </motion.div>
                </div>

                {/* Hover Overlay Effect */}
                <motion.div
                  className="absolute inset-0 border-2 border-transparent rounded-lg pointer-events-none"
                  animate={{
                    borderColor: hoveredProject === index ? 'hsl(var(--primary))' : 'transparent',
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;