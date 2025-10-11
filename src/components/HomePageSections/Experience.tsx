import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin, ChevronRight } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Junior Developer",
      company: "eSoftware Solutions",
      location: "Yamuna Nagar, Haryana",
      duration: "Nov 2022 – Present",
      type: "Full-time",
      responsibilities: [
        "Led several projects including EquipSee, Nainer, and EMS Energy Management System, improving web app speed and maintenance by 20-30%.",
        "Built dynamic modules, pin-based dashboards, and location-based alerts for EquipSee platform.",
        "Implemented organization-specific role-permission system and module control features.",
        "Integrated Socket.io to enable real-time chat functionality with optimized performance.",
        "Implemented Firebase for Chrome notifications, ensuring users stay informed with timely updates.",
        "Used React.js, Redux, and TypeScript to create interactive and high-performing web applications.",
        "Managed projects from start to finish independently, ensuring timely completion and quality deliverables.",
      ],
      technologies: [
        "React.js",
        "Next.js",
        "Redux",
        "TypeScript",
        "Socket.io",
        "Firebase",
        "Tailwind CSS",
        "Shadcn/UI",
      ],
    },
    {
      title: "Angular Developer",
      company: "Apptunix",
      location: "Mohali, Punjab",
      duration: "May 2022 – Oct 2022",
      type: "Full-time",
      responsibilities: [
        "Gained hands-on experience in creating responsive and user-friendly web applications using HTML, CSS, Angular, and Bootstrap.",
        "Worked on building Angular-based SPAs, focusing on dynamic content updates and smooth navigation.",
        "Successfully integrated RESTful APIs to fetch and display data in real-time, enhancing the functionality of web applications.",
        "Used GitHub and GitLab for source code management, version tracking, and team collaboration.",
        "Followed best practices for clean, maintainable, and scalable coding under guidance.",
      ],
      technologies: [
        "Angular",
        "HTML",
        "CSS",
        "Bootstrap",
        "RESTful APIs",
        "GitHub",
        "GitLab",
      ],
    },
  ];

  return (
    <section id="experience" className="py-10 md:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Work <span className="text-gradient">Experience</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              My professional journey in front-end development, building
              scalable web applications and enhancing user experiences.
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <Card className="project-card p-8 relative">
                  {/* Timeline Line */}
                  {index < experiences.length - 1 && (
                    <div className="absolute left-4 top-full w-0.5 h-8 bg-gradient-to-b from-primary to-transparent" />
                  )}

                  {/* Timeline Dot */}
                  <div className="absolute -left-2 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background" />

                  <div className="ml-8">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-primary mb-1">
                          {exp.title}
                        </h3>
                        <div className="flex items-center gap-2 text-muted-foreground mb-2">
                          <Building size={16} />
                          <span className="font-medium">{exp.company}</span>
                          <span className="text-xs">•</span>
                          <Badge variant="secondary" className="text-xs">
                            {exp.type}
                          </Badge>
                        </div>
                      </div>

                      <div className="flex flex-col sm:items-end gap-1">
                        <div className="flex items-center gap-2 text-muted-foreground text-sm">
                          <Calendar size={16} />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground text-sm">
                          <MapPin size={16} />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Responsibilities */}
                    <div className="mb-6">
                      <h4 className="font-medium mb-4 text-foreground">
                        Key Responsibilities & Achievements
                      </h4>
                      <div className="space-y-3">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <div
                            key={idx}
                            className="flex items-start gap-3 group"
                          >
                            <ChevronRight
                              className="text-primary mt-0.5 group-hover:translate-x-1 transition-transform"
                              size={16}
                            />
                            <span className="text-muted-foreground text-sm leading-relaxed">
                              {responsibility}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <h4 className="font-medium mb-3 text-foreground">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, idx) => (
                          <Badge
                            key={idx}
                            variant="outline"
                            className="border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {/* Summary Stats */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 animate-fade-in">
            <Card className="text-center p-6 card-gradient border-border">
              <div className="text-2xl font-bold text-primary mb-1">2+</div>
              <div className="text-muted-foreground text-sm">
                Years Experience
              </div>
            </Card>
            <Card className="text-center p-6 card-gradient border-border">
              <div className="text-2xl font-bold text-primary mb-1">10+</div>
              <div className="text-muted-foreground text-sm">
                Projects Completed
              </div>
            </Card>
            <Card className="text-center p-6 card-gradient border-border">
              <div className="text-2xl font-bold text-primary mb-1">30%</div>
              <div className="text-muted-foreground text-sm">
                Performance Improvement
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
