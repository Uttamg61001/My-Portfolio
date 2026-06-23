import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect } from "react";
import { Code, Globe, Smartphone, Zap } from "lucide-react";
import { GlowingEffect } from "../ui/glowing-effect";

const Skills = () => {
  // const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // setIsVisible(true);
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

  const additionalSkills = [
    "User Research",
    "User Flows",
    "Information Architecture",
    "Wireframing",
    "Interactive Prototyping",
    "Design Systems",
    "Responsive Design",
    "Dashboard Design",
    "Data Visualization",
    "Interaction Design",
    "Usability Testing",
    "Accessibility",
    "Developer Handoff",
    "Figma Dev Mode",
    "AI-assisted Design",
    "Figma AI",
    "Creatie AI",
    "ChatGPT",
    "Claude AI",
    "Notion AI",
  ];

  return (
    <section id="skills" className="py-10 md:py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Design <span className="text-gradient">Expertise</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              A combination of user-centered design, product thinking, and modern design practices used to create intuitive,
              scalable, and impactful digital experiences across web and mobile platforms.
            </p>
          </div>

          {/* Additional Skills */}
          <div className="animate-fade-in">
            <Card className="p-6 md:p-8 card-gradient border-border">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Zap className="text-primary" size={28} />
                  <h3 className="text-2xl font-semibold">
                    Core Design Expertise
                  </h3>
                </div>
                <p className="text-muted-foreground">
                  Experienced in transforming business requirements into intuitive digital products through user research, design systems,
                  prototyping, responsive design, and seamless developer collaboration.
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
          <div className="mt-6 md:mt-12 grid grid-cols-1 [@media(width:768px)]:grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in">
            {/* Card 1 - Responsive Design */}
            <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D] text-center">
                <Smartphone className="mx-auto text-primary md:mb-3" size={32} />
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-white text-md">Responsive Design</div>
              </div>
            </div>

            {/* Card 2 - Technologies */}
            <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D] text-center">
                <Globe className="mx-auto text-primary md:mb-3" size={32} />
                <div className="text-2xl font-bold text-primary">20+</div>
                <div className="text-white text-md">Technologies</div>
              </div>
            </div>

            {/* Card 3 - Years Coding */}
            <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D] text-center">
                <Code className="mx-auto text-primary md:mb-3" size={32} />
                <div className="text-2xl font-bold text-primary">8+</div>
                <div className="text-white text-md">Industry Domains</div>
              </div>
            </div>

            {/* Card 4 - Performance Gain */}
            <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D] text-center">
                <Zap className="mx-auto text-primary md:mb-3 " size={32} />
                <div className="text-2xl font-bold text-primary">Web & Mobile</div>
                <div className="text-white text-md">Product Design</div>
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Skills;
