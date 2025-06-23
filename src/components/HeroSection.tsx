"use client";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";

interface HeroSectionProps {
  name?: string;
  tagline?: string;
  imageUrl?: string;
  skills?: string[];
}

const HeroSection = ({
  name = "Jane Doe",
  tagline = "Computer Science Student & Software Developer",
  imageUrl = "https://api.dicebear.com/7.x/avataaars/svg?seed=portfolio",
  skills = ["React", "TypeScript", "Python", "Java", "AWS", "Node.js"],
}: HeroSectionProps) => {
  return (
    <section className="relative w-full py-20 bg-background flex flex-col items-center justify-center overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 flex items-center justify-center">
          <pre className="text-xs sm:text-sm md:text-base text-foreground/30 font-mono">
            {`function Portfolio() {
  return (
    <Developer
      name="${name}"
      skills={[${skills.join(", ")}]}
      passion="Building amazing software"
    />
  );
}`}
          </pre>
        </div>
      </div>

      <div className="container px-4 mx-auto z-10 flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Avatar className="h-32 w-32 md:h-40 md:w-40 border-4 border-primary/20">
            <AvatarImage src={imageUrl} alt={name} />
            <AvatarFallback className="text-2xl">
              {name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
        </motion.div>

        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-4"
        >
          {name}
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-xl md:text-2xl text-muted-foreground text-center max-w-2xl mb-8"
        >
          {tagline}
        </motion.p>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-2 md:gap-3"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
            >
              <Badge
                variant="secondary"
                className="text-sm md:text-base py-1 px-3"
              >
                {skill}
              </Badge>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
