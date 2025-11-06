import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-4 bg-muted/30">
      <div className="container max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Get In Touch</h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Feel free to reach out for collaboration or just a friendly chat
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="border-2 hover:shadow-xl transition-all hover:scale-105">
            <CardContent className="pt-8 text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">Email</h3>
              <Button variant="link" className="text-secondary" asChild>
                <a href="mailto:mokhtarinourelhouda64@gmail.com">
                  mokhtarinourelhouda64@gmail.com
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-xl transition-all hover:scale-105">
            <CardContent className="pt-8 text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                <Linkedin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">LinkedIn</h3>
              <Button variant="link" className="text-secondary" asChild>
                <a href="https://linkedin.com/in/nourelhouda" target="_blank" rel="noopener noreferrer">
                  Connect with me
                </a>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-2 hover:shadow-xl transition-all hover:scale-105">
            <CardContent className="pt-8 text-center space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-br from-secondary to-accent flex items-center justify-center">
                <Github className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold">GitHub</h3>
              <Button variant="link" className="text-secondary" asChild>
                <a href="https://github.com/houdamokhtari" target="_blank" rel="noopener noreferrer">
                  View my work
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
