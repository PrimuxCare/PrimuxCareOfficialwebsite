import React from "react";
import PageTransition from "../components/PageTransition";

const Press = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">PrimuxCare in the Press</h1>
          <p className="text-gray-700 mb-6">
            See how PrimuxCare is making headlines in healthcare innovation and technology.
          </p>

          <ul className="space-y-4">
            <li className="bg-white p-4 rounded shadow hover:shadow-lg transition">
              <h2 className="text-xl font-semibold">TechCrunch: PrimuxCare Revolutionizes Patient Care</h2>
              <p className="text-gray-600">Jan 15, 2026</p>
            </li>
            <li className="bg-white p-4 rounded shadow hover:shadow-lg transition">
              <h2 className="text-xl font-semibold">Forbes: Top 10 Digital Health Startups to Watch</h2>
              <p className="text-gray-600">Dec 28, 2025</p>
            </li>
            <li className="bg-white p-4 rounded shadow hover:shadow-lg transition">
              <h2 className="text-xl font-semibold">Healthcare Weekly: PrimuxCare’s Innovative Approach</h2>
              <p className="text-gray-600">Dec 5, 2025</p>
            </li>
          </ul>
        </div>
      </div>
    </PageTransition>
  );
};

export default Press;
