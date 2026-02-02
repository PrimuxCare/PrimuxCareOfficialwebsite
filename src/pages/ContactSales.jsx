import React, { useState, useEffect } from "react";
import { Building2, Mail, Phone, MessageSquare, Globe, X, Info } from "lucide-react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

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
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:py-20">
      <div className="max-w-3xl w-full bg-white p-6 sm:p-10 md:p-12 rounded-3xl shadow-2xl border border-gray-100">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
          Talk to Our{" "}
          <span className="bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text text-transparent">
            Sales Team
          </span>
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
          {/* Organization */}
          <div>
            <label className="block text-gray-700 font-medium mb-1 sm:mb-2">Organization Name</label>
            <div className="flex items-center border border-gray-300 rounded-xl p-3 focus-within:ring-2 focus-within:ring-green-400 transition-all">
              <Building2 className="text-gray-400 mr-2" size={20} />
              <input
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                type="text"
                placeholder="Hospital, Clinic, or Company Name"
                className="w-full outline-none text-gray-800"
              />
            </div>
            {errors.organization && <p className="text-red-500 text-sm mt-1">{errors.organization}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1 sm:mb-2">Email Address</label>
            <div className="flex items-center border border-gray-300 rounded-xl p-3 focus-within:ring-2 focus-within:ring-green-400 transition-all">
              <Mail className="text-gray-400 mr-2" size={20} />
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                placeholder="contact@example.com"
                className="w-full outline-none text-gray-800"
              />
            </div>
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-700 font-medium mb-1 sm:mb-2">Phone Number</label>
            <div className="flex items-center border border-gray-300 rounded-xl p-3 focus-within:ring-2 focus-within:ring-green-400 transition-all">
              <Phone className="text-gray-400 mr-2" size={20} />
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                type="tel"
                placeholder="(123) 456-7890"
                className="w-full outline-none text-gray-800"
              />
            </div>
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>

          {/* Inquiry Type */}
          <div className="relative">
            <label className="block text-gray-700 font-medium mb-1 sm:mb-2">Inquiry Type</label>
            <div className="flex items-center border border-gray-300 rounded-xl p-3 focus-within:ring-2 focus-within:ring-green-400 transition-all">
              <Globe className="text-gray-400 mr-2" size={20} />
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
                    className="text-gray-400 cursor-pointer"
                    onClick={() => setTooltipVisible(!tooltipVisible)}
                  />
                  <div className={`absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-48 p-2 bg-gray-800 text-white text-sm rounded transition-opacity
                    ${tooltipVisible ? "opacity-100" : "opacity-0"} md:group-hover:opacity-100`}>
                    {inquiryOptions.find(o => o.value === formData.inquiryType)?.info}
                  </div>
                </div>
              )}
            </div>
            {errors.inquiryType && <p className="text-red-500 text-sm mt-1">{errors.inquiryType}</p>}
          </div>

          {/* Message */}
          <div>
            <label className="block text-gray-700 font-medium mb-1 sm:mb-2">Message</label>
            <div className="flex flex-col border border-gray-300 rounded-xl p-3 focus-within:ring-2 focus-within:ring-green-400 transition-all">
              <div className="flex items-start">
                <MessageSquare className="text-gray-400 mr-2 mt-1" size={20} />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Tell us more about your goals or organization..."
                  className="w-full outline-none text-gray-800 resize-none"
                  maxLength={1000}
                />
              </div>
              <p className="text-gray-400 text-sm mt-1 text-right">{formData.message.length}/1000</p>
            </div>
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-gradient-to-r from-green-500 to-emerald-400 text-white py-3 rounded-xl font-semibold text-lg hover:from-green-600 hover:to-emerald-500 transition-all duration-300 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Submitting..." : "Contact Sales"}
          </button>
        </form>
      </div>

      {/* Success Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full relative shadow-2xl">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-900"
              onClick={() => setShowModal(false)}
            >
              <X size={24} />
            </button>
            <h2 className="text-2xl font-bold mb-4 text-gray-900 text-center">Thank You! 🎉</h2>
            <p className="text-gray-700 text-center mb-6">
              Your inquiry has been submitted. Our sales team will reach out shortly.
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="block mx-auto bg-green-500 hover:bg-green-600 text-white py-2 px-6 rounded-lg font-semibold transition-all"
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
