import React from 'react';
import { Rocket, Bot, Globe2, FileText, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FeatureCard } from '../components/FeatureCard';

export function Home() {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 pt-20 pb-32">
        {/* Hero Section */}
        <div className="text-center relative mb-20">
          <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 via-transparent to-transparent blur-3xl -z-10" />
          
          <div className="inline-flex items-center bg-white/5 px-4 py-2 rounded-full mb-6 backdrop-blur-lg border border-white/10">
            <Sparkles className="h-5 w-5 text-yellow-500 mr-2 animate-pulse" />
            <span className="text-yellow-500 font-medium">Get Your Free Access Today!</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            AI Writing Tool for{' '}
            <span className="gradient-text font-extrabold">
              Generating 1000+ Articles
            </span>
          </h1>

          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Create SEO-optimized content in seconds with our advanced AI technology.
            Available in 48 languages, with automatic WordPress integration and AI-generated images.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <Link 
              to="/dashboard" 
              className="btn-primary flex items-center group"
            >
              Get Started - It's Free
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              to="/how-it-works"
              className="btn-secondary"
            >
              See How It Works
            </Link>
          </div>

          <p className="text-gray-400">No credit card required • Cancel anytime</p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-red-500/10 blur-3xl -z-10" />
          
          <FeatureCard 
            icon={<Bot className="h-8 w-8 text-purple-400" />}
            title="AI-Powered Writing"
            description="Create high-quality, unique content optimized for SEO in seconds"
            gradient="from-purple-500 to-pink-500"
          />
          <FeatureCard 
            icon={<Globe2 className="h-8 w-8 text-pink-400" />}
            title="48 Languages"
            description="Reach a global audience with content in multiple languages"
            gradient="from-pink-500 to-red-500"
          />
          <FeatureCard 
            icon={<FileText className="h-8 w-8 text-red-400" />}
            title="WordPress Integration"
            description="Auto-post content with AI-generated images to your site"
            gradient="from-red-500 to-orange-500"
          />
        </div>
      </div>
    </div>
  );
}