import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Cosmetics E-Commerce Website",
      description: "A full-featured e-commerce platform for cosmetics products with shopping cart, payment integration, and user authentication.",
      technologies: ["HTML", "CSS", "JavaScript", "PHP"],
      projectUrl: "#",
      githubUrl: "https://github.com/nourelhouda/cosmetics-ecommerce",
    },
    {
      title: "Chatbot",
      description: "An intelligent chatbot application using natural language processing to provide automated customer support and assistance.",
      technologies: ["Python", "NLP", "Flask"],
      projectUrl: "#",
      githubUrl: "https://github.com/AichourSarra/botProject",
    },
    {
      title: "Weather Forecast Website",
      description: "A responsive weather forecast application that displays real-time weather data and forecasts using API integration.",
      technologies: ["JavaScript", "API", "HTML", "CSS"],
      projectUrl: "#",
      githubUrl: "https://github.com/nourelhouda/weather-forecast",
    },
    {
      title: "Voice of Palestine Website",
      description: "A content management website dedicated to sharing news, stories, and cultural content about Palestine.",
      technologies: ["HTML", "CSS", "JavaScript", "CMS"],
      projectUrl: "#",
      githubUrl: "https://github.com/houdamokhtari/voice-of-palestine",
    },
    {
      title: "PDF Embedder Project",
      description: "A FastAPI-based application that allows users to embed and display PDF documents seamlessly within web applications.",
      technologies: ["Python", "FastAPI", "JavaScript"],
      projectUrl: "#",
      githubUrl: "https://github.com/nourelhouda/pdf-embedder",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-muted/30">
      <div className="container max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Projects</h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">A showcase of my recent work</p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="border-2 hover:shadow-xl transition-all flex flex-col">
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 space-y-4">
                <p className="text-muted-foreground">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2">
                <Button variant="default" size="sm" className="flex-1" asChild>
                  <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project
                  </a>
                </Button>
                <Button variant="outline" size="sm" className="flex-1" asChild>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
