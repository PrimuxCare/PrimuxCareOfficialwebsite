import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import primuxcare from "../assets/PrimuxCareFavicon.png";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navigate = useNavigate();
  const location = useLocation();

  const scrollToTop = () => {
    if (location.pathname === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, 100);
    }
    setIsOpen(false);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        const target = document.getElementById(id);
        if (target) target.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
    setActiveSection(id);
    setIsOpen(false);
  };

  // 🔥 Active section observer
  useEffect(() => {
    if (location.pathname !== "/") return;

    const sections = ["services", "about", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  const navLinkClass = (id) =>
    `font-medium transition-colors ${
      activeSection === id
        ? "text-emerald-600"
        : "text-gray-700 hover:text-emerald-600"
    }`;

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl px-4 mx-auto">
        <div className="flex justify-between items-center h-16">

          {/* LOGO */}
          <div
            className="flex items-center cursor-pointer"
            onClick={scrollToTop}
          >
            <img
              src={primuxcare}
              alt="PrimuxCare logo"
              className="w-16 h-16 object-contain"
            />
            <span className="text-2xl font-bold text-emerald-700">
              Primux<span className="text-emerald-500">Care</span>
            </span>
          </div>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("services")}
              className={navLinkClass("services")}
            >
              Services
            </button>

            <button
              onClick={() => scrollToSection("about")}
              className={navLinkClass("about")}
            >
              About
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className={navLinkClass("contact")}
            >
              Contact
            </button>

            <button
              onClick={() => navigate("/get-started")}
              className="bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-all font-semibold shadow-sm hover:shadow-md"
            >
              Get Started
            </button>
          </div>

          {/* MOBILE TOGGLE */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-sm">
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => scrollToSection("services")}
              className={navLinkClass("services")}
            >
              Services
            </button>

            <button
              onClick={() => scrollToSection("about")}
              className={navLinkClass("about")}
            >
              About
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className={navLinkClass("contact")}
            >
              Contact
            </button>

            <button
              onClick={() => navigate("/get-started")}
              className="w-full bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 font-semibold"
            >
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
