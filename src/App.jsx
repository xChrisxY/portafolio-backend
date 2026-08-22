import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import YoutubeSection from "./components/YoutubeSection";
import EducationSection from "./components/EducationSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen w-full bg-ink-950">
      <Navbar />
      <main>
        <Hero />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <YoutubeSection />
        <EducationSection />
      </main>
      <Footer />
    </div>
  );
}
