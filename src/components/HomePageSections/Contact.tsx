import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Mail, Phone, MapPin, Download, Send, Github, Linkedin, ExternalLink } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'uttamg61001@gmail.com',
      href: 'mailto:uttamg61001@gmail.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 7062467187',
      href: 'tel:+917062467187',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Sri Ganganagar, Rajasthan',
      href: '#',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const socialLinks = [
    {
      name: 'GitHub',
      icon: Github,
      href: 'https://github.com',
      color: 'hover:bg-gray-800 hover:text-white'
    },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      href: 'https://linkedin.com',
      color: 'hover:bg-blue-600 hover:text-white'
    },
    {
      name: 'Portfolio',
      icon: ExternalLink,
      href: '#',
      color: 'hover:bg-primary hover:text-primary-foreground'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="py-10 md:py-20 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Get In <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Ready to collaborate on your next project? Let&apos;s discuss how I can help bring your ideas to life with modern web development.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-slide-up">
              <div className="mb-8">
                <h3 className="text-2xl font-semibold mb-6">Let&apos;s Connect</h3>
                <p className="text-muted-foregro]und leading-relaxed mb-8">
                  I&apos;m always interested in new opportunities, challenging projects, and collaborations. 
                  Whether you&apos;re a startup looking to build your first product or an established company 
                  needing to enhance your web presence, I&apos;d love to hear from you.
                </p>

                {/* Contact Methods */}
                <div className="space-y-4 mb-8">
                  {contactInfo.map((contact, index) => (
                    <a
                      key={index}
                      href={contact.href}
                      className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] group"
                    >
                      <div className={`p-3 rounded-lg bg-gradient-to-r ${contact.color} bg-opacity-20 group-hover:scale-110 transition-transform`}>
                        <contact.icon className="text-white" size={20} />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">{contact.label}</p>
                        <p className="font-medium group-hover:text-primary transition-colors">{contact.value}</p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Social Links */}
                <div className="mb-8">
                  <h4 className="font-medium mb-4">Follow Me</h4>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-3 rounded-lg bg-muted transition-all duration-300 ${social.color} hover:scale-110 hover:glow-effect`}
                        title={social.name}
                      >
                        <social.icon size={20} />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Resume Download */}
                <Card className="p-6 card-gradient border-border">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold mb-1">Download Resume</h4>
                      <p className="text-muted-foreground text-sm">Get my complete professional profile</p>
                    </div>
                    <Button className="bg-primary hover:bg-primary/90 text-primary-foreground glow-effect">
                      <Download size={16} className="mr-2" />
                      Resume
                    </Button>
                  </div>
                </Card>
              </div>
            </div>

            {/* Contact Form */}
            <div className="animate-slide-up" style={{animationDelay: '0.2s'}}>
              <Card className="p-8 card-gradient border-border">
                <h3 className="text-2xl font-semibold mb-6">Send Message</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your full name"
                        required
                        className="bg-background border-border focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className="bg-background border-border focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">Subject</label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      required
                      className="bg-background border-border focus:border-primary"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project or inquiry..."
                      rows={5}
                      required
                      className="bg-background border-border focus:border-primary resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground glow-effect"
                    size="lg"
                  >
                    <Send size={16} className="mr-2" />
                    Send Message
                  </Button>
                </form>

                {/* Response Time */}
                <div className="mt-6 text-center">
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    Usually responds within 24 hours
                  </Badge>
                </div>
              </Card>
            </div>
          </div>

          {/* Availability Status */}
          {/* <div className="mt-12 text-center animate-fade-in">
            <Card className="p-6 card-gradient border-border inline-block">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <div>
                  <p className="font-medium">Available for Freelance Projects</p>
                  <p className="text-muted-foreground text-sm">Open to new opportunities and collaborations</p>
                </div>
              </div>
            </Card>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;