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
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80",
      gradient: "from-pink-500/20 to-purple-500/20"
    },
    {
      title: "Chatbot",
      description: "An intelligent chatbot application using natural language processing to provide automated customer support and assistance.",
      technologies: ["Python", "NLP", "Flask"],
      projectUrl: "#",
<<<<<<< HEAD
      githubUrl: "https://github.com/nourelhouda/chatbot",
=======
      githubUrl: "https://github.com/AichourSarra/botProject",
>>>>>>> 09f04785214c708c32f1bbc1136ccde8716a0338
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&q=80",
      gradient: "from-blue-500/20 to-cyan-500/20"
    },
    {
      title: "Weather Forecast Website",
      description: "A responsive weather forecast application that displays real-time weather data and forecasts using API integration.",
      technologies: ["JavaScript", "API", "HTML", "CSS"],
<<<<<<< HEAD
      projectUrl: "#",
      githubUrl: "https://github.com/nourelhouda/weather-forecast",
=======
      projectUrl: "https://vercel.com/mokhtari-nour-el-houdas-projects/weather",
      githubUrl: "https://github.com/houdamokhtari/weather",
>>>>>>> 09f04785214c708c32f1bbc1136ccde8716a0338
      image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&q=80",
      gradient: "from-sky-500/20 to-blue-500/20"
    },
    {
      title: "Voice of Palestine Website",
      description: "A content management website dedicated to sharing news, stories, and cultural content about Palestine.",
      technologies: ["HTML", "CSS", "JavaScript", "CMS"],
<<<<<<< HEAD
      projectUrl: "#",
      githubUrl: "https://github.com/nourelhouda/voice-of-palestine",
=======
      projectUrl: "https://palestine-black.vercel.app/",
      githubUrl: "https://github.com/mokhtarihouda/voice-of-palestine",
>>>>>>> 09f04785214c708c32f1bbc1136ccde8716a0338
      image: "https://images.unsplash.com/photo-1583422409516-2895a77efded?w=800&q=80",
      gradient: "from-green-500/20 to-emerald-500/20"
    },
    {
      title: "PDF Embedder Project",
      description: "A FastAPI-based application that allows users to embed and display PDF documents seamlessly within web applications.",
      technologies: ["Python", "FastAPI", "JavaScript"],
      projectUrl: "#",
<<<<<<< HEAD
      githubUrl: "https://github.com/nourelhouda/pdf-embedder",
=======
      githubUrl: "https://github.com/houdamokhtari/pdf",
>>>>>>> 09f04785214c708c32f1bbc1136ccde8716a0338
      image: "https://images.unsplash.com/photo-1568667256549-094345857637?w=800&q=80",
      gradient: "from-indigo-500/20 to-blue-500/20"
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 relative overflow-hidden">
      {/* Background gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/30 to-background pointer-events-none"></div>
      
      <div className="container max-w-6xl relative z-10">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group border-2 hover:border-primary/50 transition-all duration-500 flex flex-col overflow-hidden bg-card/50 backdrop-blur-sm hover:shadow-2xl hover:shadow-primary/20 hover:-translate-y-2"
            >
              {/* Project Image with Overlay */}
              <div className="relative h-48 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-500 z-10`}></div>
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-80 z-10"></div>
              </div>

              <CardHeader className="relative">
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="flex-1 space-y-4">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium border border-primary/20 hover:bg-primary/20 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="flex gap-3 pt-4">
                <Button 
                  variant="default" 
                  size="sm" 
                  className="flex-1 group/btn relative overflow-hidden" 
                  asChild
                >
                  <a href={project.projectUrl} target="_blank" rel="noopener noreferrer">
                    <span className="relative z-10 flex items-center justify-center">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View
                    </span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                  </a>
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1 hover:bg-primary/10 hover:border-primary transition-colors duration-300" 
                  asChild
                >
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" />
                    Code
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