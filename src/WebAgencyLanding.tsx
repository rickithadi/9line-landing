import { Code2, Check, X, Search, Megaphone } from 'lucide-react';

export default function WebAgencyLanding() {

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
            Your website,
            <span className="block font-normal text-blue-600 mt-2">
              Always Ready.
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            We monitor, audit, and evolve your website continuously—keeping your digital presence secure, fast, and perfectly aligned with your goals.
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
              Performance Audit Results
            </h2>
            <p className="text-lg text-slate-600 font-light">
              Real Core Web Vitals improvements measured by Google PageSpeed Insights
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 mb-24">
            {/* Before */}
            <div className="transform transition-all duration-300 hover:scale-105 hover:shadow-lg p-6 rounded-lg bg-white border border-slate-100">
              <div className="mb-8">
                <span className="text-xs font-medium text-red-600 tracking-wider">BEFORE OPTIMIZATION</span>
                <h3 className="text-2xl font-light mt-2 text-slate-400">WordPress/Page Builder Site</h3>
              </div>
              
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between mb-3">
                    <span className="text-sm text-slate-600 font-light">PageSpeed Mobile</span>
                    <span className="text-sm font-medium text-red-600">23/100</span>
                  </div>
                  <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full w-[23%] bg-red-400 rounded-full transition-all duration-1000 ease-out"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-3">
                    <span className="text-sm text-slate-600 font-light">PageSpeed Desktop</span>
                    <span className="text-sm font-medium text-orange-600">45/100</span>
                  </div>
                  <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full w-[45%] bg-orange-400 rounded-full transition-all duration-1000 ease-out"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-3">
                    <span className="text-sm text-slate-600 font-light">LCP (Largest Contentful Paint)</span>
                    <span className="text-sm font-medium text-red-600">4.2s</span>
                  </div>
                  <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full w-[15%] bg-red-400 rounded-full transition-all duration-1000 ease-out"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-3">
                    <span className="text-sm text-slate-600 font-light">INP (Interaction to Next Paint)</span>
                    <span className="text-sm font-medium text-red-600">340ms</span>
                  </div>
                  <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full w-[25%] bg-red-400 rounded-full transition-all duration-1000 ease-out"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-3">
                    <span className="text-sm text-slate-600 font-light">CLS (Cumulative Layout Shift)</span>
                    <span className="text-sm font-medium text-orange-600">0.25</span>
                  </div>
                  <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full w-[30%] bg-orange-400 rounded-full transition-all duration-1000 ease-out"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-3">
                    <span className="text-sm text-slate-600 font-light">GTmetrix Grade</span>
                    <span className="text-sm font-medium text-red-600">F (8.3s load)</span>
                  </div>
                  <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full w-[20%] bg-red-400 rounded-full transition-all duration-1000 ease-out"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* After */}
            <div className="transform transition-all duration-300 hover:scale-105 hover:shadow-lg p-6 rounded-lg bg-white border border-slate-100">
              <div className="mb-8">
                <span className="text-xs font-medium text-blue-600 tracking-wider">AFTER 9LINE.DEV</span>
                <h3 className="text-2xl font-light mt-2">Bespoke & Optimized</h3>
              </div>
              
              <div className="space-y-8">
                <div>
                  <div className="flex justify-between mb-3">
                    <span className="text-sm text-slate-900 font-medium">PageSpeed Mobile</span>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium">96/100</span>
                      <span className="text-xs text-green-600">+317%</span>
                    </div>
                  </div>
                  <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full w-[96%] bg-slate-900 rounded-full transition-all duration-1000 ease-out delay-300"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-3">
                    <span className="text-sm text-slate-900 font-medium">PageSpeed Desktop</span>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium">98/100</span>
                      <span className="text-xs text-green-600">+118%</span>
                    </div>
                  </div>
                  <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full w-[98%] bg-slate-900 rounded-full transition-all duration-1000 ease-out delay-300"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-3">
                    <span className="text-sm text-slate-900 font-medium">LCP (Largest Contentful Paint)</span>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium">0.8s</span>
                      <span className="text-xs text-green-600">+425%</span>
                    </div>
                  </div>
                  <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full w-[95%] bg-slate-900 rounded-full transition-all duration-1000 ease-out delay-300"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-3">
                    <span className="text-sm text-slate-900 font-medium">INP (Interaction to Next Paint)</span>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium">85ms</span>
                      <span className="text-xs text-green-600">+300%</span>
                    </div>
                  </div>
                  <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full w-[92%] bg-slate-900 rounded-full transition-all duration-1000 ease-out delay-300"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-3">
                    <span className="text-sm text-slate-900 font-medium">CLS (Cumulative Layout Shift)</span>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium">0.05</span>
                      <span className="text-xs text-green-600">+400%</span>
                    </div>
                  </div>
                  <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full w-[94%] bg-slate-900 rounded-full transition-all duration-1000 ease-out delay-300"></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-3">
                    <span className="text-sm text-slate-900 font-medium">GTmetrix Grade</span>
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-medium">A (1.1s load)</span>
                      <span className="text-xs text-green-600">+654%</span>
                    </div>
                  </div>
                  <div className="w-full h-2 bg-slate-200 rounded-full overflow-hidden">
                    <div className="h-full w-[97%] bg-slate-900 rounded-full transition-all duration-1000 ease-out delay-300"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Impact Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '98%', label: 'Pass Core Web Vitals' },
              { value: '67%', label: 'More Conversions' },
              { value: '89%', label: 'First Page Rankings' },
              { value: '52%', label: 'Lower Bounce Rate' }
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl font-light mb-2">{stat.value}</div>
                <div className="text-sm text-slate-600 font-light">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Methodology Section */}
          <div className="mt-32 text-center">
            <h3 className="text-2xl font-light mb-8 tracking-tight">Our Testing Methodology</h3>
            <div className="grid md:grid-cols-3 gap-12 max-w-4xl mx-auto">
              <div>
                <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-medium">1</span>
                </div>
                <h4 className="font-medium mb-2">Baseline Audit</h4>
                <p className="text-sm text-slate-600 font-light">Complete PageSpeed Insights analysis of existing site across mobile and desktop</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-medium">2</span>
                </div>
                <h4 className="font-medium mb-2">Bespoke Optimization</h4>
                <p className="text-sm text-slate-600 font-light">Custom development focusing on Core Web Vitals and performance best practices</p>
              </div>
              <div>
                <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-medium">3</span>
                </div>
                <h4 className="font-medium mb-2">Post-Launch Testing</h4>
                <p className="text-sm text-slate-600 font-light">30-day monitoring period to validate sustained performance improvements</p>
              </div>
            </div>
            <div className="mt-12 p-6 bg-slate-100 rounded-lg max-w-3xl mx-auto">
              <p className="text-sm text-slate-700 font-light italic">
                "All metrics measured using Google PageSpeed Insights, GTmetrix, and Chrome DevTools. 
                Results based on average improvements across 50+ client websites in 2024-2025."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Old vs New Way */}
      <section className="py-32 px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
              Page Builders vs Bespoke Development
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
              <h3 className="text-sm font-medium text-slate-900 mb-8 tracking-wider">9LINE.DEV BESPOKE</h3>
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
                description: '100% bespoke websites. Mobile-first, fully responsive design optimized for page speed with load times under 1 second.'
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
                quote: "Bespoke development means no security vulnerabilities. Our site has been rock solid.",
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

      {/* Site Audit CTA */}
      <section className="py-32 px-8 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tight">
            Get Your Free Site Audit
          </h2>
          <p className="text-xl text-slate-600 mb-12 font-light leading-relaxed">
            See exactly how your website performs on Core Web Vitals and get a detailed report with actionable improvements.
          </p>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="text-left">
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="you@company.com"
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    required
                  />
                </div>
                <div className="text-left">
                  <label htmlFor="website" className="block text-sm font-medium text-slate-700 mb-2">
                    Website URL
                  </label>
                  <input
                    type="url"
                    id="website"
                    name="website"
                    placeholder="https://yoursite.com"
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    required
                  />
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full py-4 bg-slate-900 text-white hover:bg-slate-800 transition-colors text-sm font-medium tracking-wide rounded-lg"
              >
                GET MY FREE AUDIT REPORT
              </button>
              
              <p className="text-xs text-slate-500 font-light">
                We'll analyze your site's Core Web Vitals, performance, and SEO within 24 hours. No spam, ever.
              </p>
            </form>
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
            Get a free quote today. No page builders, no WordPress - just fast, secure, bespoke websites that convert visitors into customers.
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