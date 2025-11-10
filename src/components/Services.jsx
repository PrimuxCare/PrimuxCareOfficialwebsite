import { Video, BarChart3, Building2, Shield, Workflow, Brain } from 'lucide-react';

export default function Services() {
  const solutions = [
    {
      icon: Video,
      title: 'Telehealth Platforms',
      description:
        'We build secure, user-friendly telemedicine systems that connect patients and doctors from anywhere, anytime.',
    },
    {
      icon: BarChart3,
      title: 'Health Data Analytics',
      description:
        'Transform hospital and patient data into actionable insights with smart analytics dashboards and reports.',
    },
    {
      icon: Building2,
      title: 'Hospital Management Systems',
      description:
        'Streamline operations, manage appointments, and improve care coordination through efficient hospital software.',
    },
    {
      icon: Shield,
      title: 'Secure Health Infrastructure',
      description:
        'All our systems are built with enterprise-grade data protection to keep patient records safe and compliant.',
    },
    {
      icon: Workflow,
      title: 'Automation & Workflow Tools',
      description:
        'Automate routine healthcare processes to save time, reduce errors, and improve overall service delivery.',
    },
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description:
        'Leverage artificial intelligence for diagnostics, patient triage, and predictive healthcare insights.',
    },
  ];

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Our Solutions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            At PrimuxCare, we design and develop digital solutions that empower healthcare
            providers, enhance patient experience, and modernize medical practice.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-emerald-100 rounded-lg mb-4">
                  <Icon size={28} className="text-emerald-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{solution.title}</h3>
                <p className="text-gray-600 leading-relaxed">{solution.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
