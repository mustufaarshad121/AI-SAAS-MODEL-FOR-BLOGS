import { useState } from 'react';
import { genAI, generateOutlinePrompt, generateFullBlogPrompt, generateHumanizedPrompt } from '../utils/ai';

export const useAIGeneration = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const generateContent = async (prompt: string) => {
    try {
      const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
      const result = await model.generateContent(prompt);
      const response = await result.response;
      return response.text();
    } catch (error) {
      throw error;
    }
  };

  const generateOutline = async (topic: string) => {
    try {
      setIsLoading(true);
      setError('');
      
      const text = await generateContent(generateOutlinePrompt(topic));
      
      const points = text
        .split('\n')
        .map(point => point.replace(/^[•\-\*]\s*/, '').trim())
        .filter(point => point.length > 0);
      
      return points;
    } catch (error) {
      console.error('Error generating outline:', error);
      setError('Failed to generate outline. Please try again.');
      return [];
    } finally {
      setIsLoading(false);
    }
  };

  const generateBlog = async (topic: string, outline: string[]) => {
    try {
      setIsLoading(true);
      setError('');
      
      const text = await generateContent(generateFullBlogPrompt(topic, outline));
      return text;
    } catch (error) {
      console.error('Error generating blog:', error);
      setError('Failed to generate full blog post. Please try again.');
      return '';
    } finally {
      setIsLoading(false);
    }
  };

  const humanizeContent = async (content: string) => {
    try {
      setIsLoading(true);
      setError('');
      
      const text = await generateContent(generateHumanizedPrompt(content));
      return text;
    } catch (error) {
      console.error('Error humanizing content:', error);
      setError('Failed to humanize content. Please try again.');
      return '';
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    error,
    generateOutline,
    generateBlog,
    humanizeContent,
  };
};