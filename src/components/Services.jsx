import { motion } from "framer-motion";
import {
  Video,
  BarChart3,
  Building2,
  Shield,
  Workflow,
  Brain,
} from "lucide-react";

const solutions = [
  {
    icon: Building2,
    title: "Hospital Management Systems",
    description:
      "End-to-end clinical workflows, from appointment scheduling and electronic medical records (EMR) to advanced billing modules.",
  },
  {
    icon: Video,
    title: "Telehealth Platforms",
    description:
      "Secure, high-definition video consultations enabling doctors to deliver quality care remotely, expanding accessibility for patients.",
  },
  {
    icon: BarChart3,
    title: "Health Data Analytics",
    description:
      "Transform clinical data into actionable insights. Real-time dashboards to track hospital performance, patient outcomes, and resource utilization.",
  },
  {
    icon: Brain,
    title: "AI-Powered Diagnostics",
    description:
      "Integrate intelligent algorithms to assist in diagnostics, automate triage, and predict patient health trends efficiently.",
  },
  {
    icon: Workflow,
    title: "Clinical Automation",
    description:
      "Streamline repetitive tasks such as prescription renewals, lab result notifications, and follow-up scheduling, giving time back to providers.",
  },
  {
    icon: Shield,
    title: "Secure Infrastructure",
    description:
      "Enterprise-grade security protocols ensuring absolute HIPAA compliance and the uncompromising safety of sensitive health records.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Services() {
  return (
    <section id="services" className="relative py-28 px-4 sm:px-6 lg:px-8 bg-gray-50/50">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-1.5 bg-white rounded-full border border-gray-200 shadow-sm mb-6"
          >
            <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">What We Do</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
          >
            Comprehensive Digital <br/> Healthcare Solutions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            We engineer sophisticated, scalable software that modernizes medical practice, optimizes clinical efficiency, and elevates the standard of patient care.
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 overflow-hidden"
              >
                {/* Hover gradient background effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/50 to-teal-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Top accent line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-teal-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>

                <div className="relative z-10">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-xl mb-6 shadow-inner group-hover:scale-110 transition-transform duration-300">
                    <Icon size={28} className="text-emerald-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors">
                    {solution.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
