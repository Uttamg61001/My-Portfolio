"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lens } from "../ui/lens";
import { cn } from "@/lib/utils";

export default function Projects() {
  const projectsData = [
    {
      title: "Chain Optimization",
      description:
        "Designed a logistics and supply chain dashboard that simplifies operational workflows through real-time analytics, intuitive data visualization, responsive layouts, and user-centered dashboard experiences.",
      image: "thumbnail-2.webp",
      link: "...",
      technologies: [
        "Figma",
        "Dashboard Design",
        "Data Visualization",
        "Design System",
        "Responsive Design",
        "Interactive Prototype",
      ],
    },
    {
      title: "Chat-Bot",
      description:
        "Designed an AI-powered conversational platform focused on intuitive chat experiences, seamless communication workflows, responsive interfaces, and reusable UI components for web applications.",
      image: "thumbnail-3.webp",
      link: "...",
      technologies: [
        "Figma",
        "AI Chat",
        "User Flow",
        "Prototype",
        "Responsive Design",
        "Design System",
      ],
    },
    {
      title: "Technologies",
      description:
        "Designed a modern digital agency website with responsive layouts, scalable UI components, engaging visual hierarchy, and conversion-focused user experiences across light and dark themes.",
      image: "thumbnail-1.webp",
      link: "...",
      technologies: [
        "Figma",
        "Responsive Design",
        "Auto Layout",
        "Design System",
        "Typography",
        "Visual Hierarchy",
      ],
    },
    {
      title: "Powered by AI",
      description:
        "Designed an AI dashboard that presents automation insights, analytics, and intelligent workflows through modern interfaces, reusable components, and intuitive data visualization.",
      image: "thumbnail-9.webp",
      link: "...",
      technologies: [
        "Figma",
        "Dashboard Design",
        "AI Experience",
        "Data Visualization",
        "Prototype",
        "Responsive Design",
      ],
    },
    {
      title: "Mandiram",
      description:
        "Designed a mobile application that helps users discover temples, rituals, and spiritual content through a clean, accessible, and user-friendly interface with seamless navigation.",
      image: "thumbnail-6.webp",
      link: "...",
      technologies: [
        "Figma",
        "Mobile UI",
        "Design System",
        "Prototype",
        "Responsive Design",
        "User Flow",
      ],
    },
    {
      title: "Guru-ji Finder",
      description:
        "Designed a location-based mobile application enabling users to discover nearby spiritual mentors and events through intuitive search, maps, and streamlined user journeys.",
      image: "thumbnail-8.webp",
      link: "...",
      technologies: [
        "Figma",
        "Google Maps",
        "Mobile Design",
        "User Research",
        "Prototype",
        "Responsive Design",
      ],
    },
    {
      title: "Cineview",
      description:
        "Designed a modern movie discovery platform focused on seamless content exploration, intuitive navigation, responsive layouts, and an engaging entertainment experience.",
      image: "thumbnail-5.webp",
      link: "...",
      technologies: [
        "Figma",
        "Responsive Design",
        "Visual Design",
        "Prototype",
        "Information Architecture",
        "UI Components",
      ],
    },
    {
      title: "Katalyst Studio",
      description:
        "Designed a high-converting digital agency website showcasing services, portfolio, and brand identity through modern layouts, scalable design systems, and responsive user experiences.",
      image: "thumbnail 10.webp",
      link: "...",
      technologies: [
        "Figma",
        "Design System",
        "Responsive Design",
        "Typography",
        "Auto Layout",
        "Visual Hierarchy",
      ],
    },
  ];

  const [projects] = useState(projectsData);

  return (
    <section id="projects" className="py-10 md:py-20 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              A collection of product design projects showcasing my experience in designing SaaS platforms, AI products, enterprise applications,
              and responsive web & mobile experiences with a strong focus on usability, scalability, and user-centered design.

            </p>
          </div>

          {/* Project Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------------------------------------------
   Individual Project Card Component (Clickable)
--------------------------------------------------- */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function ProjectCard({ project }: any) {
  const [hovering, setHovering] = useState(false);

  const handleClick = () => {
    if (project.link) {
      window.open(project.link, "_blank");
    }
  };

  return (
    <Card
      onClick={handleClick}
      className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-[#1D2235] to-[#121318] cursor-pointer transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg"
    >
      <Rays />
      <Beams />
      <div className="relative z-10 p-4 md:p-6">
        {/* Lens + Image */}
        <div className="mb-6">
          <Lens hovering={hovering} setHovering={setHovering}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover rounded-2xl"
            />
          </Lens>
        </div>

        {/* Content with Blur on Hover */}
        <motion.div
          animate={{
            filter: hovering ? "blur(2px)" : "blur(0px)",
          }}
        >
          <h3 className="text-xl font-semibold text-primary mb-2">
            {project.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed mb-6">
            {project.description}
          </p>

          {/* Technologies */}
          <div>
            <h4 className="font-medium mb-3 text-foreground">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech: string, idx: number) => (
                <Badge
                  key={idx}
                  variant="outline"
                  className="border-primary/20 text-primary text-xs px-2 py-1"
                >

                  {tech.endsWith(".png") || tech.endsWith(".jpg") ? (
                    <>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={tech}
                        alt={tech}
                        className="w-6 h-6 object-contain"
                      />
                    </>
                  ) : (
                    tech
                  )}

                </Badge>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Card>
  );
}

/* ---------------------------------------------------
   Glow SVG Components
--------------------------------------------------- */
const Beams = () => (
  <svg
    width="380"
    height="315"
    viewBox="0 0 380 315"
    fill="none"
    className="absolute top-0 left-1/2 -translate-x-1/2 w-full pointer-events-none"
  >
    <g filter="url(#filter0_f)">
      <circle cx="34" cy="52" r="114" fill="#4781ff" />
    </g>
    <g filter="url(#filter1_f)">
      <circle cx="332" cy="24" r="102" fill="#8A4BFF" />
    </g>
    <g filter="url(#filter2_f)">
      <circle cx="191" cy="53" r="102" fill="#4781ff" />
    </g>
    <defs>
      <filter id="filter0_f" x="-192" y="-174" width="452" height="452">
        <feGaussianBlur stdDeviation="56" />
      </filter>
      <filter id="filter1_f" x="70" y="-238" width="524" height="524">
        <feGaussianBlur stdDeviation="80" />
      </filter>
      <filter id="filter2_f" x="-71" y="-209" width="524" height="524">
        <feGaussianBlur stdDeviation="80" />
      </filter>
    </defs>
  </svg>
);

const Rays = ({ className }: { className?: string }) => (
  <svg
    width="380"
    height="397"
    viewBox="0 0 380 397"
    fill="none"
    className={cn("absolute left-0 top-0 pointer-events-none z-[1]", className)}
  >
    <g filter="url(#filter3_f)">
      <path
        d="M163.917 -89.0982C173.189 -72.1354 80.9618 2.11525 34.7334 30.1553C-11.495 58.1954 -106.505 97.514 -115.777 80.5512C-125.048 63.5885 -45.0708 -3.23233 1.15763 -31.2724C47.386 -59.3124 154.645 -106.061 163.917 -89.0982Z"
        fill="#8A50FF"
        opacity="0.3"
      />
    </g>
    <defs>
      <filter id="filter3_f" x="-212.518" y="-188.71" width="473.085" height="369.366">
        <feGaussianBlur stdDeviation="48" />
      </filter>
    </defs>
  </svg>
);
