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
        "A conversion-focused logistics optimization dashboard built to simplify supply chain analytics and operational efficiency with clear data visualization and minimal UI.",
      image: "thumbnail-2.webp",
      link: "https://www.figma.com/design/xnT7HY0TOAwTUYt2ydrlVM/Assignment?node-id=1-3&t=gaxPpIoWYsq36WBZ-1",
      technologies: [
        "Figma",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Chart.js",
        "Responsive Design",
      ],
    },
    {
      title: "Chat-Bot",
      description:
        "An AI-powered chatbot interface designed for seamless communication, featuring conversational UI patterns, user-friendly flow, and responsive layouts.",
      image: "thumbnail-3.webp",
      link: "https://www.figma.com/design/nKRPi5J27RAgYDxHYONOBR/Urban-Chat?node-id=0-6373&t=KgdKQNnAKZIB1hnn-1",
      technologies: [
        "Figma",
        "Adobe XD",
        "Next.js",
        "Tailwind CSS",
        "Shadcn/UI",
        "AI Integration",
      ],
    },
    {
      title: "Technologies",
      description:
        "A modern agency landing page highlighting services, projects, and brand identity with both dark and light themes for improved accessibility.",
      image: "thumbnail-1.webp",
      link: "https://www.figma.com/design/D2opEHQGXDDlljrYnoScnF/RR-Technologies-%7C-Dark-and-light-UI-%7C-Agency-landing-page-free-(Community)?node-id=0-1&t=I3n5anFQ4aClHk5w-1",
      technologies: [
        "Figma",
        "Framer",
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
      ],
    },
    {
      title: "Cleaning Services",
      description:
        "A fresh and responsive landing page design for cleaning service providers, emphasizing clarity, conversion, and a professional look.",
      image: "thumbnail-4.webp",
      link: "https://www.figma.com/design/FPCZiEd5udisHfhnFtT6Km/Cleaning-services-website-landing-page-(Community)?node-id=2-2&t=bzWQsQTbeSEfCQPa-1",
      technologies: [
        "Figma",
        "Illustrator",
        "Next.js",
        "Tailwind CSS",
        "HTML",
        "Animation",
      ],
    },
    {
      title: "Powered by AI",
      description:
        "An experimental AI dashboard interface focused on visual storytelling, automation insights, and futuristic UI components.",
      image: "thumbnail-9.webp",
      link: "https://www.figma.com/design/Necv44SJ9Qik7q8G5Zhoj6/Untitled?node-id=1-675&t=obfovtNgBErxrJy3-1",
      technologies: [
        "Figma",
        "Framer",
        "React.js",
        "Tailwind CSS",
        "AI Models",
        "APIs",
      ],
    },
    {
      title: "Mandiram",
      description:
        "A devotional mobile app concept allowing users to explore temples, rituals, and spiritual content with calm, spiritual-focused UI design.",
      image: "thumbnail-6.webp",
      link: "https://www.figma.com/design/YHBLH5RLOWQl9sIBruuwjp/Mandiram?node-id=1-18965&t=IhQ3og2ASTls2nc2-1",
      technologies: [
        "Figma",
        "LottieFiles",
        "React Native",
        "Firebase",
        "Tailwind CSS",
        "TypeScript",
      ],
    },
    {
      title: "Guru-ji Finder",
      description:
        "An app to connect users with nearby spiritual mentors and event organizers, with a location-based search and calm, devotional UI theme.",
      image: "thumbnail-8.webp",
      link: "https://www.figma.com/design/WWPXgz04Gtl5CDst76hSx5/Guru-ji-Finder-UI?node-id=1-13500&t=T7jsdMG5agNpyyS8-1",
      technologies: [
        "Figma",
        "Adobe XD",
        "React Native",
        "Google Maps API",
        "Tailwind CSS",
      ],
    },
    {
      title: "Cineview",
      description:
        "A movie discovery platform that combines cinematic visuals with easy navigation and an elegant, entertainment-focused UI experience.",
      image: "thumbnail-5.webp",
      link: "https://www.figma.com/design/8tm46QNNHoyzXBT4mdgRev/Cineview?node-id=0-1&t=71zi2TfrGNX0Y7k2-1",
      technologies: [
        "Figma",
        "Framer",
        "Next.js",
        "Tailwind CSS",
        "Redux",
        "API Integration",
      ],
    },
    {
      title: "Routine",
      description:
        "A habit-tracking mobile app that blends simple UI design with data-driven insights to help users maintain productivity effortlessly.",
      image: "thumbnail-7.webp",
      link: "https://www.figma.com/design/pvqzFdqZzP9yji2rpGyL3N/Routiner---Habit-Tracker-App?node-id=0-1&t=PidWcLQhqeMeozLu-1",
      technologies: [
        "Figma",
        "Framer",
        "React Native",
        "Expo",
        "TypeScript",
        "Chart.js",
      ],
    },
    {
      title: "Katalyst Studio - Indonesia-Based Digital Agency",
      description:
        "A sleek and modern digital agency landing page designed to showcase creative services, design process, and successful projects.",
      image: "thumbnail 10.jpg",
      link: "https://www.figma.com/design/WnietlVpcslaHh3fuH6pIl/Landing-Page?node-id=0-1&t=TMF6JPqkeC8MjKJz-1",
      technologies: [
        "Figma",
        "Illustrator",
        "Framer",
        "LottieFiles",
        "Framer Motion"
      ],
    },
  ];

  const [projects] = useState(projectsData);

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
