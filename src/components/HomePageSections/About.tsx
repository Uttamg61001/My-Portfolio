import { Card } from "@/components/ui/card";
import { User, MapPin, Phone, Mail, Calendar } from "lucide-react";

const About = () => {
  const personalInfo = [
    { icon: MapPin, label: "Location", value: "Sri Ganganagar, Rajasthan" },
    { icon: Phone, label: "Phone", value: "+91 7062467187" },
    { icon: Mail, label: "Email", value: "uttamg61001@gmail.com" },
    { icon: Calendar, label: "Experience", value: "2.9+ Years" },
  ];

  const highlights = [
    "Designed clean, user-friendly interfaces that improved overall usability.",
    "Turned complex ideas into simple, intuitive design solutions.",
    "Collaborated with developers to bring creative concepts to life.",
    "Completed certifications in React-JS, Adobe XD, and UI/UX  ̰Design to sharpen my skills.",
  ];

  return (
    <section id="about" className="py-10 md:py-20 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Get to know more about my background, experience, and what drives
              my passion for development.
            </p>
          </div>
          <div className="flex items-center gap-3 mb-6">
            <User className="text-primary" size={24} />
            <h3 className="text-2xl font-semibold">
              Personal Information
            </h3>
          </div>
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Personal Info */}
            <div className="animate-slide-up">
              <div className="mb-8">


                <div className="space-y-4">
                  {personalInfo.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 md:p-6 rounded-lg bg-card border border-border hover:border-primary/50 transition-all duration-300"
                    >
                      <item.icon
                        className="text-primary flex-shrink-0"
                        size={20}
                      />
                      <div>
                        <span className="text-muted-foreground text-sm">
                          {item.label}
                        </span>
                        <p className="font-medium">{item.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Education */}
              <Card className="p-4 md:p-6 card-gradient border-border">
                <h4 className="font-semibold text-lg  text-primary">
                  Education
                </h4>
                <div>
                  <h5 className="font-medium">
                    B.Tech in Computer Science and Engineering
                  </h5>
                  <p className="text-muted-foreground">
                    Surendera Group of Institute, Sri Ganganagar
                  </p>
                  <p className="text-muted-foreground text-sm">
                    July 2020 – July 2025
                  </p>
                </div>
              </Card>
            </div>

            {/* About Description */}
            <div
              className="animate-slide-up"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="space-y-6">
                <Card className="p-4 md:p-6  card-gradient border-border">
                  <h3 className="text-xl font-semibold mb-2 flex items-center gap-3">
                    <span className="w-2 h-8 bg-gradient-to-b from-primary to-accent rounded-full" />
                    Professional Summary
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-6">
                    Experienced UI/UX Designer specializing in creating intuitive,
                    user-centered designs for web and mobile platforms. Skilled
                    in wireframing, prototyping, and responsive design, delivering
                    functional and visually appealing interfaces. Adept at aligning
                    user needs with business goals to enhance digital experiences.
                  </p>

                  {/* Key Highlights */}
                  <div>
                    <h4 className="font-medium mb-4 text-primary">
                      Key Achievements
                    </h4>
                    <div className="grid gap-3">
                      {highlights.map((highlight, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-3 p-3 rounded-lg bg-secondary/50"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full" />
                          <span className="text-sm">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
