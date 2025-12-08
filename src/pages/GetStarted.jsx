import React, { useState, useEffect } from "react";
import { User, Mail, Layers, DollarSign, FileText, Phone } from "lucide-react";
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

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // 1️⃣ Save to Firestore (allowed collection)
      await addDoc(collection(db, "primuxcare_sales_inquiries"), formData);

      // 2️⃣ Send email via Vercel API
      await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          organization: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          inquiryType: formData.projectType,
          message: formData.details,
        }),
      });

      alert("Project submitted successfully! Our team will reach out soon.");

      // Reset form
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        projectType: "",
        budget: "",
        details: "",
      });
    } catch (error) {
      console.error("Error submitting project: ", error);
      alert("Error submitting project. Try again!");
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-50 py-20 px-4">
      <div className="max-w-3xl w-full bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-100">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
          Start Your{" "}
          <span className="bg-gradient-to-r from-green-500 to-emerald-400 bg-clip-text text-transparent">
            Digital Health Project
          </span>
        </h1>
        <p className="text-gray-600 text-base md:text-lg mb-10 text-center">
          Fill in the details below, and our project team will reach out to get started.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Full Name</label>
            <div className="flex items-center border border-gray-300 rounded-lg p-3 focus-within:ring-2 focus-within:ring-green-500">
              <User className="text-gray-400 mr-2" size={20} />
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Your full name"
                className="w-full outline-none"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Email Address</label>
            <div className="flex items-center border border-gray-300 rounded-lg p-3 focus-within:ring-2 focus-within:ring-green-500">
              <Mail className="text-gray-400 mr-2" size={20} />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="w-full outline-none"
                required
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Phone Number</label>
            <div className="flex items-center border border-gray-300 rounded-lg p-3 focus-within:ring-2 focus-within:ring-green-500">
              <Phone className="text-gray-400 mr-2" size={20} />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="123-456-7890"
                className="w-full outline-none"
                required
              />
            </div>
          </div>

          {/* Project Type */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Project Type</label>
            <div className="flex items-center border border-gray-300 rounded-lg p-3 focus-within:ring-2 focus-within:ring-green-500">
              <Layers className="text-gray-400 mr-2" size={20} />
              <select
                name="projectType"
                value={formData.projectType}
                onChange={handleChange}
                className="w-full outline-none bg-transparent"
                required
              >
                <option value="">Select project type</option>
                <option value="hospital-system">Hospital Management System</option>
                <option value="telemedicine-platform">Telemedicine Platform</option>
                <option value="patient-portal">Patient Portal</option>
                <option value="health-website">Healthcare Website</option>
                <option value="other">Other Custom Solution</option>
              </select>
            </div>
          </div>

          {/* Budget */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Estimated Budget</label>
            <div className="flex items-center border border-gray-300 rounded-lg p-3 focus-within:ring-2 focus-within:ring-green-500">
              <DollarSign className="text-gray-400 mr-2" size={20} />
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full outline-none bg-transparent"
                required
              >
                <option value="">Select your budget range</option>
                <option value="under-1000">Below $1,000</option>
                <option value="1000-5000">$1,000 – $5,000</option>
                <option value="5000-10000">$5,000 – $10,000</option>
                <option value="10000+">$10,000 and above</option>
              </select>
            </div>
          </div>

          {/* Project Details */}
          <div>
            <label className="block text-gray-700 font-medium mb-2">Project Details</label>
            <div className="flex items-start border border-gray-300 rounded-lg p-3 focus-within:ring-2 focus-within:ring-green-500">
              <FileText className="text-gray-400 mr-2 mt-1" size={20} />
              <textarea
                name="details"
                value={formData.details}
                onChange={handleChange}
                rows="5"
                placeholder="Describe your project idea..."
                className="w-full outline-none"
                required
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-500 to-emerald-400 text-white py-3 rounded-lg font-semibold text-lg hover:from-green-600 hover:to-emerald-500 transition-all duration-300"
          >
            Start My Project
          </button>
        </form>
      </div>
    </div>
  );
};

export default GetStarted;
