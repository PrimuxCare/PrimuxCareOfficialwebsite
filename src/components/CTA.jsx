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
      className="py-24 bg-gradient-to-b from-white via-emerald-50 to-teal-50"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative rounded-3xl overflow-hidden shadow-lg"
        >
          {/* Soft background overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-400 opacity-10" />

          <div className="relative px-8 py-16 md:px-16 md:py-20 text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Ready to Transform Your{" "}
              <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                Healthcare Experience?
              </span>
            </h2>

            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of healthcare providers and patients already
              experiencing the future of digital health with PrimuxCare.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              {/* Primary CTA */}
              <motion.button
                onClick={() => navigateWithScroll("/get-started")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                animate={{
                  boxShadow: [
                    "0 0 0px rgba(16,185,129,0.0)",
                    "0 0 24px rgba(16,185,129,0.35)",
                    "0 0 0px rgba(16,185,129,0.0)",
                  ],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="group bg-gradient-to-r from-emerald-600 to-teal-500 text-white px-8 py-4 rounded-lg flex items-center justify-center gap-2 font-semibold shadow-md"
              >
                Get Started Today
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </motion.button>

              {/* Secondary CTA */}
              <motion.button
                onClick={() => navigateWithScroll("/contact-sales")}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="group border-2 border-gray-300 text-gray-800 px-8 py-4 rounded-lg hover:border-emerald-500 hover:text-emerald-600 transition-all flex items-center justify-center gap-2 font-semibold"
              >
                <Mail className="mr-2" />
                Contact Sales
              </motion.button>
            </div>

            {/* Trust indicators */}
            <div className="pt-8 flex flex-wrap justify-center gap-8 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                No Credit Card Required
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
                Free 30-Day Trial
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500" />
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
