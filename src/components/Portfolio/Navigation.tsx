import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { SlideTabs } from '@/components/ui/slide-tabs';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'tools', label: 'Tools' },
  { id: 'contact', label: 'Contact' },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = navItems.map(item => item.id);
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'pt-3' 
          : 'pt-5'
      }`}
    >
      <div className="px-4">
        <div className="mx-auto w-fit">
          <div className={`flex items-center justify-center gap-4 px-4 md:px-5 py-2.5 rounded-full transition-all duration-300 ${
            isScrolled
              ? 'bg-background/80 border border-border/60 shadow-neon backdrop-blur-xl'
              : 'bg-background/55 border border-border/50 backdrop-blur-lg'
          }`}>
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <SlideTabs
              tabs={navItems}
              selectedId={activeSection}
              onTabSelect={scrollToSection}
              className="border-0 bg-transparent p-0 backdrop-blur-none"
            />
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="md:hidden w-8 h-8 flex flex-col justify-center items-center space-y-1"
          >
            <div className="w-5 h-0.5 bg-foreground"></div>
            <div className="w-5 h-0.5 bg-foreground"></div>
            <div className="w-5 h-0.5 bg-foreground"></div>
          </motion.button>
        </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;