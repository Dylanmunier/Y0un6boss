import React from 'react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  color: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, features, color }) => {
  return (
    <div className={`rounded-lg shadow-lg p-6 ${color} text-white mb-8`}>
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="ml-4 text-xl font-bold">{title}</h3>
      </div>
      <p className="mb-4 text-base">{description}</p>
      <ul className="list-disc list-inside space-y-1 text-sm">
        {features.map((feature, idx) => (
          <li key={idx}>{feature}</li>
        ))}
      </ul>
    </div>
  );
};

export default ServiceCard;
