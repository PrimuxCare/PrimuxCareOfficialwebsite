import { Target, Heart, Zap } from "lucide-react";

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

const About = () => {
  return (
    <section id="about" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side */}
          <div className="space-y-6 animate-in fade-in slide-in-from-left duration-700">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              About PrimuxCare
            </h2>

            <p className="text-xl text-gray-600 leading-relaxed">
              PrimuxCare is a digital health innovation company dedicated to
              transforming healthcare delivery through technology. We partner
              with hospitals, clinics, and health startups to build intuitive,
              efficient, and patient-focused digital solutions.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              From hospital management systems and telehealth platforms to
              custom automation tools, we’re helping healthcare providers
              deliver better outcomes through smart digital transformation.
            </p>

            <div className="pt-4">
              <div className="inline-flex items-center gap-2 text-blue-600 font-semibold">
                <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-teal-400 rounded-full" />
                Trusted by Healthcare Innovators Worldwide
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
                  <h3 className="text-xl font-semibold text-gray-900">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Vision Highlight */}
        <div className="mt-20 text-center max-w-3xl mx-auto animate-in fade-in slide-in-from-bottom duration-700">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Vision
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            To lead the future of healthcare innovation in Africa and beyond —
            by empowering medical institutions with technology that simplifies
            practice, enhances collaboration, and delivers exceptional patient
            outcomes.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
