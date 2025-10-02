import Link from 'next/link';
import type { ReactElement } from 'react';

interface Chapter {
  chapterNumber: number;
  title: string;
  topics: string[];
  pages: string;
}

interface SubjectContentsPageProps {
  className: string;
  subject: string;
  chapters: Chapter[];
  coverImage?: string;
}

export default function SubjectContentsPage({ 
  className, 
  subject, 
  chapters,
  coverImage 
}: SubjectContentsPageProps) {
  return (
    <div className="bg-white">
      {/* Subject Header with Cover Design */}
      <div className="text-center py-8 print:py-8">
        <div className="max-w-4xl mx-auto px-6">
          
          
          {/* Decorative Elements */}
          <div className="flex justify-center items-center gap-6 print:gap-12 mb-8 print:mb-16">
            <div className="w-12 h-12 print:w-20 print:h-20 rounded-full bg-gray-100 flex items-center justify-center">
              {/* <span className="text-xl print:text-3xl">📚</span> */}
            </div>
            {/* <div className="text-2xl print:text-4xl font-bold text-gray-800">
              CONTENTS
            </div> */}
            <div className="w-12 h-12 print:w-20 print:h-20 rounded-full bg-gray-100 flex items-center justify-center">
              {/* <span className="text-xl print:text-3xl">✨</span> */}
            </div>
          </div>

          {/* Summary */}
          <div className="text-sm print:text-lg text-gray-600">
            {/* Total Chapters: {chapters.length} */}
          </div>
        </div>
      </div>

      {/* Contents Layout */}
      <div className="max-w-6xl mx-auto px-6 py-0 print:py-8">
        {/* Title for Contents Section */}
        <div className="text-center mb-8 print:mb-16">
          <h2 className="text-2xl print:text-4xl font-bold text-gray-900 mb-2 print:mb-4">Table of Contents</h2>
          <div className="w-16 print:w-24 h-1 bg-gray-300 mx-auto"></div>
        </div>

        {/* Web: Centered flexible layout; PDF: 2-column grid */}
        <div className="flex flex-wrap justify-center gap-4 lg:gap-6 print:grid print:grid-cols-2 print:gap-6">
          {chapters.map((chapter, index) => (
            <div 
              key={chapter.chapterNumber}
              className={`
                w-full sm:w-auto max-w-sm print:max-w-none p-4 print:p-6 rounded-2xl print:rounded-2xl border-4 shadow-lg print:shadow-none
                ${index % 4 === 0 ? 'border-yellow-400 bg-yellow-50' : ''}
                ${index % 4 === 1 ? 'border-blue-400 bg-blue-50' : ''}
                ${index % 4 === 2 ? 'border-green-400 bg-green-50' : ''}
                ${index % 4 === 3 ? 'border-pink-400 bg-pink-50' : ''}
                print:w-full
              `}
              style={{ breakInside: 'avoid', pageBreakInside: 'avoid', WebkitColumnBreakInside: 'avoid' } as any}
            >
              {/* Chapter Header */}
              <div className="text-center mb-3 print:mb-4">
                <div className={`
                  inline-block px-3 py-1.5 print:px-4 print:py-2 rounded-lg print:rounded-lg font-bold text-base print:text-lg mb-2 print:mb-4
                  ${index % 4 === 0 ? 'bg-yellow-400 text-yellow-900' : ''}
                  ${index % 4 === 1 ? 'bg-blue-400 text-blue-900' : ''}
                  ${index % 4 === 2 ? 'bg-green-400 text-green-900' : ''}
                  ${index % 4 === 3 ? 'bg-pink-400 text-pink-900' : ''}
                `}>
                  CHAPTER {chapter.chapterNumber}
                </div>
                <h3 className="text-base print:text-xl font-bold text-gray-800 leading-tight">
                  {chapter.title}
                </h3>
              </div>

              {/* Topics List (uniform height) */}
              <div className="mb-3 print:mb-4">
                <div className="text-[11px] print:text-xs font-semibold text-gray-600 uppercase tracking-wide mb-2 print:mb-3 text-center">
                  Topics ({chapter.topics.length}):
                </div>
                <div className="space-y-2 print:space-y-2 print:grid print:grid-cols-2 print:gap-2">
                  {(() => {
                    const MAX_ROWS = 5; // show 4 topics + 1 summary row
                    const total = chapter.topics.length;
                    const showCount = Math.min(MAX_ROWS - 1, total);
                    const remaining = total - showCount;

                    const rows = [] as ReactElement[];
                    for (let i = 0; i < showCount; i++) {
                      const topic = chapter.topics[i];
                      rows.push(
                        <div
                          key={`t-${i}`}
                          className="flex items-center gap-2 print:gap-2 p-2 print:p-2 bg-white rounded-lg border border-gray-200 shadow-sm min-h-[34px] print:min-h-[36px] w-full min-w-0"
                        >
                          <div
                            className={`w-5 h-5 print:w-6 print:h-6 rounded-full flex items-center justify-center text-[10px] print:text-xs font-bold text-white flex-shrink-0 ${
                              index % 4 === 0
                                ? 'bg-yellow-500'
                                : index % 4 === 1
                                ? 'bg-blue-500'
                                : index % 4 === 2
                                ? 'bg-green-500'
                                : 'bg-pink-500'
                            }`}
                          >
                            {i + 1}
                          </div>
                          <div className="text-[13px] print:text-xs text-gray-700 leading-tight print:leading-snug w-full min-w-0 truncate print:whitespace-normal print:overflow-visible print:break-words">
                            {topic}
                          </div>
                        </div>
                      );
                    }

                    // Add a final row for remaining topics, if any
                    if (remaining > 0) {
                      rows.push(
                        <div
                          key="more"
                          className="flex items-center gap-2 print:gap-2 p-2 print:p-2 bg-white rounded-lg border border-dashed border-gray-300 text-gray-600 min-h-[34px] print:min-h-[36px]"
                        >
                          <div className="w-5 h-5 print:w-6 print:h-6 rounded-full flex items-center justify-center text-[10px] print:text-xs font-bold bg-gray-300 text-gray-700 flex-shrink-0">
                            …
                          </div>
                          <div className="text-[13px] print:text-sm leading-tight">
                            {remaining === 1 ? '+1 more topic' : `+${remaining} more topics`}
                          </div>
                        </div>
                      );
                    } else {
                      // Pad with invisible rows to keep uniform height
                      for (let j = showCount; j < MAX_ROWS; j++) {
                        rows.push(
                          <div
                            key={`pad-${j}`}
                            className="flex items-center gap-2 p-2 bg-transparent rounded-lg min-h-[34px] print:min-h-[36px] invisible"
                          >
                            <div className="w-5 h-5 rounded-full" />
                            <div className="text-[13px]">&nbsp;</div>
                          </div>
                        );
                      }
                    }

                    return rows;
                  })()}
                </div>
              </div>

              {/* Pages Info */}
              <div className="border-t border-gray-200 print:border-t pt-2 print:pt-3">
                <div className="text-center">
                  <div className="text-[11px] print:text-xs text-gray-600">
                    {/* Pages: <span className="font-bold text-xs print:text-sm text-gray-800">{chapter.pages}</span> */}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
