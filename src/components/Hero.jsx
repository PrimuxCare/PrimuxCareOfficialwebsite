import React from "react";
import { Button } from "../components/ui/button";
import heroImage from "../assets/hero-health.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-white">
      {/* Hero gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-100 via-teal-100 to-blue-50 z-0" />

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-in fade-in slide-in-from-left duration-700">
            <div className="inline-block">
              <span className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold border border-blue-200">
                Powering Digital Health Innovation
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Transforming Healthcare Through{" "}
              <span className="bg-gradient-to-r from-blue-500 to-teal-400 bg-clip-text text-transparent">
                Technology
              </span>
            </h1>

            <p className="text-xl text-gray-700 leading-relaxed">
              PrimuxCare combines cutting-edge digital solutions with compassionate care 
              to deliver accessible, efficient, and patient-centered healthcare experiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="hero"
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-teal-400 text-white hover:from-blue-600 hover:to-teal-500"
              >
                Explore Solutions
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border border-gray-300 text-gray-800 hover:bg-gray-100"
              >
                Learn More
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold text-blue-500">500K+</div>
                <div className="text-sm text-gray-500">Patients Served</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-500">98%</div>
                <div className="text-sm text-gray-500">Satisfaction Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-500">24/7</div>
                <div className="text-sm text-gray-500">Support Available</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-in fade-in slide-in-from-right duration-700 delay-200">
            <div className="relative rounded-2xl overflow-hidden shadow-xl">
              <img
                src={heroImage}
                alt="Healthcare professionals using innovative digital technology"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent" />
            </div>
            <div className="absolute -z-10 top-10 -right-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl" />
            <div className="absolute -z-10 -bottom-10 -left-10 w-72 h-72 bg-teal-200 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
