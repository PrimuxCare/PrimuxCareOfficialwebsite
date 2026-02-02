import React from "react";

const pricingPlans = [
  {
    title: "Basic",
    price: "$99/mo",
    features: ["Patient Management", "Appointments", "Email Support"],
  },
  {
    title: "Pro",
    price: "$299/mo",
    features: ["All Basic Features", "Telemedicine", "Analytics Dashboard"],
  },
  {
    title: "Enterprise",
    price: "$599/mo",
    features: ["All Pro Features", "Custom Integrations", "Dedicated Support"],
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:py-20">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Pricing Plans
        </h1>
        <p className="text-gray-700 mb-12">
          Choose the plan that fits your organization’s needs.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => (
            <div
              key={plan.title}
              className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition flex flex-col"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-4">{plan.title}</h2>
              <p className="text-3xl font-extrabold text-emerald-500 mb-6">{plan.price}</p>
              <ul className="flex-1 space-y-2 mb-6">
                {plan.features.map((f) => (
                  <li key={f} className="text-gray-600 flex items-center">
                    <span className="mr-2 text-green-500">✔</span> {f}
                  </li>
                ))}
              </ul>
              <button className="bg-emerald-500 text-white py-2 px-4 rounded-lg hover:bg-emerald-600 transition">
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
