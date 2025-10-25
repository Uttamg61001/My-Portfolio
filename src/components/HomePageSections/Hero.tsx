import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Download, Code, Sparkles } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { FaLinkedinIn, FaInstagram } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const roles = useMemo(
    () => ["UI/UX Designer", "Graphic Designer", "Front-End Developer"],
    []
  );
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (charIndex < currentRole.length) {
            setDisplayText(currentRole.slice(0, charIndex + 1));
            setCharIndex(charIndex + 1);
          } else {
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          if (charIndex > 0) {
            setDisplayText(currentRole.slice(0, charIndex - 1));
            setCharIndex(charIndex - 1);
          } else {
            setIsDeleting(false);
            setRoleIndex((roleIndex + 1) % roles.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex, roles]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };


  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/Uttam.pdf"; // Place your resume inside /public folder
    link.download = "Uttam_Singhal_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  const socials = [
    {
      id: "github",
      href: "https://github.com/Uttamg61001",
      icon: <BsGithub size={32} />,
      hoverImg: "github.png", // 👈 your hover image path
    },

    {
      id: "linkedin",
      href: "https://www.linkedin.com/in/uttam-singhal-489130244/",
      icon: <FaLinkedinIn size={32} />,
      hoverImg: "linkedin.png",
    },
    {
      id: "mail",
      href: "mailto:uttamg61001@gmail.com",
      icon: <Mail size={32} />,
      hoverImg: "mail.webp",
    },
    {
      id: "whatspp",
      href: "https://wa.me/+917062467187",
      icon: <FaWhatsapp size={32} />,
      hoverImg: "whatsapp.png",
    },
    {
      id: "instagram",
      href: "https://www.instagram.com/uttamg61001/",
      icon: <FaInstagram size={32} />,
      hoverImg: "instagram.png",
    },
  ];

  const [hovered, setHovered] = useState<string | null>(null);


  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center hero-gradient relative overflow-hidden px-3 sm:px-6"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl animate-spin-slow" />
      </div>

      <div className="container mx-auto px-2 sm:px-6 relative z-10 mt-10 md:mt-0">
        <div className="text-center max-w-4xl mx-auto">
          {/* Greeting */}
          <div className="animate-fade-in mb-4 md:mb-6 flex justify-center">
  <button className="relative inline-flex h-10 md:h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-primary/40 focus:ring-offset-2 focus:ring-offset-background">
    {/* Animated Gradient Border */}
    <span className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

    {/* Inner Content (Your Original Tag Style) */}
    <span className="inline-flex h-full w-full tracking-wide whitespace-nowrap  items-center justify-center gap-1.5 md:gap-2 rounded-full bg-background px-3 md:px-5 py-1.5 md:py-2 text-[10px] md:text-sm font-medium text-white backdrop-blur-3xl border border-primary/10">
      <Sparkles size={14} className="md:size-5" />
      Crafting Modern Interfaces with Next.js & Figma
    </span>
  </button>
</div>



          {/* Main Title */}
          <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold mb-4 md:mb-6 animate-slide-up leading-tight">
            Hi, I&apos;m <span className="text-gradient">Uttam Singhal</span>
          </h1>

          {/* Dynamic Role */}
          <div
            className="text-lg sm:text-2xl lg:text-3xl text-muted-foreground mb-4 md:mb-8 font-mono min-h-[3rem] flex items-center justify-center animate-slide-up px-2 text-center"
            style={{ animationDelay: "0.2s" }}
          >
            <Code className="mr-2 sm:mr-3 text-primary shrink-0" size={24} />
            <span className="truncate max-w-full">
              {displayText}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          {/* Description */}
          <p
            className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl sm:max-w- mx-auto mb-6 md:mb-12 leading-relaxed animate-slide-up px-3 sm:px-0"
            style={{ animationDelay: "0.4s" }}
          >
            I design user-focused interfaces that blend creativity and function. With 3 years of experience in UI/UX and frontend,
            I craft seamless digital experiences using Figma, Adobe XD, and Next.js.
          </p>

          {/* Action Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-slide-up px-4"
            style={{ animationDelay: "0.6s" }}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("#projects")}
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 glow-effect text-base"
            >
              View My Work
            </Button>
            {/* 📄 Updated Download Resume Button */}
            <Button
              size="lg"
              variant="outline"
              onClick={handleResumeDownload}
              className="w-full sm:w-auto border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-3 text-base"
            >
              <Download className="mr-2" size={20} />
              Download Resume
            </Button>
          </div>

          {/* Social Links */}
          <div
            className="flex justify-center gap-6  animate-slide-up flex-wrap"
            style={{ animationDelay: "0.8s" }}
          >
            {socials.map((s) => (
              <a
                key={s.id}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => setHovered(s.id)}
                onMouseLeave={() => setHovered(null)}
                className="relative p-3 sm:p-4 rounded-full bg-muted transition-all duration-300 hover:scale-110 hover:glow-effect flex items-center justify-center "
              >
                {/* Default Icon */}
                <div
                  className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${hovered === s.id ? "opacity-0" : "opacity-100"
                    }`}
                >
                  {s.icon}
                </div>

                {/* Hover Image */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={s.hoverImg}
                  alt={s.id}
                  className={`absolute inset-0 m-auto w-8 h-8 object-contain transition-opacity duration-300 ${hovered === s.id ? "opacity-100" : "opacity-0"
                    }`}
                />
              </a>
            ))}
          </div>

        </div>
      </div>

      {/* 🖱️ Updated Scroll Indicator with Click */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block cursor-pointer"
        onClick={() => scrollToSection("#experience")}
      >
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center items-start overflow-hidden">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
