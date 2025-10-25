import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin, ChevronRight } from "lucide-react";
import { GlowingEffect } from "../ui/glowing-effect";

const Experience = () => {
  const experiences = [
    {
      title: "Senior UI/UX Designer",
      company: "E Software Solutions",
      location: "Yamuna Nagar, Haryana",
      duration: "Jan 2025 – Present",
      type: "Full-time",
      responsibilities: [
        "Focused on making complex IoT data easy to understand with clear dashboards, status updates, and alerts.",
        "Designed unified dashboards in Figma to bring Trello, Xero, HubSpot, and Net360 together in one platform.",
        "Created user flows and prototypes for managing projects, finances, and CRM data seamlessly.",
        "Designed and developed responsive dashboards for Cyber Security analytics, improving data visualization and user experience.",
        "Developed a clean and structured UI for an Asset Management System, ensuring seamless inventory tracking."
      ],
      Technologies: [
        "figma.webp",
        "xd.png",
        "photoshop.png",
        "illustrater.png",
        "framer.png",
        "mui.webp",
        "tailwind.png",
        "html.png",
        "JS.webp",
        "notion.webp",
        "miro.webp",
        "chatgpt.webp",
        "Uizard.jpeg",
        "canva.webp",
        "lottifie.webp",
      ],
    },
    {
      title: "Senior UI/UX Designer",
      company: "Sukrut Associates",
      location: "Jaipur, Rajasthan",
      duration: "June 2024 – Dec 2024",
      type: "Full-time",
      responsibilities: [
        "Proficient in translating complex requirements into elegant, user-friendly designs, ensuring consistency across web and mobile platforms.",
        "Designed and implemented a Doctor Portal for session booking, enhancing user experience and streamlining workflows for healthcare professionals."
      ],
      Technologies: [
        "figma.webp",
        "photoshop.png",
        "framer.png",
        "tailwind.png",
        "html.png",
        "notion.webp",
        "miro.webp",
        "chatgpt.webp",
        "Uizard.jpeg",
        "coreldraw.png",
      ],
    },
    {
      title: "UI/UX Designer",
      company: "Urban-Chat",
      location: "Work From Home",
      duration: "August 2023 - May 2024",
      type: "Full-time",
      responsibilities: [
        "Designed an advanced AI chat and support interface, seamlessly integrating it into web and mobile platforms like Slack and WhatsApp for enhanced user experience.",
        "Worked closely with the development team to turn design ideas into a fully functional and responsive website."
      ],
      Technologies: [
        "figma.webp",
        "xd.png",
        "photoshop.png",
        "illustrater.png",
        "framer.png",
        "notion.webp",
        "miro.webp",
        "chatgpt.webp",
        "canva.webp",
      ],
    },
    {
      title: "UI/UX Designer",
      company: "Apna Konnect",
      location: "Work From Home",
      duration: "Jan 2023 - July 2023",
      type: "Full-time",
      responsibilities: [
        "Lead the development of UI/UX design for mobile applications and websites, creating user experience and visual impact.",
        "Directed high-quality video content for the company’s YouTube channel. Conducted user research, usability testing, and stayed updated on industry trends for innovative design solutions."
      ],
      Technologies: [
        "figma.webp",
        "xd.png",
        "photoshop.png",
        "illustrater.png",
        "framer.png",
        "canva.webp",
        "lightroom.webp",
        "lottifie.webp",
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
              My professional journey in UI Designing, building
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
                <Card className="project-card p-4 lg:p-6 relative">
                  {/* Timeline Line */}
                  {index < experiences.length - 1 && (
                    <div className="absolute left-4 top-full w-0.5 h-8 bg-gradient-to-b from-primary to-transparent" />
                  )}

                  {/* Timeline Dot */}
                  <div className="absolute -left-2 top-8 w-4 h-4 bg-primary rounded-full border-4 border-background" />

                  <div className="ml-2 lg:ml-4">
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
                        Technologies & Tools
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.Technologies.map((tech, idx) => (
                          <Badge
                            key={idx}
                            variant="outline"
                            className="border-primary/20 text-primary hover:scale-120  hover:text-primary-foreground transition-colors cursor-default"
                          >
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img className="w-10 h-10" src={tech} alt="" />
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
            {/* Card 1 - Years Experience */}
            <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
                <div className="relative flex flex-1 flex-col justify-between gap-3 text-center">
                  <div className="space-y-3">
                    <h3 className="text-3xl font-bold text-primary mb-2">2.9+</h3>
                    <h2 className="font-sans text-md md:text-base text-white">
                      Years Experience
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 - Projects Completed */}
            <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
                <div className="relative flex flex-1 flex-col justify-between gap-3 text-center">
                  <div className="space-y-3">
                    <h3 className="text-3xl font-bold text-primary mb-2">30+</h3>
                    <h2 className="font-sans text-md md:text-base text-white">
                      Projects Completed
                    </h2>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 - Performance Improvement */}
            <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.01}
              />
              <div className="border-0.75 relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
                <div className="relative flex flex-1 flex-col justify-between gap-3 text-center">
                  <div className="space-y-3">
                    <h3 className="text-3xl font-bold text-primary mb-2">30%</h3>
                    <h2 className="font-sans text-md md:text-base text-white">
                      Performance Improvement
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
