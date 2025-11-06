import { Button } from "../components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CTA = () => {
  const navigate = useNavigate(); // Hook to navigate programmatically

  const handleGetStarted = () => {
    navigate("/get-started"); // Navigate to GetStarted page
  };

  const handleContactSales = () => {
    navigate("/contact-sales"); // Navigate to ContactSales page
  };

  return (
    <section id="contact" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="relative rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-10" />
          <div className="relative px-8 py-16 md:px-16 md:py-20 text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Ready to Transform Your{" "}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Healthcare Experience?
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Join thousands of healthcare providers and patients who are already experiencing 
              the future of digital health with PrimuxCare.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                variant="hero"
                size="lg"
                className="group"
                onClick={handleGetStarted} // Navigate to GetStarted
              >
                Get Started Today
                <ArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="group"
                onClick={handleContactSales} // Navigate to ContactSales
              >
                <Mail className="mr-2" />
                Contact Sales
              </Button>
            </div>

            <div className="pt-8 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                No Credit Card Required
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                Free 30-Day Trial
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-primary" />
                Cancel Anytime
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
