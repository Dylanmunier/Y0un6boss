import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

interface PricingTierProps {
  title: string;
  price: string;
  period: string;
  description: string;
  features: {
    included: string[];
    excluded: string[];
  };
  isPopular?: boolean;
  cta: string;
  delay: number;
}

const PricingTier: React.FC<PricingTierProps> = ({ 
  title, 
  price, 
  period, 
  description, 
  features, 
  isPopular = false, 
  cta,
  delay 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-50px" }}
      className={`rounded-2xl overflow-hidden ${
        isPopular 
          ? 'border-2 border-primary-500 dark:border-primary-400 shadow-lg' 
          : 'border border-gray-200 dark:border-gray-700 shadow-sm'
      }`}
    >
      {isPopular && (
        <div className="bg-primary-500 dark:bg-primary-600 py-1 px-4 text-center">
          <p className="text-xs font-medium uppercase text-white">Most Popular</p>
        </div>
      )}
      
      <div className="p-6 bg-white dark:bg-gray-800">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{title}</h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">{description}</p>
        
        <div className="mb-6">
          <span className="text-4xl font-bold text-gray-900 dark:text-white">{price}</span>
          <span className="text-gray-500 dark:text-gray-400">{period}</span>
        </div>
        
        <ul className="space-y-3 mb-6">
          {features.included.map((feature, index) => (
            <li key={`included-${index}`} className="flex items-start">
              <Check className="h-5 w-5 text-success-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600 dark:text-gray-300 text-sm">{feature}</span>
            </li>
          ))}
          
          {features.excluded.map((feature, index) => (
            <li key={`excluded-${index}`} className="flex items-start text-gray-400 dark:text-gray-500">
              <X className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        
        <button 
          className={`w-full py-3 px-4 rounded-lg font-medium transition-colors ${
            isPopular 
              ? 'bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 dark:from-primary-500 dark:to-secondary-500 dark:hover:from-primary-600 dark:hover:to-secondary-600 text-white shadow-md' 
              : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
          }`}
        >
          {cta}
        </button>
      </div>
    </motion.div>
  );
};

const PricingSection: React.FC = () => {
  const { t } = useTranslation();
  const [isAnnual, setIsAnnual] = useState(true);

  const pricingTiers = [
    {
      title: t('pricing.starter.title'),
      price: isAnnual ? '€79' : t('pricing.starter.price'),
      period: t('pricing.starter.period'),
      description: t('pricing.starter.description'),
      features: {
        included: [
          '1 Website Creation',
          'Basic SEO Content (5 pages)',
          'Logo Design',
          'Email Support',
          'Basic Analytics'
        ],
        excluded: [
          'Social Media Management',
          'Advanced Branding',
          'Priority Support'
        ]
      },
      cta: t('pricing.cta'),
      delay: 0
    },
    {
      title: t('pricing.growth.title'),
      price: isAnnual ? '€199' : t('pricing.growth.price'),
      period: t('pricing.growth.period'),
      description: t('pricing.growth.description'),
      features: {
        included: [
          '3 Website Creations or Updates',
          'Advanced SEO Content (15 pages)',
          'Complete Brand Identity',
          'Social Media Setup',
          'Email Marketing Automation',
          'Priority Support'
        ],
        excluded: [
          'Dedicated Account Manager',
          'Custom Integrations'
        ]
      },
      isPopular: true,
      cta: t('pricing.cta'),
      delay: 0.1
    },
    {
      title: t('pricing.scale.title'),
      price: isAnnual ? '€399' : t('pricing.scale.price'),
      period: t('pricing.scale.period'),
      description: t('pricing.scale.description'),
      features: {
        included: [
          'Unlimited Website Updates',
          'Comprehensive SEO Strategy',
          'Full Brand Identity Suite',
          'Social Media Management',
          'Advanced Marketing Automation',
          'Dedicated Account Manager',
          'Custom Integrations',
          '24/7 Priority Support'
        ],
        excluded: []
      },
      cta: t('pricing.cta'),
      delay: 0.2
    }
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-sm font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-400 mb-2"
          >
            {t('pricing.subtitle')}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            {t('pricing.title')}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-1 w-20 bg-primary-600 dark:bg-primary-400 mx-auto mb-8"
          ></motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex items-center justify-center mb-8"
          >
            <span className={`mr-3 ${!isAnnual ? 'font-medium text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                isAnnual ? 'bg-primary-600 dark:bg-primary-500' : 'bg-gray-300 dark:bg-gray-600'
              }`}
              role="switch"
              aria-checked={isAnnual}
            >
              <span className="sr-only">Toggle annual billing</span>
              <span
                aria-hidden="true"
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                  isAnnual ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`ml-3 ${isAnnual ? 'font-medium text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400'}`}>
              Annual <span className="text-success-600 dark:text-success-400 text-xs font-medium ml-1">Save 20%</span>
            </span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <PricingTier key={index} {...tier} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
            {t('pricing.custom.title')}
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 max-w-2xl mx-auto">
            {t('pricing.custom.description')}. Contact us for tailored solutions that meet your specific requirements.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-primary-700 dark:text-primary-300 bg-primary-50 dark:bg-primary-900 hover:bg-primary-100 dark:hover:bg-primary-800 transition-colors"
          >
            Contact for Custom Plan
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;