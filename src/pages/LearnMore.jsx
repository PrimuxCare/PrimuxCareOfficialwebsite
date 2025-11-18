import React from "react";
import heroImage from "../assets/hero-health.jpg";

export default function LearnMore() {
  const deepDiveTopics = [
    {
      title: "Telehealth Platforms",
      description:
        "PrimuxCare offers a secure, modern telehealth suite that enables virtual consultations, appointment scheduling, triage, and remote patient monitoring. With encrypted communication channels and high-quality video, healthcare providers can deliver patient-centered care from anywhere. Clinics also benefit from automated reminders, digital documentation, and real-time follow-up tools.",
      features: [
        "HD video consultations with encrypted sessions",
        "Remote patient monitoring dashboards",
        "Digital prescriptions and follow-up notes",
        "Appointment management and reminders",
      ],
    },
    {
      title: "AI & Automation Tools",
      description:
        "Our intelligent automation tools streamline hospital workflows by eliminating repetitive tasks, reducing human error, and improving productivity. AI-driven triage, automated form handling, and predictive scheduling allow healthcare teams to focus more on patient care and less on administrative tasks.",
      features: [
        "AI-driven triage and symptom analysis",
        "Automated patient intake & digital form processing",
        "Smart workflow routing for hospital departments",
        "Predictive scheduling using machine learning",
      ],
    },
    {
      title: "Healthcare Data Analytics",
      description:
        "PrimuxCare transforms raw hospital data into meaningful insights. Our analytics platform helps healthcare organizations track performance, identify trends, forecast patient loads, and improve clinical and operational decisions. Custom dashboards give leaders a clear view of quality metrics, staff efficiency, and financial patterns.",
      features: [
        "Customizable clinical and operational dashboards",
        "Predictive analytics for patient inflow and risk scoring",
        "Real-time performance tracking",
        "Automated reports for management teams",
      ],
    },
    {
      title: "Electronic Health Record (EHR) Integration",
      description:
        "We integrate seamlessly with existing EHR systems, helping healthcare providers centralize patient information and reduce data fragmentation. Our system improves workflow continuity between departments and ensures secure, accurate, and accessible patient health records.",
      features: [
        "Smooth integration with major EHR platforms",
        "Centralized patient data access",
        "Secure data sharing between departments",
        "Reduced duplication of tests and documentation",
      ],
    },
    {
      title: "Hospital Automation & Smart Facility Tools",
      description:
        "PrimuxCare supports automated hospital management — from digital queues to smart bed allocation and inventory monitoring. These tools minimize waiting time, prevent resource waste, and create smooth hospital experiences for both patients and healthcare teams.",
      features: [
        "Digital queue and virtual waiting rooms",
        "Automated bed/room allocation",
        "Smart pharmacy & inventory monitoring",
        "Real-time patient flow tracking",
      ],
    },
    {
      title: "Patient Engagement Tools",
      description:
        "We help hospitals stay connected with their patients through mobile-friendly tools, reminders, wellness education, and digital communication channels. These features increase patient satisfaction and improve overall health outcomes.",
      features: [
        "Patient portal and health education resources",
        "Medication reminders and follow-up alerts",
        "Secure messaging between patients and providers",
        "Feedback and satisfaction surveys",
      ],
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
              Discover the technology powering the future of healthcare — built to enhance efficiency,
              improve patient outcomes, and support modern hospitals.
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

      {/* Deep Dive Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
          Explore Our Solutions in Detail
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {deepDiveTopics.map((topic, idx) => (
            <div
              key={idx}
              className="bg-emerald-50 p-8 rounded-xl shadow-md hover:shadow-xl transition-all border border-emerald-100"
            >
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">{topic.title}</h3>
              <p className="text-gray-700 mb-4">{topic.description}</p>

              <ul className="list-disc pl-5 space-y-2 text-gray-700">
                {topic.features.map((feature, fIdx) => (
                  <li key={fIdx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
