import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Bot, ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  const { t } = useTranslation();
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-typing');
        }
      },
      { threshold: 0.1 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800 animate-gradient-flow opacity-70 dark:opacity-30"></div>
      
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary-500 dark:bg-primary-400 opacity-10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center bg-white dark:bg-gray-800 rounded-full px-4 py-1 mb-6 shadow-sm"
            >
              <Bot className="h-4 w-4 text-accent-500 mr-2" />
              <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                Automate. Optimize. Scale.
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6"
            >
              <span className="block text-gray-900 dark:text-white">Transform Your Business with</span>
              <span className="block bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-400 dark:to-secondary-400 text-transparent bg-clip-text mt-2">
                Intelligent Automation
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="max-w-lg mx-auto lg:mx-0 text-lg text-gray-600 dark:text-gray-300 mb-8"
            >
              Streamline operations, reduce costs, and maximize efficiency with our AI-powered business automation solutions. Let technology work for you while you focus on growth.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <a
                href="#services"
                className="w-full sm:w-auto px-8 py-3 text-base font-medium text-white bg-gradient-to-r from-primary-600 to-secondary-600 hover:from-primary-700 hover:to-secondary-700 dark:from-primary-500 dark:to-secondary-500 dark:hover:from-primary-600 dark:hover:to-secondary-600 rounded-md shadow-sm transition-all hover:shadow-md flex items-center justify-center"
              >
                Explore Solutions
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#demo"
                className="w-full sm:w-auto px-8 py-3 text-base font-medium text-primary-700 dark:text-primary-300 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm transition-all hover:shadow-md"
              >
                Schedule Demo
              </a>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative w-full max-w-lg animate-float"
            >
              <div className="absolute top-0 -left-4 w-72 h-72 bg-secondary-300 dark:bg-secondary-800 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob"></div>
              <div className="absolute top-0 -right-4 w-72 h-72 bg-primary-300 dark:bg-primary-800 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-accent-300 dark:bg-accent-800 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

              <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
                <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-error-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-warning-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-success-500 rounded-full"></div>
                  </div>
                  <div className="text-sm font-medium text-gray-500 dark:text-gray-400">y0u6boss.com</div>
                  <div className="w-6"></div>
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">Automation Dashboard</h3>
                    <div className="bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 text-xs font-medium px-2.5 py-0.5 rounded-full">Enterprise</div>
                  </div>

                  <div className="mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Process Optimization</span>
                      <span className="text-sm font-medium text-primary-600 dark:text-primary-400">92%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                      <div className="bg-gradient-to-r from-primary-600 to-secondary-600 h-2.5 rounded-full" style={{ width: '92%' }}></div>
                    </div>
                  </div>

                  <div className="bg-gray-100 dark:bg-gray-900 rounded-lg p-3 mb-4">
                    <div className="flex items-center mb-2">
                      <div className="w-2 h-2 bg-secondary-500 rounded-full mr-2 animate-pulse"></div>
                      <span className="text-xs font-medium text-gray-500 dark:text-gray-400">AI Assistant</span>
                    </div>
                    <div ref={textRef} className="text-sm text-gray-700 dark:text-gray-300 overflow-hidden whitespace-nowrap border-r-2 border-secondary-500">
                      Optimizing business processes and automating workflows...
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {[
                      'Task Automation', 'Process Mining', 'Cost Analysis', 'Performance Metrics'
                    ].map((item, index) => (
                      <div key={index} className="bg-gray-50 dark:bg-gray-900 p-3 rounded-lg flex items-center">
                        <div className={`w-8 h-8 rounded-md mr-3 flex items-center justify-center ${
                          index % 4 === 0 ? 'bg-primary-100 dark:bg-primary-900 text-primary-500' : 
                          index % 4 === 1 ? 'bg-secondary-100 dark:bg-secondary-900 text-secondary-500' :
                          index % 4 === 2 ? 'bg-accent-100 dark:bg-accent-900 text-accent-500' :
                          'bg-success-100 dark:bg-success-900 text-success-500'
                        }`}>
                          {index % 4 === 0 && <div className="w-4 h-4 rounded-sm bg-current"></div>}
                          {index % 4 === 1 && <div className="w-4 h-1 rounded-sm bg-current mb-1"></div>}
                          {index % 4 === 2 && <div className="w-3 h-3 rounded-full bg-current"></div>}
                          {index % 4 === 3 && <div className="w-4 h-3 rounded-md bg-current"></div>}
                        </div>
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;