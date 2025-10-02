'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowLeftIcon, CheckIcon } from '@heroicons/react/24/outline';

export default function AddTopicsPage() {
  const [currentChapter, setCurrentChapter] = useState('');
  const [topics, setTopics] = useState<string[]>([]);
  const [topicInput, setTopicInput] = useState('');

  const chapters = [
    'NUMBER AND NUMERATION',
    'BASIC OPERATIONS',
    'ALGEBRAIC PROCESSES',
    'MENSURATION AND GEOMETRY',
    'EVERYDAY STATISTICS',
  ];

  const addTopic = () => {
    if (topicInput.trim() && currentChapter) {
      setTopics([...topics, topicInput.trim()]);
      setTopicInput('');
    }
  };

  const saveToCurriculum = () => {
    // This would save to the main curriculum page
    alert(`Saved ${topics.length} topics to ${currentChapter}`);
    // Navigate back
    window.location.href = '/curriculum/jss1-math';
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/curriculum/jss1-math" className="inline-flex items-center gap-2 text-blue-600 hover:underline mb-6">
          <ArrowLeftIcon className="w-4 h-4" />
          Back to Curriculum
        </Link>

        <h1 className="text-3xl font-bold mb-6">Add Topics to JSS 1 Mathematics</h1>

        {/* Select Chapter */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Chapter
          </label>
          <select
            value={currentChapter}
            onChange={(e) => setCurrentChapter(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">-- Select a chapter --</option>
            {chapters.map((chapter) => (
              <option key={chapter} value={chapter}>
                {chapter}
              </option>
            ))}
          </select>
        </div>

        {/* Add Topics */}
        {currentChapter && (
          <div className="bg-white rounded-lg shadow p-6 mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Add Topic
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={topicInput}
                onChange={(e) => setTopicInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addTopic()}
                placeholder="Enter topic name..."
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={addTopic}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Add
              </button>
            </div>

            {/* Topics List */}
            {topics.length > 0 && (
              <div className="mt-6">
                <h3 className="font-medium mb-3">Topics Added ({topics.length})</h3>
                <div className="space-y-2">
                  {topics.map((topic, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                      <CheckIcon className="w-5 h-5 text-green-600" />
                      <span>{topic}</span>
                      <button
                        onClick={() => setTopics(topics.filter((_, i) => i !== index))}
                        className="ml-auto text-red-600 hover:text-red-700"
                      >
                        Remove
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Save Button */}
        {topics.length > 0 && (
          <button
            onClick={saveToCurriculum}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg"
          >
            Save {topics.length} Topics to Curriculum
          </button>
        )}
      </div>
    </div>
  );
}
