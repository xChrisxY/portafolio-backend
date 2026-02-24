import { 
  SiSpring, 
  SiSpringboot, 
  SiPostgresql, 
  SiDocker,
  SiDjango,
  SiPython,
  SiFastapi,
  SiMongodb,
  SiRabbitmq,
  SiGraphql,
  //SiPhaser,
  //SiJavafx,
  SiJsonwebtokens,
  SiTailwindcss,
  SiMysql,
  SiJavascript,
  SiGithubactions
} from "react-icons/si";

import { DiJava, DiMysql } from "react-icons/di";

export const projects = [
  {
    title: "Love Microservice",
    description: "Microservicio desarrollado con Spring Boot, arquitectura hexagonal y PostgreSQL. Implementa autenticación JWT, Docker y buenas prácticas de Clean Architecture.",
    github: "https://github.com/xChrisxY/spring-boot-memories",
    demo: "https://demo",
    technologies: [
      { icon: SiSpringboot, name: "Spring Boot", color: "#6DB33F" },
      { icon: DiJava, name: "Java", color: "#007396" },
      { icon: SiPostgresql, name: "PostgreSQL", color: "#336791" },
      { icon: SiDocker, name: "Docker", color: "#2496ED" },
      { icon: SiGithubactions, name: "JWT", color: "#000000" }
    ]
  },
  {
    title: "Udemy Project",
    description: "Proyecto de ejemplo (simulador de Udemy) que implementa una arquitectura hexagonal (ports & adapters) con Spring Boot, Maven, buenas prácticas de dominio y manejo de roles con seguridad en rutas",
    github: "https://github.com/xChrisxY/Arquitectura-Hexagonal-Spring-Security",
    demo: "https://demo",
    technologies: [
      { icon: SiSpringboot, name: "Spring Boot", color: "#6DB33F" },
      { icon: DiJava, name: "Java", color: "#007396" },
      { icon: SiPostgresql, name: "PostgreSQL", color: "#336791" },
      { icon: SiDocker, name: "Docker", color: "#2496ED" }
    ]
  },
  {
    title: "Gestión de productos y proveedores",
    description: "Proyecto Django con arquitectura MTV y API REST (Django REST Framework) para la gestión de productos y proveedores. Incluye integración con TailwindCSS para los estilos front-end.",
    github: "https://github.com/xChrisxY/almaximo-python-practice",
    demo: "https://demo",
    technologies: [
      { icon: SiDjango, name: "Django", color: "#092E20" },
      { icon: SiPython, name: "Python", color: "#3776AB" },
      { icon: SiPostgresql, name: "PostgreSQL", color: "#336791" },
      { icon: SiTailwindcss, name: "TailwindCSS", color: "#06B6D4" }
    ]
  },
  {
    title: "Event Management API",
    description: "API RESTful para gestión de eventos desarrollada con Django REST Framework y autenticación JWT. Permite crear y administrar eventos, listas de artículos, imágenes, notas de audio y usuarios.",
    github: "https://github.com/xChrisxY/django-events-backend",
    technologies: [
      { icon: SiDjango, name: "Django", color: "#092E20" },
      { icon: SiPython, name: "Python", color: "#3776AB" },
      { icon: SiMysql, name: "MySQL", color: "#336791" },
      { icon: SiJsonwebtokens, name: "JWT", color: "#000000" }
    ]
  },
  {
    title: "RestaurantSimulator",
    description: "Restaurant Simulator es una aplicación de simulación desarrollada con FXGL que modela el funcionamiento de un restaurante, incluyendo la gestión de clientes, meseros y cocineros utilizando conceptos de concurrencia y multithreading.",
    github: "https://github.com/xChrisxY/RestaurantSimulator",
    demo: "https://demo",
    technologies: [
      //{ icon: SiJavafx, name: "FXGL/JavaFX", color: "#5382a1" },
      { icon: DiJava, name: "Java", color: "#007396" }
    ]
  },
  {
    title: "Ship Scape",
    description: "Ship Scape es un juego arcade retro desarrollado con Phaser 3 donde controlas una nave espacial que debe esquivar enemigos, recolectar power-ups y sobrevivir el mayor tiempo posible.",
    github: "https://github.com/xChrisxY/phaser-game",
    technologies: [
      //{ icon: SiPhaser, name: "Phaser 3", color: "#4B8BBE" },
      { icon: SiJavascript, name: "JavaScript", color: "#F7DF1E" }
    ]
  },
  {
    title: "Sistema de Pedidos Distribuido",
    description: "Microservicio de órdenes construido con FastAPI y arquitectura hexagonal para un sistema tipo Uber Eats/Rappi.",
    github: "https://github.com/xChrisxY/orders-service",
    technologies: [
      { icon: SiFastapi, name: "FastAPI", color: "#009688" },
      { icon: SiPython, name: "Python", color: "#3776AB" },
      { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
      { icon: SiRabbitmq, name: "RabbitMQ", color: "#FF6600" }
    ]
  },
  {
    title: "Microservicio de restaurantes",
    description: "Este microservicio gestiona toda la información relacionada con restaurantes en un sistema de pedidos distribuido.",
    github: "https://github.com/xChrisxY/resturant-service",
    technologies: [
      { icon: SiFastapi, name: "FastAPI", color: "#009688" },
      { icon: SiPython, name: "Python", color: "#3776AB" },
      { icon: SiMongodb, name: "MongoDB", color: "#47A248" }
    ]
  },
  {
    title: "API GraphQL para gestión de libros",
    description: "Una API de GraphQL con Python y Django, el framework backend, junto a Graphene.",
    github: "https://github.com/xChrisxY/resturant-service",
    technologies: [
      { icon: SiDjango, name: "Django", color: "#092E20" },
      { icon: SiGraphql, name: "GraphQL", color: "#E10098" },
      { icon: SiPython, name: "Python", color: "#3776AB" },
      { icon: SiPostgresql, name: "PostgreSQL", color: "#336791" }
    ]
  },
  {
    title: "Third Party API Integration",
    description: "Este proyecto implementa una arquitectura hexagonal con FastAPI, MongoDB y RabbitMQ, para sincronizar información con Factura.com.",
    github: "https://github.com/xChrisxY/third_party_services",
    technologies: [
      { icon: SiFastapi, name: "FastAPI", color: "#009688" },
      { icon: SiPython, name: "Python", color: "#3776AB" },
      { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
      { icon: SiRabbitmq, name: "RabbitMQ", color: "#FF6600" },
      { icon: SiDocker, name: "Docker", color: "#2496ED" }
    ]
  }, 
  {
    title: "Courses Spring Security",
    description: "Este proyecto es una aplicación de ejemplo construida con Spring Boot y utiliza Spring Security para manejar autenticación y autorización. Está diseñado como una base para entender cómo integrar seguridad en servicios RESTful.",
    github: "https://github.com/xChrisxY/spring-courses-security",
    technologies: [
      { icon: SiSpringboot, name: "Spring Boot", color: "#6DB33F" },
      { icon: DiJava, name: "Java", color: "#007396" },
      { icon: SiMysql, name: "MySQL", color: "#336791" },
      { icon: SiJsonwebtokens, name: "JWT", color: "#000000" }
    ]
  }
];