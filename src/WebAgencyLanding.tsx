import { ChevronDown, ChevronLeft, ChevronRight, Code, Eye, Shield, TrendingUp } from 'lucide-react';
import { useRef, useState } from 'react';
import { Modal } from './components/Modal';
import { ContactForm } from './components/ContactForm';
import { CityHeatmap } from './components/CityHeatmap';

function WebAgencyLanding() {
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const scroll = (ref: React.RefObject<HTMLDivElement>, direction: 'left' | 'right') => {
    if (ref.current) {
      const scrollAmount = ref.current.offsetWidth * 0.8;
      ref.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const handleFormSubmit = async (data: { email: string; domain?: string }) => {
    console.log('Form submitted:', data);
    // TODO: Handle form submission (e.g., send to API)
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-8 py-6 flex justify-between items-center">
          <div className="text-2xl font-light tracking-tight">
            <span className="font-semibold text-slate-900">9line</span>
            <span className="text-slate-400">.dev</span>
          </div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="px-6 py-2 text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors"
          >
            See Where You Rank →
          </button>
        </div>
      </nav>

      <section className="pt-40 pb-32 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 border border-slate-200 rounded-full px-4 py-1.5 mb-8 text-xs text-slate-600 font-light">
            Trusted by 250+ business owners · Enterprise-level intelligence for 1/5th the cost
          </div>

          <h1 className="text-6xl md:text-7xl font-light mb-8 leading-tight tracking-tight">
            Intelligence-driven
            <span className="block font-normal text-blue-600 mt-2">
              Website Optimization.
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            The only business intelligence platform that continuously audits, optimizes, and improves your website based on real performance data and your industry's best practices.
          </p>

          <div className="flex justify-center mb-6">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 bg-slate-900 text-white hover:bg-slate-800 transition-colors text-sm font-medium tracking-wide"
            >
              SEE WHERE YOU RANK
            </button>
          </div>

          <p className="text-xs text-slate-500 font-light">
            Free competitive intelligence report · Industry-specific insights · No commitment
          </p>
        </div>
      </section>

      <section className="py-16 px-8 border-y border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-light text-slate-900 mb-1">+167%</div>
              <div className="text-sm text-slate-500 font-light">Avg. Google Traffic Increase</div>
            </div>
            <div>
              <div className="text-4xl font-light text-slate-900 mb-1">Page 1</div>
              <div className="text-sm text-slate-500 font-light">Average Search Position</div>
            </div>
            <div>
              <div className="text-4xl font-light text-slate-900 mb-1">#1</div>
              <div className="text-sm text-slate-500 font-light">Average Market Position</div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4 tracking-tight">Intelligence Platform</h2>
            <p className="text-slate-600 font-light">We don't build and leave. We don't just report. We continuously improve based on data.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-24">
            <div className="border border-slate-200 bg-white p-8">
              <Eye className="w-8 h-8 text-slate-900 mb-6" strokeWidth={1.5} />
              <h3 className="text-2xl font-light mb-3">Monitor</h3>
              <p className="text-slate-600 font-light leading-relaxed mb-4">Industry-specific competitive intelligence.</p>
              <p className="text-sm text-slate-500 font-light leading-relaxed">Unlike generic tools, we track performance data specific to your industry. Know exactly where you stand and when competitors make moves. Intelligence, not just reports.</p>
            </div>

            <div className="border border-slate-200 bg-white p-8">
              <Shield className="w-8 h-8 text-slate-900 mb-6" strokeWidth={1.5} />
              <h3 className="text-2xl font-light mb-3">Audit</h3>
              <p className="text-slate-600 font-light leading-relaxed mb-4">Data-driven optimization opportunities.</p>
              <p className="text-sm text-slate-500 font-light leading-relaxed">Stop paying for tools you don't know how to use. We identify exactly what needs fixing based on real performance data and your industry's best practices. Technical SEO, design, speed—everything.</p>
            </div>

            <div className="border border-slate-200 bg-white p-8">
              <Code className="w-8 h-8 text-slate-900 mb-6" strokeWidth={1.5} />
              <h3 className="text-2xl font-light mb-3">Evolve</h3>
              <p className="text-slate-600 font-light leading-relaxed mb-4">Continuous implementation based on real data.</p>
              <p className="text-sm text-slate-500 font-light leading-relaxed">Unlike static WaaS providers who just keep sites running, we make them better every month. Design improvements, speed optimization, search ranking—always improving based on performance data.</p>
            </div>
          </div>

          <div className="mb-24">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-light mb-3 tracking-tight">How You Rank</h3>
              <p className="text-slate-600 font-light">Your position vs. competitors across key metrics</p>
            </div>

            <div className="border border-slate-200 bg-white p-10 overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-200">
                    <th className="text-left py-4 px-4 text-sm font-medium"></th>
                    <th className="py-4 px-4 text-xs font-medium text-slate-600">Google Rank</th>
                    <th className="py-4 px-4 text-xs font-medium text-slate-600">Speed</th>
                    <th className="py-4 px-4 text-xs font-medium text-slate-600">Mobile</th>
                    <th className="py-4 px-4 text-xs font-medium text-slate-600">Conversions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-slate-100">
                    <td className="py-4 px-4 text-sm font-medium">Your Site</td>
                    <td className="py-4 px-4 text-center"><div className="w-8 h-8 rounded-full mx-auto bg-slate-900"></div></td>
                    <td className="py-4 px-4 text-center"><div className="w-8 h-8 rounded-full mx-auto bg-slate-900"></div></td>
                    <td className="py-4 px-4 text-center"><div className="w-8 h-8 rounded-full mx-auto bg-slate-900"></div></td>
                    <td className="py-4 px-4 text-center"><div className="w-8 h-8 rounded-full mx-auto bg-slate-900"></div></td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-4 px-4 text-sm font-light text-slate-600">Competitor A</td>
                    <td className="py-4 px-4 text-center"><div className="w-8 h-8 rounded-full mx-auto bg-slate-400"></div></td>
                    <td className="py-4 px-4 text-center"><div className="w-8 h-8 rounded-full mx-auto bg-slate-900"></div></td>
                    <td className="py-4 px-4 text-center"><div className="w-8 h-8 rounded-full mx-auto bg-slate-200"></div></td>
                    <td className="py-4 px-4 text-center"><div className="w-8 h-8 rounded-full mx-auto bg-slate-400"></div></td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-4 px-4 text-sm font-light text-slate-600">Competitor B</td>
                    <td className="py-4 px-4 text-center"><div className="w-8 h-8 rounded-full mx-auto bg-slate-200"></div></td>
                    <td className="py-4 px-4 text-center"><div className="w-8 h-8 rounded-full mx-auto bg-slate-400"></div></td>
                    <td className="py-4 px-4 text-center"><div className="w-8 h-8 rounded-full mx-auto bg-slate-200"></div></td>
                    <td className="py-4 px-4 text-center"><div className="w-8 h-8 rounded-full mx-auto bg-slate-200"></div></td>
                  </tr>
                  <tr className="border-b border-slate-100">
                    <td className="py-4 px-4 text-sm font-light text-slate-600">Competitor C</td>
                    <td className="py-4 px-4 text-center"><div className="w-8 h-8 rounded-full mx-auto bg-slate-200"></div></td>
                    <td className="py-4 px-4 text-center"><div className="w-8 h-8 rounded-full mx-auto bg-slate-200"></div></td>
                    <td className="py-4 px-4 text-center"><div className="w-8 h-8 rounded-full mx-auto bg-slate-400"></div></td>
                    <td className="py-4 px-4 text-center"><div className="w-8 h-8 rounded-full mx-auto bg-slate-200"></div></td>
                  </tr>
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

          <div className="mt-32 pt-24 border-t border-slate-200">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-light mb-4 tracking-tight">Geographic Intelligence</h3>
              <p className="text-slate-600 font-light">Where you win and lose across your market</p>
            </div>
            <CityHeatmap />
          </div>

          <div className="mt-32 pt-24 border-t border-slate-200">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-light mb-3 tracking-tight">From Losing to Winning</h3>
              <p className="text-slate-600 font-light">Real transformation from continuous monthly improvements</p>
            </div>

            <div className="border border-slate-200 bg-white p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                <div>
                  <div className="text-3xl font-light text-slate-900 mb-1">+67%</div>
                  <div className="text-xs text-slate-500 font-light">More Customers</div>
                </div>
                <div>
                  <div className="text-3xl font-light text-slate-900 mb-1">3.2x</div>
                  <div className="text-xs text-slate-500 font-light">Faster Loading</div>
                </div>
                <div>
                  <div className="text-3xl font-light text-slate-900 mb-1">+89%</div>
                  <div className="text-xs text-slate-500 font-light">Search Traffic</div>
                </div>
                <div>
                  <div className="text-3xl font-light text-slate-900 mb-1">7→1</div>
                  <div className="text-xs text-slate-500 font-light">Rank Jump</div>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <button 
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-4 bg-slate-900 text-white hover:bg-slate-800 transition-colors text-sm font-medium tracking-wide"
              >
                SEE YOUR POTENTIAL
              </button>
            </div>
          </div>

          <div className="mt-32 pt-24 border-t border-slate-200">
            <div className="text-center mb-16">
              <h3 className="text-3xl font-light mb-4 tracking-tight">Why We're Different</h3>
              <p className="text-slate-600 font-light">Unlike everyone else in the market</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-white border border-slate-200 p-8">
                <h4 className="text-lg font-medium mb-3">vs. Premium Design Services</h4>
                <p className="text-slate-600 font-light mb-4">Beautiful design is worthless if no one finds your site.</p>
                <p className="text-sm text-slate-500 font-light">We optimize for both aesthetics AND discovery. Your $5K+ design investment becomes profitable through intelligence-driven optimization.</p>
              </div>

              <div className="bg-white border border-slate-200 p-8">
                <h4 className="text-lg font-medium mb-3">vs. Budget WaaS Providers</h4>
                <p className="text-slate-600 font-light mb-4">Most WaaS just keeps your site running.</p>
                <p className="text-sm text-slate-500 font-light">We make it better every single week. While they maintain, we optimize. While they keep lights on, we drive business growth.</p>
              </div>

              <div className="bg-white border border-slate-200 p-8">
                <h4 className="text-lg font-medium mb-3">vs. SEO Tools & Analytics</h4>
                <p className="text-slate-600 font-light mb-4">Stop paying for tools you don't know how to use.</p>
                <p className="text-sm text-slate-500 font-light">We audit AND implement. You get actionable intelligence plus the execution. No more reports you can't act on.</p>
              </div>

              <div className="bg-white border border-slate-200 p-8">
                <h4 className="text-lg font-medium mb-3">vs. Traditional Agencies</h4>
                <p className="text-slate-600 font-light mb-4">We don't build and leave.</p>
                <p className="text-sm text-slate-500 font-light">Your website becomes a living, improving asset. Continuous optimization based on real performance data, not one-time projects.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4 tracking-tight">Your Dashboard</h2>
            <p className="text-slate-600 font-light">Track your competitive position in real-time</p>
          </div>

          <div className="border-2 border-slate-300 bg-white">
            <div className="border-b border-slate-200 px-8 py-6">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-sm font-medium mb-1">Competitive Intelligence</div>
                  <div className="text-xs text-slate-500 font-light">See exactly where you stand vs. competitors</div>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                  <span className="text-xs font-light text-green-600">Improving</span>
                </div>
              </div>
            </div>

            <div className="p-8">
              <div className="grid grid-cols-4 gap-4 mb-8">
                <div className="border border-slate-200 p-4 text-center">
                  <div className="text-xs text-slate-500 mb-2">Google Rank</div>
                  <div className="text-2xl font-light mb-1">#1</div>
                  <div className="text-xs text-slate-400">Page 1, Pos 1</div>
                </div>
                <div className="border border-slate-200 p-4 text-center">
                  <div className="text-xs text-slate-500 mb-2">Organic Traffic</div>
                  <div className="text-2xl font-light mb-1">+187%</div>
                  <div className="text-xs text-slate-400">This month</div>
                </div>
                <div className="border border-slate-200 p-4 text-center">
                  <div className="text-xs text-slate-500 mb-2">Keywords Ranked</div>
                  <div className="text-2xl font-light mb-1">47</div>
                  <div className="text-xs text-slate-400">Page 1</div>
                </div>
                <div className="border border-slate-200 p-4 text-center">
                  <div className="text-xs text-slate-500 mb-2">Domain Authority</div>
                  <div className="text-2xl font-light mb-1">64</div>
                  <div className="text-xs text-slate-400">Growing</div>
                </div>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <div className="text-xs font-medium text-slate-400 mb-4 tracking-wider">THIS MONTH'S SEO WINS</div>
                <div className="space-y-2 text-sm font-light text-slate-600">
                  <div className="flex items-center justify-between">
                    <span>Ranked #1 for "roofing contractor [city]"</span>
                    <span className="text-green-600">✓</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>12 new keywords on page 1</span>
                    <span className="text-green-600">✓</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Domain authority increased to 64</span>
                    <span className="text-green-600">✓</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 bg-slate-900 text-white hover:bg-slate-800 transition-colors text-sm font-medium tracking-wide"
            >
              SEE YOUR DASHBOARD
            </button>
          </div>
        </div>
      </section>

      <section className="py-32 px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4 tracking-tight">Business Intelligence Results</h2>
            <p className="text-slate-600 font-light">How data-driven optimization transforms businesses</p>
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
                <div className="flex-shrink-0 w-96 snap-start border border-slate-200 bg-white p-10">
                  <p className="text-slate-600 font-light mb-8 leading-relaxed italic">
                    "Their competitive intelligence showed exactly where we were losing to competitors. Now we know what works in our market before we invest. 80% of our leads come from our optimized site."
                  </p>
                  <div>
                    <div className="font-medium text-sm">Tom Richardson</div>
                    <div className="text-xs text-slate-500 font-light mt-1">Owner, Richardson HVAC</div>
                  </div>
                </div>

                <div className="flex-shrink-0 w-96 snap-start border border-slate-200 bg-white p-10">
                  <p className="text-slate-600 font-light mb-8 leading-relaxed italic">
                    "The monthly intelligence reports show exactly how we stack against big dental chains. We now outrank them consistently and Google sends us 15-20 qualified patients weekly. Best business investment ever."
                  </p>
                  <div>
                    <div className="font-medium text-sm">Dr. Sarah Kim</div>
                    <div className="text-xs text-slate-500 font-light mt-1">Owner, Lakeside Dental</div>
                  </div>
                </div>

                <div className="flex-shrink-0 w-96 snap-start border border-slate-200 bg-white p-10">
                  <p className="text-slate-600 font-light mb-8 leading-relaxed italic">
                    "While competitors waste money on generic agencies, I get enterprise-level intelligence at a fraction of the cost. Data shows I consistently outrank companies spending 10x more. It's not even close."
                  </p>
                  <div>
                    <div className="font-medium text-sm">Mike Chen</div>
                    <div className="text-xs text-slate-500 font-light mt-1">Owner, Premier Roofing</div>
                  </div>
                </div>
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

      <section className="py-32 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4 tracking-tight">Pricing</h2>
            <p className="text-slate-600 font-light">Enterprise-level intelligence at a fraction of the cost</p>
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
                <div className="flex-shrink-0 w-80 md:w-auto snap-start p-10 border border-slate-200">
                  <div className="mb-12">
                    <h3 className="text-sm font-medium tracking-wider mb-2">STARTER</h3>
                    <p className="text-xs text-slate-500 font-light mb-4">5-10 pages · Basic intelligence</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-light">$1,495</span>
                      <span className="text-slate-500 font-light">/mo</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-12">
                    <li className="text-sm text-slate-600 font-light">Bi-weekly competitive audits</li>
                    <li className="text-sm text-slate-600 font-light">Industry-specific monitoring</li>
                    <li className="text-sm text-slate-600 font-light">Performance optimization</li>
                    <li className="text-sm text-slate-600 font-light">Speed & mobile improvements</li>
                    <li className="text-sm text-slate-600 font-light">Monthly intelligence reports</li>
                  </ul>

                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="w-full py-3 text-sm font-medium tracking-wide transition-colors border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white"
                  >
                    GET STARTED
                  </button>
                </div>

                <div className="flex-shrink-0 w-80 md:w-auto snap-start p-10 border-2 border-slate-900 relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-4 py-1 text-xs font-medium tracking-wider">
                    MOST POPULAR
                  </div>
                  <div className="mb-12">
                    <h3 className="text-sm font-medium tracking-wider mb-2">GROWTH</h3>
                    <p className="text-xs text-slate-900 font-medium mb-4">Unlimited pages · Advanced intelligence</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-light">$2,495</span>
                      <span className="text-slate-500 font-light">/mo</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-12">
                    <li className="text-sm font-medium">Weekly intelligence audits & implementation</li>
                    <li className="text-sm font-medium">Advanced SEO optimization</li>
                    <li className="text-sm font-medium">Content & conversion strategy</li>
                    <li className="text-sm font-medium">Technical performance fixes</li>
                    <li className="text-sm font-medium">Priority support & strategy calls</li>
                    <li className="text-sm font-medium">Competitive intelligence reports</li>
                  </ul>

                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="w-full py-3 text-sm font-medium tracking-wide transition-colors bg-slate-900 text-white hover:bg-slate-800"
                  >
                    GET STARTED
                  </button>
                </div>

                <div className="flex-shrink-0 w-80 md:w-auto snap-start p-10 border border-slate-200">
                  <div className="mb-12">
                    <h3 className="text-sm font-medium tracking-wider mb-2">ENTERPRISE</h3>
                    <p className="text-xs text-slate-500 font-light mb-4">Multiple sites · Dedicated account manager</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-light">$4,995</span>
                      <span className="text-slate-500 font-light">/mo</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-12">
                    <li className="text-sm text-slate-600 font-light">Daily intelligence monitoring</li>
                    <li className="text-sm text-slate-600 font-light">Multiple website optimization</li>
                    <li className="text-sm text-slate-600 font-light">Custom content & design strategy</li>
                    <li className="text-sm text-slate-600 font-light">Advanced competitive intelligence</li>
                    <li className="text-sm text-slate-600 font-light">Dedicated intelligence manager</li>
                    <li className="text-sm text-slate-600 font-light">Same-day implementation</li>
                  </ul>

                  <button 
                    onClick={() => setIsModalOpen(true)}
                    className="w-full py-3 text-sm font-medium tracking-wide transition-colors border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white"
                  >
                    GET STARTED
                  </button>
                </div>
              </div>
            </div>

            <button
              onClick={() => scroll(pricingRef, 'right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-white border border-slate-200 rounded-full flex items-center justify-center hover:bg-slate-50 transition-colors md:hidden"
            >
              <ChevronRight className="w-5 h-5 text-slate-600" />
            </button>
          </div>

          <p className="text-center text-xs text-slate-500 font-light mt-8">
            All plans include continuous improvements · Cancel anytime
          </p>
        </div>
      </section>

      <section className="py-32 px-8 bg-slate-50">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4 tracking-tight">Questions</h2>
            <p className="text-slate-600 font-light">Everything you need to know</p>
          </div>

          <div className="space-y-3">
            <div className="border border-slate-200 bg-white overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === 0 ? null : 0)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-light pr-4">How is this different from hiring an SEO agency?</span>
                <ChevronDown className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${openFaq === 0 ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === 0 && (
                <div className="px-8 pb-6 text-slate-600 font-light leading-relaxed">
                  Agencies charge $5K-15K/month and often disappear after delivering a report. We provide enterprise-level intelligence for 1/5th the cost, plus we implement everything. You get the strategy AND the execution, continuously.
                </div>
              )}
            </div>

            <div className="border border-slate-200 bg-white overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-light pr-4">How do you justify the ROI at these price points?</span>
                <ChevronDown className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${openFaq === 1 ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === 1 && (
                <div className="px-8 pb-6 text-slate-600 font-light leading-relaxed">
                  One new customer per month pays for the entire service. Our average client sees 67% increase in conversions. If your average customer value is $2,000+, the math works from day one. Plus you get continuous optimization vs. one-time projects.
                </div>
              )}
            </div>

            <div className="border border-slate-200 bg-white overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-light pr-4">What makes your intelligence platform unique?</span>
                <ChevronDown className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${openFaq === 2 ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === 2 && (
                <div className="px-8 pb-6 text-slate-600 font-light leading-relaxed">
                  Industry-specific intelligence, not generic reports. We monitor what actually works in YOUR market, implement based on real performance data, and continuously optimize. No one else combines deep industry intelligence with hands-on implementation.
                </div>
              )}
            </div>

            <div className="border border-slate-200 bg-white overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === 3 ? null : 3)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-light pr-4">What if I'm already ranking well?</span>
                <ChevronDown className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${openFaq === 3 ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === 3 && (
                <div className="px-8 pb-6 text-slate-600 font-light leading-relaxed">
                  Perfect. We'll keep you there and widen the gap. Competitors are always trying to catch up. Our monthly improvements ensure you stay ahead and keep gaining ground.
                </div>
              )}
            </div>

            <div className="border border-slate-200 bg-white overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === 4 ? null : 4)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-light pr-4">I'm not technical. Do I need to be involved?</span>
                <ChevronDown className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${openFaq === 4 ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === 4 && (
                <div className="px-8 pb-6 text-slate-600 font-light leading-relaxed">
                  Zero technical involvement required. You run your business, we handle the intelligence and implementation. Monthly reports show exactly how you're performing vs. competitors in plain English. You'll understand your market position without needing technical knowledge.
                </div>
              )}
            </div>

            <div className="border border-slate-200 bg-white overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === 5 ? null : 5)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-light pr-4">Why continuous optimization vs. one-time projects?</span>
                <ChevronDown className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${openFaq === 5 ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === 5 && (
                <div className="px-8 pb-6 text-slate-600 font-light leading-relaxed">
                  Markets change constantly. Google updates algorithms, competitors launch new strategies, customer behavior shifts. One-time projects become outdated quickly. Continuous intelligence ensures you stay ahead of every market change and competitor move.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-8 bg-slate-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-tight">
            Get Your Intelligence Advantage
          </h2>
          <p className="text-lg text-slate-400 mb-12 font-light leading-relaxed">
            Free competitive intelligence report. See exactly where you rank vs. competitors and get industry-specific insights to dominate your market.
          </p>
          <div className="flex justify-center mb-6">
            <button 
              onClick={() => setIsModalOpen(true)}
              className="px-10 py-4 bg-white text-slate-900 hover:bg-slate-100 transition-colors text-sm font-medium tracking-wide"
            >
              SEE WHERE YOU RANK
            </button>
          </div>
          <p className="text-sm text-slate-500 font-light">
            Free intelligence report · Industry-specific insights · Know your competitive position in 24 hours
          </p>
        </div>
      </section>

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

      <style dangerouslySetInnerHTML={{
        __html: `
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        `
      }} />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ContactForm 
          onSubmit={handleFormSubmit}
          onCancel={() => setIsModalOpen(false)}
        />
      </Modal>
    </div>
  );
}

export default WebAgencyLanding;
