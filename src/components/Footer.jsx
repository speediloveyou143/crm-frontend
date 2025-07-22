import React from 'react';
import { FaLinkedin, FaXTwitter, FaYoutube } from "react-icons/fa6";
import { Link } from 'react-router-dom';

function Footer() {
  // Data for footer links to make it more maintainable
  const footerLinks = [
    {
      title: "Product",
      links: ['Features', 'Pricing', 'Case Studies', 'Updates']
    },
    {
      title: "Company",
      links: ['About Us', 'Careers', 'Contact', 'Blog']
    },
    {
      title: "Support",
      links: ['Help Center', 'Documentation', 'Community', 'Status']
    }
  ];

  const socialLinks = [
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/company/javahomecloud/"
    },
    {
      icon: <FaXTwitter />,
      url: "https://x.com/javahomecloud?t=meNCKDcCpX3NmEIPdHy9HA&s=09"
    },
    {
      icon: <FaYoutube />,
      url: "https://youtube.com/@javahomecloud?si=Xup43TneqSRkcEcT"
    }
  ];

  const legalLinks = [
    {
      text: "Privacy Policy",
      url: "/privacy-policy"
    },
    {
      text: "Terms of Service",
      url: "#"
    },
    {
      text: "Cookies",
      url: "#"
    }
  ];

  return (
    <footer className="footer p-12 bg-gray-900 text-gray-400 border-t border-gray-800">
      <div className="container mx-auto">
        {/* Main footer content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand/Company info */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">JHC CRM</h3>
            <p className="mb-4 pr-[7%]">
              Empowering businesses to build stronger customer relationships through innovative technology.
            </p>
            
            {/* Social media links */}
            <div>
              <p className="text-sm mb-2">Follow us on:</p>
              <div className="flex gap-5 mt-3 text-2xl">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Dynamic footer links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold text-white mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a href="#" className="hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer bottom (legal/copyright) */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} JHC CRM. All rights reserved.</p>
          
          <div className="flex space-x-6 mt-4 md:mt-0 ml-10">
            {legalLinks.map((link, index) => (
              link.url.startsWith("/") ? (
                <Link 
                  key={index}
                  to={link.url} 
                  className="hover:text-white transition-colors"
                >
                  {link.text}
                </Link>
              ) : (
                <a 
                  key={index}
                  href={link.url} 
                  className="hover:text-white transition-colors"
                >
                  {link.text}
                </a>
              )
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;