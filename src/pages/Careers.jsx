import React from "react";
import PageTransition from "../components/PageTransition";

const Careers = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Careers at PrimuxCare</h1>
          <p className="text-gray-700 mb-4">
            Join our mission to transform healthcare through technology. Explore open positions below and become part of our innovative team.
          </p>

          <ul className="space-y-3">
            <li className="bg-white p-4 rounded shadow hover:shadow-lg transition">
              <h2 className="text-xl font-semibold">Frontend Developer</h2>
              <p className="text-gray-600">Location: Remote | Full-time</p>
            </li>
            <li className="bg-white p-4 rounded shadow hover:shadow-lg transition">
              <h2 className="text-xl font-semibold">UI/UX Designer</h2>
              <p className="text-gray-600">Location: Lagos | Full-time</p>
            </li>
            <li className="bg-white p-4 rounded shadow hover:shadow-lg transition">
              <h2 className="text-xl font-semibold">Backend Engineer</h2>
              <p className="text-gray-600">Location: Remote | Full-time</p>
            </li>
          </ul>
        </div>
      </div>
    </PageTransition>
  );
};

export default Careers;
