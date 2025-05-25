import React from 'react';
import { useTranslation } from 'react-i18next';
import { useAuth } from '../context/AuthContext';
import { 
  LayoutDashboard, 
  FileText, 
  Palette, 
  MessageSquare, 
  Users, 
  Settings,
  TrendingUp
} from 'lucide-react';

const DashboardPage: React.FC = () => {
  const { t } = useTranslation();
  const { user } = useAuth();

  const stats = [
    { 
      label: 'Active Projects',
      value: '3',
      change: '+2',
      trend: 'up',
      icon: <FileText className="h-6 w-6 text-primary-600 dark:text-primary-400" />
    },
    {
      label: 'Generated Content',
      value: '24',
      change: '+8',
      trend: 'up',
      icon: <MessageSquare className="h-6 w-6 text-secondary-600 dark:text-secondary-400" />
    },
    {
      label: 'Brand Assets',
      value: '12',
      change: '+4',
      trend: 'up',
      icon: <Palette className="h-6 w-6 text-accent-600 dark:text-accent-400" />
    },
    {
      label: 'Team Members',
      value: '5',
      change: '+1',
      trend: 'up',
      icon: <Users className="h-6 w-6 text-success-600 dark:text-success-400" />
    }
  ];

  const recentActivity = [
    {
      id: 1,
      type: 'website',
      title: 'Landing Page Generated',
      description: 'AI-generated landing page for Project X',
      date: '2h ago',
      icon: <FileText className="h-5 w-5 text-primary-600 dark:text-primary-400" />
    },
    {
      id: 2,
      type: 'content',
      title: 'Blog Posts Created',
      description: 'Generated 5 SEO-optimized blog posts',
      date: '4h ago',
      icon: <MessageSquare className="h-5 w-5 text-secondary-600 dark:text-secondary-400" />
    },
    {
      id: 3,
      type: 'branding',
      title: 'Logo Design',
      description: 'New brand identity package completed',
      date: '1d ago',
      icon: <Palette className="h-5 w-5 text-accent-600 dark:text-accent-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Dashboard Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
              Dashboard
            </h1>
            <button className="px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-primary-600 to-secondary-600 rounded-md hover:from-primary-700 hover:to-secondary-700">
              New Project
            </button>
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
          {/* Projects Overview */}
          <div className="lg:col-span-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
                Active Projects
              </h2>
              <button className="text-sm text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300">
                View all
              </button>
            </div>
            <div className="space-y-4">
              {/* Project Cards */}
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium text-gray-900 dark:text-white">
                    Project X Website
                  </h3>
                  <span className="px-2.5 py-0.5 text-xs font-medium bg-success-100 dark:bg-success-900 text-success-800 dark:text-success-200 rounded-full">
                    In Progress
                  </span>
                </div>
                <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                  <TrendingUp className="h-4 w-4 mr-1" />
                  <span>85% Complete</span>
                </div>
              </div>
              {/* Add more project cards here */}
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
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;