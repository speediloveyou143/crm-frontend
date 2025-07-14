import { useState } from "react";

function Pricing() {
  const [isBusiness, setIsBusiness] = useState(true); // Toggle state

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 font-sans text-gray-100">
      {/* Hero Section */}
      <section className="py-24 bg-[url('https://source.unsplash.com/random/1920x1080/?business,technology')] bg-cover bg-center bg-no-repeat relative overflow-hidden">
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 animate-fade-in">
            <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
              Pricing That Scales
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-10 animate-fade-in-up">
            Discover the perfect plan for your business. Toggle to explore Personal or Business options.
          </p>
          {/* Fancy Toggle Switch */}
          <div className="flex justify-center mb-12">
            <div className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                id="planToggle"
                className="sr-only peer"
                checked={isBusiness}
                onChange={() => setIsBusiness(!isBusiness)}
              />
              <label
                htmlFor="planToggle"
                className="flex items-center p-1 bg-gradient-to-r from-gray-700 to-gray-800 rounded-full w-44 h-14 shadow-lg transition-all duration-500"
              >
                <span
                  className={`absolute w-20 h-12 rounded-full bg-gradient-to-r from-indigo-500 to-purple-600 shadow-[0_0_10px_rgba(99,102,241,0.7)] transition-transform duration-500 ease-out ${
                    isBusiness ? "translate-x-24" : "translate-x-2"
                  }`}
                ></span>
                <span
                  className={`z-10 px-6 py-3 text-lg font-semibold transition-colors duration-500 ${
                    !isBusiness ? "text-white" : "text-gray-300"
                  }`}
                >
                  Personal
                </span>
                <span
                  className={`z-10 px-6 py-3 text-lg font-semibold transition-colors duration-500 ${
                    isBusiness ? "text-white" : "text-gray-300"
                  }`}
                >
                  Business
                </span>
              </label>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          {isBusiness ? (
            <div>
              <h2 className="text-4xl font-extrabold text-center text-white mb-16 animate-fade-in-down">
                Business Plan
              </h2>
              <div className="grid grid-cols-1 max-w-3xl mx-auto">
                <div className="bg-white/10 backdrop-blur-md p-10 rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-indigo-500/20">
                  <h3 className="text-3xl font-bold text-white mb-6">Enterprise</h3>
                  <p className="text-5xl font-extrabold text-indigo-400 mb-4">Custom</p>
                  <p className="text-gray-300 mb-8">Contact us for pricing</p>
                  <p className="text-gray-400 mb-8">
                    Designed for large organizations with advanced CRM needs and high-volume communication.
                  </p>
                  <ul className="text-gray-300 mb-10 space-y-4">
                    {[
                      "Unlimited users",
                      "Unlimited WhatsApp conversations",
                      "Enterprise-grade security & compliance",
                      "Dedicated account manager",
                      "Advanced sales pipeline management",
                      "Multi-channel integration (WhatsApp, Instagram, Email, SMS)",
                      "Custom API access & webhooks",
                      "24/7 premium support",
                      "White-label options",
                      "Advanced analytics with custom reports"
                    ].map((feature, i) => (
                      <li key={i} className="flex items-center">
                        <svg
                          className="w-6 h-6 text-indigo-400 mr-3"
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
                  <button
                    className="btn w-full bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold py-4 rounded-xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 shadow-lg"
                  >
                    Contact Sales
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <h2 className="text-4xl font-extrabold text-center text-white mb-16 animate-fade-in-down">
                Personal Plans
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    name: "Free",
                    price: "$0",
                    billing: "forever",
                    description: "Perfect for freelancers and solo users getting started with CRM.",
                    features: [
                      "Up to 5 users",
                      "2 WhatsApp conversations/month",
                      "Basic lead management",
                      "Email support",
                      "Single dashboard view"
                    ],
                    buttonText: "Get Started for Free",
                    buttonClass: "bg-indigo-500 hover:bg-indigo-600"
                  },
                  {
                    name: "Plus",
                    price: "$29",
                    billing: "per month",
                    description: "Ideal for small businesses scaling their customer relationships.",
                    features: [
                      "Up to 500 users",
                      "500 WhatsApp conversations/month",
                      "Automated lead capture",
                      "Basic analytics dashboard",
                      "Email & chat support",
                      "Integration with email tools"
                    ],
                    buttonText: "Start Plus Plan",
                    buttonClass: "bg-indigo-500 hover:bg-indigo-600"
                  },
                  {
                    name: "Pro",
                    price: "$99",
                    billing: "per month",
                    description: "Advanced features for growing teams needing powerful CRM tools.",
                    features: [
                      "Up to 2,000 users",
                      "2,000 WhatsApp conversations/month",
                      "Advanced chatbots & automation",
                      "Real-time analytics & reporting",
                      "Multi-agent live chat support",
                      "Integration with HubSpot, Zoho, Salesforce",
                      "Priority email & phone support",
                      "Customizable templates"
                    ],
                    buttonText: "Start Pro Plan",
                    buttonClass: "bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700"
                  }
                ].map((plan, index) => (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-md p-8 rounded-2xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-indigo-500/20"
                  >
                    <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                    <p className="text-4xl font-extrabold text-indigo-400 mb-2">{plan.price}</p>
                    <p className="text-gray-300 mb-6">{plan.billing}</p>
                    <p className="text-gray-400 mb-6">{plan.description}</p>
                    <ul className="text-gray-300 mb-8 space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center">
                          <svg
                            className="w-5 h-5 text-indigo-400 mr-2"
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
                    <button
                      className={`btn w-full text-white font-semibold py-3 rounded-xl transition-all duration-300 ${plan.buttonClass} shadow-md`}
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

      {/* Feature Comparison Table */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center text-white mb-16 animate-fade-in-down">
            Compare Plans
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-gray-300 border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-gray-700 to-gray-800">
                  <th className="p-5 font-semibold">Feature</th>
                  <th className="p-5 font-semibold text-center">Free</th>
                  <th className="p-5 font-semibold text-center">Plus</th>
                  <th className="p-5 font-semibold text-center">Pro</th>
                  <th className="p-5 font-semibold text-center">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: "Users", free: "5", plus: "500", pro: "2,000", enterprise: "Unlimited" },
                  {
                    feature: "WhatsApp Conversations/Month",
                    free: "2",
                    plus: "500",
                    pro: "2,000",
                    enterprise: "Unlimited"
                  },
                  { feature: "Lead Management", free: "Basic", plus: "Advanced", pro: "Advanced", enterprise: "Enterprise" },
                  { feature: "Analytics Dashboard", free: "—", plus: "Basic", pro: "Advanced", enterprise: "Custom" },
                  { feature: "Chatbot Automation", free: "—", plus: "—", pro: "Advanced", enterprise: "Advanced" },
                  { feature: "Multi-Agent Support", free: "—", plus: "—", pro: "✓", enterprise: "✓" },
                  {
                    feature: "Third-Party Integrations",
                    free: "—",
                    plus: "Email",
                    pro: "HubSpot, Zoho, Salesforce",
                    enterprise: "Unlimited"
                  },
                  { feature: "Support", free: "Email", plus: "Email & Chat", pro: "Priority Email & Phone", enterprise: "24/7 Premium" },
                  { feature: "Custom API Access", free: "—", plus: "—", pro: "—", enterprise: "✓" },
                  { feature: "White-Label Options", free: "—", plus: "—", pro: "—", enterprise: "✓" }
                ].map((row, index) => (
                  <tr key={index} className="border-t border-gray-700 hover:bg-gray-800/50 transition-colors">
                    <td className="p-5">{row.feature}</td>
                    <td className="p-5 text-center">{row.free}</td>
                    <td className="p-5 text-center">{row.plus}</td>
                    <td className="p-5 text-center">{row.pro}</td>
                    <td className="p-5 text-center">{row.enterprise}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-extrabold text-center text-white mb-16 animate-fade-in-down">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                question: "What is a WhatsApp conversation?",
                answer:
                  "A WhatsApp conversation is a 24-hour message thread between your business and a customer. You can send unlimited messages within this window for a single charge, based on the conversation type (e.g., marketing, service)."
              },
              {
                question: "Can I switch between Personal and Business plans?",
                answer:
                  "Yes, use the toggle above to switch between plans. Upgrades or downgrades can be processed from your account settings, effective immediately or at the end of your billing cycle."
              },
              {
                question: "Is there a free trial?",
                answer:
                  "Yes, we offer a 7-day free trial for Personal plans (Plus and Pro) and a 14-day trial for the Enterprise plan. No credit card is required to start."
              },
              {
                question: "How are WhatsApp charges calculated?",
                answer:
                  "WhatsApp charges are based on conversation types (marketing, utility, service, authentication) and the recipient's country. User-initiated conversations are free within 24 hours, while business-initiated conversations incur a small fee."
              },
              {
                question: "What if I need custom features?",
                answer:
                  "The Enterprise plan offers custom API access and white-label options. Contact our sales team for tailored solutions."
              }
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md p-8 rounded-2xl hover:shadow-2xl hover:scale-102 transition-all duration-300 border border-indigo-500/20"
              >
                <h3 className="text-xl font-semibold text-white mb-4">{faq.question}</h3>
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
            <button
              className="btn w-full sm:w-auto bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-bold py-4 px-10 rounded-xl hover:from-indigo-600 hover:to-purple-700 transition-all duration-300 shadow-lg"
            >
              Get Started - It's Free
            </button>
            <button
              className="btn w-full sm:w-auto bg-white/10 text-white font-bold py-4 px-10 rounded-xl border border-white hover:bg-white/20 transition-all duration-300 shadow-md"
            >
              Contact Sales
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer p-12 bg-gradient-to-br from-gray-900 to-gray-800 text-gray-400 border-t border-gray-700">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">JHC CRM</h3>
              <p className="mb-6">Empowering businesses to build stronger customer relationships through innovative technology.</p>
              <div className="flex space-x-6">
                {['twitter', 'facebook', 'instagram', 'linkedin'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="text-gray-500 hover:text-indigo-400 transition-colors duration-300"
                  >
                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Product</h4>
              <ul className="space-y-4">
                {['Features', 'Pricing', 'Case Studies', 'Updates'].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-indigo-400 transition-colors duration-300">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Company</h4>
              <ul className="space-y-4">
                {['About Us', 'Careers', 'Contact', 'Blog'].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-indigo-400 transition-colors duration-300">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Support</h4>
              <ul className="space-y-4">
                {['Help Center', 'Documentation', 'Community', 'Status'].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-indigo-400 transition-colors duration-300">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p>© 2025 JHC CRM. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-indigo-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-indigo-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="hover:text-indigo-400 transition-colors duration-300">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Pricing;