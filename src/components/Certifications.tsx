import { Card, CardContent } from "@/components/ui/card";
import { Award } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Train the Trainer Certificate",
      description: "Training + Makeup",
      icon: "🎓",
    },
    {
      title: "UI/UX Design Certificate",
      description: "BrainerX Academy",
      icon: "🎨",
    },
  ];

  return (
    <section id="certifications" className="py-20 px-4 bg-muted/30">
      <div className="container max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Certifications</h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">Professional credentials and achievements</p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <Card key={index} className="border-2 hover:shadow-xl transition-all hover:scale-105">
              <CardContent className="pt-8">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{cert.icon}</div>
                  <div className="flex-1 space-y-2">
                    <h3 className="text-xl font-semibold flex items-center gap-2">
                      <Award className="h-5 w-5 text-accent" />
                      {cert.title}
                    </h3>
                    <p className="text-muted-foreground">{cert.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
