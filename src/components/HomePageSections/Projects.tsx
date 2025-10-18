"use client";
import { useState } from "react";
import { motion } from "motion/react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Lens } from "../ui/lens";
import { cn } from "@/lib/utils";

export default function Projects() {
  const projects = [
    {
      title: "Rank Door - Digital Marketing Agency Website",
      description:
        "A conversion-focused digital marketing agency website built for a Brisbane-based agency specializing in SEO, Google Ads, local business optimization, and web development services with personalized client approach.",
      category: "thumbnail 1.jpg",
      technologies: [
        "JS.png",
        "TypeScript",
        "Tailwind CSS",
        "SEO Optimization",
        "Responsive Design",
      ],
    },
    {
      title: "FutureSafeGroup - Binary MLM Platform",
      description:
        "A sophisticated binary-tree-based MLM platform with automatic salary and reward systems, featuring secure payment processing and performance-based incentives.",
      category: "thumbnail 2.jpg",
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Payment APIs",
      ],
    },
    {
      title: "EquipSee - Dynamic Dashboard Platform",
      description:
        "A comprehensive equipment management platform with dynamic modules, pin-based dashboards, and location-based alert systems for organizations.",
      category: "thumbnail 3.jpg",
      technologies: ["Next.js", "Tailwind CSS", "Shadcn/UI", "TypeScript"],
    },
    {
      title: "Jane Bond BBQ",
      description:
        "A modern restaurant website offering online menu browsing and delivery options. Built with responsive design and smooth user experience.",
      category: "thumbnail 4.jpg",
      technologies: ["Next.js", "Tailwind CSS", "HTML", "SASS"],
    },
    {
      title: "Business Financial Group (BFG)",
      description:
        "A comprehensive full-service accounting firm platform providing tax services with advanced data management and interactive features.",
      category: "thumbnail 5.jpg",
      technologies: [
        "Next.js",
        "TypeScript",
        "Redux Toolkit",
        "Tailwind CSS",
        "AG-Grid",
        "React-Quill",
      ],
    },
    {
      title: "Nainer Platform",
      description:
        "Modern web application with real-time features and IoT integrations, focusing on user experience and performance optimization.",
      category: "thumbnail 6.jpg",
      technologies: [
        "React.js",
        "Socket.io",
        "Firebase",
        "Shadcn/UI",
        "Tailwind CSS",
      ],
    },
    {
      title: "EMS Energy Management",
      description:
        "IoT-powered energy management system providing real-time monitoring, analytics, and control over energy consumption.",
      category: "thumbnail 7.jpg",
      technologies: [
        "React.js",
        "TypeScript",
        "Socket.io",
        "Chart.js",
        "Tailwind CSS",
      ],
    },
    {
      title: "EMS Energy Management",
      description:
        "IoT-powered energy management system providing real-time monitoring, analytics, and control over energy consumption.",
      category: "thumbnail 8.jpg",
      technologies: [
        "React.js",
        "TypeScript",
        "Socket.io",
        "Chart.js",
        "Tailwind CSS",
      ],
    },
  ];

  return (
    <section id="projects" className="py-10 md:py-20 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A showcase of my recent work, demonstrating expertise in modern
              web development technologies and user-centered design.
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
   Individual Project Card Component
--------------------------------------------------- */
function ProjectCard({ project }: any) {
  const [hovering, setHovering] = useState(false);

  return (
    <Card className="relative overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-[#1D2235] to-[#121318]">
      <Rays />
      <Beams />
      <div className="relative z-10 p-4 md:p-6">
        {/* Lens + Image */}
        <div className="mb-6">
          <Lens hovering={hovering} setHovering={setHovering}>
            <img
              src={project.category}
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
              {project.technologies.map((tech: any, idx: number) => (
                <Badge
                  key={idx}
                  variant="outline"
                  className="border-primary/20 text-primary text-xs px-2 py-1"
                >
                  {tech.endsWith(".png") || tech.endsWith(".jpg") ? (
                    <img
                      src={tech}
                      alt={tech}
                      className="w-6 h-6 object-contain"
                    />
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
    // xmlns="http://www.w3.org/2000/svg"
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
    // xmlns="http://www.w3.org/2000/svg"
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
