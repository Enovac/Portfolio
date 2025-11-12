import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Download, Briefcase, GraduationCap, Award, Code } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Index() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in-visible");
        } else {
          entry.target.classList.remove("fade-in-visible");
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(".fade-in-section");
    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen relative">
      {/* Lava Lamp Background */}
      <div className="lava-lamp-bg">
        <div className="lava-blob lava-blob-1"></div>
        <div className="lava-blob lava-blob-2"></div>
        <div className="lava-blob lava-blob-3"></div>
        <div className="lava-blob lava-blob-4"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-white/10 shimmer">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold gradient-text sparkle">YA</h2>
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('about')} className="text-sm hover:text-primary transition-all hover:scale-110">About</button>
              <button onClick={() => scrollToSection('experience')} className="text-sm hover:text-primary transition-all hover:scale-110">Experience</button>
              <button onClick={() => scrollToSection('certifications')} className="text-sm hover:text-primary transition-all hover:scale-110">Certifications</button>
              <button onClick={() => scrollToSection('skills')} className="text-sm hover:text-primary transition-all hover:scale-110">Skills</button>
              <button onClick={() => scrollToSection('projects')} className="text-sm hover:text-primary transition-all hover:scale-110">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="text-sm hover:text-primary transition-all hover:scale-110">Contact</button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center space-y-6 fade-in-section">
            <div className="inline-block float-animation">
              <Badge variant="secondary" className="mb-4 bg-white/5 border-white/10 hover:bg-white/10 shimmer">
                <MapPin className="w-3 h-3 mr-1 sparkle" />
                Berlin, Germany
              </Badge>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
              <span className="gradient-text text-reveal" style={{animationDelay: '0.2s'}}>Youssef</span>
              <br />
              <span className="text-foreground" style={{animation: 'slide-up 0.8s ease-out 0.4s both'}}>ABDELRAHMAN</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto" style={{animation: 'slide-up 0.8s ease-out 0.6s both'}}>
              Computer Science Student | Cybersecurity Enthusiast | Software Engineer
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4" style={{animation: 'slide-up 0.8s ease-out 0.8s both'}}>
              <Button size="lg" onClick={() => scrollToSection('contact')} className="gap-2 bg-primary hover:bg-primary/90 glow-effect hover:scale-105 transition-transform">
                <Mail className="w-4 h-4" />
                Get In Touch
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white/10 hover:bg-white/5 shimmer hover:scale-105 transition-transform">
                <a href="https://github.com/youssefabdelrahman" target="_blank" rel="noopener noreferrer" className="gap-2">
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white/10 hover:bg-white/5 shimmer hover:scale-105 transition-transform">
                <a href="https://linkedin.com/in/youssefabdelrahman" target="_blank" rel="noopener noreferrer" className="gap-2">
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text fade-in-section">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="glass-card border-white/10 hover:border-primary/50 transition-all hover-lift fade-in-section">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 glow-effect group-hover:animate-bounce">
                  <GraduationCap className="w-6 h-6 text-primary sparkle" />
                </div>
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg">BSc in Computer Science and Engineering</h3>
                  <p className="text-sm text-muted-foreground">German International University in Berlin (GIU Berlin)</p>
                  <p className="text-sm text-muted-foreground">2022 – 2026</p>
                  <div className="mt-2">
                    <Badge variant="secondary" className="bg-white/5 border-white/10">GPA: 4.0/4.0</Badge>
                    <Badge variant="secondary" className="ml-2 bg-white/5 border-white/10">Full Scholarship</Badge>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Top-ranking student with expertise in Databases, Data Structures, Algorithms, Operating Systems, Networks, and Software Engineering.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card border-white/10 hover:border-accent/50 transition-all hover-lift fade-in-section">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4 glow-effect group-hover:animate-bounce">
                  <Code className="w-6 h-6 text-accent sparkle" />
                </div>
                <CardTitle>Background</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-sm leading-relaxed">
                  Passionate computer science student with hands-on experience in cybersecurity, software engineering, and data science. I've completed internships at leading organizations including Orange, Siemens, and Plastic Bank.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <Badge variant="outline" className="border-white/10">Swedish</Badge>
                    <span className="text-muted-foreground">Nationality</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Badge variant="outline" className="border-white/10">English</Badge>
                    <Badge variant="outline" className="border-white/10">Arabic</Badge>
                    <span className="text-muted-foreground">Languages</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text fade-in-section">Experience</h2>
          <div className="space-y-6">
            <Card className="glass-card border-l-4 border-l-primary border-t border-r border-b border-white/10 hover:shadow-xl hover:shadow-primary/10 transition-all hover-lift fade-in-section">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>Information Technology Intern</CardTitle>
                    <CardDescription className="text-base font-semibold text-foreground/80 mt-1">Arab African International Bank (AAIB)</CardDescription>
                  </div>
                  <Badge className="bg-white/5 border-white/10">Sep – Oct 2025</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Gained practical experience in information technology operations and systems at a leading financial institution.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary" className="bg-white/5 border-white/10">IT Operations</Badge>
                  <Badge variant="secondary" className="bg-white/5 border-white/10">Banking Systems</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-l-4 border-l-accent border-t border-r border-b border-white/10 hover:shadow-xl hover:shadow-accent/10 transition-all hover-lift fade-in-section">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>Cyber Security Operations Intern</CardTitle>
                    <CardDescription className="text-base font-semibold text-foreground/80 mt-1">Orange</CardDescription>
                  </div>
                  <Badge className="bg-white/5 border-white/10">Aug – Sep 2025</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Trained with Information Security team on Nessus vulnerability scanner, TippingPoint IPS, and Cisco Mail Gateway</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Completed practical labs and CTF challenges with Penetration Testing team</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Practiced network and web application pentesting using Nmap, Wireshark, Burp Suite, Hydra, and Metasploit</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Performed Android application pentesting using ADB, Jadx, Apktool, Frida, and MOBSF</span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary" className="bg-white/5 border-white/10">Cybersecurity</Badge>
                  <Badge variant="secondary" className="bg-white/5 border-white/10">Penetration Testing</Badge>
                  <Badge variant="secondary" className="bg-white/5 border-white/10">Network Security</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-l-4 border-l-primary border-t border-r border-b border-white/10 hover:shadow-xl hover:shadow-primary/10 transition-all hover-lift fade-in-section">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>Software Engineering Intern</CardTitle>
                    <CardDescription className="text-base font-semibold text-foreground/80 mt-1">Siemens</CardDescription>
                  </div>
                  <Badge className="bg-white/5 border-white/10">Jan – Feb 2025</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Built HR management app in Power Apps with role-based HR and Employee views</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Integrated SharePoint backend and Power BI for real-time dashboards and analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Automated workflows with Power Automate for Excel uploads, emails, and task reminders</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Implemented task submission and approval flow with manager Outlook integration</span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary" className="bg-white/5 border-white/10">Power Platform</Badge>
                  <Badge variant="secondary" className="bg-white/5 border-white/10">SharePoint</Badge>
                  <Badge variant="secondary" className="bg-white/5 border-white/10">Power BI</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-l-4 border-l-accent border-t border-r border-b border-white/10 hover:shadow-xl hover:shadow-accent/10 transition-all hover-lift fade-in-section">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle>Data Science Intern</CardTitle>
                    <CardDescription className="text-base font-semibold text-foreground/80 mt-1">Plastic Bank</CardDescription>
                  </div>
                  <Badge className="bg-white/5 border-white/10">Jul – Sep 2024</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Gained hands-on experience with PostgreSQL for efficient data querying and extraction</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Developed Power BI dashboards analyzing Indonesia data with insights and KPIs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Created C++ script automating PostgreSQL data extraction with multilingual name processing</span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary" className="bg-white/5 border-white/10">PostgreSQL</Badge>
                  <Badge variant="secondary" className="bg-white/5 border-white/10">Power BI</Badge>
                  <Badge variant="secondary" className="bg-white/5 border-white/10">C++</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text fade-in-section">Certifications</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                name: "CompTIA Security+ (SY0-701)",
                color: "primary",
                image: "https://images.credly.com/size/680x680/images/74790a75-8451-400a-8536-92d792c5184a/CompTIA_Security_2Bce.png",
                link: "#"
              },
              {
                name: "Google Cybersecurity Professional",
                color: "accent",
                image: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/fb/e4e1b0bbf04903b58b09afa6c7ba21/1080x1080_GCC-Logo.png",
                link: "#"
              },
              {
                name: "Google IT Support Professional",
                color: "primary",
                image: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://s3.amazonaws.com/coursera-course-photos/92/e8c670402211e8a594f1e800c7be75/1080x1080.png",
                link: "#"
              },
              {
                name: "AWS Cloud Solutions Architect",
                color: "accent",
                image: "https://d1.awsstatic.com/training-and-certification/certification-badges/AWS-Certified-Solutions-Architect-Professional_badge.69d82ff1b2861e1089539d1a0c0e14f8e0f42d5b.png",
                link: "#"
              },
              {
                name: "AWS Fundamentals Specialization",
                color: "primary",
                image: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/6b/cf8b80cf4e11e8a95c79ea2e9f0e94/AWS-Fundamentals-Specialization_LOGO.png",
                link: "#"
              },
              {
                name: "Meta Backend Developer Professional",
                color: "accent",
                image: "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-course-photos.s3.amazonaws.com/a4/46b8e19e8448699be7c29dc6e55c6f/Meta-Logo-Blue.png",
                link: "#"
              }
            ].map((cert, idx) => (
              <a key={idx} href={cert.link} target="_blank" rel="noopener noreferrer" className="block">
                <Card className={`glass-card border-${cert.color}/20 hover:border-${cert.color}/50 transition-all group hover-lift fade-in-section cursor-pointer`}>
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between mb-2">
                      <div className="w-12 h-12 bg-white/90 rounded-lg flex items-center justify-center group-hover:bg-white transition-all p-1.5 overflow-hidden">
                        {cert.image ? (
                          <img
                            src={cert.image}
                            alt={cert.name}
                            className="w-full h-full object-contain"
                          />
                        ) : (
                          <Award className={`w-6 h-6 text-${cert.color}`} />
                        )}
                      </div>
                      <div className={`w-6 h-6 bg-${cert.color}/10 rounded-full flex items-center justify-center group-hover:bg-${cert.color}/20 transition-all`}>
                        <ExternalLink className={`w-3 h-3 text-${cert.color}`} />
                      </div>
                    </div>
                    <CardTitle className="text-base">{cert.name}</CardTitle>
                  </CardHeader>
                </Card>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text fade-in-section">Technical Skills</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="glass-card border-white/10 hover:border-primary/30 transition-all hover-lift fade-in-section">
              <CardHeader>
                <CardTitle className="text-lg">Programming Languages</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-primary/20 border-primary/30 hover:scale-110 hover:shadow-lg hover:shadow-primary/50 transition-all cursor-default" style={{animation: 'bounce-in 0.5s ease-out 0.1s both'}}>C</Badge>
                  <Badge className="bg-primary/20 border-primary/30 hover:scale-110 hover:shadow-lg hover:shadow-primary/50 transition-all cursor-default" style={{animation: 'bounce-in 0.5s ease-out 0.2s both'}}>C++</Badge>
                  <Badge className="bg-primary/20 border-primary/30 hover:scale-110 hover:shadow-lg hover:shadow-primary/50 transition-all cursor-default" style={{animation: 'bounce-in 0.5s ease-out 0.3s both'}}>Java</Badge>
                  <Badge className="bg-primary/20 border-primary/30 hover:scale-110 hover:shadow-lg hover:shadow-primary/50 transition-all cursor-default" style={{animation: 'bounce-in 0.5s ease-out 0.4s both'}}>Python</Badge>
                  <Badge className="bg-primary/20 border-primary/30 hover:scale-110 hover:shadow-lg hover:shadow-primary/50 transition-all cursor-default" style={{animation: 'bounce-in 0.5s ease-out 0.5s both'}}>JavaScript</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-white/10 hover:border-accent/30 transition-all hover-lift fade-in-section">
              <CardHeader>
                <CardTitle className="text-lg">Web & Databases</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-accent/20 border-accent/30">PostgreSQL</Badge>
                  <Badge className="bg-accent/20 border-accent/30">Django</Badge>
                  <Badge className="bg-accent/20 border-accent/30">Bootstrap</Badge>
                  <Badge className="bg-accent/20 border-accent/30">SharePoint</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-white/10 hover:border-primary/30 transition-all hover-lift fade-in-section">
              <CardHeader>
                <CardTitle className="text-lg">Microsoft Platform</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-primary/20 border-primary/30">Excel</Badge>
                  <Badge className="bg-primary/20 border-primary/30">Power Apps</Badge>
                  <Badge className="bg-primary/20 border-primary/30">Power BI</Badge>
                  <Badge className="bg-primary/20 border-primary/30">Power Automate</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-white/10 hover:border-accent/30 transition-all hover-lift fade-in-section">
              <CardHeader>
                <CardTitle className="text-lg">Cybersecurity Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-accent/20 border-accent/30">Suricata</Badge>
                  <Badge className="bg-accent/20 border-accent/30">Wireshark</Badge>
                  <Badge className="bg-accent/20 border-accent/30">Linux</Badge>
                  <Badge className="bg-accent/20 border-accent/30">Splunk</Badge>
                  <Badge className="bg-accent/20 border-accent/30">Burpsuite</Badge>
                  <Badge className="bg-accent/20 border-accent/30">Nmap</Badge>
                  <Badge className="bg-accent/20 border-accent/30">Metasploit</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-white/10 hover:border-primary/30 transition-all hover-lift fade-in-section">
              <CardHeader>
                <CardTitle className="text-lg">Version Control</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-primary/20 border-primary/30">Git</Badge>
                  <Badge className="bg-primary/20 border-primary/30">GitHub</Badge>
                  <Badge className="bg-primary/20 border-primary/30">Jira</Badge>
                  <Badge className="bg-primary/20 border-primary/30">Figma</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-white/10 hover:border-accent/30 transition-all hover-lift fade-in-section">
              <CardHeader>
                <CardTitle className="text-lg">Cloud & Infrastructure</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-accent/20 border-accent/30">AWS</Badge>
                  <Badge className="bg-accent/20 border-accent/30">Cloud Architecture</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 relative">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center gradient-text fade-in-section">Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <a href="#" target="_blank" rel="noopener noreferrer" className="block">
              <Card className="glass-card border-white/10 hover:shadow-xl hover:shadow-primary/20 hover:border-primary/50 transition-all group hover-lift fade-in-section cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-all">
                      <Code className="w-6 h-6 text-primary" />
                    </div>
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-all">
                      <ExternalLink className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                  <CardTitle>Google Cybersecurity Projects</CardTitle>
                  <CardDescription>
                    Comprehensive cybersecurity practice projects
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Practicing vulnerability assessments, incident reports, AAA Framework, NIST CSF, and more.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-white/5 border-white/10">Security</Badge>
                    <Badge variant="secondary" className="bg-white/5 border-white/10">NIST</Badge>
                    <Badge variant="secondary" className="bg-white/5 border-white/10">Compliance</Badge>
                  </div>
                </CardContent>
              </Card>
            </a>

            <a href="#" target="_blank" rel="noopener noreferrer" className="block">
              <Card className="glass-card border-white/10 hover:shadow-xl hover:shadow-accent/20 hover:border-accent/50 transition-all group hover-lift fade-in-section cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-all">
                      <Code className="w-6 h-6 text-accent" />
                    </div>
                    <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-all">
                      <ExternalLink className="w-4 h-4 text-accent" />
                    </div>
                  </div>
                  <CardTitle>Cadabra E-Commerce App</CardTitle>
                  <CardDescription>
                    Desktop e-commerce application
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Developed using Java OOP and JavaFX with layered architecture (Entity → Database → DAO → Service → GUI).
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-white/5 border-white/10">Java</Badge>
                    <Badge variant="secondary" className="bg-white/5 border-white/10">JavaFX</Badge>
                    <Badge variant="secondary" className="bg-white/5 border-white/10">OOP</Badge>
                  </div>
                </CardContent>
              </Card>
            </a>

            <a href="#" target="_blank" rel="noopener noreferrer" className="block">
              <Card className="glass-card border-white/10 hover:shadow-xl hover:shadow-primary/20 hover:border-primary/50 transition-all group hover-lift fade-in-section cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/30 transition-all">
                      <Code className="w-6 h-6 text-primary" />
                    </div>
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-all">
                      <ExternalLink className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                  <CardTitle>128-bit AES Encryption</CardTitle>
                  <CardDescription>
                    Low-level encryption implementation
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Led a team of four to implement AES encryption using x86 assembly language.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-white/5 border-white/10">Assembly</Badge>
                    <Badge variant="secondary" className="bg-white/5 border-white/10">Cryptography</Badge>
                    <Badge variant="secondary" className="bg-white/5 border-white/10">Security</Badge>
                  </div>
                </CardContent>
              </Card>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 relative">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text fade-in-section">Let's Connect</h2>
          <p className="text-lg text-muted-foreground mb-8 fade-in-section">
            I'm always open to discussing new opportunities, projects, or collaborations.
          </p>
          <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            <Card className="glass-card border-white/10 hover:shadow-lg hover:shadow-primary/20 hover:border-primary/50 transition-all hover-lift fade-in-section">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-base">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <a href="mailto:unienovac@gmail.com" className="text-sm text-primary hover:underline">
                  unienovac@gmail.com
                </a>
              </CardContent>
            </Card>

            <Card className="glass-card border-white/10 hover:shadow-lg hover:shadow-accent/20 hover:border-accent/50 transition-all hover-lift fade-in-section">
              <CardHeader>
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <CardTitle className="text-base">Phone</CardTitle>
              </CardHeader>
              <CardContent>
                <a href="tel:+491723518751" className="text-sm text-accent hover:underline">
                  +49 1723518751
                </a>
              </CardContent>
            </Card>

            <Card className="glass-card border-white/10 hover:shadow-lg hover:shadow-primary/20 hover:border-primary/50 transition-all hover-lift fade-in-section">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-base">Location</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm">Berlin, Germany</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-white/10 bg-background/50 backdrop-blur-xl relative">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 Youssef Abdelrahman. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/youssefabdelrahman"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/youssefabdelrahman"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:unienovac@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
