import React from 'react';
import { Save, RefreshCw, UserCheck } from 'lucide-react';

interface BlogEditorProps {
  content: string;
  onContentChange: (content: string) => void;
  onSave: () => void;
  onRegenerate: () => void;
  onHumanize: () => void;
  isLoading: boolean;
}

export function BlogEditor({ 
  content, 
  onContentChange, 
  onSave, 
  onRegenerate, 
  onHumanize,
  isLoading 
}: BlogEditorProps) {
  return (
    <div className="bg-navy-800 p-6 rounded-xl">
      <textarea
        className="w-full h-96 bg-navy-900 text-white p-4 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-purple-500 font-sans text-base leading-relaxed"
        value={content}
        onChange={(e) => onContentChange(e.target.value)}
        placeholder="Your blog content will appear here. Feel free to edit..."
      />
      
      <div className="flex flex-wrap gap-4">
        <button
          onClick={onSave}
          disabled={isLoading || !content}
          className="flex items-center bg-green-500 text-white px-6 py-2 rounded-full hover:bg-green-600 transition-colors disabled:opacity-50"
        >
          <Save className="w-4 h-4 mr-2" />
          Save Changes
        </button>
        
        <button
          onClick={onRegenerate}
          disabled={isLoading}
          className="flex items-center bg-purple-500 text-white px-6 py-2 rounded-full hover:bg-purple-600 transition-colors disabled:opacity-50"
        >
          <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
          Regenerate
        </button>

        <button
          onClick={onHumanize}
          disabled={isLoading || !content}
          className="flex items-center bg-blue-500 text-white px-6 py-2 rounded-full hover:bg-blue-600 transition-colors disabled:opacity-50"
        >
          <UserCheck className="w-4 h-4 mr-2" />
          Humanize Content
        </button>
      </div>
    </div>
  );
}