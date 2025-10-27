import { Target, Heart, Zap } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Innovation First",
    description: "Pioneering healthcare technology that sets new industry standards",
  },
  {
    icon: Heart,
    title: "Patient-Centered",
    description: "Putting patient needs and experiences at the heart of everything we do",
  },
  {
    icon: Zap,
    title: "Rapid Impact",
    description: "Delivering measurable improvements in healthcare outcomes quickly",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-in fade-in slide-in-from-left duration-700">
            <h2 className="text-4xl md:text-5xl font-bold">
              Our <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Mission</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              At PrimuxCare, we believe healthcare should be accessible, efficient, and personalized. 
              We're leveraging cutting-edge technology to bridge gaps in healthcare delivery and empower 
              both patients and providers.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our platform integrates telemedicine, AI diagnostics, and comprehensive health analytics 
              to create a seamless healthcare experience that improves outcomes while reducing costs.
            </p>
            <div className="pt-4">
              <div className="inline-flex items-center gap-2 text-primary font-semibold">
                <div className="w-12 h-1 bg-gradient-to-r from-primary to-secondary rounded-full" />
                Trusted by Healthcare Providers Worldwide
              </div>
            </div>
          </div>

          <div className="space-y-6 animate-in fade-in slide-in-from-right duration-700 delay-200">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="flex gap-4 p-6 rounded-xl bg-card border border-border hover:shadow-[var(--shadow-elegant)] transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
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
