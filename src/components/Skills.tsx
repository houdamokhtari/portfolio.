import { Card, CardContent } from "@/components/ui/card";
import { Code2, Palette, Terminal, Database } from "lucide-react";

const Skills = () => {
  const skills = [
    { name: "Java", icon: "☕", category: "programming" },
    { name: "JavaScript", icon: "📜", category: "programming" },
    { name: "HTML", icon: "🏗️", category: "programming" },
    { name: "CSS", icon: "🎨", category: "programming" },
    { name: "PHP", icon: "🐘", category: "programming" },
    { name: "Node.js", icon: "🟢", category: "programming" },
    { name: "Figma", icon: "🎯", category: "design" },
    { name: "UI/UX Design", icon: "✨", category: "design" },
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Technical Skills</h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">Technologies and tools I work with</p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card key={index} className="border-2 hover:shadow-xl transition-all hover:scale-105 hover:border-secondary">
              <CardContent className="pt-6 text-center space-y-3">
                <div className="text-5xl">{skill.icon}</div>
                <h3 className="font-semibold text-lg">{skill.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <Card className="border-2 bg-gradient-to-br from-secondary/5 to-transparent">
            <CardContent className="pt-8 text-center space-y-3">
              <Code2 className="h-12 w-12 mx-auto text-secondary" />
              <h3 className="text-xl font-semibold">Programming</h3>
              <p className="text-muted-foreground">Full-stack development with modern frameworks</p>
            </CardContent>
          </Card>

          <Card className="border-2 bg-gradient-to-br from-accent/5 to-transparent">
            <CardContent className="pt-8 text-center space-y-3">
              <Palette className="h-12 w-12 mx-auto text-accent" />
              <h3 className="text-xl font-semibold">Design</h3>
              <p className="text-muted-foreground">User-centered design and prototyping</p>
            </CardContent>
          </Card>

          <Card className="border-2 bg-gradient-to-br from-primary/5 to-transparent">
            <CardContent className="pt-8 text-center space-y-3">
              <Terminal className="h-12 w-12 mx-auto text-primary" />
              <h3 className="text-xl font-semibold">Communication</h3>
              <p className="text-muted-foreground">Training, teaching, and collaboration</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
