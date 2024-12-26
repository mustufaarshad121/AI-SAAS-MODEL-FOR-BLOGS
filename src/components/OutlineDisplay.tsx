import React from 'react';
import { FileText, ChevronRight, Edit3, Layout, BookOpen } from 'lucide-react';

interface OutlineDisplayProps {
  outline: string[];
  onGenerateFull: () => void;
  isLoading: boolean;
}

export function OutlineDisplay({ outline, onGenerateFull, isLoading }: OutlineDisplayProps) {
  // Categorize outline points
  const introduction = outline[0];
  const mainPoints = outline.slice(1, -1);
  const conclusion = outline[outline.length - 1];

  return (
    <div className="bg-navy-800/50 backdrop-blur-md p-8 rounded-2xl mb-8 border border-purple-500/20">
      <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
        <FileText className="w-6 h-6 mr-3 text-purple-400" />
        Blog Structure
      </h3>

      <div className="space-y-6">
        {/* Introduction Section */}
        <div className="glass-card p-4 rounded-xl">
          <div className="flex items-center mb-3">
            <BookOpen className="w-5 h-5 text-purple-400 mr-2" />
            <h4 className="text-lg font-semibold text-purple-300">Introduction</h4>
          </div>
          <p className="text-gray-300 pl-7">{introduction}</p>
        </div>

        {/* Main Content Sections */}
        <div className="glass-card p-4 rounded-xl">
          <div className="flex items-center mb-4">
            <Layout className="w-5 h-5 text-pink-400 mr-2" />
            <h4 className="text-lg font-semibold text-pink-300">Main Content</h4>
          </div>
          <div className="space-y-4">
            {mainPoints.map((point, index) => (
              <div 
                key={index}
                className="flex items-start group p-3 rounded-lg hover:bg-white/5 transition-colors"
              >
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-pink-500/10 text-pink-400 text-sm font-medium mr-3 flex-shrink-0 mt-0.5">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <p className="text-gray-300 group-hover:text-white transition-colors">{point}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Conclusion Section */}
        <div className="glass-card p-4 rounded-xl">
          <div className="flex items-center mb-3">
            <Edit3 className="w-5 h-5 text-orange-400 mr-2" />
            <h4 className="text-lg font-semibold text-orange-300">Conclusion</h4>
          </div>
          <p className="text-gray-300 pl-7">{conclusion}</p>
        </div>
      </div>

      {/* Generate Button */}
      <div className="mt-8">
        <button
          onClick={onGenerateFull}
          disabled={isLoading}
          className="w-full relative group"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur opacity-30 group-hover:opacity-100 transition duration-200"></div>
          <div className="relative flex items-center justify-center bg-navy-900 text-white px-6 py-4 rounded-xl hover:bg-navy-800 transition-colors disabled:opacity-50">
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-t-2 border-white rounded-full animate-spin mr-3"></div>
                Crafting Your Blog Post...
              </>
            ) : (
              <>
                <FileText className="w-5 h-5 mr-3" />
                Generate Full Blog Post
              </>
            )}
          </div>
        </button>
      </div>
    </div>
  );
}