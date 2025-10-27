import { Stethoscope, Activity, Users, Shield, Clock, Brain } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    icon: Stethoscope,
    title: "Telemedicine",
    description: "Connect with healthcare providers remotely through secure video consultations and digital health monitoring.",
  },
  {
    icon: Activity,
    title: "Health Analytics",
    description: "Advanced data analytics and AI-powered insights to optimize treatment plans and patient outcomes.",
  },
  {
    icon: Users,
    title: "Patient Portal",
    description: "Comprehensive digital platform for managing appointments, medical records, and care coordination.",
  },
  {
    icon: Shield,
    title: "Data Security",
    description: "Enterprise-grade security and HIPAA-compliant infrastructure protecting your sensitive health information.",
  },
  {
    icon: Clock,
    title: "24/7 Monitoring",
    description: "Continuous remote patient monitoring with real-time alerts and proactive care interventions.",
  },
  {
    icon: Brain,
    title: "AI Diagnostics",
    description: "Cutting-edge artificial intelligence supporting clinical decision-making and early disease detection.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Solutions</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive digital health services designed to revolutionize patient care and healthcare delivery
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="group hover:shadow-[var(--shadow-elegant)] transition-all duration-300 hover:-translate-y-1 border-border animate-in fade-in slide-in-from-bottom"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-6 space-y-4">
                <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
