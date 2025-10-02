'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  ChevronDownIcon,
  ChevronRightIcon,
  BookOpenIcon,
  AcademicCapIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline';
import { classService } from '@/services/class.service';
import { ClassStats } from '@/types/api.types';
import { ClassEntity } from '@/types/backend.types';

interface SidebarClientProps {
  initialClasses: ClassStats[];
}

export default function SidebarClient({ initialClasses }: SidebarClientProps) {
  const pathname = usePathname();
  const [expandedClass, setExpandedClass] = useState<string | null>(null);
  const [classStructures, setClassStructures] = useState<Map<string, ClassEntity>>(new Map());
  const [loadingClass, setLoadingClass] = useState<string | null>(null);

  const toggleClass = async (className: string, classId: string) => {
    // If already expanded, collapse it
    if (expandedClass === className) {
      setExpandedClass(null);
      return;
    }

    // If we don't have the structure yet, fetch it
    if (!classStructures.has(className)) {
      setLoadingClass(className);
      try {
        const response = await classService.getFullStructureByName(className);
        const newStructures = new Map<string, ClassEntity>(classStructures);
        newStructures.set(className, response.data);
        setClassStructures(newStructures);
      } catch (error) {
        console.error('Failed to fetch class structure:', error);
      } finally {
        setLoadingClass(null);
      }
    }

    setExpandedClass(className);
  };

  const isActivePath = (path: string) => pathname === path;
  const isActiveSubPath = (path: string) => pathname.startsWith(path);

  return (
    <div className="sidebar w-80 bg-white border-r border-gray-200 h-screen overflow-y-auto sidebar-hide-scrollbar">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <Link
          href="/"
          className="flex items-center gap-3 text-xl font-bold text-gray-900 hover:text-blue-600 transition-colors"
        >
          <BookOpenIcon className="w-6 h-6" />
          Accessible Books
        </Link>
        <p className="text-sm text-gray-600 mt-1">Educational Content Platform</p>
      </div>

      {/* Navigation */}
      <nav className="p-4">
        <div className="space-y-2">
          {initialClasses.map((classItem) => {
            const isClassExpanded = expandedClass === classItem.name;
            const classPath = `/classes/${encodeURIComponent(classItem.name)}`;
            const classStructure = classStructures.get(classItem.name);
            const subjects = classStructure?.subjects || [];

            return (
              <div key={classItem.id}>
                {/* Class Header */}
                <div className="flex items-center justify-between">
                  <Link
                    href={`${classPath}/all`}
                    className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors flex-1 ${
                      isActiveSubPath(classPath)
                        ? 'bg-blue-50 text-blue-700 border border-blue-200'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <AcademicCapIcon className="w-4 h-4" />
                    {classItem.name}
                  </Link>
                  <button
                    onClick={() => toggleClass(classItem.name, classItem.id)}
                    className="p-1 rounded hover:bg-gray-100 transition-colors"
                    aria-label={`Toggle ${classItem.name} subjects`}
                    disabled={loadingClass === classItem.name}
                  >
                    {loadingClass === classItem.name ? (
                      <div className="w-4 h-4 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin" />
                    ) : isClassExpanded ? (
                      <ChevronDownIcon className="w-4 h-4 text-gray-500" />
                    ) : (
                      <ChevronRightIcon className="w-4 h-4 text-gray-500" />
                    )}
                  </button>
                </div>

                {/* Subjects (only shown when expanded and data is loaded) */}
                {isClassExpanded && classStructure && (
                  <div className="ml-4 mt-2 space-y-1">
                    {subjects.map((subject) => {
                      const subjectPath = `${classPath}/subjects/${encodeURIComponent(subject.name)}`;
                      const chapters = subject.chapters || [];
                      const totalTopics = chapters.reduce(
                        (acc, chapter) => acc + (chapter.topics?.length || 0),
                        0
                      );

                      return (
                        <div key={subject.id}>
                          {/* Subject Header */}
                          <Link
                            href={`${subjectPath}/all`}
                            className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors ${
                              isActiveSubPath(subjectPath)
                                ? 'bg-green-50 text-green-700 border border-green-200'
                                : 'text-gray-600 hover:bg-gray-50'
                            }`}
                          >
                            <DocumentTextIcon className="w-4 h-4" />
                            {subject.name}
                            <span className="ml-auto text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                              {totalTopics}
                            </span>
                          </Link>

                          {/* Chapters */}
                          <div className="ml-4 mt-1 space-y-1">
                            {chapters.map((chapter) => {
                              const chapterPath = `${subjectPath}/chapters/${encodeURIComponent(chapter.name)}`;
                              const chapterTopics = chapter.topics || [];

                              return (
                                <div key={chapter.id}>
                                  {/* Chapter Header */}
                                  <Link
                                    href={`${chapterPath}/all`}
                                    className={`flex items-center gap-2 px-3 py-2 rounded-md text-sm transition-colors ${
                                      isActiveSubPath(chapterPath)
                                        ? 'bg-purple-50 text-purple-700 border border-purple-200'
                                        : 'text-gray-600 hover:bg-gray-50'
                                    }`}
                                  >
                                    <div className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
                                    {chapter.name}
                                    <span className="ml-auto text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
                                      {chapterTopics.length}
                                    </span>
                                  </Link>

                                  {/* Topics */}
                                  <div className="ml-6 mt-1 space-y-1">
                                    {chapterTopics.map((topic) => {
                                      const topicPath = `${subjectPath}/chapters/${encodeURIComponent(chapter.name)}/topics/${topic.slug}`;
                                      return (
                                        <Link
                                          key={topic.id}
                                          href={topicPath}
                                          className={`block px-3 py-2 rounded-md text-sm transition-colors ${
                                            isActivePath(topicPath)
                                              ? 'bg-blue-100 text-blue-800 border border-blue-200'
                                              : 'text-gray-600 hover:bg-gray-50'
                                          }`}
                                        >
                                          <div className="font-medium">{topic.title}</div>
                                          <div className="text-xs text-gray-500 mt-1">
                                            Topic {topic.order || 1}
                                            {topic.completed && ' • ✓ Completed'}
                                          </div>
                                        </Link>
                                      );
                                    })}
                                  </div>
                                </div>
                              );
                            })}
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