import React from "react";

interface SubjectBookCoverProps {
  className: string;
  subject: string;
  chapters: string[];
  totalTopics: number;
  publisher?: string;
  academicYear?: string;
}

export default function SubjectBookCover({ 
  className, 
  subject, 
  chapters, 
  totalTopics,
  publisher = "Accessible Books",
  academicYear = "2024/2025"
}: SubjectBookCoverProps) {
  
  // Create visual elements based on subject
  const getSubjectColor = (subject: string) => {
    switch (subject.toLowerCase()) {
      case 'mathematics':
        return {
          primary: 'from-blue-600 to-indigo-700',
          secondary: 'from-blue-500 to-indigo-600',
          accent: 'text-blue-100',
          icon: '🧮'
        };
      case 'english':
        return {
          primary: 'from-green-600 to-emerald-700',
          secondary: 'from-green-500 to-emerald-600',
          accent: 'text-green-100',
          icon: '📚'
        };
      case 'science':
        return {
          primary: 'from-purple-600 to-violet-700',
          secondary: 'from-purple-500 to-violet-600',
          accent: 'text-purple-100',
          icon: '🔬'
        };
      default:
        return {
          primary: 'from-gray-600 to-slate-700',
          secondary: 'from-gray-500 to-slate-600',
          accent: 'text-gray-100',
          icon: '📖'
        };
    }
  };

  const colors = getSubjectColor(subject);

  return (
    <div className="page bg-white">
      {/* Main Cover */}
      <div className={`h-full bg-gradient-to-br ${colors.primary} text-white p-8 relative overflow-hidden`}>
        
        {/* Header Section */}
        <div className="relative z-10 mb-8">
          <div className="text-center mb-4">
            <div className="text-2xl mb-2">{colors.icon}</div>
            <h1 className="text-4xl font-bold tracking-wide mb-2">{subject.toUpperCase()}</h1>
            <div className={`inline-block px-4 py-2 bg-white/20 rounded-lg backdrop-blur-sm`}>
              <span className="text-xl font-semibold">{className}</span>
            </div>
          </div>
        </div>

        {/* Main Title Section */}
        <div className="relative z-10 flex-1 flex items-center justify-center mb-8">
          <div className="text-center">
            <div className="mb-6">
              <div className={`bg-gradient-to-r ${colors.secondary} p-6 rounded-2xl shadow-2xl border-4 border-white/30`}>
                <h2 className="text-5xl font-bold mb-4">{subject}</h2>
                <p className={`text-xl font-medium ${colors.accent}`}>Student's Textbook</p>
              </div>
            </div>
            
            {/* Class Level Badge */}
            <div className="inline-flex items-center gap-2 bg-white/90 text-gray-800 px-6 py-3 rounded-full font-bold text-lg shadow-lg">
              <span className="text-2xl">{colors.icon}</span>
              <span>{className}</span>
            </div>
          </div>
        </div>

        {/* Chapter Overview Section */}
        <div className="relative z-10 bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
          <h3 className="text-xl font-bold mb-4 text-center">📚 What You'll Learn</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {chapters.slice(0, 4).map((chapter, index) => (
              <div key={index} className="flex items-center gap-3 bg-white/10 rounded-lg p-3">
                <span className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </span>
                <span className="text-sm font-medium">{chapter}</span>
              </div>
            ))}
            {chapters.length > 4 && (
              <div className="flex items-center gap-3 bg-white/10 rounded-lg p-3 text-center col-span-full">
                <span className="text-sm font-medium">
                  ...and {chapters.length - 4} more {chapters.length - 4 === 1 ? 'chapter' : 'chapters'}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Stats Section */}
        <div className="relative z-10 flex justify-center gap-6 mb-6">
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold">{chapters.length}</div>
            <div className={`text-sm ${colors.accent}`}>Chapters</div>
          </div>
          <div className="text-center bg-white/10 backdrop-blur-sm rounded-lg p-4">
            <div className="text-2xl font-bold">{totalTopics}</div>
            <div className={`text-sm ${colors.accent}`}>Topics</div>
          </div>
        </div>

        {/* Footer */}
        <div className="relative z-10 text-center">
          <div className="border-t border-white/30 pt-4">
            <p className="text-lg font-semibold mb-1">{publisher}</p>
            <p className={`text-sm ${colors.accent}`}>Academic Year {academicYear}</p>
            <p className={`text-xs ${colors.accent} mt-2`}>Designed for Accessible Learning</p>
          </div>
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-24 -translate-x-24"></div>
        <div className="absolute top-1/2 left-1/4 w-32 h-32 bg-white/5 rounded-full"></div>
        
        {/* Subject-specific decorative elements */}
        {subject.toLowerCase() === 'mathematics' && (
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 right-20 text-6xl">∑</div>
            <div className="absolute bottom-32 left-20 text-4xl">π</div>
            <div className="absolute top-1/3 right-1/4 text-5xl">∞</div>
            <div className="absolute bottom-20 right-1/3 text-4xl">√</div>
          </div>
        )}
      </div>
    </div>
  );
}
