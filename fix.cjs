const fs = require('fs');

let nav = fs.readFileSync('src/components/Navigation.jsx', 'utf-8');

// Find the corrupted button section
let corruptedRegex = /<button \s*onClick=\{\(\) => \{\s*setIsProductsOpen\(false\);\s*navigate\("\/product\/dental-management"\);\s*\}\}\s*className="w-full text-left block px-4 py-3 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-colors"\s*>\s*<div className="font-semibold mb-0.5">Dental Management Software<\/div>\s*onClick=\{\(\) => scrollToSection\("about"\)\}/g;

let fixedSection = `<button 
                    onClick={() => {
                      setIsProductsOpen(false);
                      navigate("/product/dental-management");
                    }}
                    className="w-full text-left block px-4 py-3 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-colors"
                  >
                    <div className="font-semibold mb-0.5">Dental Management Software</div>
                    <div className="text-xs text-gray-500 font-normal">Manage dental records seamlessly</div>
                  </button>
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
              onClick={() => scrollToSection("about")}`;

nav = nav.replace(corruptedRegex, fixedSection);
fs.writeFileSync('src/components/Navigation.jsx', nav);
console.log("Fixed Navigation.jsx");
