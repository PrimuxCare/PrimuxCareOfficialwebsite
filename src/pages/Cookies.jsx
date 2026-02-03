import React from "react";
import PageTransition from "../components/PageTransition";

export default function Cookies() {
  return (
    <PageTransition>
      <div className="min-h-screen p-6 bg-gray-50">
        <h1 className="text-4xl font-bold mb-6">Cookie Policy</h1>
        <p className="mb-4">
          We use cookies to improve your browsing experience and analyze website traffic...
        </p>
        <p className="mb-4">
          {/* Add full cookie details here */}
        </p>
      </div>
    </PageTransition>
  );
}
