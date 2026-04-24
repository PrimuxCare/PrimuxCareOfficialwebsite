import React, { useEffect } from "react";
import { LifeBuoy, Book, MessageCircle, Mail } from "lucide-react";
import PageTransition from "../components/PageTransition";
import SEO from "../components/SEO";

const Support = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  const supportOptions = [
    {
      icon: Mail,
      title: "Technical Support",
      description: "Need help with your software? Our technical team is here to assist you.",
      action: "Email Support",
      link: "mailto:support@primuxcare.com",
    },
    {
      icon: MessageCircle,
      title: "General Inquiries",
      description: "Have a general question about PrimuxCare or our services?",
      action: "Email Info",
      link: "mailto:info@primuxcare.com",
    },
    {
      icon: Book,
      title: "Enterprise Sales",
      description: "Looking for a custom solution or enterprise pricing for your hospital?",
      action: "Contact Sales",
      link: "/contact-sales",
    },
  ];

  return (
    <PageTransition>
      <div className="w-full min-h-screen bg-gradient-to-br from-emerald-50/50 via-gray-50 to-teal-50/50 py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <SEO title="Support | PrimuxCare" description="Get help and support for PrimuxCare services." />
        
        {/* Decorative Background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10 pt-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-2xl mb-6 shadow-inner text-emerald-600">
              <LifeBuoy size={32} />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How can we <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">help you?</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Whether you have a technical question, need billing assistance, or want to learn more about our features, our team is here for you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {supportOptions.map((option, index) => {
              const Icon = option.icon;
              const isMailto = option.link.startsWith("mailto:");
              const emailAddress = isMailto ? option.link.replace("mailto:", "") : "";
              
              const handleClick = (e) => {
                if (isMailto) {
                  e.preventDefault();
                  // Copy to clipboard
                  navigator.clipboard.writeText(emailAddress);
                  
                  // Try to open the mail client
                  window.location.href = option.link;
                  
                  // Alert the user (using a simple alert since sonner might not be imported)
                  alert(`Copied ${emailAddress} to clipboard!`);
                }
              };

              return (
                <div key={index} className="group bg-white/80 backdrop-blur-xl p-8 rounded-[2rem] shadow-lg border border-white/60 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden flex flex-col">
                  {/* Top accent line */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-teal-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
                  
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300">
                    <Icon size={24} className="text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{option.title}</h3>
                  <p className="text-gray-600 mb-8 flex-grow">{option.description}</p>
                  
                  <a 
                    href={option.link} 
                    onClick={handleClick}
                    className="inline-flex items-center font-semibold text-emerald-600 group-hover:text-emerald-700 transition-colors mt-auto cursor-pointer"
                  >
                    {option.action}
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              );
            })}
          </div>

          {/* FAQ Section */}
          <div className="mt-24 bg-white/80 backdrop-blur-xl rounded-[2rem] p-10 md:p-16 shadow-xl border border-white/60 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Still need help?</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Please contact our enterprise support directly.
            </p>
            <a href="mailto:support@primuxcare.com" className="inline-block bg-gray-900 text-white px-8 py-4 rounded-xl font-semibold hover:bg-gray-800 transition-colors shadow-lg hover:shadow-xl">
              Contact Enterprise Support
            </a>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Support;
