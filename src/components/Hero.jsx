import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import heroImage from "../assets/modern_health_hero.png";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  const navigateWithScroll = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.9, ease: "easeOut" },
    },
  };

  return (
    <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-teal-50/50 via-white to-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-40 right-0 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-20 left-1/2 w-96 h-96 bg-cyan-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          {/* Text Content */}
          <motion.div variants={containerVariants} className="space-y-8">
            <motion.div variants={itemVariants} className="inline-block px-4 py-1.5 bg-emerald-100/50 rounded-full border border-emerald-200/50">
              <span className="text-emerald-700 font-medium text-sm tracking-wide">Transforming Healthcare Delivery</span>
            </motion.div>

            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-[1.1]"
            >
              Next-Generation Healthcare, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Redefined.</span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-xl text-gray-600 leading-relaxed max-w-lg"
            >
              Seamless digital health solutions designed for modern hospitals, clinics, and forward-thinking healthcare professionals.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-500 leading-relaxed max-w-lg"
            >
              From intelligent hospital management systems to patient-centered telehealth platforms — we make healthcare smarter, faster, and infinitely more connected.
            </motion.p>

            {/* Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <button
                onClick={() => navigateWithScroll("/get-started")}
                className="group bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-xl hover:from-emerald-700 hover:to-teal-700 transition-all hover:scale-[1.02] flex items-center justify-center gap-3 font-semibold shadow-xl shadow-emerald-500/25"
              >
                Get Started
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              <button
                onClick={() => navigateWithScroll("/learn-more")}
                className="group bg-white border border-gray-200 text-gray-700 px-8 py-4 rounded-xl hover:bg-gray-50 hover:border-gray-300 transition-all flex items-center justify-center gap-3 font-semibold shadow-sm"
              >
                <div className="bg-emerald-100 p-1.5 rounded-full text-emerald-600 group-hover:scale-110 transition-transform">
                  <Play size={16} fill="currentColor" />
                </div>
                See How It Works
              </button>
            </motion.div>

            {/* Social Proof Stats */}
            <motion.div variants={itemVariants} className="pt-8 grid grid-cols-3 gap-6 border-t border-gray-100">
               <div>
                 <div className="text-2xl font-bold text-gray-900">50+</div>
                 <div className="text-sm text-gray-500 mt-1">Partner Clinics</div>
               </div>
               <div>
                 <div className="text-2xl font-bold text-gray-900">1M+</div>
                 <div className="text-sm text-gray-500 mt-1">Patient Records</div>
               </div>
               <div>
                 <div className="text-2xl font-bold text-gray-900">99.9%</div>
                 <div className="text-sm text-gray-500 mt-1">Uptime</div>
               </div>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div variants={imageVariants} className="relative">
            {/* Decorative background elements for image */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-400 to-teal-300 rounded-[2rem] blur-2xl opacity-30 animate-pulse"></div>
            
            <div className="relative rounded-[2rem] p-2 bg-white/50 backdrop-blur-sm border border-white/60 shadow-2xl">
               <img
                 src={heroImage}
                 alt="Healthcare professionals using digital technology"
                 className="rounded-[1.5rem] w-full h-auto object-cover shadow-inner"
               />
               
               {/* Floating Badges */}
               <div className="absolute -top-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3 animate-bounce" style={{ animationDuration: '3s' }}>
                  <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-sm font-bold text-gray-900">Data Synced</div>
                    <div className="text-xs text-gray-500">Just now</div>
                  </div>
               </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
