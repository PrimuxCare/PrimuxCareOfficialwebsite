const fs = require('fs');
let code = fs.readFileSync('src/components/Navigation.jsx', 'utf8');
const searchRegex = /<a\s+href="https:\/\/hospital-frontend-pl3b\.vercel\.app\/login"[^>]*>([\s\S]*?)<\/a>/;

const replacement = `<button 
                    onClick={() => {
                      setIsProductsOpen(false);
                      navigate("/product/dental-management");
                    }}
                    className="w-full text-left block px-4 py-3 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-lg transition-colors"
                  >$1</button>`;

code = code.replace(searchRegex, replacement);
fs.writeFileSync('src/components/Navigation.jsx', code);
console.log("Replaced successfully!");
