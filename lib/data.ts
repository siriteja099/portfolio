/**
 * ALL portfolio content lives here. Every fact below comes from the resume
 * (Siri_Teja_Gokarakonda_Resume.pdf). Edit this file to update the site.
 */

export const site = {
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://siriteja.github.io/portfolio",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || "",
};

/** Prefix a /public asset path so it works under a sub-path (GitHub Pages). */
export const asset = (p: string) => `${site.basePath}${p}`;

export const profile = {
  name: "Siri Teja Gokarakonda",
  shortName: "Siri Teja",
  title: "Python Backend Developer",
  location: "Andhra Pradesh, India",
  email: "siriteja099@gmail.com",
  phone: "+91 9100184759",
  phoneHref: "+919100184759",
  linkedin: "https://linkedin.com/in/siriteja",
  github: "https://github.com/siriteja",
  resume: "/Siri_Teja_Gokarakonda_Resume.pdf",
  intro:
    "I design and build scalable server-side applications with Django and REST APIs, and run them on AWS. One year of production experience, AWS Certified Cloud Practitioner, and a focus on clean, performant code.",
  summary:
    "Result-driven Python Backend Developer with 1 year of professional experience designing and implementing scalable server-side applications. AWS Certified Cloud Practitioner with expertise in Django, RESTful API development, and cloud infrastructure. I build production-grade applications with a strong focus on code quality, performance optimization, and collaborative development, and I enjoy solving complex technical challenges and contributing to high-impact projects.",
};

export const nav = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];

export const interests = [
  "Scalable server-side applications",
  "RESTful API design",
  "Cloud infrastructure on AWS",
  "Database & query optimization",
  "Payment and notification integrations",
  "Background task processing",
];

export const skillGroups: { title: string; items: string[] }[] = [
  {
    title: "Languages & Backend",
    items: ["Python", "Django", "Django REST Framework", "FastAPI", "RESTful APIs"],
  },
  {
    title: "Databases",
    items: [
      "MySQL",
      "PostgreSQL",
      "MongoDB (basic)",
      "Query Optimization",
      "Schema Design",
      "ORM",
    ],
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS EC2", "AWS S3", "AWS RDS", "AWS Lambda", "AWS IAM", "Docker (basic)", "CI/CD Pipelines"],
  },
  {
    title: "Tools & Platforms",
    items: ["Git", "GitHub", "Postman", "VS Code", "Linux (Ubuntu/Debian)", "Docker", "AWS CLI"],
  },
  {
    title: "Integrations",
    items: ["Cashfree Payments API", "FCM Notifications", "Celery Task Queue", "Email Services"],
  },
  {
    title: "Working Style",
    items: [
      "Problem-solving",
      "Technical Documentation",
      "Agile Methodology",
      "Team Collaboration",
      "Communication",
    ],
  },
];

export const experience = [
  {
    role: "Python Backend Developer",
    // The resume does not name the employer, so none is shown.
    period: "2024 – Present",
    duration: "1 year of experience",
    points: [
      "Architected and deployed scalable RESTful APIs using Django REST Framework, handling complex business logic and ensuring seamless client-server communication.",
      "Implemented efficient database operations using Django ORM for MySQL and PostgreSQL, optimizing queries to reduce load time by 30%.",
      "Deployed and managed production applications on AWS (EC2, S3, RDS, IAM), establishing secure cloud infrastructure with auto-scaling capabilities.",
      "Integrated third-party services including Cashfree Payments API for secure payment processing and FCM Notifications for real-time user engagement.",
      "Managed background tasks and scheduled jobs using Celery, improving application performance and user experience.",
      "Collaborated with frontend teams using a Git/GitHub workflow, conducting code reviews and maintaining a clean repository structure.",
      "Debugged and optimized backend performance in Linux-based environments, resolving critical issues and implementing monitoring solutions.",
    ],
    tech: [
      "Python",
      "Django REST Framework",
      "MySQL",
      "PostgreSQL",
      "AWS",
      "Celery",
      "Cashfree",
      "FCM",
      "Git/GitHub",
      "Linux",
    ],
  },
];

export const projects = [
  {
    name: "EV Rental & Booking Management Platform",
    label: "Ridev.in",
    description:
      "Comprehensive backend system for an electric vehicle rental platform supporting 500+ daily bookings.",
    role: "Backend Developer",
    tech: ["Django REST Framework", "Cashfree Payments", "Celery", "Amazon S3", "FCM"],
    points: [
      "Secure payment processing with the Cashfree API handling security deposits, subscriptions, and rental extensions.",
      "Automated background tasks with Celery for subscription checks, charging logs, and real-time notifications.",
      "EV images and documents stored securely in Amazon S3 with IAM-based access control and encryption.",
      "RESTful APIs for vehicle listing, authentication, booking workflow, and payment management.",
    ],
  },
  {
    name: "B2B Steel Pipe Marketplace Platform",
    label: "Pipemantra",
    description:
      "Scalable B2B marketplace connecting 200+ steel manufacturers, traders, and industrial buyers.",
    role: "Backend Developer",
    tech: ["Django", "Django REST Framework", "MySQL / PostgreSQL", "Amazon S3"],
    points: [
      "Complete quotation workflow from inquiry submission to supplier responses and lead tracking.",
      "Secure product catalog with advanced filtering, comparison, and technical specification management.",
      "Amazon S3 document storage with role-based access control for data security.",
      "Automated notification system and validation rules for accurate procurement processes.",
    ],
  },
  {
    name: "Online Fireworks E-Commerce Platform",
    label: "Sun Fireworks",
    description:
      "Feature-rich e-commerce backend supporting seasonal product management and dynamic pricing.",
    role: "Backend Developer",
    tech: ["Django", "Django REST Framework", "MySQL", "Amazon S3"],
    points: [
      "User authentication, cart management, order processing, and inventory tracking.",
      "Automated order status tracking and customer notification workflows.",
      "Optimized product search and filtering for a better user experience and conversion.",
      "Product assets managed on Amazon S3 with optimized delivery and security.",
    ],
  },
];

export const education = {
  degree: "Bachelor of Technology (B.Tech)",
  field: "Electronics and Communication Engineering",
  school: "Godavari Institute of Engineering and Technology",
  university: "JNTUK",
  year: "2024",
};

export const certifications = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    detail: "Foundational knowledge of AWS services, architecture, and best practices.",
  },
  {
    name: "PCAP – Certified Associate in Python Programming",
    issuer: "Python Institute",
    detail: "Professional certification validating advanced Python programming competency.",
  },
];
