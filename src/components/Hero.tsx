import { Download, PlayCircle } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="pt-32 pb-20 bg-gradient-to-br from-primary/5 via-background to-accent/20 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12 relative z-10">
        {/* LEFT */}
        <div className="space-y-6 animate-fade-in">
          <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
            🎓 Learn AutoCAD Professionally
          </span>

          <h1 className="text-5xl md:text-5xl font-bold leading-tight text-foreground">
            Become an <span className="text-primary">AutoCAD Expert</span> with Practical Training
          </h1>

          <p className="text-lg text-muted-foreground">
            Hands-on training for AutoCAD 2D, 3D, drafting, interior layouts and more. 
            Learn industry-level skills with professional guidance in Deoria.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <button className="bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:scale-105 flex items-center gap-2">
              <PlayCircle size={20} />
              Join Now
            </button>
            <button className="border-2 border-primary text-primary px-8 py-3.5 rounded-lg font-semibold hover:bg-primary hover:text-primary-foreground transition-all flex items-center gap-2">
              <Download size={20} />
              Download Brochure
            </button>
          </div>

          {/* Stats */}
          <div className="flex gap-8 pt-8">
            <div>
              <h3 className="text-4xl font-bold text-primary">250+</h3>
              <p className="text-muted-foreground font-medium">Students Trained</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-primary">90%</h3>
              <p className="text-muted-foreground font-medium">Success Rate</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-primary">5+</h3>
              <p className="text-muted-foreground font-medium">Years Experience</p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex justify-center animate-slide-in">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-primary/50 rounded-2xl blur-2xl opacity-30"></div>
            <img 
              src={heroImage} 
              alt="AutoCAD Training Center" 
              className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
