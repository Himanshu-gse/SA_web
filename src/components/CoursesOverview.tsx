import { Clock, BookOpen } from "lucide-react";

const courses = [
  { 
    name: "AutoCAD Basic (2D Drafting)", 
    duration: "1 Month",
    description: "Master 2D drafting fundamentals and technical drawing"
  },
  { 
    name: "AutoCAD Full Course (2D + 3D)", 
    duration: "2 Months",
    description: "Complete training in 2D drafting and 3D modeling"
  },
  { 
    name: "Interior CAD Drafting", 
    duration: "1.5 Months",
    description: "Specialized training for interior design layouts"
  },
  { 
    name: "Architecture / Civil CAD", 
    duration: "2 Months",
    description: "Professional architectural and civil drafting skills"
  }
];

const CoursesOverview = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Our Popular AutoCAD Courses
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose from our comprehensive range of AutoCAD training programs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((c, i) => (
            <div 
              key={i} 
              className="bg-card border border-border p-6 rounded-xl hover:shadow-xl transition-all group hover:border-primary"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors">
                  <BookOpen className="text-primary group-hover:text-primary-foreground transition-colors" size={24} />
                </div>
                <div className="flex items-center gap-1 text-muted-foreground text-sm">
                  <Clock size={16} />
                  <span>{c.duration}</span>
                </div>
              </div>
              
              <h3 className="font-semibold text-lg mb-2 text-foreground group-hover:text-primary transition-colors">
                {c.name}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {c.description}
              </p>
              
              <button className="mt-4 text-primary font-medium hover:underline text-sm">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesOverview;
