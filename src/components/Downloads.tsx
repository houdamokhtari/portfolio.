import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, Image, Video, Layers } from "lucide-react";

const Downloads = () => {
  const tps = [
    {
      name: "TP 1 - 3D Gaza Street Scene",
      tp: "/downloads/projetdour.blend",
      rapport: "rapport-tp1.pdf",
      screenshot: "/downloads/screentp1.png",
      video: "tp1-video.mp4"
    },
    {
      name: "TP 2 - JavaScript Fundamentals",
      tp: "tp2.pdf",
      rapport: "rapport-tp2.pdf",
      screenshot: "tp2-screenshot.jpg",
      video: "tp2-video.mp4"
    },
    {
      name: "TP 3 - React Components",
      tp: "tp3.pdf",
      rapport: "rapport-tp3.pdf",
      screenshot: "tp3-screenshot.jpg",
      video: "tp3-video.mp4"
    },
    {
      name: "TP 4 - Node.js Backend",
      tp: "tp4.pdf",
      rapport: "rapport-tp4.pdf",
      screenshot: "tp4-screenshot.jpg",
      video: "tp4-video.mp4"
    },
  ];

  const finalProject = {
    name: "Final Project",
    rapport: "final-project-rapport.pdf",
    screenshot: "final-project-screenshot.jpg",
    video: "final-project-video.mp4"
  };

  return (
    <section id="downloads" className="py-20 px-4">
      <div className="container max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            TP – Rapports – Project Media
          </h2>
          <p className="text-lg text-muted-foreground mb-2">W3D Module Resources</p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-secondary to-primary text-white rounded-full">
            <Layers className="h-5 w-5" />
            <span className="font-semibold">W3D Collection</span>
          </div>
        </div>

        <div className="space-y-12">
          {/* TPs Section */}
          {tps.map((tp, index) => (
            <div key={index}>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <FileText className="h-6 w-6 text-secondary" />
                {tp.name}
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* TP File */}
                <Card className="border-2 hover:shadow-xl transition-all">
                  <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2">
                      <FileText className="h-4 w-4 text-secondary" />
                      TP Document
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Button variant="w3d" size="sm" className="w-full" asChild>
                      <a href={`/${tp.tp}`} download>
                        <Download className="mr-2 h-4 w-4" />
                        Download TP
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                {/* Rapport */}
                <Card className="border-2 hover:shadow-xl transition-all">
                  <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2">
                      <FileText className="h-4 w-4 text-accent" />
                      Rapport
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Button variant="w3d" size="sm" className="w-full" asChild>
                      <a href={`/${tp.rapport}`} download>
                        <Download className="mr-2 h-4 w-4" />
                        Download Rapport
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                {/* Screenshot */}
                <Card className="border-2 hover:shadow-xl transition-all">
                  <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2">
                      <Image className="h-4 w-4 text-primary" />
                      Screenshot
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                      <Image className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <Button variant="w3d" size="sm" className="w-full" asChild>
                      <a href={`/${tp.screenshot}`} download>
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                {/* Video */}
                <Card className="border-2 hover:shadow-xl transition-all">
                  <CardHeader>
                    <CardTitle className="text-base flex items-center gap-2">
                      <Video className="h-4 w-4 text-accent" />
                      Video
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                      <Video className="h-8 w-8 text-muted-foreground" />
                    </div>
                    <Button variant="w3d" size="sm" className="w-full" asChild>
                      <a href={`/${tp.video}`} download>
                        <Download className="mr-2 h-4 w-4" />
                        Download
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}

          {/* Final Project Section */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Layers className="h-6 w-6 text-primary" />
              {finalProject.name}
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Final Rapport */}
              <Card className="border-2 hover:shadow-xl transition-all">
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <FileText className="h-4 w-4 text-accent" />
                    Final Rapport
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Button variant="w3d" size="sm" className="w-full" asChild>
                    <a href={`/${finalProject.rapport}`} download>
                      <Download className="mr-2 h-4 w-4" />
                      Download Rapport
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Final Screenshot */}
              <Card className="border-2 hover:shadow-xl transition-all">
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <Image className="h-4 w-4 text-primary" />
                    Screenshot
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <Image className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <Button variant="w3d" size="sm" className="w-full" asChild>
                    <a href={`/${finalProject.screenshot}`} download>
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </a>
                  </Button>
                </CardContent>
              </Card>

              {/* Final Video */}
              <Card className="border-2 hover:shadow-xl transition-all">
                <CardHeader>
                  <CardTitle className="text-base flex items-center gap-2">
                    <Video className="h-4 w-4 text-accent" />
                    Video
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                    <Video className="h-8 w-8 text-muted-foreground" />
                  </div>
                  <Button variant="w3d" size="sm" className="w-full" asChild>
                    <a href={`/${finalProject.video}`} download>
                      <Download className="mr-2 h-4 w-4" />
                      Download
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Downloads;
