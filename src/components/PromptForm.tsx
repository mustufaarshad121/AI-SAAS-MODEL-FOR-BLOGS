import React from 'react';
import { Wand2 } from 'lucide-react';

interface PromptFormProps {
  prompt: string;
  onPromptChange: (prompt: string) => void;
  onGenerate: () => void;
  isLoading: boolean;
  buttonText?: string;
}

export function PromptForm({ 
  prompt, 
  onPromptChange, 
  onGenerate, 
  isLoading,
  buttonText = "Generate Blog Post"
}: PromptFormProps) {
  return (
    <div className="bg-navy-800 p-6 rounded-xl mb-8">
      <div className="mb-4">
        <label htmlFor="topic" className="block text-white mb-2">Blog Topic</label>
        <input
          type="text"
          id="topic"
          className="w-full bg-navy-900 text-white p-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Enter your blog topic or title..."
          value={prompt}
          onChange={(e) => onPromptChange(e.target.value)}
        />
      </div>
      
      <button
        onClick={onGenerate}
        disabled={isLoading || !prompt}
        className="flex items-center bg-purple-500 text-white px-6 py-3 rounded-full hover:bg-purple-600 transition-colors disabled:opacity-50"
      >
        <Wand2 className={`w-5 h-5 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
        {buttonText}
      </button>
    </div>
  );
}