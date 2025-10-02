'use client';

import { useState } from 'react';
import { listClasses, listSubjects, listChapters, getAllTopicsInSubject, getAllTopicsInChapter } from '@/lib/content';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

interface PageProps {
  params: {
    className: string;
  };
}

export default function ClassPage({ params }: PageProps) {
  const className = decodeURIComponent(params.className);
  const classes = listClasses();
  const [expandedSubjects, setExpandedSubjects] = useState<Set<string>>(new Set());

  // Check if class exists
  if (!classes.includes(className)) {
    notFound();
  }

  const subjects = listSubjects(className);

  const toggleSubject = (subject: string) => {
    const newExpanded = new Set(expandedSubjects);
    if (newExpanded.has(subject)) {
      newExpanded.delete(subject);
    } else {
      newExpanded.add(subject);
    }
    setExpandedSubjects(newExpanded);
  };

  return (
    <div className="p-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">{className}</h1>
          <p className="text-gray-600">
            {subjects.length} subject{subjects.length !== 1 ? 's' : ''} available
          </p>
        </div>

        {/* Subjects Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {subjects.map(subject => {
            const chapters = listChapters(className, subject);
            const allTopics = getAllTopicsInSubject(className, subject);
            const completedTopics = allTopics.filter(t => t.completed).length;
            const completionRate = allTopics.length > 0 ? Math.round((completedTopics / allTopics.length) * 100) : 0;
            const isExpanded = expandedSubjects.has(subject);

            return (
              <div
                key={subject}
                className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:shadow-lg transition-all duration-300"
              >
                {/* Subject Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      {subject === 'Mathematics' ? '🔢' : '📝'} {subject}
                    </h2>
                    <p className="text-gray-600">
                      {chapters.length} chapter{chapters.length !== 1 ? 's' : ''} • {allTopics.length} topic{allTopics.length !== 1 ? 's' : ''}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-blue-600">{completionRate}%</div>
                    <div className="text-sm text-gray-600">Complete</div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="w-full bg-gray-200 rounded-full h-3">
                    <div
                      className="bg-gradient-to-r from-blue-600 to-green-600 h-3 rounded-full transition-all duration-500"
                      style={{ width: `${completionRate}%` }}
                    />
                  </div>
                  <div className="flex justify-between text-sm text-gray-600 mt-2">
                    <span>{completedTopics} completed</span>
                    <span>{allTopics.length - completedTopics} remaining</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 mb-4">
                  <Link
                    href={`/classes/${encodeURIComponent(className)}/${encodeURIComponent(subject)}/view-full`}
                    className="flex-1 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors text-center"
                  >
                    📖 View Full Content
                  </Link>
                  <button
                    onClick={() => toggleSubject(subject)}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    {isExpanded ? (
                      <>
                        <ChevronDownIcon className="w-4 h-4" />
                        Hide Chapters
                      </>
                    ) : (
                      <>
                        <ChevronRightIcon className="w-4 h-4" />
                        Show Chapters
                      </>
                    )}
                  </button>
                </div>

                {/* Chapters List (Collapsible) */}
                {isExpanded && (
                  <div className="space-y-2 mt-4 border-t border-gray-200 pt-4">
                    {chapters.map(chapter => {
                      const chapterTopics = getAllTopicsInChapter(className, subject, chapter);
                      const chapterCompleted = chapterTopics.filter(t => t.completed).length;

                      return (
                        <div
                          key={chapter}
                          className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-4 border border-blue-200"
                        >
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <h3 className="font-semibold text-gray-900 mb-1">{chapter}</h3>
                              <p className="text-sm text-gray-600">
                                {chapterCompleted}/{chapterTopics.length} topics completed
                              </p>
                            </div>
                            <div className="ml-4">
                              <Link
                                href={`/classes/${encodeURIComponent(className)}/${encodeURIComponent(subject)}`}
                                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                              >
                                View →
                              </Link>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {subjects.length === 0 && (
          <div className="text-center py-12 bg-white rounded-xl border-2 border-gray-200">
            <div className="text-6xl mb-4">📚</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No Subjects Yet</h3>
            <p className="text-gray-600">Content for {className} will appear here once subjects are added.</p>
          </div>
        )}
      </div>
  );
}

