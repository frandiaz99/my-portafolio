"use client";

import React from "react";
import { Progress } from "./ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

interface Skill {
  name: string;
  proficiency: number;
  category: "languages" | "frameworks" | "tools";
  icon?: string;
}

interface SkillsSectionProps {
  skills?: Skill[];
}

const defaultSkills: Skill[] = [
  // Languages
  { name: "JavaScript", proficiency: 90, category: "languages" },
  { name: "Python", proficiency: 85, category: "languages" },
  { name: "Java", proficiency: 75, category: "languages" },
  { name: "C++", proficiency: 70, category: "languages" },
  { name: "TypeScript", proficiency: 80, category: "languages" },
  { name: "SQL", proficiency: 75, category: "languages" },

  // Frameworks
  { name: "React", proficiency: 85, category: "frameworks" },
  { name: "Next.js", proficiency: 80, category: "frameworks" },
  { name: "Node.js", proficiency: 75, category: "frameworks" },
  { name: "Express", proficiency: 70, category: "frameworks" },
  { name: "Django", proficiency: 65, category: "frameworks" },
  { name: "TailwindCSS", proficiency: 90, category: "frameworks" },

  // Tools
  { name: "Git", proficiency: 85, category: "tools" },
  { name: "Docker", proficiency: 70, category: "tools" },
  { name: "AWS", proficiency: 65, category: "tools" },
  { name: "VS Code", proficiency: 95, category: "tools" },
  { name: "Figma", proficiency: 75, category: "tools" },
  { name: "Jira", proficiency: 80, category: "tools" },
];

const SkillsSection = ({ skills = defaultSkills }: SkillsSectionProps) => {
  const languageSkills = skills.filter(
    (skill) => skill.category === "languages",
  );
  const frameworkSkills = skills.filter(
    (skill) => skill.category === "frameworks",
  );
  const toolSkills = skills.filter((skill) => skill.category === "tools");

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Technical Skills
        </h2>

        <Tabs defaultValue="languages" className="w-full max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="languages">Languages</TabsTrigger>
            <TabsTrigger value="frameworks">Frameworks</TabsTrigger>
            <TabsTrigger value="tools">Tools</TabsTrigger>
          </TabsList>

          <TabsContent value="languages" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {languageSkills.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Language Expertise</h3>
              <p className="text-muted-foreground">
                Proficient in multiple programming languages with a focus on
                building robust, efficient applications. Experienced in both
                object-oriented and functional programming paradigms.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="frameworks" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {frameworkSkills.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">
                Framework Experience
              </h3>
              <p className="text-muted-foreground">
                Experienced with modern web frameworks and libraries for
                building responsive, interactive applications. Focused on
                creating maintainable and scalable solutions.
              </p>
            </div>
          </TabsContent>

          <TabsContent value="tools" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {toolSkills.map((skill, index) => (
                <SkillCard key={index} skill={skill} />
              ))}
            </div>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Development Tools</h3>
              <p className="text-muted-foreground">
                Proficient with industry-standard development tools and
                platforms. Experienced in version control, containerization, and
                cloud services for efficient development workflows.
              </p>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-16 text-center">
          <h3 className="text-xl font-semibold mb-4">Currently Learning</h3>
          <div className="flex flex-wrap justify-center gap-2">
            <Badge variant="outline" className="text-sm py-1 px-3">
              GraphQL
            </Badge>
            <Badge variant="outline" className="text-sm py-1 px-3">
              Kubernetes
            </Badge>
            <Badge variant="outline" className="text-sm py-1 px-3">
              Machine Learning
            </Badge>
            <Badge variant="outline" className="text-sm py-1 px-3">
              Rust
            </Badge>
            <Badge variant="outline" className="text-sm py-1 px-3">
              WebAssembly
            </Badge>
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillCard = ({ skill }: { skill: Skill }) => {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="flex justify-between items-center mb-2">
          <h4 className="font-medium">{skill.name}</h4>
          <span className="text-sm text-muted-foreground">
            {skill.proficiency}%
          </span>
        </div>
        <Progress value={skill.proficiency} className="h-2" />
      </CardContent>
    </Card>
  );
};

export default SkillsSection;
