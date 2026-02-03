import React from "react";
import PageTransition from "../components/PageTransition";

export default function Terms() {
  return (
    <PageTransition>
      <div className="min-h-screen p-6 bg-gray-50">
        <h1 className="text-4xl font-bold mb-6">Terms & Conditions</h1>
        <p className="mb-4">
          Welcome to our website. By using our services, you agree to the following terms and conditions...
        </p>
        <p className="mb-4">
          {/* Add your full terms here */}
        </p>
      </div>
    </PageTransition>
  );
}
