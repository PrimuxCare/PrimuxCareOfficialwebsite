import React, { useState, useEffect } from "react";
import { Building2, Mail, Phone, MessageSquare, Globe } from "lucide-react";
import { db } from "../firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const ContactSales = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    organization: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, "primuxcare_sales_inquiries"), {
        ...formData,
        createdAt: serverTimestamp(),
      });

      setSubmitted(true);
      setFormData({
        organization: "",
        email: "",
        phone: "",
        inquiryType: "",
        message: "",
      });
    } catch (error) {
      alert("Error submitting form: " + error.message);
    }

    setLoading(false);
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-50 py-20 px-4">
      <div className="max-w-3xl w-full bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100">

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
          Talk to Our{" "}
          <span className="bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text text-transparent">
            Sales Team
          </span>
        </h1>

        {submitted && (
          <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg text-center font-semibold">
            Thank you! Your inquiry has been submitted.
          </div>
        )}

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Organization Name
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg p-3 focus-within:ring-2 focus-within:ring-green-500">
              <Building2 className="text-gray-400 mr-2" size={20} />
              <input
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                type="text"
                className="w-full outline-none"
                placeholder="Hospital, Clinic, or Company Name"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Email Address
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg p-3 focus-within:ring-2 focus-within:ring-green-500">
              <Mail className="text-gray-400 mr-2" size={20} />
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                className="w-full outline-none"
                placeholder="contact@example.com"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Phone Number
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg p-3 focus-within:ring-2 focus-within:ring-green-500">
              <Phone className="text-gray-400 mr-2" size={20} />
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                type="tel"
                className="w-full outline-none"
                placeholder="+234 801 234 5678"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Inquiry Type
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg p-3 focus-within:ring-2 focus-within:ring-green-500">
              <Globe className="text-gray-400 mr-2" size={20} />
              <select
                name="inquiryType"
                value={formData.inquiryType}
                onChange={handleChange}
                className="w-full outline-none bg-transparent"
                required
              >
                <option value="">Select inquiry type</option>
                <option value="partnership">Partnership or Collaboration</option>
                <option value="enterprise">Enterprise Sales</option>
                <option value="reseller">Become a Reseller</option>
                <option value="demo">Request a Product Demo</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <div className="flex items-start border border-gray-300 rounded-lg p-3 focus-within:ring-2 focus-within:ring-green-500">
              <MessageSquare className="text-gray-400 mr-2 mt-1" size={20} />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full outline-none"
                rows="5"
                placeholder="Tell us more about your goals or organization..."
                required
              ></textarea>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-green-500 to-emerald-400 text-white py-3 rounded-lg font-semibold text-lg hover:from-green-600 hover:to-emerald-500 transition-all duration-300"
          >
            {loading ? "Submitting..." : "Contact Sales"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactSales;
