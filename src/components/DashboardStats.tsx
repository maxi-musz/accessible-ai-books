'use client';

import { DashboardSummary } from '@/types/api.types';

interface DashboardStatsProps {
  summary: DashboardSummary;
}

export default function DashboardStats({ summary }: DashboardStatsProps) {
  const stats = [
    {
      label: 'Total Classes',
      value: summary.totalClasses,
      icon: '🎓',
      color: 'bg-blue-50 text-blue-600',
    },
    {
      label: 'Total Subjects',
      value: summary.totalSubjects,
      icon: '📚',
      color: 'bg-green-50 text-green-600',
    },
    {
      label: 'Total Chapters',
      value: summary.totalChapters,
      icon: '📖',
      color: 'bg-purple-50 text-purple-600',
    },
    {
      label: 'Total Topics',
      value: summary.totalTopics,
      icon: '📝',
      color: 'bg-orange-50 text-orange-600',
    },
    {
      label: 'Completed Topics',
      value: summary.completedTopics,
      icon: '✅',
      color: 'bg-emerald-50 text-emerald-600',
    },
    {
      label: 'Pending Topics',
      value: summary.pendingTopics,
      icon: '⏳',
      color: 'bg-amber-50 text-amber-600',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mb-8">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow"
        >
          <div className="flex items-center justify-between mb-2">
            <span className={`text-2xl ${stat.color} w-10 h-10 rounded-lg flex items-center justify-center`}>
              {stat.icon}
            </span>
          </div>
          <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
          <p className="text-sm text-gray-600 mt-1">{stat.label}</p>
        </div>
      ))}
    </div>
  );
}
