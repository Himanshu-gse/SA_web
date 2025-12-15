import { CheckCircle } from "lucide-react";
import benefitsImage from "@/assets/benefits-image.jpg";

const benefits = [
  "Learn practical drafting methods used in real industries",
  "Master 2D plans, elevations, and 3D modeling techniques",
  "Industry-standard AutoCAD workflows and best practices",
  "Hands-on training with real-world project examples",
  "Personal guidance from experienced CAD professionals"
];

const Benefits = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-foreground">
              Build a Strong CAD Career with Skill-Focused Training
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our comprehensive AutoCAD training program is designed to give you 
              real-world skills that employers are looking for.
            </p>

            <div className="space-y-4">
              {benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="text-primary mt-1 flex-shrink-0" size={20} />
                  <p className="text-foreground/90">{benefit}</p>
                </div>
              ))}
            </div>

            <div className="flex gap-10 pt-6">
              <div>
                <h3 className="text-4xl font-bold text-primary">250+</h3>
                <p className="text-muted-foreground font-medium">Students Trained</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-primary">90%</h3>
                <p className="text-muted-foreground font-medium">Satisfaction Rate</p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-primary/50 rounded-2xl blur-2xl opacity-20"></div>
            <img 
              src={benefitsImage} 
              alt="AutoCAD Training Benefits" 
              className="relative rounded-xl shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;
