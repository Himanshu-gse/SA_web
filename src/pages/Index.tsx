import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import WhyChooseUs from "@/components/WhyChooseUs";
import CoursesOverview from "@/components/CoursesOverview";
import Benefits from "@/components/Benefits";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <Hero />
      <Highlights />
      <WhyChooseUs />
      <CoursesOverview />
      <Benefits />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
