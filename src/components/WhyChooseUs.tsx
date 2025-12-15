import { BookOpen, Users, Clock, Award } from "lucide-react";

const features = [
  { 
    icon: BookOpen,
    title: "Practical Training", 
    desc: "Real project-based CAD practice with industry-standard methods."
  },
  { 
    icon: Users,
    title: "Beginner Friendly", 
    desc: "No prior experience required. Start from basics to advanced."
  },
  { 
    icon: Clock,
    title: "Flexible Timing", 
    desc: "Morning and evening batches available to suit your schedule."
  },
  { 
    icon: Award,
    title: "Certification", 
    desc: "Get industry-recognized certificate upon course completion."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">Why Choose Us</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional AutoCAD training designed to build your skills from ground up
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-card border border-border p-8 rounded-xl hover:shadow-lg transition-all hover:scale-105 group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                <f.icon className="text-primary group-hover:text-primary-foreground transition-colors" size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">{f.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
