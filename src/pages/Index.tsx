import Navigation from '@/components/Portfolio/Navigation';
import HeroSection from '@/components/Portfolio/HeroSection';
import AboutSection from '@/components/Portfolio/AboutSection';
import ExperienceSection from '@/components/Portfolio/ExperienceSection';
import ProjectsSection from '@/components/Portfolio/ProjectsSection';
import ToolsSection from '@/components/Portfolio/ToolsSection';
import ContactSection from '@/components/Portfolio/ContactSection';
import Footer from '@/components/Portfolio/Footer';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ToolsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
