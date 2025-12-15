import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-01.png";


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-background/95 backdrop-blur-sm fixed top-0 left-0 z-50 border-b border-border">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        <div className="flex items-center gap-3">
          <img 
              src={logo} 
              alt="AutoCAD Training Center" 
              className="w-12 h-12 items-center justify-center"
            />
          {/* <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-xl">
            SA
          </div> */}
          <span className="font-bold text-xl text-foreground">Shiva AutoCAD Centre</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-foreground/80 font-medium">
          <li className="hover:text-primary cursor-pointer transition-colors">Home</li>
          <li className="hover:text-primary cursor-pointer transition-colors">Courses</li>
          <li className="hover:text-primary cursor-pointer transition-colors">Gallery</li>
          <li className="hover:text-primary cursor-pointer transition-colors">About</li>
          <li className="hover:text-primary cursor-pointer transition-colors">Contact</li>
        </ul>

        <button className="hidden md:block bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-medium hover:bg-primary/90 transition-colors shadow-sm">
          Get Started
        </button>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <ul className="flex flex-col gap-4 p-6 text-foreground/80 font-medium">
            <li className="hover:text-primary cursor-pointer transition-colors">Home</li>
            <li className="hover:text-primary cursor-pointer transition-colors">Courses</li>
            <li className="hover:text-primary cursor-pointer transition-colors">Gallery</li>
            <li className="hover:text-primary cursor-pointer transition-colors">About</li>
            <li className="hover:text-primary cursor-pointer transition-colors">Contact</li>
            <li>
              <button className="w-full bg-primary text-primary-foreground px-6 py-2.5 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                Get Started
              </button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
