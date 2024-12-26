import React from 'react';
import { Check, Zap, Rocket, Crown } from 'lucide-react';
import { Link } from 'react-router-dom';

const plans = [
  {
    name: 'Free',
    price: '0',
    icon: <Zap className="w-6 h-6 text-blue-400" />,
    description: 'Perfect for trying out our AI writer',
    features: [
      '5 AI-generated articles/month',
      'Basic SEO optimization',
      'Export to WordPress',
      'Standard support',
    ],
    buttonText: 'Start Free',
    popular: false,
    gradient: 'from-blue-500 to-cyan-500'
  },
  {
    name: 'Pro',
    price: '19',
    icon: <Rocket className="w-6 h-6 text-purple-400" />,
    description: 'Best for content creators and bloggers',
    features: [
      '50 AI-generated articles/month',
      'Advanced SEO optimization',
      'AI content humanization',
      'Priority support',
      'WordPress & Medium integration',
      'Plagiarism checker',
    ],
    buttonText: 'Get Pro',
    popular: true,
    gradient: 'from-purple-500 to-pink-500'
  },
  {
    name: 'Business',
    price: '49',
    icon: <Crown className="w-6 h-6 text-amber-400" />,
    description: 'For teams and businesses',
    features: [
      'Unlimited AI-generated articles',
      'Team collaboration',
      'Custom templates',
      'API access',
      'Advanced analytics',
      'Dedicated support',
      'White-label exports',
      'Custom integrations'
    ],
    buttonText: 'Contact Sales',
    popular: false,
    gradient: 'from-amber-500 to-orange-500'
  }
];

export function Pricing() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Choose the perfect plan for your content creation needs. 
            All plans include our core AI writing features.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative glass-card rounded-2xl p-8 ${
                plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{plan.name}</h3>
                  <p className="text-gray-400 text-sm">{plan.description}</p>
                </div>
                {plan.icon}
              </div>

              <div className="mb-6">
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-white">${plan.price}</span>
                  <span className="text-gray-400 ml-2">/month</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                to="/dashboard"
                className={`block text-center py-3 px-6 rounded-xl font-medium transition-all duration-300
                  ${plan.popular
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600'
                    : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
              >
                {plan.buttonText}
              </Link>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-24 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Can I switch plans anytime?
              </h3>
              <p className="text-gray-400">
                Yes, you can upgrade, downgrade, or cancel your plan at any time. Changes take effect at the start of the next billing cycle.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                What payment methods do you accept?
              </h3>
              <p className="text-gray-400">
                We accept all major credit cards, PayPal, and cryptocurrency payments through our secure payment system.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-2">
                Do you offer refunds?
              </h3>
              <p className="text-gray-400">
                Yes, we offer a 14-day money-back guarantee if you're not satisfied with our service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}