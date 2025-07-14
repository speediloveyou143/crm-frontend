function Home() {
  return (
    <div className="min-h-screen from-blue-950 font-sans text-gray-100">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center bg-[#111827] overflow-hidden">
        <div className="relative container mx-auto px-4 text-center z-10">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block mb-6 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 animate-fade-in">
              <span className="text-sm font-medium text-indigo-300">Version 3.0 Released</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-fade-in-down">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-300">
                JHC CRM
              </span>
            </h1>
            <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 leading-relaxed text-gray-300 animate-fade-in-up">
              Streamline your business with <span className="font-semibold text-indigo-300">AI-powered</span> customer relationship management for sales, support, and growth.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up">
              <button className="btn btn-primary btn-lg rounded-full px-8 py-4 shadow-lg hover:scale-[1.02] transition-all duration-300 font-semibold flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 border-indigo-600">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                </svg>
                Start Managing Now
              </button>
              <button className="btn btn-outline btn-lg rounded-full px-8 py-4 border-gray-400 hover:bg-white/5 transition-all duration-300 font-semibold text-gray-200">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-6 left-0 right-0 flex justify-center animate-bounce">
          <svg className="h-8 w-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-gray-800 relative -mt-16 z-10 rounded-t-3xl shadow-xl border-t border-gray-700">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "15K+", label: "Active Users", color: "text-indigo-400" },
              { number: "98%", label: "Customer Retention", color: "text-emerald-400" },
              { number: "24/7", label: "Support Available", color: "text-amber-400" },
              { number: "100+", label: "Businesses", color: "text-purple-400" }
            ].map((stat, index) => (
              <div key={index} className="text-center p-6 bg-gray-700/50 rounded-xl hover:bg-gray-700 transition-colors duration-300 border border-gray-700">
                <p className={`text-3xl md:text-4xl font-bold ${stat.color} mb-2`}>{stat.number}</p>
                <p className="text-gray-300 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Empower Your <span className="text-indigo-400">Business</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Comprehensive tools designed to optimize customer relationships and drive growth
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                title: "Lead Management",
                description: "Capture, track, and nurture leads with automated workflows and personalized follow-ups.",
                color: "text-indigo-400"
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Sales Pipeline",
                description: "Visualize and manage your sales process with drag-and-drop deal tracking and forecasting.",
                color: "text-purple-400"
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                ),
                title: "Customer Support",
                description: "Provide exceptional support with ticketing, live chat, and automated resolution tools.",
                color: "text-pink-400"
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                ),
                title: "Analytics & Reporting",
                description: "Gain insights with real-time dashboards and customizable reports for data-driven decisions.",
                color: "text-blue-400"
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 14v6m-3-3h6M6 10h2a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2zm10 0h2a2 2 0 002-2V6a2 2 0 00-2-2h-2a2 2 0 00-2 2v2a2 2 0 002 2zM6 20h2a2 2 0 002-2v-2a2 2 0 00-2-2H6a2 2 0 00-2 2v2a2 2 0 002 2z" />
                  </svg>
                ),
                title: "Integration Hub",
                description: "Seamlessly connect with your favorite tools like email, calendars, and marketing platforms.",
                color: "text-teal-400"
              },
              {
                icon: (
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                ),
                title: "Data Security",
                description: "Enterprise-grade security to protect your customer data and ensure compliance.",
                color: "text-amber-400"
              }
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-gray-800 p-8 rounded-xl hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-700"
              >
                <div className={`${feature.color} mb-6`}>{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Trusted by <span className="text-indigo-400">Businesses</span> Worldwide
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Hear from companies that transformed their customer relationships
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "JHC CRM boosted our lead conversion rate by 40% in just three months!",
                name: "Laura Thompson",
                role: "Sales Manager",
                avatar: "https://randomuser.me/api/portraits/women/45.jpg"
              },
              {
                quote: "The analytics dashboard gives us clear insights to make smarter decisions daily.",
                name: "James Lee",
                role: "Marketing Director",
                avatar: "https://randomuser.me/api/portraits/men/33.jpg"
              },
              {
                quote: "Customer support has never been easier with JHC's ticketing and automation tools.",
                name: "Aisha Khan",
                role: "Customer Success Lead",
                avatar: "https://randomuser.me/api/portraits/women/69.jpg"
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-gray-700 p-8 rounded-xl hover:bg-gray-600 transition-colors duration-300">
                <div className="flex items-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 italic mb-6">"{testimonial.quote}"</p>
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
      <section className="py-20 bg-gradient-to-r from-indigo-700 to-purple-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Customer Relationships?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Join thousands of businesses driving growth with JHC CRM
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="btn btn-primary btn-lg rounded-full px-8 py-4 shadow-lg hover:bg-indigo-600 transition-colors duration-300 font-semibold bg-indigo-500 border-indigo-500">
                Get Started - It's Free
              </button>
              <button className="btn btn-outline btn-lg rounded-full px-8 py-4 border-white text-white hover:bg-white/10 transition-colors duration-300 font-semibold">
                See How It Works
              </button>
            </div>
            <p className="mt-6 text-sm opacity-80">
              No credit card required. 7-day free trial.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer p-12 bg-gray-900 text-gray-400 border-t border-gray-800">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold text-white mb-4">JHC CRM</h3>
              <p className="mb-4">Empowering businesses to build stronger customer relationships through innovative technology.</p>
              <div className="flex space-x-4">
                {['twitter', 'facebook', 'instagram', 'linkedin'].map((social) => (
                  <a key={social} href="#" className="text-gray-500 hover:text-white transition-colors">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Product</h4>
              <ul className="space-y-2">
                {['Features', 'Pricing', 'Case Studies', 'Updates'].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2">
                {['About Us', 'Careers', 'Contact', 'Blog'].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2">
                {['Help Center', 'Documentation', 'Community', 'Status'].map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p>© 2025 JHC CRM. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;