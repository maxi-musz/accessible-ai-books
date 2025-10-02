'use client';

import { Topic } from '@/content/schema';
import Image from 'next/image';

interface TopicViewerProps {
  topic: Topic;
  showTopicInfo?: boolean;
}

export default function TopicViewer({ topic, showTopicInfo = true }: TopicViewerProps) {
  const totalPages = topic.data.pages.length;

  const renderBlock = (block: any, blockIndex: number) => {
    switch (block.type) {
      case 'intro':
        return (
          <div
            key={blockIndex}
            className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-600 p-6 rounded-r-lg"
          >
            <p className="text-lg leading-relaxed">{block.content}</p>
          </div>
        );

      case 'heading':
        return (
          <h2
            key={blockIndex}
            className="text-2xl font-bold text-gray-900 mt-8 mb-4"
          >
            {block.content}
          </h2>
        );

      case 'subheading':
        return (
          <h3
            key={blockIndex}
            className="text-xl font-semibold text-gray-800 mt-6 mb-3"
          >
            {block.content}
          </h3>
        );

      case 'paragraph':
        return (
          <p key={blockIndex} className="text-lg leading-relaxed mb-4">
            {block.content}
          </p>
        );

      case 'example':
        return (
          <div
            key={blockIndex}
            className="bg-green-50 border-2 border-green-200 rounded-xl p-6 my-6"
          >
            {block.title && (
              <div className="text-green-800 font-bold mb-3 text-lg">
                {block.title}
              </div>
            )}
            <div className="text-gray-800 whitespace-pre-line">
              {block.content}
            </div>
          </div>
        );

      case 'note':
        return (
          <div
            key={blockIndex}
            className="bg-yellow-50 border-2 border-yellow-300 rounded-xl p-6 my-6"
          >
            {block.title && (
              <div className="text-yellow-800 font-bold mb-3 text-lg">
                💡 {block.title}
              </div>
            )}
            <div className="text-gray-800 whitespace-pre-line">
              {block.content}
            </div>
          </div>
        );

      case 'warning':
        return (
          <div
            key={blockIndex}
            className="bg-red-50 border-2 border-red-300 rounded-xl p-6 my-6"
          >
            {block.title && (
              <div className="text-red-800 font-bold mb-3 text-lg">
                ⚠️ {block.title}
              </div>
            )}
            <div className="text-gray-800 whitespace-pre-line">
              {block.content}
            </div>
          </div>
        );

      case 'list':
        return (
          <div key={blockIndex} className="my-4">
            {block.title && (
              <h4 className="font-semibold text-gray-900 mb-2">
                {block.title}
              </h4>
            )}
            <ul className="list-disc list-inside space-y-2 ml-4">
              {block.items?.map((item: string, i: number) => (
                <li key={i} className="text-gray-800">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        );

      case 'image':
        return (
          <div key={blockIndex} className="my-8">
            <div className="relative w-full rounded-xl overflow-hidden border-2 border-gray-200">
              <Image
                src={block.src || ''}
                alt={block.alt || ''}
                width={block.width || 800}
                height={block.height || 600}
                className="w-full h-auto"
              />
            </div>
            {block.caption && (
              <p className="text-sm text-gray-600 text-center mt-3 italic">
                {block.caption}
              </p>
            )}
          </div>
        );

      case 'html':
        return (
          <div
            key={blockIndex}
            className="my-6"
            dangerouslySetInnerHTML={{ __html: block.html || '' }}
          />
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* All Pages Content */}
      <div className="space-y-8">
        {topic.data.pages.map((page, pageIndex) => (
          <div key={pageIndex} className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 border-2 border-gray-200">
            {/* Page Title */}
            <div className="mb-8 pb-6 border-b-2 border-gray-200">
              <div className="text-sm text-blue-600 font-medium mb-2">
                Page {page.number}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                {page.title}
              </h2>
            </div>

            {/* Page Blocks */}
            <div className="space-y-6 text-gray-800 leading-relaxed">
              {page.blocks.map((block, blockIndex) => renderBlock(block, blockIndex))}
            </div>
          </div>
        ))}
      </div>

      {/* Topic Info */}
      {showTopicInfo && (
        <div className="mt-8 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border-2 border-blue-200">
          <h3 className="text-lg font-bold text-gray-900 mb-4">About This Topic</h3>
          <div className="grid md:grid-cols-2 gap-4 text-sm">
            <div>
              <div className="text-gray-600">Performance Objective</div>
              <div className="text-gray-900 font-medium mt-1">
                {topic.data.performanceObjective || 'Not specified'}
              </div>
            </div>
            <div>
              <div className="text-gray-600">Total Pages</div>
              <div className="text-gray-900 font-medium mt-1">
                {totalPages} page{totalPages !== 1 ? 's' : ''}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

