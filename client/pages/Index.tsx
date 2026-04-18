import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Download, Briefcase, GraduationCap, Award, Code } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Index() {
  const assetUrl = (path: string) => {
    const normalized = path.replace(/^\/+/, "");
    return `${import.meta.env.BASE_URL}${normalized}`;
  };

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
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/60 backdrop-blur-xl border-b border-white/10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold gradient-text sparkle">YA</h2>
            <div className="hidden md:flex items-center gap-6">
              <button onClick={() => scrollToSection('about')} className="text-sm px-2 py-1 -mx-2 rounded-md cursor-pointer hover:text-primary transition-all hover:scale-110">About</button>
              <button onClick={() => scrollToSection('experience')} className="text-sm px-2 py-1 -mx-2 rounded-md cursor-pointer hover:text-primary transition-all hover:scale-110">Experience</button>
              <button onClick={() => scrollToSection('certifications')} className="text-sm px-2 py-1 -mx-2 rounded-md cursor-pointer hover:text-primary transition-all hover:scale-110">Certifications</button>
              <button onClick={() => scrollToSection('skills')} className="text-sm px-2 py-1 -mx-2 rounded-md cursor-pointer hover:text-primary transition-all hover:scale-110">Skills</button>
              <button onClick={() => scrollToSection('projects')} className="text-sm px-2 py-1 -mx-2 rounded-md cursor-pointer hover:text-primary transition-all hover:scale-110">Projects</button>
              <button onClick={() => scrollToSection('contact')} className="text-sm px-2 py-1 -mx-2 rounded-md cursor-pointer hover:text-primary transition-all hover:scale-110">Contact</button>
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
              Computer Science Student | Cybersecurity Enthusiast
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4" style={{animation: 'slide-up 0.8s ease-out 0.8s both'}}>
              <Button size="lg" onClick={() => scrollToSection('contact')} className="gap-2 bg-primary hover:bg-primary/90 glow-effect hover:scale-105 transition-transform">
                <Mail className="w-4 h-4" />
                Get In Touch
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white/10 hover:bg-white/5 shimmer hover:scale-105 transition-transform">
                <a href="https://github.com/Enovac" target="_blank" rel="noopener noreferrer" className="gap-2">
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-white/10 hover:bg-white/5 shimmer hover:scale-105 transition-transform">
                <a href="https://www.linkedin.com/in/youssef-abdelrahman-91a3a72a0" target="_blank" rel="noopener noreferrer" className="gap-2">
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
                  <h3 className="font-semibold text-lg">B.Sc. in Media Engineering and Technology</h3>
                  <p className="text-sm text-muted-foreground">Computer Science and Engineering track</p>
                  <p className="text-sm text-muted-foreground">German International University in Berlin (GIU Berlin)</p>
                  <div className="mt-2">
                    <Badge variant="secondary" className="bg-white/5 border-white/10">GPA: 0.84/0.7</Badge>
                    <Badge variant="secondary" className="ml-2 bg-white/5 border-white/10">Full Scholarship</Badge>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Top ranking student.
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
                  Passionate computer science student with hands-on experience in cybersecurity, software engineering, and data science. I've completed internships at leading organizations including Orange, Siemens, Plastic Bank, and Arab African International Bank.
                </p>
                <p className="text-sm text-foreground/90">
                  Top 2% globally on TryHackMe • Codeforces Specialist
                </p>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-muted-foreground w-20">Nationality</span>
                    <Badge variant="outline" className="border-white/10">Swedish</Badge>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-muted-foreground w-20">Languages</span>
                    <Badge variant="outline" className="border-white/10">English</Badge>
                    <Badge variant="outline" className="border-white/10">Arabic</Badge>
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
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg border border-white/10 bg-white/90 overflow-hidden flex items-center justify-center">
                      <img src={assetUrl("images/logos/aaib.jpg")} alt="AAIB" className="w-full h-full object-contain scale-110" />
                    </div>
                    <div>
                      <CardTitle>Network Security Intern</CardTitle>
                      <CardDescription className="text-base font-semibold text-foreground/80 mt-1">Arab African International Bank (AAIB)</CardDescription>
                    </div>
                  </div>
                  <Badge className="bg-white/5 border-white/10">Sep – Oct 2025</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Applied CCNA concepts by configuring simulated networks in Cisco Packet Tracer (routing, switching, subnetting, VLANs, ACLs)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Analyzed network traffic and security policies using Palo Alto Networks firewalls</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Worked with GoAnywhere secure file transfer concepts focused on automation and secure data movement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Performed virtualization tasks using VMware and Hyper-V (VM deployment, storage management, snapshotting)</span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary" className="bg-white/5 border-white/10">CCNA</Badge>
                  <Badge variant="secondary" className="bg-white/5 border-white/10">Palo Alto</Badge>
                  <Badge variant="secondary" className="bg-white/5 border-white/10">VMware</Badge>
                  <Badge variant="secondary" className="bg-white/5 border-white/10">Hyper-V</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-l-4 border-l-accent border-t border-r border-b border-white/10 hover:shadow-xl hover:shadow-accent/10 transition-all hover-lift fade-in-section">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg border border-white/10 bg-white/90 overflow-hidden flex items-center justify-center">
                      <img src={assetUrl("images/logos/orange.png")} alt="Orange" className="w-full h-full object-contain scale-110" />
                    </div>
                    <div>
                      <CardTitle>Cyber Security Operations Intern</CardTitle>
                      <CardDescription className="text-base font-semibold text-foreground/80 mt-1">Orange</CardDescription>
                    </div>
                  </div>
                  <Badge className="bg-white/5 border-white/10">Aug – Sep 2025</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Trained with the Information Security team on Nessus vulnerability scanner, TippingPoint IPS, and Cisco Mail Gateway</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Conducted network and web application penetration testing in labs and CTFs, applying OWASP Top 10 techniques</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Used tools including Nmap, Wireshark, Burp Suite, Metasploit, Sublist3r, ffuf, Hashcat, John the Ripper, and Netcat</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Wrote Bash scripts to automate tasks during penetration testing exercises</span>
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
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg border border-white/10 bg-white/90 overflow-hidden flex items-center justify-center">
                      <img src={assetUrl("images/logos/siemens.png")} alt="Siemens" className="w-full h-full object-contain scale-110" />
                    </div>
                    <div>
                      <CardTitle>Software Engineering Intern</CardTitle>
                      <CardDescription className="text-base font-semibold text-foreground/80 mt-1">Siemens</CardDescription>
                    </div>
                  </div>
                  <Badge className="bg-white/5 border-white/10">Jan – Feb 2025</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Built a Power Apps solution for HR workflows implementing role-based access control (RBAC) for HR and employee users</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Integrated SharePoint as the backend database and Power BI for real-time dashboards and analytics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Implemented automated workflows using Power Automate, including Excel uploads to SharePoint and personalized/reminder emails</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Implemented task submission with routing to managers for Outlook-based approval</span>
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
                  <div className="flex items-start gap-3">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-lg border border-white/10 bg-white/90 overflow-hidden flex items-center justify-center">
                      <img src={assetUrl("images/logos/plastic-bank.jpg")} alt="Plastic Bank" className="w-full h-full object-contain scale-110" />
                    </div>
                    <div>
                      <CardTitle>Data Science Intern</CardTitle>
                      <CardDescription className="text-base font-semibold text-foreground/80 mt-1">Plastic Bank</CardDescription>
                    </div>
                  </div>
                  <Badge className="bg-white/5 border-white/10">Jul – Sep 2024</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Extracted and processed data from PostgreSQL to prepare datasets for analysis and visualization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Analyzed Indonesia data using Power BI to generate insights, visualize trends, and deliver key performance metrics</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Developed a C++ script to normalize multilingual names, validate entries, and detect redundant accounts indicative of anomalies</span>
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
                image: "images/certs/comptia-securityplus.png",
                link: "https://www.credly.com/badges/787476cb-32c2-4710-9f39-2cbb2dc75093/public_url"
              },
              {
                name: "Google Cybersecurity Professional Certificate",
                color: "accent",
                image: "images/certs/google-cybersecurity.png",
                link: "https://www.credly.com/badges/24b2d9b3-2cdb-4dec-b38b-313ba0f20fd8/public_url"
              },
              {
                name: "Google IT Support Professional Certificate",
                color: "primary",
                image: "images/certs/google-it.png",
                link: "https://www.credly.com/badges/87a8663a-8a9c-4f98-bea0-f9c617864fb7/public_url"
              },
              {
                name: "AWS Cloud Solutions Architect Professional Certificate",
                color: "accent",
                image: "images/certs/aws.png",
                link: "https://coursera.org/share/b90a6b79f6a7e4dc35d1e268e76389f5"
              }
            ].map((cert, idx) => (
              <a key={idx} href={cert.link} target="_blank" rel="noopener noreferrer" className="block">
                <Card className={`glass-card border-${cert.color}/20 hover:border-${cert.color}/50 transition-all group hover-lift fade-in-section cursor-pointer`}>
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between mb-2">
                      <div className="w-12 h-12 md:w-14 md:h-14 bg-white/90 rounded-lg flex items-center justify-center group-hover:bg-white transition-all p-1 overflow-hidden">
                        {cert.image ? (
                          <img
                            src={cert.image.startsWith("http") ? cert.image : assetUrl(cert.image)}
                            alt={cert.name}
                            className="w-full h-full object-contain scale-110"
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
                <CardTitle className="text-lg">Programming & Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-primary/20 border-primary/30 hover:scale-110 hover:shadow-lg hover:shadow-primary/50 transition-all cursor-default" style={{animation: 'bounce-in 0.5s ease-out 0.1s both'}}>Python</Badge>
                  <Badge className="bg-primary/20 border-primary/30 hover:scale-110 hover:shadow-lg hover:shadow-primary/50 transition-all cursor-default" style={{animation: 'bounce-in 0.5s ease-out 0.2s both'}}>C++</Badge>
                  <Badge className="bg-primary/20 border-primary/30 hover:scale-110 hover:shadow-lg hover:shadow-primary/50 transition-all cursor-default" style={{animation: 'bounce-in 0.5s ease-out 0.3s both'}}>Java</Badge>
                  <Badge className="bg-primary/20 border-primary/30 hover:scale-110 hover:shadow-lg hover:shadow-primary/50 transition-all cursor-default" style={{animation: 'bounce-in 0.5s ease-out 0.4s both'}}>Bash</Badge>
                  <Badge className="bg-primary/20 border-primary/30 hover:scale-110 hover:shadow-lg hover:shadow-primary/50 transition-all cursor-default" style={{animation: 'bounce-in 0.5s ease-out 0.5s both'}}>Git</Badge>
                  <Badge className="bg-primary/20 border-primary/30 hover:scale-110 hover:shadow-lg hover:shadow-primary/50 transition-all cursor-default" style={{animation: 'bounce-in 0.5s ease-out 0.6s both'}}>Jira</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-white/10 hover:border-accent/30 transition-all hover-lift fade-in-section">
              <CardHeader>
                <CardTitle className="text-lg">Web Development</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-accent/20 border-accent/30">PostgreSQL</Badge>
                  <Badge className="bg-accent/20 border-accent/30">MongoDB</Badge>
                  <Badge className="bg-accent/20 border-accent/30">Express</Badge>
                  <Badge className="bg-accent/20 border-accent/30">React</Badge>
                  <Badge className="bg-accent/20 border-accent/30">Node.js</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-white/10 hover:border-primary/30 transition-all hover-lift fade-in-section">
              <CardHeader>
                <CardTitle className="text-lg">Power Platform</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-primary/20 border-primary/30">Power Apps</Badge>
                  <Badge className="bg-primary/20 border-primary/30">Power Automate</Badge>
                  <Badge className="bg-primary/20 border-primary/30">SharePoint</Badge>
                  <Badge className="bg-primary/20 border-primary/30">Power BI</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-white/10 hover:border-accent/30 transition-all hover-lift fade-in-section">
              <CardHeader>
                <CardTitle className="text-lg">Pentest Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-accent/20 border-accent/30">Nmap</Badge>
                  <Badge className="bg-accent/20 border-accent/30">Wireshark</Badge>
                  <Badge className="bg-accent/20 border-accent/30">Burp Suite</Badge>
                  <Badge className="bg-accent/20 border-accent/30">Metasploit</Badge>
                  <Badge className="bg-accent/20 border-accent/30">SQLMap</Badge>
                  <Badge className="bg-accent/20 border-accent/30">ffuf</Badge>
                  <Badge className="bg-accent/20 border-accent/30">Hydra</Badge>
                  <Badge className="bg-accent/20 border-accent/30">Hashcat</Badge>
                  <Badge className="bg-accent/20 border-accent/30">John the Ripper</Badge>
                  <Badge className="bg-accent/20 border-accent/30">Netcat</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card border-white/10 hover:border-primary/30 transition-all hover-lift fade-in-section">
              <CardHeader>
                <CardTitle className="text-lg">Security Operations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  <Badge className="bg-primary/20 border-primary/30">Nessus</Badge>
                  <Badge className="bg-primary/20 border-primary/30">TippingPoint IPS</Badge>
                  <Badge className="bg-primary/20 border-primary/30">Cisco Mail Gateway</Badge>
                  <Badge className="bg-primary/20 border-primary/30">Palo Alto</Badge>
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
                  <Badge className="bg-accent/20 border-accent/30">Linux</Badge>
                  <Badge className="bg-accent/20 border-accent/30">Windows</Badge>
                  <Badge className="bg-accent/20 border-accent/30">VMware</Badge>
                  <Badge className="bg-accent/20 border-accent/30">Hyper-V</Badge>
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
            <a href="https://github.com/Enovac/PhishNet" target="_blank" rel="noopener noreferrer" className="block">
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
                  <CardTitle>PhishNet</CardTitle>
                  <CardDescription>
                    AI-Based Phishing Detection Platform
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Built using the MERN stack and FastAPI. Integrated Gmail API parsing and a Logistic Regression + TF-IDF model trained on an 80,000-email dataset, with SPF/DKIM/DMARC header analysis, secure JWT auth, and a LLaMA-powered chatbot to explain results.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="bg-white/5 border-white/10">MERN</Badge>
                    <Badge variant="secondary" className="bg-white/5 border-white/10">FastAPI</Badge>
                    <Badge variant="secondary" className="bg-white/5 border-white/10">ML</Badge>
                  </div>
                </CardContent>
              </Card>
            </a>

            <a href="https://github.com/Enovac/AES-Assembly-Project" target="_blank" rel="noopener noreferrer" className="block">
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

            <a href="https://github.com/Enovac/Google-Cybersecurity-Projects" target="_blank" rel="noopener noreferrer" className="block">
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
                    Cybersecurity practice projects
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
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="glass-card border-white/10 hover:shadow-lg hover:shadow-primary/20 hover:border-primary/50 transition-all hover-lift fade-in-section">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-2">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-base">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <a href="mailto:youssef.amr.anter@gmail.com" className="text-sm text-foreground hover:underline whitespace-nowrap">
                  youssef.amr.anter@gmail.com
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
                <a href="tel:+491723518751" className="text-sm text-foreground hover:underline whitespace-nowrap">
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
                <p className="text-sm text-foreground whitespace-nowrap">Berlin, Germany</p>
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
                href="https://github.com/Enovac"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/youssef-abdelrahman-91a3a72a0"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:youssef.amr.anter@gmail.com"
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
