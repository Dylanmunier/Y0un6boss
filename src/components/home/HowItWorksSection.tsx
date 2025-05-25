import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { FileText, Sparkles, CheckCircle, RefreshCw } from 'lucide-react';

const HowItWorksSection: React.FC = () => {
  const { t } = useTranslation();

  const steps = [
    {
      icon: <FileText className="h-6 w-6 text-white" />,
      title: t('how.step1.title'),
      description: t('how.step1.description'),
      color: 'bg-primary-600 dark:bg-primary-500',
    },
    {
      icon: <Sparkles className="h-6 w-6 text-white" />,
      title: t('how.step2.title'),
      description: t('how.step2.description'),
      color: 'bg-secondary-600 dark:bg-secondary-500',
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-white" />,
      title: t('how.step3.title'),
      description: t('how.step3.description'),
      color: 'bg-accent-600 dark:bg-accent-500',
    },
    {
      icon: <RefreshCw className="h-6 w-6 text-white" />,
      title: t('how.step4.title'),
      description: t('how.step4.description'),
      color: 'bg-success-600 dark:bg-success-500',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-sm font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-400 mb-2"
          >
            {t('how.subtitle')}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            {t('how.title')}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-1 w-20 bg-primary-600 dark:bg-primary-400 mx-auto mb-6"
          ></motion.div>
        </div>

        <div className="relative">
          {/* Connected line in the background */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2 hidden md:block"></div>
          
          <div className="space-y-12 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center`}
              >
                <div className={`w-full md:w-1/2 p-4 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {step.description}
                  </p>
                </div>
                
                <div className="relative my-6 md:my-0">
                  <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center z-10 relative`}>
                    {step.icon}
                  </div>
                  {/* Connecting dot */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border-4 border-gray-100 dark:border-gray-800"></div>
                </div>
                
                <div className={`w-full md:w-1/2 p-4 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'} md:invisible`}>
                  {/* Empty div for layout on mobile */}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;