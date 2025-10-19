import { ArrowRight, ChevronLeft, ChevronRight, Clock, Code2, Eye, Info, Lock, Monitor, Shield, Smartphone, TrendingUp, Trophy, Zap } from 'lucide-react';
import React, { useCallback, useEffect, useRef, useState } from 'react';

export default function WebAgencyLanding() {
  const testimonialsRef = useRef(null);
  const pricingRef = useRef(null);

  // Transformation section state
  const [showMobileVersion, setShowMobileVersion] = useState(false);
  const [selectedTimeframe, setSelectedTimeframe] = useState('Day 90');
  const [hoveredMetric, setHoveredMetric] = useState(null);
  const [expandedDetails, setExpandedDetails] = useState({});
  const [sliderPosition, setSliderPosition] = useState(0); // 0 = before, 100 = after
  const [selectedIndustry, setSelectedIndustry] = useState('Healthcare');
  const [animatedCounters, setAnimatedCounters] = useState({});
  const [metricsVisible, setMetricsVisible] = useState(false);

  const transformationRef = useRef(null);

  const scroll = (ref, direction) => {
    if (ref.current) {
      const scrollAmount = ref.current.offsetWidth * 0.8;
      ref.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  // Animation helpers
  const animateCounter = useCallback((start, end, duration, key) => {
    const startTime = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentValue = Math.floor(start + (end - start) * progress);

      setAnimatedCounters(prev => ({ ...prev, [key]: currentValue }));

      if (progress === 1) {
        clearInterval(timer);
      }
    }, 16);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !metricsVisible) {
            setMetricsVisible(true);
            // Animate counters when metrics come into view
            animateCounter(0, 425, 2000, 'speed');
            animateCounter(0, 67, 2000, 'conversions');
            animateCounter(0, 89, 2000, 'seo');
          }
        });
      },
      { threshold: 0.3 }
    );

    if (transformationRef.current) {
      observer.observe(transformationRef.current);
    }

    return () => observer.disconnect();
  }, [metricsVisible, animateCounter]);

  // Industry-specific data
  const industryData = {
    Healthcare: {
      metrics: { loadTime: '0.8s', mobile: '98/100', security: 'HIPAA A+', position: '#1' },
      specifics: 'HIPAA compliance, patient data security, accessibility standards'
    },
    Legal: {
      metrics: { loadTime: '0.7s', mobile: '99/100', security: 'A+ Grade', position: '#1' },
      specifics: 'Client confidentiality, SSL encryption, professional credibility'
    },
    'E-commerce': {
      metrics: { loadTime: '0.6s', mobile: '99/100', security: 'PCI DSS A+', position: '#1' },
      specifics: 'Payment security, checkout optimization, inventory management'
    },
    'Real Estate': {
      metrics: { loadTime: '0.9s', mobile: '97/100', security: 'A+ Grade', position: '#1' },
      specifics: 'MLS integration, lead capture, mobile-first design'
    }
  };

  const timeframeData = {
    'Day 30': { loadTime: '2.1s', mobile: '78/100', security: 'B+ Grade', position: '#4' },
    'Day 60': { loadTime: '1.2s', mobile: '89/100', security: 'A- Grade', position: '#2' },
    'Day 90': { loadTime: '0.8s', mobile: '98/100', security: 'A+ Grade', position: '#1' }
  };

  const toggleDetails = (section) => {
    setExpandedDetails(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
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

        {/* The Transformation */}
        <div ref={transformationRef}>
          <div className="text-center mb-16">
            <h3 className="text-2xl font-light mb-3 tracking-tight">The Transformation</h3>
            <p className="text-slate-600 font-light">Before and after continuous optimization</p>

            {/* Industry Selector */}
            <div className="mt-8 flex justify-center">
              <div className="inline-flex bg-slate-100 rounded-lg p-1">
                {Object.keys(industryData).map((industry) => (
                  <button
                    key={industry}
                    onClick={() => setSelectedIndustry(industry)}
                    className={`px-4 py-2 text-xs font-medium rounded-md transition-all ${selectedIndustry === industry
                      ? 'bg-white text-slate-900 shadow-sm'
                      : 'text-slate-600 hover:text-slate-900'
                      }`}
                  >
                    {industry}
                  </button>
                ))}
              </div>
            </div>

            {/* Toggle Controls */}
            <div className="mt-6 flex justify-center gap-4">
              <button
                onClick={() => setShowMobileVersion(!showMobileVersion)}
                className="flex items-center gap-2 px-3 py-2 text-xs text-slate-600 hover:text-slate-900 border border-slate-200 rounded-md hover:bg-slate-50 transition-colors"
              >
                {showMobileVersion ? <Monitor className="w-3 h-3" /> : <Smartphone className="w-3 h-3" />}
                Show {showMobileVersion ? 'Desktop' : 'Mobile'} Version
              </button>

              <div className="flex items-center gap-2">
                <Clock className="w-3 h-3 text-slate-400" />
                <select
                  value={selectedTimeframe}
                  onChange={(e) => setSelectedTimeframe(e.target.value)}
                  className="text-xs bg-white border border-slate-200 rounded-md px-2 py-1 text-slate-600 focus:outline-none focus:ring-1 focus:ring-slate-300"
                >
                  {Object.keys(timeframeData).map((timeframe) => (
                    <option key={timeframe} value={timeframe}>{timeframe}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Before/After Slider */}
          <div className="mb-8">
            <div className="flex items-center justify-center gap-4 mb-4">
              <span className="text-xs text-slate-500">Before</span>
              <div className="relative w-48 h-1 bg-slate-200 rounded-full">
                <div
                  className="absolute top-0 left-0 h-full bg-slate-900 rounded-full transition-all duration-300"
                  style={{ width: `${sliderPosition}%` }}
                ></div>
                <button
                  className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-slate-900 rounded-full transition-all duration-300 hover:scale-110"
                  style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%) translateY(-50%)' }}
                  onMouseDown={(e) => {
                    const slider = e.currentTarget.parentElement;
                    const rect = slider.getBoundingClientRect();
                    const handleMouseMove = (e) => {
                      const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
                      const percentage = (x / rect.width) * 100;
                      setSliderPosition(percentage);
                    };
                    const handleMouseUp = () => {
                      document.removeEventListener('mousemove', handleMouseMove);
                      document.removeEventListener('mouseup', handleMouseUp);
                    };
                    document.addEventListener('mousemove', handleMouseMove);
                    document.addEventListener('mouseup', handleMouseUp);
                  }}
                />
              </div>
              <span className="text-xs text-slate-500">After</span>
            </div>
          </div>

          {/* Before/After Comparison */}
          <div className="relative mb-16">
            {/* BEFORE */}
            {sliderPosition <= 50 && (
              <div className="space-y-6 bg-red-50 border-2 border-red-200 rounded-xl p-6 relative transition-all duration-500 ease-in-out">
                {/* Warning Badge */}
                <div className="absolute -top-3 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                  <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  PROBLEMS
                </div>
                <div className="flex items-center justify-between mt-6">
                  <span className="text-xs font-medium tracking-wider text-red-600">BEFORE OPTIMIZATION</span>
                  <span className="text-xs text-red-500 font-medium">Struggling Website</span>
                </div>

                {/* Browser Preview */}
                <div className={`border-2 border-red-300 rounded-lg overflow-hidden shadow-md ${showMobileVersion ? 'w-64 mx-auto' : ''}`}>
                  {/* Chrome Bar */}
                  <div className="bg-red-100 px-4 py-2 flex items-center gap-2 border-b border-red-200">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400 animate-pulse"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-orange-400"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                    </div>
                    <div className="flex-1 h-5 bg-red-50 rounded-sm border border-red-300 flex items-center px-2">
                      <div className="w-3 h-3 text-red-500">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="12" cy="12" r="10" />
                          <line x1="15" y1="9" x2="9" y2="15" />
                          <line x1="9" y1="9" x2="15" y2="15" />
                        </svg>
                      </div>
                      <span className="text-xs text-red-700 ml-2 font-medium">⚠ Not Secure • Slow</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="aspect-[16/10] bg-red-25 p-6 relative">
                    {/* Cluttered header */}
                    <div className="h-12 bg-gradient-to-r from-red-200 to-orange-200 mb-4 flex items-center justify-between px-4 border border-red-300">
                      <div className="w-20 h-4 bg-red-400 animate-pulse"></div>
                      <div className="flex gap-2">
                        <div className="w-12 h-3 bg-red-400"></div>
                        <div className="w-12 h-3 bg-orange-400"></div>
                        <div className="w-12 h-3 bg-yellow-400"></div>
                      </div>
                    </div>

                    {/* Poor layout */}
                    <div className="space-y-4">
                      <div className="grid grid-cols-3 gap-2">
                        <div className="h-24 bg-red-200 border border-red-300 relative">
                          <div className="absolute inset-0 bg-red-100 opacity-50 animate-pulse"></div>
                        </div>
                        <div className="h-24 bg-orange-200 border border-orange-300 relative">
                          <div className="absolute inset-0 bg-orange-100 opacity-50 animate-pulse"></div>
                        </div>
                        <div className="h-24 bg-yellow-200 border border-yellow-300 relative">
                          <div className="absolute inset-0 bg-yellow-100 opacity-50 animate-pulse"></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-3 bg-red-200 w-full animate-pulse"></div>
                        <div className="h-3 bg-red-200 w-5/6 animate-pulse"></div>
                        <div className="h-3 bg-red-200 w-4/6 animate-pulse"></div>
                      </div>
                      {/* Broken elements */}
                      <div className="flex items-center gap-2 mt-4">
                        <div className="w-4 h-4 bg-red-500 rounded text-white flex items-center justify-center text-xs">✗</div>
                        <span className="text-xs text-red-600">Broken links • Layout shift • Poor UX</span>
                      </div>
                    </div>

                    {/* Slow loading indicator */}
                    <div className="absolute bottom-4 right-4">
                      <div className="flex items-center gap-2 text-xs text-red-600 bg-red-100 px-2 py-1 rounded border border-red-300">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
                        <span className="font-medium">Still Loading... 4.2s</span>
                      </div>
                    </div>
                    {/* Error indicators */}
                    <div className="absolute top-4 left-4 flex flex-col gap-1">
                      <div className="bg-red-600 text-white text-xs px-2 py-1 rounded flex items-center gap-1 shadow-lg border border-red-700 animate-pulse">
                        <span className="text-red-200">⚠</span> Security Risk
                      </div>
                      <div className="bg-orange-600 text-white text-xs px-2 py-1 rounded flex items-center gap-1 shadow-lg border border-orange-700">
                        <span className="text-orange-200">📱</span> Mobile Issues
                      </div>
                      <div className="bg-yellow-600 text-white text-xs px-2 py-1 rounded flex items-center gap-1 shadow-lg border border-yellow-700">
                        <span className="text-yellow-200">⏳</span> Slow Loading
                      </div>
                    </div>
                  </div>
                </div>

                {/* Metrics */}
                <div className="space-y-4">
                  {[
                    {
                      label: 'Load Time',
                      value: '4.2s',
                      bar: 42,
                      icon: Clock,
                      tooltip: 'Slow loading affects user experience and search rankings'
                    },
                    {
                      label: 'Mobile Score',
                      value: '62/100',
                      bar: 62,
                      icon: Smartphone,
                      tooltip: 'Poor mobile optimization loses mobile-first indexing benefits'
                    },
                    {
                      label: 'Security',
                      value: 'C Grade',
                      bar: 60,
                      icon: Lock,
                      tooltip: 'Weak security protocols expose vulnerabilities'
                    },
                    {
                      label: 'Market Position',
                      value: '#7',
                      bar: 30,
                      icon: TrendingUp,
                      tooltip: 'Low search rankings reduce organic traffic significantly'
                    }
                  ].map((metric, idx) => (
                    <div
                      key={idx}
                      className="relative"
                      onMouseEnter={() => setHoveredMetric(`before-${idx}`)}
                      onMouseLeave={() => setHoveredMetric(null)}
                    >
                      <div className="flex justify-between items-center mb-2 text-xs">
                        <div className="flex items-center gap-2">
                          <metric.icon className="w-3 h-3 text-red-500" />
                          <span className="text-slate-500 font-light">{metric.label}</span>
                          <Info className="w-3 h-3 text-slate-300 cursor-help" />
                        </div>
                        <span className="text-red-700 font-medium">{metric.value}</span>
                      </div>
                      <div className="w-full h-1.5 bg-red-100 rounded-full overflow-hidden border border-red-200">
                        <div
                          className="h-full bg-gradient-to-r from-red-400 to-red-500 rounded-full transition-all duration-1000 ease-out relative"
                          style={{
                            width: metricsVisible ? `${metric.bar}%` : '0%',
                            transitionDelay: `${idx * 200}ms`
                          }}
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-red-600 opacity-50 animate-pulse"></div>
                        </div>
                      </div>

                      {/* Tooltip */}
                      {hoveredMetric === `before-${idx}` && (
                        <div className="absolute bottom-full left-0 mb-2 p-2 bg-slate-800 text-white text-xs rounded shadow-lg z-10 w-48">
                          {metric.tooltip}
                          <div className="absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-800"></div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* AFTER */}
            {sliderPosition > 50 && (
              <div className="space-y-6 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 border border-slate-200/50 rounded-xl p-8 relative shadow-xl backdrop-blur-sm transition-all duration-500 ease-in-out">
                {/* Success Badge */}
                <div className="absolute -top-4 left-6 bg-gradient-to-r from-slate-900 to-slate-700 text-white px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-2 shadow-lg">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  ENTERPRISE OPTIMIZED
                </div>
                <div className="flex items-center justify-between mt-8">
                  <span className="text-xs font-medium tracking-wider text-slate-600 uppercase">After 9Line Optimization</span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-500 font-medium">{selectedIndustry} • {selectedTimeframe}</span>
                    <button
                      onClick={() => toggleDetails('technical')}
                      className="text-xs text-slate-600 hover:text-slate-900 underline font-medium"
                    >
                      Technical Details
                    </button>
                  </div>
                </div>

                {/* Technical Details Expandable */}
                {expandedDetails.technical && (
                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4">
                    <div className="text-xs text-slate-600 space-y-2">
                      <div><strong>Industry Specifics:</strong> {industryData[selectedIndustry].specifics}</div>
                      <div><strong>Optimization Stack:</strong> CDN, Image compression, Database optimization, SSL/TLS 1.3</div>
                      <div><strong>Monitoring:</strong> 24/7 uptime monitoring, performance tracking, security scans</div>
                    </div>
                  </div>
                )}

                {/* Browser Preview */}
                <div className={`border border-slate-200/60 rounded-xl overflow-hidden shadow-2xl ${showMobileVersion ? 'w-64 mx-auto' : ''} relative bg-white`}>
                  {/* Premium glow effect */}
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-slate-400/20 to-blue-400/20 rounded-xl blur-sm opacity-60"></div>
                  <div className="relative bg-white rounded-xl overflow-hidden">
                    {/* Chrome Bar */}
                    <div className="bg-gradient-to-r from-slate-50 to-slate-100/50 px-4 py-3 flex items-center gap-2 border-b border-slate-200/50">
                      <div className="flex gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-500 shadow-sm"></div>
                        <div className="w-3 h-3 rounded-full bg-gradient-to-br from-amber-400 to-amber-500 shadow-sm"></div>
                        <div className="w-3 h-3 rounded-full bg-gradient-to-br from-red-400 to-red-500 shadow-sm"></div>
                      </div>
                      <div className="flex-1 h-6 bg-white rounded-md border border-slate-200 flex items-center px-3 shadow-sm">
                        <div className="w-4 h-4 text-emerald-600">
                          <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 1L3 5v6c0 5.55 3.84 10 9 9 5.16-1 9-4.45 9-9V5l-9-4z" />
                          </svg>
                        </div>
                        <span className="text-xs text-slate-700 ml-2 font-medium tracking-wide">Secure • Optimized • Enterprise</span>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="aspect-[16/10] bg-gradient-to-br from-white to-slate-50/30 p-8 relative">
                    {/* Premium header */}
                    <div className="h-14 mb-8 flex items-center justify-between bg-gradient-to-r from-slate-50 to-white rounded-lg px-6 border border-slate-200/50 shadow-sm">
                      <div className="w-20 h-6 bg-gradient-to-r from-slate-900 to-slate-700 rounded shadow-sm"></div>
                      <div className="flex gap-3">
                        <div className="w-12 h-4 bg-slate-200 rounded shadow-sm"></div>
                        <div className="w-12 h-4 bg-slate-300 rounded shadow-sm"></div>
                        <div className="w-16 h-4 bg-slate-900 text-white rounded text-xs flex items-center justify-center font-medium">PRO</div>
                      </div>
                    </div>

                    {/* Premium layout */}
                    <div className="space-y-8">
                      <div className="h-32 bg-gradient-to-br from-white via-slate-50 to-slate-100/50 rounded-xl border border-slate-200/60 shadow-sm flex items-center justify-center">
                        <div className="text-center space-y-4">
                          <div className="w-40 h-5 bg-gradient-to-r from-slate-800 to-slate-600 rounded mx-auto shadow-sm"></div>
                          <div className="w-56 h-3 bg-slate-300 rounded mx-auto"></div>
                          <div className="flex justify-center gap-3 mt-3">
                            <div className="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
                            <div className="w-2.5 h-2.5 bg-slate-400 rounded-full"></div>
                            <div className="w-2.5 h-2.5 bg-slate-600 rounded-full"></div>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="h-18 border border-slate-200 rounded-xl bg-gradient-to-br from-white to-slate-50 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"></div>
                        <div className="h-18 border border-slate-200 rounded-xl bg-gradient-to-br from-white to-slate-50 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"></div>
                        <div className="h-18 border border-slate-200 rounded-xl bg-gradient-to-br from-white to-slate-50 shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105"></div>
                      </div>
                    </div>

                    {/* Fast loading indicator */}
                    <div className="absolute bottom-6 right-6">
                      <div className="flex items-center gap-2 text-xs text-slate-600 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200 shadow-lg">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                        <span className="font-semibold">0.8s load time</span>
                      </div>
                    </div>

                    {/* Success indicators */}
                    <div className="absolute top-6 left-6 flex flex-col gap-2">
                      <div className="bg-white/90 backdrop-blur-sm text-slate-700 text-xs px-3 py-2 rounded-lg flex items-center gap-2 shadow-lg border border-emerald-200">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                        <span className="font-semibold">A+ Security</span>
                      </div>
                      <div className="bg-white/90 backdrop-blur-sm text-slate-700 text-xs px-3 py-2 rounded-lg flex items-center gap-2 shadow-lg border border-blue-200">
                        <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                        <span className="font-semibold">98/100 Mobile</span>
                      </div>
                      <div className="bg-white/90 backdrop-blur-sm text-slate-700 text-xs px-3 py-2 rounded-lg flex items-center gap-2 shadow-lg border border-amber-200">
                        <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                        <span className="font-semibold">#1 Ranking</span>
                      </div>
                      <div className="bg-white/90 backdrop-blur-sm text-slate-700 text-xs px-3 py-2 rounded-lg flex items-center gap-2 shadow-lg border border-purple-200">
                        <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                        <span className="font-semibold">Ultra Fast</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Metrics */}
                <div className="space-y-4">
                  {[
                {
                  label: 'Load Time',
                  value: timeframeData[selectedTimeframe].loadTime,
                  bar: selectedTimeframe === 'Day 90' ? 92 : selectedTimeframe === 'Day 60' ? 78 : 52,
                  change: '+425%',
                  icon: Zap,
                  tooltip: 'Optimized with CDN, image compression, and code splitting'
                },
                {
                  label: 'Mobile Score',
                  value: timeframeData[selectedTimeframe].mobile,
                  bar: selectedTimeframe === 'Day 90' ? 98 : selectedTimeframe === 'Day 60' ? 89 : 78,
                  change: '+58%',
                  icon: Smartphone,
                  tooltip: 'Mobile-first design with progressive enhancement'
                },
                {
                  label: 'Security',
                  value: industryData[selectedIndustry].metrics.security,
                  bar: selectedTimeframe === 'Day 90' ? 100 : selectedTimeframe === 'Day 60' ? 85 : 70,
                  change: 'Perfect',
                  icon: Shield,
                  tooltip: `Industry-specific security: ${industryData[selectedIndustry].specifics.split(',')[0]}`
                },
                {
                  label: 'Market Position',
                  value: timeframeData[selectedTimeframe].position,
                  bar: selectedTimeframe === 'Day 90' ? 100 : selectedTimeframe === 'Day 60' ? 85 : 70,
                  change: '★',
                  icon: Trophy,
                  tooltip: 'SEO optimization and competitive analysis drive rankings'
                }
              ].map((metric, idx) => (
                <div
                  key={idx}
                  className="relative"
                  onMouseEnter={() => setHoveredMetric(`after-${idx}`)}
                  onMouseLeave={() => setHoveredMetric(null)}
                >
                  <div className="flex justify-between items-center mb-2 text-xs">
                    <div className="flex items-center gap-2">
                      <metric.icon className="w-3 h-3 text-slate-600" />
                      <span className="text-slate-600 font-light">{metric.label}</span>
                      <Info className="w-3 h-3 text-slate-400 cursor-help" />
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-slate-900 font-semibold">{metric.value}</span>
                      <span className="text-emerald-700 text-[10px] font-bold bg-emerald-100 px-2 py-0.5 rounded-full">{metric.change}</span>
                    </div>
                  </div>
                  <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden border border-slate-200">
                    <div
                      className="h-full bg-gradient-to-r from-slate-700 to-slate-900 rounded-full transition-all duration-1000 ease-out relative"
                      style={{
                        width: metricsVisible ? `${metric.bar}%` : '0%',
                        transitionDelay: `${idx * 200 + 400}ms`
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-800 opacity-50"></div>
                      <div className="absolute right-0 top-1/2 w-1 h-1 bg-white rounded-full transform -translate-y-1/2 animate-ping"></div>
                    </div>
                  </div>

                  {/* Tooltip */}
                  {hoveredMetric === `after-${idx}` && (
                    <div className="absolute bottom-full left-0 mb-2 p-2 bg-slate-800 text-white text-xs rounded shadow-lg z-10 w-48">
                      {metric.tooltip}
                      <div className="absolute top-full left-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-slate-800"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          )}
        </div>
      </div>

          {/* Impact Summary */}
          <div className="border-t border-slate-200 pt-12">
    <div className="flex items-center justify-between mb-8">
      <h4 className="text-lg font-light text-slate-900">Overall Impact</h4>
      <button
        onClick={() => toggleDetails('impact')}
        className="text-xs text-slate-600 hover:text-slate-900 underline"
      >
        View Breakdown
      </button>
    </div>

    {/* Impact Details */}
    {expandedDetails.impact && (
      <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-8">
        <div className="grid md:grid-cols-2 gap-6 text-sm">
          <div>
            <h5 className="font-medium mb-3">Performance Gains</h5>
            <ul className="space-y-2 text-slate-600">
              <li>• Core Web Vitals optimization</li>
              <li>• Image and asset compression</li>
              <li>• Database query optimization</li>
              <li>• CDN implementation</li>
            </ul>
          </div>
          <div>
            <h5 className="font-medium mb-3">Business Impact</h5>
            <ul className="space-y-2 text-slate-600">
              <li>• Reduced bounce rates</li>
              <li>• Improved conversion funnels</li>
              <li>• Higher search rankings</li>
              <li>• Enhanced user experience</li>
            </ul>
          </div>
        </div>
      </div>
    )}

    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      {[
        {
          value: animatedCounters.speed || 0,
          suffix: '%',
          label: 'Faster',
          description: 'Page load time improvement'
        },
        {
          value: animatedCounters.conversions || 0,
          suffix: '%',
          label: 'More Conversions',
          description: 'Conversion rate increase'
        },
        {
          value: animatedCounters.seo || 0,
          suffix: '%',
          label: 'Better SEO',
          description: 'Search ranking improvement'
        },
        {
          value: '∞',
          suffix: '',
          label: 'Staying Power',
          description: 'Continuous optimization'
        }
      ].map((stat, idx) => (
        <div
          key={idx}
          className="group cursor-help"
          onMouseEnter={() => setHoveredMetric(`summary-${idx}`)}
          onMouseLeave={() => setHoveredMetric(null)}
        >
          <div className="text-4xl font-light text-slate-900 mb-2 transition-colors group-hover:text-slate-700">
            {stat.value}{stat.suffix}
          </div>
          <div className="text-xs text-slate-500 font-light tracking-wide">{stat.label}</div>

          {/* Hover description */}
          {hoveredMetric === `summary-${idx}` && (
            <div className="absolute bg-slate-800 text-white text-xs rounded shadow-lg z-10 p-2 mt-2 left-1/2 transform -translate-x-1/2">
              {stat.description}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-slate-800"></div>
            </div>
          )}
        </div>
      ))}
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
