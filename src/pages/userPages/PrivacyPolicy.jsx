//  import React from "react";

// function PolicySection({ data }) {
//   return (
//     <div className="mb-8 bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl shadow-xl hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all duration-500 border border-gray-700/50 backdrop-blur-sm animate-fade-in">
//       <h3 className="text-2xl md:text-3xl font-semibold text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-300 tracking-tight mb-3">
//         {data.index}. {data.title}
//       </h3>
//       <p className="mb-4 text-gray-300 text-sm md:text-base leading-relaxed">{data.content}</p>
//       <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-300">
//         {data.points.map((point, i) => (
//           <li key={i} className="leading-relaxed">
//             {point}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// const PrivacyPolicy = () => {
//   const policyData = [
//     {
//       index: "1",
//       title: "Information We Collect",
//       content:
//         "We collect several types of information from and about users of our website, including:",
//       points: [
//         "Personal information such as name, email address, and contact details",
//         "Information about your internet connection, the equipment you use to access our website, and usage details",
//         "Course progress, completion data, and other educational information",
//       ],
//     },
//     {
//       index: "2",
//       title: "How We Use Your Information",
//       content:
//         "We use information that we collect about you or that you provide to us, including any personal information:",
//       points: [
//         "To present our website and its contents to you",
//         "To provide you with information, products, or services that you request from us",
//         "To fulfill any other purpose for which you provide it",
//         "To notify you about changes to our website or any products or services we offer",
//       ],
//     },
//     {
//       index: "3",
//       title: "Disclosure of Your Information",
//       content:
//         "We may disclose aggregated information about our users without restriction. We may disclose personal information:",
//       points: [
//         "To our subsidiaries and affiliates",
//         "To contractors, service providers, and other third parties we use to support our business",
//         "To fulfill the purpose for which you provide it",
//       ],
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-900 text-gray-100 px-4 py-12 font-sans">
//       {/* Header */}
//       <header className="relative mt-8 mb-12 rounded-3xl overflow-hidden h-96 border border-gray-700 shadow-2xl">
//         <img
//           src="https://www.shutterstock.com/image-illustration/cyber-security-data-protection-business-260nw-2476569139.jpg"
//           alt="Privacy policy background"
//           className="w-full h-full object-cover object-center opacity-30 transition-transform duration-700 hover:scale-105"
//           style={{ objectPosition: "center 20%" }}
//         />
//         <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-indigo-900/40 opacity-90 flex items-center justify-center">
//           <div className="text-center text-white px-4 animate-slide-up">
//             <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-300 tracking-tight">
//               Privacy Policy
//             </h1>
//             <p className="text-xl text-gray-200 font-light tracking-wide">
//               Last Updated: June 24, 2025
//             </p>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
//         <div className="bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden shadow-xl rounded-2xl border border-gray-700/50 backdrop-blur-sm">
//           <div className="p-8 sm:p-12">
//             <div className="max-w-none">
//               <p className="mb-8 text-gray-300 text-sm md:text-base leading-relaxed animate-fade-in">
//                 At JHC CRM, we respect your privacy and are committed to
//                 protecting it through our compliance with this policy. This
//                 Privacy Policy describes how we collect, use, and disclose your
//                 personal information when you use our services.
//               </p>

//               {policyData.map((section, index) => (
//                 <PolicySection key={index} data={section} />
//               ))}

//               <div className="mt-10 pt-6 border-t border-gray-700">
//                 <h3 className="text-2xl md:text-3xl font-semibold text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-300 tracking-tight mb-4 animate-slide-up">
//                   Contact Information
//                 </h3>
//                 <p className="text-gray-300 text-sm md:text-base leading-relaxed">
//                   If you have any questions about this Privacy Policy or our
//                   privacy practices, please contact us at:{" "}
//                   <a
//                     href="mailto:jhc@gmail.com"
//                     className="text-indigo-400 hover:text-indigo-200 transition-colors duration-300 font-medium"
//                   >
//                     jhc@gmail.com
//                   </a>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="bg-gradient-to-br from-gray-800 to-gray-900 border-t border-gray-700 mt-12">
//         <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
//           <p className="text-center text-gray-300 text-sm">
//             © {new Date().getFullYear()} JHC CRM. All rights reserved.
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default PrivacyPolicy;





// import React from 'react';
// import { Link } from 'react-router-dom';

// // Consolidated content array including intro, policy sections, and contact
// const contentData = [
//   {
//     id: 'introduction',
//     index: null,
//     title: null,
//     content:
//       'At JHC CRM, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, share, and protect your data when you use our services, including our website and CRM platform. By using our services, you agree to the practices described in this policy.',
//     points: [],
//     type: 'intro',
//   },
//   {
//     id: 'information-collection',
//     index: '1',
//     title: 'Information We Collect',
//     content:
//       'We collect information to provide better services to our users. This includes:',
//     points: [
//       'Personal information such as name, email address, and contact details provided when you register or interact with our services.',
//       'Usage data, including your IP address, browser type, device information, and pages visited on our website.',
//       'Course progress, completion data, and other educational or CRM-related information when you use our platform.',
//       'Cookies and similar technologies to enhance user experience and track usage patterns.',
//     ],
//     type: 'section',
//   },
//   {
//     id: 'information-use',
//     index: '2',
//     title: 'How We Use Your Information',
//     content:
//       'We use the information we collect to operate, maintain, and improve our services, including:',
//     points: [
//       'Providing and personalizing our website and services to meet your needs.',
//       'Processing transactions and fulfilling requests for products or services.',
//       'Sending you updates, promotional materials, or notifications about changes to our services (with your consent).',
//       'Analyzing usage patterns to improve our platform’s functionality and user experience.',
//     ],
//     type: 'section',
//   },
//   {
//     id: 'information-sharing',
//     index: '3',
//     title: 'Sharing of Your Information',
//     content:
//       'We do not share your personal information except in the following cases:',
//     points: [
//       'With subsidiaries, affiliates, or trusted third-party service providers who assist in delivering our services, bound by confidentiality agreements.',
//       'To comply with legal obligations, such as responding to lawful requests or protecting our rights.',
//       'With your consent, for specific purposes like marketing or partnerships.',
//       'In aggregated or anonymized form that does not identify you personally.',
//     ],
//     type: 'section',
//   },
//   {
//     id: 'data-security',
//     index: '4',
//     title: 'Data Security',
//     content:
//       'We take the security of your data seriously and implement measures to protect it:',
//     points: [
//       'Encryption of sensitive data during transmission and storage.',
//       'Regular security audits and updates to safeguard against unauthorized access.',
//       'Access controls to ensure only authorized personnel can access your data.',
//       'However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.',
//     ],
//     type: 'section',
//   },
//   {
//     id: 'your-rights',
//     index: '5',
//     title: 'Your Rights',
//     content:
//       'You have certain rights regarding your personal information, subject to applicable laws:',
//     points: [
//       'Access, correct, or delete your personal data by contacting us.',
//       'Opt out of marketing communications at any time via the unsubscribe link or by contacting us.',
//       'Request data portability or restrict processing in certain jurisdictions.',
//       'Lodge a complaint with a supervisory authority if you believe your rights have been violated.',
//     ],
//     type: 'section',
//   },
//   {
//     id: 'cookies',
//     index: '6',
//     title: 'Cookies and Tracking Technologies',
//     content:
//       'We use cookies and similar technologies to enhance your experience:',
//     points: [
//       'Essential cookies to enable core website functionality.',
//       'Analytics cookies to understand how users interact with our services.',
//       'Advertising cookies to deliver personalized ads (with your consent).',
//       'You can manage cookie preferences through your browser settings.',
//     ],
//     type: 'section',
//   },
//   {
//     id: 'third-party-links',
//     index: '7',
//     title: 'Third-Party Links',
//     content:
//       'Our website may contain links to third-party sites not controlled by JHC CRM:',
//     points: [
//       'We are not responsible for the privacy practices or content of these sites.',
//       'We encourage you to review the privacy policies of any third-party sites you visit.',
//     ],
//     type: 'section',
//   },
//   {
//     id: 'changes',
//     index: '8',
//     title: 'Changes to This Privacy Policy',
//     content:
//       'We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements:',
//     points: [
//       'Changes will be posted on this page with an updated "Last Updated" date.',
//       'We encourage you to review this policy regularly for any updates.',
//       'Your continued use of our services after changes constitutes acceptance of the updated policy.',
//     ],
//     type: 'section',
//   },
//   {
//     id: 'contact',
//     index: null,
//     title: 'Contact Us',
//     content:
//       'If you have any questions about this Privacy Policy or our data practices, please reach out to us at:<br /><a href="mailto:privacy@jhccrm.com" class="text-indigo-400 hover:text-indigo-200 transition-colors duration-300 font-medium">privacy@jhccrm.com</a><br />JHC CRM, 123 Business Ave, Suite 100, Austin, TX 78701<br />Phone: +1 (800) 123-4567',
//     points: [],
//     type: 'contact',
//   },
// ];

// // Component to render different types of content
// const ContentSection = ({ data }) => {
//   if (data.type === 'intro') {
//     return (
//       <div id={data.id} className="mb-12 p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all duration-500 border border-gray-700/50 backdrop-blur-sm animate-fade-in">
//         <p className="text-gray-300 text-sm md:text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: data.content }} />
//       </div>
//     );
//   } else if (data.type === 'contact') {
//     return (
//       <div id={data.id} className="mt-10 pt-6 border-t border-gray-700">
//         <h3 className="text-2xl md:text-3xl font-semibold text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-300 tracking-tight mb-4 animate-slide-up">
//           {data.title}
//         </h3>
//         <p className="text-gray-300 text-sm md:text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: data.content }} />
//       </div>
//     );
//   } else {
//     return (
//       <div id={data.id} className="mb-12 p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all duration-500 border border-gray-700/50 backdrop-blur-sm animate-fade-in">
//         <h3 className="text-2xl md:text-3xl font-semibold text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-300 tracking-tight mb-4">
//           {data.index}. {data.title}
//         </h3>
//         <p className="mb-4 text-gray-300 text-sm md:text-base leading-relaxed">{data.content}</p>
//         <ul className="list-disc pl-6 space-y-2 text-gray-300 text-sm md:text-base">
//           {data.points.map((point, i) => (
//             <li key={i} className="leading-relaxed">{point}</li>
//           ))}
//         </ul>
//       </div>
//     );
//   }
// };

// const PrivacyPolicy = () => {
//   return (
//     <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
//       {/* Header */}
//       <header className="relative mt-8 mx-5 mb-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all duration-500 border border-gray-700/50 backdrop-blur-sm overflow-hidden h-80">
//         <img
//           src="https://www.shutterstock.com/image-illustration/cyber-security-data-protection-business-260nw-2476569139.jpg"
//           alt="Privacy policy background"
//           className="w-full h-full object-cover object-center opacity-30 transition-transform duration-700 hover:scale-105"
//           style={{ objectPosition: 'center 20%' }}
//         />
//         <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-indigo-900/40 opacity-90 flex items-center justify-center">
//           <div className="text-center text-white px-4 animate-slide-up">
//             <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-300 tracking-tight">
//               JHC CRM Privacy Policy
//             </h1>
//             <p className="text-xl text-gray-200 font-light tracking-wide">
//               Last Updated: July 18, 2025
//             </p>
//           </div>
//         </div>
//       </header>

//       {/* Main Content with Sidebar */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row gap-8">
//         {/* Sidebar Navigation */}
//         <aside className="md:w-1/4 bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl shadow-2xl border border-gray-700/50 backdrop-blur-sm sticky top-8">
//           <h2 className="text-xl font-semibold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-300 tracking-tight">
//             Table of Contents
//           </h2>
//           <ul className="space-y-2">
//             {contentData
//               .filter((section) => section.title) // Only show sections with titles in the sidebar
//               .map((section) => (
//                 <li key={section.id}>
//                   <a
//                     href={`#${section.id}`}
//                     className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 text-sm md:text-base"
//                   >
//                     {section.index ? `${section.index}. ${section.title}` : section.title}
//                   </a>
//                 </li>
//               ))}
//           </ul>
//         </aside>

//         {/* Main Content */}
//         <main className="md:w-3/4">
//           <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl border border-gray-700/50 backdrop-blur-sm">
//             {contentData.map((section) => (
//               <ContentSection key={section.id} data={section} />
//             ))}
//           </div>
//         </main>
//       </div>

//       {/* Footer */}
//       <footer className="bg-gradient-to-br from-gray-800 to-gray-900 border-t border-gray-700 mt-12">
//         <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
//           <div className="flex flex-col md:flex-row justify-between items-center">
//             <p className="text-gray-300 text-sm mb-4 md:mb-0">
//               © {new Date().getFullYear()} JHC CRM. All rights reserved.
//             </p>
//             <div className="flex space-x-4">
//               <Link to="/contact" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 text-sm">
//                 Contact Us
//               </Link>
//               <Link to="/terms" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 text-sm">
//                 Terms of Service
//               </Link>
//               <a href="https://twitter.com/jhccrm" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 text-sm">
//                 Twitter
//               </a>
//               <a href="https://linkedin.com/company/jhccrm" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 text-sm">
//                 LinkedIn
//               </a>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default PrivacyPolicy;






// import React from "react";

// function PolicySection({ data }) {
//   return (
//     <div className="mb-8 bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl shadow-xl hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all duration-500 border border-gray-700/50 backdrop-blur-sm animate-fade-in">
//       <h3 className="text-2xl md:text-3xl font-semibold text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-300 tracking-tight mb-3">
//         {data.index}. {data.title}
//       </h3>
//       <p className="mb-4 text-gray-300 text-sm md:text-base leading-relaxed">{data.content}</p>
//       <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-300">
//         {data.points.map((point, i) => (
//           <li key={i} className="leading-relaxed">
//             {point}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// const PrivacyPolicy = () => {
//   const policyData = [
//     {
//       index: "1",
//       title: "Information We Collect",
//       content:
//         "We collect several types of information from and about users of our website, including:",
//       points: [
//         "Personal information such as name, email address, and contact details",
//         "Information about your internet connection, the equipment you use to access our website, and usage details",
//         "Course progress, completion data, and other educational information",
//       ],
//     },
//     {
//       index: "2",
//       title: "How We Use Your Information",
//       content:
//         "We use information that we collect about you or that you provide to us, including any personal information:",
//       points: [
//         "To present our website and its contents to you",
//         "To provide you with information, products, or services that you request from us",
//         "To fulfill any other purpose for which you provide it",
//         "To notify you about changes to our website or any products or services we offer",
//       ],
//     },
//     {
//       index: "3",
//       title: "Disclosure of Your Information",
//       content:
//         "We may disclose aggregated information about our users without restriction. We may disclose personal information:",
//       points: [
//         "To our subsidiaries and affiliates",
//         "To contractors, service providers, and other third parties we use to support our business",
//         "To fulfill the purpose for which you provide it",
//       ],
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-900 text-gray-100 px-4 py-12 font-sans">
//       {/* Header */}
//       <header className="relative mt-8 mx-5 mb-12 rounded-3xl overflow-hidden h-96 border border-gray-700 shadow-2xl">
//         <img
//           src="https://www.shutterstock.com/image-illustration/cyber-security-data-protection-business-260nw-2476569139.jpg"
//           alt="Privacy policy background"
//           className="w-full h-full object-cover object-center opacity-30 transition-transform duration-700 hover:scale-105"
//           style={{ objectPosition: "center 20%" }}
//         />
//         <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-indigo-900/40 opacity-90 flex items-center justify-center">
//           <div className="text-center text-white px-4 animate-slide-up">
//             <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-300 tracking-tight">
//               Privacy Policy
//             </h1>
//             <p className="text-xl text-gray-200 font-light tracking-wide">
//               Last Updated: June 24, 2025
//             </p>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
//         <div className="bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden shadow-xl rounded-2xl border border-gray-700/50 backdrop-blur-sm">
//           <div className="p-8 sm:p-12">
//             <div className="max-w-none">
//               <p className="mb-8 text-gray-300 text-sm md:text-base leading-relaxed animate-fade-in">
//                 At JHC CRM, we respect your privacy and are committed to
//                 protecting it through our compliance with this policy. This
//                 Privacy Policy describes how we collect, use, and disclose your
//                 personal information when you use our services.
//               </p>

//               {policyData.map((section, index) => (
//                 <PolicySection key={index} data={section} />
//               ))}

//               <div className="mt-10 pt-6 border-t border-gray-700">
//                 <h3 className="text-2xl md:text-3xl font-semibold text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-300 tracking-tight mb-4 animate-slide-up">
//                   Contact Information
//                 </h3>
//                 <p className="text-gray-300 text-sm md:text-base leading-relaxed">
//                   If you have any questions about this Privacy Policy or our
//                   privacy practices, please contact us at:{" "}
//                   <a
//                     href="mailto:jhc@gmail.com"
//                     className="text-indigo-400 hover:text-indigo-200 transition-colors duration-300 font-medium"
//                   >
//                     jhc@gmail.com
//                   </a>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="bg-gradient-to-br from-gray-800 to-gray-900 border-t border-gray-700 mt-12">
//         <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
//           <p className="text-center text-gray-300 text-sm">
//             © {new Date().getFullYear()} JHC CRM. All rights reserved.
//           </p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default PrivacyPolicy;










import React from 'react';
import { Link } from 'react-router-dom';

// Consolidated content array including intro, policy sections, and contact
const contentData = [
  {
    id: 'introduction',
    index: null,
    title: null,
    content:
      'At JHC CRM, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, share, and protect your data when you use our services, including our website and CRM platform. By using our services, you agree to the practices described in this policy.',
    points: [],
    type: 'intro',
  },
  {
    id: 'information-collection',
    index: '1',
    title: 'Information We Collect',
    content:
      'We collect information to provide better services to our users. This includes:',
    points: [
      'Personal information such as name, email address, and contact details provided when you register or interact with our services.',
      'Usage data, including your IP address, browser type, device information, and pages visited on our website.',
      'Course progress, completion data, and other educational or CRM-related information when you use our platform.',
      'Cookies and similar technologies to enhance user experience and track usage patterns.',
    ],
    type: 'section',
  },
  {
    id: 'information-use',
    index: '2',
    title: 'How We Use Your Information',
    content:
      'We use the information we collect to operate, maintain, and improve our services, including:',
    points: [
      'Providing and personalizing our website and services to meet your needs.',
      'Processing transactions and fulfilling requests for products or services.',
      'Sending you updates, promotional materials, or notifications about changes to our services (with your consent).',
      'Analyzing usage patterns to improve our platform’s functionality and user experience.',
    ],
    type: 'section',
  },
  {
    id: 'information-sharing',
    index: '3',
    title: 'Sharing of Your Information',
    content:
      'We do not share your personal information except in the following cases:',
    points: [
      'With subsidiaries, affiliates, or trusted third-party service providers who assist in delivering our services, bound by confidentiality agreements.',
      'To comply with legal obligations, such as responding to lawful requests or protecting our rights.',
      'With your consent, for specific purposes like marketing or partnerships.',
      'In aggregated or anonymized form that does not identify you personally.',
    ],
    type: 'section',
  },
  {
    id: 'data-security',
    index: '4',
    title: 'Data Security',
    content:
      'We take the security of your data seriously and implement measures to protect it:',
    points: [
      'Encryption of sensitive data during transmission and storage.',
      'Regular security audits and updates to safeguard against unauthorized access.',
      'Access controls to ensure only authorized personnel can access your data.',
      'However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.',
    ],
    type: 'section',
  },
  {
    id: 'your-rights',
    index: '5',
    title: 'Your Rights',
    content:
      'You have certain rights regarding your personal information, subject to applicable laws:',
    points: [
      'Access, correct, or delete your personal data by contacting us.',
      'Opt out of marketing communications at any time via the unsubscribe link or by contacting us.',
      'Request data portability or restrict processing in certain jurisdictions.',
      'Lodge a complaint with a supervisory authority if you believe your rights have been violated.',
    ],
    type: 'section',
  },
  {
    id: 'cookies',
    index: '6',
    title: 'Cookies and Tracking Technologies',
    content:
      'We use cookies and similar technologies to enhance your experience:',
    points: [
      'Essential cookies to enable core website functionality.',
      'Analytics cookies to understand how users interact with our services.',
      'Advertising cookies to deliver personalized ads (with your consent).',
      'You can manage cookie preferences through your browser settings.',
    ],
    type: 'section',
  },
  {
    id: 'third-party-links',
    index: '7',
    title: 'Third-Party Links',
    content:
      'Our website may contain links to third-party sites not controlled by JHC CRM:',
    points: [
      'We are not responsible for the privacy practices or content of these sites.',
      'We encourage you to review the privacy policies of any third-party sites you visit.',
    ],
    type: 'section',
  },
  {
    id: 'changes',
    index: '8',
    title: 'Changes to This Privacy Policy',
    content:
      'We may update this Privacy Policy periodically to reflect changes in our practices or legal requirements:',
    points: [
      'Changes will be posted on this page with an updated "Last Updated" date.',
      'We encourage you to review this policy regularly for any updates.',
      'Your continued use of our services after changes constitutes acceptance of the updated policy.',
    ],
    type: 'section',
  },
  {
    id: 'contact',
    index: null,
    title: 'Contact Us',
    content:
      'If you have any questions about this Privacy Policy or our data practices, please reach out to us at:<br /><a href="mailto:privacy@jhccrm.com" class="text-indigo-400 hover:text-indigo-200 transition-colors duration-300 font-medium">privacy@jhccrm.com</a><br />JHC CRM, 123 Business Ave, Suite 100, Austin, TX 78701<br />Phone: +1 (800) 123-4567',
    points: [],
    type: 'contact',
  },
];

// Component to render different types of content
const ContentSection = ({ data }) => {
  if (data.type === 'intro') {
    return (
      <div id={data.id} className="mb-12p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all duration-500 border border-gray-700/50 backdrop-blur-sm animate-fade-in">
        <p className="text-gray-300 text-sm md:text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: data.content }} />
      </div>
    );
  } else if (data.type === 'contact') {
    return (
      
      <div id={data.id} className="mt-10 pt-6 border-t border-gray-700">
        <h3 className="text-2xl md:text-3xl font-semibold text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-300 tracking-tight mb-4 animate-slide-up">
          {data.title}
        </h3>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed" dangerouslySetInnerHTML={{ __html: data.content }} />
      </div>
    );
  } else {
    return (
      <div id={data.id} className="mb-12 p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all duration-500 border border-gray-700/50 backdrop-blur-sm animate-fade-in">
        <h3 className="text-2xl md:text-3xl font-semibold text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-300 tracking-tight mb-4">
          {data.index}. {data.title}
        </h3>
        <p className="mb-4 text-gray-300 text-sm md:text-base leading-relaxed">{data.content}</p>
        <ul className="list-disc pl-6 space-y-2 text-gray-300 text-sm md:text-base">
          {data.points.map((point, i) => (
            <li key={i} className="leading-relaxed">{point}</li>
          ))}
        </ul>
      </div>
    );
  }
};

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans mt-10 pt-10">
      {/* Header */}
      <header className="relative mt-12 mx-5 mb-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl hover:shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all duration-500 border border-gray-700/50 backdrop-blur-sm overflow-hidden h-80">
        <img
          src="https://www.shutterstock.com/image-illustration/cyber-security-data-protection-business-260nw-2476569139.jpg"
          alt="Privacy policy background"
          className="w-full h-full object-cover object-center opacity-30 transition-transform duration-700 hover:scale-105"
          style={{ objectPosition: 'center 20%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-indigo-900/40 opacity-90 flex items-center justify-center">
          <div className="text-center text-white px-4 animate-slide-up">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-300 tracking-tight">
              JHC CRM Privacy Policy
            </h1>
            <p className="text-xl text-gray-200 font-light tracking-wide">
              Last Updated: July 18, 2025
            </p>
          </div>
        </div>
      </header>

      {/* Main Content with Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row gap-8">
        {/* Sidebar Navigation */}
        <aside className="md:w-1/4 bg-gradient-to-br from-gray-800 to-gray-900 p-6 rounded-2xl shadow-2xl border border-gray-700/50 backdrop-blur-sm sticky top-8">
          <h2 className="text-xl font-semibold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-300 tracking-tight">
            Table of Contents
          </h2>
          <ul className="space-y-2">
            {contentData
              .filter((section) => section.title) // Only show sections with titles in the sidebar
              .map((section) => (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 text-sm md:text-base"
                  >
                    {section.index ? `${section.index}. ${section.title}` : section.title}
                  </a>
                </li>
              ))}
          </ul>
        </aside>

        {/* Main Content */}
        <main className="md:w-3/4">
          <div className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl border border-gray-700/50 backdrop-blur-sm">
            {contentData.map((section) => (
              <ContentSection key={section.id} data={section} />
            ))}
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-800 to-gray-900 border-t border-gray-700 mt-12">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} JHC CRM. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link to="/contact" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 text-sm">
                Contact Us
              </Link>
              <Link to="/terms" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 text-sm">
                Terms of Service
              </Link>
              <a href="https://twitter.com/jhccrm" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 text-sm">
                Twitter
              </a>
              <a href="https://linkedin.com/company/jhccrm" className="text-gray-300 hover:text-indigo-400 transition-colors duration-300 text-sm">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;





