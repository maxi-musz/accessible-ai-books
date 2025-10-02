import Link from 'next/link';
import { listClasses, listSubjects, listChapters, getAllTopicsInChapter } from '@/lib/content';
import { notFound } from 'next/navigation';
import TopicViewer from '@/components/TopicViewer';
import DownloadPdfButton from '@/components/DownloadPdfButton';

interface PageProps {
  params: Promise<{
    className: string;
    subject: string;
  }>;
}

export default async function ViewFullSubjectPage({ params }: PageProps) {
  const { className: rawClassName, subject: rawSubject } = await params;
  const className = decodeURIComponent(rawClassName);
  const subject = decodeURIComponent(rawSubject);
  
  const classes = listClasses();
  const subjects = listSubjects(className);

  if (!classes.includes(className) || !subjects.includes(subject)) {
    notFound();
  }

  const chapters = listChapters(className, subject);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8 shadow-lg sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-3 text-sm">
            <Link href="/" className="hover:underline">Home</Link>
            <span>›</span>
            <Link href="/classes" className="hover:underline">Classes</Link>
            <span>›</span>
            <Link href={`/classes/${encodeURIComponent(className)}`} className="hover:underline">{className}</Link>
            <span>›</span>
            <Link href={`/classes/${encodeURIComponent(className)}/${encodeURIComponent(subject)}`} className="hover:underline">{subject}</Link>
            <span>›</span>
            <span className="text-blue-200">Full Content</span>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">{subject} - Complete Content</h1>
              <p className="text-blue-100 mt-1">
                {className} • {chapters.length} chapter{chapters.length !== 1 ? 's' : ''}
              </p>
            </div>
            <div className="flex gap-3">
              <DownloadPdfButton 
                className={className} 
                subject={subject} 
                slug="all"
                type="subject"
              />
              <Link
                href={`/classes/${encodeURIComponent(className)}/${encodeURIComponent(subject)}`}
                className="bg-white/10 hover:bg-white/20 px-5 py-2 rounded-lg font-medium transition-all flex items-center gap-2 border border-white/20 text-sm"
              >
                ← Back to Topics
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Full Subject Content */}
      <div className="flex-1">
        <div className="max-w-5xl mx-auto px-4 py-8">
          {chapters.map((chapter, chapterIndex) => {
            const topics = getAllTopicsInChapter(className, subject, chapter)
              .sort((a, b) => (a.order || 0) - (b.order || 0));

            return (
              <div key={chapter}>
                {/* Chapter Title Page - Full Page Design */}
                <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-blue-600 to-pink-600 rounded-3xl shadow-2xl mb-12 print:break-after-page">
                  <div className="text-center text-white px-8 py-16">
                    {/* Chapter Number */}
                    <div className="mb-8">
                      <div className="inline-block border-4 border-white/30 rounded-full px-8 py-4">
                        <p className="text-xl font-semibold tracking-wider uppercase opacity-90">Chapter</p>
                        <p className="text-8xl font-bold mt-2">{chapterIndex + 1}</p>
                      </div>
                    </div>

                    {/* Chapter Title */}
                    <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                      {chapter}
                    </h2>

                    {/* Chapter Info */}
                    <div className="flex items-center justify-center gap-8 text-white/90">
                      <div className="flex items-center gap-2">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                          <span className="text-2xl">📚</span>
                        </div>
                        <div className="text-left">
                          <p className="text-sm opacity-75">Topics</p>
                          <p className="text-2xl font-bold">{topics.length}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                          <span className="text-2xl">📄</span>
                        </div>
                        <div className="text-left">
                          <p className="text-sm opacity-75">Pages</p>
                          <p className="text-2xl font-bold">
                            {topics.reduce((sum, t) => sum + t.data.pages.length, 0)}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Decorative line */}
                    <div className="mt-12 flex items-center justify-center gap-4">
                      <div className="h-1 w-24 bg-white/30 rounded"></div>
                      <div className="w-3 h-3 bg-white/50 rounded-full"></div>
                      <div className="h-1 w-24 bg-white/30 rounded"></div>
                    </div>

                    {/* Subject and Class Info */}
                    <div className="mt-8 text-white/70 text-sm">
                      <p>{className} • {subject}</p>
                    </div>
                  </div>
                </div>

                {/* Chapter Topics - Each on fresh page */}
                {topics.map((topic, topicIndex) => (
                  <div key={topic.slug} className="mb-12 print:break-before-page">
                    {/* Topic Title Page */}
                    <div className="bg-white rounded-2xl shadow-xl p-12 mb-8 border-l-8 border-blue-600">
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex-1">
                          <div className="text-sm font-semibold text-blue-600 mb-2 uppercase tracking-wider">
                            Topic {topic.order || topicIndex + 1}
                          </div>
                          <h3 className="text-4xl font-bold text-gray-900 mb-4">{topic.title}</h3>
                          {topic.data.performanceObjective && (
                            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg mt-4">
                              <p className="text-sm font-semibold text-blue-900 mb-1">Learning Objective</p>
                              <p className="text-gray-700">{topic.data.performanceObjective}</p>
                            </div>
                          )}
                        </div>
                        <div className="ml-6 text-right">
                          <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl px-6 py-4 border-2 border-blue-200">
                            <p className="text-sm text-gray-600">Pages</p>
                            <p className="text-3xl font-bold text-blue-600">{topic.data.pages.length}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Topic Content */}
                    <div className="bg-white rounded-2xl shadow-lg border-2 border-gray-200 p-8">
                      <TopicViewer topic={topic} showTopicInfo={false} />
                    </div>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
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

