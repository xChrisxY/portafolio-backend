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
  SiJsonwebtokens,
  SiFlutter,
  SiErpnext,
  SiLinux,
  SiJavascript,
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
    role: "Software Engineer & Líder Técnico de Proyecto — MES",
    company: "Software Bank",
    url: null,
    date: "Feb 2026 — Actualidad",
    location: "Monterrey, N. L., México",
    current: true,
    summary:
      "Lidero el diseño y desarrollo técnico de una plataforma completa de manufactura (MES) integrada con ERP y una aplicación móvil para operaciones de almacén.",
    points: [
      "Construcción del sistema MES en Java, integrado con ERPNext (Python/JS) para la capa de gestión empresarial.",
      "App móvil en Flutter (PDA) para operaciones de almacén: escaneo, inventario y trazabilidad en piso.",
      "Responsable de planeación técnica, ejecución de sprints, revisiones de arquitectura de BD y decisiones de UI/UX junto a un equipo multidisciplinario.",
      "Diseñé y publiqué una app Flutter de control de accesos para comedor industrial, disponible en App Store y Google Play.",
    ],
    technologies: [
      { icon: DiJava, name: "Java", color: "#007396" },
      { icon: SiSpringboot, name: "Spring Boot", color: "#6DB33F" },
      { icon: SiPython, name: "Python", color: "#3776AB" },
      { icon: SiErpnext, name: "ERPNext", color: "#0088CC" },
      { icon: SiFlutter, name: "Flutter", color: "#02569B" },
      { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" },
      { icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
    ],
  },
  {
    role: "Python Backend Engineer",
    company: "Cloudteen IO",
    url: "https://www.cloudteen.io",
    date: "Ene 2025 — Dic 2025",
    location: "Tuxtla Gutiérrez, Chiapas · Remoto",
    summary:
      "Desarrollé el backend de un CRM con FastAPI + MongoDB aplicando Clean Architecture, patrón SAGA y contenedores Docker. Posteriormente asumí el liderazgo técnico del equipo de desarrollo móvil.",
    points: [
      "APIs REST con FastAPI y CRM en Django respaldado por MongoDB.",
      "Liderazgo técnico del equipo móvil: planeación, reuniones y coordinación de alcance con SCRUM/Jira.",
    ],
    technologies: [
      { icon: SiFastapi, name: "FastAPI", color: "#009688" },
      { icon: SiPython, name: "Python", color: "#3776AB" },
      { icon: SiDjango, name: "Django", color: "#092E20" },
      { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
      { icon: SiRabbitmq, name: "RabbitMQ", color: "#FF6600" },
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
    role: "Java Backend Engineer · SysAdmin MySQL",
    company: "IMA Chiapas",
    url: null,
    date: "Nov 2023 — Ago 2024",
    location: "Tuxtla Gutiérrez, Chiapas",
    summary:
      "Administración de servidores AWS y contribución al backend Java del sistema, con foco en integridad de datos y despliegues.",
    points: [
      "SysAdmin en AWS con RDS/MySQL: modelado, migraciones y transacciones.",
      "Despliegue y operación con Docker y Docker Compose; backend con Spring Boot.",
    ],
    technologies: [
      { icon: SiSpringboot, name: "Spring Boot", color: "#6DB33F" },
      { icon: DiJava, name: "Java", color: "#007396" },
      { icon: SiAmazonwebservices, name: "AWS RDS", color: "#FF9900" },
      { icon: SiMysql, name: "MySQL", color: "#4479A1" },
      { icon: SiJsonwebtokens, name: "JWT", color: "#D63AFF" },
    ],
    document: "/documents/constancia.pdf",
    type_document: "Constancia",
  },
];
