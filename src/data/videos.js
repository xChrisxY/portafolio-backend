export const channelUrl = "https://www.youtube.com/@christophermoreno2429";

// Videos técnicos del canal — ordenados del más reciente al más antiguo
export const videos = [
  {
    id: "BbvLYQpmd1A",
    title: "Spring AI: Construyo un ChatClient que piensa por sí solo (RAG + Tools + MCP)",
    description:
      "Cómo construir un ChatClient inteligente con Spring AI combinando RAG, function calling y servidores MCP para que el modelo use herramientas reales.",
    skills: ["Spring AI", "Java", "RAG", "MCP", "IA"],
  },
  {
    id: "PcnCKhOi3vQ",
    title: "SQL Injection desde CERO | Error-Based, Blind y Time-Based Explicado Visualmente",
    description:
      "Explicación visual de los tipos de SQL Injection más comunes: error-based, blind y time-based, con demos prácticas y cómo prevenirlas.",
    skills: ["SQL", "Ciberseguridad", "OWASP", "Pentesting"],
  },
  {
    id: "L2g7hnMw8OU",
    title: "Entendiendo la arquitectura de Microservicios | Spring Cloud",
    description:
      "Fundamentos de microservicios con Spring Cloud: service discovery, API gateway, configuración distribuida y comunicación entre servicios.",
    skills: ["Spring Cloud", "Microservicios", "Arquitectura"],
  },
  {
    id: "xz10W8_hdvs",
    title: "Spring Security + JWT desde CERO (Autenticación, Roles y Filtros)",
    description:
      "Implementación completa de autenticación con Spring Security y JWT: filtros, roles, permisos y buenas prácticas de seguridad.",
    skills: ["Spring Security", "JWT", "Java", "Auth"],
  },
  {
    id: "LuFTNVj3Tiw",
    title: "Arquitectura Hexagonal con Spring Boot | Teoría + Ejemplo práctico",
    description:
      "Fundamentos de la Arquitectura Hexagonal (Ports and Adapters) y su implementación en Spring Boot para mejorar mantenibilidad, escalabilidad y testeo.",
    skills: ["Spring Boot", "Hexagonal", "JPA", "API REST"],
  },
  {
    id: "qVsyczNtvZo",
    title: "¡Aprende Linux jugando! | BashScript y OverTheWire 🐧",
    description:
      "Para quienes inician en ciberseguridad: terminal, permisos de archivos y SSH resolviendo retos prácticos con BashScript.",
    skills: ["Linux", "Bash", "SSH", "Hacking Ético"],
  },
  {
    id: "wvUxrIewkdk",
    title: "¡Introducción a la Programación Concurrente en Go: Goroutines, Canales y más! 🚀",
    description:
      "Fundamentos de concurrencia en Go: goroutines, canales, select y waitgroups con ejemplos prácticos para dominar cada concepto.",
    skills: ["Go", "Concurrencia", "Goroutines"],
  },
];

export const thumb = (id) => `https://i.ytimg.com/vi/${id}/hqdefault.jpg`;
