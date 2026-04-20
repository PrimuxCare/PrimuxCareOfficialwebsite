import React, { useMemo, useEffect, useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import heroImage from "../assets/modern_health_hero.png";
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
      title: "EHR Integration",
      description:
        "We integrate seamlessly with existing Electronic Health Record (EHR) systems, centralizing patient info and reducing data fragmentation.",
      features: [
        "Smooth integration with major EHR platforms",
        "Centralized patient data access",
        "Secure data sharing between departments",
        "Reduced duplication of tests and documentation",
      ],
    },
    {
      id: "hospital-automation",
      title: "Smart Facility Tools",
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
      title: "Patient Engagement",
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
    <div className="bg-white min-h-screen">
      <SEO title={`${topic.title} | PrimuxCare`} description={topic.description} />

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={topic.id} // re-mount on topic change
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          {/* Hero Section */}
          <section ref={heroRef} className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-emerald-50/60 via-white to-white overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 -mr-48 -mt-48 w-96 h-96 rounded-full bg-emerald-200/40 blur-3xl mix-blend-multiply pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 -ml-48 -mb-48 w-96 h-96 rounded-full bg-teal-200/40 blur-3xl mix-blend-multiply pointer-events-none"></div>

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
              <div className="space-y-8">
                <div className="inline-block px-4 py-1.5 bg-emerald-100/50 rounded-full border border-emerald-200/50">
                  <span className="text-emerald-700 font-medium text-sm tracking-wide">Deep Dive</span>
                </div>
                
                <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 leading-[1.15]">
                  {topic.title}
                </h1>
                
                <p className="text-xl text-gray-600 leading-relaxed max-w-lg">
                  {topic.description}
                </p>

                {/* Topic navigation pills */}
                <div className="pt-4 flex flex-wrap gap-3">
                  {deepDiveTopics.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => navigate(`/learn-more/${t.id}`)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                        t.id === topic.id
                          ? "bg-gradient-to-r from-emerald-600 to-teal-500 text-white shadow-md shadow-emerald-500/20"
                          : "bg-white border border-gray-200 text-gray-600 hover:border-emerald-300 hover:text-emerald-600 hover:bg-emerald-50/50"
                      }`}
                    >
                      {t.title}
                    </button>
                  ))}
                </div>
              </div>

              <div className="relative">
                {/* Image background decoration */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-emerald-300 to-teal-200 rounded-[2rem] blur-2xl opacity-20"></div>
                <div className="relative rounded-[2rem] p-2 bg-white/50 backdrop-blur-sm border border-white/60 shadow-2xl">
                  <img
                    src={heroImage}
                    alt={topic.title}
                    className="rounded-[1.5rem] w-full h-auto object-cover shadow-inner"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50/50 border-t border-gray-100">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                  Core Capabilities
                </h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Everything you need to deliver exceptional care and streamline your operations.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-x-12 gap-y-6 max-w-4xl mx-auto mb-24">
                {topic.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-sm hover:border-emerald-200 transition-colors">
                    <div className="mt-1 flex-shrink-0 text-emerald-500">
                      <CheckCircle2 size={24} />
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed">{feature}</p>
                  </div>
                ))}
              </div>

              {/* Other Topics Grid */}
              <div className="pt-20 border-t border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-10 text-center">Explore Other Solutions</h3>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {deepDiveTopics.filter(t => t.id !== topic.id).map((t) => (
                    <div
                      key={t.id}
                      onClick={() => navigate(`/learn-more/${t.id}`)}
                      className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 cursor-pointer relative overflow-hidden flex flex-col h-full"
                    >
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-teal-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-out"></div>
                      
                      <h4 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-emerald-700 transition-colors">{t.title}</h4>
                      <p className="text-gray-600 flex-grow mb-6">{t.description.substring(0, 100)}...</p>
                      
                      <div className="mt-auto flex items-center text-emerald-600 font-medium group-hover:translate-x-2 transition-transform">
                        Learn more <ArrowRight size={18} className="ml-2" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
