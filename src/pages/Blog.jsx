import React from "react";
import PageTransition from "../components/PageTransition";

const Blog = () => {
  return (
    <PageTransition>
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">PrimuxCare Blog</h1>
          <p className="text-gray-700 mb-6">
            Stay updated with the latest in digital healthcare, product updates, and company news.
          </p>

          <ul className="space-y-4">
            <li className="bg-white p-4 rounded shadow hover:shadow-lg transition">
              <h2 className="text-xl font-semibold">How Digital Health is Changing Patient Care</h2>
              <p className="text-gray-600">Feb 1, 2026 | 5 min read</p>
            </li>
            <li className="bg-white p-4 rounded shadow hover:shadow-lg transition">
              <h2 className="text-xl font-semibold">Top 5 Features in PrimuxCare You Should Know</h2>
              <p className="text-gray-600">Jan 20, 2026 | 3 min read</p>
            </li>
            <li className="bg-white p-4 rounded shadow hover:shadow-lg transition">
              <h2 className="text-xl font-semibold">Meet the Team: Innovating Healthcare Together</h2>
              <p className="text-gray-600">Jan 10, 2026 | 4 min read</p>
            </li>
          </ul>
        </div>
      </div>
    </PageTransition>
  );
};

export default Blog;
