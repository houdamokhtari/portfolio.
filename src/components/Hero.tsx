import { Button } from "@/components/ui/button";
import { Github, Download } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="container max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 text-center md:text-left space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              Mokhtari <span className="text-secondary">Nourelhouda</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              Master 2 Student in Data Engineering & Web Technology
            </p>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Passionate about UI/UX design, web development, and creating meaningful digital experiences. 
              Combining technical expertise with creative design thinking.
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <Button size="lg" asChild>
                <a href="https://github.com/nourelhouda" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2 h-5 w-5" />
                  View GitHub
                </a>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <a href="/cv.pdf" download>
                  <Download className="mr-2 h-5 w-5" />
                  Download CV
                </a>
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary to-accent rounded-full blur-3xl opacity-20 animate-pulse"></div>
              <img
                src={profilePhoto}
                alt="Mokhtari Nourelhouda"
                className="relative rounded-full w-72 h-72 md:w-96 md:h-96 object-cover shadow-2xl border-4 border-card"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
