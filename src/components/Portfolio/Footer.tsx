import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="relative z-10 py-8 border-t border-border/20 bg-background/80 backdrop-blur-sm"
    >
      <div className="container mx-auto px-8 sm:px-12 lg:px-16 xl:px-24 2xl:px-32 max-w-[95vw]">
        <div className="text-center">
          <motion.p 
            className="text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            © 2025 All rights reserved.
          </motion.p>
          <motion.p 
            className="text-xs text-muted-foreground/60 mt-2"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Built with React and Tailwind CSS
          </motion.p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
