import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const LegalPage: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Legal Information
          </h1>

          <div className="space-y-12">
            {/* Company Information */}
            <section className="bg-white dark:bg-gray-800 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Company Information
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-300">
                  Eidynia<br />
                  75 Avenue des Champs-Élysées<br />
                  75008 Paris, France<br />
                  SIRET: XXX XXX XXX XXXXX<br />
                  VAT Number: FRXX XXX XXX XXX
                </p>
              </div>
            </section>

            {/* Terms of Service */}
            <section className="bg-white dark:bg-gray-800 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Terms of Service
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-4">
                  1. Services
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Eidynia provides AI-powered digital services including website creation, SEO content generation, branding, marketing automation, and CRM solutions. Our services are provided "as is" and we reserve the right to modify, suspend, or discontinue any aspect of our services at any time.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-4">
                  2. User Obligations
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Users agree to provide accurate information, maintain the security of their account, and comply with all applicable laws and regulations. Users are responsible for all activity occurring under their account.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-4">
                  3. Intellectual Property
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  All intellectual property rights in the services and their content belong to Eidynia or its licensors. Users retain ownership of their content but grant Eidynia a license to use it for providing and improving our services.
                </p>
              </div>
            </section>

            {/* Privacy Policy */}
            <section className="bg-white dark:bg-gray-800 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Privacy Policy
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-4">
                  1. Data Collection
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We collect information necessary to provide our services, including account information, usage data, and content you provide. This data is processed in accordance with GDPR and other applicable privacy laws.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-4">
                  2. Data Usage
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We use collected data to provide and improve our services, communicate with users, and ensure security. We do not sell personal data to third parties.
                </p>

                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-6 mb-4">
                  3. Data Protection
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  We implement appropriate technical and organizational measures to protect your data. This includes encryption, access controls, and regular security assessments.
                </p>
              </div>
            </section>

            {/* Cookie Policy */}
            <section className="bg-white dark:bg-gray-800 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Cookie Policy
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-300">
                  We use cookies and similar technologies to improve user experience, analyze site usage, and assist in our marketing efforts. By using our services, you consent to our use of cookies in accordance with this policy.
                </p>
                <ul className="list-disc pl-6 mt-4 text-gray-600 dark:text-gray-300">
                  <li>Essential cookies for site functionality</li>
                  <li>Analytics cookies to understand usage</li>
                  <li>Marketing cookies for personalized content</li>
                </ul>
              </div>
            </section>

            {/* Contact Information */}
            <section className="bg-white dark:bg-gray-800 rounded-xl p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Contact Information
              </h2>
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-600 dark:text-gray-300">
                  For any questions regarding these legal documents, please contact:<br />
                  Email: legal@eidynia.com<br />
                  Phone: +33 1 23 45 67 89<br />
                  Address: 75 Avenue des Champs-Élysées, 75008 Paris, France
                </p>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LegalPage;