import React, { useState, useEffect } from "react";
import { Building2, Mail, Phone, MessageSquare, Globe, X, Info } from "lucide-react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import SEO from "../components/SEO";

const ContactSales = () => {
  useEffect(() => window.scrollTo(0, 0), []);

  const [formData, setFormData] = useState({
    organization: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false); // for mobile tooltip

  // Auto-close modal after 5s
  useEffect(() => {
    if (showModal) {
      const timer = setTimeout(() => setShowModal(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showModal]);

  const inquiryOptions = [
    { value: "partnership", label: "Partnership or Collaboration", info: "Collaborate with us on projects or initiatives" },
    { value: "enterprise", label: "Enterprise Sales", info: "Purchase for your organization at enterprise scale" },
    { value: "reseller", label: "Become a Reseller", info: "Join our reseller network and sell our products" },
    { value: "demo", label: "Request a Product Demo", info: "Schedule a demo to explore our products" },
    { value: "other", label: "Other", info: "Any other inquiry or request" },
  ];

  const validate = () => {
    const newErrors = {};
    if (!formData.organization.trim()) newErrors.organization = "Organization name is required.";
    if (!formData.email.includes("@")) newErrors.email = "Enter a valid email address.";
    if (!/^\d{7,15}$/.test(formData.phone.replace(/\D/g, "")))
      newErrors.phone = "Enter a valid phone number (7–15 digits).";
    if (!formData.inquiryType) newErrors.inquiryType = "Select an inquiry type.";
    if (!formData.message.trim()) newErrors.message = "Message cannot be empty.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const formatPhone = (value) => {
    const digits = value.replace(/\D/g, "").slice(0, 10);
    if (!digits) return "";
    if (digits.length < 4) return `(${digits}`;
    if (digits.length < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone") setFormData({ ...formData, phone: formatPhone(value) });
    else setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      await addDoc(collection(db, "primuxcare_sales_inquiries"), { ...formData, createdAt: serverTimestamp() });

      await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData }),
      });

      setFormData({ organization: "", email: "", phone: "", inquiryType: "", message: "" });
      setShowModal(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      console.error(err);
      alert("Error submitting form. Try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-emerald-50/50 via-gray-50 to-teal-50/50 py-16 px-4 sm:py-24 relative overflow-hidden">
      <SEO title="Contact Sales | PrimuxCare" description="Get in touch with the PrimuxCare sales team." />
      
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      </div>

      <div className="max-w-3xl w-full bg-white/80 backdrop-blur-xl p-8 sm:p-12 rounded-[2rem] shadow-2xl border border-white/60 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-block px-4 py-1.5 bg-emerald-100/50 rounded-full border border-emerald-200/50 mb-4">
            <span className="text-emerald-700 font-medium text-sm tracking-wide">Enterprise Solutions</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Talk to Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">
              Sales Team
            </span>
          </h1>
          <p className="text-gray-600 text-lg">
            Discover how PrimuxCare can help your organization deliver exceptional healthcare.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Organization */}
            <div>
              <label className="block text-gray-700 font-medium mb-2 text-sm">Organization Name</label>
              <div className="flex items-center bg-white border border-gray-200 rounded-xl p-3.5 focus-within:ring-2 focus-within:ring-emerald-400 focus-within:border-emerald-400 transition-all shadow-sm">
                <Building2 className="text-gray-400 mr-3" size={20} />
                <input
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  type="text"
                  placeholder="Hospital, Clinic, or Company Name"
                  className="w-full outline-none text-gray-800 bg-transparent placeholder-gray-400"
                />
              </div>
              {errors.organization && <p className="text-red-500 text-sm mt-1.5">{errors.organization}</p>}
            </div>

            {/* Email */}
            <div>
              <label className="block text-gray-700 font-medium mb-2 text-sm">Email Address</label>
              <div className="flex items-center bg-white border border-gray-200 rounded-xl p-3.5 focus-within:ring-2 focus-within:ring-emerald-400 focus-within:border-emerald-400 transition-all shadow-sm">
                <Mail className="text-gray-400 mr-3" size={20} />
                <input
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="contact@example.com"
                  className="w-full outline-none text-gray-800 bg-transparent placeholder-gray-400"
                />
              </div>
              {errors.email && <p className="text-red-500 text-sm mt-1.5">{errors.email}</p>}
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Phone */}
            <div>
              <label className="block text-gray-700 font-medium mb-2 text-sm">Phone Number</label>
              <div className="flex items-center bg-white border border-gray-200 rounded-xl p-3.5 focus-within:ring-2 focus-within:ring-emerald-400 focus-within:border-emerald-400 transition-all shadow-sm">
                <Phone className="text-gray-400 mr-3" size={20} />
                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  type="tel"
                  placeholder="(123) 456-7890"
                  className="w-full outline-none text-gray-800 bg-transparent placeholder-gray-400"
                />
              </div>
              {errors.phone && <p className="text-red-500 text-sm mt-1.5">{errors.phone}</p>}
            </div>

            {/* Inquiry Type */}
            <div className="relative">
              <label className="block text-gray-700 font-medium mb-2 text-sm">Inquiry Type</label>
              <div className="flex items-center bg-white border border-gray-200 rounded-xl p-3.5 focus-within:ring-2 focus-within:ring-emerald-400 focus-within:border-emerald-400 transition-all shadow-sm">
                <Globe className="text-gray-400 mr-3" size={20} />
                <select
                  name="inquiryType"
                  value={formData.inquiryType}
                  onChange={handleChange}
                  className="w-full outline-none bg-transparent text-gray-800"
                >
                  <option value="">Select inquiry type</option>
                  {inquiryOptions.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>

                {/* Tooltip */}
                {formData.inquiryType && (
                  <div className="ml-2 relative">
                    <Info
                      size={18}
                      className="text-gray-400 cursor-pointer hover:text-emerald-500 transition-colors"
                      onClick={() => setTooltipVisible(!tooltipVisible)}
                    />
                    <div className={`absolute bottom-full mb-3 left-1/2 -translate-x-1/2 w-56 p-3 bg-gray-900 text-white text-xs rounded-xl shadow-xl transition-opacity
                      ${tooltipVisible ? "opacity-100" : "opacity-0"} md:group-hover:opacity-100 z-20`}>
                      {inquiryOptions.find(o => o.value === formData.inquiryType)?.info}
                      <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3 h-3 bg-gray-900 rotate-45"></div>
                    </div>
                  </div>
                )}
              </div>
              {errors.inquiryType && <p className="text-red-500 text-sm mt-1.5">{errors.inquiryType}</p>}
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 font-medium mb-2 text-sm">Message</label>
            <div className="flex flex-col bg-white border border-gray-200 rounded-xl p-3.5 focus-within:ring-2 focus-within:ring-emerald-400 focus-within:border-emerald-400 transition-all shadow-sm">
              <div className="flex items-start">
                <MessageSquare className="text-gray-400 mr-3 mt-1" size={20} />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  placeholder="Tell us more about your goals or organization..."
                  className="w-full outline-none text-gray-800 resize-none bg-transparent placeholder-gray-400"
                  maxLength={1000}
                />
              </div>
              <p className="text-gray-400 text-xs mt-2 text-right">{formData.message.length}/1000</p>
            </div>
            {errors.message && <p className="text-red-500 text-sm mt-1.5">{errors.message}</p>}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-gradient-to-r from-emerald-600 to-teal-500 text-white py-4 rounded-xl font-semibold text-lg hover:from-emerald-700 hover:to-teal-600 transition-all duration-300 shadow-lg shadow-emerald-500/30 ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:scale-[1.01]"
            }`}
          >
            {loading ? "Submitting..." : "Contact Sales"}
          </button>
        </form>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-3xl p-8 max-w-md w-full relative shadow-2xl transform transition-all">
            <button
              className="absolute top-5 right-5 text-gray-400 hover:text-gray-800 transition-colors bg-gray-100 hover:bg-gray-200 p-2 rounded-full"
              onClick={() => setShowModal(false)}
            >
              <X size={20} />
            </button>
            
            <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-3xl">🎉</span>
            </div>

            <h2 className="text-2xl font-bold mb-3 text-gray-900 text-center">Thank You!</h2>
            <p className="text-gray-600 text-center mb-8 leading-relaxed">
              Your inquiry has been submitted successfully. Our enterprise sales team will review your details and contact you shortly.
            </p>
            
            <button
              onClick={() => setShowModal(false)}
              className="w-full bg-gray-900 hover:bg-gray-800 text-white py-3 px-6 rounded-xl font-semibold transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactSales;
