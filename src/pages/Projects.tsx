import moAssistantLogo from '../assets/mo-assistant.png';
import aguapaneiaLogo from '../assets/aguapaneia.jpg';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  imageUrl?: string;
  link?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "AguapaneIA Chrome Extension",
    description: "A Chrome extension that enhances browsing productivity using AI tools. Features include real-time text improvement, instant translation between Spanish and English, and a personalized AI assistant accessible through an intuitive floating button. Built with a modern, adaptive design supporting both light and dark modes.",
    technologies: ["Chrome Extension", "JavaScript", "AI Integration", "UI/UX Design"],
    imageUrl: aguapaneiaLogo,
    link: "https://chromewebstore.google.com/detail/aguapaneia/blgkjaojfkcfidihpkbeahcpfobhnkjb"
  },
  {
    id: 2,
    title: "Mo Assistant - VS Code Extension",
    description: "A Visual Studio Code extension that provides an AI-powered coding assistant. Helps developers write, explain, and refactor code through natural language interactions. Features include code generation, explanation, and refactoring capabilities with a focus on developer productivity.",
    technologies: ["TypeScript", "VS Code API", "AI Integration", "Developer Tools"],
    imageUrl: moAssistantLogo,
    link: "https://marketplace.visualstudio.com/items?itemName=pure-pm.mo-assistant"
  },
];

export function Projects() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div key={project.id} className="border rounded-lg p-6 space-y-4">
            {project.imageUrl && (
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md"
              />
            )}
            <h2 className="text-2xl font-semibold">{project.title}</h2>
            <p className="text-muted-foreground">{project.description}</p>
            {project.link && (
              <a 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors duration-200"
              >
                View Project
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 ml-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M14 5l7 7m0 0l-7 7m7-7H3" 
                  />
                </svg>
              </a>
            )}
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 