import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { 
  Brain,
  Users,
  Globe,
  Zap,
  Target,
  Shield
} from 'lucide-react';
import ValueCard from '../components/about/ValueCard';

const AboutPage: React.FC = () => {
  const { t } = useTranslation();

  const values = [
    {
      icon: <Brain className="h-8 w-8 text-white" />,
      title: "Innovation First",
      description: "We leverage cutting-edge AI technology to deliver exceptional results.",
      color: "bg-primary-600 dark:bg-primary-500"
    },
    {
      icon: <Users className="h-8 w-8 text-white" />,
      title: "Human Touch",
      description: "AI-powered but human-refined, ensuring quality and creativity.",
      color: "bg-secondary-600 dark:bg-secondary-500"
    },
    {
      icon: <Globe className="h-8 w-8 text-white" />,
      title: "Global Reach",
      description: "Supporting businesses worldwide with multilingual capabilities.",
      color: "bg-accent-600 dark:bg-accent-500"
    },
    {
      icon: <Target className="h-8 w-8 text-white" />,
      title: "Results Driven",
      description: "Focused on delivering measurable impact for your business.",
      color: "bg-success-600 dark:bg-success-500"
    },
    {
      icon: <Shield className="h-8 w-8 text-white" />,
      title: "Trust & Security",
      description: "Your data and privacy are our top priorities.",
      color: "bg-warning-600 dark:bg-warning-500"
    },
    {
      icon: <Zap className="h-8 w-8 text-white" />,
      title: "Rapid Delivery",
      description: "Fast turnaround without compromising on quality.",
      color: "bg-error-600 dark:bg-error-500"
    }
  ];

  const stats = [
    { value: "500+", label: "Clients Served" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "24/7", label: "AI Support" },
    { value: "50+", label: "Countries Reached" }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-secondary-600/20 dark:from-primary-900/20 dark:to-secondary-900/20" />
        <div className="container mx-auto px-4 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              About Eidynia
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              We're revolutionizing digital services through the power of AI and human expertise, helping businesses thrive in the digital age.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Story
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
              Founded in 2025, Eidynia emerged from a vision to democratize access to high-quality digital services. We recognized that many businesses struggle with digital transformation, often finding traditional agencies too expensive and DIY solutions too complex. By combining AI technology with human expertise, we've created a platform that delivers enterprise-level digital services at a fraction of the cost.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-20 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              The principles that guide everything we do.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <ValueCard
                  icon={value.icon}
                  title={value.title}
                  description={value.description}
                  color={value.color}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-primary-600 dark:text-primary-400 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-secondary-600 dark:from-primary-900 dark:to-secondary-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join Our Digital Revolution
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Experience the future of digital services with Eidynia.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 text-base font-medium text-primary-600 bg-white hover:bg-gray-50 rounded-md shadow-sm transition-all hover:shadow-md"
            >
              Get Started Today
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;