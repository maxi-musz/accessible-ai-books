import Link from 'next/link';
import { BookOpenIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { listClasses, listSubjects, getAllTopicsInSubject } from '@/lib/content';

export default function Home() {
  // Get data from frontend content library
  const classes = listClasses();
  
  // Sort classes in proper order: Primary 1-6, JSS 1-3, SSS 1-3
  const sortedClasses = classes.sort((a, b) => {
    const getOrder = (className: string) => {
      if (className.startsWith('Primary')) {
        const num = parseInt(className.replace('Primary ', ''));
        return num; // Primary 1 = 1, Primary 4 = 4
      } else if (className.startsWith('JSS')) {
        const num = parseInt(className.replace('JSS ', ''));
        return 10 + num; // JSS 1 = 11, JSS 2 = 12, JSS 3 = 13
      } else if (className.startsWith('SSS')) {
        const num = parseInt(className.replace('SSS ', ''));
        return 20 + num; // SSS 1 = 21, SSS 2 = 22, SSS 3 = 23
      }
      return 999; // Unknown classes go last
    };
    return getOrder(a) - getOrder(b);
  });
  
  // Calculate stats from content
  const stats = sortedClasses.map(className => {
    const subjects = listSubjects(className);
    let totalTopics = 0;
    let completedTopics = 0;
    
    subjects.forEach(subject => {
      const topics = getAllTopicsInSubject(className, subject);
      totalTopics += topics.length;
      completedTopics += topics.filter(t => t.completed).length;
    });
    
    return {
      className,
      subjectCount: subjects.length,
      totalTopics,
      completedTopics,
      completionRate: totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0
    };
  });
  
  const totalTopics = stats.reduce((sum, s) => sum + s.totalTopics, 0);
  const totalCompleted = stats.reduce((sum, s) => sum + s.completedTopics, 0);
  const overallCompletionRate = totalTopics > 0 ? Math.round((totalCompleted / totalTopics) * 100) : 0;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Compact Header Navbar */}
      <nav className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo and Title */}
            <div className="flex items-center gap-3">
              <BookOpenIcon className="w-8 h-8" />
              <div>
                <h1 className="text-xl font-bold">Accessible Books</h1>
                <p className="text-xs text-blue-100">Educational Content Platform</p>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="flex items-center gap-3">
              <Link
                href="/curriculum"
                className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                Curriculum
              </Link>
              <Link
                href="/classes"
                className="bg-white/10 hover:bg-white/20 px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 text-sm"
              >
                <BookOpenIcon className="w-4 h-4" />
                Browse
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Dashboard Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Overview</h2>
          <p className="text-gray-600">Your complete curriculum statistics at a glance</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Classes</p>
                <p className="text-3xl font-bold text-gray-900">{classes.length}</p>
              </div>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">🎓</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Subjects</p>
                <p className="text-3xl font-bold text-gray-900">{stats.reduce((sum, s) => sum + s.subjectCount, 0)}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📚</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Total Topics</p>
                <p className="text-3xl font-bold text-gray-900">{totalTopics}</p>
              </div>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">📖</span>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600">Completed</p>
                <p className="text-3xl font-bold text-green-600">{totalCompleted}</p>
              </div>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <span className="text-2xl">✅</span>
              </div>
            </div>
          </div>
        </div>

        {/* Overall Progress */}
        <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-bold text-gray-900">Overall Progress</h3>
              <p className="text-sm text-gray-600">
                {totalCompleted} of {totalTopics} topics completed
              </p>
            </div>
            <div className="text-3xl font-bold text-blue-600">{overallCompletionRate}%</div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-4">
            <div
              className="bg-gradient-to-r from-blue-600 to-green-600 h-4 rounded-full transition-all duration-500"
              style={{ width: `${overallCompletionRate}%` }}
            />
          </div>
        </div>

        {/* Classes Section */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Classes</h2>
          <p className="text-gray-600 mb-6">Explore your available classes and their progress</p>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {stats.map((classInfo) => (
              <Link
                key={classInfo.className}
                href={`/classes/${encodeURIComponent(classInfo.className)}`}
                className="bg-white rounded-xl border-2 border-gray-200 p-6 hover:border-blue-500 hover:shadow-lg transition-all duration-200"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{classInfo.className}</h3>
                    <p className="text-sm text-gray-600">{classInfo.subjectCount} subjects</p>
                  </div>
                  <div className="text-2xl font-bold text-blue-600">{classInfo.completionRate}%</div>
                </div>

                <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                  <div
                    className="bg-gradient-to-r from-blue-600 to-green-600 h-2 rounded-full transition-all"
                    style={{ width: `${classInfo.completionRate}%` }}
                  />
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">📖 {classInfo.totalTopics} topics</span>
                  <span className="text-green-600 font-medium">✓ {classInfo.completedTopics} done</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="bg-gray-800 text-white py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm text-gray-400">
            © 2025 Accessible Books - Professional Educational Content Platform
          </p>
          <p className="text-xs text-gray-500 mt-2">
            Aligned with Nigerian Curriculum Standards (NERDC)
          </p>
        </div>
      </div>
    </div>
  );
}