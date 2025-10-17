import React, { useState, useEffect } from 'react';
import { Shield, Code2, ArrowRight, Check, Eye, X, Zap, Search, Megaphone } from 'lucide-react';

export default function WebAgencyLanding() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

      {/* Hero Section */}
      <section className="pt-40 pb-32 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-light mb-8 leading-tight tracking-tight">
            100% Hand-Coded
            <span className="block font-normal text-blue-600 mt-2">
              Websites for Small Business
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            No page builders. No WordPress. Just fast, secure, custom-coded websites that load in under 1 second. Entirely US-based team with direct owner support.
          </p>
          <button className="px-8 py-4 bg-slate-900 text-white hover:bg-slate-800 transition-colors text-sm font-medium tracking-wide">
GET A FREE QUOTE
          </button>
        </div>
      </section>

      {/* Performance Metrics */}
      <section className="py-32 px-8 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
              Numbers Don't Lie
            </h2>
            <p className="text-lg text-slate-600 font-light">
              Dramatic improvements in performance and reliability
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 mb-24">
            {/* Before */}
            <div>
              <div className="mb-8">
                <span className="text-xs font-medium text-red-600 tracking-wider">BEFORE</span>
                <h3 className="text-2xl font-light mt-2 text-slate-400">Typical Agency Site</h3>
              </div>
              
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between mb-3">
                    <span className="text-sm text-slate-600 font-light">Page Load Speed</span>
                    <span className="text-sm font-medium text-red-600">4.2s</span>
                  </div>
                  <div className="w-full h-px bg-slate-200">
                    <div className="h-full w-[42%] bg-red-400"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-3">
                    <span className="text-sm text-slate-600 font-light">PageSpeed Score</span>
                    <span className="text-sm font-medium text-orange-600">62/100</span>
                  </div>
                  <div className="w-full h-px bg-slate-200">
                    <div className="h-full w-[62%] bg-orange-400"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-3">
                    <span className="text-sm text-slate-600 font-light">Security Score</span>
                    <span className="text-sm font-medium text-orange-600">C</span>
                  </div>
                  <div className="w-full h-px bg-slate-200">
                    <div className="h-full w-[60%] bg-orange-400"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-3">
                    <span className="text-sm text-slate-600 font-light">Monthly Downtime</span>
                    <span className="text-sm font-medium text-red-600">~6 hours</span>
                  </div>
                  <div className="w-full h-px bg-slate-200">
                    <div className="h-full w-[75%] bg-red-400"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* After */}
            <div>
              <div className="mb-8">
                <span className="text-xs font-medium text-blue-600 tracking-wider">AFTER 9LINE.DEV</span>
                <h3 className="text-2xl font-light mt-2">Optimized & Maintained</h3>
              </div>
              
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between mb-3">
                    <span className="text-sm text-slate-900 font-medium">Page Load Speed</span>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium">0.8s</span>
                      <span className="text-xs text-green-600">+425%</span>
                    </div>
                  </div>
                  <div className="w-full h-px bg-slate-200">
                    <div className="h-full w-[92%] bg-slate-900"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-3">
                    <span className="text-sm text-slate-900 font-medium">PageSpeed Score</span>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium">98/100</span>
                      <span className="text-xs text-green-600">+58%</span>
                    </div>
                  </div>
                  <div className="w-full h-px bg-slate-200">
                    <div className="h-full w-[98%] bg-slate-900"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-3">
                    <span className="text-sm text-slate-900 font-medium">Security Score</span>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium">A+</span>
                      <span className="text-xs text-green-600">Perfect</span>
                    </div>
                  </div>
                  <div className="w-full h-px bg-slate-200">
                    <div className="h-full w-full bg-slate-900"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-3">
                    <span className="text-sm text-slate-900 font-medium">Monthly Downtime</span>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium">~4 min</span>
                      <span className="text-xs text-green-600">99.9%</span>
                    </div>
                  </div>
                  <div className="w-full h-px bg-slate-200">
                    <div className="h-full w-[99.9%] bg-slate-900"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Impact Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '425%', label: 'Faster' },
              { value: '67%', label: 'More Conversions' },
              { value: '89%', label: 'Better SEO' },
              { value: '99.9%', label: 'Uptime' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl font-light mb-2">{stat.value}</div>
                <div className="text-sm text-slate-600 font-light">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Old vs New Way */}
      <section className="py-32 px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
              Page Builders vs Hand-Coded
            </h2>
            <p className="text-lg text-slate-600 font-light">
              We believe small businesses deserve better. Just because you're small, doesn't mean your site needs to be.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-24">
            {/* Old Way */}
            <div>
              <h3 className="text-sm font-medium text-slate-400 mb-8 tracking-wider">PAGE BUILDERS & WORDPRESS</h3>
              <ul className="space-y-6">
                {[
                  'Slow loading times (3-5+ seconds)',
                  'Security vulnerabilities from plugins',
                  'Bloated code and unnecessary features',
                  'Ongoing maintenance headaches',
                  'Limited customization options',
                  'Hidden costs and license fees'
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4 text-slate-600 font-light">
                    <X className="w-5 h-5 flex-shrink-0 mt-0.5 text-slate-300" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* New Way */}
            <div>
              <h3 className="text-sm font-medium text-slate-900 mb-8 tracking-wider">9LINE.DEV HAND-CODED</h3>
              <ul className="space-y-6">
                {[
                  'Lightning fast (under 1 second)',
                  '100% secure static HTML/CSS',
                  'Clean, optimized code',
                  'Entirely US-based team support',
                  'Unlimited customization',
                  'Transparent, fixed pricing'
                ].map((item) => (
                  <li key={item} className="flex items-start gap-4 text-slate-900">
                    <Check className="w-5 h-5 flex-shrink-0 mt-0.5 text-slate-900" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-32 px-8 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
              Our Services
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-16">
            {[
              {
                icon: Code2,
                title: 'Web Design',
                description: '100% hand-coded websites. Mobile-first, fully responsive design optimized for page speed with load times under 1 second.'
              },
              {
                icon: Search,
                title: 'SEO Services',
                description: 'In-house local SEO specialist with monthly reporting and transparent approach to improve your search rankings.'
              },
              {
                icon: Megaphone,
                title: 'Google PPC Ads',
                description: 'Expert campaign management focused on maximizing ROI for your advertising spend with data-driven optimization.'
              }
            ].map((pillar, idx) => (
              <div key={idx}>
                <pillar.icon className="w-8 h-8 text-slate-900 mb-6" strokeWidth={1.5} />
                <h3 className="text-2xl font-light mb-4">{pillar.title}</h3>
                <p className="text-slate-600 font-light leading-relaxed">{pillar.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-32 px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
              Transparent Pricing
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Monthly Plan */}
            <div className="border border-slate-200 p-10">
              <div className="mb-12">
                <h3 className="text-sm font-medium tracking-wider mb-4">MONTHLY PLAN</h3>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-5xl font-light">$175</span>
                  <span className="text-slate-500 font-light">/mo</span>
                </div>
              </div>

              <ul className="space-y-4 mb-12">
                {[
                  'Includes hosting',
                  'Unlimited edits',
                  '24/7 support',
                  'Lifetime updates',
                  'Mobile-first design',
                  'Load times under 1 second'
                ].map((feature) => (
                  <li key={feature} className="text-sm text-slate-600 font-light">
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full py-3 border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white transition-colors text-sm font-medium tracking-wide">
                GET STARTED
              </button>
            </div>

            {/* Lump Sum */}
            <div className="border-2 border-slate-900 p-10 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-4 py-1 text-xs font-medium tracking-wider">
                POPULAR
              </div>
              <div className="mb-12">
                <h3 className="text-sm font-medium tracking-wider mb-4">LUMP SUM</h3>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-5xl font-light">$3,800</span>
                  <span className="text-slate-500 font-light">+ $25/mo hosting</span>
                </div>
              </div>

              <ul className="space-y-4 mb-12">
                {[
                  'Complete design & development',
                  'Unlimited revisions',
                  'SEO optimization',
                  'Google Analytics setup',
                  'Money-back guarantee',
                  'Additional pages: $150 each'
                ].map((feature) => (
                  <li key={feature} className="text-sm font-medium">
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full py-3 bg-slate-900 text-white hover:bg-slate-800 transition-colors text-sm font-medium tracking-wide">
                GET STARTED
              </button>
            </div>

            {/* Ecommerce */}
            <div className="border border-slate-200 p-10">
              <div className="mb-12">
                <h3 className="text-sm font-medium tracking-wider mb-4">ECOMMERCE</h3>
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-5xl font-light">$8,000</span>
                  <span className="text-slate-500 font-light">starting</span>
                </div>
              </div>

              <ul className="space-y-4 mb-12">
                {[
                  'Shopify store setup',
                  'Custom design',
                  'Payment integration',
                  'Shipping configuration',
                  'CMS tutorial',
                  'Inventory management'
                ].map((feature) => (
                  <li key={feature} className="text-sm text-slate-600 font-light">
                    {feature}
                  </li>
                ))}
              </ul>

              <button className="w-full py-3 border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white transition-colors text-sm font-medium tracking-wide">
                GET QUOTE
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-32 px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
              Bespoke Process
            </h2>
          </div>

          <div className="space-y-16">
            {[
              {
                step: '01',
                title: 'Discovery & Audit',
                description: 'We analyze your current site, competitors, and goals. Every project starts with understanding your unique challenges.'
              },
              {
                step: '02',
                title: 'Custom Strategy',
                description: 'Based on our findings, we create a tailored roadmap for design, development, and ongoing optimization.'
              },
              {
                step: '03',
                title: 'Build & Deploy',
                description: 'Hand-coded development with real-time collaboration. We build fast, secure sites optimized for your audience.'
              },
              {
                step: '04',
                title: 'Monitor & Evolve',
                description: 'Launch is just the beginning. We continuously monitor, audit, and refine based on real data.'
              }
            ].map((item) => (
              <div key={item.step} className="grid md:grid-cols-12 gap-8">
                <div className="md:col-span-2">
                  <span className="text-6xl font-light text-slate-200">{item.step}</span>
                </div>
                <div className="md:col-span-10">
                  <h3 className="text-2xl font-light mb-4">{item.title}</h3>
                  <p className="text-slate-600 font-light leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-32 px-8 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
              Industries We Serve
            </h2>
            <p className="text-lg text-slate-600 font-light">
              Trusted by small businesses across America and Canada
            </p>
          </div>
          
          <div className="grid md:grid-cols-5 gap-8 text-center">
            {[
              'Home Services Contractors',
              'Restaurants',
              'Consulting Agencies', 
              'Medical Practices',
              'Accountants'
            ].map((industry, idx) => (
              <div key={idx} className="p-6">
                <h3 className="text-lg font-medium mb-2">{industry}</h3>
                <p className="text-sm text-slate-600 font-light">Custom solutions for your industry</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
              What Our Clients Say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-16">
            {[
              {
                quote: "Finally, a website that loads instantly and actually converts visitors into customers.",
                author: "Sarah Johnson",
                role: "Restaurant Owner"
              },
              {
                quote: "The direct owner support makes all the difference. No more dealing with support tickets.",
                author: "Michael Chen",
                role: "Contractor"
              },
              {
                quote: "Hand-coded means no security vulnerabilities. Our site has been rock solid.",
                author: "Jennifer Williams",
                role: "Medical Practice"
              }
            ].map((testimonial, idx) => (
              <div key={idx}>
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
      </section>

      {/* Final CTA */}
      <section className="py-32 px-8 bg-slate-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-tight">
            Ready for a website that actually works?
          </h2>
          <p className="text-lg text-slate-400 mb-12 font-light leading-relaxed">
            Get a free quote today. No page builders, no WordPress - just fast, secure, hand-coded websites that convert visitors into customers.
          </p>
          <button className="px-10 py-4 bg-white text-slate-900 hover:bg-slate-100 transition-colors text-sm font-medium tracking-wide">
            GET YOUR FREE QUOTE
          </button>
          <p className="text-sm text-slate-500 mt-8 font-light">
            Money-back guarantee • Serving US & Canada
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
    </div>
  );
}