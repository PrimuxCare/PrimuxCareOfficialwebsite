import React, { useState, useEffect } from "react";
import { User, Mail, Layers, DollarSign, FileText, Phone, X } from "lucide-react";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

const GetStarted = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    details: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Auto-close modal after 5 seconds
  useEffect(() => {
    if (showModal) {
      const timer = setTimeout(() => setShowModal(false), 5000);
      return () => clearTimeout(timer);
    }
  }, [showModal]);

  // Validation
  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = "Full name is required.";
    if (!formData.email.includes("@")) newErrors.email = "Enter a valid email address.";
    if (!/^\d{7,15}$/.test(formData.phone.replace(/\D/g, "")))
      newErrors.phone = "Enter a valid phone number (7–15 digits).";
    if (!formData.projectType) newErrors.projectType = "Select a project type.";
    if (!formData.budget) newErrors.budget = "Select your budget range.";
    if (!formData.details.trim()) newErrors.details = "Project details cannot be empty.";
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
      await addDoc(collection(db, "primuxcare_sales_inquiries"), formData);

      await fetch("/api/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          organization: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          inquiryType: formData.projectType,
          message: formData.details,
        }),
      });

      setFormData({
        fullName: "",
        email: "",
        phone: "",
        projectType: "",
        budget: "",
        details: "",
      });

      setShowModal(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (err) {
      console.error("Error submitting project:", err);
      alert("Error submitting project. Try again!");
    } finally {
      setLoading(false);
    }
  };

  // Options
  const projectOptions = [
    { value: "hospital-system", label: "Hospital Management System" },
    { value: "telemedicine-platform", label: "Telemedicine Platform" },
    { value: "patient-portal", label: "Patient Portal" },
    { value: "health-website", label: "Healthcare Website" },
    { value: "other", label: "Other Custom Solution" },
  ];

  const budgetOptions = [
    { value: "under-1000", label: "Below $1,000" },
    { value: "1000-5000", label: "$1,000 – $5,000" },
    { value: "5000-10000", label: "$5,000 – $10,000" },
    { value: "10000+", label: "$10,000 and above" },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-50 py-12 px-4 sm:py-20">
      <div className="max-w-3xl w-full bg-white p-6 sm:p-10 md:p-12 rounded-3xl shadow-2xl border border-gray-100">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 text-center">
          Start Your{" "}
          <span className="bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text text-transparent">
            Digital Health Project
          </span>
        </h1>
        <p className="text-gray-600 text-base md:text-lg mb-6 sm:mb-10 text-center">
          Fill in the details below, and our project team will reach out to get started.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
          {/* Full Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-1 sm:mb-2">Full Name</label>
            <div className="flex items-center border border-gray-300 rounded-xl p-3 focus-within:ring-2 focus-within:ring-green-400 transition-all">
              <User className="text-gray-400 mr-2" size={20} />
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full outline-none text-gray-800"
              />
            </div>
            {errors.fullName && <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1 sm:mb-2">Email Address</label>
            <div className="flex items-center border border-gray-300 rounded-xl p-3 focus-within:ring-2 focus-within:ring-green-400 transition-all">
              <Mail className="text-gray-400 mr-2" size={20} />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
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
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="(123) 456-7890"
                className="w-full outline-none text-gray-800"
              />
            </div>
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
          </div>

          {/* Project Type */}
          <div>
            <label className="block text-gray-700 font-medium mb-1 sm:mb-2">Project Type</label>
            <div className="flex items-center border border-gray-300 rounded-xl p-3 focus-within:ring-2 focus-within:ring-green-400 transition-all">
              <Layers className="text-gray-400 mr-2" size={20} />
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full outline-none bg-transparent text-gray-800"
              >
                <option value="">Select project type</option>
                {projectOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
            {errors.projectType && <p className="text-red-500 text-sm mt-1">{errors.projectType}</p>}
          </div>

          {/* Budget */}
          <div>
            <label className="block text-gray-700 font-medium mb-1 sm:mb-2">Estimated Budget</label>
            <div className="flex items-center border border-gray-300 rounded-xl p-3 focus-within:ring-2 focus-within:ring-green-400 transition-all">
              <DollarSign className="text-gray-400 mr-2" size={20} />
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full outline-none bg-transparent text-gray-800"
              >
                <option value="">Select your budget range</option>
                {budgetOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            </div>
            {errors.budget && <p className="text-red-500 text-sm mt-1">{errors.budget}</p>}
          </div>

          {/* Project Details */}
          <div>
            <label className="block text-gray-700 font-medium mb-1 sm:mb-2">Project Details</label>
            <div className="flex flex-col border border-gray-300 rounded-xl p-3 focus-within:ring-2 focus-within:ring-green-400 transition-all">
              <div className="flex items-start">
                <FileText className="text-gray-400 mr-2 mt-1" size={20} />
                <textarea
                  name="details"
                  value={formData.details}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Describe your project idea..."
                  className="w-full outline-none text-gray-800 resize-none"
                  maxLength={1000}
                />
              </div>
              <p className="text-gray-400 text-sm mt-1 text-right">{formData.details.length} / 1000</p>
            </div>
            {errors.details && <p className="text-red-500 text-sm mt-1">{errors.details}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-gradient-to-r from-green-500 to-emerald-400 text-white py-3 rounded-xl font-semibold text-lg hover:from-green-600 hover:to-emerald-500 transition-all duration-300 ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Submitting..." : "Start My Project"}
          </button>
        </form>
      </div>

      {/* Thank You Modal */}
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
              Your project submission has been received. Our team will reach out to you shortly.
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

export default GetStarted;
