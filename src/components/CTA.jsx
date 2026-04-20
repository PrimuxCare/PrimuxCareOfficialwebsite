import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CTA = () => {
  const navigate = useNavigate();

  const navigateWithScroll = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section
      id="contact"
      className="py-24 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative rounded-[2.5rem] overflow-hidden shadow-2xl bg-slate-900 border border-slate-800"
        >
          {/* Decorative background gradients */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>

          <div className="relative z-10 px-8 py-16 md:px-16 md:py-24 text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Ready to Transform Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                Healthcare Experience?
              </span>
            </h2>

            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Join leading healthcare providers and forward-thinking clinics already experiencing the future of digital health with PrimuxCare.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center items-center pt-4">
              {/* Primary CTA */}
              <motion.button
                onClick={() => navigateWithScroll("/get-started")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="group bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-8 py-4 rounded-xl flex items-center justify-center gap-2 font-semibold shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all"
              >
                Get Started Today
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </motion.button>

              {/* Secondary CTA */}
              <motion.button
                onClick={() => navigateWithScroll("/contact-sales")}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group border border-slate-700 bg-slate-800/50 text-white px-8 py-4 rounded-xl hover:bg-slate-800 hover:border-slate-600 transition-all flex items-center justify-center gap-2 font-semibold backdrop-blur-sm"
              >
                <Mail className="mr-2 text-slate-400 group-hover:text-emerald-400 transition-colors" />
                Contact Sales
              </motion.button>
            </div>

            {/* Trust indicators */}
            <div className="pt-10 flex flex-wrap justify-center gap-8 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                No Credit Card Required
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Free 30-Day Trial
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                Cancel Anytime
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
