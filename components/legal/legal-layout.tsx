import React from "react";
import { TableOfContents } from "./table-of-contents";


interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  content: any[];
  description: string;
  isSupport?: boolean;
}

export function LegalLayout({ 
  title, 
  lastUpdated, 
  content, 
  description, 
  isSupport = false 
}: LegalLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {title}
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            {description}
          </p>
          <div className="inline-flex items-center px-4 py-2 bg-white rounded-full border border-gray-200">
            <span className="text-sm text-gray-500">
              {isSupport ? lastUpdated : `Last updated: ${lastUpdated}`}
            </span>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          {/* Table of Contents - Desktop */}
          <div className="lg:w-1/4">
            <div className="lg:sticky lg:top-8">
              <TableOfContents sections={content} />
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-3/4">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 md:p-12">
              {content.map((section, index) => (
                <section key={index} id={section.id} className="mb-12">
                  <h2 className="text-2xl font-bold mb-6 text-gray-900">
                    {section.title}
                  </h2>
                  <div className="prose prose-gray max-w-none">
                    {section.content}
                  </div>
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}