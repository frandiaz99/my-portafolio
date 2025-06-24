import React from "react";
import HeroSection from "@/components/HeroSection";
import ProjectsGrid from "@/components/ProjectsGrid";
import SkillsSection from "@/components/SkillsSection";
import EducationTimeline from "@/components/EducationTimeline";
import { ThemeSwitcher } from "@/components/theme-switcher";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Theme Switcher - Fixed position */}
      <div className="fixed top-4 right-4 z-50">
        <ThemeSwitcher />
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section className="mb-16">
          <HeroSection />
        </section>

        {/* Projects Section */}
        <section className="mb-16" id="projects">
          <ProjectsGrid />
        </section>

        {/* Skills Section */}
        <section className="mb-16" id="skills">
          <SkillsSection />
        </section>

        {/* Education Section */}
        <section className="mb-16" id="education">
          <EducationTimeline />
        </section>

        {/* Footer */}
        <footer className="py-8 text-center border-t border-border">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} - Built with Next.js and Tailwind CSS
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <a
              href="https://github.com/username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="mailto:email@example.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Email
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
