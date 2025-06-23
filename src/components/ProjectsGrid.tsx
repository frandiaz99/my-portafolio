"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProjectCard from "./ProjectCard";

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
  projects = defaultProjects,
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

const defaultProjects: Project[] = [
  {
    id: "1",
    title: "Machine Learning Classifier",
    description:
      "An academic project implementing various classification algorithms to analyze and predict outcomes from medical datasets.",
    thumbnail:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80",
    category: "academic",
    technologies: ["Python", "scikit-learn", "Pandas", "Matplotlib"],
    githubUrl: "https://github.com/username/ml-classifier",
  },
  {
    id: "2",
    title: "Personal Blog Platform",
    description:
      "A full-stack web application for creating and managing blog posts with user authentication and markdown support.",
    thumbnail:
      "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&q=80",
    category: "personal",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    githubUrl: "https://github.com/username/blog-platform",
  },
  {
    id: "3",
    title: "E-commerce Analytics Dashboard",
    description:
      "An internship project developing a real-time analytics dashboard for tracking sales, user behavior, and inventory management.",
    thumbnail:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    category: "internship",
    technologies: ["React", "TypeScript", "AWS", "D3.js"],
    githubUrl: "https://github.com/username/ecommerce-analytics",
  },
  {
    id: "4",
    title: "Distributed Systems Simulator",
    description:
      "An academic project simulating distributed systems concepts like consensus algorithms and fault tolerance.",
    thumbnail:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    category: "academic",
    technologies: ["Java", "Docker", "RabbitMQ"],
    githubUrl: "https://github.com/username/distributed-simulator",
  },
  {
    id: "5",
    title: "Weather Forecast App",
    description:
      "A mobile-responsive web application that provides real-time weather forecasts using geolocation and weather APIs.",
    thumbnail:
      "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
    category: "personal",
    technologies: ["JavaScript", "React", "OpenWeather API", "Tailwind CSS"],
    githubUrl: "https://github.com/username/weather-app",
  },
  {
    id: "6",
    title: "Supply Chain Optimization Tool",
    description:
      "An internship project that uses optimization algorithms to improve logistics and reduce costs in supply chain operations.",
    thumbnail:
      "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=800&q=80",
    category: "internship",
    technologies: ["Python", "OR-Tools", "PostgreSQL", "Flask"],
    githubUrl: "https://github.com/username/supply-chain-optimizer",
  },
];
