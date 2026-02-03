import React from "react";
import PageTransition from "../components/PageTransition";

export default function Compliance() {
  return (
    <PageTransition>
      <div className="min-h-screen p-6 bg-gray-50">
        <h1 className="text-4xl font-bold mb-6">Compliance</h1>
        <p className="mb-4">
          Our company complies with all applicable laws, regulations, and industry standards...
        </p>
        <p className="mb-4">
          {/* Add compliance details, e.g., GDPR, HIPAA if applicable */}
        </p>
      </div>
    </PageTransition>
  );
}
