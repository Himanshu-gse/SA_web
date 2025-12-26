import React from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

const courses = [
  { id: 1, title: "AutoCAD Basics", desc: "Fundamentals of 2D drafting and drawing." },
  { id: 2, title: "AutoCAD Advanced", desc: "Advanced drafting, blocks, and templates." },
  { id: 3, title: "3D Modeling", desc: "Introduction to 3D modeling in AutoCAD." },
];

const Courses: React.FC = () => {
  return (
    <main className="max-w-7xl mx-auto p-6 mt-24">
      <h1 className="text-3xl font-bold mb-6">Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((c) => (
          <Card key={c.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle>{c.title}</CardTitle>
              <CardDescription>{c.desc}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">Duration: 4 weeks • Mode: Classroom / Online</p>
            </CardContent>
            <CardFooter>
              <button className="ml-auto bg-primary text-primary-foreground px-4 py-2 rounded-md">View</button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </main>
  );
};

export default Courses;
