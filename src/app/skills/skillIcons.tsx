"use client";

import {
  Code,
  Box,
  Terminal,
  Database,
  FileText,
  Microchip,
  Cloud,
  // import other icons from lucide-react as needed
} from "lucide-react";
import { JSX } from "react";

export const skillIcons: Record<string, JSX.Element> = {
  // toots
  "Git & Github": <Box size={16} />,
  "VS Code": <Box size={16} />,
  "Docker": <Box size={16} />,
  Postman: <Box size={16} />,

// language
  Java: <Code size={16} />,
  "C++": <Code size={16} />,
  "Javascript": <Code size={16} />,
  "Python": <Code size={16} />,

  // frontend
  "React.js": <FileText size={16} />,
  "Tailwind CSS": <FileText size={16} />,
  "Ant Design": <FileText size={16} />,
  "Next.js": <FileText size={16} />,
  // backend
  "Spring Boot": <Microchip size={16} />,
  "Node.js": <Microchip size={16} />,
  "Express.js": <Microchip size={16} />,
  "Sequelize": <Microchip size={16} />,
  "Hibernate": <Microchip size={16} />,
  "JWT": <Microchip size={16} />,
  "RBAC": <Microchip size={16} />,
  "REST APIs": <Microchip size={16} />,
  "Mockito": <Microchip size={16} />,

  // Database
  MySQL: <Database size={16} />,
  Firebase: <Database size={16} />,
  MongoDB: <Database size={16} />,
  PostgreSql: <Database size={16} />,

  // Cloud
  "AWS (S3 & EC2)": <Cloud size={16} />,
  "Microsoft Azure": <Cloud size={16} />,

  // add more mappings for other skills
};
