import Link from 'next/link';
import { listClasses, listSubjects, getAllTopicsInSubject, listChapters } from '@/lib/content';

export default function ClassesPage() {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12 shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-4xl font-bold mb-2">📚 Browse Classes</h1>
              <p className="text-blue-100 text-lg">Explore educational content across all grade levels</p>
            </div>
            <Link
              href="/"
              className="bg-white/10 hover:bg-white/20 px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2 border border-white/20"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 max-w-7xl mx-auto px-4 py-12 w-full">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {sortedClasses.map(className => {
            const subjects = listSubjects(className);
            const totalChapters = subjects.reduce((sum, subject) => {
              return sum + listChapters(className, subject).length;
            }, 0);
            const totalTopics = subjects.reduce((sum, subject) => {
              return sum + getAllTopicsInSubject(className, subject).length;
            }, 0);
            const completedTopics = subjects.reduce((sum, subject) => {
              return sum + getAllTopicsInSubject(className, subject).filter(t => t.completed).length;
            }, 0);
            const completionRate = totalTopics > 0 ? Math.round((completedTopics / totalTopics) * 100) : 0;

            return (
              <Link
                key={className}
                href={`/classes/${encodeURIComponent(className)}`}
                className="group bg-white rounded-2xl border-2 border-gray-200 hover:border-blue-500 p-8 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Class Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="text-3xl text-white font-bold">
                    {className.includes('Primary') ? '🎒' : className.includes('JSS') ? '📖' : '🎓'}
                  </span>
                </div>

                {/* Class Info */}
                <h2 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {className}
                </h2>
                <p className="text-gray-600 mb-4">
                  {subjects.length} subject{subjects.length !== 1 ? 's' : ''} • {totalChapters} chapter{totalChapters !== 1 ? 's' : ''} • {totalTopics} topic{totalTopics !== 1 ? 's' : ''}
                </p>

                {/* Progress */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-gray-600">Progress</span>
                    <span className="text-sm font-semibold text-blue-600">{completionRate}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${completionRate}%` }}
                    />
                  </div>
                </div>

                {/* Stats */}
                <div className="flex items-center justify-between text-sm pt-4 border-t border-gray-200">
                  <span className="text-gray-600">✓ {completedTopics} completed</span>
                  <span className="text-blue-600 font-medium group-hover:translate-x-2 transition-transform">
                    Explore →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Empty State */}
        {sortedClasses.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">📚</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No Classes Yet</h3>
            <p className="text-gray-600">Content will appear here once classes are added.</p>
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="bg-gray-800 text-white py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-sm text-gray-400">
            © 2025 Accessible Books - Professional Educational Content Platform
          </p>
        </div>
      </div>
    </div>
  );
}

