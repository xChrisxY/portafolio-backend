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
  SiFlask,
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
import cloudteen1 from '../assets/cloudteen1.jpg'
import cloudteen2 from '../assets/cloudteen2.jpg'
import me1 from '../assets/me1.jpeg'
import me2 from '../assets/me2.jpeg'
import me3 from '../assets/me3.jpeg'
import me4 from '../assets/me4.jpeg'
import me5 from '../assets/me5.jpeg'


export const experiencie = [
      {
            role: "Python Backend Engineer",
            company: "Cloudteen IO",
            date: "Jornada completa ene. 2025 - Dic. 2025",
            url: "https://www.cloudteen.io",
            location: "Tuxtla Gutierrez, Chiapas, México · En remoto",
            description: "Desarrollé la aplicación backend de un CRM con el framework FastAPI, utilizando MongoDB como base de datos y una arquitectura limpia. Apliqué patrones de diseño como SAGA y Docker con Docker Compose para ejecutar y contenerizar la aplicación. Contribuí a un equipo de alto rendimiento utilizando metodologías ágiles como SCRUM. Experiencia en reuniones diarias, retrospectivas, planificación y presentaciones de progreso. Trabajé con Jira y documentación interna.",
            technologies: [
                  { icon: SiFastapi, name: "FastAPI", color: "#009688" },
                  { icon: SiPython, name: "Python", color: "#3776AB" },
                  { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
                  { icon: SiRabbitmq, name: "RabbitMQ", color: "#FF6600" },
                  { icon: SiDocker, name: "Docker", color: "#2496ED" },
                  { icon: SiDjango, name: "Django", color: "#092E20" }
            ], 
            images: [
                  cloudteen1, cloudteen2
            ],
            document: "/documents/CARTA_RECOMENDACION_CHRISTOPHER.pdf", 
            type_document: "Recomendación"
      },
      {
            role: "Python Backend Developer",
            company: "Hydrop",
            date: "Junio 2024 - Mayo 2025",
            url: "https://www.researchgate.net/publication/396469897_Automated_IoT_System_for_Vertical_Hydroponics_at_Home_with_Real-Time_Monitoring_and_Control",
            location: "Tuxtla Gutierrez, Chiapas, México",
            description: "Se desarrolló un sistema basado en IoT para riego hidropónico, diseñado para monitorear y controlar la salud de las plantas en tiempo real. El proyecto integró Raspberry Pi para la recopilación y el procesamiento de datos, utilizando sensores para medir la temperatura, la humedad y otros factores ambientales. Se creó la aplicación backend con Python y Flask para gestionar el procesamiento de datos de sensores, el desarrollo de API y la monitorización en tiempo real. Se desarrolló el micro frontend con React y Nextjs, garantizando un alto rendimiento.",
            technologies: [
                  { icon: SiFlask, name: "Flask", color: "#009688" },
                  { icon: SiPython, name: "Python", color: "#3776AB" },
                  { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
                  { icon: SiRabbitmq, name: "RabbitMQ", color: "#FF6600" },
                  { icon: SiDocker, name: "Docker", color: "#2496ED" },
            ], 
            images: [
                  me1, me2, me3, me4, me5
            ],
            document: "/documents/constancia.pdf",
            type_document: "Constancia"
      },
      
];