import { motion } from "framer-motion";
import { Target, Heart, Zap, TrendingUp } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Smart Healthcare Systems",
    description:
      "We design and build precise, efficient, and reliable digital solutions tailored for hospitals and clinics.",
  },
  {
    icon: Heart,
    title: "Patient-Centered Design",
    description:
      "Every product we create is built around the goal of improving patient care, comfort, and accessibility.",
  },
  {
    icon: Zap,
    title: "Innovation & Integration",
    description:
      "We harness AI, data analytics, and automation to connect healthcare processes and improve decision-making.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const visionVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const About = () => {
  return (
    <section
      id="about"
      className="py-24 bg-gradient-to-b from-white via-emerald-50 to-teal-50"
    >
      <div className="container mx-auto px-4">
        {/* Heading & Intro */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2
            variants={cardVariants}
            className="text-4xl md:text-5xl font-bold text-gray-900"
          >
            About{" "}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
              PrimuxCare
            </span>
          </motion.h2>

          <motion.p
            variants={cardVariants}
            className="text-xl text-gray-600 max-w-2xl mx-auto mt-4"
          >
            PrimuxCare is a digital health innovation company dedicated to
            transforming healthcare delivery through technology. We partner
            with hospitals, clinics, and health startups to build intuitive,
            efficient, and patient-focused digital solutions.
          </motion.p>

          <motion.p
            variants={cardVariants}
            className="text-lg text-gray-600 max-w-2xl mx-auto mt-2"
          >
            From hospital management systems and telehealth platforms to
            custom automation tools, we’re helping healthcare providers
            deliver better outcomes through smart digital transformation.
          </motion.p>

          <motion.div
            variants={cardVariants}
            className="pt-4 inline-flex items-center gap-2 text-emerald-600 font-semibold"
          >
            <div className="w-12 h-1 bg-gradient-to-r from-emerald-600 to-teal-500 rounded-full" />
            Trusted by Healthcare Innovators Worldwide
          </motion.div>
        </motion.div>

        {/* Value Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8 mb-20"
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              variants={cardVariants}
              className="flex flex-col items-center gap-4 p-6 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-emerald-200 transition-all duration-300"
            >
              <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-emerald-600 to-teal-500 flex items-center justify-center mb-4">
                <value.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 text-center">
                {value.title}
              </h3>
              <p className="text-gray-600 text-center">
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Vision Highlight */}
        <motion.div
          variants={visionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl p-12 text-center text-white"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
            <TrendingUp size={32} />
          </div>
          <h3 className="text-3xl font-bold mb-4">Our Vision</h3>
          <p className="text-lg max-w-3xl mx-auto leading-relaxed">
            To lead the future of healthcare innovation in Africa and beyond —
            by empowering medical institutions with technology that simplifies
            practice, enhances collaboration, and delivers exceptional patient
            outcomes.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
