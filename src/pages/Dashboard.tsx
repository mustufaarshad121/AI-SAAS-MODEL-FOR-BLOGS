import React, { useState } from 'react';
import { PromptForm } from '../components/PromptForm';
import { BlogEditor } from '../components/BlogEditor';
import { OutlineDisplay } from '../components/OutlineDisplay';
import { AlertCircle } from 'lucide-react';
import { useAIGeneration } from '../hooks/useAIGeneration';

export function Dashboard() {
  const [prompt, setPrompt] = useState('');
  const [outline, setOutline] = useState<string[]>([]);
  const [content, setContent] = useState('');
  const { isLoading, error, generateOutline, generateBlog, humanizeContent } = useAIGeneration();

  const handleGenerateOutline = async () => {
    const points = await generateOutline(prompt);
    setOutline(points);
    setContent('');
  };

  const handleGenerateFullBlog = async () => {
    const text = await generateBlog(prompt, outline);
    setContent(text);
  };

  const handleHumanizeContent = async () => {
    const text = await humanizeContent(content);
    if (text) {
      setContent(text);
    }
  };

  const handleSave = () => {
    alert('Blog post saved successfully! (Demo only)');
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold text-white mb-8">AI Blog Generator</h1>
      
      <PromptForm
        prompt={prompt}
        onPromptChange={setPrompt}
        onGenerate={handleGenerateOutline}
        isLoading={isLoading}
        buttonText="Generate Outline"
      />

      {error && (
        <div className="flex items-center bg-red-500/10 text-red-500 p-4 rounded-lg mb-8">
          <AlertCircle className="w-5 h-5 mr-2" />
          {error}
        </div>
      )}

      {outline.length > 0 && !content && (
        <OutlineDisplay
          outline={outline}
          onGenerateFull={handleGenerateFullBlog}
          isLoading={isLoading}
        />
      )}

      {content && (
        <BlogEditor
          content={content}
          onContentChange={setContent}
          onSave={handleSave}
          onRegenerate={handleGenerateFullBlog}
          onHumanize={handleHumanizeContent}
          isLoading={isLoading}
        />
      )}
    </div>
  );
}