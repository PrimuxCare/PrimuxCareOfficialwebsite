import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Building2, LifeBuoy, Rocket, ArrowRight } from "lucide-react";
import PageTransition from "../components/PageTransition";
import SEO from "../components/SEO";

const Contact = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const contactOptions = [
    {
      id: "get-started",
      icon: Rocket,
      title: "Start a New Project",
      description: "Ready to build or integrate a new digital health solution for your clinic?",
      action: "Get Started",
      path: "/get-started",
      gradient: "from-emerald-400 to-teal-500",
      bgClass: "bg-emerald-50",
      iconClass: "text-emerald-600"
    },
    {
      id: "contact-sales",
      icon: Building2,
      title: "Enterprise Sales & Demos",
      description: "Looking for enterprise pricing, partnerships, or a guided product demo?",
      action: "Contact Sales",
      path: "/contact-sales",
      gradient: "from-teal-500 to-cyan-500",
      bgClass: "bg-teal-50",
      iconClass: "text-teal-600"
    },
    {
      id: "support",
      icon: LifeBuoy,
      title: "Technical Support",
      description: "Are you an existing user needing technical help, documentation, or billing support?",
      action: "Get Help",
      path: "/support",
      gradient: "from-cyan-500 to-blue-500",
      bgClass: "bg-cyan-50",
      iconClass: "text-cyan-600"
    }
  ];

  return (
    <PageTransition>
      <div className="w-full min-h-screen bg-gradient-to-br from-emerald-50/50 via-gray-50 to-teal-50/50 py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <SEO title="Contact Us | PrimuxCare" description="Get in touch with PrimuxCare. Select the right team to help you." />
        
        {/* Decorative Background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        </div>

        <div className="max-w-5xl mx-auto relative z-10 pt-10">
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-1.5 bg-emerald-100/50 rounded-full border border-emerald-200/50 mb-4">
              <span className="text-emerald-700 font-medium text-sm tracking-wide">Connect With Us</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              How can we <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">help you?</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              To ensure you get the best and fastest assistance, please choose the option that best describes what you need.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {contactOptions.map((option) => {
              const Icon = option.icon;
              return (
                <div 
                  key={option.id} 
                  onClick={() => navigate(option.path)}
                  className="group bg-white/80 backdrop-blur-xl p-8 rounded-[2rem] shadow-lg border border-white/60 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden flex flex-col cursor-pointer"
                >
                  {/* Top accent line */}
                  <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${option.gradient} transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out`}></div>
                  
                  <div className={`inline-flex items-center justify-center w-14 h-14 ${option.bgClass} rounded-2xl mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={28} className={option.iconClass} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors">
                    {option.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-8 flex-grow leading-relaxed">
                    {option.description}
                  </p>
                  
                  <div className={`inline-flex items-center font-semibold ${option.iconClass} mt-auto`}>
                    {option.action}
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1.5 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
          
          <div className="mt-20 text-center">
            <p className="text-gray-500">
              Not sure where to go? Just email us directly at <a href="mailto:primuxcare@gmail.com" className="text-emerald-600 hover:underline font-medium">primuxcare@gmail.com</a>.
            </p>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Contact;
