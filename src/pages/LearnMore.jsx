import React from "react";
import heroImage from "../assets/hero-health.jpg";
import { Video, BarChart3, Shield, Workflow, Brain } from "lucide-react";

export default function LearnMore() {
  const deepDiveTopics = [
    {
      title: "Telehealth Platforms",
      description:
        "Secure, user-friendly telemedicine systems connecting patients and doctors anywhere, anytime.",
      details: [
        "Video consultations with real-time health monitoring",
        "Appointment scheduling and reminders",
        "Patient record access and secure messaging",
      ],
      icon: Video,
    },
    {
      title: "AI & Automation Tools",
      description:
        "Leverage AI and workflow automation to optimize healthcare operations and improve patient outcomes.",
      details: [
        "Automated patient triage and diagnostics",
        "Predictive analytics for hospital resource planning",
        "Streamlined administrative workflows",
      ],
      icon: Brain,
    },
    {
      title: "Data Analytics",
      description:
        "Turn hospital and patient data into actionable insights with smart dashboards and reporting.",
      details: [
        "Real-time reporting on patient outcomes",
        "Custom dashboards for hospital departments",
        "Data-driven decision-making for management",
      ],
      icon: BarChart3,
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-teal-50">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Learn More About <span className="text-emerald-600">PrimuxCare</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Dive deeper into how PrimuxCare is transforming healthcare with innovative digital solutions.
            </p>
          </div>
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-emerald-100 opacity-20 absolute inset-0 blur-3xl"></div>
            <img
              src={heroImage}
              alt="Healthcare professionals using digital technology"
              className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </section>

      {/* Detailed Solutions Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-16">
          Explore Our Solutions in Detail
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {deepDiveTopics.map((topic, idx) => {
            const Icon = topic.icon;
            return (
              <div
                key={idx}
                className="bg-emerald-50 p-8 rounded-xl shadow-md hover:shadow-lg transition-all"
              >
                <div className="flex items-center justify-center w-14 h-14 bg-emerald-100 rounded-lg mb-4">
                  <Icon size={28} className="text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{topic.title}</h3>
                <p className="text-gray-700 mb-4">{topic.description}</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  {topic.details.map((detail, i) => (
                    <li key={i}>{detail}</li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
