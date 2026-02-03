import React from "react";
import PageTransition from "../components/PageTransition";

const Support = () => {
  return (
    <PageTransition>
      <div className="min-h-screen p-6 bg-gray-50 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Support</h1>
        <p className="text-gray-700 max-w-xl text-center">
          Need help? Contact our support team for assistance with PrimuxCare services.
        </p>
      </div>
    </PageTransition>
  );
};

export default Support;
