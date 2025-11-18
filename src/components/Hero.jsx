import { ArrowRight, Play } from "lucide-react";
import heroImage from "../assets/hero-health.jpg";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate("/get-started");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleLearnMore = () => {
    navigate("/learn-more");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-teal-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Empowering Digital Health{" "}
              <span className="text-emerald-600">Innovation</span>
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed">
              Building the Future of Healthcare Technology
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              At PrimuxCare, we design and build digital health solutions — from hospital
              management systems to patient-centered web and mobile apps — that make healthcare
              smarter, faster, and more connected.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleGetStarted}
                className="group bg-emerald-600 text-white px-8 py-4 rounded-lg hover:bg-emerald-700 transition-all hover:scale-105 flex items-center justify-center gap-2 font-semibold shadow-md hover:shadow-lg"
              >
                Get Started
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              <button
                onClick={handleLearnMore}
                className="group border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-lg hover:bg-emerald-50 hover:text-emerald-700 transition-all flex items-center justify-center gap-2 font-semibold"
              >
                <Play
                  size={20}
                  className="group-hover:scale-110 transition-transform"
                />
                Learn More
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl bg-emerald-100 opacity-20 absolute inset-0 blur-3xl"></div>
            <img
              src={heroImage}
              alt="Healthcare professionals using digital technology"
              className="relative rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
