import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, Code, Sparkles } from "lucide-react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const roles = useMemo(
    () => ["UI/UX Designer", "Graphic Designer", "Front-End Developer"],
    []
  );
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < currentRole.length) {
            setDisplayText(currentRole.slice(0, charIndex + 1));
            setCharIndex(charIndex + 1);
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (charIndex > 0) {
            setDisplayText(currentRole.slice(0, charIndex - 1));
            setCharIndex(charIndex - 1);
          } else {
            setIsDeleting(false);
            setRoleIndex((roleIndex + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex, roles]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden px-3 sm:px-6"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl animate-spin-slow" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10 mt-10 md:mt-0">
        <div className="text-center max-w-4xl mx-auto">
          {/* Greeting */}
          <div className="animate-fade-in mb-4 md:mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/20 text-sm font-medium mb-4">
              <Sparkles size={16} />
              Crafting Modern Interfaces with Next.js & Figma
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 animate-slide-up leading-tight">
            Hi, I&apos;m <span className="text-gradient">Uttam Singhal</span>
          </h1>

          {/* Dynamic Role */}
          <div
            className="text-lg sm:text-2xl lg:text-3xl text-muted-foreground mb-4 md:mb-8 font-mono min-h-[3rem] flex items-center justify-center animate-slide-up px-2 text-center"
            style={{ animationDelay: "0.2s" }}
          >
            <Code className="mr-2 sm:mr-3 text-primary shrink-0" size={24} />
            <span className="truncate max-w-full">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          {/* Description */}
          <p
            className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl sm:max-w-3xl mx-auto mb-6 md:mb-12 leading-relaxed animate-slide-up px-3 sm:px-0"
            style={{ animationDelay: "0.4s" }}
          >
            Hi! I’m Uttam Singhal. With 2.9 years of experience in UI/UX and frontend, 
            I specialize in designing user-centered interfaces using Figma, Adobe XD, and modern web technologies.
          </p>

          {/* Action Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up px-4"
            style={{ animationDelay: "0.6s" }}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("#projects")}
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 glow-effect text-base"
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#contact")}
              className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-base"
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div
            className="flex justify-center gap-4 sm:gap-6 animate-slide-up flex-wrap"
            style={{ animationDelay: "0.8s" }}
          >
            <a
              href="https://github.com/Uttamg61001"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 sm:p-4 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:glow-effect"
            >
              <Github size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/uttam-singhal-489130244/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 sm:p-4 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:glow-effect"
            >
              <Linkedin size={22} />
            </a>
            <a
              href="mailto:uttamg61001@gmail.com"
              className="p-3 sm:p-4 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110 hover:glow-effect"
            >
              <Mail size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
