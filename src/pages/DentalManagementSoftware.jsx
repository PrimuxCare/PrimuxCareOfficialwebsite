import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Shield, Zap, Clock, Users } from "lucide-react";
import dentalImage from "../assets/dental-management-software.png";

export default function DentalManagementSoftware() {
  const features = [
    {
      icon: <Users className="w-6 h-6 text-emerald-600" />,
      title: "Patient Records",
      description: "Secure, centralized digital records for your entire patient base with quick search and history tracking."
    },
    {
      icon: <Clock className="w-6 h-6 text-emerald-600" />,
      title: "Smart Scheduling",
      description: "Avoid double bookings and manage your clinic's daily calendar with intelligent scheduling tools."
    },
    {
      icon: <Zap className="w-6 h-6 text-emerald-600" />,
      title: "Automated Billing",
      description: "Streamline your finances with automated invoicing, payment tracking, and robust reporting."
    },
    {
      icon: <Shield className="w-6 h-6 text-emerald-600" />,
      title: "Data Security",
      description: "Bank-grade encryption ensures all your sensitive clinic and patient data remains protected."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-50 via-white to-white" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-50 border border-emerald-100 text-emerald-700 text-sm font-medium mb-8"
            >
              <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
              PrimuxCare Product
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight mb-8"
            >
              Modernize Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Dental Clinic</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600 mb-10 leading-relaxed"
            >
              The all-in-one platform designed specifically for dental practices. Manage patient records, schedule appointments, and streamline billing effortlessly.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <a
                href="https://hospital-frontend-pl3b.vercel.app/login"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-emerald-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              >
                Register & Use Software
                <ArrowRight className="w-5 h-5" />
              </a>
              <button
                onClick={() => document.getElementById("features").scrollIntoView({ behavior: "smooth" })}
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-700 border border-gray-200 px-8 py-4 rounded-xl font-semibold hover:bg-gray-50 hover:border-gray-300 transition-all duration-200"
              >
                Explore Features
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Image Section */}
      <section className="pb-20 relative z-20 -mt-10 sm:-mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-2xl border border-gray-200/50 bg-white shadow-2xl p-2 sm:p-4 bg-white/50 backdrop-blur-xl"
          >
            <img
              src={dentalImage}
              alt="Dental Management Software Dashboard"
              className="w-full rounded-xl shadow-sm border border-gray-100 object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Everything You Need to Run Your Clinic</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Built with dental professionals in mind, our platform provides powerful tools to eliminate administrative friction.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-emerald-900">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 mix-blend-overlay"></div>
        </div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Want to manage your clinic smartly with more efficiency?
            </h2>
            <p className="text-emerald-100 text-lg mb-10 max-w-2xl mx-auto">
              Join hundreds of dental professionals who have transformed their clinic operations with our digital management software.
            </p>
            <a
              href="https://hospital-frontend-pl3b.vercel.app/login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-emerald-900 px-8 py-4 rounded-xl font-bold hover:bg-emerald-50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              Click Here to Register Now
              <ArrowRight className="w-5 h-5 text-emerald-600" />
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
