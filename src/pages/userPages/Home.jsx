
import PrivacyPolicy from "./PrivacyPolicy";
import { Link } from 'react-router-dom';
function Home() {
  return (
    <div className="font-sans text-gray-100 bg-gray-950">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-10"></div>
        <div className="relative container mx-auto px-6 text-center z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
              </span>
              <span className="text-sm font-medium text-indigo-300">Version 3.0 Released</span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 animate-fade-in-down">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-300 leading-tight">
                JHC CRM
              </span>
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-10 leading-relaxed text-gray-300 animate-fade-in-up">
              Transform your customer relationships with our <span className="font-semibold text-indigo-300">AI-powered</span> platform designed for sales excellence and sustainable growth.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up">
              <button className="relative group flex items-center justify-center gap-3 bg-indigo-600 hover:bg-indigo-800 text-white font-semibold text-lg px-5 py-2  rounded-full transition-all duration-300 shadow-lg hover:shadow-2xl">
                <span className="relative z-10">Start Managing Now</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 z-10" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                </svg>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
              <button className="flex items-center justify-center gap-3 border-2 border-gray-400 hover:border-white text-gray-200 hover:text-white font-semibold text-lg px-4 py-2 rounded-full transition-all duration-300 hover:bg-white/5">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Watch Demo
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce-slow">
          <svg className="h-8 w-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-800 relative -mt-16 z-10 rounded-t-3xl shadow-2xl border-t border-gray-700/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "15K+", label: "Active Users", color: "text-indigo-400" },
              { number: "98%", label: "Customer Retention", color: "text-emerald-400" },
              { number: "24/7", label: "Support Available", color: "text-amber-400" },
              { number: "100+", label: "Enterprise Clients", color: "text-purple-400" }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-colors duration-300 border border-gray-700/50 backdrop-blur-sm">
                <p className={`text-3xl md:text-4xl font-bold ${stat.color} mb-3`}>{stat.number}</p>
                <p className="text-gray-300 font-medium text-sm uppercase tracking-wider">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Enterprise-Grade <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">CRM Solutions</span>
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              Comprehensive tools designed to optimize customer relationships and drive measurable business growth
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                  </svg>
                ),
                title: "Lead Management",
                description: "Capture, track, and nurture leads with intelligent workflows and personalized engagement strategies.",
                color: "text-indigo-400"
              },
              {
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                  </svg>
                ),
                title: "Sales Analytics",
                description: "Real-time pipeline visualization with predictive forecasting and performance metrics.",
                color: "text-purple-400"
              },
              {
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path>
                  </svg>
                ),
                title: "Customer Support",
                description: "Omnichannel support platform with AI-powered ticket routing and resolution.",
                color: "text-pink-400"
              },
              {
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                  </svg>
                ),
                title: "Marketing Automation",
                description: "Create targeted campaigns with behavioral triggers and conversion tracking.",
                color: "text-blue-400"
              },
              {
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
                  </svg>
                ),
                title: "Custom Reporting",
                description: "Build tailored dashboards with drag-and-drop widgets and scheduled exports.",
                color: "text-teal-400"
              },
              {
                icon: (
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                ),
                title: "Enterprise Security",
                description: "SOC 2 compliant infrastructure with role-based access and audit logs.",
                color: "text-amber-400"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="group bg-gray-800/50 p-8 rounded-xl hover:shadow-lg transition-all duration-300 border border-gray-700/50 hover:border-gray-600/50 hover:bg-gray-800/70"
              >
                <div className={`${feature.color} mb-6`}>{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                <div className="mt-6">
                  <button className="text-sm font-medium text-indigo-400 hover:text-indigo-300 flex items-center gap-2 transition-colors duration-200">
                    Learn more
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-gray-800/70">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20 max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold text-white mb-6">
              Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Industry Leaders</span>
            </h2>
            <p className="text-xl text-gray-400 leading-relaxed">
              Organizations worldwide rely on JHC CRM to drive customer success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "JHC CRM reduced our sales cycle by 35% while improving win rates. The platform pays for itself.",
                name: "Sarah Johnson",
                role: "VP of Sales, TechCorp",
                avatar: "https://randomuser.me/api/portraits/women/68.jpg"
              },
              {
                quote: "The predictive analytics have transformed how we allocate resources across our pipeline.",
                name: "Michael Chen",
                role: "Revenue Operations, GrowthInc",
                avatar: "https://randomuser.me/api/portraits/men/32.jpg"
              },
              {
                quote: "Our customer satisfaction scores increased by 28 points after implementing JHC's support tools.",
                name: "Priya Patel",
                role: "CX Director, ServiceFirst",
                avatar: "https://randomuser.me/api/portraits/women/44.jpg"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-700/30 p-8 rounded-xl hover:bg-gray-700/50 transition-colors duration-300 border border-gray-700/50">
                <div className="flex items-center mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 italic mb-8 leading-relaxed">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-indigo-500/30"
                  />
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900/90 via-indigo-900/90 to-purple-900/90">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Ready to Transform Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Customer Experience</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
              Join thousands of businesses accelerating growth with JHC CRM
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="relative group overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold text-lg px-5 py-2 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300">
                <span className="relative z-10">Start Free Trial</span>
                <span className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
              </button>
              <button className="relative group overflow-hidden border-2 border-gray-300 text-gray-200 font-semibold text-lg px-5 py-2 rounded-full hover:text-white hover:border-white transition-all duration-300 hover:bg-white/5">
                <span className="relative z-10">Schedule Demo</span>
              </button>
            </div>
            <p className="mt-8 text-gray-400 text-sm">
              No credit card required • Cancel anytime • 24/7 support
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;