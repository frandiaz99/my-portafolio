"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react";
import educationData from "@/data/education-data.json"; // Assuming you have a JSON file with education data

// Define the structure of an education item

const EducationTimeline = ({
  items = educationData,
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


export default EducationTimeline;
