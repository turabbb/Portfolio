import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Building2, Users, Globe } from 'lucide-react';

const ExperienceSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const experiences = [
    {
      title: 'Software Development Intern',
      company: 'NETSOL Technologies',
      duration: '2 months',
      description: 'Worked on enterprise software solutions, contributing to large-scale applications and learning industry best practices.',
      icon: Building2,
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      title: 'Customer Service Representative',
      company: 'Ibex',
      duration: '3 months',
      description: 'Developed strong communication skills while handling customer inquiries and providing technical support solutions.',
      icon: Users,
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      title: 'Business Development & Outgoing Volunteer',
      company: 'AIESEC',
      duration: '1 year',
      description: 'Led business development initiatives and coordinated international volunteer programs, enhancing leadership and project management skills.',
      icon: Globe,
      color: 'text-accent',
      bgColor: 'bg-accent/10',
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
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { 
        duration: 0.7,
        ease: "easeOut" as const
      },
    },
  };

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-background/80 to-muted/20">
      <div className="container mx-auto px-8 sm:px-12 lg:px-16 xl:px-24 2xl:px-32 max-w-[95vw]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-4">
            Experience
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            My professional journey showcases diverse experiences across technology, 
            customer service, and international business development.
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 md:transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-gradient-primary opacity-30" />

          <div className="space-y-16 xl:space-y-20 2xl:space-y-24">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Node */}
                <div className={`absolute left-6 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 rounded-full border-2 border-background z-10 ${exp.bgColor}`}>
                  <div className={`w-2 h-2 rounded-full ${exp.color.replace('text-', 'bg-')} absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2`} />
                </div>

                {/* Content Card */}
                <motion.div
                  className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                  }`}
                  whileHover={{ scale: 1.02, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="glass p-6 rounded-lg border-neon hover-lift group">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-lg ${exp.bgColor} group-hover:scale-110 transition-transform duration-300`}>
                        <exp.icon className={`w-6 h-6 ${exp.color}`} />
                      </div>
                      
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-foreground mb-1">
                          {exp.title}
                        </h3>
                        <div className="flex items-center space-x-2 mb-3">
                          <span className={`font-medium ${exp.color}`}>{exp.company}</span>
                          <span className="text-muted-foreground">•</span>
                          <span className="text-sm text-muted-foreground">{exp.duration}</span>
                        </div>
                        <p className="text-muted-foreground leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExperienceSection;