import React from "react";
import { CheckCircle } from "lucide-react";

const featuresList = [
  {
    title: "Patient Management",
    description:
      "Easily track patient records, appointments, and medical history in a secure, centralized system.",
  },
  {
    title: "Telemedicine",
    description:
      "Conduct virtual consultations with video and chat, integrated directly with patient records.",
  },
  {
    title: "Analytics Dashboard",
    description:
      "Visualize clinic or hospital performance metrics, patient flow, and treatment outcomes in real-time.",
  },
  {
    title: "Automated Notifications",
    description:
      "Send appointment reminders, follow-up alerts, and prescription notifications automatically.",
  },
];

const Features = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:py-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">
          Platform <span className="text-emerald-500">Features</span>
        </h1>
        <p className="text-gray-700 text-center mb-12">
          Explore the powerful features that make PrimuxCare the ultimate digital health platform for hospitals and clinics.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {featuresList.map((feature) => (
            <div
              key={feature.title}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition"
            >
              <div className="flex items-center mb-4">
                <CheckCircle className="text-green-500 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
              </div>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
