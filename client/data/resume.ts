// Order mirrors the CV exactly: Education, Publications, Certifications,
// Experience, Technical Skills, Projects. The CV's Profile section is the
// landing area, and Languages lives in the landing terminal panel.
export const SECTIONS = [
  { id: "education", label: "education" },
  { id: "publications", label: "publications" },
  { id: "certifications", label: "certifications" },
  { id: "experience", label: "experience" },
  { id: "skills", label: "skills" },
  { id: "projects", label: "projects" },
  { id: "contact", label: "contact" },
] as const;

export const EDUCATION = [
  {
    degree: "M.Sc. Cybersecurity",
    school: "KTH Royal Institute of Technology",
    place: "Stockholm, Sweden",
    dates: "2026 — 2028 (expected)",
    logo: "images/logos/kth.jpg",
    // The mark sits on its own brand colour rather than a white plate.
    logoBleed: true,
    tags: [],
  },
  {
    degree: "B.Sc. Media Engineering and Technology",
    school: "German International University in Berlin",
    place: "Computer Science and Engineering (CSEN) track · Berlin, Germany",
    dates: "2022 — 2026",
    logo: "images/logos/giu-berlin.jpg",
    logoBleed: false,
    tags: ["GPA: A+", "Graduated with Highest Honors"],
  },
];

export const EXPERIENCE = [
  {
    company: "Arab African International Bank",
    role: "Network Security Intern",
    dates: "Sep — Oct 2025",
    logo: "images/logos/aaib.jpg",
    bullets: [
      "Configured simulated networks in Cisco Packet Tracer, applying routing, switching, subnetting, VLANs and ACLs.",
      "Shadowed the Network Security team during demonstrations of Palo Alto Networks firewalls and GoAnywhere secure file-transfer workflows.",
    ],
    tags: ["CCNA", "Palo Alto", "Network Security"],
  },
  {
    company: "Orange",
    role: "Cyber Security Operations Intern",
    dates: "Aug — Sep 2025",
    logo: "images/logos/orange.png",
    bullets: [
      "Completed hands-on network and web application penetration-testing labs and CTFs, applying OWASP Top 10 techniques using Nmap, Wireshark, Burp Suite, Metasploit, Sublist3r, ffuf, Hashcat, John the Ripper and Netcat.",
      "Wrote Bash scripts to automate repetitive tasks during penetration-testing exercises.",
    ],
    tags: ["Penetration Testing", "OWASP Top 10", "Bash"],
  },
  {
    company: "Siemens",
    role: "Software Engineering Intern",
    dates: "Jan — Feb 2025",
    logo: "images/logos/siemens.png",
    bullets: [
      "Built a Power Apps solution for HR workflows implementing role-based access control for HR and employee users.",
      "Integrated SharePoint as the backend database and Power BI for real-time dashboards and analytics.",
      "Implemented automated workflows using Power Automate, including Excel uploads to SharePoint, personalised and reminder emails, and task submission with routing to managers for Outlook-based approval.",
    ],
    tags: ["Power Platform", "SharePoint", "Power BI"],
  },
  {
    company: "Plastic Bank",
    role: "Data Science Intern",
    dates: "Jul — Sep 2024",
    logo: "images/logos/plastic-bank.jpg",
    bullets: [
      "Extracted and processed data from PostgreSQL to prepare datasets for analysis and visualisation.",
      "Analysed Plastic Bank's Indonesia data using Power BI to generate insights, visualise trends and deliver key performance metrics.",
      "Developed a C++ script to automate data extraction, normalise names across multiple languages, validate entries and detect redundant accounts indicative of potential anomalies or fraudulent activity.",
    ],
    tags: ["PostgreSQL", "Power BI", "C++"],
  },
];

export const PROJECTS = [
  {
    name: "PhishNet",
    tagline: "AI-based phishing detection platform",
    href: "https://github.com/Enovac/PhishNet",
    badge: "Security",
    bullets: [
      "Developed a phishing-detection platform using the MERN stack and FastAPI, integrating the Gmail API to analyse email headers, metadata and attachments.",
      "Built a Logistic Regression model with TF-IDF trained on an 80,000-email dataset, supplemented by SPF, DKIM, DMARC and header analysis.",
      "Implemented JWT authentication with HTTP-only cookies, input sanitisation and protection against NoSQL injection.",
    ],
    tags: ["MERN", "FastAPI", "Machine Learning"],
  },
  {
    name: "Coordinated DRL for Cloud Resource Management",
    tagline: "Hybrid elastic scaling and task scheduling",
    href: "https://github.com/Enovac/DRL-CloudSimPlus-Elastic-Scaling-Scheduling",
    badge: "Research",
    bullets: [
      "Built a discrete-event cloud simulation on CloudSim Plus with a custom staging queue, flavor-based VM model and seed-controlled workload generator, exposed through a Javalin server and FastAPI bridge.",
      "Trained two MaskablePPO agents for elastic scaling and task scheduling through a five-stage pipeline, and evaluated six scaler–scheduler combinations across 1,000 held-out episodes.",
      "Reduced execution cost by 13% compared with a rule-based threshold scaler while achieving slightly lower average task latency and lower overprovisioning.",
    ],
    tags: ["Deep RL", "CloudSim Plus", "MaskablePPO"],
  },
  {
    name: "AES-128 Encryption in x86 Assembly",
    tagline: "Low-level cryptography implementation",
    href: "https://github.com/Enovac/AES-Assembly-Project",
    badge: "Cryptography",
    bullets: [
      "Led a four-person team to implement AES-128 from scratch in 16-bit x86 assembly, including key expansion, SubBytes, ShiftRows, MixColumns and AddRoundKey across all 10 rounds.",
      "Implemented GF(2^8) multiplication for MixColumns with modular reduction against the AES polynomial and a 256-byte S-box lookup table.",
    ],
    tags: ["x86 Assembly", "Cryptography"],
  },
  {
    name: "Google Cybersecurity Projects",
    tagline: "Security practice and frameworks",
    href: "https://github.com/Enovac/Google-Cybersecurity-Projects",
    badge: "Security",
    bullets: [
      "Practised vulnerability assessments and incident report writing against realistic scenarios.",
      "Applied the AAA framework and NIST Cybersecurity Framework to structure controls and risk documentation.",
    ],
    tags: ["NIST CSF", "Incident Response"],
  },
];

export const CERTIFICATIONS = [
  {
    name: "CompTIA Security+ (SY0-701)",
    issuer: "CompTIA",
    image: "images/certs/comptia-securityplus.png",
    link: "https://www.credly.com/badges/787476cb-32c2-4710-9f39-2cbb2dc75093/public_url",
  },
  {
    name: "Google Cybersecurity Professional Certificate",
    issuer: "Google",
    image: "images/certs/google-cybersecurity.png",
    link: "https://www.credly.com/badges/24b2d9b3-2cdb-4dec-b38b-313ba0f20fd8/public_url",
  },
  {
    name: "AWS Cloud Solutions Architect",
    issuer: "Amazon Web Services",
    image: "images/certs/aws.png",
    link: "https://coursera.org/share/b90a6b79f6a7e4dc35d1e268e76389f5",
  },
  {
    name: "Google IT Support Professional Certificate",
    issuer: "Google",
    image: "images/certs/google-it.png",
    link: "https://www.credly.com/badges/87a8663a-8a9c-4f98-bea0-f9c617864fb7/public_url",
  },
];

export const SKILLS = [
  {
    group: "Hands-on Security",
    items: [
      "Enumeration",
      "Authentication bypass",
      "IDOR",
      "File inclusion",
      "SSRF",
      "XSS",
      "Injection attacks",
      "Privilege escalation",
    ],
  },
  {
    group: "Security Tools",
    items: [
      "Nmap",
      "Wireshark",
      "Burp Suite",
      "Metasploit",
      "SQLMap",
      "ffuf",
      "Gobuster",
      "Hydra",
      "Hashcat",
      "John the Ripper",
    ],
  },
  {
    group: "Security Operations",
    items: ["Nessus", "TippingPoint IPS", "Cisco Mail Gateway", "Palo Alto"],
  },
  {
    group: "Cloud & Systems",
    items: ["AWS", "Linux", "Windows", "VMware", "Hyper-V"],
  },
  {
    group: "Programming",
    items: ["Python", "Bash", "C++", "Java", "JavaScript", "SQL"],
  },
  {
    group: "Development",
    items: [
      "FastAPI",
      "Node.js",
      "Express",
      "React",
      "MongoDB",
      "PostgreSQL",
      "Git",
    ],
  },
  {
    group: "Power Platform",
    items: ["Power Apps", "Power Automate", "SharePoint", "Power BI"],
  },
];
