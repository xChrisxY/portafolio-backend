import { 
  //SiAmazonaws,
  SiAwsamplify,
  SiCisco
} from "react-icons/si";
import { GiDiploma } from "react-icons/gi";
import { MdSchool, MdDateRange } from "react-icons/md";

export const education = [
  {
    institution: "Universidad Politécnica de Chiapas",
    degree: "Ingeniería en Software",
    period: "08/2022 - 12/2025",
    icon: MdSchool,
    courses: [
      { 
        name: "AWS Academy Cloud Foundations", 
        icon: SiAwsamplify, 
        color: "#FF9900",
        category: "aws"
      },
      { 
        name: "AWS Academy Cloud Architecting", 
        icon: SiAwsamplify, 
        color: "#FF9900",
        category: "aws"
      },
      { 
        name: "AWS Academy Introduction to Cloud Semester 1", 
        icon: SiAwsamplify, 
        color: "#FF9900",
        category: "aws"
      },
      { 
        name: "Network Addressing and Basic Troubleshooting", 
        icon: SiCisco, 
        color: "#1BA0D7",
        category: "cisco"
      },
      { 
        name: "Networking Basics", 
        icon: SiCisco, 
        color: "#1BA0D7",
        category: "cisco"
      },
      { 
        name: "Network Support and Security", 
        icon: SiCisco, 
        color: "#1BA0D7",
        category: "cisco"
      },
      { 
        name: "Operating Systems Basics", 
        icon: SiCisco, 
        color: "#1BA0D7",
        category: "cisco"
      }
    ]
  }
];
