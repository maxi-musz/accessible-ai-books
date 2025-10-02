'use client';

import Link from 'next/link';
import { ClassStats } from '@/types/api.types';

interface ClassCardProps {
  classData: ClassStats;
}

export default function ClassCard({ classData }: ClassCardProps) {
  const getCompletionColor = (rate: number) => {
    if (rate === 0) return 'bg-gray-200';
    if (rate < 30) return 'bg-red-500';
    if (rate < 70) return 'bg-yellow-500';
    return 'bg-green-500';
  };

  return (
    <Link href={`/classes/${encodeURIComponent(classData.name)}/all`}>
      <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-all duration-200 hover:-translate-y-1 cursor-pointer">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900">{classData.name}</h3>
            {classData.description && (
              <p className="text-sm text-gray-500 mt-1">{classData.description}</p>
            )}
          </div>
          <div className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-sm font-semibold">
            Order {classData.order}
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-blue-600">{classData.totalSubjects}</p>
            <p className="text-xs text-gray-600 mt-1">Subjects</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-purple-600">{classData.totalChapters}</p>
            <p className="text-xs text-gray-600 mt-1">Chapters</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-orange-600">{classData.totalTopics}</p>
            <p className="text-xs text-gray-600 mt-1">Topics</p>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mb-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-700">Progress</span>
            <span className="text-sm font-bold text-gray-900">{classData.completionRate}%</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className={`h-2.5 rounded-full transition-all duration-300 ${getCompletionColor(classData.completionRate)}`}
              style={{ width: `${classData.completionRate}%` }}
            />
          </div>
        </div>

        {/* Completion Info */}
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">
            {classData.completedTopics} of {classData.totalTopics} topics completed
          </span>
          <span className="text-blue-600 font-medium hover:underline">
            View Details →
          </span>
        </div>
      </div>
    </Link>
  );
}
