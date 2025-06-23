"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react";

interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  description: string;
  courses: string[];
  achievements: string[];
}

const EducationTimeline = ({
  items = defaultEducationItems,
}: {
  items?: EducationItem[];
}) => {
  return (
    <section className="w-full py-12 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Education</h2>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-border"></div>

          {items.map((item, index) => (
            <div key={index} className="mb-12 relative">
              <div
                className={`flex flex-col md:flex-row items-start ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-primary flex items-center justify-center z-10">
                  <div className="w-3 h-3 rounded-full bg-background"></div>
                </div>

                {/* Content */}
                <div
                  className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-12" : "md:pr-12"}`}
                >
                  <Card className="overflow-hidden border-primary/10 shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-2">
                        <GraduationCap className="h-5 w-5 mr-2 text-primary" />
                        <h3 className="text-xl font-semibold">{item.degree}</h3>
                      </div>

                      <div className="flex items-center mb-4 text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{item.period}</span>
                      </div>

                      <h4 className="text-lg font-medium mb-2">
                        {item.institution}
                      </h4>
                      <p className="text-muted-foreground mb-4">
                        {item.description}
                      </p>

                      <Separator className="my-4" />

                      <div className="mb-4">
                        <div className="flex items-center mb-2">
                          <BookOpen className="h-4 w-4 mr-2 text-primary" />
                          <h5 className="font-medium">Key Courses</h5>
                        </div>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {item.courses.map((course, idx) => (
                            <Badge key={idx} variant="secondary">
                              {course}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {item.achievements.length > 0 && (
                        <div>
                          <div className="flex items-center mb-2">
                            <Award className="h-4 w-4 mr-2 text-primary" />
                            <h5 className="font-medium">Achievements</h5>
                          </div>
                          <ul className="list-disc list-inside text-sm text-muted-foreground">
                            {item.achievements.map((achievement, idx) => (
                              <li key={idx}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const defaultEducationItems: EducationItem[] = [
  {
    degree: "Master of Science in Computer Science",
    institution: "Stanford University",
    period: "2022 - Present",
    description:
      "Specializing in Artificial Intelligence and Machine Learning with focus on neural networks and computer vision applications.",
    courses: [
      "Advanced Algorithms",
      "Machine Learning",
      "Neural Networks",
      "Computer Vision",
      "Distributed Systems",
    ],
    achievements: [
      "Research Assistant in the AI Lab",
      "Teaching Assistant for CS101: Introduction to Computer Science",
      "Dean's List for Academic Excellence",
    ],
  },
  {
    degree: "Bachelor of Science in Computer Science",
    institution: "University of California, Berkeley",
    period: "2018 - 2022",
    description:
      "Graduated with honors. Focused on software engineering fundamentals and systems design.",
    courses: [
      "Data Structures",
      "Algorithms",
      "Operating Systems",
      "Database Systems",
      "Web Development",
    ],
    achievements: [
      "Graduated Summa Cum Laude",
      "Undergraduate Research in Distributed Systems",
      "President of Computer Science Club",
    ],
  },
  {
    degree: "High School Diploma",
    institution: "Tech Preparatory Academy",
    period: "2014 - 2018",
    description:
      "Advanced placement in mathematics and computer science courses.",
    courses: ["AP Computer Science", "AP Calculus", "AP Physics", "Robotics"],
    achievements: [
      "Valedictorian",
      "First place in State Robotics Competition",
      "National Merit Scholar",
    ],
  },
];

export default EducationTimeline;
