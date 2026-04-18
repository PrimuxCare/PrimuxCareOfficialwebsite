import { Menu, X, ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import primuxcare from "../assets/PrimuxCareFavicon.png";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
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
    setIsProductsOpen(false);
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
    setIsProductsOpen(false);
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

  useEffect(() => {
    setIsOpen(false);
    setIsProductsOpen(false);
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
            {/* PRODUCTS DROPDOWN */}
            <div
              className="relative group py-4"
              onMouseLeave={() => setIsProductsOpen(false)}
            >
              <button
                onClick={() => setIsProductsOpen((prev) => !prev)}
                onMouseEnter={() => setIsProductsOpen(true)}
                aria-expanded={isProductsOpen}
                aria-haspopup="true"
                className="font-medium transition-colors text-gray-700 hover:text-emerald-600 flex items-center"
              >
                Products{" "}
                <ChevronDown
                  size={16}
                  className={`ml-1 transition-transform duration-200 ${
                    isProductsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`absolute left-0 top-full -mt-2 w-64 bg-white border border-gray-100 rounded-xl shadow-lg transition-all duration-200 overflow-hidden ${
                  isProductsOpen
                    ? "opacity-100 visible"
                    : "opacity-0 invisible"
                }`}
              >
                <div className="p-2">
                  <a 
                    href="https://hospital-frontend-pl3b.vercel.app/login" 
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setIsProductsOpen(false)}
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-colors"
                  >
                    <div className="font-semibold mb-0.5">Digital Dental Folder</div>
                    <div className="text-xs text-gray-500 font-normal">Manage dental records seamlessly</div>
                  </a>
                </div>
              </div>
            </div>

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
          <div className="px-4 py-4 flex flex-col space-y-4">
            <div className="border-b border-gray-50 pb-4">
              <button
                onClick={() => setIsProductsOpen((prev) => !prev)}
                aria-expanded={isProductsOpen}
                className="w-full flex items-center justify-between text-left"
              >
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                  Products
                </span>
                <ChevronDown
                  size={16}
                  className={`text-gray-500 transition-transform duration-200 ${
                    isProductsOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isProductsOpen && (
                <div className="mt-3 flex flex-col space-y-2">
                  <a 
                    href="https://hospital-frontend-pl3b.vercel.app/login"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => {
                      setIsOpen(false);
                      setIsProductsOpen(false);
                    }}
                    className="text-gray-700 hover:text-emerald-600 font-medium transition-colors"
                  >
                    Digital Dental Folder
                  </a>
                </div>
              )}
            </div>

            <button
              onClick={() => scrollToSection("services")}
              className={`${navLinkClass("services")} text-left`}
            >
              Services
            </button>

            <button
              onClick={() => scrollToSection("about")}
              className={`${navLinkClass("about")} text-left`}
            >
              About
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className={`${navLinkClass("contact")} text-left`}
            >
              Contact
            </button>

            <button
              onClick={() => {
                setIsOpen(false);
                setIsProductsOpen(false);
                navigate("/get-started");
              }}
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
