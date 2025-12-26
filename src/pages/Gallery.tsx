import React, { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Placeholder images - replace with your actual gallery images
const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&h=450&fit=crop",
    alt: "AutoCAD 3D Model Project",
    title: "3D Architectural Model"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1574958269340-fa927503f3dd?w=800&h=450&fit=crop",
    alt: "Technical Drawing",
    title: "Technical Blueprint"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=450&fit=crop",
    alt: "Building Architecture",
    title: "Commercial Building Design"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=800&h=450&fit=crop",
    alt: "Modern Architecture",
    title: "Modern Facade Design"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=450&fit=crop",
    alt: "House Design",
    title: "Residential Project"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&h=450&fit=crop",
    alt: "Interior Design",
    title: "Living Room Layout"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&h=450&fit=crop",
    alt: "Construction Site",
    title: "Construction Documentation"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=450&fit=crop",
    alt: "House Exterior",
    title: "Exterior Elevation Design"
  }
];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      
      <main className="flex-1 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          {/* <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Gallery
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore the work of our students and see the quality of projects created during our AutoCAD training programs.
            </p>
          </div> */}

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image) => (
              <div
                key={image.id}
                className="group relative cursor-pointer overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
                onClick={() => setSelectedImage(image)}
              >
                {/* 16:9 Aspect Ratio Container */}
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <h3 className="text-white font-semibold text-lg">
                        {image.title}
                      </h3>
                      <p className="text-white/80 text-sm mt-1">
                        Click to view
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-5xl w-[95vw] p-0 border-0 bg-transparent shadow-none">
          <div className="relative ">
            {/* Close Button */}
            {/* <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 z-50 p-2 bg-black rounded-full hover:bg-black/80 transition-colors"
              aria-label="Close"
            >
            </button> */}
            
            {/* Image Container */}
            {selectedImage && (
              <div className="rounded-xl overflow-hidden ">
                <div className="aspect-video ">
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Image Info */}
                <div className="bg-black/90 p-4">
                  <h3 className="text-white font-semibold text-xl">
                    {selectedImage.title}
                  </h3>
                  <p className="text-white/70 text-sm mt-1">
                    {selectedImage.alt}
                  </p>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;
