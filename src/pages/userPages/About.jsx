import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-gray-100 sm:text-5xl sm:tracking-tight lg:text-6xl animate-fade-in">
            <span className="bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text text-transparent">
              About JHC CRM
            </span>
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-300">
            Streamlining your customer relationships with powerful tools
          </p>
        </div>

        <div className="mt-20">
          <div className="bg-white/10 backdrop-blur-md shadow-lg overflow-hidden sm:rounded-2xl border border-indigo-500/20">
            <div className="px-6 py-6 sm:px-8 sm:py-8 border-b border-gray-700">
              <h3 className="text-lg leading-6 font-medium text-gray-100">
                Our Mission
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-400">
                Empowering businesses to build stronger customer relationships
              </p>
            </div>
            <div className="px-6 py-6 sm:p-8">
              <p className="text-gray-300 mb-6">
                JHC CRM is a comprehensive customer relationship management platform designed to help businesses of all sizes manage their interactions with current and potential customers. Our solution integrates multiple communication channels into one seamless interface.
              </p>

              <div className="grid md:grid-cols-2 gap-8 mt-10">
                <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-indigo-500/20">
                  <div className="flex items-center mb-4">
                    <div className="flex-shrink-0 bg-indigo-500/20 p-3 rounded-md">
                      <svg
                        className="h-6 w-6 text-indigo-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        />
                      </svg>
                    </div>
                    <h3 className="ml-3 text-lg font-medium text-gray-100">WhatsApp Integration</h3>
                  </div>
                  <p className="mt-2 text-gray-400">
                    Send and receive WhatsApp messages directly from our platform. Manage conversations, automate responses, and track communication history with your customers.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-indigo-500/20">
                  <div className="flex items-center mb-4">
                    <div className="flex-shrink-0 bg-purple-500/20 p-3 rounded-md">
                      <svg
                        className="h-6 w-6 text-purple-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <h3 className="ml-3 text-lg font-medium text-gray-100">Email Management</h3>
                  </div>
                  <p className="mt-2 text-gray-400">
                    Centralize all your email communications. Send, receive, and track emails with built-in templates, scheduling, and analytics to improve your outreach.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-indigo-500/20">
                  <div className="flex items-center mb-4">
                    <div className="flex-shrink-0 bg-indigo-500/20 p-3 rounded-md">
                      <svg
                        className="h-6 w-6 text-indigo-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                        />
                      </svg>
                    </div>
                    <h3 className="ml-3 text-lg font-medium text-gray-100">Contact Management</h3>
                  </div>
                  <p className="mt-2 text-gray-400">
                    Organize all your customer information in one place. Track interactions, set reminders, and segment your contacts for targeted campaigns.
                  </p>
                </div>

                <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-indigo-500/20">
                  <div className="flex items-center mb-4">
                    <div className="flex-shrink-0 bg-purple-500/20 p-3 rounded-md">
                      <svg
                        className="h-6 w-6 text-purple-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                      </svg>
                    </div>
                    <h3 className="ml-3 text-lg font-medium text-gray-100">Analytics & Reporting</h3>
                  </div>
                  <p className="mt-2 text-gray-400">
                    Gain valuable insights with our comprehensive analytics. Track campaign performance, customer engagement, and team productivity.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 bg-white/10 backdrop-blur-md shadow-lg overflow-hidden sm:rounded-2xl border border-indigo-500/20">
            <div className="px-6 py-6 sm:px-8 sm:py-8 border-b border-gray-700">
              <h3 className="text-lg leading-6 font-medium text-gray-100">
                Our Team
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-400">
                Dedicated to building the best CRM experience
              </p>
            </div>
            <div className="px-6 py-6 sm:p-8">
              <p className="text-gray-300 mb-6">
                JHC CRM was founded by a team of customer relationship experts and software developers who saw the need for a more integrated, user-friendly CRM solution. We combine deep industry knowledge with cutting-edge technology to deliver a platform that actually works for your business.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <h3 className="text-lg font-medium text-gray-100">Ready to transform your customer relationships?</h3>
            <div className="mt-5">
              <button className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-xl shadow-md text-white bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-all duration-300">
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;