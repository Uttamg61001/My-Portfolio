import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";
import { Code, Wrench, Globe, Database, Smartphone, Zap } from "lucide-react";

const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById("skills");
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      icon: Code,
      title: "Frontend Development",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "HTML/CSS", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "React.js", level: 92 },
        { name: "Next.js", level: 88 },
      ],
    },
    {
      icon: Wrench,
      title: "Tools & Frameworks",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Redux/Redux Toolkit", level: 85 },
        { name: "Tailwind CSS", level: 92 },
        { name: "SCSS/Styled Components", level: 88 },
        { name: "Shadcn/UI", level: 90 },
        { name: "Bootstrap", level: 85 },
      ],
    },
    {
      icon: Globe,
      title: "Web Technologies",
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Socket.io", level: 80 },
        { name: "RESTful APIs", level: 85 },
        { name: "Firebase", level: 82 },
        { name: "Chrome Extensions", level: 75 },
        { name: "PWA Development", level: 78 },
      ],
    },
    {
      icon: Database,
      title: "Development Tools",
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "VS Code", level: 95 },
        { name: "Git/GitHub", level: 88 },
        { name: "GitLab", level: 85 },
        { name: "Vite", level: 90 },
        { name: "Webpack", level: 75 },
      ],
    },
  ];

  const additionalSkills = [
    "Responsive Design",
    "Cross-browser Compatibility",
    "Performance Optimization",
    "SEO Best Practices",
    "Agile Development",
    "Code Review",
    "Team Collaboration",
    "Problem Solving",
    "UI/UX Design",
    "Testing & Debugging",
  ];

  return (
    <section id="skills" className="py-10 md:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Technical <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A comprehensive overview of my technical expertise and proficiency
              levels across various technologies and tools.
            </p>
          </div>

          {/* Skills Categories */}
          {/* <div className="grid md:grid-cols-2 gap-8 mb-12">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="p-6 card-gradient border-border h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div
                      className={`p-3 rounded-lg bg-gradient-to-r ${category.color} bg-opacity-20`}
                    >
                      <category.icon className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl font-semibold">{category.title}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, idx) => (
                      <div key={idx}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">
                            {skill.name}
                          </span>
                          <span className="text-sm text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="skill-bar">
                          <div
                            className={`skill-fill ${
                              isVisible ? "animate-slide-in" : "w-0"
                            }`}
                            style={{
                              width: isVisible ? `${skill.level}%` : "0%",
                              transitionDelay: `${index * 100 + idx * 50}ms`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              </div>
            ))}
          </div> */}

          {/* Additional Skills */}
          <div className="animate-fade-in">
            <Card className="p-8 card-gradient border-border">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Zap className="text-primary" size={28} />
                  <h3 className="text-2xl font-semibold">
                    Additional Expertise
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  Beyond technical skills, I bring strong soft skills and modern
                  development practices
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {additionalSkills.map((skill, index) => (
                  <Badge
                    key={index}
                    variant="secondary"
                    className="w-full rounded-full justify-center p-3 bg-secondary/50 hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default transform hover:scale-105"
                    style={{ animationDelay: `${index * 50}ms` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>

          {/* Skills Summary */}
          <div className="mt-6 md:mt-12 grid grid-cols-1 md:grid-cols-4 gap-6 animate-fade-in">
            <Card className="text-center p-6 card-gradient border-border">
              <Smartphone className="mx-auto text-primary md:mb-3" size={32} />
              <div className="text-2xl font-bold text-primary md:mb-1">100%</div>
              <div className="text-muted-foreground text-sm">
                Responsive Design
              </div>
            </Card>
            <Card className="text-center p-6 card-gradient border-border">
              <Globe className="mx-auto text-primary md:mb-3" size={32} />
              <div className="text-2xl font-bold text-primary md:mb-1">10+</div>
              <div className="text-muted-foreground text-sm">Technologies</div>
            </Card>
            <Card className="text-center p-6 card-gradient border-border">
              <Code className="mx-auto text-primary md:mb-3" size={32} />
              <div className="text-2xl font-bold text-primary md:mb-1">2+</div>
              <div className="text-muted-foreground text-sm">Years Coding</div>
            </Card>
            <Card className="text-center p-6 card-gradient border-border">
              <Zap className="mx-auto text-primary md:mb-3" size={32} />
              <div className="text-2xl font-bold text-primary md:mb-1">30%</div>
              <div className="text-muted-foreground text-sm">
                Performance Gain
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
