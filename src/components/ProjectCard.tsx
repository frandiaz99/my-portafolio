"use client";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  thumbnail: string;
  technologies: string[];
  githubUrl?: string;
  demoUrl?: string;
  category: "academic" | "personal" | "internship";
  fullDescription?: string;
}

const ProjectCard = ({
  title = "Project Title",
  description = "A short description of the project showcasing key features and technologies used.",
  thumbnail = "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80",
  technologies = ["React", "TypeScript", "Tailwind CSS"],
  githubUrl = "https://github.com",
  demoUrl,
  category = "personal",
  fullDescription = "This is a more detailed description of the project that explains the problem it solves, the approach taken, challenges faced, and outcomes achieved. This text is only visible when the card is expanded.",
}: ProjectCardProps) => {
  const [expanded, setExpanded] = useState(false);

  const onToggleExpand = () => {
    setExpanded(!expanded);
  };
  return (
    <Card className="w-full bg-card overflow-hidden transition-all duration-300 hover:shadow-lg border border-border">
      <div className="relative h-48 w-full overflow-hidden">
        <Image
          src={thumbnail}
          alt={title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
        <Badge className="absolute top-2 right-2" variant="secondary">
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </Badge>
      </div>

      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <CardDescription className="line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <Badge key={index} variant="outline">
              {tech}
            </Badge>
          ))}
        </div>

        {expanded && (
          <div className="mt-4 text-sm text-muted-foreground">
            <p>{fullDescription}</p>
          </div>
        )}
      </CardContent>

      <CardFooter className="flex justify-between pt-2 border-t">
        <div className="flex gap-2">
          {githubUrl && (
            <Button variant="outline" size="sm" asChild>
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-1 h-4 w-4" />
                Code
              </a>
            </Button>
          )}

          {demoUrl && (
            <Button variant="outline" size="sm" asChild>
              <a href={demoUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-1 h-4 w-4" />
                Demo
              </a>
            </Button>
          )}
        </div>

        <Button
          variant="ghost"
          size="sm"
          onClick={onToggleExpand}
          aria-label={expanded ? "Show less" : "Show more"}
        >
          {expanded ? (
            <>
              <ChevronUp className="h-4 w-4 mr-1" />
              Less
            </>
          ) : (
            <>
              <ChevronDown className="h-4 w-4 mr-1" />
              More
            </>
          )}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
