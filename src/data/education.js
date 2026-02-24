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
        category: "aws",
        url: "https://www.credly.com/badges/2cf00040-a390-4646-916d-3bfbb88f2c57/public_url"
      },
      { 
        name: "AWS Academy Cloud Architecting", 
        icon: SiAwsamplify, 
        color: "#FF9900",
        category: "aws",
        url: "https://www.credly.com/badges/4f721c5f-a72d-4b1e-867d-8c9ed3391c11/public_url"
      },
      { 
        name: "AWS Academy Introduction to Cloud Semester 1", 
        icon: SiAwsamplify, 
        color: "#FF9900",
        category: "aws", 
        url: "https://www.credly.com/badges/d32d8252-51fb-443f-8154-9a593f5e90a4/public_url"
      },
      { 
        name: "Network Addressing and Basic Troubleshooting", 
        icon: SiCisco, 
        color: "#1BA0D7",
        category: "cisco", 
        url: "https://www.credly.com/badges/228cd490-a1c4-4ba7-bdce-bf4c6e33fd6f/public_url"
      },
      { 
        name: "Networking Basics", 
        icon: SiCisco, 
        color: "#1BA0D7",
        category: "cisco", 
        url: "https://www.credly.com/badges/0a756990-ca1f-4636-a890-ff4e2aeee867/public_url"
      },
      { 
        name: "Network Support and Security", 
        icon: SiCisco, 
        color: "#1BA0D7",
        category: "cisco", 
        url: "https://www.credly.com/badges/e2001e5c-ffb6-4a33-8be2-e2e734bd6f55/public_url"
      },
      { 
        name: "Operating Systems Basics", 
        icon: SiCisco, 
        color: "#1BA0D7",
        category: "cisco", 
        url: "https://www.credly.com/badges/9fceb5b3-38c2-4b26-85e6-db468551627d/public_url"
      }
    ]
  }
];
