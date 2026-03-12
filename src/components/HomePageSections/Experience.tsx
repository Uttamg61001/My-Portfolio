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
    duration: "Jan 2025 – February 2026",
    type: "Full-time",
    responsibilities: [
      "Worked on IoT-based platforms and designed dashboards that help users easily monitor device status, alerts, and operational data.",
      "Designed product dashboards in Figma that bring tools like Trello, Xero, HubSpot, and Net360 into one simple interface so teams can manage their work from a single place.",
      "Prepared user flows, wireframes, and interactive prototypes to simplify how users manage projects, financial records, and CRM activities.",
      "Designed cybersecurity analytics dashboards with clear charts and visual elements so users can quickly understand system activity and risks.",
      "Created the UI for an Asset Management System focused on easy asset tracking, inventory management, and smooth navigation.",
      "Worked closely with developers to make sure the designs were implemented properly and remained consistent across the product."
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
      "coreldraw.webp",
    ],
  },
  {
    title: "Senior UI/UX Designer",
    company: "Sukrut Associates",
    location: "Jaipur, Rajasthan",
    duration: "June 2024 – Dec 2024",
    type: "Full-time",
    responsibilities: [
      "Designed web and mobile interfaces based on product requirements while keeping the experience simple and easy for users.",
      "Designed a Doctor Portal that allows doctors to manage session bookings, schedules, and appointments more efficiently.",
      "Created wireframes and prototypes to test the booking flow and improve how doctors and patients interact with the system.",
      "Maintained consistent layouts, components, and visual styles across the platform to keep the interface clean and organized.",
      "Worked with the development team during implementation to ensure the final product matched the design."
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
      "coreldraw.webp",
    ],
  },
  {
    title: "UI/UX Designer",
    company: "Urban-Chat",
    location: "Work From Home",
    duration: "August 2023 - May 2024",
    type: "Full-time",
    responsibilities: [
      "Designed AI-based chat and support interfaces for web and mobile platforms.",
      "Created chat layouts and interaction flows that make conversations with AI assistants clear and easy for users.",
      "Worked on integrations with platforms like Slack and WhatsApp to improve the support experience.",
      "Prepared UI screens and prototypes that helped the development team understand the product flow before implementation.",
      "Ensured the design worked well across different devices and screen sizes."
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
      "Worked on UI/UX design for mobile apps and websites, focusing on creating clear user flows and visually clean interfaces.",
      "Prepared wireframes and design prototypes to explain product ideas before development started.",
      "Conducted basic user research and reviewed similar products to improve usability.",
      "Created visual and promotional content for the company’s YouTube channel.",
      "Stayed updated with new design trends and tools to improve the quality of design work."
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
                    <h3 className="text-3xl font-bold text-primary mb-2">3.2+</h3>
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
                    <h3 className="text-3xl font-bold text-primary mb-2">40+</h3>
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
