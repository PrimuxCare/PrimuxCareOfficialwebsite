import React from "react";
import PageTransition from "../components/PageTransition";

const Community = () => {
  return (
    <PageTransition>
      <div className="min-h-screen p-6 bg-gray-50 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Community</h1>
        <p className="text-gray-700 max-w-xl text-center">
          Join our PrimuxCare community to collaborate, share knowledge, and get the latest updates.
        </p>
      </div>
    </PageTransition>
  );
};

export default Community;
