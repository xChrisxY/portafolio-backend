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
import cloudteen1 from '../assets/cloudteen1.jpg'
import cloudteen2 from '../assets/cloudteen2.jpg'


export const experiencie = [
      {
            role: "Python Backend Engineer",
            company: "Cloudteen IO",
            date: "Jornada completa ene. 2025 - actualidad · 1 año 2 meses",
            location: "Tuxtla Gutierrez, Chiapas, México · En remoto",
            description: "Develop the backend application of a CRM with the FastAPI framework, using MongoDB as the database and clean architecture. Applying design patterns such as the SAGA pattern and Docker with Docker Compose to run and containerize the application. Contributed to a high-performance team using agile methodologies such as SCRUM. Experience with daily stand-ups, retrospectives, planning, and progress presentations. Worked with Jira and internal documentation.",
            technologies: [
                  { icon: SiFastapi, name: "FastAPI", color: "#009688" },
                  { icon: SiPython, name: "Python", color: "#3776AB" },
                  { icon: SiMongodb, name: "MongoDB", color: "#47A248" },
                  { icon: SiRabbitmq, name: "RabbitMQ", color: "#FF6600" },
                  { icon: SiDocker, name: "Docker", color: "#2496ED" },
            ], 
            images: [
                  cloudteen1, cloudteen2
            ]
      }
];