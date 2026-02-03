import { motion } from "framer-motion";

export default function Pricing() {
  return (
    <section className="bg-gray-50 min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Simple, Transparent Pricing
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            Choose a plan that fits your organisation. No hidden fees.
            Upgrade or cancel anytime.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {/* Starter */}
          <PricingCard
            title="Starter"
            price="Free"
            description="For individuals exploring the platform"
            features={[
              "Basic features access",
              "Limited analytics",
              "Community support",
            ]}
            buttonText="Get Started"
            highlight={false}
          />

          {/* Professional */}
          <PricingCard
            title="Professional"
            price="₦15,000 / mo"
            description="Best for growing healthcare teams"
            features={[
              "Full feature access",
              "Advanced analytics",
              "Priority email support",
              "Team collaboration",
            ]}
            buttonText="Start Free Trial"
            highlight={true}
          />

          {/* Enterprise */}
          <PricingCard
            title="Enterprise"
            price="Custom"
            description="For hospitals & large organisations"
            features={[
              "Custom integrations",
              "Dedicated account manager",
              "Security & compliance support",
              "24/7 priority support",
            ]}
            buttonText="Contact Sales"
            highlight={false}
          />
        </div>
      </div>
    </section>
  );
}

function PricingCard({
  title,
  price,
  description,
  features,
  buttonText,
  highlight,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className={`rounded-2xl p-8 shadow-sm border bg-white flex flex-col ${
        highlight
          ? "border-emerald-500 ring-2 ring-emerald-500"
          : "border-gray-200"
      }`}
    >
      <h3 className="text-2xl font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-600">{description}</p>

      <div className="mt-6">
        <span className="text-4xl font-bold text-gray-900">{price}</span>
      </div>

      <ul className="mt-6 space-y-3 text-gray-700">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2">
            <span className="text-emerald-500">✓</span>
            {feature}
          </li>
        ))}
      </ul>

      <button
        className={`mt-8 w-full rounded-xl py-3 font-semibold transition ${
          highlight
            ? "bg-emerald-600 text-white hover:bg-emerald-700"
            : "bg-gray-900 text-white hover:bg-gray-800"
        }`}
      >
        {buttonText}
      </button>
    </motion.div>
  );
}
