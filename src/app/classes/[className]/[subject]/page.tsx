import Link from 'next/link';
import { listClasses, listSubjects, listChapters, getAllTopicsInChapter } from '@/lib/content';
import { notFound } from 'next/navigation';

interface PageProps {
  params: {
    className: string;
    subject: string;
  };
}

export default function SubjectPage({ params }: PageProps) {
  const className = decodeURIComponent(params.className);
  const subject = decodeURIComponent(params.subject);
  
  const classes = listClasses();
  const subjects = listSubjects(className);

  // Check if class and subject exist
  if (!classes.includes(className) || !subjects.includes(subject)) {
    notFound();
  }

  const chapters = listChapters(className, subject);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12 shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-4 text-sm">
            <Link href="/" className="hover:underline">Home</Link>
            <span>›</span>
            <Link href="/classes" className="hover:underline">Classes</Link>
            <span>›</span>
            <Link href={`/classes/${encodeURIComponent(className)}`} className="hover:underline">{className}</Link>
            <span>›</span>
            <span className="text-blue-200">{subject}</span>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold mb-2">
                {subject === 'Mathematics' ? '🔢' : '📝'} {subject}
              </h1>
              <p className="text-blue-100 text-lg">
                {className} • {chapters.length} chapter{chapters.length !== 1 ? 's' : ''}
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                href={`/classes/${encodeURIComponent(className)}/${encodeURIComponent(subject)}/view-full`}
                className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2 border border-green-500"
              >
                📖 View Full Content
              </Link>
              <Link
                href={`/classes/${encodeURIComponent(className)}`}
                className="bg-white/10 hover:bg-white/20 px-6 py-3 rounded-lg font-medium transition-all flex items-center gap-2 border border-white/20"
              >
                ← Back to {className}
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 max-w-7xl mx-auto px-4 py-12 w-full">
        <div className="space-y-6">
          {chapters.map(chapter => {
            const topics = getAllTopicsInChapter(className, subject, chapter);
            const completedTopics = topics.filter(t => t.completed).length;
            const completionRate = topics.length > 0 ? Math.round((completedTopics / topics.length) * 100) : 0;

            return (
              <div key={chapter} className="bg-white rounded-2xl border-2 border-gray-200 shadow-lg overflow-hidden">
                {/* Chapter Header */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold mb-2">{chapter}</h2>
                      <p className="text-blue-100">
                        {topics.length} topic{topics.length !== 1 ? 's' : ''} • {completedTopics} completed
                      </p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="text-4xl font-bold">{completionRate}%</div>
                        <div className="text-sm text-blue-100">Complete</div>
                      </div>
                      <Link
                        href={`/classes/${encodeURIComponent(className)}/${encodeURIComponent(subject)}/view-chapter/${encodeURIComponent(chapter)}`}
                        className="bg-white/20 hover:bg-white/30 px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 border border-white/30 text-sm whitespace-nowrap"
                      >
                        📄 View Chapter
                      </Link>
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="w-full bg-white/20 rounded-full h-2">
                      <div
                        className="bg-white h-2 rounded-full transition-all duration-500"
                        style={{ width: `${completionRate}%` }}
                      />
                    </div>
                  </div>
                </div>

                {/* Topics List */}
                <div className="p-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    {topics.sort((a, b) => (a.order || 0) - (b.order || 0)).map(topic => {
                      const isCompleted = topic.completed;

                      return (
                        <Link
                          key={topic.slug}
                          href={`/classes/${encodeURIComponent(className)}/${encodeURIComponent(subject)}/${topic.slug}`}
                          className={`group p-5 rounded-xl border-2 transition-all duration-300 hover:shadow-lg ${
                            isCompleted
                              ? 'bg-green-50 border-green-300 hover:border-green-500'
                              : 'bg-gray-50 border-gray-200 hover:border-blue-500'
                          }`}
                        >
                          <div className="flex items-start gap-4">
                            {/* Topic Number Badge */}
                            <div className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 font-bold text-lg ${
                              isCompleted ? 'bg-green-500 text-white' : 'bg-blue-500 text-white'
                            }`}>
                              {isCompleted ? '✓' : topic.order || 1}
                            </div>

                            {/* Topic Info */}
                            <div className="flex-1">
                              <h3 className={`text-lg font-bold mb-1 group-hover:text-blue-600 transition-colors ${
                                isCompleted ? 'text-green-800' : 'text-gray-900'
                              }`}>
                                {topic.title}
                              </h3>
                              <p className="text-sm text-gray-600 mb-2">
                                Topic {topic.order || 1} • {topic.data.pages.length} page{topic.data.pages.length !== 1 ? 's' : ''}
                              </p>
                              {isCompleted && (
                                <div className="inline-flex items-center gap-1 bg-green-100 text-green-700 text-xs font-medium px-2 py-1 rounded-full">
                                  <span>✓</span>
                                  <span>Completed</span>
                                </div>
                              )}
                            </div>

                            {/* Arrow */}
                            <div className="text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all">
                              →
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Empty State */}
        {chapters.length === 0 && (
          <div className="text-center py-12 bg-white rounded-2xl border-2 border-gray-200">
            <div className="text-6xl mb-4">📚</div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No Chapters Yet</h3>
            <p className="text-gray-600">
              Content for {className} {subject} will appear here once chapters are added.
            </p>
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

