import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

import SEO from "../components/SEO"; // ✅ SEO import

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* SEO for Home Page */}
      <SEO
        title="PrimuxCare | Digital Health Solutions for Modern Healthcare"
        description="PrimuxCare builds digital health solutions including hospital management systems, telehealth platforms, and AI-powered healthcare software."
        url="https://primuxcare.com"
        image="https://primuxcare.com/og-image.jpg"
      />

      <main>
        <Hero />
        <Services />
        <About />
        <CTA />
      </main>

     
    </div>
  );
};

export default Index;
