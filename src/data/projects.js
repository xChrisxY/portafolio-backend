import { DiJava } from "react-icons/di";
import {
  SiSpringboot,
  SiPostgresql,
  SiDocker,
  SiDjango,
  SiPython,
  SiFastapi,
  SiMongodb,
  SiRabbitmq,
  SiJsonwebtokens,
  SiMysql,
  SiKotlin,
  SiFlask,
  SiGo,
  SiSqlite,
  SiReact,
  SiTypescript,
  SiKubernetes,
  SiGithubactions,
  SiAmazonecs,
  SiAmazonwebservices,
} from "react-icons/si";

export const featuredProjects = [
  {
    title: "Event Logging System — Observabilidad",
    tagline: "Plataforma inspirada en Sentry",
    description:
      "Backend Go/chi sobre PostgreSQL con arquitectura en capas y dashboard en tiempo real vía WebSocket. Despliegue en ECS Fargate para conexiones persistentes y CI/CD hacia AWS.",
    github: null,
    technologies: [
      { icon: SiGo, name: "Go · chi", color: "#00ADD8" },
      { icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
      { icon: SiAmazonecs, name: "ECS Fargate", color: "#FF9900" },
      { icon: SiGithubactions, name: "CI/CD", color: "#2088FF" },
    ],
  },
  {
    title: "CADOFI — Sistema de Gestión Financiera",
    tagline: "Plataforma financiera empresarial",
    description:
      "Aplicación Spring Boot + React/TypeScript con control de acceso por roles, seguimiento de deuda y dashboards de reportes. Contenedorizada y orquestada en Kubernetes (DigitalOcean).",
    github: null,
    technologies: [
      { icon: SiSpringboot, name: "Spring Boot", color: "#6DB33F" },
      { icon: DiJava, name: "Java", color: "#007396" },
      { icon: SiReact, name: "React", color: "#61DAFB" },
      { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
      { icon: SiKubernetes, name: "Kubernetes", color: "#326CE5" },
      { icon: SiGithubactions, name: "CI/CD", color: "#2088FF" },
    ],
  },
  {
    title: "MedMonitor — Telemonitoreo Médico",
    tagline: "Seguimiento de enfermedades crónicas",
    description:
      "Backend en Go + SQLite con flujos de datos cifrados y dashboard en React para seguimiento de enfermedades crónicas. CI/CD y despliegue en AWS.",
    github: null,
    technologies: [
      { icon: SiGo, name: "Go", color: "#00ADD8" },
      { icon: SiSqlite, name: "SQLite", color: "#003B57" },
      { icon: SiReact, name: "React", color: "#61DAFB" },
      { icon: SiAmazonwebservices, name: "AWS", color: "#FF9900" },
      { icon: SiGithubactions, name: "CI/CD", color: "#2088FF" },
    ],
  },
];

// Repositorios públicos ordenados por número de commits
export const projects = [
  {
    title: "RestaurantSimulator",
    commits: 24,
    description:
      "Simulador de restaurante construido con FXGL en Java: modela clientes, meseros y cocineros aplicando concurrencia, multithreading y patrones de diseño.",
    github: "https://github.com/xChrisxY/RestaurantSimulator",
    technologies: [{ icon: DiJava, name: "Java · FXGL", color: "#007396" }],
  },
  {
    title: "third_party_services",
    commits: 16,
    description:
      "Arquitectura hexagonal con FastAPI, MongoDB y RabbitMQ para sincronizar información con servicios externos (Factura.com) de forma resiliente.",
    github: "https://github.com/xChrisxY/third_party_services",
    technologies: [
      { icon: SiFastapi, name: "FastAPI", color: "#009688" },
      { icon: SiPython, name: "Python", color: "#3776AB" },
      { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
      { icon: SiRabbitmq, name: "RabbitMQ", color: "#FF6600" },
      { icon: SiDocker, name: "Docker", color: "#2496ED" },
    ],
  },
  {
    title: "spring-boot-memories",
    commits: 15,
    description:
      "Microservicio con Spring Boot, arquitectura hexagonal y PostgreSQL. Autenticación JWT, contenedorización con Docker y buenas prácticas de Clean Architecture.",
    github: "https://github.com/xChrisxY/spring-boot-memories",
    technologies: [
      { icon: SiSpringboot, name: "Spring Boot", color: "#6DB33F" },
      { icon: DiJava, name: "Java", color: "#007396" },
      { icon: SiPostgresql, name: "PostgreSQL", color: "#4169E1" },
      { icon: SiDocker, name: "Docker", color: "#2496ED" },
      { icon: SiJsonwebtokens, name: "JWT", color: "#D63AFF" },
    ],
  },
  {
    title: "love-app",
    commits: 12,
    description:
      "Frontend en React + TypeScript que acompaña al microservicio de memorias: consumo de API REST, autenticación y experiencia de usuario moderna.",
    github: "https://github.com/xChrisxY/love-app",
    technologies: [
      { icon: SiReact, name: "React", color: "#61DAFB" },
      { icon: SiTypescript, name: "TypeScript", color: "#3178C6" },
    ],
  },
  {
    title: "canacintra_backend",
    commits: 12,
    description:
      "API backend para un sistema de gestión hidropónica de CANACINTRA: Flask, SQLAlchemy y autenticación JWT.",
    github: "https://github.com/xChrisxY/canacintra_backend",
    technologies: [
      { icon: SiFlask, name: "Flask", color: "#9B9B9B" },
      { icon: SiPython, name: "Python", color: "#3776AB" },
      { icon: SiMysql, name: "MySQL", color: "#4479A1" },
      { icon: SiJsonwebtokens, name: "JWT", color: "#D63AFF" },
    ],
  },
  {
    title: "Kotlin-eventos",
    commits: 10,
    description:
      "Aplicación móvil en Kotlin con autenticación, CRUD, Shared Preferences, corrutinas, notificaciones y gestión de imágenes.",
    github: "https://github.com/xChrisxY/Kotlin-eventos",
    technologies: [
      { icon: SiKotlin, name: "Kotlin", color: "#7F52FF" },
      { icon: SiMysql, name: "MySQL", color: "#4479A1" },
      { icon: SiJsonwebtokens, name: "JWT", color: "#D63AFF" },
    ],
  },
  {
    title: "spring-courses-security",
    commits: 9,
    description:
      "Base de aplicación con Spring Boot y Spring Security: autenticación y autorización para servicios RESTful con roles y permisos.",
    github: "https://github.com/xChrisxY/spring-courses-security",
    technologies: [
      { icon: SiSpringboot, name: "Spring Boot", color: "#6DB33F" },
      { icon: DiJava, name: "Java", color: "#007396" },
      { icon: SiMysql, name: "MySQL", color: "#4479A1" },
    ],
  },
  {
    title: "SMARTLIGHTS-TGZ",
    commits: 9,
    description:
      "Algoritmo genético para la optimización dinámica del alumbrado público inteligente en Tuxtla Gutiérrez.",
    github: "https://github.com/xChrisxY/SMARTLIGHTS-TGZ",
    technologies: [
      { icon: SiPython, name: "Python", color: "#3776AB" },
      { icon: SiDjango, name: "Django", color: "#092E20" },
    ],
  },
  {
    title: "django-events-backend",
    commits: 8,
    description:
      "API RESTful para gestión de eventos con Django REST Framework y JWT: eventos, listas de artículos, imágenes, notas de audio y usuarios.",
    github: "https://github.com/xChrisxY/django-events-backend",
    technologies: [
      { icon: SiDjango, name: "Django REST", color: "#092E20" },
      { icon: SiPython, name: "Python", color: "#3776AB" },
      { icon: SiMysql, name: "MySQL", color: "#4479A1" },
      { icon: SiJsonwebtokens, name: "JWT", color: "#D63AFF" },
    ],
  },
  {
    title: "spring-courses",
    commits: 7,
    description:
      "Plataforma de gestión de cursos con Spring Boot: arquitectura en capas, persistencia relacional y operaciones CRUD completas.",
    github: "https://github.com/xChrisxY/spring-courses",
    technologies: [
      { icon: SiSpringboot, name: "Spring Boot", color: "#6DB33F" },
      { icon: DiJava, name: "Java", color: "#007396" },
      { icon: SiMysql, name: "MySQL", color: "#4479A1" },
    ],
  },
];
