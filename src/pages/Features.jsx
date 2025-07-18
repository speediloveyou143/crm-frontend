import React from 'react';
import { FaWhatsapp, FaEnvelope, FaPhone, FaUsers, FaChartLine, FaRobot } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// Define feature data
const features = [
  {
    icon: <FaWhatsapp className="h-7 w-7 text-indigo-400 group-hover:text-indigo-300" />,
    name: 'WhatsApp Integration',
    content: 'Seamlessly connect with customers via WhatsApp. Automate responses, manage chats, and track interactions effortlessly.',
    bgColor: 'bg-indigo-600/30',
    hoverBgColor: 'group-hover:bg-indigo-600/50',
  },
  {
    icon: <FaEnvelope className="h-7 w-7 text-purple-400 group-hover:text-purple-300" />,
    name: 'Email Management',
    content: 'Centralize email campaigns with customizable templates, scheduling, and analytics for optimized outreach.',
    bgColor: 'bg-purple-600/30',
    hoverBgColor: 'group-hover:bg-purple-600/50',
  },
  {
    icon: <FaPhone className="h-7 w-7 text-indigo-400 group-hover:text-indigo-300 rotate-90 " />,
    name: 'Phone Call Support',
    content: 'Manage calls directly with integrated logs, reminders, and analytics to stay connected with clients.',
    bgColor: 'bg-indigo-600/30',
    hoverBgColor: 'group-hover:bg-indigo-600/50',
  },
  {
    icon: <FaUsers className="h-7 w-7 text-purple-400 group-hover:text-purple-300" />,
    name: 'Contact Management',
    content: 'Organize and segment contacts with ease. Track interactions and create targeted campaigns intuitively.',
    bgColor: 'bg-purple-600/30',
    hoverBgColor: 'group-hover:bg-purple-600/50',
  },
  {
    icon: <FaChartLine className="h-7 w-7 text-teal-400 group-hover:text-teal-300" />,
    name: 'Advanced Analytics',
    content: 'Unlock actionable insights with real-time dashboards, predictive analytics, and customizable reports.',
    bgColor: 'bg-teal-600/30',
    hoverBgColor: 'group-hover:bg-teal-600/50',
    badge: { label: 'New!', subLabel: 'AI-Driven Insights', color: 'text-teal-400' },
  },
  {
    icon: <FaRobot className="h-7 w-7 text-pink-400 group-hover:text-pink-300" />,
    name: 'Smart Automation',
    content: 'Streamline workflows with AI-powered automation for lead nurturing, follow-ups, and bulk messaging.',
    bgColor: 'bg-pink-600/30',
    hoverBgColor: 'group-hover:bg-pink-600/50',
    badge: { label: 'New!', subLabel: 'Custom Workflows', color: 'text-pink-400' },
  },
];

export default function Features() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-gray-900 to-gray-800 py-12 px-4 sm:px-6 lg:px-8 font-sans text-gray-100 mt-[5.5%]">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20 m-10">
          <div className="inline-block mb-4 px-3 py-1 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
            <span className="text-sm font-medium text-indigo-300">Explore Our Tools</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-300">
              JHC CRM Features
            </span>
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg md:text-xl text-gray-300 leading-relaxed">
            Discover <span className="font-semibold text-indigo-300">AI-powered</span> tools to streamline your business and drive growth.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-700/50 backdrop-blur-sm p-6 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-700 group"
            >
              <div className="flex items-center mb-4">
                <div className={`flex-shrink-0 p-2 rounded-md ${feature.bgColor} ${feature.hoverBgColor} transition-colors duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="ml-3 text-lg font-semibold text-white">{feature.name}</h3>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">{feature.content}</p>
              {feature.badge && (
                <div className="mt-3 flex items-center gap-2">
                  <span className={`text-xs font-medium ${feature.badge.color}`}>{feature.badge.label}</span>
                  <span className="text-xs text-gray-400">{feature.badge.subLabel}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Transform Your <span className="text-indigo-400">Business</span>?
          </h3>
          <p className="text-lg text-gray-300 opacity-90 mb-6 max-w-2xl mx-auto">
            Join thousands of businesses driving growth with JHC CRM.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">

            < Link to="/signin" >
              <button className="flex items-center gap-2 rounded-full px-4 py-2 bg-indigo-600 hover:bg-indigo-500 border-indigo-600 shadow-md hover:scale-[1.02] transition-all duration-300 font-semibold text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                Start Free Trial
              </button>
            </Link>
            <Link to="/pricing">
              <button className="rounded-full px-4 py-2 border border-gray-400 hover:bg-white/5 transition-all duration-300 font-semibold text-gray-200">
                Explore Pricing
              </button>
            </Link>
          </div>
          <p className="mt-4 text-xs text-gray-400 opacity-80">
            No credit card required. Free Trial.
          </p>
        </div>
      </div>
    </div >
  );
}