"use client";

import React from "react";
import { PAPER_SIZES } from "@/lib/pdf-config";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

interface DownloadPdfButtonProps {
  className: string;
  subject: string;
  slug: string;
  chapter?: string;
  type?: 'topic' | 'chapter' | 'subject';
}

export default function DownloadPdfButton({ className, subject, slug, chapter, type = 'topic' }: DownloadPdfButtonProps) {
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [showOptions, setShowOptions] = React.useState(false);
  const [selectedPaperSize, setSelectedPaperSize] = React.useState<string>("A4");
  const [selectedPreset, setSelectedPreset] = React.useState<string>("default");

  const downloadPdf = async (paperSize: string = selectedPaperSize, preset: string = selectedPreset) => {
    setIsLoading(true);
    setError(null);
    setShowOptions(false);
    
    try {
      const baseUrl = window.location.origin;
      let topicUrl: string;
      let filename: string;
      
      if (type === 'subject' || slug === "all") {
        // Handle subject-level download (all topics)
        topicUrl = `${baseUrl}/classes/${encodeURIComponent(className)}/${encodeURIComponent(subject)}/view-full?pdf=true`;
        filename = `${className}-${subject}-Complete-${paperSize}.pdf`;
      } else if (type === 'chapter' && chapter) {
        // Handle chapter-level download
        topicUrl = `${baseUrl}/classes/${encodeURIComponent(className)}/${encodeURIComponent(subject)}/view-chapter/${encodeURIComponent(chapter)}?pdf=true`;
        filename = `${className}-${subject}-${chapter}-${paperSize}.pdf`;
      } else {
        // Handle individual topic download
        topicUrl = `${baseUrl}/classes/${encodeURIComponent(className)}/${encodeURIComponent(subject)}/${slug}?pdf=true`;
        filename = `${className}-${subject}-${slug}-${paperSize}.pdf`;
      }
      
      const apiUrl = `/api/pdf?url=${encodeURIComponent(topicUrl)}&filename=${encodeURIComponent(filename)}&paperSize=${paperSize}&preset=${preset}`;
      
      const res = await fetch(apiUrl, { method: "GET" });
      if (!res.ok) throw new Error("Failed to generate PDF");
      const blob = await res.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (err) {
      setError("Could not generate PDF. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    downloadPdf();
  };

  return (
    <div className="relative inline-flex items-center gap-2">
      <div className="flex">
        {/* Quick Download Button */}
        <button
          onClick={handleQuickDownload}
          disabled={isLoading}
          aria-busy={isLoading}
          className="inline-flex items-center gap-2 rounded-l-md border border-r-0 border-neutral-300 px-4 py-2 text-sm bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <>
              <span className="inline-block h-3 w-3 animate-spin rounded-full border-2 border-white border-t-transparent" aria-hidden />
              Generating...
            </>
          ) : (
            <>Download PDF</>
          )}
        </button>

        {/* Options Dropdown Button */}
        <button
          onClick={() => setShowOptions(!showOptions)}
          disabled={isLoading}
          className="inline-flex items-center px-2 py-2 border border-neutral-300 rounded-r-md bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-60"
          aria-label="PDF Options"
        >
          <ChevronDownIcon className="w-4 h-4" />
        </button>
      </div>

      {/* Options Dropdown */}
      {showOptions && (
        <div className="absolute top-full right-0 mt-2 w-80 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
          <div className="p-4">
            <h3 className="font-semibold text-gray-900 mb-3">PDF Download Options</h3>
            
            {/* Paper Size Selection */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Paper Size</label>
              <select
                value={selectedPaperSize}
                onChange={(e) => setSelectedPaperSize(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md text-sm text-gray-900 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {Object.entries(PAPER_SIZES).map(([key, size]) => (
                  <option key={key} value={key}>
                    {size.description}
                  </option>
                ))}
              </select>
            </div>

            {/* Preset Selection */}
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-2">Format Preset</label>
              <select
                value={selectedPreset}
                onChange={(e) => setSelectedPreset(e.target.value)}
                className="w-full p-2 border border-gray-300 rounded-md text-sm text-gray-900 bg-white focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="default">Standard Format</option>
                <option value="textbook">Textbook Layout</option>
                <option value="publishing">Publishing Ready</option>
              </select>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-2">
              <button
                onClick={() => downloadPdf(selectedPaperSize, selectedPreset)}
                disabled={isLoading}
                className="flex-1 bg-blue-600 text-white px-3 py-2 rounded-md text-sm hover:bg-blue-700 disabled:opacity-60"
              >
                Download Custom PDF
              </button>
              <button
                onClick={() => setShowOptions(false)}
                className="px-3 py-2 border border-gray-300 rounded-md text-sm text-gray-700 bg-white hover:bg-gray-50"
              >
                Cancel
              </button>
            </div>

            {/* Quick Presets */}
            <div className="mt-3 pt-3 border-t border-gray-200">
              <p className="text-xs text-gray-600 mb-2">Quick Presets:</p>
              <div className="flex gap-1">
                <button
                  onClick={() => downloadPdf("A4", "default")}
                  disabled={isLoading}
                  className="text-xs px-2 py-1 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded disabled:opacity-60"
                >
                  A4 Standard
                </button>
                <button
                  onClick={() => downloadPdf("TEXTBOOK_6X9", "textbook")}
                  disabled={isLoading}
                  className="text-xs px-2 py-1 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded disabled:opacity-60"
                >
                  6×9 Textbook
                </button>
                <button
                  onClick={() => downloadPdf("LETTER", "publishing")}
                  disabled={isLoading}
                  className="text-xs px-2 py-1 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded disabled:opacity-60"
                >
                  Letter Publishing
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Close dropdown when clicking outside */}
      {showOptions && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setShowOptions(false)}
        />
      )}

      {error && <span className="text-red-600 text-sm block mt-2">{error}</span>}
    </div>
  );
}
