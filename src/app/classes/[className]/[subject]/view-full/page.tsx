import Link from 'next/link';
import { listClasses, listSubjects, listChapters, getAllTopicsInChapter } from '@/lib/content';
import { notFound } from 'next/navigation';
import TopicViewer from '@/components/TopicViewer';
import DownloadPdfButton from '@/components/DownloadPdfButton';
import SubjectContentsPage from '@/components/SubjectContentsPage';

interface PageProps {
  params: Promise<{
    className: string;
    subject: string;
  }>;
  searchParams: Promise<{ pdf?: string }>;
}

export default async function ViewFullSubjectPage({ params, searchParams }: PageProps) {
  const { className: rawClassName, subject: rawSubject } = await params;
  const { pdf } = await searchParams;
  const isPdfMode = pdf === 'true';
  const className = decodeURIComponent(rawClassName);
  const subject = decodeURIComponent(rawSubject);
  
  const classes = listClasses();
  const subjects = listSubjects(className);

  if (!classes.includes(className) || !subjects.includes(subject)) {
    notFound();
  }

  const chapters = listChapters(className, subject);

  // Subject contents data - matches what we had in the separate contents page
  const SUBJECT_CONTENTS_MAP: Record<string, Record<string, any[]>> = {
    'Primary 1': {
      'Mathematics': [
        {
          chapterNumber: 1,
          title: 'Basics of Geometry',
          topics: [
            'Points, Lines and Planes',
            'Angles: Point, Obtuse & Reflex',
            'Construction of Triangles',
            'Logic and Reasoning',
            'Geometric Figures',
            'Geometry Problem'
          ],
          pages: '15'
        },
        {
          chapterNumber: 2,
          title: 'Angles and Congruence', 
          topics: [
            'Triangle Congruence',
            'Angles in Triangles',
            'Polygon Angles',
            'Angles and Sides',
            'Side-Angle-Side Congruence',
            'Angle-Side-Angle Congruence'
          ],
          pages: '18'
        }
      ]
    },
    'Primary 4': {
      'Mathematics': [
        {
          chapterNumber: 1,
          title: 'Number and Numeration',
          topics: [
            'Whole Numbers 1-1000',
            'Place Value Understanding', 
            'Number Patterns',
            'Counting in Groups',
            'Number Comparison',
            'Basic Fractions'
          ],
          pages: '20'
        },
        {
          chapterNumber: 2,
          title: 'Basic Operations',
          topics: [
            'Addition of Large Numbers',
            'Subtraction with Regrouping',
            'Multiplication Tables',
            'Division with Remainders',
            'Word Problems',
            'Mental Mathematics'
          ],
          pages: '25'
        }
      ]
    },
    'JSS 1': {
      'Mathematics': [
        {
          chapterNumber: 1,
          title: 'Number and Numeration',
          topics: [
            'Whole Numbers',
            'LCM and HCF',
            'Counting in Twos',
            'Binary Conversion',
            'Fractions',
            'Number Properties'
          ],
          pages: '22'
        },
        {
          chapterNumber: 2,
          title: 'Basic Operations',
          topics: [
            'Addition and Subtraction',
            'Addition and Subtraction of fractions',
            'Multiplication and Division of Fractions',
            'Estimation',
            'Approximation',
            'Addition of numbers in base 2.',
            'Subtraction of numbers in base 2.',
            'Multiplication of numbers in base 2.',
            'Use of Symbols',
            'Use of Symbols (contd.)'
          ],
          pages: '25'
        },
        {
          chapterNumber: 3,
          title: 'Algebraic Processes',
          topics: [
            'Simplification of Algebraic Expressions',
            'Simple Equations'
          ],
          pages: '12'
        },
        {
          chapterNumber: 4,
          title: 'Mensuration and Geometry',
          topics: [
            'Plane Shapes',
            'Three dimensional Figures',
            'Construction',
            'Angles'
          ],
          pages: '16'
        },
        {
          chapterNumber: 5,
          title: 'Everyday Statistics',
          topics: [
            'Needs for statistics',
            'Data representation'
          ],
          pages: '10'
        }
      ]
    }
  };

  const contentChapters = SUBJECT_CONTENTS_MAP[className]?.[subject] || [];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      {!isPdfMode && (
      <div className="bg-white text-gray-900 py-4 border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-3 text-sm">
            <Link href="/" className="text-gray-600 hover:underline">Home</Link>
            <span>›</span>
            <Link href="/classes" className="text-gray-600 hover:underline">Classes</Link>
            <span>›</span>
            <Link href={`/classes/${encodeURIComponent(className)}`} className="text-gray-600 hover:underline">{className}</Link>
            <span>›</span>
            <Link href={`/classes/${encodeURIComponent(className)}/${encodeURIComponent(subject)}`} className="text-gray-600 hover:underline">{subject}</Link>
            <span>›</span>
            <span className="text-gray-500">Full Content</span>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">{subject} - Complete Content</h1>
              <p className="text-gray-500 mt-1">
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
      )}

      {/* Full Subject Content */}
      <div className="flex-1">
        {/* TABLE OF CONTENTS - First Page */}
        <div className="print:break-after-page">
          <SubjectContentsPage 
            className={className}
            subject={subject}
            chapters={contentChapters}
          />
        </div>

        <div className="max-w-5xl mx-auto px-4 py-8">
          {chapters.map((chapter, chapterIndex) => {
            const topics = getAllTopicsInChapter(className, subject, chapter)
              .sort((a, b) => (a.order || 0) - (b.order || 0));

            return (
              <div key={chapter}>
                {/* Chapter Title Page - Full Page Design (responsive min height) */}
                <div className="min-h-[70vh] print:min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 via-blue-600 to-pink-600 rounded-3xl shadow-2xl mb-12 print:break-after-page">
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

                {/* Chapter Topics - Each on fresh page with better spacing */}
                {topics.map((topic, topicIndex) => (
                  <div key={topic.slug} className="mb-16 print:break-before-page">
                    {/* Topic Title Page - Full page height */}
                    <div className="min-h-screen bg-white rounded-2xl shadow-xl p-16 mb-16 border-l-8 border-blue-600 flex flex-col justify-center print:min-h-screen">
                      <div className="text-center mb-12">
                        <div className="text-lg font-semibold text-blue-600 mb-4 uppercase tracking-wider">
                          Topic {topic.order || topicIndex + 1}
                        </div>
                        <h3 className="text-5xl font-bold text-gray-900 mb-8 leading-tight">{topic.title}</h3>
                        
                        {topic.data.performanceObjective && (
                          <div className="bg-blue-50 border-2 border-blue-200 p-8 rounded-xl mt-8 max-w-4xl mx-auto">
                            <p className="text-lg font-semibold text-blue-900 mb-3">Learning Objective</p>
                            <p className="text-xl text-gray-700 leading-relaxed">{topic.data.performanceObjective}</p>
                          </div>
                        )}
                        
                        <div className="mt-12">
                          <div className="bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl px-12 py-8 border-2 border-blue-200 inline-block">
                            <p className="text-lg text-gray-600 mb-2">Content Pages</p>
                            <p className="text-5xl font-bold text-blue-600">{topic.data.pages.length}</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Topic Content - Each page gets more space */}
                    <div className="print:break-before-page">
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