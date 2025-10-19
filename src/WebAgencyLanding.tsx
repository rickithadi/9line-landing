import { ChevronDown, ChevronLeft, ChevronRight, Code, Eye, Shield, TrendingUp } from 'lucide-react';
import { useRef, useState } from 'react';

function WebAgencyLanding() {
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const scroll = (ref: React.RefObject<HTMLDivElement>, direction: 'left' | 'right') => {
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
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-8 py-6 flex justify-between items-center">
          <div className="text-2xl font-light tracking-tight">
            <span className="font-semibold text-slate-900">9line</span>
            <span className="text-slate-400">.dev</span>
          </div>
          <button className="px-6 py-2 text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors">
            See Where You Rank →
          </button>
        </div>
      </nav>

      <section className="pt-40 pb-32 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 border border-slate-200 rounded-full px-4 py-1.5 mb-8 text-xs text-slate-600 font-light">
            Trusted by 250+ business owners · Average 67% increase in conversions
          </div>

          <h1 className="text-6xl md:text-7xl font-light mb-8 leading-tight tracking-tight">
            Your website,
            <span className="block font-normal text-blue-600 mt-2">
              Always Ready.
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            We make your website rank higher in Google, load faster, and convert better than your competitors. Every single month. Automatically.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <button className="px-8 py-4 bg-slate-900 text-white hover:bg-slate-800 transition-colors text-sm font-medium tracking-wide">
              SEE WHERE YOU RANK
            </button>
            <button className="px-8 py-4 border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white transition-colors text-sm font-medium tracking-wide">
              JOIN WAITLIST
            </button>
          </div>

          <p className="text-xs text-slate-500 font-light">
            Free competitive analysis · See how you compare · No commitment
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
            <h2 className="text-4xl font-light mb-4 tracking-tight">Market Dominance</h2>
            <p className="text-slate-600 font-light">Three ways we keep you ahead of competitors, every month</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-24">
            <div className="border border-slate-200 bg-white p-8">
              <Eye className="w-8 h-8 text-slate-900 mb-6" strokeWidth={1.5} />
              <h3 className="text-2xl font-light mb-3">Monitor</h3>
              <p className="text-slate-600 font-light leading-relaxed mb-4">Track your performance vs. competitors.</p>
              <p className="text-sm text-slate-500 font-light leading-relaxed">See exactly where you stand in your market. Know when competitors make moves. Stay one step ahead, always.</p>
            </div>

            <div className="border border-slate-200 bg-white p-8">
              <Shield className="w-8 h-8 text-slate-900 mb-6" strokeWidth={1.5} />
              <h3 className="text-2xl font-light mb-3">Audit</h3>
              <p className="text-slate-600 font-light leading-relaxed mb-4">Dominate Google search rankings.</p>
              <p className="text-sm text-slate-500 font-light leading-relaxed">Monthly SEO deep dives reveal exactly what Google wants. Technical SEO, content optimization, backlinks—everything that gets you to page 1.</p>
            </div>

            <div className="border border-slate-200 bg-white p-8">
              <Code className="w-8 h-8 text-slate-900 mb-6" strokeWidth={1.5} />
              <h3 className="text-2xl font-light mb-3">Evolve</h3>
              <p className="text-slate-600 font-light leading-relaxed mb-4">Get better every single month.</p>
              <p className="text-sm text-slate-500 font-light leading-relaxed">We implement improvements automatically. Your site gets faster, ranks higher, and converts better. Without you lifting a finger.</p>
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

          <div>
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
              <button className="px-8 py-4 bg-slate-900 text-white hover:bg-slate-800 transition-colors text-sm font-medium tracking-wide">
                SEE YOUR POTENTIAL
              </button>
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
            <button className="px-8 py-4 bg-slate-900 text-white hover:bg-slate-800 transition-colors text-sm font-medium tracking-wide">
              SEE YOUR DASHBOARD
            </button>
          </div>
        </div>
      </section>

      <section className="py-32 px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4 tracking-tight">Business Results</h2>
            <p className="text-slate-600 font-light">Real owners, real competitive wins</p>
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
                    "Went from page 3 to top of page 1 in Google for 'HVAC repair Austin'. Now 80% of our leads come from organic search. Changed our entire business."
                  </p>
                  <div>
                    <div className="font-medium text-sm">Tom Richardson</div>
                    <div className="text-xs text-slate-500 font-light mt-1">Owner, Richardson HVAC</div>
                  </div>
                </div>

                <div className="flex-shrink-0 w-96 snap-start border border-slate-200 bg-white p-10">
                  <p className="text-slate-600 font-light mb-8 leading-relaxed italic">
                    "Finally ranking above the big dental chains for 'dentist near me'. Google sends us 15-20 qualified patients every week now. Game changer."
                  </p>
                  <div>
                    <div className="font-medium text-sm">Dr. Sarah Kim</div>
                    <div className="text-xs text-slate-500 font-light mt-1">Owner, Lakeside Dental</div>
                  </div>
                </div>

                <div className="flex-shrink-0 w-96 snap-start border border-slate-200 bg-white p-10">
                  <p className="text-slate-600 font-light mb-8 leading-relaxed italic">
                    "My competitors spend thousands on agencies. I spend $599/month and consistently outrank them all. Best ROI of any marketing I do."
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
            <p className="text-slate-600 font-light">Choose your competitive advantage</p>
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
                    <p className="text-xs text-slate-500 font-light mb-4">Beat most competitors</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-light">$299</span>
                      <span className="text-slate-500 font-light">/mo</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-12">
                    <li className="text-sm text-slate-600 font-light">Monthly SEO audits</li>
                    <li className="text-sm text-slate-600 font-light">Keyword ranking tracking</li>
                    <li className="text-sm text-slate-600 font-light">On-page SEO optimization</li>
                    <li className="text-sm text-slate-600 font-light">Speed & mobile optimization</li>
                    <li className="text-sm text-slate-600 font-light">Email support</li>
                  </ul>

                  <button className="w-full py-3 text-sm font-medium tracking-wide transition-colors border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white">
                    GET STARTED
                  </button>
                </div>

                <div className="flex-shrink-0 w-80 md:w-auto snap-start p-10 border-2 border-slate-900 relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-4 py-1 text-xs font-medium tracking-wider">
                    MOST POPULAR
                  </div>
                  <div className="mb-12">
                    <h3 className="text-sm font-medium tracking-wider mb-2">PROFESSIONAL</h3>
                    <p className="text-xs text-slate-900 font-medium mb-4">Dominate your market</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-light">$599</span>
                      <span className="text-slate-500 font-light">/mo</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-12">
                    <li className="text-sm font-medium">Weekly SEO audits & updates</li>
                    <li className="text-sm font-medium">Local SEO optimization</li>
                    <li className="text-sm font-medium">Content & keyword strategy</li>
                    <li className="text-sm font-medium">Technical SEO fixes</li>
                    <li className="text-sm font-medium">Priority support</li>
                    <li className="text-sm font-medium">Monthly strategy call</li>
                  </ul>

                  <button className="w-full py-3 text-sm font-medium tracking-wide transition-colors bg-slate-900 text-white hover:bg-slate-800">
                    GET STARTED
                  </button>
                </div>

                <div className="flex-shrink-0 w-80 md:w-auto snap-start p-10 border border-slate-200">
                  <div className="mb-12">
                    <h3 className="text-sm font-medium tracking-wider mb-2">ENTERPRISE</h3>
                    <p className="text-xs text-slate-500 font-light mb-4">Guaranteed Page 1 rankings</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-light">$1,299</span>
                      <span className="text-slate-500 font-light">/mo</span>
                    </div>
                  </div>

                  <ul className="space-y-4 mb-12">
                    <li className="text-sm text-slate-600 font-light">Daily SEO monitoring</li>
                    <li className="text-sm text-slate-600 font-light">Guaranteed Page 1 rankings</li>
                    <li className="text-sm text-slate-600 font-light">Custom content creation</li>
                    <li className="text-sm text-slate-600 font-light">Backlink strategy & outreach</li>
                    <li className="text-sm text-slate-600 font-light">Dedicated SEO manager</li>
                    <li className="text-sm text-slate-600 font-light">Same-day support</li>
                  </ul>

                  <button className="w-full py-3 text-sm font-medium tracking-wide transition-colors border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white">
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
                <span className="font-light pr-4">How do you improve my Google rankings?</span>
                <ChevronDown className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${openFaq === 0 ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === 0 && (
                <div className="px-8 pb-6 text-slate-600 font-light leading-relaxed">
                  We fix what Google cares about: technical SEO issues, site speed, mobile experience, quality content, and local signals. Every month we identify what's holding you back and fix it. Most clients see page 1 rankings within 90 days.
                </div>
              )}
            </div>

            <div className="border border-slate-200 bg-white overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-light pr-4">I'm not technical. Can I still use this?</span>
                <ChevronDown className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${openFaq === 1 ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === 1 && (
                <div className="px-8 pb-6 text-slate-600 font-light leading-relaxed">
                  Absolutely. You just run your business. We handle everything technical. You'll see improvements every month in plain English reports showing exactly how you compare to competitors.
                </div>
              )}
            </div>

            <div className="border border-slate-200 bg-white overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-light pr-4">How long until I see results?</span>
                <ChevronDown className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${openFaq === 2 ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === 2 && (
                <div className="px-8 pb-6 text-slate-600 font-light leading-relaxed">
                  Most clients see measurable improvements within the first month. Rankings and traffic typically improve within 60-90 days. We show you exactly where you stand vs. competitors from day one.
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
                <span className="font-light pr-4">Do you work with my industry?</span>
                <ChevronDown className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${openFaq === 4 ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === 4 && (
                <div className="px-8 pb-6 text-slate-600 font-light leading-relaxed">
                  We work with local service businesses: contractors, medical practices, law firms, home services, professional services, and more. If you have local competitors, we can help you beat them.
                </div>
              )}
            </div>

            <div className="border border-slate-200 bg-white overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === 5 ? null : 5)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-light pr-4">What happens if I cancel?</span>
                <ChevronDown className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${openFaq === 5 ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === 5 && (
                <div className="px-8 pb-6 text-slate-600 font-light leading-relaxed">
                  You keep all improvements we've made. But understand: your competitors won't stop improving. Staying #1 requires ongoing work. That's why our clients stick with us for years.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-8 bg-slate-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-tight">
            Claim Your Position
          </h2>
          <p className="text-lg text-slate-400 mb-12 font-light leading-relaxed">
            Free competitive analysis. See exactly where you rank vs. competitors and what it takes to be #1 in your market.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <button className="px-10 py-4 bg-white text-slate-900 hover:bg-slate-100 transition-colors text-sm font-medium tracking-wide">
              SEE WHERE YOU RANK
            </button>
            <button className="px-10 py-4 border border-white text-white hover:bg-white hover:text-slate-900 transition-colors text-sm font-medium tracking-wide">
              JOIN WAITLIST
            </button>
          </div>
          <p className="text-sm text-slate-500 font-light">
            Free analysis · No commitment · Know your position in 24 hours
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
    </div>
  );
}

export default WebAgencyLanding;
