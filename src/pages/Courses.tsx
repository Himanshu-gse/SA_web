import React, { useState } from "react";
import { Star, Clock, Monitor, Search } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const courses = [
  {
    id: 1,
    category: "2D DRAFTING",
    title: "AutoCAD Basic (2D Drafting)",
    description: "Master 2D drafting fundamentals and technical drawing with industry-standard tools.",
    duration: "1 Month",
    rating: 4.9,
    ratingCount: 1250,
    mode: "Classroom",
  },
  {
    id: 2,
    category: "FULL COURSE",
    title: "AutoCAD Full Course (2D + 3D)",
    description: "Complete training in 2D drafting and 3D modeling for professional applications.",
    duration: "2 Months",
    rating: 5.0,
    ratingCount: 2340,
    mode: "Classroom",
  },
  {
    id: 3,
    category: "INTERIOR DESIGN",
    title: "Interior CAD Drafting",
    description: "Specialized training for interior design layouts, floor plans, and elevations.",
    duration: "1.5 Months",
    rating: 4.8,
    ratingCount: 890,
    mode: "Hybrid",
  },
  {
    id: 4,
    category: "ARCHITECTURE",
    title: "Architecture / Civil CAD",
    description: "Professional architectural and civil drafting skills for construction projects.",
    duration: "2 Months",
    rating: 4.9,
    ratingCount: 1560,
    mode: "Classroom",
  },
  {
    id: 5,
    category: "3D MODELING",
    title: "3D Modeling & Visualization",
    description: "Create stunning 3D models and photorealistic renderings for presentations.",
    duration: "1.5 Months",
    rating: 4.7,
    ratingCount: 720,
    mode: "Online",
  },
  {
    id: 6,
    category: "ADVANCED",
    title: "Advanced AutoCAD Techniques",
    description: "Learn advanced workflows, automation, and custom tool creation in AutoCAD.",
    duration: "1 Month",
    rating: 4.8,
    ratingCount: 450,
    mode: "Hybrid",
  },
];

const Courses: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCourses = courses.filter(
    (course) =>
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-[#f8faf8]">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          
          {/* Header Section */}
          <div className="text-center mb-12">
            <span className="inline-block bg-primary/10 text-primary px-5 py-2 rounded-full text-sm font-medium tracking-wide mb-6">
              OUR BEST COURSE
            </span>
            <h1 className="text-5xl md:text-5xl font-bold leading-tight text-foreground">
              Discover a most popular Online Course
            </h1>
          </div>

          {/* Search Section */}
          <div className="flex justify-center mb-14">
            <div className="flex items-center gap-0 w-full max-w-xl">
              <input
                type="text"
                placeholder="Search course.."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="flex-1 px-5 py-3.5 border border-border rounded-l-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
              <button className="bg-foreground text-background px-8 py-3.5 rounded-r-lg font-medium hover:bg-foreground/90 transition-colors">
                Search
              </button>
            </div>
          </div>

          {/* Courses Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <div
                key={course.id}
                className="bg-card rounded-2xl border border-border/50 overflow-hidden transition-all duration-300 hover:shadow-lg relative"
                onMouseEnter={() => setHoveredId(course.id)}
                onMouseLeave={() => setHoveredId(null)}
              >
                {/* Card Content */}
                <div className="p-6 pb-8">
                  {/* Category */}
                  <span className="text-primary/70 text-xs font-medium tracking-wider uppercase">
                    {course.category}
                  </span>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-foreground mt-3 mb-4 leading-snug min-h-[56px]">
                    {course.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground text-sm mb-5 line-clamp-2">
                    {course.description}
                  </p>

                  {/* Duration & Mode Row */}
                  <div className="flex items-center gap-6 mb-5 text-muted-foreground text-sm">
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      <span>{course.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Monitor size={16} />
                      <span>{course.mode}</span>
                    </div>
                  </div>

                  {/* Rating Row */}
                  <div className="flex items-center gap-2">
                    <Star className="text-yellow-400 fill-yellow-400" size={18} />
                    <span className="font-semibold text-foreground">{course.rating.toFixed(1)}</span>
                    <span className="text-muted-foreground text-sm">
                      ({course.ratingCount.toLocaleString()})
                    </span>
                  </div>
                </div>

                {/* Curved Enroll Button - Shows on Hover */}
                <div 
                  className={`absolute bottom-0 left-0 right-0 transition-all duration-300 ease-out ${
                    hoveredId === course.id 
                      ? 'translate-x-40 opacity-100' 
                      : 'translate-x-1/3 opacity-0'
                  }`}
                >
                  <div className="relative">
                    {/* Curved top edge */}
                    <svg 
                      viewBox="0 0 400 30" 
                      className="w-full h-6 fill-card"
                      preserveAspectRatio="none"
                    >
                      <ellipse cx="200" cy="30" rx="200" ry="30" />
                    </svg>
                    {/* Button container */}
                    <div className="bg-card px-6 pb-5 pt-0 flex justify-center -mt-1">
                      <button className="border border-border text-foreground px-8 py-2.5 rounded-full text-sm font-medium hover:bg-foreground hover:text-background transition-all duration-300">
                        Enroll now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results Message */}
          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">
                No courses found matching your search.
              </p>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Courses;
