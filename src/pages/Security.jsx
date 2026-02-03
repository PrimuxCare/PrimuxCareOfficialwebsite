import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  Database,
  Cloud,
  FileCheck,
  UserCheck,
} from "lucide-react";

const securityFeatures = [
  {
    icon: ShieldCheck,
    title: "HIPAA & GDPR Awareness",
    description:
      "Our systems are designed with international healthcare data protection standards in mind, ensuring patient data privacy and regulatory alignment.",
  },
  {
    icon: Lock,
    title: "End-to-End Encryption",
    description:
      "All sensitive healthcare data is encrypted in transit and at rest using modern cryptographic standards.",
  },
  {
    icon: Database,
    title: "Secure Data Storage",
    description:
      "Patient and hospital records are stored in hardened, access-controlled environments with continuous monitoring.",
  },
  {
    icon: UserCheck,
    title: "Role-Based Access Control",
    description:
      "Only authorized personnel can access sensitive information, based on clearly defined roles and permissions.",
  },
  {
    icon: Cloud,
    title: "Reliable Cloud Infrastructure",
    description:
      "We deploy on trusted cloud platforms with built-in redundancy, backups, and disaster recovery strategies.",
  },
  {
    icon: FileCheck,
    title: "Audit & Monitoring",
    description:
      "System activity is logged and monitored to detect unusual behavior and ensure accountability across platforms.",
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

export default function Security() {
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
            Security at{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
              PrimuxCare
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            We understand that healthcare data is highly sensitive. That’s why
            security, privacy, and reliability are embedded into every solution
            we build.
          </motion.p>
        </motion.div>

        {/* Security Features */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
        >
          {securityFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
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

        {/* Trust Statement */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl p-12 text-white text-center"
        >
          <h2 className="text-3xl font-bold mb-4">
            Built for Trust. Designed for Healthcare.
          </h2>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed">
            Whether you’re a hospital, clinic, or digital health startup,
            PrimuxCare is committed to protecting your data and earning your
            trust through secure, transparent, and resilient technology.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
