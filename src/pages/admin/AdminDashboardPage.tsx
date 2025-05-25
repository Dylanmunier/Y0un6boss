import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../context/AuthContext';
import { 
  LayoutDashboard, 
  Users, 
  Package, 
  Brain,
  FileText,
  Mail,
  Settings,
  BarChart,
  ChevronDown
} from 'lucide-react';

const AdminDashboardPage: React.FC = () => {
  const { t } = useTranslation();
  const { user } = useAuth();

  const stats = [
    {
      label: 'Total Users',
      value: '156',
      change: '+12%',
      trend: 'up',
      icon: <Users className="h-6 w-6 text-primary-600 dark:text-primary-400" />
    },
    {
      label: 'Active Subscriptions',
      value: '89',
      change: '+8%',
      trend: 'up',
      icon: <Package className="h-6 w-6 text-secondary-600 dark:text-secondary-400" />
    },
    {
      label: 'AI Operations',
      value: '2.4k',
      change: '+24%',
      trend: 'up',
      icon: <Brain className="h-6 w-6 text-accent-600 dark:text-accent-400" />
    },
    {
      label: 'Monthly Revenue',
      value: '€12.8k',
      change: '+16%',
      trend: 'up',
      icon: <BarChart className="h-6 w-6 text-success-600 dark:text-success-400" />
    }
  ];

  const recentActivity = [
    {
      id: 1,
      type: 'user',
      title: 'New Enterprise Subscription',
      description: 'Company XYZ upgraded to Enterprise plan',
      date: '10m ago',
      icon: <Package className="h-5 w-5 text-primary-600 dark:text-primary-400" />
    },
    {
      id: 2,
      type: 'ai',
      title: 'AI Model Updated',
      description: 'SEO content generation model optimized',
      date: '1h ago',
      icon: <Brain className="h-5 w-5 text-secondary-600 dark:text-secondary-400" />
    },
    {
      id: 3,
      type: 'system',
      title: 'System Maintenance',
      description: 'Automated backup completed successfully',
      date: '2h ago',
      icon: <Settings className="h-5 w-5 text-accent-600 dark:text-accent-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Admin Dashboard Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                Admin Dashboard
              </h1>
              <div className="hidden md:flex space-x-4">
                <button className="px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
                  Overview
                </button>
                <button className="px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
                  Users
                </button>
                <button className="px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
                  Services
                </button>
                <button className="px-3 py-2 text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
                  AI Settings
                </button>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-primary-600 to-secondary-600 rounded-md hover:from-primary-700 hover:to-secondary-700">
                New Service
              </button>
              <button className="p-2 text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
                <Settings className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6"
            >
              <div className="flex items-center justify-between mb-4">
                {stat.icon}
                <span className={`text-sm font-medium ${
                  stat.trend === 'up' 
                    ? 'text-success-600 dark:text-success-400' 
                    : 'text-error-600 dark:text-error-400'
                }`}>
                  {stat.change}
                </span>
              </div>
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {stat.value}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Service Management */}
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Active Services
              </h2>
              <button className="text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300">
                Manage All
              </button>
            </div>
            <div className="space-y-4">
              {/* Service Cards */}
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <Brain className="h-5 w-5 text-primary-600 dark:text-primary-400" />
                    <h3 className="font-medium text-gray-900 dark:text-white">
                      AI Website Generator
                    </h3>
                  </div>
                  <span className="px-2.5 py-0.5 text-xs font-medium bg-success-100 dark:bg-success-900 text-success-800 dark:text-success-200 rounded-full">
                    Active
                  </span>
                </div>
                <div className="flex items-center justify-between mt-4 text-sm">
                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <Users className="h-4 w-4 mr-1" />
                    <span>48 active users</span>
                  </div>
                  <button className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300">
                    Configure
                  </button>
                </div>
              </div>

              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <FileText className="h-5 w-5 text-secondary-600 dark:text-secondary-400" />
                    <h3 className="font-medium text-gray-900 dark:text-white">
                      SEO Content Generator
                    </h3>
                  </div>
                  <span className="px-2.5 py-0.5 text-xs font-medium bg-success-100 dark:bg-success-900 text-success-800 dark:text-success-200 rounded-full">
                    Active
                  </span>
                </div>
                <div className="flex items-center justify-between mt-4 text-sm">
                  <div className="flex items-center text-gray-500 dark:text-gray-400">
                    <Users className="h-4 w-4 mr-1" />
                    <span>36 active users</span>
                  </div>
                  <button className="text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300">
                    Configure
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              Recent Activity
            </h2>
            <div className="space-y-6">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start">
                  <div className="flex-shrink-0">
                    {activity.icon}
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900 dark:text-white">
                      {activity.title}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {activity.description}
                    </p>
                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                      {activity.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-6 text-center text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300">
              View All Activity
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboardPage;