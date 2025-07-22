import React from 'react';

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

const ContentSection = ({ data }) => {
  if (data.type === 'intro') {
    return (
      <div
        id={data.id}
        className="mb-12 p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl border border-gray-700/50 backdrop-blur-sm animate-fade-in"
      >
        <p
          className="text-gray-300 text-sm md:text-base leading-relaxed"
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
      </div>
    );
  } else if (data.type === 'contact') {
    return (
      <div id={data.id} className="mt-10 pt-6 border-t border-gray-700">
        <h3 className="text-2xl md:text-3xl font-semibold text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-300 tracking-tight mb-4 animate-slide-up">
          {data.title}
        </h3>
        <p
          className="text-gray-300 text-sm md:text-base leading-relaxed"
          dangerouslySetInnerHTML={{ __html: data.content }}
        />
      </div>
    );
  } else {
    return (
      <div
        id={data.id}
        className="mb-12 p-6 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl border border-gray-700/50 backdrop-blur-sm animate-fade-in"
      >
        <h3 className="text-2xl md:text-3xl font-semibold text-white bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-300 tracking-tight mb-4">
          {data.index}. {data.title}
        </h3>
        <p className="mb-4 text-gray-300 text-sm md:text-base leading-relaxed">
          {data.content}
        </p>
        {data.points?.length > 0 && (
          <ul className="list-disc pl-6 space-y-2 text-gray-300 text-sm md:text-base">
            {data.points.map((point, i) => (
              <li key={i} className="leading-relaxed">{point}</li>
            ))}
          </ul>
        )}
      </div>
    );
  }
};

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      {/* Header */}
      <header className="relative mt-12 mx-5 mb-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-2xl border border-gray-700/50 backdrop-blur-sm overflow-hidden h-80">
        <img
          src="https://www.shutterstock.com/image-illustration/cyber-security-data-protection-business-260nw-2476569139.jpg"
          alt="Privacy policy background"
          className="w-full h-full object-cover object-center opacity-30"
          style={{ objectPosition: 'center 20%' }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800 via-gray-900 to-indigo-900/40 flex items-center justify-center">
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

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 flex flex-col md:flex-row gap-8">
        {/* Sticky Sidebar */}
        <aside className="md:w-1/4 sticky top-20 self-start bg-gradient-to-br from-gray-800 to-gray-900 p-4 md:p-6 rounded-2xl shadow-2xl border border-gray-700/50 backdrop-blur-sm max-h-[calc(100vh-6rem)] overflow-auto">
          <h2 className="text-lg md:text-xl font-semibold text-white mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-300 tracking-tight">
            Table of Contents
          </h2>
          <ul className="space-y-2">
            {contentData
              .filter((section) => section.title)
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

        {/* Main Content Area */}
        <div className="w-full">
          {contentData.map((section) => (
            <ContentSection key={section.id} data={section} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
