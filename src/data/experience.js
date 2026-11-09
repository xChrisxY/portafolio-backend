import { DiJava } from "react-icons/di";
import {
  SiSpringboot,
  SiPython,
  SiFastapi,
  SiMongodb,
  SiRabbitmq,
  SiDocker,
  SiDjango,
  SiFlask,
  SiMysql,
  SiPostgresql,
  SiFlutter,
  SiErpnext,
  SiLinux,
  SiRedis,
  SiGithubactions,
  SiGo,
  SiLangchain,
  SiOpenai,
  SiAmazonwebservices,
} from "react-icons/si";
import { ShieldCheck } from "lucide-react";
import cloudteen1 from "../assets/cloudteen1.jpg";
import cloudteen2 from "../assets/cloudteen2.jpg";
import me1 from "../assets/me1.jpeg";
import me2 from "../assets/me2.jpeg";
import me3 from "../assets/me3.jpeg";
import me4 from "../assets/me4.jpeg";
import me5 from "../assets/me5.jpeg";

export const experience = [
  {
    role: "Software Engineer AWS · Líder Técnico — MES",
    company: "Software Bank",
    url: null,
    date: "Mar 2026 — Actualidad",
    location: "Monterrey, N. L., México",
    current: true,
    summary:
      "Lidero la arquitectura, el diseño de base de datos y los estándares de código de una plataforma MES en Java, con integraciones de IA, implementación de ERP y despliegues productivos en AWS, coordinando un equipo multidisciplinario.",
    points: [
      "Lógica segura ante concurrencia: apartados de presupuesto a nivel de base de datos, transacciones pesimistas con advisory locks de MySQL y reintentos ante deadlocks.",
      "Integración de ERPNext/Frappe con manejo de errores y compensación; extracción automatizada de facturas CFDI (XML + OCR con Tesseract como fallback) y reportes SQL multi-moneda.",
      "APIs aseguradas con JWT + scrypt, rate limiting, guards RBAC dinámicos y Amazon Cognito.",
      "Chatbot RAG sobre bases de datos y archivos Excel del cliente (LangChain, embeddings de OpenAI, ChromaDB/FAISS, pandas, openpyxl); servicios de IA para análisis de PDF, TTS y transcripción.",
      "Despliegue en AWS: EC2 + RDS (PostgreSQL) para el sistema de presupuestos y ECS (Docker) para el WMS, con logging/monitoreo en CloudWatch e IAM/Security Groups.",
      "App móvil Flutter (PDA) para operaciones de almacén y control de accesos industrial publicado en App Store y Google Play.",
    ],
    technologies: [
      { icon: DiJava, name: "Java", color: "#007396" },
      { icon: SiSpringboot, name: "Spring Boot", color: "#6DB33F" },
      { icon: SiPython, name: "Python", color: "#3776AB" },
      { icon: SiErpnext, name: "ERPNext", color: "#0088CC" },
      { icon: SiFlutter, name: "Flutter", color: "#02569B" },
      { icon: SiAmazonwebservices, name: "AWS", color: "#FF9900" },
      { icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
      { icon: SiMysql, name: "MySQL", color: "#4479A1" },
      { icon: SiDocker, name: "Docker", color: "#2496ED" },
      { icon: SiLangchain, name: "LangChain", color: "#1C3C3C" },
      { icon: SiOpenai, name: "OpenAI", color: "#E8BB5F" },
    ],
  },
  {
    role: "Python Backend Engineer",
    company: "Cloudteen IO",
    url: "https://www.cloudteen.io",
    date: "Ene 2025 — Ene 2026",
    location: "Tuxtla Gutiérrez, Chiapas · Remoto",
    summary:
      "Diseñé la arquitectura hexagonal (Clean) de un backend FastAPI sobre MongoDB y construí APIs REST y un CRM en Django. Asumí el liderazgo técnico del equipo de desarrollo móvil.",
    points: [
      "Backend hexagonal en FastAPI sobre MongoDB con aggregation pipelines y patrón SAGA para flujos distribuidos.",
      "CRM en Django con autenticación, gestión de roles y CI/CD con GitHub Actions.",
      "Prácticas modernas de Python: SQLModel, tipado estricto, arquitectura async-first, MySQL y caché con Redis.",
      "Liderazgo técnico del equipo móvil y trabajo ágil con SCRUM (Slack/Jira).",
    ],
    technologies: [
      { icon: SiFastapi, name: "FastAPI", color: "#009688" },
      { icon: SiPython, name: "Python", color: "#3776AB" },
      { icon: SiDjango, name: "Django", color: "#092E20" },
      { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
      { icon: SiMysql, name: "MySQL", color: "#4479A1" },
      { icon: SiRedis, name: "Redis", color: "#FF4438" },
      { icon: SiRabbitmq, name: "RabbitMQ", color: "#FF6600" },
      { icon: SiGithubactions, name: "CI/CD", color: "#2088FF" },
      { icon: SiDocker, name: "Docker", color: "#2496ED" },
    ],
    images: [cloudteen1, cloudteen2],
    document: "/documents/CARTA_RECOMENDACION_CHRISTOPHER.pdf",
    type_document: "Recomendación",
  },
  {
    role: "Backend Developer — Sistema IoT Hidropónico",
    company: "Hydrop",
    url: "https://www.researchgate.net/publication/396469897_Automated_IoT_System_for_Vertical_Hydroponics_at_Home_with_Real-Time_Monitoring_and_Control",
    date: "Jun 2024 — May 2025",
    location: "Tuxtla Gutiérrez, Chiapas",
    summary:
      "Sistema IoT para riego hidropónico con monitoreo y control en tiempo real, publicado como artículo científico en ResearchGate.",
    points: [
      "Backend en Python/Flask para ingesta de sensores (temperatura, humedad, factores ambientales) vía Raspberry Pi.",
      "Micro frontend con React/Next.js para visualización y control en tiempo real.",
    ],
    technologies: [
      { icon: SiFlask, name: "Flask", color: "#9B9B9B" },
      { icon: SiPython, name: "Python", color: "#3776AB" },
      { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
      { icon: SiRabbitmq, name: "RabbitMQ", color: "#FF6600" },
      { icon: SiDocker, name: "Docker", color: "#2496ED" },
    ],
    images: [me1, me2, me3, me4, me5],
    document: "/documents/constancia.pdf",
    type_document: "Constancia",
  },
  {
    role: "Analista de Seguridad — Red Team",
    company: "TPX Security",
    url: null,
    date: "Feb 2024 — Ago 2024",
    location: "Remoto",
    summary:
      "Apoyo a pruebas de penetración y documentación de hallazgos de vulnerabilidades conforme al OWASP Top 10.",
    points: [
      "Scripts en Python de apoyo a pentesting y automatización de análisis.",
      "Seleccionado por conocimientos de sistemas Linux y fundamentos de seguridad en aplicaciones web.",
    ],
    technologies: [
      { icon: SiPython, name: "Python", color: "#3776AB" },
      { icon: SiLinux, name: "Linux", color: "#FCC624" },
      { icon: ShieldCheck, name: "OWASP Top 10", color: "#E8BB5F" },
    ],
  },
  {
    role: "Systems Administrator · Backend Contributor",
    company: "IMA Chiapas",
    url: null,
    date: "Nov 2023 — Ago 2024",
    location: "Tuxtla Gutiérrez, Chiapas",
    summary:
      "Administré infraestructura AWS (RDS/MySQL), diseñé migraciones de base de datos y contribuí a servicios backend en Go.",
    points: [
      "Administración de RDS/MySQL, migraciones y transacciones para integridad de datos.",
      "Contribución al backend del sistema en Go y operación con Docker.",
    ],
    technologies: [
      { icon: SiAmazonwebservices, name: "AWS RDS", color: "#FF9900" },
      { icon: SiMysql, name: "MySQL", color: "#4479A1" },
      { icon: SiGo, name: "Go", color: "#00ADD8" },
      { icon: SiDocker, name: "Docker", color: "#2496ED" },
    ],
    document: "/documents/constancia.pdf",
    type_document: "Constancia",
  },
];
