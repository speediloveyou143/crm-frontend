import { useState } from "react";

function Pricing() {
  const [isBusiness, setIsBusiness] = useState(true); // Toggle state

  const personalPlans = [
    {
      name: "Free",
      price: "$0",
      billing: "forever",
      description:
        "Perfect for freelancers and solo users getting started with CRM.",
      features: [
        "Up to 5 users",
        "2 WhatsApp conversations/month",
        "Basic lead management",
        "Email support",
        "Single dashboard view",
      ],
      buttonText: "Get Started for Free",
      buttonClass: "bg-indigo-500 hover:bg-indigo-600",
    },
    {
      name: "Plus",
      price: "$29",
      billing: "per month",
      description:
        "Ideal for small businesses scaling their customer relationships.",
      features: [
        "Up to 500 users",
        "500 WhatsApp conversations/month",
        "Automated lead capture",
        "Basic analytics dashboard",
        "Email & chat support",
        "Integration with email tools",
      ],
      buttonText: "Start Plus Plan",
      buttonClass: "bg-indigo-500 hover:bg-indigo-600",
    },
    {
      name: "Pro",
      price: "$99",
      billing: "per month",
      description:
        "Advanced features for growing teams needing powerful CRM tools.",
      features: [
        "Up to 2,000 users",
        "2,000 WhatsApp conversations/month",
        "Advanced chatbots & automation",
        "Real-time analytics & reporting",
        "Multi-agent live chat support",
        "Integration with HubSpot, Zoho, Salesforce",
        "Priority email & phone support",
        "Customizable templates",
      ],
      buttonText: "Start Pro Plan",
      buttonClass:
        "bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700",
    },
  ];

  const businessPlans = [
    "Unlimited users",
    "Unlimited WhatsApp conversations",
    "Enterprise-grade security & compliance",
    "Dedicated account manager",
    "Advanced sales pipeline management",
    "Multi-channel integration (WhatsApp, Instagram, Email, SMS)",
    "Custom API access & webhooks",
    "24/7 premium support",
    "White-label options",
    "Advanced analytics with custom reports",
  ];

  const tableData = [
    {
      feature: "Users",
      free: "5",
      plus: "500",
      pro: "2,000",
      enterprise: "Unlimited",
    },
    {
      feature: "WhatsApp Conversations/Month",
      free: "2",
      plus: "500",
      pro: "2,000",
      enterprise: "Unlimited",
    },
    {
      feature: "Lead Management",
      free: "Basic",
      plus: "Advanced",
      pro: "Advanced",
      enterprise: "Enterprise",
    },
    {
      feature: "Analytics Dashboard",
      free: "—",
      plus: "Basic",
      pro: "Advanced",
      enterprise: "Custom",
    },
    {
      feature: "Multi-Agent Support",
      free: "—",
      plus: "—",
      pro: "✓",
      enterprise: "✓",
    },
  ];

  const faqData = [
    {
      question: "What is a WhatsApp conversation?",
      answer:
        "A WhatsApp conversation is a 24-hour message thread between your business and a customer. You can send unlimited messages within this window for a single charge, based on the conversation type (e.g., marketing, service).",
    },
    {
      question: "Can I switch between Personal and Business plans?",
      answer:
        "Yes, use the toggle above to switch between plans. Upgrades or downgrades can be processed from your account settings, effective immediately or at the end of your billing cycle.",
    },
    {
      question: "Is there a free trial?",
      answer:
        "Yes, we offer a 7-day free trial for Personal plans (Plus and Pro) and a 14-day trial for the Enterprise plan. No credit card is required to start.",
    },
    {
      question: "How are WhatsApp charges calculated?",
      answer:
        "WhatsApp charges are based on conversation types (marketing, utility, service, authentication) and the recipient's country. User-initiated conversations are free within 24 hours, while business-initiated conversations incur a small fee.",
    },
    {
      question: "What if I need custom features?",
      answer:
        "The Enterprise plan offers custom API access and white-label options. Contact our sales team for tailored solutions.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 font-sans text-gray-100">
      {/* Hero Section */}
      <section className="pt-24 bg-[url('https://source.unsplash.com/random/1920x1080/?business,technology')] bg-cover bg-center bg-no-repeat relative overflow-hidden">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Pricing That Scales
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10 animate-fade-in-up">
            Discover the perfect plan for your business. Toggle to explore
            Personal or Business options.
          </p>
          {/* Fancy Toggle Switch */}
          <div className="flex justify-center mb-6 px-4">
            <div className="relative inline-flex items-center cursor-pointer select-none">
              <input
                type="checkbox"
                id="planToggle"
                className="sr-only peer"
                checked={isBusiness}
                onChange={() => setIsBusiness(!isBusiness)}
                aria-label="Toggle between Personal and Business subscription plans"
                aria-checked={isBusiness}
              />
              <label
                htmlFor="planToggle"
                className="flex items-center p-0.5 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full w-[10.5rem] h-10 shadow-lg transition-all duration-300 ease-in-out focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100 hover:shadow-xl active:scale-95 touch-manipulation"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    setIsBusiness(!isBusiness);
                  }
                }}
              >
                {/* Glowing thumb with subtle pulse animation */}
                <span
                  className={`absolute w-[4.8rem] h-8 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 shadow-[0_0_8px_rgba(99,102,241,0.6)] transition-all duration-300 ease-in-out will-change-transform ${
                    isBusiness ? "translate-x-[5.2rem]" : "translate-x-0.5"
                  } animate-pulse-slow`}
                ></span>

                {/* Text with better contrast and subtle glow when active */}
                <span
                  className={`z-10 px-3 py-1 text-sm font-semibold transition-all duration-300 ${
                    !isBusiness
                      ? "text-white drop-shadow-[0_1px_2px_rgba(255,255,255,0.3)]"
                      : "text-gray-300/90"
                  }`}
                >
                  Personal
                </span>
                <span
                  className={`z-10 px-4 py-1 text-sm font-semibold transition-all duration-300 ${
                    isBusiness
                      ? "text-white drop-shadow-[0_1px_2px_rgba(255,255,255,0.3)]"
                      : "text-gray-300/90"
                  }`}
                >
                  Business
                </span>
              </label>
            </div>
          </div>
        </div>
        {/* Pricing Plans */}
        <section className="py-10">
          <div className="container mx-auto px-2">
            {isBusiness ? (
              <div>
                <div className="grid grid-cols-1 max-w-md mx-auto">
                  <div className="bg-white/10 backdrop-blur-md p-4 rounded-xl hover:shadow-xl hover:scale-[1.03] transition-all duration-300 border border-indigo-500/20 text-sm">
                    <h3 className="text-xl font-bold text-white mb-2">
                      Enterprise
                    </h3>
                    <p className="text-3xl font-extrabold text-indigo-400 mb-1">
                      Custom
                    </p>
                    <p className="text-gray-300 mb-3">Contact us for pricing</p>
                    <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                      Designed for large teams with high-volume CRM and
                      communication needs.
                    </p>

                    <ul className="text-gray-300 mb-4 space-y-2">
                      {businessPlans.map((feature, i) => (
                        <li key={i} className="flex items-start text-sm">
                          <svg
                            className="w-4 h-4 text-indigo-400 mr-2 mt-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <button className="w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold py-2.5 rounded-lg hover:from-indigo-600 hover:to-purple-700 transition duration-300 shadow">
                      Contact Sales
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {personalPlans.map((plan, index) => (
                    <div
                      key={index}
                      className="bg-white/10 backdrop-blur-md p-6 rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-indigo-500/20 text-sm flex flex-col"
                    >
                      <div>
                        <h3 className="text-xl font-bold text-white mb-3">
                          {plan.name}
                        </h3>
                        <p className="text-3xl font-extrabold text-indigo-400 mb-1">
                          {plan.price}
                        </p>
                        <p className="text-gray-300 mb-4">{plan.billing}</p>
                        <p className="text-gray-400 mb-5">{plan.description}</p>
                        <ul className="text-gray-300 mb-6 space-y-2">
                          {plan.features.map((feature, i) => (
                            <li key={i} className="flex items-start">
                              <svg
                                className="w-4 h-4 text-indigo-400 mr-2 mt-1"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <button
                        className={`btn w-full text-white font-semibold py-2.5 rounded-lg transition-all duration-300 ${plan.buttonClass} text-sm shadow-md mt-auto`}
                      >
                        {plan.buttonText}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </section>

      {/* Feature Comparison Table */}
      <section className="py-12 bg-black/70 text-sm">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-white mb-10 animate-fade-in-down">
            Compare Plans
          </h2>
          <div className="overflow-x-auto">
            <div className="min-w-[500px] sm:w-full text-left text-gray-200 text-sm shadow-lg rounded-md overflow-hidden">
              {/* Header Row */}
              <div className="hidden sm:flex bg-gradient-to-r from-gray-700 to-gray-800">
                <div className="w-[40%] px-4 py-3 font-semibold text-sm">
                  Feature
                </div>
                <div className="w-[18%] px-4 py-3 font-semibold text-center">
                  Free
                </div>
                <div className="w-[18%] px-4 py-3 font-semibold text-center">
                  Plus
                </div>
                <div className="w-[18%] px-4 py-3 font-semibold text-center">
                  Pro
                </div>
                <div className="w-[18%] px-4 py-3 font-semibold text-center">
                  Enterprise
                </div>
              </div>

              {/* Feature Rows */}
              {tableData.map((row, index) => (
                <div
                  key={index}
                  className="flex flex-col sm:flex-row border-t border-gray-700 hover:bg-gray-800/30 transition-colors duration-200"
                >
                  {/* Feature Name */}
                  <div className="w-full sm:w-[40%] px-4 py-3 font-medium bg-gray-800/50 sm:bg-transparent">
                    {row.feature}
                  </div>

                  {/* Plan Values */}
                  <div className="flex sm:contents">
                    <div className="w-1/2 sm:w-[18%] px-4 py-3 flex items-center justify-between sm:justify-center sm:border-l border-gray-700">
                      <span className="sm:hidden font-semibold">Free:</span>{" "}
                      {row.free}
                    </div>
                    <div className="w-1/2 sm:w-[18%] px-4 py-3 flex items-center justify-between sm:justify-center sm:border-l border-gray-700">
                      <span className="sm:hidden font-semibold">Plus:</span>{" "}
                      {row.plus}
                    </div>
                    <div className="w-1/2 sm:w-[18%] px-4 py-3 flex items-center justify-between sm:justify-center sm:border-l border-gray-700">
                      <span className="sm:hidden font-semibold">Pro:</span>{" "}
                      {row.pro}
                    </div>
                    <div className="w-1/2 sm:w-[18%] px-4 py-3 flex items-center justify-between sm:justify-center sm:border-l border-gray-700">
                      <span className="sm:hidden font-semibold">
                        Enterprise:
                      </span>{" "}
                      {row.enterprise}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-black/60">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center text-white mb-16 animate-fade-in-down">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md p-8 rounded-2xl hover:shadow-2xl hover:scale-102 transition-all duration-300 border border-indigo-500/20"
              >
                <h3 className="text-xl font-semibold text-white mb-4">
                  {faq.question}
                </h3>
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-indigo-700 to-purple-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 animate-fade-in">
            Ready to Supercharge Your CRM?
          </h2>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 animate-fade-in-up">
            Start with JHC CRM today and transform your customer relationships.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <button className="btn w-full sm:w-auto bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold py-4 px-10 rounded-xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 shadow-lg">
              Get Started - It's Free
            </button>
            <button className="btn w-full sm:w-auto bg-white/10 text-white font-bold py-4 px-10 rounded-xl border border-white hover:bg-white/20 transition-all duration-300 shadow-md">
              Contact Sales
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Pricing;
