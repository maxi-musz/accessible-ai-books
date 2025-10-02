'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Sidebar from './Sidebar';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

interface AppLayoutProps {
  children: React.ReactNode;
}

export default function AppLayout({ children }: AppLayoutProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Hide sidebar for PDF generation, homepage, or curriculum dashboard
  const showSidebar = !pathname.includes('?pdf=true') && pathname !== '/' && pathname !== '/curriculum';

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile menu button */}
      {showSidebar && (
        <button
          onClick={() => setMobileMenuOpen(true)}
          className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md border border-gray-200 hover:bg-gray-50 transition-colors"
          aria-label="Open navigation menu"
        >
          <Bars3Icon className="w-5 h-5 text-gray-600" />
        </button>
      )}

      {/* Desktop sidebar */}
      {showSidebar && (
        <div className="hidden lg:block">
          <Sidebar />
        </div>
      )}

      {/* Mobile sidebar overlay */}
      {showSidebar && mobileMenuOpen && (
        <>
          <div
            className="lg:hidden fixed inset-0 z-40 bg-gray-600 bg-opacity-50"
            onClick={() => setMobileMenuOpen(false)}
          />
          <div className="lg:hidden fixed inset-y-0 left-0 z-50 flex">
            <div className="flex flex-col w-80">
              <div className="flex items-center justify-between p-4 bg-white border-b border-gray-200">
                <h2 className="text-lg font-semibold text-gray-900">Navigation</h2>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1 rounded-md hover:bg-gray-100 transition-colors"
                  aria-label="Close navigation menu"
                >
                  <XMarkIcon className="w-5 h-5 text-gray-600" />
                </button>
              </div>
              <div className="flex-1 overflow-hidden">
                <Sidebar />
              </div>
            </div>
          </div>
        </>
      )}

      <main className={`flex-1 overflow-auto ${showSidebar ? 'lg:ml-0' : 'w-full'} ${showSidebar ? 'ml-0' : ''}`}>
        {children}
      </main>
    </div>
  );
}
