import Link from 'next/link';
import { getTopicBySlug } from '@/lib/content';
import { notFound } from 'next/navigation';
import TopicViewer from '@/components/TopicViewer';
import DownloadPdfButton from '@/components/DownloadPdfButton';

interface PageProps {
  params: {
    className: string;
    subject: string;
    slug: string;
  };
}

export default function TopicPage({ params }: PageProps) {
  const className = decodeURIComponent(params.className);
  const subject = decodeURIComponent(params.subject);
  const slug = params.slug;

  const topic = getTopicBySlug(className, subject, slug);

  if (!topic) {
    notFound();
  }

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
            <span className="text-blue-200">{topic.title}</span>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">{topic.title}</h1>
              <p className="text-blue-100 mt-1">
                {className} • {subject} • Topic {topic.order || 1}
              </p>
            </div>
            <div className="flex gap-3">
              <DownloadPdfButton 
                className={className} 
                subject={subject} 
                slug={slug}
                type="topic"
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

      {/* Topic Content */}
      <div className="flex-1">
        <TopicViewer topic={topic} />
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

