import React from "react";
import { motion } from "framer-motion";
import { Zap, DownloadCloud } from "lucide-react";

const updatesList = [
  {
    title: "New Telehealth Module",
    description:
      "Connect doctors and patients more efficiently with our latest telehealth integration.",
    icon: Zap,
  },
  {
    title: "Enhanced Security Features",
    description:
      "We've added multi-factor authentication and better data encryption for all users.",
    icon: DownloadCloud,
  },
  {
    title: "Analytics Dashboard Upgrade",
    description:
      "View insights faster and more clearly with our redesigned health data dashboards.",
    icon: Zap,
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
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

export default function Updates() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-teal-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900"
          >
            Latest Updates
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto"
          >
            Stay up-to-date with the newest features, enhancements, and
            security improvements across all PrimuxCare platforms.
          </motion.p>
        </motion.div>

        {/* Updates Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {updatesList.map((update, index) => {
            const Icon = update.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-gradient-to-br from-emerald-600 to-teal-500 text-white">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {update.title}
                </h3>
                <p className="text-gray-600">{update.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
