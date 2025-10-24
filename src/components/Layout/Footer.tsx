import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Heart,
  ArrowUp,
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Instagram,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().toLocaleString("default", { month: "long" });

  const quickLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { name: "GitHub", icon: Github, href: "https://github.com" },
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
    { name: "Email", icon: Mail, href: "mailto:uttamg61001@gmail.com" },
    { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/uttamg61001/" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-secondary/30 border-t border-border">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand & Description (spans 2 columns on lg) */}
            <div className="col-span-2">
              <h3 className="text-2xl font-bold text-gradient mb-4">
                Uttam Singhal
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6 max-w-md">
                Passionate ui/ux designer creating beautiful, responsive
                web applications with modern technologies. Always eager to learn
                and take on new challenges.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-sm">
                  <MapPin size={16} className="text-primary" />
                  <span className="text-muted-foreground">
                    Sri Ganganagar, Rajasthan, India
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Phone size={16} className="text-primary" />
                  <span className="text-muted-foreground">+91 7062467187</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <Mail size={16} className="text-primary" />
                  <span className="text-muted-foreground">
                    uttamg61001@gmail.com
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4 text-foreground">
                Quick Links
              </h4>
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(link.href)}
                    className="block text-muted-foreground hover:text-primary transition-colors text-sm text-left cursor-pointer"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Connect & Status */}
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Connect</h4>
              <div className="flex gap-3 mb-6">
                {socialLinks.map((social, index) => (
                  <Link
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-muted hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                    title={social.name}
                  >
                    <social.icon size={18} />
                  </Link>
                ))}
              </div>
              <div className="flex flex-col space-y-3">
                <Badge
                  variant="secondary"
                  className="bg-green-500/10 text-green-500 border-green-500/20 text-xs"
                >
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                  Available for work
                </Badge>
                <Badge
                  variant="outline"
                  className="border-primary/20 text-primary text-xs"
                >
                  Open to freelance
                </Badge>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border my-8" />

          {/* Bottom Footer */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
            <div className="flex flex-wrap justify-center sm:justify-start items-center gap-2 text-sm text-white">
              <span>© {currentYear} Uttam Singhal. Made with</span>
              <Heart size={14} className="text-red-500 animate-pulse" />
              <span>using React & TypeScript</span>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-xs text-white">
                Last updated: {currentMonth} {currentYear}
              </span>

              {/* Scroll to top */}
              <Button
                size="sm"
                variant="outline"
                onClick={scrollToTop}
                className="border-primary/20 hover:bg-primary hover:text-primary-foreground"
              >
                <ArrowUp size={16} />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-24 -right-24 w-48 h-48 bg-accent/5 rounded-full blur-3xl" />
      </div>
    </footer>
  );
};

export default Footer;
