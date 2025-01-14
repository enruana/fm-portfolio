import moAssistantLogo from "../assets/mo-assistant.png";
import aguapaneiaLogo from "../assets/aguapaneia.jpg";
import npmLogo from "../assets/npm.png";

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  link?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "AguapaneIA Chrome Extension",
    description:
      "A Chrome extension that enhances browsing productivity using AI tools. Features include real-time text improvement, instant translation between Spanish and English, and a personalized AI assistant accessible through an intuitive floating button. Built with a modern, adaptive design supporting both light and dark modes.",
    technologies: [
      "Chrome Extension",
      "JavaScript",
      "AI Integration",
      "UI/UX Design",
    ],
    imageUrl: aguapaneiaLogo,
    link: "https://chromewebstore.google.com/detail/aguapaneia/blgkjaojfkcfidihpkbeahcpfobhnkjb",
  },
  {
    id: 2,
    title: "Mo Assistant - VS Code Extension",
    description:
      "A Visual Studio Code extension that provides an AI-powered coding assistant. Helps developers write, explain, and refactor code through natural language interactions. Features include code generation, explanation, and refactoring capabilities with a focus on developer productivity.",
    technologies: [
      "TypeScript",
      "VS Code API",
      "AI Integration",
      "Developer Tools",
    ],
    imageUrl: moAssistantLogo,
    link: "https://marketplace.visualstudio.com/items?itemName=pure-pm.mo-assistant",
  },
  {
    id: 3,
    title: "Commit - NPM Package",
    description: "A NPM package that helps you commit your changes with a message.",
    technologies: ["TypeScript", "NPM", "JavaScript"],
    imageUrl: npmLogo,
    link: "https://www.npmjs.com/package/@felipemantilla01/commit",
  },
];
