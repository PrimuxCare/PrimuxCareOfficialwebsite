import React from "react";
import { Stethoscope, Activity, Users, Shield, Clock, Brain } from "lucide-react";
import { Card, CardContent } from "./ui/card"; // adjust path if needed

const services = [
  {
    icon: Stethoscope,
    title: "Telehealth Platforms",
    description:
      "We build secure, user-friendly telemedicine systems that connect patients and doctors from anywhere, anytime.",
  },
  {
    icon: Activity,
    title: "Health Data Analytics",
    description:
      "Transform hospital and patient data into actionable insights with smart analytics dashboards and reports.",
  },
  {
    icon: Users,
    title: "Hospital Management Systems",
    description:
      "Streamline operations, manage appointments, and improve care coordination through efficient hospital software.",
  },
  {
    icon: Shield,
    title: "Secure Health Infrastructure",
    description:
      "All our systems are built with enterprise-grade data protection to keep patient records safe and compliant.",
  },
  {
    icon: Clock,
    title: "Automation & Workflow Tools",
    description:
      "Automate routine healthcare processes to save time, reduce errors, and improve overall service delivery.",
  },
  {
    icon: Brain,
    title: "AI-Powered Solutions",
    description:
      "Leverage artificial intelligence for diagnostics, patient triage, and predictive healthcare insights.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Our Solutions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            At PrimuxCare, we design and develop digital solutions that empower healthcare providers,
            enhance patient experience, and modernize medical practice.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-200 animate-in fade-in slide-in-from-bottom"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 space-y-4">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
