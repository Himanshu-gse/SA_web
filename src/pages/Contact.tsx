import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="w-full min-h-screen pt-20">
      <Navbar />

      {/* Header with Glow */}
      <header className="bg-gradient-to-r from-primary-50 to-white border-b relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-6 py-20 text-center relative z-10">
          <h1 className="text-5xl md:text-5xl font-bold leading-tight text-foreground">
            Get in Touch
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground">
            Have questions about our AutoCAD courses? We'd love to hear from you.
            Reach out and let's start your journey!
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 py-16">
        {/* Contact Info Cards */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Phone Card - Blue accent */}
            <div className="group p-6 rounded-lg border-2 border-l-8 border-l-blue-500 bg-gradient-to-br from-blue-50/50 to-transparent hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                <Phone className="text-blue-600" size={24} />
              </div>
              <h3 className="font-bold text-lg mb-3">Phone</h3>
              <p className="text-muted-foreground text-sm font-medium">+91 98765 43210</p>
              <p className="text-muted-foreground text-xs mt-2">Mon – Fri, 9 AM – 6 PM</p>
            </div>

            {/* Email Card - Green accent */}
            <div className="group p-6 rounded-lg border-2 border-l-8 border-l-green-500 bg-gradient-to-br from-green-50/50 to-transparent hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                <Mail className="text-green-600" size={24} />
              </div>
              <h3 className="font-bold text-lg mb-3">Email</h3>
              <p className="text-muted-foreground text-sm font-medium">info@shivacad.com</p>
              <p className="text-muted-foreground text-xs mt-2">We'll reply within 24 hours</p>
            </div>

            {/* Location Card - Orange accent */}
            <div className="group p-6 rounded-lg border-2 border-l-8 border-l-orange-500 bg-gradient-to-br from-orange-50/50 to-transparent hover:shadow-xl hover:scale-105 transition-all duration-300">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors">
                <MapPin className="text-orange-600" size={24} />
              </div>
              <h3 className="font-bold text-lg mb-3">Location</h3>
              <p className="text-muted-foreground text-sm font-medium">Shiva AutoCAD Centre</p>
              <p className="text-muted-foreground text-xs mt-2">Deoria, Uttar Pradesh, India</p>
            </div>
          </div>
        </section>

        {/* Contact Form and Response Message */}
        <section className="bg-gradient-to-br from-primary/5 via-background to-primary/3 rounded-lg border p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-8 text-center">Send us a Message</h2>

          {submitted && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-center">
              ✓ Thank you! Your message has been sent successfully. We'll get back
              to you soon.
            </div>
          )}

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div>
              <label className="block font-semibold mb-2 text-foreground">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block font-semibold mb-2 text-foreground">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="your@email.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block font-semibold mb-2 text-foreground">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="+91 98765 43210"
              />
            </div>

            {/* Subject */}
            <div>
              <label className="block font-semibold mb-2 text-foreground">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="e.g., Course Inquiry"
              />
            </div>

            {/* Message - Full Width */}
            <div className="md:col-span-2">
              <label className="block font-semibold mb-2 text-foreground">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                placeholder="Tell us more about your inquiry..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 flex justify-center">
              <button
                type="submit"
                className="bg-primary text-primary-foreground px-8 py-3.5 rounded-lg font-semibold hover:bg-primary/90 transition-all hover:shadow-lg hover:scale-105 flex items-center gap-2"
              >
                <Send size={20} />
                Send Message
              </button>
            </div>
          </form>
        </section>

        {/* FAQ Section */}
        <section className="mt-16">
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* FAQ Card 1 */}
            <div className="group p-6 rounded-lg border-l-4 border-l-primary/60 bg-slate-50/40 hover:bg-slate-50 transition-all duration-300">
              <div className="flex items-start gap-3">
                <span className="text-xl font-bold text-primary/70 group-hover:text-primary transition-colors">Q1</span>
                <div>
                  <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">When do courses start?</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    New batches start every month. Contact us for the next batch schedule.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Card 2 */}
            <div className="group p-6 rounded-lg border-l-4 border-l-primary/60 bg-slate-50/40 hover:bg-slate-50 transition-all duration-300">
              <div className="flex items-start gap-3">
                <span className="text-xl font-bold text-primary/70 group-hover:text-primary transition-colors">Q2</span>
                <div>
                  <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">Do you provide placement?</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Yes! We help with resume building, interviews, and job placements.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Card 3 */}
            <div className="group p-6 rounded-lg border-l-4 border-l-primary/60 bg-slate-50/40 hover:bg-slate-50 transition-all duration-300">
              <div className="flex items-start gap-3">
                <span className="text-xl font-bold text-primary/70 group-hover:text-primary transition-colors">Q3</span>
                <div>
                  <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">Is the course online?</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We offer both classroom and online options. Choose what works best for you.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Card 4 */}
            <div className="group p-6 rounded-lg border-l-4 border-l-primary/60 bg-slate-50/40 hover:bg-slate-50 transition-all duration-300">
              <div className="flex items-start gap-3">
                <span className="text-xl font-bold text-primary/70 group-hover:text-primary transition-colors">Q4</span>
                <div>
                  <h4 className="font-semibold mb-2 group-hover:text-primary transition-colors">What is the course duration?</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    Courses range from 2 to 6 months depending on the level and intensity.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
