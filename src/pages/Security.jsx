import React from "react";
import { ShieldCheck } from "lucide-react";

const securityPoints = [
  "Data encryption in transit and at rest",
  "Role-based access controls",
  "GDPR and HIPAA compliant",
  "Regular security audits and penetration tests",
  "Automatic backups and disaster recovery",
];

const Security = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:py-20">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Security <span className="text-emerald-500">& Compliance</span>
        </h1>
        <p className="text-gray-700 mb-12">
          Your data is safe with PrimuxCare. We implement best-in-class security measures to protect patient and organizational information.
        </p>

        <ul className="space-y-4 text-left">
          {securityPoints.map((point) => (
            <li key={point} className="flex items-center bg-white p-4 rounded-2xl shadow">
              <ShieldCheck className="text-green-500 mr-3" />
              <span className="text-gray-700">{point}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Security;
