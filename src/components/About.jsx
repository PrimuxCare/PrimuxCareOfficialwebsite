import { Target, Heart, Zap } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Precision Care",
    description: "Delivering accurate and timely healthcare solutions using advanced technology.",
  },
  {
    icon: Heart,
    title: "Patient First",
    description: "Empowering patients with personalized and accessible healthcare experiences.",
  },
  {
    icon: Zap,
    title: "Innovative Solutions",
    description: "Leveraging AI, telemedicine, and analytics to improve outcomes efficiently.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div className="space-y-6 animate-in fade-in slide-in-from-left duration-700">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Our Mission</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              At PrimuxCare, we believe healthcare should be accessible, efficient, and personalized.
              We're leveraging cutting-edge technology to bridge gaps in healthcare delivery and empower
              both patients and providers.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our platform integrates telemedicine, AI diagnostics, and comprehensive health analytics
              to create a seamless healthcare experience that improves outcomes while reducing costs.
            </p>
            <div className="pt-4">
              <div className="inline-flex items-center gap-2 text-blue-600 font-semibold">
                <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full" />
                Trusted by Healthcare Providers Worldwide
              </div>
            </div>
          </div>

          {/* Right Side */}
          <div className="space-y-6 animate-in fade-in slide-in-from-right duration-700 delay-200">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="flex gap-4 p-6 rounded-xl bg-white border border-gray-200 hover:shadow-xl transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-gray-900">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
