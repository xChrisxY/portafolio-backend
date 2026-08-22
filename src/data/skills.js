import { DiJava } from "react-icons/di";
import {
  SiPython,
  SiTypescript,
  SiDart,
  SiGo,
  SiSpringboot,
  SiDjango,
  SiFastapi,
  SiFlask,
  SiApachekafka,
  SiRabbitmq,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiSqlite,
  SiAmazonwebservices,
  SiDocker,
  SiKubernetes,
  SiGithubactions,
  SiJenkins,
  SiLangchain,
} from "react-icons/si";
import {
  Boxes,
  Network,
  Workflow,
  FlaskConical,
  Bot,
  Braces,
  ShieldCheck,
  TerminalSquare,
} from "lucide-react";

export const skillGroups = [
  {
    label: "Lenguajes",
    skills: [
      { icon: DiJava, name: "Java", color: "#007396" },
      { icon: SiPython, name: "Python", color: "#3776AB" },
      { icon: SiTypescript, name: "JavaScript / TS", color: "#3178C6" },
      { icon: SiDart, name: "Dart", color: "#0175C2" },
      { icon: SiGo, name: "Go", color: "#00ADD8" },
      { icon: TerminalSquare, name: "Bash", color: "#4EAA25" },
    ],
  },
  {
    label: "Backend",
    skills: [
      { icon: SiSpringboot, name: "Spring Boot", color: "#6DB33F" },
      { icon: SiFastapi, name: "FastAPI", color: "#009688" },
      { icon: SiDjango, name: "Django", color: "#092E20" },
      { icon: SiFlask, name: "Flask", color: "#9B9B9B" },
      { icon: Braces, name: "APIs RESTful", color: "#E8BB5F" },
    ],
  },
  {
    label: "Arquitectura",
    skills: [
      { icon: Boxes, name: "Clean / Hexagonal", color: "#E8BB5F" },
      { icon: Network, name: "Microservicios", color: "#E8BB5F" },
      { icon: Workflow, name: "Patrón SAGA", color: "#E8BB5F" },
      { icon: SiApachekafka, name: "Kafka", color: "#231F20" },
      { icon: SiRabbitmq, name: "RabbitMQ", color: "#FF6600" },
    ],
  },
  {
    label: "Bases de Datos",
    skills: [
      { icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
      { icon: SiMysql, name: "MySQL", color: "#4479A1" },
      { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
      { icon: SiRedis, name: "Redis", color: "#FF4438" },
      { icon: SiSqlite, name: "SQLite", color: "#003B57" },
    ],
  },
  {
    label: "Cloud & DevOps",
    skills: [
      { icon: SiAmazonwebservices, name: "AWS · EC2 · S3 · RDS · Lambda", color: "#FF9900" },
      { icon: SiDocker, name: "Docker", color: "#2496ED" },
      { icon: SiKubernetes, name: "Kubernetes", color: "#326CE5" },
      { icon: SiGithubactions, name: "GitHub Actions", color: "#2088FF" },
      { icon: SiJenkins, name: "Jenkins", color: "#D33833" },
    ],
  },
  {
    label: "IA & Automatización",
    skills: [
      { icon: SiLangchain, name: "LangChain", color: "#1C3C3C" },
      { icon: Bot, name: "Agentes de IA", color: "#E8BB5F" },
      { icon: Braces, name: "RAG + MCP", color: "#E8BB5F" },
      { icon: Workflow, name: "n8n", color: "#EA4B71" },
    ],
  },
  {
    label: "Testing & Calidad",
    skills: [
      { icon: FlaskConical, name: "JUnit 5", color: "#6DB33F" },
      { icon: ShieldCheck, name: "Mockito", color: "#E8BB5F" },
      { icon: FlaskConical, name: "PyTest", color: "#3776AB" },
    ],
  },
];
