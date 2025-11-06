import { Card, CardContent } from "@/components/ui/card";
import { User, GraduationCap, Globe } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">About Me</h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">Get to know more about my background</p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-2 hover:shadow-xl transition-all">
            <CardContent className="pt-8 text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                <User className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Personal Info</h3>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>Name:</strong> Mokhtari Nourelhouda</p>
                <p><strong>Age:</strong> 21 years old</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-xl transition-all">
            <CardContent className="pt-8 text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                <GraduationCap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Education</h3>
              <div className="space-y-2 text-muted-foreground">
                <p className="font-medium">Master 2 – IDTW</p>
                <p>Ingénierie des Données et Technologie Web</p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-xl transition-all">
            <CardContent className="pt-8 text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                <Globe className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Languages</h3>
              <div className="space-y-2 text-muted-foreground">
                <p><strong>Arabic:</strong> C2</p>
                <p><strong>English:</strong> B2+</p>
                <p><strong>French:</strong> A1+</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
