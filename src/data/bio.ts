export const mainEmail = 'felipemantillagomez@gmail.com'
export const linkedInLink = 'https://www.linkedin.com/in/felipe-mantilla-167850163/'
export const githubLink = 'https://github.com/enruana'



export const description = `
Electronic Engineer passionate about building scalable applications, hardware design, and sharing knowledge through technical writing. Specialized in React, Vue, Angular, Node.js, modern web technologies and hardware development. Experienced in AI development with LangChain, LangGraph, and open-source LLMs for building intelligent agents and autonomous systems. Enthusiastic about 3D environments, working with tools like ThreeJS, Blender, and exploring 3D printing.
`;

export interface Skill {
  name: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  category: "Frontend" | "Backend" | "Tools" | "Other";
}

export const skills: Skill[] = [
  { name: "React", level: "Expert", category: "Frontend" },
  { name: "Vue.js", level: "Expert", category: "Frontend" },
  { name: "Angular", level: "Expert", category: "Frontend" },
  { name: "Next.js", level: "Intermediate", category: "Frontend" },
  { name: "TypeScript", level: "Expert", category: "Frontend" },
  { name: "Node.js", level: "Expert", category: "Backend" },
  { name: "Three.js", level: "Intermediate", category: "Frontend" },
  { name: "React Native", level: "Advanced", category: "Frontend" },
  { name: "Express", level: "Expert", category: "Backend" },
  { name: "Nest.js", level: "Intermediate", category: "Backend" },
  { name: "Python", level: "Intermediate", category: "Backend" },
  { name: "Docker", level: "Advanced", category: "Tools" },
  { name: "AWS", level: "Intermediate", category: "Tools" },
  { name: "Git", level: "Expert", category: "Tools" },
  { name: "CI/CD", level: "Intermediate", category: "Tools" },
  { name: "Kubernetes", level: "Intermediate", category: "Tools" },
  { name: "PostgreSQL", level: "Intermediate", category: "Tools" },
  { name: "MongoDB", level: "Intermediate", category: "Tools" },
  { name: "Redis", level: "Intermediate", category: "Tools" },
  { name: "Elasticsearch", level: "Intermediate", category: "Tools" },
  { name: "3d Modeling", level: "Intermediate", category: "Other" },
  { name: "Leadership", level: "Intermediate", category: "Other" },
  { name: "Communication", level: "Intermediate", category: "Other" },
  { name: "Problem Solving", level: "Advanced", category: "Other" },
  { name: "Teamwork", level: "Advanced", category: "Other" },
  { name: "Time Management", level: "Advanced", category: "Other" },
  { name: "Adaptability", level: "Advanced", category: "Other" },
  { name: "Self-Motivation", level: "Advanced", category: "Other" },
  { name: "Creativity", level: "Advanced", category: "Other" },
  { name: "Critical Thinking", level: "Intermediate", category: "Other" },
  { name: "Emotional Intelligence", level: "Intermediate", category: "Other" },
  { name: "Self-Awareness", level: "Intermediate", category: "Other" },
  { name: "Resilience", level: "Advanced", category: "Other" },
  // Add more skills as needed
];
