import React from "react";
import { Stethoscope, Activity, Users, Shield, Clock, Brain } from "lucide-react";
import { Card, CardContent } from "./ui/card"; // adjust path if needed

const services = [
  {
    icon: Stethoscope,
    title: "Telemedicine",
    description: "Connect with healthcare providers remotely through secure video consultations.",
  },
  {
    icon: Activity,
    title: "Health Monitoring",
    description: "Track your vital signs, fitness, and activity levels in real time.",
  },
  {
    icon: Users,
    title: "Care Coordination",
    description: "Manage medical records, appointments, and care coordination efficiently.",
  },
  {
    icon: Shield,
    title: "Data Security",
    description: "Ensure your medical information is protected with industry-standard security.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Access support and healthcare guidance anytime you need it.",
  },
  {
    icon: Brain,
    title: "AI Diagnostics",
    description: "Leverage AI tools for faster and more accurate health assessments.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Our Solutions</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital health services designed to revolutionize patient care and healthcare delivery.
          </p>
        </div>

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
                <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
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
