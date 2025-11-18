import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Product: ["Features", "Pricing", "Security", "Updates"],
    Company: ["Careers", "Blog", "Press"],
    Resources: ["API", "Support", "Community"],
    Legal: ["Terms", "Compliance", "Cookies"],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "https://x.com/PrimuxCare_", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  return (
    <footer className="bg-gradient-to-t from-white via-emerald-50 to-teal-50 border-t border-emerald-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          {/* Brand section */}
          <div className="lg:col-span-2">
            <Link
              to="/"
              className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-amber-400 bg-clip-text text-transparent mb-4 block hover:opacity-80 transition"
            >
              PrimuxCare
            </Link>
            <p className="text-navy-800 mb-6 max-w-sm">
              Transforming healthcare through digital innovation and patient-centered technology solutions.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center hover:bg-emerald-600 hover:text-amber-50 transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold mb-4 text-navy-900">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-navy-800 hover:text-amber-400 transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-emerald-100 text-center text-navy-700">
          <p>&copy; {currentYear} PrimuxCare. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
