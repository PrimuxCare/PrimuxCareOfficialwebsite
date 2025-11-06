import React, { useEffect } from "react";
import { Building2, Mail, Phone, MessageSquare, Globe } from "lucide-react";

const ContactSales = () => {
  // Scroll to top when loaded
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-50 py-20 px-4">
      <div className="max-w-3xl w-full bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100">
        {/* Heading Section */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
          Talk to Our{" "}
          <span className="bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text text-transparent">
            Sales Team
          </span>
        </h1>
        <p className="text-gray-600 text-base md:text-lg mb-10 text-center">
          Ready to bring PrimuxCare to your organization? Whether you're looking
          to scale your hospital systems, implement EHR solutions, or partner
          with us, we’d love to hear from you.
        </p>

        {/* Form Section */}
        <form className="space-y-6">
          {/* Organization Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Organization Name
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg p-3 focus-within:ring-2 focus-within:ring-green-500">
              <Building2 className="text-gray-400 mr-2" size={20} />
              <input
                type="text"
                className="w-full outline-none"
                placeholder="Hospital, Clinic, or Company Name"
                required
              />
            </div>
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg p-3 focus-within:ring-2 focus-within:ring-green-500">
              <Mail className="text-gray-400 mr-2" size={20} />
              <input
                type="email"
                className="w-full outline-none"
                placeholder="contact@example.com"
                required
              />
            </div>
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Phone Number
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg p-3 focus-within:ring-2 focus-within:ring-green-500">
              <Phone className="text-gray-400 mr-2" size={20} />
              <input
                type="tel"
                className="w-full outline-none"
                placeholder="+234 801 234 5678"
                required
              />
            </div>
          </div>

          {/* Inquiry Type */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Inquiry Type
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg p-3 focus-within:ring-2 focus-within:ring-green-500">
              <Globe className="text-gray-400 mr-2" size={20} />
              <select className="w-full outline-none bg-transparent" required>
                <option value="">Select inquiry type</option>
                <option value="partnership">Partnership or Collaboration</option>
                <option value="enterprise">Enterprise Sales</option>
                <option value="reseller">Become a Reseller</option>
                <option value="demo">Request a Product Demo</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <div className="flex items-start border border-gray-300 rounded-lg p-3 focus-within:ring-2 focus-within:ring-green-500">
              <MessageSquare className="text-gray-400 mr-2 mt-1" size={20} />
              <textarea
                className="w-full outline-none"
                rows="5"
                placeholder="Tell us more about your goals or organization..."
                required
              ></textarea>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-500 to-emerald-400 text-white py-3 rounded-lg font-semibold text-lg hover:from-green-600 hover:to-emerald-500 transition-all duration-300"
          >
            Contact Sales
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSales;
