import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = 'AIzaSyCuZ2smT08aNjjRshbwmVfaWvsK2NEwcJU';

export const genAI = new GoogleGenerativeAI(API_KEY);

export const generateOutlinePrompt = (topic: string) => {
  return `Create a detailed outline for a blog post about "${topic}". 
  Include:
  - An engaging introduction point
  - 4-6 main sections with key points
  - A conclusion point
  
  Format as a bullet-point list. Keep each point concise but descriptive.`;
};

export const generateFullBlogPrompt = (topic: string, outline: string[]) => {
  return `Write a comprehensive, engaging, and SEO-optimized blog post about "${topic}" following this outline:

  ${outline.join('\n')}

  Requirements:
  - Expand each outline point into detailed paragraphs
  - Use a conversational yet professional tone
  - Include relevant examples and explanations
  - Ensure smooth transitions between sections
  - Aim for at least 1000 words
  - Format with proper paragraphs and spacing`;
};

export const generateHumanizedPrompt = (content: string) => {
  return `Rewrite the following blog post to make it more human-like and less detectable by AI content detectors. 
  
  Original content:
  ${content}
  
  Requirements:
  - Maintain the same key information and message
  - Add more natural language patterns and conversational elements
  - Include occasional informal expressions and colloquialisms
  - Vary sentence structure and length
  - Add personal anecdotes or hypothetical examples where appropriate
  - Use more active voice and first-person perspective occasionally
  - Maintain proper grammar but allow for natural language flow
  - Keep the content engaging and authentic
  - Avoid overly perfect structure or repetitive patterns`;
};