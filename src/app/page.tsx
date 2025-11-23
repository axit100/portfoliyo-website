import HeroSection from "./components/HeroSection";
import RightSideMenu from "./components/RightSideMenu";
import IntroductionSection from "./components/IntroductionSection";
import LeftSideLine from "./components/LeftSideLine";
import EducationSection from "./components/EducationSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-gold-50 selection:bg-gold-400 selection:text-black">
      <RightSideMenu />
      <LeftSideLine />

      <HeroSection />

      <IntroductionSection />

      <EducationSection />

      <SkillsSection />

      <ProjectsSection />

      <ContactSection />

      {/* Footer */}
      <footer className="py-10 text-center border-t-2 border-gold-400/30 bg-black">
        <div className="space-y-3">
          <p className="text-gold-200 text-sm">
            Design & Develop by <span className="text-gold-300 font-semibold">Axit Sompura</span>
          </p>
          <p className="text-gold-300/70 text-xs">
            © {new Date().getFullYear()} Yashvi Trivedi. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
