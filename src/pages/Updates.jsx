import React from "react";

const Updates = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center">Product Updates</h1>
        <p className="text-gray-700 mb-10 text-center">
          Stay informed about our latest releases, features, and enhancements to improve healthcare management.
        </p>

        <div className="space-y-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="font-semibold text-lg mb-2">March 2026</h2>
            <p className="text-gray-800">Added real-time patient notifications and appointment reminders.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="font-semibold text-lg mb-2">February 2026</h2>
            <p className="text-gray-800">Introduced secure telemedicine video consultations.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow">
            <h2 className="font-semibold text-lg mb-2">January 2026</h2>
            <p className="text-gray-800">Launched enhanced reporting dashboard for clinics and hospitals.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Updates;
