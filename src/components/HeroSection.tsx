"use client";
import React, { useState, useEffect, useRef } from "react";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";
import codeSnippets from "../data/code-snippets.json";
const snippets: Record<string, string> = codeSnippets;

// Importa react-syntax-highlighter y los lenguajes que necesitas
import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
import js from "react-syntax-highlighter/dist/esm/languages/hljs/javascript";
import python from "react-syntax-highlighter/dist/esm/languages/hljs/python";
import java from "react-syntax-highlighter/dist/esm/languages/hljs/java";
import typescript from "react-syntax-highlighter/dist/esm/languages/hljs/typescript";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

// Registrar lenguajes
SyntaxHighlighter.registerLanguage("javascript", js);
SyntaxHighlighter.registerLanguage("typescript", typescript);
SyntaxHighlighter.registerLanguage("python", python);
SyntaxHighlighter.registerLanguage("java", java);

// Relaciona skills con lenguajes
const skillToLang: Record<string, string> = {
  React: "javascript",
  "Node.js": "javascript",
  TypeScript: "typescript",
  Python: "python",
  Java: "java",
  AWS: "bash",
};

const helloWorldSnippet = `Every programming journey starts with "Hello World" 
  — and occasional crying. This was mine.
`;

interface HeroSectionProps {
  name?: string;
  tagline?: string;
  imageUrl?: string;
  skills?: string[];
}

const HeroSection = ({
  name = "Francisco Diaz Malbran",
  tagline = "Computer Science Student & Software Developer",
  imageUrl = "https://api.dicebear.com/9.x/avataaars/svg?seed=Aidan&scale=110&backgroundColor[]&backgroundType[]&accessories[]&clothesColor=929598&clothing=hoodie&clothingGraphic[]&eyebrows=default&eyes=happy&facialHair=beardLight&hairColor=2c1b18&mouth=smile&skinColor=ffdbb4&style=circle&top=dreads02",
  skills = ["React", "TypeScript", "Python", "Java", "AWS", "Node.js"],
}: HeroSectionProps) => {
  // Cambia el valor inicial de selectedSkill a "hello"
  const [selectedSkill, setSelectedSkill] = useState<string | null>("hello");
  const [typedCode, setTypedCode] = useState<string>("");
  const typingTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let code = "";
    if (selectedSkill === "hello") {
      code = helloWorldSnippet;
    } else if (selectedSkill) {
      code = codeSnippets[selectedSkill as keyof typeof codeSnippets];
    }
    setTypedCode("");
    let i = 0;
    if (typingTimeout.current) clearTimeout(typingTimeout.current);
    if (code) {
      const type = () => {
        setTypedCode(code.slice(0, i + 1));
        i++;
        if (i < code.length) {
          typingTimeout.current = setTimeout(type, 15);
        }
      };
      type();
    }
    return () => {
      if (typingTimeout.current) clearTimeout(typingTimeout.current);
    };
  }, [selectedSkill]);

  return (
    <section className="relative w-full py-32 bg-background flex flex-col items-center justify-center overflow-hidden">
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
          className="flex flex-wrap justify-center gap-2 md:gap-3 relative"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.3 }}
            >
              <Badge
                variant={selectedSkill === skill ? "default" : "secondary"}
                className="text-sm md:text-base py-1 px-3 cursor-pointer"
                onClick={() =>
                  setSelectedSkill(skill === selectedSkill ? null : skill)
                }
              >
                {skill}
              </Badge>
            </motion.div>
          ))}

          {/* Mini terminal/código ABSOLUTA */}
          {(selectedSkill || selectedSkill === "hello") && (
            <div className="absolute left-1/2 -translate-x-1/2 top-full mt-4 w-full pointer-events-none">
              <SyntaxHighlighter
                language={selectedSkill === "hello" ? "bash" : (skillToLang[selectedSkill!] || "javascript")}
                style={atomOneDark}
                customStyle={{
                  background: "transparent",
                  padding: "12px",
                  borderRadius: "8px",
                  fontSize: "0.85rem",
                  maxHeight: "16rem",
                  overflow: "auto",
                  margin: 0,
                }}
                showLineNumbers={false}
                wrapLines={true}
              >
                {typedCode + (typedCode.length < ((selectedSkill === "hello" ? helloWorldSnippet : snippets[selectedSkill!]) || "").length ? "|" : "")}
              </SyntaxHighlighter>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
