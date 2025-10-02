"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { CheckCircleIcon, ChevronDownIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { listClasses, listSubjects, listChapters, getAllTopicsInSubject, getAllTopicsInChapter } from "@/lib/content";
import { Topic as ContentTopic } from "@/content/schema";

// Custom hook for localStorage persistence
function usePersistedState<T>(key: string, defaultValue: T): [T, (value: T) => void] {
  const [state, setState] = useState<T>(defaultValue);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    try {
      const item = window.localStorage.getItem(key);
      if (item) {
        const parsedItem = JSON.parse(item);
        if (key.includes('expanded') || key.includes('completed')) {
          setState(new Set(parsedItem) as T);
        } else {
          setState(parsedItem);
        }
      }
    } catch (error) {
      console.warn(`Error loading ${key}:`, error);
    }
  }, [key]);

  const setValue = (value: T) => {
    setState(value);
    if (typeof window !== 'undefined') {
      try {
        if (value instanceof Set) {
          window.localStorage.setItem(key, JSON.stringify(Array.from(value)));
        } else {
          window.localStorage.setItem(key, JSON.stringify(value));
        }
      } catch (error) {
        console.warn(`Error saving ${key}:`, error);
      }
    }
  };

  return [state, setValue];
}

export default function CurriculumPage() {
  const [expandedClasses, setExpandedClasses] = usePersistedState<Set<string>>(
    'curriculum-expanded-classes', 
    new Set()
  );
  const [expandedSubjects, setExpandedSubjects] = usePersistedState<Set<string>>(
    'curriculum-expanded-subjects', 
    new Set()
  );
  const [expandedChapters, setExpandedChapters] = usePersistedState<Set<string>>(
    'curriculum-expanded-chapters', 
    new Set()
  );
  const [expandedTopics, setExpandedTopics] = usePersistedState<Set<string>>(
    'curriculum-expanded-topics', 
    new Set()
  );
  const [completedTopics, setCompletedTopics] = usePersistedState<Set<string>>(
    'curriculum-completed-topics',
    new Set()
  );

  const classes = listClasses();

  // Sort classes properly
  const sortedClasses = classes.sort((a, b) => {
    const getOrder = (className: string) => {
      if (className.startsWith('Primary')) {
        return parseInt(className.replace('Primary ', ''));
      } else if (className.startsWith('JSS')) {
        return 10 + parseInt(className.replace('JSS ', ''));
      } else if (className.startsWith('SSS')) {
        return 20 + parseInt(className.replace('SSS ', ''));
      }
      return 999;
    };
    return getOrder(a) - getOrder(b);
  });

  const toggleClass = (className: string) => {
    const newExpanded = new Set(expandedClasses);
    if (newExpanded.has(className)) {
      newExpanded.delete(className);
    } else {
      newExpanded.add(className);
    }
    setExpandedClasses(newExpanded);
  };

  const toggleSubject = (key: string) => {
    const newExpanded = new Set(expandedSubjects);
    if (newExpanded.has(key)) {
      newExpanded.delete(key);
    } else {
      newExpanded.add(key);
    }
    setExpandedSubjects(newExpanded);
  };

  const toggleChapter = (key: string) => {
    const newExpanded = new Set(expandedChapters);
    if (newExpanded.has(key)) {
      newExpanded.delete(key);
    } else {
      newExpanded.add(key);
    }
    setExpandedChapters(newExpanded);
  };

  const toggleTopic = (key: string) => {
    const newExpanded = new Set(expandedTopics);
    if (newExpanded.has(key)) {
      newExpanded.delete(key);
    } else {
      newExpanded.add(key);
    }
    setExpandedTopics(newExpanded);
  };

  const toggleTopicCompletion = (topicSlug: string) => {
    const newCompleted = new Set(completedTopics);
    if (newCompleted.has(topicSlug)) {
      newCompleted.delete(topicSlug);
    } else {
      newCompleted.add(topicSlug);
    }
    setCompletedTopics(newCompleted);
  };

  // Calculate overall stats
  const calculateStats = () => {
    let total = 0;
    let completed = 0;
    sortedClasses.forEach(className => {
      listSubjects(className).forEach(subject => {
        const topics = getAllTopicsInSubject(className, subject);
        total += topics.length;
        completed += topics.filter(t => completedTopics.has(t.slug)).length;
      });
    });
    return { total, completed, rate: total > 0 ? Math.round((completed / total) * 100) : 0 };
  };

  const stats = calculateStats();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8 shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">📚 Curriculum Development Dashboard</h1>
              <p className="text-blue-100">Track your progress across all classes, subjects, and topics</p>
            </div>
            <Link
              href="/"
              className="bg-white/10 hover:bg-white/20 px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2 border border-white/20"
            >
              ← Back to Home
            </Link>
          </div>

          {/* Stats Bar */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="grid grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold">{stats.total}</div>
                <div className="text-blue-100">Total Topics</div>
              </div>
              <div>
                <div className="text-3xl font-bold">{stats.completed}</div>
                <div className="text-blue-100">Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold">{stats.rate}%</div>
                <div className="text-blue-100">Progress</div>
              </div>
            </div>
            <div className="mt-4">
              <div className="bg-white/20 rounded-full h-3">
                <div 
                  className="bg-white rounded-full h-3 transition-all duration-500"
                  style={{ width: `${stats.rate}%` }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6 border border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-4">🚀 Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <button 
              onClick={() => {
                setCompletedTopics(new Set());
                window.localStorage.removeItem('curriculum-completed-topics');
              }}
              className="p-4 bg-red-50 hover:bg-red-100 rounded-lg border border-red-200 transition-colors"
            >
              <div className="text-red-600 font-medium">Clear Progress</div>
              <div className="text-sm text-red-500">Reset all completion status</div>
            </button>
            <button 
              onClick={() => {
                const allTopics = sortedClasses.flatMap(className => 
                  listSubjects(className).flatMap(subject => 
                    getAllTopicsInSubject(className, subject).map(t => t.slug)
                  )
                );
                setCompletedTopics(new Set(allTopics));
              }}
              className="p-4 bg-green-50 hover:bg-green-100 rounded-lg border border-green-200 transition-colors"
            >
              <div className="text-green-600 font-medium">Mark All Complete</div>
              <div className="text-sm text-green-500">Complete all topics</div>
            </button>
            <Link 
              href="/classes"
              className="p-4 bg-blue-50 hover:bg-blue-100 rounded-lg border border-blue-200 transition-colors text-center block"
            >
              <div className="text-blue-600 font-medium">Browse Content</div>
              <div className="text-sm text-blue-500">View all textbooks</div>
            </Link>
          </div>
        </div>

        {/* Classes List */}
        <div className="space-y-4">
          {sortedClasses.map(className => {
            const isClassExpanded = expandedClasses.has(className);
            const subjects = listSubjects(className);

            return (
              <div key={className} className="bg-white rounded-xl shadow-lg border-2 border-gray-200">
                {/* Class Header */}
                <button
                  onClick={() => toggleClass(className)}
                  className="w-full p-6 text-left hover:bg-gray-50 rounded-xl transition-colors flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-3xl">
                      {isClassExpanded ? <ChevronDownIcon className="w-8 h-8 text-blue-600" /> : <ChevronRightIcon className="w-8 h-8 text-gray-400" />}
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900">{className}</h2>
                      <p className="text-gray-600">{subjects.length} subject{subjects.length !== 1 ? 's' : ''}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    {(() => {
                      const classTopics = subjects.flatMap(s => getAllTopicsInSubject(className, s));
                      const completed = classTopics.filter(t => completedTopics.has(t.slug)).length;
                      const rate = classTopics.length > 0 ? Math.round((completed / classTopics.length) * 100) : 0;
                      return (
                        <>
                          <div className="text-sm text-gray-600">{completed}/{classTopics.length} topics</div>
                          <div className="text-2xl font-bold text-blue-600">{rate}%</div>
                        </>
                      );
                    })()}
                  </div>
                </button>

                {/* Subjects */}
                {isClassExpanded && (
                  <div className="px-6 pb-6 space-y-4">
                    {subjects.map(subject => {
                      const subjectKey = `${className}-${subject}`;
                      const isSubjectExpanded = expandedSubjects.has(subjectKey);
                      const chapters = listChapters(className, subject);

                      return (
                        <div key={subjectKey} className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border-2 border-blue-200">
                          {/* Subject Header */}
                          <button
                            onClick={() => toggleSubject(subjectKey)}
                            className="w-full p-4 text-left hover:bg-white/50 rounded-lg transition-colors flex items-center justify-between"
                          >
                            <div className="flex items-center gap-3">
                              <div className="text-2xl">
                                {isSubjectExpanded ? <ChevronDownIcon className="w-6 h-6 text-blue-600" /> : <ChevronRightIcon className="w-6 h-6 text-gray-400" />}
                              </div>
                              <div>
                                <h3 className="text-xl font-bold text-gray-900">{subject}</h3>
                                <p className="text-gray-600">{chapters.length} chapter{chapters.length !== 1 ? 's' : ''}</p>
                              </div>
                            </div>
                            <div className="text-right">
                              {(() => {
                                const subjectTopics = getAllTopicsInSubject(className, subject);
                                const completed = subjectTopics.filter(t => completedTopics.has(t.slug)).length;
                                const rate = subjectTopics.length > 0 ? Math.round((completed / subjectTopics.length) * 100) : 0;
                                return (
                                  <>
                                    <div className="text-sm text-gray-600">{completed}/{subjectTopics.length} topics</div>
                                    <div className="text-xl font-bold text-green-600">{rate}%</div>
                                  </>
                                );
                              })()}
                            </div>
                          </button>

                          {/* Chapters */}
                          {isSubjectExpanded && (
                            <div className="px-4 pb-4 space-y-3">
                              {chapters.map(chapter => {
                                const chapterKey = `${className}-${subject}-${chapter}`;
                                const isChapterExpanded = expandedChapters.has(chapterKey);
                                const chapterTopics = getAllTopicsInChapter(className, subject, chapter);

                                return (
                                  <div key={chapterKey} className="bg-white rounded-lg border-2 border-gray-200">
                                    {/* Chapter Header */}
                                    <button
                                      onClick={() => toggleChapter(chapterKey)}
                                      className="w-full p-4 text-left hover:bg-gray-50 rounded-lg transition-colors"
                                    >
                                      <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                                          <h4 className="text-lg font-semibold text-gray-800">{chapter}</h4>
                                        </div>
                                        <div className="flex items-center gap-3">
                                          {(() => {
                                            const completed = chapterTopics.filter(t => completedTopics.has(t.slug)).length;
                                            const rate = chapterTopics.length > 0 ? Math.round((completed / chapterTopics.length) * 100) : 0;
                                            return (
                                              <>
                                                <span className="text-sm text-gray-600">{completed}/{chapterTopics.length}</span>
                                                <div className="w-20 bg-gray-200 rounded-full h-2">
                                                  <div 
                                                    className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full transition-all"
                                                    style={{ width: `${rate}%` }}
                                                  />
                                                </div>
                                                <span className="text-sm font-medium text-green-600">{rate}%</span>
                                                {isChapterExpanded ? <ChevronDownIcon className="w-5 h-5 text-gray-400" /> : <ChevronRightIcon className="w-5 h-5 text-gray-400" />}
                                              </>
                                            );
                                          })()}
                                        </div>
                                      </div>
                                    </button>

                                    {/* Topics */}
                                    {isChapterExpanded && (
                                      <div className="p-4 space-y-2 bg-gray-50">
                                        {chapterTopics.sort((a, b) => (a.order || 0) - (b.order || 0)).map(topic => {
                                          const topicKey = `${chapterKey}-${topic.slug}`;
                                          const isTopicExpanded = expandedTopics.has(topicKey);
                                          const isCompleted = completedTopics.has(topic.slug);

                                          return (
                                            <div key={topic.slug} className={`border-2 rounded-lg ${isCompleted ? 'bg-green-50 border-green-300' : 'bg-white border-gray-200'}`}>
                                              {/* Topic Header */}
                                              <div className="p-3 flex items-center justify-between">
                                                <div className="flex items-center gap-3 flex-1">
                                                  <button
                                                    onClick={() => toggleTopicCompletion(topic.slug)}
                                                    className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                                                      isCompleted ? 'bg-green-500 border-green-500 text-white' : 'border-gray-300 hover:border-blue-400'
                                                    }`}
                                                  >
                                                    {isCompleted && '✓'}
                                                  </button>
                                                  <button
                                                    onClick={() => toggleTopic(topicKey)}
                                                    className="flex-1 text-left"
                                                  >
                                                    <div className="flex items-center justify-between">
                                                      <div>
                                                        <h5 className={`font-semibold ${isCompleted ? 'text-green-800' : 'text-gray-900'}`}>
                                                          {topic.title}
                                                        </h5>
                                                        <p className="text-sm text-gray-600">
                                                          Topic {topic.order || 1} • {topic.data.pages.length} pages
                                                        </p>
                                                      </div>
                                                      <div className="flex items-center gap-2">
                                                        {isCompleted && <span className="text-green-500 text-lg">🎉</span>}
                                                        {isTopicExpanded ? <ChevronDownIcon className="w-5 h-5 text-blue-600" /> : <ChevronRightIcon className="w-5 h-5 text-gray-400" />}
                                                      </div>
                                                    </div>
                                                  </button>
                                                </div>
                                              </div>

                                              {/* Topic Details - Curriculum Table View */}
                                              {isTopicExpanded && topic.data && (
                                                <div className="px-3 pb-3">
                                                  <div className="overflow-x-auto border-2 border-gray-200 rounded-lg bg-white">
                                                    <table className="w-full text-sm">
                                                      <thead className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
                                                        <tr>
                                                          <th className="p-3 text-left font-semibold border-r border-blue-400">PERFORMANCE OBJECTIVES</th>
                                                          <th className="p-3 text-left font-semibold border-r border-blue-400">CONTENT</th>
                                                          <th className="p-3 text-left font-semibold border-r border-blue-400">KEY COMPETENCIES</th>
                                                          <th className="p-3 text-left font-semibold border-r border-blue-400">LEARNING ACTIVITIES</th>
                                                          <th className="p-3 text-left font-semibold border-r border-blue-400">RESOURCES</th>
                                                          <th className="p-3 text-left font-semibold">EVALUATION</th>
                                                        </tr>
                                                      </thead>
                                                      <tbody>
                                                        <tr className="bg-white">
                                                          <td className="p-4 align-top border-r border-gray-200">
                                                            {topic.data.performanceObjective && (
                                                              <p className="text-gray-700">{topic.data.performanceObjective}</p>
                                                            )}
                                                          </td>
                                                          <td className="p-4 align-top border-r border-gray-200">
                                                            {topic.data.contents && (
                                                              <ul className="list-disc list-inside space-y-1">
                                                                {topic.data.contents.map((content, idx) => (
                                                                  <li key={idx} className="text-gray-700">{content}</li>
                                                                ))}
                                                              </ul>
                                                            )}
                                                          </td>
                                                          <td className="p-4 align-top border-r border-gray-200">
                                                            <p className="text-gray-600 text-xs italic">Based on curriculum standards</p>
                                                          </td>
                                                          <td className="p-4 align-top border-r border-gray-200">
                                                            {topic.data.studentActivities && (
                                                              <ul className="list-disc list-inside space-y-1">
                                                                {topic.data.studentActivities.map((activity, idx) => (
                                                                  <li key={idx} className="text-gray-700">{activity}</li>
                                                                ))}
                                                              </ul>
                                                            )}
                                                          </td>
                                                          <td className="p-4 align-top border-r border-gray-200">
                                                            {topic.data.materials && (
                                                              <ul className="list-disc list-inside space-y-1">
                                                                {topic.data.materials.map((material, idx) => (
                                                                  <li key={idx} className="text-gray-700">{material}</li>
                                                                ))}
                                                              </ul>
                                                            )}
                                                          </td>
                                                          <td className="p-4 align-top">
                                                            {topic.data.evaluationGuide && (
                                                              <ul className="list-disc list-inside space-y-1">
                                                                {topic.data.evaluationGuide.map((guide, idx) => (
                                                                  <li key={idx} className="text-gray-700">{guide}</li>
                                                                ))}
                                                              </ul>
                                                            )}
                                                          </td>
                                                        </tr>
                                                      </tbody>
                                                    </table>
                                                  </div>
                                                  <div className="mt-3 flex justify-end">
                                                    <Link
                                                      href={`/classes/${encodeURIComponent(className)}/${encodeURIComponent(subject)}/${topic.slug}`}
                                                      className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                                                    >
                                                      View Full Textbook →
                                                    </Link>
                                                  </div>
                                                </div>
                                              )}
                                            </div>
                                          );
                                        })}
                                      </div>
                                    )}
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
