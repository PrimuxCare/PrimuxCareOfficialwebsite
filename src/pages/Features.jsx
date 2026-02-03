import { motion } from "framer-motion";
import {
  Monitor,
  Users,
  Calendar,
  ShieldCheck,
  BarChart3,
  Cpu,
} from "lucide-react";

const features = [
  {
    icon: Monitor,
    title: "Hospital Management Systems",
    description:
      "Centralized platforms to manage appointments, records, billing, and clinical workflows efficiently.",
  },
  {
    icon: Users,
    title: "Patient-Centered Applications",
    description:
      "Intuitive web and mobile apps that improve patient engagement, accessibility, and continuity of care.",
  },
  {
    icon: Calendar,
    title: "Smart Scheduling & Automation",
    description:
      "Reduce wait times and manual work with intelligent scheduling and automated healthcare workflows.",
  },
  {
    icon: ShieldCheck,
    title: "Enterprise-Grade Security",
    description:
      "Built with healthcare data protection principles, ensuring privacy, access control, and reliability.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics & Insights",
    description:
      "Transform healthcare data into actionable insights for better clinical and operational decisions.",
  },
  {
    icon: Cpu,
    title: "AI & Intelligent Systems",
    description:
      "Leverage AI for triage, predictive analytics, and decision support in modern healthcare environments.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function Features() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white via-emerald-50 to-teal-50 pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
          >
            Powerful Features for{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
              Modern Healthcare
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            PrimuxCare delivers robust digital health features designed to
            streamline operations, enhance patient experience, and empower
            healthcare providers.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-lg bg-emerald-100 flex items-center justify-center mb-5">
                  <Icon className="text-emerald-600" size={28} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl p-12 text-white text-center"
        >
          <h2 className="text-3xl font-bold mb-4">
            Built to Scale with Your Healthcare Vision
          </h2>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed">
            Whether you’re a clinic, hospital, or digital health startup,
            PrimuxCare provides the tools you need to innovate, scale, and
            deliver exceptional care.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
