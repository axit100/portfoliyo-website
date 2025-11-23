import HeroSection from "./components/HeroSection";
import RightSideMenu from "./components/RightSideMenu";
import IntroductionSection from "./components/IntroductionSection";
import LeftSideLine from "./components/LeftSideLine";
import EducationSection from "./components/EducationSection";
import SkillsSection from "./components/SkillsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-gold-50 selection:bg-gold-400 selection:text-black">
      <RightSideMenu />
      <LeftSideLine />

      <HeroSection />

      <IntroductionSection />

      <EducationSection />

      <SkillsSection />

      {/* Projects Section */}
      <section id="projects" className="py-32 px-4 sm:px-8 bg-zinc-900/30">
        <div className="max-w-6xl mx-auto space-y-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-gold-200 mb-6">My Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="group relative overflow-hidden rounded-xl border-2 border-gold-400/30 bg-zinc-900/50 hover:border-gold-400/50 transition-all duration-300 hover:shadow-xl hover:shadow-gold-400/20">
                <div className="aspect-video bg-zinc-900 w-full object-cover" />
                <div className="p-6 space-y-3">
                  <h3 className="text-xl font-semibold text-gold-200">Project Title {item}</h3>
                  <p className="text-gold-300">
                    A brief description of the project and the technologies used to build it.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-4 sm:px-8">
        <div className="max-w-xl mx-auto text-center space-y-10">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gold-200">Get In Touch</h2>
          <p className="text-gold-300 text-lg">
            I'm currently open to new opportunities and collaborations.
          </p>
          <a
            href="mailto:hello@example.com"
            className="inline-flex h-12 items-center justify-center rounded-md bg-gold-400 px-8 text-sm font-medium text-black shadow transition-colors hover:bg-gold-300"
          >
            Say Hello
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-10 text-center border-t-2 border-gold-400/30 bg-black">
        <div className="space-y-3">
          <p className="text-gold-200 text-sm">
            Design & Develop by <span className="text-gold-300 font-semibold">Axit Sompura</span>
          </p>
          <p className="text-gold-300/70 text-xs">
            © {new Date().getFullYear()} Yashvi. All rights reserved.
          </p>
        </div>
      </footer>
    </main>
  );
}
