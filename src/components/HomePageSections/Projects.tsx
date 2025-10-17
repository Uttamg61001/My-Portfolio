import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Users, Zap } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Rank Door - Digital Marketing Agency Website",
      description:
        "A conversion-focused digital marketing agency website built for a Brisbane-based agency specializing in SEO, Google Ads, local business optimization, and web development services with personalized client approach.",
      duration: "Project",
      category: "Digital Marketing Agency",
      features: [
        "SEO-optimized landing pages with conversion-focused design",
        "Service showcase with performance-driven messaging strategy",
        "Client testimonials integration with verified feedback system",
        "Local business focus with Brisbane and Gold Coast targeting",
        "Lead generation contact forms with no-pressure consultation approach",
      ],
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "SEO Optimization",
        "Responsive Design",
      ],
      highlights: {
        performance: "Conversion Optimized",
        responsive: "Mobile First Design",
        features: "Local SEO Focus",
      },
    },
    {
      title: "FutureSafeGroup - Binary MLM Platform",
      description:
        "A sophisticated binary-tree-based MLM platform with automatic salary and reward systems, featuring secure payment processing and performance-based incentives.",
      duration: "Project",
      category: "MLM Platform",
      features: [
        "Binary tree pairing logic with auto-reward distribution",
        "Monthly auto-salary credit system based on achievements",
        "Secure team joining via payment deposit/withdrawal",
        "Tree node logic for reward eligibility and performance benefits",
      ],
      technologies: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "Payment APIs",
      ],
      highlights: {
        performance: "Enterprise Scale",
        responsive: "Complex Logic",
        features: "Binary Tree System",
      },
    },
    {
      title: "EquipSee - Dynamic Dashboard Platform",
      description:
        "A comprehensive equipment management platform with dynamic modules, pin-based dashboards, and location-based alert systems for organizations.",
      duration: "Feb 2024 – Present",
      category: "Business Platform",
      features: [
        "Dynamic modules with pin-based dashboards",
        "Location-based alerts and notifications",
        "Organization-specific role-permission system",
        "Module control and customization features",
      ],
      technologies: ["Next.js", "Tailwind CSS", "Shadcn/UI", "TypeScript"],
      highlights: {
        performance: "Real-time Alerts",
        responsive: "Role-based Access",
        features: "Dynamic Modules",
      },
    },
    {
      title: "Jane Bond BBQ",
      description:
        "A modern restaurant website offering online menu browsing and delivery options. Built with responsive design and smooth user experience.",
      duration: "Nov 2022 – Jan 2023",
      category: "Restaurant Website",
      features: [
        "Online menu with dynamic filtering",
        "Delivery tracking system",
        "Responsive mobile-first design",
        "SEO optimized pages",
      ],
      technologies: ["Next.js", "Tailwind CSS", "HTML", "SASS"],
      highlights: {
        performance: "95% Lighthouse Score",
        responsive: "Mobile-First Design",
        features: "4 Key Features",
      },
    },
    {
      title: "Business Financial Group (BFG)",
      description:
        "A comprehensive full-service accounting firm platform providing tax services with advanced data management and interactive features.",
      duration: "Feb 2023 - Nov 2023",
      category: "Financial Platform",
      features: [
        "Advanced data grids with AG-Grid",
        "File upload with drag & drop",
        "Rich text editing capabilities",
        "Interactive dashboards",
      ],
      technologies: [
        "Next.js",
        "TypeScript",
        "Redux Toolkit",
        "Tailwind CSS",
        "AG-Grid",
        "React-Quill",
      ],
      highlights: {
        performance: "Enterprise Scale",
        responsive: "Complex UI Components",
        features: "8+ Integrations",
      },
    },
    {
      title: "Nainer Platform",
      description:
        "Modern web application with real-time features and IoT integrations, focusing on user experience and performance optimization.",
      duration: "Ongoing",
      category: "Web Application",
      features: [
        "Real-time data synchronization",
        "Modern component library",
        "Socket.io integration",
        "Firebase notifications",
      ],
      technologies: [
        "React.js",
        "Socket.io",
        "Firebase",
        "Shadcn/UI",
        "Tailwind CSS",
      ],
      highlights: {
        performance: "Real-time Updates",
        responsive: "Modern UI/UX",
        features: "IoT Integration",
      },
    },
    {
      title: "EMS Energy Management",
      description:
        "IoT-powered energy management system providing real-time monitoring, analytics, and control over energy consumption.",
      duration: "Recent",
      category: "IoT Platform",
      features: [
        "Real-time energy monitoring",
        "Data visualization charts",
        "Device control interface",
        "Energy analytics dashboard",
      ],
      technologies: [
        "React.js",
        "TypeScript",
        "Socket.io",
        "Chart.js",
        "Tailwind CSS",
      ],
      highlights: {
        performance: "IoT Connected",
        responsive: "Data Visualization",
        features: "Energy Analytics",
      },
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

          {/* Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="project-card h-full flex flex-col">
                  {/* Project Header */}
                  <div className="p-3 md:p-6 pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <Badge variant="secondary" className="mb-3 text-xs">
                          {project.category}
                        </Badge>
                        <h3 className="text-xl font-semibold text-primary mb-2">
                          {project.title}
                        </h3>
                        {/* <div className="flex items-center gap-2 text-muted-foreground text-sm">
                          <Calendar size={14} />
                          <span>{project.duration}</span>
                        </div> */}
                      </div>
                    </div>

                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="font-medium mb-3 text-foreground flex items-center gap-2">
                        <Zap size={16} className="text-primary" />
                        Key Features
                      </h4>
                      <div className="grid gap-2">
                        {project.features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Project Highlights */}
                    <div className="grid md:grid-cols-3 gap-4 mb-6">
                      <div className="text-center p-3 rounded-lg bg-secondary/50">
                        <div className="text-primary font-semibold text-sm">
                          {project.highlights.performance}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Performance
                        </div>
                      </div>
                      <div className="text-center p-3 rounded-lg bg-secondary/50">
                        <div className="text-primary font-semibold text-sm">
                          {project.highlights.responsive}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Design
                        </div>
                      </div>
                      <div className="text-center p-3 rounded-lg bg-secondary/50">
                        <div className="text-primary font-semibold text-sm">
                          {project.highlights.features}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          Features
                        </div>
                      </div>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="font-medium mb-3 text-foreground">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <Badge
                            key={idx}
                            variant="outline"
                            className="border-primary/20 text-primary text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Project Actions */}
                  {/* <div className="mt-auto p-6 pt-4 border-t border-border">
                    <div className="flex gap-3">
                      <Button
                        size="sm"
                        className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        View Live
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border-primary/20 hover:bg-primary hover:text-primary-foreground"
                      >
                        <Github size={16} className="mr-2" />
                        Code
                      </Button>
                    </div>
                  </div> */}
                </Card>
              </div>
            ))}
          </div>

          {/* Additional Projects Note */}
          {/* <div className="mt-12 text-center animate-fade-in">
            <Card className="p-6 card-gradient border-border inline-block">
              <div className="flex items-center gap-3">
                <Users className="text-primary" size={20} />
                <div className="text-left">
                  <p className="font-medium">More Projects Available</p>
                  <p className="text-muted-foreground text-sm">
                    Including Cyltex, Inventory Management, and other innovative
                    solutions
                  </p>
                </div>
              </div>
            </Card>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
