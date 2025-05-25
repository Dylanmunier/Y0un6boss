import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  Bot,
  Workflow,
  LineChart,
  Timer,
  DollarSign,
  ArrowUpRight,
  CheckCircle
} from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
  color: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, delay, color }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true, margin: "-50px" }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden group"
    >
      <div className="p-6">
        <div className={`w-12 h-12 rounded-lg ${color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-300">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">
          {description}
        </p>
        <div className="flex items-center text-primary-600 dark:text-primary-400 font-medium">
          <span className="mr-1">Learn more</span>
          <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
        </div>
      </div>
      <div className={`h-1 w-full ${color.replace('bg-', 'bg-opacity-20 bg-')}`}>
        <div className={`h-full ${color} w-0 group-hover:w-full transition-all duration-500`}></div>
      </div>
    </motion.div>
  );
};

const ServicesSection: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: <Bot className="h-6 w-6 text-white" />,
      title: "Intelligent Process Automation",
      description: "Automate repetitive tasks and workflows with AI-powered solutions that learn and adapt to your business needs.",
      color: "bg-primary-600 dark:bg-primary-500",
    },
    {
      icon: <Workflow className="h-6 w-6 text-white" />,
      title: "Business Process Optimization",
      description: "Analyze and streamline your operations for maximum efficiency using data-driven insights and AI recommendations.",
      color: "bg-secondary-600 dark:bg-secondary-500",
    },
    {
      icon: <LineChart className="h-6 w-6 text-white" />,
      title: "Performance Analytics",
      description: "Track and optimize business metrics in real-time with advanced analytics and predictive insights.",
      color: "bg-accent-600 dark:bg-accent-500",
    },
    {
      icon: <Timer className="h-6 w-6 text-white" />,
      title: "Time Management Solutions",
      description: "Maximize productivity with smart scheduling, task prioritization, and automated time tracking systems.",
      color: "bg-success-600 dark:bg-success-500",
    },
    {
      icon: <DollarSign className="h-6 w-6 text-white" />,
      title: "Cost Optimization",
      description: "Reduce operational costs through intelligent resource allocation and automated expense management.",
      color: "bg-warning-600 dark:bg-warning-500",
    },
  ];

  return (
    <section id="services" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-sm font-semibold uppercase tracking-wide text-primary-600 dark:text-primary-400 mb-2"
          >
            Our Solutions
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Comprehensive Business Automation
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-1 w-20 bg-primary-600 dark:bg-primary-400 mx-auto mb-6"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-lg text-gray-600 dark:text-gray-300"
          >
            Transform your business operations with our suite of intelligent automation solutions designed to save time, reduce costs, and drive growth.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              delay={0.1 * index}
              color={service.color}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;