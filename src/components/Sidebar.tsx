"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { listClasses, listSubjects, listChapters, getAllTopicsInSubject, getAllTopicsInChapter } from "@/lib/content";
import { ChevronDownIcon, ChevronRightIcon, BookOpenIcon, AcademicCapIcon, DocumentTextIcon } from "@heroicons/react/24/outline";

export default function Sidebar() {
  const pathname = usePathname();
  const classes = listClasses();
  const [expandedClass, setExpandedClass] = useState<string | null>(null);
  const [expandedSubjects, setExpandedSubjects] = useState<Set<string>>(new Set());
  const [expandedChapters, setExpandedChapters] = useState<Set<string>>(new Set());

  const toggleClass = (className: string) => {
    setExpandedClass(expandedClass === className ? null : className);
    setExpandedSubjects(new Set()); // Reset expanded subjects when switching classes
    setExpandedChapters(new Set()); // Reset expanded chapters when switching classes
  };

  const toggleSubject = (subjectKey: string) => {
    const newExpanded = new Set(expandedSubjects);
    if (newExpanded.has(subjectKey)) {
      newExpanded.delete(subjectKey);
    } else {
      newExpanded.add(subjectKey);
    }
    setExpandedSubjects(newExpanded);
  };

  const toggleChapter = (chapterKey: string) => {
    const newExpanded = new Set(expandedChapters);
    if (newExpanded.has(chapterKey)) {
      newExpanded.delete(chapterKey);
    } else {
      newExpanded.add(chapterKey);
    }
    setExpandedChapters(newExpanded);
  };

  const isActivePath = (path: string) => pathname === path;
  const isActiveSubPath = (path: string) => pathname.startsWith(path);

  return (
    <div className="sidebar w-80 bg-white border-r border-gray-200 h-screen overflow-y-auto sidebar-hide-scrollbar">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <Link href="/" className="flex items-center gap-3 text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors">
          <BookOpenIcon className="w-6 h-6" />
          Accessible Books
        </Link>
        <p className="text-sm text-gray-600 mt-1">Educational Content Platform</p>
      </div>

      {/* Navigation */}
      <nav className="p-4">
        <div className="space-y-2">
          {classes.map((className) => {
            const isClassExpanded = expandedClass === className;
            const subjects = listSubjects(className);
            const classPath = `/classes/${encodeURIComponent(className)}`;
            const totalChapters = subjects.reduce((sum, subject) => sum + listChapters(className, subject).length, 0);
            const totalTopics = subjects.reduce((sum, subject) => sum + getAllTopicsInSubject(className, subject).length, 0);

            return (
              <div key={className}>
                {/* Class Header */}
                <div className="flex items-stretch gap-1">
                  <Link
                    href={classPath}
                    className={`flex-1 flex items-center gap-3 px-3 py-2 rounded-l-lg text-sm font-medium transition-colors ${
                      isActiveSubPath(classPath)
                        ? "bg-blue-50 text-blue-700 border border-blue-200"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    <AcademicCapIcon className="w-4 h-4" />
                    <span className="flex-1">{className}</span>
                  </Link>
                  <button
                    onClick={() => toggleClass(className)}
                    className={`px-2 py-2 rounded-r-lg text-sm font-medium transition-colors ${
                      isActiveSubPath(classPath)
                        ? "bg-blue-50 text-blue-700 border border-blue-200 border-l-0"
                        : "text-gray-700 hover:bg-gray-50"
                    }`}
                  >
                    {isClassExpanded ? (
                      <ChevronDownIcon className="w-4 h-4 text-gray-500" />
                    ) : (
                      <ChevronRightIcon className="w-4 h-4 text-gray-500" />
                    )}
                  </button>
                </div>

                {/* Class Stats */}
                <div className="ml-7 mt-1 mb-2 text-xs text-gray-500">
                  {subjects.length} subject{subjects.length !== 1 ? 's' : ''} • {totalChapters} chapter{totalChapters !== 1 ? 's' : ''} • {totalTopics} topic{totalTopics !== 1 ? 's' : ''}
                </div>

                {/* Subjects */}
                {isClassExpanded && (
                  <div className="ml-4 mt-2 space-y-1">
                    {subjects.map((subject) => {
                      const subjectKey = `${className}-${subject}`;
                      const isSubjectExpanded = expandedSubjects.has(subjectKey);
                      const subjectPath = `${classPath}/subjects/${encodeURIComponent(subject)}`;
                      const chapters = listChapters(className, subject);
                      const totalTopics = getAllTopicsInSubject(className, subject).length;

                      return (
                        <div key={subject}>
                          {/* Subject Header */}
                          <button
                            onClick={() => toggleSubject(subjectKey)}
                            className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-sm transition-colors ${
                              isActiveSubPath(`${classPath}/${encodeURIComponent(subject)}`)
                                ? "bg-green-50 text-green-700 border border-green-200"
                                : "text-gray-600 hover:bg-gray-50"
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              <DocumentTextIcon className="w-4 h-4" />
                              <span>{subject}</span>
                              <span className="ml-auto text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                                {chapters.length} ch • {totalTopics} topics
                              </span>
                            </div>
                            {isSubjectExpanded ? (
                              <ChevronDownIcon className="w-3 h-3 text-gray-400" />
                            ) : (
                              <ChevronRightIcon className="w-3 h-3 text-gray-400" />
                            )}
                          </button>

                          {/* Chapters */}
                          {isSubjectExpanded && (
                            <div className="ml-4 mt-1 space-y-1">
                              {chapters.map((chapter) => {
                                const chapterKey = `${className}-${subject}-${chapter}`;
                                const isChapterExpanded = expandedChapters.has(chapterKey);
                                const chapterPath = `${subjectPath}/chapters/${encodeURIComponent(chapter)}`;
                                const chapterTopics = getAllTopicsInChapter(className, subject, chapter);

                                return (
                                  <div key={chapter}>
                                    {/* Chapter Header */}
                                    <button
                                      onClick={() => toggleChapter(chapterKey)}
                                      className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-sm transition-colors ${
                                        isChapterExpanded
                                          ? "bg-purple-50 text-purple-700 border border-purple-200"
                                          : "text-gray-600 hover:bg-gray-50"
                                      }`}
                                    >
                                      <div className="flex items-center gap-2">
                                        <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                                        {chapter}
                                        <span className="ml-2 text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                                          {chapterTopics.length}
                                        </span>
                                      </div>
                                      {isChapterExpanded ? (
                                        <ChevronDownIcon className="w-3 h-3 text-gray-400" />
                                      ) : (
                                        <ChevronRightIcon className="w-3 h-3 text-gray-400" />
                                      )}
                                    </button>

                                    {/* Topics */}
                                    {isChapterExpanded && (
                                      <div className="ml-6 mt-1 space-y-1">
                                        {chapterTopics.map((topic) => {
                                          const topicPath = `${classPath}/${encodeURIComponent(subject)}/${topic.slug}`;
                                          return (
                                            <Link
                                              key={topic.slug}
                                              href={topicPath}
                                              className={`block px-3 py-2 rounded-md text-sm transition-colors ${
                                                isActivePath(topicPath)
                                                  ? "bg-blue-100 text-blue-800 border border-blue-200"
                                                  : "text-gray-600 hover:bg-gray-50"
                                              }`}
                                            >
                                              <div className="font-medium">{topic.title}</div>
                                              <div className="text-xs text-gray-500 mt-1">
                                                Topic {topic.order || 1} • {topic.data.pages.length} pages
                                              </div>
                                            </Link>
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
      </nav>

      {/* Footer */}
      <div className="mt-auto p-4 border-t border-gray-200">
        <div className="text-xs text-gray-500 text-center">
          <p>Educational Platform</p>
          <p className="mt-1">© 2024 Accessible Books</p>
        </div>
      </div>
    </div>
  );
}
