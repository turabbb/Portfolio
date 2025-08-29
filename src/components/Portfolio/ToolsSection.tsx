import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  FaReact, 
  FaNodeJs, 
  FaPython, 
  FaGithub, 
  FaDocker,
  FaJs,
  FaHtml5,
  FaCss3Alt
} from 'react-icons/fa';
import { 
  SiTypescript, 
  SiNextdotjs, 
  SiTailwindcss, 
  SiRedux, 
  SiMongodb, 
  SiPostgresql, 
  SiExpress,
  SiTensorflow,
  SiPytorch,
  SiOpenai,
  SiStreamlit,
  SiOpencv,
  SiStripe,
  SiFastapi,
  SiFramer
} from 'react-icons/si';
import { IconType } from 'react-icons';

const ToolsSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const toolCategories = [
    {
      title: 'Frontend',
      tools: [
        { name: 'React', icon: FaReact },
        { name: 'TypeScript', icon: SiTypescript },
        { name: 'Next.js', icon: SiNextdotjs },
        { name: 'Tailwind CSS', icon: SiTailwindcss },
        { name: 'Redux', icon: SiRedux },
        { name: 'Framer Motion', icon: SiFramer }
      ],
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
    {
      title: 'Backend',
      tools: [
        { name: 'Node.js', icon: FaNodeJs },
        { name: 'Express', icon: SiExpress },
        { name: 'MongoDB', icon: SiMongodb },
        { name: 'PostgreSQL', icon: SiPostgresql },
        { name: 'FastAPI', icon: SiFastapi },
        { name: 'REST APIs', icon: FaJs }
      ],
      color: 'text-secondary',
      bgColor: 'bg-secondary/10',
    },
    {
      title: 'AI/ML',
      tools: [
        { name: 'Python', icon: FaPython },
        { name: 'TensorFlow', icon: SiTensorflow },
        { name: 'PyTorch', icon: SiPytorch },
        { name: 'LangChain', icon: FaPython },
        { name: 'OpenAI', icon: SiOpenai },
        { name: 'HuggingFace', icon: FaPython }
      ],
      color: 'text-accent',
      bgColor: 'bg-accent/10',
    },
    {
      title: 'Tools & Others',
      tools: [
        { name: 'GitHub', icon: FaGithub },
        { name: 'Docker', icon: FaDocker },
        { name: 'Streamlit', icon: SiStreamlit },
        { name: 'OpenCV', icon: SiOpencv },
        { name: 'MediaPipe', icon: FaPython },
        { name: 'Stripe', icon: SiStripe }
      ],
      color: 'text-primary',
      bgColor: 'bg-primary/10',
    },
  ];

  const allTools = toolCategories.flatMap(category => 
    category.tools.map(tool => ({ name: tool.name, icon: tool.icon, category: category.title }))
  );

  return (
    <section id="tools" className="py-20 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-8 sm:px-12 lg:px-16 xl:px-24 2xl:px-32 max-w-[95vw]">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gradient mb-4">
            Tools & Technologies
          </h2>
          <div className="w-20 h-1 bg-gradient-primary rounded-full mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            A comprehensive toolkit spanning modern web development, artificial intelligence, 
            and cutting-edge technologies for building scalable solutions.
          </p>
        </motion.div>

        {/* Infinite Scroll Animation */}
        <div className="relative overflow-hidden mb-16">
          <motion.div
            className="flex space-x-8 py-4"
            animate={{ x: [0, -2000] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 40,
                ease: "linear",
              },
            }}
          >
            {[...allTools, ...allTools].map((tool, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 glass px-6 py-3 rounded-lg border-neon hover-lift group flex items-center space-x-3"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <tool.icon className="w-5 h-5 text-primary group-hover:text-gradient transition-all duration-300" />
                <span className="text-foreground font-medium whitespace-nowrap group-hover:text-gradient transition-all duration-300">
                  {tool.name}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Category Grid */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 xl:gap-12 2xl:gap-16"
        >
          {toolCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass p-6 rounded-lg border-neon hover-lift h-full">
                <h3 className={`text-xl font-semibold mb-4 ${category.color} group-hover:text-gradient transition-all duration-300`}>
                  {category.title}
                </h3>
                
                <div className="space-y-3">
                  {category.tools.map((tool, toolIndex) => (
                    <motion.div
                      key={toolIndex}
                      className={`flex items-center space-x-3 p-2 rounded ${category.bgColor} hover:bg-opacity-20 transition-all duration-300`}
                      whileHover={{ x: 5 }}
                    >
                      <tool.icon className={`w-4 h-4 ${category.color}`} />
                      <span className="text-foreground font-medium text-sm">{tool.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Skills Visualization */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-4 glass px-8 py-4 rounded-full border-neon">
            <motion.div
              className="flex space-x-2"
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            >
              <div className="w-3 h-3 bg-primary rounded-full" />
              <div className="w-3 h-3 bg-secondary rounded-full" />
              <div className="w-3 h-3 bg-accent rounded-full" />
            </motion.div>
            <span className="text-muted-foreground font-medium">
              Always learning, always growing
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ToolsSection;