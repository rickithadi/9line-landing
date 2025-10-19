import { ArrowRight, ChevronLeft, ChevronRight, Code2, Eye, Shield } from 'lucide-react';
import React, { useRef } from 'react';

export default function WebAgencyLanding() {
  const testimonialsRef = useRef(null);
  const pricingRef = useRef(null);

  const scroll = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = ref.current.offsetWidth * 0.8;
      ref.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-8 py-6 flex justify-between items-center">
          <div className="text-2xl font-light tracking-tight">
            <span className="font-semibold text-slate-900">9line</span>
            <span className="text-slate-400">.dev</span>
          </div>
          <button className="px-6 py-2 text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors">
            Get Started →
          </button>
        </div>
      </nav>

      {/* Hero */}
      <section className="pt-40 pb-32 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-light mb-8 leading-tight tracking-tight">
            Your website,
            <span className="block font-normal text-blue-600 mt-2">
              Always Ready.
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            We monitor, audit, and evolve your website continuously. Stay ahead of competitors with the fastest, most secure site in your market.
          </p>
          <button className="px-8 py-4 bg-slate-900 text-white hover:bg-slate-800 transition-colors text-sm font-medium tracking-wide">
            SEE WHERE YOU RANK
          </button>
        </div>
      </section>

      {/* Market Dominance */}
      <section className="py-32 px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4 tracking-tight">Market Dominance</h2>
            <p className="text-slate-600 font-light">How we ensure you're #1 in your market</p>
          </div>

          {/* Monitor, Audit, Build */}
          <div className="grid md:grid-cols-3 gap-12 mb-24">
            {[
              {
                icon: Eye,
                title: 'Monitor',
                description: 'Real-time tracking of your site and competitors.',
                detail: 'Track performance 24/7, identify opportunities as they emerge.'
              },
              {
                icon: Shield,
                title: 'Audit',
                description: 'Competitive intelligence on performance, SEO, and content.',
                detail: 'Monthly deep dives reveal where you can gain ground.'
              },
              {
                icon: Code2,
                title: 'Build',
                description: 'Bespoke development with continuous improvements.',
                detail: 'Deploy optimizations that widen your competitive advantage.'
              }
            ].map((pillar, idx) => (
              <div key={idx} className="border border-slate-200 bg-white p-8">
                <pillar.icon className="w-8 h-8 text-slate-900 mb-6" strokeWidth={1.5} />
                <h3 className="text-2xl font-light mb-3">{pillar.title}</h3>
                <p className="text-slate-600 font-light leading-relaxed mb-4">{pillar.description}</p>
                <p className="text-sm text-slate-500 font-light leading-relaxed">{pillar.detail}</p>
              </div>
            ))}
          </div>

          {/* How You Rank */}
          <div className="mb-24">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-light mb-3 tracking-tight">How You Rank</h3>
              <p className="text-slate-600 font-light">Your performance across all key metrics</p>
            </div>

            <div className="border border-slate-200 bg-white p-10 overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-4 px-4 text-sm font-medium"></th>
                    <th className="py-4 px-4 text-xs font-medium text-slate-600">Speed</th>
                    <th className="py-4 px-4 text-xs font-medium text-slate-600">Mobile</th>
                    <th className="py-4 px-4 text-xs font-medium text-slate-600">Security</th>
                    <th className="py-4 px-4 text-xs font-medium text-slate-600">SEO</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: 'Your Site', scores: ['excellent', 'excellent', 'excellent', 'excellent'] },
                    { name: 'Competitor A', scores: ['good', 'excellent', 'poor', 'good'] },
                    { name: 'Competitor B', scores: ['poor', 'good', 'poor', 'poor'] },
                    { name: 'Competitor C', scores: ['poor', 'poor', 'good', 'poor'] }
                  ].map((row, idx) => (
                    <tr key={idx} className="border-b border-slate-100">
                      <td className={`py-4 px-4 text-sm ${idx === 0 ? 'font-medium' : 'font-light text-slate-600'}`}>
                        {row.name}
                      </td>
                      {row.scores.map((score, scoreIdx) => (
                        <td key={scoreIdx} className="py-4 px-4 text-center">
                          <div className={`w-8 h-8 rounded-full mx-auto ${score === 'excellent' ? 'bg-slate-900' :
                              score === 'good' ? 'bg-slate-400' :
                                'bg-slate-200'
                            }`}></div>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="flex justify-center gap-6 mt-8 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-slate-900"></div>
                  <span className="font-light">Excellent</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-slate-400"></div>
                  <span className="font-light">Good</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded-full bg-slate-200"></div>
                  <span className="font-light">Poor</span>
                </div>
              </div>
            </div>
          </div>

          {/* How We Keep You Ahead */}
          <div>
            <div className="text-center mb-16">
              <h3 className="text-2xl font-light mb-3 tracking-tight">The Transformation</h3>
              <p className="text-slate-600 font-light">Before and after continuous optimization</p>
            </div>

            {/* Before/After Comparison */}
            <div className="grid md:grid-cols-2 gap-12 mb-16">
              {/* BEFORE */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium tracking-wider text-slate-400">BEFORE</span>
                  <span className="text-xs text-slate-400 font-light">Typical Website</span>
                </div>

                {/* Browser Preview */}
                <div className="border border-slate-200 rounded-lg overflow-hidden">
                  {/* Chrome Bar */}
                  <div className="bg-slate-100 px-4 py-2 flex items-center gap-2 border-b border-slate-200">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-slate-300"></div>
                    </div>
                    <div className="flex-1 h-5 bg-white rounded-sm border border-slate-200"></div>
                  </div>

                  {/* Content */}
                  <div className="aspect-[16/10] bg-white p-6 relative">
                    {/* Cluttered header */}
                    <div className="h-12 bg-gradient-to-r from-slate-200 to-slate-300 mb-4 flex items-center justify-between px-4">
                      <div className="w-20 h-4 bg-slate-400"></div>
                      <div className="flex gap-2">
                        <div className="w-12 h-3 bg-slate-400"></div>
                        <div className="w-12 h-3 bg-slate-400"></div>
                        <div className="w-12 h-3 bg-slate-400"></div>
                      </div>
                    </div>

                    {/* Poor layout */}
                    <div className="space-y-4">
                      <div className="grid grid-cols-3 gap-2">
                        <div className="h-24 bg-slate-200"></div>
                        <div className="h-24 bg-slate-200"></div>
                        <div className="h-24 bg-slate-200"></div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-3 bg-slate-100 w-full"></div>
                        <div className="h-3 bg-slate-100 w-5/6"></div>
                        <div className="h-3 bg-slate-100 w-4/6"></div>
                      </div>
                    </div>

                    {/* Slow loading indicator */}
                    <div className="absolute bottom-4 right-4">
                      <div className="flex items-center gap-2 text-xs text-slate-400">
                        <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
                        <span>Loading...</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Metrics */}
                <div className="space-y-4">
                  {[
                    { label: 'Load Time', value: '4.2s', bar: 42 },
                    { label: 'Mobile Score', value: '62/100', bar: 62 },
                    { label: 'Security', value: 'C Grade', bar: 60 },
                    { label: 'Market Position', value: '#7', bar: 30 }
                  ].map((metric, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-2 text-xs">
                        <span className="text-slate-500 font-light">{metric.label}</span>
                        <span className="text-slate-900">{metric.value}</span>
                      </div>
                      <div className="w-full h-px bg-slate-100">
                        <div className="h-full bg-slate-300" style={{ width: `${metric.bar}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* AFTER */}
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium tracking-wider text-slate-900">AFTER 9LINE</span>
                  <span className="text-xs text-slate-500 font-light">Optimized & Maintained</span>
                </div>

                {/* Browser Preview */}
                <div className="border-2 border-slate-900 rounded-lg overflow-hidden shadow-lg">
                  {/* Chrome Bar */}
                  <div className="bg-white px-4 py-2 flex items-center gap-2 border-b border-slate-200">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                    </div>
                    <div className="flex-1 h-5 bg-slate-50 rounded-sm border border-slate-200 flex items-center px-2">
                      <div className="w-3 h-3 text-green-500">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="aspect-[16/10] bg-white p-6 relative">
                    {/* Clean header */}
                    <div className="h-12 mb-6 flex items-center justify-between">
                      <div className="w-16 h-5 bg-slate-900 rounded"></div>
                      <div className="flex gap-4">
                        <div className="w-10 h-3 bg-slate-200 rounded"></div>
                        <div className="w-10 h-3 bg-slate-200 rounded"></div>
                        <div className="w-10 h-3 bg-slate-200 rounded"></div>
                      </div>
                    </div>

                    {/* Premium layout */}
                    <div className="space-y-6">
                      <div className="h-28 bg-gradient-to-br from-slate-50 to-slate-100 rounded flex items-center justify-center">
                        <div className="text-center space-y-3">
                          <div className="w-32 h-4 bg-slate-900 rounded mx-auto"></div>
                          <div className="w-48 h-2 bg-slate-300 rounded mx-auto"></div>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-3">
                        <div className="h-16 border border-slate-200 rounded"></div>
                        <div className="h-16 border border-slate-200 rounded"></div>
                        <div className="h-16 border border-slate-200 rounded"></div>
                      </div>
                    </div>

                    {/* Fast loading indicator */}
                    <div className="absolute bottom-4 right-4">
                      <div className="flex items-center gap-2 text-xs text-green-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span>Ready</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Metrics */}
                <div className="space-y-4">
                  {[
                    { label: 'Load Time', value: '0.8s', bar: 92, change: '+425%' },
                    { label: 'Mobile Score', value: '98/100', bar: 98, change: '+58%' },
                    { label: 'Security', value: 'A+ Grade', bar: 100, change: 'Perfect' },
                    { label: 'Market Position', value: '#1', bar: 100, change: '★' }
                  ].map((metric, idx) => (
                    <div key={idx}>
                      <div className="flex justify-between mb-2 text-xs">
                        <span className="text-slate-600 font-light">{metric.label}</span>
                        <div className="flex items-center gap-2">
                          <span className="text-slate-900 font-medium">{metric.value}</span>
                          <span className="text-green-600 text-[10px]">{metric.change}</span>
                        </div>
                      </div>
                      <div className="w-full h-px bg-slate-100">
                        <div className="h-full bg-slate-900" style={{ width: `${metric.bar}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Impact Summary */}
            <div className="border-t border-slate-200 pt-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                {[
                  { value: '425%', label: 'Faster' },
                  { value: '67%', label: 'More Conversions' },
                  { value: '89%', label: 'Better SEO' },
                  { value: '∞', label: 'Staying Power' }
                ].map((stat, idx) => (
                  <div key={idx}>
                    <div className="text-4xl font-light text-slate-900 mb-2">{stat.value}</div>
                    <div className="text-xs text-slate-500 font-light tracking-wide">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-32 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4 tracking-tight">Your Dashboard</h2>
            <p className="text-slate-600 font-light">Live competitive intelligence</p>
          </div>

          <div className="border-2 border-slate-300 bg-white">
            <div className="border-b border-slate-200 px-8 py-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium mb-1">9line.dev Dashboard</div>
                  <div className="text-xs text-slate-500 font-light">Healthcare · Austin, TX</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-xs font-light text-slate-600">Live</span>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-4 gap-4 mb-8">
                {[
                  { label: 'Speed', value: '#1', detail: '0.8s' },
                  { label: 'Mobile', value: '#1', detail: '99/100' },
                  { label: 'Security', value: '#1', detail: 'A+' },
                  { label: 'SEO', value: '#2', detail: '92/100' }
                ].map((metric, idx) => (
                  <div key={idx} className="border border-slate-200 p-4 text-center">
                    <div className="text-xs text-slate-500 mb-2">{metric.label}</div>
                    <div className="text-2xl font-light mb-1">{metric.value}</div>
                    <div className="text-xs text-slate-400">{metric.detail}</div>
                  </div>
                ))}
              </div>

              <div className="border-t border-slate-200 pt-6">
                <div className="text-xs font-medium text-slate-400 mb-4 tracking-wider">THIS WEEK</div>
                <div className="grid grid-cols-3 gap-4 text-sm font-light text-slate-600">
                  <div>Outperformed 3 competitors</div>
                  <div>Zero downtime</div>
                  <div>+5 points mobile score</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Swipeable Pricing */}
      <section className="py-32 px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4 tracking-tight">Pricing</h2>
            <p className="text-slate-600 font-light">Choose your market position</p>
          </div>

          <div className="relative">
            <button
              onClick={() => scroll(pricingRef, 'left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center hover:bg-slate-50 transition-colors md:hidden"
            >
              <ChevronLeft className="w-5 h-5 text-slate-600" />
            </button>

            <div
              ref={pricingRef}
              className="overflow-x-auto scrollbar-hide snap-x snap-mandatory md:overflow-visible"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <div className="flex md:grid md:grid-cols-3 gap-8 pb-4">
                {[
                  {
                    name: 'STARTER',
                    tagline: 'Top 5 in your market',
                    price: '$299',
                    features: ['5 pages', 'Monthly reports', 'Quarterly audits', '48hr response'],
                    featured: false
                  },
                  {
                    name: 'GROWTH',
                    tagline: 'Top 3 in your market',
                    price: '$599',
                    features: ['15 pages', 'Weekly reports', 'Monthly audits', 'Unlimited updates', '24hr response'],
                    featured: true
                  },
                  {
                    name: 'ENTERPRISE',
                    tagline: '#1 guaranteed',
                    price: '$1,299',
                    features: ['Unlimited pages', 'Real-time alerts', 'Weekly audits', 'Dedicated manager', '4hr response'],
                    featured: false
                  }
                ].map((plan, idx) => (
                  <div
                    key={idx}
                    className={`flex-shrink-0 w-80 md:w-auto snap-start p-10 ${plan.featured ? 'border-2 border-slate-900 relative' : 'border border-slate-200'
                      }`}
                  >
                    {plan.featured && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-4 py-1 text-xs font-medium tracking-wider">
                        POPULAR
                      </div>
                    )}
                    <div className="mb-12">
                      <h3 className="text-sm font-medium tracking-wider mb-2">{plan.name}</h3>
                      <p className={`text-xs ${plan.featured ? 'text-slate-900 font-medium' : 'text-slate-500 font-light'} mb-4`}>
                        {plan.tagline}
                      </p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-5xl font-light">{plan.price}</span>
                        <span className="text-slate-500 font-light">/mo</span>
                      </div>
                    </div>

                    <ul className="space-y-4 mb-12">
                      {plan.features.map((feature) => (
                        <li key={feature} className={`text-sm ${plan.featured ? 'font-medium' : 'text-slate-600 font-light'}`}>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <button className={`w-full py-3 text-sm font-medium tracking-wide transition-colors ${plan.featured
                        ? 'bg-slate-900 text-white hover:bg-slate-800'
                        : 'border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white'
                      }`}>
                      GET STARTED
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => scroll(pricingRef, 'right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center hover:bg-slate-50 transition-colors md:hidden"
            >
              <ChevronRight className="w-5 h-5 text-slate-600" />
            </button>
          </div>
        </div>
      </section>

      {/* Swipeable Testimonials */}
      <section className="py-32 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4 tracking-tight">Client Results</h2>
          </div>

          <div className="relative">
            <button
              onClick={() => scroll(testimonialsRef, 'left')}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center hover:bg-slate-50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5 text-slate-600" />
            </button>

            <div
              ref={testimonialsRef}
              className="overflow-x-auto scrollbar-hide snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <div className="flex gap-8 pb-4">
                {[
                  {
                    quote: "From #7 to #1 in six months. We've stayed #1 for eight months running.",
                    author: "Sarah Johnson",
                    role: "Partner, Seattle Law Firm"
                  },
                  {
                    quote: "Monthly reports show exactly where we stand. It's like having a secret weapon.",
                    author: "Michael Chen",
                    role: "Founder, GrowthLabs"
                  },
                  {
                    quote: "Now we're the most secure healthcare site in our region.",
                    author: "Jennifer Williams",
                    role: "Marketing Director"
                  }
                ].map((testimonial, idx) => (
                  <div key={idx} className="flex-shrink-0 w-96 snap-start border border-slate-200 bg-white p-10">
                    <p className="text-slate-600 font-light mb-8 leading-relaxed italic">
                      "{testimonial.quote}"
                    </p>
                    <div>
                      <div className="font-medium text-sm">{testimonial.author}</div>
                      <div className="text-xs text-slate-500 font-light mt-1">{testimonial.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => scroll(testimonialsRef, 'right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center hover:bg-slate-50 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-slate-600" />
            </button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-8 bg-slate-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-tight">
            Claim Your Position
          </h2>
          <p className="text-lg text-slate-400 mb-12 font-light leading-relaxed">
            Free competitive audit. See where you stand and what it takes to be #1.
          </p>
          <button className="px-10 py-4 bg-white text-slate-900 hover:bg-slate-100 transition-colors text-sm font-medium tracking-wide">
            GET YOUR FREE AUDIT
          </button>
          <p className="text-sm text-slate-500 mt-8 font-light">
            Results in 24 hours · No commitment
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 py-12 px-8">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-slate-500 font-light">
            © 2025 <span className="text-slate-900">9line.dev</span>
          </div>
          <div className="flex gap-8 text-sm text-slate-500 font-light">
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Terms</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Contact</a>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}
