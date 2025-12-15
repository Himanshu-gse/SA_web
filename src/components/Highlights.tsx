import { MapPin, Users, Award, Clock } from "lucide-react";

const highlights = [
  { icon: MapPin, text: "Based in Deoria, UP (274001)" },
  { icon: Users, text: "250+ Students Trained" },
  { icon: Award, text: "Industry Certified" },
  { icon: Clock, text: "Flexible Timings" }
];

const Highlights = () => {
  return (
    <section className="py-8 bg-background border-y border-border">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {highlights.map((item, i) => (
            <div 
              key={i} 
              className="flex items-center gap-3 justify-center text-muted-foreground hover:text-primary transition-colors"
            >
              <item.icon size={20} className="text-primary" />
              <span className="font-medium text-sm md:text-base">{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
