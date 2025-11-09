import { useRef } from "react";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";

function App() {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="text-lg font-semibold tracking-tight">LocalCommerce.dev</a>
          <nav className="hidden gap-6 text-sm text-gray-700 md:flex">
            <a href="#portfolio" className="hover:text-gray-900">Work</a>
            <a href="#services" className="hover:text-gray-900">Services</a>
            <a href="#contact" className="hover:text-gray-900">Contact</a>
          </nav>
          <button
            onClick={scrollToContact}
            className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700"
          >
            Get a Free Quote
          </button>
        </div>
      </header>

      <main>
        <Hero onCTAClick={scrollToContact} />
        <Portfolio />
        <Services />
        <Testimonials />
        <Contact ref={contactRef} />
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white py-10">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} LocalCommerce.dev. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-600">
              <a href="#" aria-label="Twitter" className="hover:text-gray-900">Twitter</a>
              <a href="#" aria-label="LinkedIn" className="hover:text-gray-900">LinkedIn</a>
              <a href="#" className="hover:text-gray-900">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
