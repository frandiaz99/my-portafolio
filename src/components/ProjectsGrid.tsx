"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "./ProjectCard";
import defaultProjects from "@/data/projects-data.json";

interface Project {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  category: "academic" | "personal" | "internship";
  technologies: string[];
  githubUrl: string;
}

interface ProjectsGridProps {
  projects?: Project[];
}

export default function ProjectsGrid({
  projects = defaultProjects.map((project) => ({
    ...project,
    category: project.category as "academic" | "personal" | "internship",
  })),
}: ProjectsGridProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section className="w-full py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
          Explore my portfolio of projects spanning academic work, personal
          explorations, and professional experiences.
        </p>

        <Tabs
          defaultValue="all"
          className="w-full max-w-3xl mx-auto mb-12"
          onValueChange={setActiveCategory}
        >
          <TabsList className="grid grid-cols-4 w-full">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="academic">Academic</TabsTrigger>
            <TabsTrigger value="personal">Personal</TabsTrigger>
            <TabsTrigger value="internship">Internship</TabsTrigger>
          </TabsList>
        </Tabs>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              thumbnail={project.thumbnail}
              technologies={project.technologies}
              githubUrl={project.githubUrl}
              category={project.category}
            />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
