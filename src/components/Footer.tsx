import { Mail, Phone, MapPin, Facebook, Instagram, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold text-xl">
                SA
              </div>
              <span className="font-bold text-lg">Shiva AutoCAD</span>
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              Professional AutoCAD training in Deoria. Building careers through quality education.
            </p>
            
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 bg-background/10 rounded-lg flex items-center justify-center hover:bg-primary transition-colors">
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3 text-background/70">
              <li className="hover:text-primary cursor-pointer transition-colors">Home</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Courses</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Gallery</li>
              <li className="hover:text-primary cursor-pointer transition-colors">About Us</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Contact</li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Our Courses</h3>
            <ul className="space-y-3 text-background/70 text-sm">
              <li className="hover:text-primary cursor-pointer transition-colors">AutoCAD Basic 2D</li>
              <li className="hover:text-primary cursor-pointer transition-colors">AutoCAD Full Course</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Interior CAD</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Architecture CAD</li>
              <li className="hover:text-primary cursor-pointer transition-colors">Civil CAD</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3 text-background/70 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary flex-shrink-0 mt-0.5" />
                <span>Deoria, Uttar Pradesh, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary flex-shrink-0" />
                <span>+91 9876543210</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary flex-shrink-0" />
                <span>info@shivaautocad.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-10 pt-6 text-center text-background/60 text-sm">
          <p>&copy; {new Date().getFullYear()} Shiva AutoCAD Coaching. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
