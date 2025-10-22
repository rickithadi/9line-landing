import './print-styles.css';

const PitchDeck9dlj4rmvjdekpli2ktpeyt = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="bg-white">
      {/* Print Button - Hidden in print */}
      <div className="fixed top-4 right-4 z-50 print:hidden">
        <button
          onClick={handlePrint}
          className="px-4 py-2 bg-gray-900 text-white rounded-sm text-sm font-medium hover:bg-gray-800 transition-colors"
        >
          Print to PDF
        </button>
      </div>

      {/* Slide 1: Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center px-8 py-16">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <h1 className="text-7xl font-light tracking-tight text-gray-900">
              Nine-Line.dev
            </h1>
            <div className="h-px w-32 bg-gray-300 mx-auto"></div>
            <h2 className="text-3xl font-light text-gray-700">
              <span className="text-blue-600">Intelligence-driven</span><br/>Website Optimization.
            </h2>
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            <span className="text-blue-600 font-medium">AI-powered insights</span> to keep your website fast, secure, and always online.<br/>
            Real-time monitoring meets <span className="text-blue-600 font-medium">intelligent optimization</span>.
          </p>
        </div>
      </section>

      {/* Slide 2: The Challenge */}
      <section className="min-h-screen flex flex-col justify-center px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-light text-gray-900 mb-3">The Challenge</h1>
            <p className="text-lg text-gray-600">Websites fail. Performance degrades. Security vulnerabilities emerge.</p>
          </div>
          
          <div className="grid grid-cols-3 gap-8 mb-12">
            <div className="text-center p-8 bg-gray-50 rounded-sm">
              <div className="text-5xl font-light text-gray-900 mb-3">99.9%</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">Still means 8.7 hours down per year</div>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-sm">
              <div className="text-5xl font-light text-gray-900 mb-3">$5.6M</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">Average cost of one hour downtime</div>
            </div>
            <div className="text-center p-8 bg-gray-50 rounded-sm">
              <div className="text-5xl font-light text-gray-900 mb-3">53%</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide">Users leave sites over 3 seconds</div>
            </div>
          </div>
          
          <div className="pt-10">
            <h3 className="text-2xl font-light text-gray-900 mb-8 text-center">Traditional Tools Fall Short</h3>
            <div className="grid grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="p-6 border border-gray-200 rounded-sm">
                <div className="text-sm font-medium text-gray-900 mb-2">Basic Monitoring</div>
                <p className="text-sm text-gray-600">Only tells you when things break—not why or how to fix them</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-sm">
                <div className="text-sm font-medium text-gray-900 mb-2">Performance Tools</div>
                <p className="text-sm text-gray-600">Complex dashboards requiring dedicated DevOps expertise</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-sm">
                <div className="text-sm font-medium text-gray-900 mb-2">Audit Services</div>
                <p className="text-sm text-gray-600">One-time snapshots that become outdated immediately</p>
              </div>
              <div className="p-6 border border-gray-200 rounded-sm">
                <div className="text-sm font-medium text-gray-900 mb-2">Enterprise APM</div>
                <p className="text-sm text-gray-600">Too expensive and complex for most businesses</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 3: Intelligence-driven Solution */}
      <section className="min-h-screen flex flex-col justify-center px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-light text-gray-900 mb-3">Intelligence-driven Solution</h1>
            <p className="text-lg text-gray-600">Monitor. Audit. Evolve.</p>
          </div>

          <div className="grid grid-cols-3 gap-8 mb-12">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto border-2 border-gray-900 rounded-sm flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Monitor</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                24/7 uptime checks, performance tracking, and security scanning from global locations
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto border-2 border-gray-900 rounded-sm flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Audit</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Continuous compliance checks, security assessments, and vulnerability detection
              </p>
            </div>
            <div className="text-center space-y-4">
              <div className="w-16 h-16 mx-auto border-2 border-gray-900 rounded-sm flex items-center justify-center">
                <svg className="w-8 h-8 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900">Evolve</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                AI-powered recommendations and automated optimizations to continuously improve performance
              </p>
            </div>
          </div>

          <div className="text-center max-w-3xl mx-auto mb-12">
            <p className="text-2xl font-light text-gray-700 leading-relaxed">
              Nine-Line.dev combines <span className="font-medium text-gray-900">real-time monitoring</span> with 
              <span className="font-medium text-gray-900"> AI-powered analysis</span> to continuously optimize 
              your website's performance, security, and availability.
            </p>
          </div>

          <div className="bg-gray-50 p-8 rounded-sm border border-gray-200 mb-12">
            <div className="text-center mb-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Competitive Intelligence Dashboard</h3>
              <p className="text-sm text-gray-600">Track your position vs. competitors across key metrics</p>
            </div>
            <div className="bg-white p-6 rounded-sm border border-gray-200">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 text-sm font-medium text-gray-700"></th>
                    <th className="text-center py-3 px-4 text-sm font-medium text-gray-700">Google Rank</th>
                    <th className="text-center py-3 px-4 text-sm font-medium text-gray-700">Speed</th>
                    <th className="text-center py-3 px-4 text-sm font-medium text-gray-700">Mobile</th>
                    <th className="text-center py-3 px-4 text-sm font-medium text-gray-700">Conversions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-sm font-medium text-gray-900">Your Site</td>
                    <td className="text-center py-3 px-4">
                      <div className="w-3 h-3 bg-gray-900 rounded-full mx-auto"></div>
                    </td>
                    <td className="text-center py-3 px-4">
                      <div className="w-3 h-3 bg-gray-900 rounded-full mx-auto"></div>
                    </td>
                    <td className="text-center py-3 px-4">
                      <div className="w-3 h-3 bg-gray-700 rounded-full mx-auto"></div>
                    </td>
                    <td className="text-center py-3 px-4">
                      <div className="w-3 h-3 bg-gray-900 rounded-full mx-auto"></div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-sm text-gray-600">Competitor A</td>
                    <td className="text-center py-3 px-4">
                      <div className="w-3 h-3 bg-gray-700 rounded-full mx-auto"></div>
                    </td>
                    <td className="text-center py-3 px-4">
                      <div className="w-3 h-3 bg-gray-400 rounded-full mx-auto"></div>
                    </td>
                    <td className="text-center py-3 px-4">
                      <div className="w-3 h-3 bg-gray-900 rounded-full mx-auto"></div>
                    </td>
                    <td className="text-center py-3 px-4">
                      <div className="w-3 h-3 bg-gray-700 rounded-full mx-auto"></div>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="py-3 px-4 text-sm text-gray-600">Competitor B</td>
                    <td className="text-center py-3 px-4">
                      <div className="w-3 h-3 bg-gray-400 rounded-full mx-auto"></div>
                    </td>
                    <td className="text-center py-3 px-4">
                      <div className="w-3 h-3 bg-gray-700 rounded-full mx-auto"></div>
                    </td>
                    <td className="text-center py-3 px-4">
                      <div className="w-3 h-3 bg-gray-400 rounded-full mx-auto"></div>
                    </td>
                    <td className="text-center py-3 px-4">
                      <div className="w-3 h-3 bg-gray-400 rounded-full mx-auto"></div>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-sm text-gray-600">Competitor C</td>
                    <td className="text-center py-3 px-4">
                      <div className="w-3 h-3 bg-gray-300 rounded-full mx-auto"></div>
                    </td>
                    <td className="text-center py-3 px-4">
                      <div className="w-3 h-3 bg-gray-900 rounded-full mx-auto"></div>
                    </td>
                    <td className="text-center py-3 px-4">
                      <div className="w-3 h-3 bg-gray-700 rounded-full mx-auto"></div>
                    </td>
                    <td className="text-center py-3 px-4">
                      <div className="w-3 h-3 bg-gray-300 rounded-full mx-auto"></div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="flex justify-center gap-6 mt-4 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gray-900 rounded-full"></div>
                  <span className="text-gray-600">Excellent</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gray-700 rounded-full"></div>
                  <span className="text-gray-600">Good</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                  <span className="text-gray-600">Fair</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
                  <span className="text-gray-600">Poor</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-sm border border-gray-200">
            <div className="text-center mb-6">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Geographic Intelligence</h3>
              <p className="text-sm text-gray-600">Real-time market position across regions</p>
            </div>
            
            <div className="grid grid-cols-2 gap-8">
              <div className="relative">
                <div className="bg-gray-50 p-4 rounded-sm">
                  <h4 className="text-sm font-medium text-gray-900 mb-4 text-center">Market Position Map</h4>
                  <div className="space-y-3">
                    <div className="grid grid-cols-3 gap-2">
                      <div></div>
                      <div className="bg-gray-400 p-3 rounded text-center text-xs text-white font-medium">
                        North Suburbs<br/>
                        <span className="text-xs opacity-75">Competitive</span>
                      </div>
                      <div></div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="bg-slate-900 p-3 rounded text-center text-xs text-white font-medium">
                        West Side<br/>
                        <span className="text-xs opacity-75">Dominating</span>
                      </div>
                      <div className="bg-slate-800 p-3 rounded text-center text-xs text-white font-medium">
                        Downtown<br/>
                        <span className="text-xs opacity-75">Strong</span>
                      </div>
                      <div className="bg-slate-400 p-3 rounded text-center text-xs text-white font-medium">
                        East Side<br/>
                        <span className="text-xs opacity-75">Competitive</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div></div>
                      <div className="bg-gray-500 p-2 rounded text-center text-xs text-white font-medium">
                        South Suburbs<br/>
                        <span className="text-xs opacity-75">Weak</span>
                      </div>
                      <div></div>
                    </div>
                    <div className="grid grid-cols-3 gap-2">
                      <div></div>
                      <div className="bg-red-500 p-2 rounded text-center text-xs text-white font-medium">
                        Industrial District<br/>
                        <span className="text-xs opacity-75">Losing</span>
                      </div>
                      <div></div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <div className="text-xs font-medium text-gray-900 mb-3">Market Position Legend</div>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-slate-900 rounded"></div>
                      <span className="text-gray-700">Dominating</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-slate-800 rounded"></div>
                      <span className="text-gray-700">Strong</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-slate-400 rounded"></div>
                      <span className="text-gray-700">Competitive</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-gray-500 rounded"></div>
                      <span className="text-gray-700">Weak</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-red-500 rounded"></div>
                      <span className="text-gray-700">Losing</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="text-sm font-medium text-gray-900 mb-4">Geographic Intelligence Summary</div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-gray-900 rounded-full mt-1.5"></div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900 mb-1 text-sm">You dominate downtown and west side</div>
                      <div className="text-xs text-gray-600 leading-relaxed">
                        Strong search rankings and high conversion rates in core business areas.
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-red-500 rounded-full mt-1.5"></div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900 mb-1 text-sm">Competitor A owns north suburbs</div>
                      <div className="text-xs text-gray-600 leading-relaxed">
                        High search volume area where you're ranking #4. Priority optimization target.
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-gray-500 rounded-full mt-1.5"></div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900 mb-1 text-sm">East side opportunity</div>
                      <div className="text-xs text-gray-600 leading-relaxed">
                        Competitive market with room for improvement and growth potential.
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-2 h-2 bg-gray-400 rounded-full mt-1.5"></div>
                    <div className="flex-1">
                      <div className="font-medium text-gray-900 mb-1 text-sm">Industrial district challenge</div>
                      <div className="text-xs text-gray-600 leading-relaxed">
                        Competitor B dominates. Consider if this market aligns with your business goals.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 4: Core Capabilities */}
      <section className="min-h-screen flex flex-col justify-center px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-light text-gray-900 mb-3">Core Capabilities</h1>
            <p className="text-lg text-gray-600">Comprehensive website intelligence platform</p>
          </div>

          <div className="grid grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="border-l-2 border-gray-900 pl-6">
                <h3 className="text-xl font-medium text-gray-900 mb-3">Performance Monitoring</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Core Web Vitals tracking (LCP, FID, CLS)</li>
                  <li>• Page load speed analysis</li>
                  <li>• Geographic performance ranking by region</li>
                  <li>• Resource optimization recommendations</li>
                  <li>• Global CDN performance testing</li>
                </ul>
              </div>
              
              <div className="border-l-2 border-gray-900 pl-6">
                <h3 className="text-xl font-medium text-gray-900 mb-3">Uptime & Availability</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Multi-location monitoring (20+ global nodes)</li>
                  <li>• Real-time alerting (email, SMS, Slack)</li>
                  <li>• Unified dashboard with visual analytics</li>
                  <li>• Incident tracking & root cause analysis</li>
                  <li>• Custom status pages</li>
                </ul>
              </div>
              
              <div className="border-l-2 border-gray-900 pl-6">
                <h3 className="text-xl font-medium text-gray-900 mb-3">Security Auditing</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• SSL/TLS certificate monitoring</li>
                  <li>• Vulnerability scanning</li>
                  <li>• Security header analysis</li>
                  <li>• Compliance checking (PCI, GDPR, WCAG)</li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div className="border-l-2 border-gray-900 pl-6">
                <h3 className="text-xl font-medium text-gray-900 mb-3">AI-Powered Insights</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Predictive issue detection</li>
                  <li>• Automated optimization recommendations</li>
                  <li>• Performance trend analysis</li>
                  <li>• Anomaly detection & alerting</li>
                </ul>
              </div>
              
              <div className="border-l-2 border-gray-900 pl-6">
                <h3 className="text-xl font-medium text-gray-900 mb-3">Developer Tools</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• API access & webhooks</li>
                  <li>• Custom monitoring scripts</li>
                  <li>• CI/CD integration</li>
                  <li>• Detailed performance reports</li>
                </ul>
              </div>
              
              <div className="border-l-2 border-gray-900 pl-6">
                <h3 className="text-xl font-medium text-gray-900 mb-3">Team Collaboration</h3>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li>• Multi-user accounts & permissions</li>
                  <li>• Shared dashboards & reports</li>
                  <li>• Integrated communication tools</li>
                  <li>• White-label options</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 5: Market Opportunity */}
      <section className="min-h-screen flex flex-col justify-center px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-light text-gray-900 mb-3">Market Opportunity</h1>
            <p className="text-lg text-gray-600">Massive addressable market with strong tailwinds</p>
          </div>

          <div className="grid grid-cols-3 gap-8 mb-12">
            <div className="text-center p-8 border border-gray-200 rounded-sm">
              <div className="text-5xl font-light text-gray-900 mb-3">$8.5B</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide mb-2">APM Market 2024</div>
              <div className="text-xs text-gray-500">Application Performance Monitoring</div>
            </div>
            <div className="text-center p-8 border border-gray-200 rounded-sm">
              <div className="text-5xl font-light text-gray-900 mb-3">18.5%</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide mb-2">Annual Growth Rate</div>
              <div className="text-xs text-gray-500">CAGR through 2030</div>
            </div>
            <div className="text-center p-8 border border-gray-200 rounded-sm">
              <div className="text-5xl font-light text-gray-900 mb-3">$16.7B</div>
              <div className="text-sm text-gray-600 uppercase tracking-wide mb-2">Market Size 2030</div>
              <div className="text-xs text-gray-500">Projected global market</div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-light text-gray-900 mb-8 text-center">Target Segments</h3>
            <div className="grid grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div>
                <div className="text-sm font-medium text-gray-900 mb-4 uppercase tracking-wide">Primary Market</div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-3">•</span>
                    <span>SMBs with revenue-critical websites (50M+ globally)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3">•</span>
                    <span>E-commerce businesses ($5.7T market)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3">•</span>
                    <span>SaaS companies (30K+ globally)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3">•</span>
                    <span>Digital agencies managing client sites</span>
                  </li>
                </ul>
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900 mb-4 uppercase tracking-wide">Secondary Market</div>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-3">•</span>
                    <span>Enterprise IT teams seeking simplification</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3">•</span>
                    <span>DevOps professionals & development teams</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3">•</span>
                    <span>Marketing teams tracking campaign performance</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3">•</span>
                    <span>Managed service providers (MSPs)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 6: Pricing Strategy */}
      <section className="min-h-screen flex flex-col justify-center px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-light text-gray-900 mb-3">Pricing Strategy</h1>
            <p className="text-lg text-gray-600">Enterprise-level intelligence for 1/5th the cost</p>
          </div>

          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="border border-gray-200 rounded-sm overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <div className="text-sm uppercase tracking-wide text-gray-600 mb-3">Competitive Edge</div>
                <div className="mb-4">
                  <span className="text-4xl font-light text-gray-900">$1,995</span>
                  <span className="text-gray-600 ml-2">/ month</span>
                </div>
                <div className="text-xs text-gray-500">Single location intelligence</div>
              </div>
              <div className="p-6">
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Track 3 competitors + 25 keywords</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>2 website improvements per week</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>City-wide ranking heatmap</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Performance dashboard + weekly reports</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Website hosting + security</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-2 border-gray-900 rounded-sm overflow-hidden relative">
              <div className="absolute top-0 left-0 right-0 bg-gray-900 text-white text-xs py-1 text-center uppercase tracking-wide">
                Most Popular
              </div>
              <div className="p-6 border-b border-gray-200 mt-6">
                <div className="text-sm uppercase tracking-wide text-gray-600 mb-3">Market Dominator</div>
                <div className="mb-4">
                  <span className="text-4xl font-light text-gray-900">$2,995</span>
                  <span className="text-gray-600 ml-2">/ month</span>
                </div>
                <div className="text-xs text-gray-500">Multi-location intelligence</div>
              </div>
              <div className="p-6">
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Track 5 competitors + 50 keywords</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>4 website improvements per week</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Hourly ranking updates + alerts</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Content creation (1 blog post/month)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Bi-weekly strategy calls</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>24-hour response time</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border border-gray-200 rounded-sm overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <div className="text-sm uppercase tracking-wide text-gray-600 mb-3">Regional Leader</div>
                <div className="mb-4">
                  <span className="text-4xl font-light text-gray-900">$4,995</span>
                  <span className="text-gray-600 ml-2">/ month</span>
                </div>
                <div className="text-xs text-gray-500">4-10 locations intelligence</div>
              </div>
              <div className="p-6">
                <ul className="space-y-3 text-sm text-gray-700">
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Unlimited competitors + 100+ keywords</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Daily website improvements</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Multi-location management (4-10 sites)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Dedicated account manager</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Monthly strategy sessions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-2">✓</span>
                    <span>Same-day response + VIP support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="text-center text-sm text-gray-600 leading-relaxed">
            All plans include continuous improvements • Intelligence + implementation • Cancel anytime
          </div>
        </div>
      </section>

      {/* Slide 7: The Investment */}
      <section className="min-h-screen flex flex-col justify-center px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-light text-gray-900 mb-3">The Investment</h1>
            <p className="text-lg text-gray-600">Raising $2M seed to accelerate product and growth</p>
          </div>

          <div className="text-center py-8 bg-gray-50 rounded-sm mb-12">
            <div className="text-sm uppercase tracking-wide text-gray-600 mb-4">Raising Seed Round</div>
            <div className="text-6xl font-light text-gray-900 mb-4">$2,000,000</div>
            <div className="text-gray-700">18-month runway to Series A milestones</div>
          </div>

          <div className="grid grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="space-y-6">
              <div className="text-sm font-medium text-gray-900 uppercase tracking-wide">Use of Funds</div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-700">Engineering & Product</span>
                    <span className="text-sm font-medium text-gray-900">40%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full">
                    <div className="w-2/5 h-2 bg-gray-900 rounded-full"></div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Expand team to 8 engineers, AI/ML capabilities</div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-700">Sales & Marketing</span>
                    <span className="text-sm font-medium text-gray-900">35%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-gray-900 rounded-full" style={{width: '35%'}}></div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Customer acquisition, content, partnerships</div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-700">Infrastructure & Ops</span>
                    <span className="text-sm font-medium text-gray-900">15%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-gray-900 rounded-full" style={{width: '15%'}}></div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Global monitoring network, scalability</div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-gray-700">General & Admin</span>
                    <span className="text-sm font-medium text-gray-900">10%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full">
                    <div className="h-2 bg-gray-900 rounded-full" style={{width: '10%'}}></div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Legal, accounting, operations</div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="text-sm font-medium text-gray-900 uppercase tracking-wide">18-Month Milestones</div>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 border-2 border-gray-900 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-900 font-medium">1,000 Paying Customers</div>
                    <div className="text-xs text-gray-600">Validated product-market fit</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 border-2 border-gray-900 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-900 font-medium">$100K MRR</div>
                    <div className="text-xs text-gray-600">Sustainable revenue growth</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 border-2 border-gray-900 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-900 font-medium">Team of 15</div>
                    <div className="text-xs text-gray-600">Engineering, sales, customer success</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 border-2 border-gray-900 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-900 font-medium">Enterprise Launch</div>
                    <div className="text-xs text-gray-600">White-label & advanced features</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="flex-shrink-0 w-6 h-6 border-2 border-gray-900 rounded-full flex items-center justify-center mt-1">
                    <div className="w-2 h-2 bg-gray-900 rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-900 font-medium">Series A Position</div>
                    <div className="text-xs text-gray-600">Ready for next funding round</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 8: Contact */}
      <section className="min-h-screen flex flex-col justify-center px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-12 text-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-light text-gray-900">Get in Touch</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We're excited to discuss how Nine-Line.dev is transforming website reliability
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-8 max-w-3xl mx-auto">
              <div className="bg-gray-50 p-8 rounded-sm">
                <div className="text-3xl mb-4">📧</div>
                <div className="text-sm font-medium text-gray-900 mb-2">Email</div>
                <div className="text-gray-700">founders@nine-line.dev</div>
              </div>
              <div className="bg-gray-50 p-8 rounded-sm">
                <div className="text-3xl mb-4">🌐</div>
                <div className="text-sm font-medium text-gray-900 mb-2">Website</div>
                <div className="text-gray-700">nine-line.dev</div>
              </div>
            </div>
            
            <div className="pt-12">
              <div className="text-3xl font-light text-gray-900">Thank You</div>
            </div>
          </div>
        </div>
      </section>

      {/* Slide 9: References */}
      <section className="min-h-screen flex flex-col justify-center px-8 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-4xl font-light text-gray-900 mb-3">References & Sources</h1>
            <p className="text-lg text-gray-600">Data sources for statistics and market sizing</p>
          </div>

          <div className="space-y-8 text-left">
            <div className="space-y-6">
              <div className="border-l-2 border-gray-900 pl-6">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Market Sizing</h3>
                <ul className="space-y-2 text-xs text-gray-700 leading-relaxed">
                  <li>• <span className="font-medium">$8.5B APM Market (2024):</span> Grand View Research, <a href="https://www.grandviewresearch.com/industry-analysis/application-performance-management-market" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Application Performance Monitoring Market Size Report, 2024-2030</a></li>
                  <li>• <span className="font-medium">18.5% CAGR:</span> Grand View Research & MarketsandMarkets APM industry reports</li>
                  <li>• <span className="font-medium">$16.7B projected (2030):</span> Compound annual growth calculation from base market</li>
                  <li>• <span className="font-medium">$5.7T E-commerce market:</span> Statista, <a href="https://www.statista.com/statistics/379046/worldwide-retail-e-commerce-sales/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Global E-commerce Market Size 2024</a></li>
                </ul>
              </div>

              <div className="border-l-2 border-gray-900 pl-6">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Downtime & Performance Statistics</h3>
                <ul className="space-y-2 text-xs text-gray-700 leading-relaxed">
                  <li>• <span className="font-medium">$5.6M average cost per hour:</span> Gartner, <a href="https://blogs.gartner.com/andrew-lerner/2014/07/16/the-cost-of-downtime/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Cost of Downtime</a> (enterprise average)</li>
                  <li>• <span className="font-medium">88% won't return after bad experience:</span> Google/SOASTA Research, Mobile Page Speed Studies</li>
                  <li>• <span className="font-medium">53% bounce rate (3+ seconds):</span> Google, <a href="https://www.thinkwithgoogle.com/marketing-strategies/app-and-mobile/mobile-page-speed-new-industry-benchmarks/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Find Out How You Stack Up to New Industry Benchmarks</a></li>
                  <li>• <span className="font-medium">99.9% = 8.7 hours downtime:</span> Standard SLA calculation (365 days × 24 hours × 0.1%)</li>
                </ul>
              </div>

              <div className="border-l-2 border-gray-900 pl-6">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Target Market</h3>
                <ul className="space-y-2 text-xs text-gray-700 leading-relaxed">
                  <li>• <span className="font-medium">50M+ SMBs globally:</span> World Bank, <a href="https://www.worldbank.org/en/topic/smefinance" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Small and Medium Enterprises (SMEs) Finance</a></li>
                  <li>• <span className="font-medium">30K+ SaaS companies:</span> Bessemer Venture Partners, <a href="https://www.bvp.com/atlas/state-of-the-cloud" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">State of the Cloud 2024</a></li>
                  <li>• <span className="font-medium">200M+ websites:</span> <a href="https://news.netcraft.com/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Netcraft Web Server Survey</a> & Internet Live Stats</li>
                </ul>
              </div>

              <div className="border-l-2 border-gray-900 pl-6">
                <h3 className="text-lg font-medium text-gray-900 mb-3">Financial Assumptions</h3>
                <ul className="space-y-2 text-xs text-gray-700 leading-relaxed">
                  <li>• <span className="font-medium">$60 ARPU:</span> Based on $1,995-$4,995/mo pricing tiers, weighted average for SMB/mid-market mix</li>
                  <li>• <span className="font-medium">4% monthly churn:</span> Industry standard for B2B SaaS tools (source: <a href="https://www.profitwell.com/recur/all/churn-rate-benchmarks" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">ProfitWell SaaS Metrics</a>)</li>
                  <li>• <span className="font-medium">85% gross margin:</span> Typical for SaaS platforms with cloud infrastructure costs (source: <a href="https://www.keypup.io/blog/saas-benchmarks" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">SaaS Benchmarks</a>)</li>
                  <li>• <span className="font-medium">12-15% free to paid conversion:</span> Industry benchmark for freemium SaaS products (source: <a href="https://openviewpartners.com/blog/freemium-conversion-rates/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">OpenView Partners Research</a>)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PitchDeck9dlj4rmvjdekpli2ktpeyt;