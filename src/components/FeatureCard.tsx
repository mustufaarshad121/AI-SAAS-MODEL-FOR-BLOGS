import React from 'react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  gradient: string;
}

export function FeatureCard({ icon, title, description, gradient }: FeatureCardProps) {
  return (
    <div className="glass-card p-6 rounded-xl group hover:scale-105 transition-all duration-300">
      <div className={`mb-4 bg-gradient-to-br ${gradient} p-3 rounded-lg w-fit group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400 leading-relaxed">{description}</p>
    </div>
  );
}