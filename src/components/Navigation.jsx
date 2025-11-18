import { Menu, X } from "lucide-react";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import primuxcare from "../assets/PrimuxCareFavicon.png";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
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
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/");
      setTimeout(() => {
        const target = document.querySelector(id);
        if (target) target.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-9xl  px-3 mx-auto  ">
        <div className="flex  justify-between items-center h-16">

          {/* LOGO SECTION */}
          <div
            className="flex items-center  cursor-pointer"
            onClick={scrollToTop}
          >
            <img
              src={primuxcare}
              alt="PrimuxCare logo"
              className="w-20 h-20 m-0 p-0 object-contain "
            />
            <span className="text-2xl font-bold text-emerald-700 hover:text-emerald-800 transition-colors">
              Primux<span className="text-emerald-500">Care</span>
            </span>
          </div>

          {/* DESKTOP NAV */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("#services")}
              className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
            >
              Services
            </button>

            <button
              onClick={() => scrollToSection("#about")}
              className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
            >
              About
            </button>

            <button
              onClick={() => scrollToSection("#contact")}
              className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
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

          {/* MOBILE MENU TOGGLE */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-emerald-600 transition-colors"
            >
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
              onClick={() => scrollToSection("#services")}
              className="block text-gray-700 hover:text-emerald-600 transition-colors py-2 w-full text-left"
            >
              Services
            </button>

            <button
              onClick={() => scrollToSection("#about")}
              className="block text-gray-700 hover:text-emerald-600 transition-colors py-2 w-full text-left"
            >
              About
            </button>

            <button
              onClick={() => scrollToSection("#contact")}
              className="block text-gray-700 hover:text-emerald-600 transition-colors py-2 w-full text-left"
            >
              Contact
            </button>

            <button
              onClick={() => navigate("/get-started")}
              className="w-full bg-emerald-600 text-white px-6 py-2 rounded-lg hover:bg-emerald-700 transition-all font-semibold shadow-sm hover:shadow-md"
            >
              Get Started
            </button>

          </div>
        </div>
      )}
    </nav>
  );
}
