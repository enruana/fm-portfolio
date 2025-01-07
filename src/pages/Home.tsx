import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { BlogPostCard } from "../components/BlogPostCard";
import profileImage from "../assets/profile.png";
import { posts } from "../data/blog-posts";

interface Skill {
  name: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  category: "Frontend" | "Backend" | "Tools" | "Other";
}

const skills: Skill[] = [
  { name: "React", level: "Expert", category: "Frontend" },
  { name: "Vue.js", level: "Expert", category: "Frontend" },
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

const blogPosts = posts.slice(0, 3);

const description =
  "Electronic Engineer passionate about building scalable applications, hardware design, and sharing knowledge through technical writing. Specialized in React, Node.js, modern web technologies and hardware development. Experienced in AI development with LangChain, LangGraph, and open-source LLMs for building intelligent agents and autonomous systems. Enthusiastic about 3D environments, working with tools like ThreeJS, Blender, and exploring 3D printing.";

const getLevelColor = (level: Skill["level"]) => {
  switch (level) {
    case "Expert":
      return "bg-green-500";
    case "Advanced":
      return "bg-blue-500";
    case "Intermediate":
      return "bg-yellow-500";
    case "Beginner":
      return "bg-red-500";
    default:
      return "bg-gray-500";
  }
};

const getLevelPercentage = (level: Skill["level"]) => {
  switch (level) {
    case "Expert":
      return "w-full";
    case "Advanced":
      return "w-[75%]";
    case "Intermediate":
      return "w-[50%]";
    case "Beginner":
      return "w-[25%]";
    default:
      return "w-0";
  }
};

export function Home() {
  const [selectedCategory, setSelectedCategory] =
    useState<Skill["category"]>("Frontend");
  const filteredSkills = skills.filter(
    (skill) => skill.category === selectedCategory
  );

  return (
    <div className="min-h-screen">
      {/* Enhanced Hero Section */}
      <section className="container mx-auto px-4 py-24">
        <motion.div
          className="max-w-4xl mx-auto space-y-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex flex-col items-center text-center space-y-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src={profileImage}
                alt="Felipe Mantilla"
                className="w-40 h-40 rounded-full object-cover border-4 border-primary shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </motion.div>
            
            <div className="space-y-4">
              <h1 className="text-5xl md:text-6xl font-bold">
                <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Felipe Mantilla
                </span>
              </h1>
              <p className="text-2xl text-muted-foreground">
                Full Stack Developer & Technical Writer
              </p>
            </div>

            <p className="text-xl leading-relaxed max-w-3xl text-muted-foreground">
              {description}
            </p>

            <div className="flex gap-8 justify-center">
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://github.com/enruana"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                <Github className="w-6 h-6" />
                <span>GitHub</span>
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="https://www.linkedin.com/in/felipe-mantilla-167850163/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="w-6 h-6" />
                <span>LinkedIn</span>
              </motion.a>
              <motion.Link
                whileHover={{ scale: 1.1 }}
                to="/contact"
                className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="w-6 h-6" />
                <span>Contact</span>
              </motion.Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Skills Section */}
        <section className="container mx-auto px-4 py-16">
            <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            >
            <h2 className="text-3xl font-bold">Skills & Expertise</h2>

            <div className="flex gap-4 border-b">
                {["Frontend", "Backend", "Tools", "Other"].map((category) => (
                <button
                    key={category}
                    onClick={() =>
                    setSelectedCategory(category as Skill["category"])
                    }
                    className={`px-4 py-2 text-sm font-medium transition-colors relative ${
                    selectedCategory === category
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                >
                    {category}
                    {selectedCategory === category && (
                    <motion.div
                        layoutId="activeCategory"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    />
                    )}
                </button>
                ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredSkills.map((skill) => (
                <div
                    key={skill.name}
                    className="p-4 border rounded-lg hover:shadow-md transition-all duration-300 hover:scale-[1.02] bg-card"
                >
                    <div className="space-y-2">
                    <div className="flex justify-between items-center">
                        <span className="font-medium">{skill.name}</span>
                        <span className={`text-sm px-2 py-1 rounded-full ${getLevelColor(skill.level)} text-white`}>
                        {skill.level}
                        </span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        className={`h-full ${getLevelColor(skill.level)} ${getLevelPercentage(skill.level)}`}
                        transition={{ duration: 1, ease: "easeOut" }}
                        />
                    </div>
                    </div>
                </div>
                ))}
            </div>
            </motion.div>
        </section>

      {/* Latest Articles Section */}
      <section className="container mx-auto px-4 py-16 relative">
        {/* Add decorative background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent rounded-xl" />
        <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/10 to-secondary/10 blur-3xl opacity-30" />

        <motion.div
          className="space-y-8 relative"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="flex justify-between items-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold ">
                Latest Articles
              </h2>
              
            </div>
            <Link
              to="/blog"
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 hover:bg-primary/20 transition-all duration-300"
            >
              <span className="text-primary">View all articles</span>
              <ArrowRight className="w-4 h-4 text-primary transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <motion.div
                key={post.id}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <BlogPostCard post={post} />
              </motion.div>
            ))}

            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex items-center justify-center p-6 rounded-xl border-2 border-dashed border-primary/20 hover:border-primary/40 transition-colors"
            >
              <Link
                to="/blog"
                className="flex flex-col items-center gap-4 text-primary/60 hover:text-primary transition-colors group"
              >
                <ArrowRight className="w-8 h-8 transition-transform duration-300 group-hover:translate-x-1" />
                <span className="font-medium">Explore More Articles</span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
