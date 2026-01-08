import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhyChooseUs from "@/components/WhyChooseUs";
import Highlights from "@/components/Highlights";
import React from "react";

const About: React.FC = () => {
  return (
    <div className="w-full min-h-screen pt-20">
      <Navbar />

      <header className="bg-gradient-to-r from-primary-50 to-white border-b relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 py-20 text-center relative z-10">
          <h1 className="text-5xl md:text-5xl font-bold leading-tight text-foreground">
            About Shiva AutoCAD Centre
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
            We teach practical CAD skills and engineering software to help
            students and professionals build real-world projects and grow their
            careers.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-16">
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-muted-foreground">
            To provide high-quality, hands-on training in AutoCAD and related
            tools that bridges the gap between theory and industry practice. We
            focus on small class sizes, project-based learning, and mentorship
            so learners can confidently apply their skills in professional
            settings.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="relative p-6 border rounded-lg overflow-hidden">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg blur-2xl opacity-40 pointer-events-none"></div>
              <h3 className="font-semibold mb-2">Courses & Workshops</h3>
              <p className="text-sm text-muted-foreground">Structured courses from basics to advanced.</p>
            </div>

            <div className="relative p-6 border rounded-lg overflow-hidden">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg blur-2xl opacity-40 pointer-events-none"></div>
              <h3 className="font-semibold mb-2">Project-Based Learning</h3>
              <p className="text-sm text-muted-foreground">Real projects you can add to your portfolio.</p>
            </div>

            <div className="relative p-6 border rounded-lg overflow-hidden">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg blur-2xl opacity-40 pointer-events-none"></div>
              <h3 className="font-semibold mb-2">Career Support</h3>
              <p className="text-sm text-muted-foreground">Resume help, interview prep, and placements.</p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative p-6 border rounded-lg overflow-hidden">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg blur-2xl opacity-40 pointer-events-none"></div>
              <p className="font-semibold">Ramesh — Founder & Lead Trainer</p>
              <p className="text-sm text-muted-foreground">20+ years in CAD and design training.</p>
            </div>

            <div className="relative p-6 border rounded-lg overflow-hidden">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg blur-2xl opacity-40 pointer-events-none"></div>
              <p className="font-semibold">Anita — Curriculum Designer</p>
              <p className="text-sm text-muted-foreground">Designs practical, industry-aligned projects.</p>
            </div>

            <div className="relative p-6 border rounded-lg overflow-hidden">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/10 to-primary/5 rounded-lg blur-2xl opacity-40 pointer-events-none"></div>
              <p className="font-semibold">Vikram — Placement Coordinator</p>
              <p className="text-sm text-muted-foreground">Works with local firms for internships and jobs.</p>
            </div>
          </div>
        </section>

        {/* <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Why Choose Us</h2>
          <WhyChooseUs />
        </section> */}

        <section className="mb-12">
          <Highlights />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
