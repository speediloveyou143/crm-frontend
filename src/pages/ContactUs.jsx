 import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Contact options data array
const contactOptions = [
  {
    id: 1,
    title: "I'M NEW HERE",
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
    alt: 'New customer',
    details: [
      {
        text: 'Looking for a demo, or have questions about our products and pricing?',
        email: 'sales@jhccrm.com',
      },
      {
        text: 'Need help with adding licenses, changing plans, or additional services?',
        email: 'upgrade@jhccrm.com',
      },
    ],
  },
  {
    id: 2,
    title: 'EXISTING CUSTOMER',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80',
    alt: 'Existing customer',
    details: [
      {
        text: 'Want to renew your subscription or need details about your current plan?',
        email: 'renewal@jhccrm.com',
      },
      {
        text: "Need to cancel or downgrade your subscription? We're sad to see you go, but ready to help.",
        email: 'cancellation@jhccrm.com',
      },
    ],
  },
];

// Support team data array
const supportTeam = [
  {
    id: 1,
    name: 'Support Agent 1',
    role: 'Customer Success Specialist',
    email: 'support1@jhccrm.com',
    image: 'https://randomuser.me/api/portraits/men/21.jpg',
  },
  {
    id: 2,
    name: 'Support Agent 2',
    role: 'Customer Success Specialist',
    email: 'support2@jhccrm.com',
    image: 'https://randomuser.me/api/portraits/women/22.jpg',
  },
  {
    id: 3,
    name: 'Support Agent 3',
    role: 'Customer Success Specialist',
    email: 'support3@jhccrm.com',
    image: 'https://randomuser.me/api/portraits/men/23.jpg',
  },
  {
    id: 4,
    name: 'Support Agent 4',
    role: 'Customer Success Specialist',
    email: 'support4@jhccrm.com',
    image: 'https://randomuser.me/api/portraits/women/24.jpg',
  },
];

// Regional contacts data array
const regionalContacts = [
  {
    id: 1,
    region: 'India',
    image: 'https://images.unsplash.com/photo-1526478806334-5fd488fcaabc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1035&q=80',
    phoneNumbers: ['1800 103 1123', '1800 572 3535'],
    email: 'sales@jhccrm.com',
  },
  {
    id: 2,
    region: 'North America',
    image: 'https://images.unsplash.com/photo-1485727749690-d091e8284ef3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80',
    phoneNumbers: ['+1 (800) 123-4567'],
    email: 'sales.na@jhccrm.com',
  },
  {
    id: 3,
    region: 'Asia-Pacific',
    image: 'https://images.unsplash.com/photo-1536098767743-7a6dc31c196b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1587&q=80',
    phoneNumbers: ['+65 1234 5678'],
    email: 'sales.apac@jhccrm.com',
  },
  {
    id: 4,
    region: 'Middle East',
    image: 'https://images.unsplash.com/photo-1513407030348-c983a97b98d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
    phoneNumbers: ['+971 4 123 4567'],
    email: 'sales.mena@jhccrm.com',
  },
];

// Global offices data array
const globalOffices = [
  {
    id: 1,
    region: 'North America',
    image: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    address: '123 Business Ave, Suite 100<br />Austin, TX 78701',
    phone: '+1 (800) 123-4567',
  },
  {
    id: 2,
    region: 'Europe',
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1520&q=80',
    address: 'Business Street 4B<br />Amsterdam, Netherlands',
    phone: '+31 85 123 4567',
  },
  {
    id: 3,
    region: 'Asia-Pacific',
    image: 'https://images.unsplash.com/photo-1542051841857-5f90071e7989?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    address: '101 Cecil Street, #10-04<br />Singapore 069534',
    phone: '+65 1234 5678',
  },
];

const ContactUs = () => {
  // State to control modal visibility
  const [isModalOpen, setIsModalOpen] = useState(false);
  // State to control success message visibility
  const [showSuccess, setShowSuccess] = useState(false);

  // Functions to open and close modal
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => {
    setIsModalOpen(false);
    setShowSuccess(false); // Reset success message when closing modal
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
    setShowSuccess(true); // Show success message
    setTimeout(() => {
      setShowSuccess(false); // Hide success message after 3 seconds
      closeModal(); // Close modal after 3 seconds
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 px-4 py-12 font-sans">
      {/* Hero Section */}
      <div className="relative mt-8 mb-12 rounded-3xl overflow-hidden h-96 border border-gray-700 shadow-2xl">
        <img
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80&crop=top"
          alt="Customer support team"
          className="w-full h-full object-cover object-center opacity-30 transition-transform duration-700 hover:scale-105"
          style={{ objectPosition: 'center 20%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-indigo-900/40 opacity-90 flex items-center justify-center">
          <div className="text-center text-white px-4 animate-slide-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-300 tracking-tight">
              Contact JHC CRM Support
            </h1>
            <p className="text-xl text-gray-200 font-light tracking-wide">Our team is ready to help you succeed</p>
          </div>
        </div>
      </div>

      {/* Contact Options */}
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        {contactOptions.map((option) => (
          <div
            key={option.id}
            className="flex-1 bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all duration-500 border border-gray-700/50 backdrop-blur-sm"
          >
            <div className="flex items-center mb-6 animate-fade-in">
              <img
                src={option.image}
                alt={option.alt}
                className="w-20 h-20 rounded-full object-cover mr-4 border-2 border-indigo-400/70 shadow-md hover:scale-105 transition-transform duration-300"
              />
              <h2 className="text-2xl font-semibold text-white tracking-tight">{option.title}</h2>
            </div>
            {option.details.map((detail, index) => (
              <div key={index} className="mb-6">
                <p className="mb-2 text-gray-300 text-sm leading-relaxed">{detail.text}</p>
                <p className="text-indigo-400 font-medium hover:text-indigo-200 transition-colors duration-300">{detail.email}</p>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Concierge Section */}
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl mb-12 flex flex-col md:flex-row items-center shadow-2xl hover:shadow-[0_0_25px_rgba(99,102,241,0.3)] transition-all duration-500 border border-gray-700/50 backdrop-blur-sm">
        <div className="md:w-2/5 mb-6 md:mb-0">
          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
            alt="Concierge service"
            className="rounded-2xl w-full h-auto shadow-lg hover:shadow-[0_0_15px_rgba(99,102,241,0.4)] transition-all duration-500 hover:scale-[1.02]"
          />
        </div>
        <div className="md:w-3/5 md:pl-10 animate-slide-up">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-300 tracking-tight">
            Find your way around JHC CRM with Concierge
          </h2>
          <p className="mb-6 text-gray-300 text-sm md:text-base leading-relaxed">
            Not sure which JHC CRM product is the right fit for your company? Our dedicated concierge team will personally guide you through our solutions to find the perfect match for your business needs.
          </p>
          <button
            onClick={openModal}
            className="bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-[0_0_15px_rgba(99,102,241,0.5)] transition-all duration-300 hover:scale-[1.03] border border-indigo-600/50"
          >
            GET IN TOUCH
          </button>
        </div>
      </div>

      {/* Modal for Contact Form */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 animate-fade-in">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-3xl w-full max-w-lg shadow-2xl border border-gray-700/50 backdrop-blur-sm animate-slide-up">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-300 tracking-tight">
                Get in Touch
              </h2>
              <button
                onClick={closeModal}
                className="text-gray-400 hover:text-indigo-200 transition-colors duration-300"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            {showSuccess ? (
              <div className="mb-6 text-center text-green-500 text-lg font-medium animate-fade-in">
                Submitted successfully!!
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full p-3 rounded-lg bg-gray-700/50 border border-gray-600/50 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full p-3 rounded-lg bg-gray-700/50 border border-gray-600/50 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
                    placeholder="Enter your email address"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    className="w-full p-3 rounded-lg bg-gray-700/50 border border-gray-600/50 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    className="w-full p-3 rounded-lg bg-gray-700/50 border border-gray-600/50 text-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all duration-300"
                    placeholder="How can we assist you today?"
                  ></textarea>
                </div>
                <div className="flex justify-end space-x-4">
                  <button
                    type="button"
                    onClick={closeModal}
                    className="px-6 py-2 rounded-full text-gray-300 border border-gray-600 hover:bg-gray-700/50 transition-all duration-300"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 bg-gradient-to-r from-indigo-600 to-indigo-500 hover:from-indigo-500 hover:to-indigo-400 text-white rounded-full font-medium shadow-lg hover:shadow-[0_0_15px_rgba(99,102,241,0.5)] transition-all duration-300"
                  >
                    Submit
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Regional Contacts */}
      <div className="mb-16">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-300 tracking-tight animate-slide-up">
          Regional Contacts
        </h2>
        <p className="mb-8 text-gray-300 text-sm md:text-base">
          From questions about pricing to one-on-one personalized demos, we'd love to connect and help get you started.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {regionalContacts.map((contact) => (
            <div
              key={contact.id}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl shadow-xl hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all duration-500 border border-gray-700/50 backdrop-blur-sm animate-fade-in"
            >
              <div className="flex items-center mb-4">
                <img
                  src={contact.image}
                  alt={contact.region}
                  className="w-12 h-12 rounded-full object-cover mr-3 border-2 border-indigo-400/70 hover:scale-105 transition-transform duration-300"
                />
                <h3 className="font-medium text-lg text-white">{contact.region}</h3>
              </div>
              {contact.phoneNumbers.map((phone, index) => (
                <p key={index} className="mb-2 text-gray-300 text-sm">{phone}</p>
              ))}
              <p className="text-indigo-400 font-medium hover:text-indigo-200 transition-colors duration-300">{contact.email}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Global Offices */}
      <div className="mb-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-300 tracking-tight animate-slide-up">
          Our Global Offices
        </h1>
        <p className="mb-8 text-gray-300 text-sm md:text-base">
          Connect with one of our global offices or feel free to just send us a postcard. We won't mind!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {globalOffices.map((office) => (
            <div
              key={office.id}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl overflow-hidden shadow-2xl hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all duration-500 border border-gray-700/50 backdrop-blur-sm animate-fade-in"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={office.image}
                  alt={`${office.region} office`}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl mb-3 text-white tracking-tight">{office.region}</h3>
                <div className="flex items-start mb-2">
                  <svg className="w-5 h-5 text-indigo-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-300 text-sm" dangerouslySetInnerHTML={{ __html: office.address }} />
                </div>
                <div className="flex items-center">
                  <svg className="w-5 h-5 text-indigo-400 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <p className="text-indigo-400 font-medium hover:text-indigo-200 transition-colors duration-300">{office.phone}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Support Team */}
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-12 rounded-3xl mb-12 border border-gray-700/50 shadow-2xl hover:shadow-[0_0_25px_rgba(99,102,241,0.3)] transition-all duration-500 backdrop-blur-sm">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-300 tracking-tight animate-slide-up">
          Meet Our Support Team
        </h2>
        <p className="max-w-3xl mx-auto mb-12 text-center text-gray-300 text-sm md:text-base">
          Our dedicated support specialists are available 24/7 to help you with any questions or issues you may encounter.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {supportTeam.map((agent) => (
            <div
              key={agent.id}
              className="bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl shadow-xl hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all duration-500 border border-gray-700/50 backdrop-blur-sm text-center animate-fade-in"
            >
              <img
                src={agent.image}
                alt={agent.name}
                className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-indigo-400/70 shadow-md hover:scale-105 transition-transform duration-300"
              />
              <h4 className="font-semibold text-lg text-white tracking-tight">{agent.name}</h4>
              <p className="text-sm text-gray-300 mb-3">{agent.role}</p>
              <p className="text-sm text-indigo-400 font-medium hover:text-indigo-200 transition-colors duration-300">{agent.email}</p>
              <div className="mt-3 flex justify-center space-x-2">
                <button className="text-indigo-400 hover:text-indigo-200 transition-colors duration-300 hover:scale-110">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                </button>
                <button className="text-indigo-400 hover:text-indigo-200 transition-colors duration-300 hover:scale-110">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </button>
                <button className="text-indigo-400 hover:text-indigo-200 transition-colors duration-300 hover:scale-110">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;