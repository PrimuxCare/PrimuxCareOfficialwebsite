import React, { useMemo, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import heroImage from "../assets/hero-health.jpg";
import SEO from "../components/SEO";

export default function LearnMore() {
  const { topicId } = useParams();
  const navigate = useNavigate();
  const heroRef = useRef(null);

  const deepDiveTopics = [
    {
      id: "telehealth",
      title: "Telehealth Platforms",
      description:
        "PrimuxCare offers a secure, modern telehealth suite that enables virtual consultations, appointment scheduling, triage, and remote patient monitoring.",
      features: [
        "HD video consultations with encrypted sessions",
        "Remote patient monitoring dashboards",
        "Digital prescriptions and follow-up notes",
        "Appointment management and reminders",
      ],
    },
    {
      id: "ai-automation",
      title: "AI & Automation Tools",
      description:
        "Our intelligent automation tools streamline hospital workflows by eliminating repetitive tasks, reducing human error, and improving productivity.",
      features: [
        "AI-driven triage and symptom analysis",
        "Automated patient intake & digital form processing",
        "Smart workflow routing for hospital departments",
        "Predictive scheduling using machine learning",
      ],
    },
    {
      id: "data-analytics",
      title: "Healthcare Data Analytics",
      description:
        "PrimuxCare transforms raw hospital data into meaningful insights, helping organizations track performance, forecast patient loads, and improve decisions.",
      features: [
        "Customizable clinical and operational dashboards",
        "Predictive analytics for patient inflow and risk scoring",
        "Real-time performance tracking",
        "Automated reports for management teams",
      ],
    },
    {
      id: "ehr-integration",
      title: "Electronic Health Record (EHR) Integration",
      description:
        "We integrate seamlessly with existing EHR systems, centralizing patient info and reducing data fragmentation.",
      features: [
        "Smooth integration with major EHR platforms",
        "Centralized patient data access",
        "Secure data sharing between departments",
        "Reduced duplication of tests and documentation",
      ],
    },
    {
      id: "hospital-automation",
      title: "Hospital Automation & Smart Facility Tools",
      description:
        "PrimuxCare supports automated hospital management — from digital queues to smart bed allocation and inventory monitoring.",
      features: [
        "Digital queue and virtual waiting rooms",
        "Automated bed/room allocation",
        "Smart pharmacy & inventory monitoring",
        "Real-time patient flow tracking",
      ],
    },
    {
      id: "patient-engagement",
      title: "Patient Engagement Tools",
      description:
        "We help hospitals stay connected with patients through mobile-friendly tools, reminders, wellness education, and digital communication channels.",
      features: [
        "Patient portal and health education resources",
        "Medication reminders and follow-up alerts",
        "Secure messaging between patients and providers",
        "Feedback and satisfaction surveys",
      ],
    },
  ];

  // Get current topic
  const topic = useMemo(
    () => deepDiveTopics.find((t) => t.id === topicId) || deepDiveTopics[0],
    [topicId]
  );

  // Scroll to top when topic changes
  useEffect(() => {
    if (heroRef.current) {
      heroRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [topicId]);

  return (
    <div className="bg-white">
      <SEO title={`${topic.title} | PrimuxCare`} description={topic.description} />

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={topic.id} // re-mount on topic change
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Hero Section */}
          <section ref={heroRef} className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-teal-50">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  {topic.title} <span className="text-emerald-600">by PrimuxCare</span>
                </h1>
                <p className="text-xl text-gray-700 leading-relaxed">{topic.description}</p>

                {/* Topic navigation buttons */}
                <div className="mt-6 flex flex-wrap gap-3">
                  {deepDiveTopics.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => navigate(`/learn-more/${t.id}`)}
                      className={`px-3 py-1 rounded-full border ${
                        t.id === topic.id
                          ? "bg-emerald-600 text-white"
                          : "border-emerald-400 text-emerald-600 hover:bg-emerald-100"
                      } transition-all`}
                    >
                      {t.title}
                    </button>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="aspect-square rounded-2xl bg-emerald-100 opacity-20 absolute inset-0 blur-3xl"></div>
                <img
                  src={heroImage}
                  alt={topic.title}
                  className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
                />
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
              Key Features
            </h2>

            <ul className="list-disc pl-5 space-y-2 text-gray-700 max-w-3xl mx-auto">
              {topic.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>

            {/* Clickable cards for each topic */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
              {deepDiveTopics.map((t) => (
                <div
                  key={t.id}
                  onClick={() => navigate(`/learn-more/${t.id}`)}
                  className="bg-emerald-50 p-6 rounded-xl shadow-md hover:shadow-xl transition-all cursor-pointer border border-emerald-100"
                >
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900">{t.title}</h3>
                  <p className="text-gray-700">{t.description}</p>
                </div>
              ))}
            </div>
          </section>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
