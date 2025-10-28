import { AlertTriangle, ArrowRight, CheckCircle, ChevronDown, ChevronLeft, ChevronRight, Code, Eye, Lightbulb, MousePointerClick, Search, Shield, Smartphone, TrendingUp, Users, Zap, Lock, Gauge, Settings, Brain, Menu, X } from 'lucide-react';
import { useRef, useState } from 'react';
import { trackCTAClick } from './utils/analytics';

import { ContactForm } from './components/ContactForm';
import { Modal } from './components/Modal';

function WebAgencyLanding() {
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const pricingScrollRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isYearly, setIsYearly] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scroll = (ref: React.RefObject<HTMLDivElement>, direction: 'left' | 'right') => {
    if (ref.current) {
      const scrollAmount = ref.current.offsetWidth * 0.8;
      ref.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const handleFormSubmit = async (data: { email: string; domain?: string }) => {
    console.log('Form submitted:', data);
    // TODO: Handle form submission (e.g., send to API)
    setIsModalOpen(false);
  };

  const handleCTAClick = (ctaName: string, location: string) => {
    trackCTAClick(ctaName, location);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-8 py-6 flex justify-between items-center">
          <div className="text-2xl font-light tracking-tight">
            <span className="font-semibold text-slate-900">9line</span>
            <span className="text-slate-400">.dev</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection(aboutRef)}
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection(servicesRef)}
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection(pricingRef)}
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection(contactRef)}
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Contact
            </button>
            <button
              onClick={() => handleCTAClick('See Where You Rank', 'navigation')}
              className="px-6 py-2 text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 transition-colors"
            >
              See Where You Rank →
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-slate-600 hover:text-slate-900 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-b border-slate-200">
            <div className="px-8 py-4 space-y-4">
              <button
                onClick={() => scrollToSection(aboutRef)}
                className="block w-full text-left text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors py-2"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection(servicesRef)}
                className="block w-full text-left text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors py-2"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection(pricingRef)}
                className="block w-full text-left text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors py-2"
              >
                Pricing
              </button>
              <button
                onClick={() => scrollToSection(contactRef)}
                className="block w-full text-left text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors py-2"
              >
                Contact
              </button>
              <button
                onClick={() => {
                  handleCTAClick('See Where You Rank', 'navigation');
                  setIsMobileMenuOpen(false);
                }}
                className="block w-full text-left px-6 py-2 text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 transition-colors mt-4"
              >
                See Where You Rank →
              </button>
            </div>
          </div>
        )}
      </nav>

      <section className="pt-40 pb-32 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 border border-slate-200 rounded-full px-4 py-1.5 mb-8 text-xs text-slate-600 font-light">
            AI-powered Fortune 500 insights · Trusted by 250+ SME business owners
          </div>

          <h1 className="text-6xl md:text-7xl font-light mb-8 leading-tight tracking-tight">
            Fast digital rescue
            <span className="block font-normal text-blue-600 mt-2">
              for busy business owners.
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            AI-powered competitive intelligence and smart automation that continuously evolves your digital presence. No guesswork. No tech headaches. Just results that compound.
          </p>

          <div className="flex justify-center mb-6">
            <button
              onClick={() => handleCTAClick('SEE WHERE YOU RANK', 'hero')}
              className="px-8 py-4 bg-slate-900 text-white hover:bg-slate-800 transition-colors text-sm font-medium tracking-wide"
            >
              SEE WHERE YOU RANK
            </button>
          </div>

          <p className="text-xs text-slate-500 font-light">
            Free intelligence report · No commitment
          </p>
        </div>
      </section>

      <section className="py-16 px-8 border-y border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
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

      <section ref={aboutRef} className="py-32 px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4 tracking-tight">Who We Are</h2>
            <p className="text-slate-600 font-light">Born from Fortune 500 consulting experience, focused on SME success.</p>
          </div>

          <div className="bg-white border border-slate-200 p-12">
            <div className="max-w-3xl mx-auto">
              <p className="text-lg text-slate-600 font-light leading-relaxed mb-8">
                We have extensive experience from the world's largest technology consulting firms working with Fortune 500 companies and fast-growing startups. But we realized: everyone ignores SME businesses, leaving them with generic solutions that don't move the needle.
              </p>

              <p className="text-lg text-slate-600 font-light leading-relaxed">
                Your business deserves the same strategic intelligence that Fortune 500 companies receive. We bridge that gap—bringing enterprise-level insights at prices that make sense for your business.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4 tracking-tight">Long-term Partnership, Not One-off Projects</h2>
            <p className="text-slate-600 font-light">Why smart business owners choose continuous improvement over expensive rebuilds</p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 mb-24">
            <div className="border border-red-200 bg-red-50 p-8">
              <div className="text-center mb-8">
                <AlertTriangle className="w-12 h-12 text-red-600 mx-auto mb-4" strokeWidth={1.5} />
                <h3 className="text-2xl font-light text-red-900 mb-2">Traditional Agencies</h3>
                <p className="text-red-700 font-light">Expensive rebuild cycle every 2-3 years</p>
              </div>
              <ul className="space-y-4 text-sm text-red-800 font-light">
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1">×</span>
                  <span>$15K-50K+ for complete rebuilds</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1">×</span>
                  <span>Technology becomes outdated quickly</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1">×</span>
                  <span>Long project timelines, business disruption</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1">×</span>
                  <span>No ongoing optimization or intelligence</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-red-600 mt-1">×</span>
                  <span>You're on your own after launch</span>
                </li>
              </ul>
            </div>

            <div className="border border-green-200 bg-green-50 p-8">
              <div className="text-center mb-8">
                <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" strokeWidth={1.5} />
                <h3 className="text-2xl font-light text-green-900 mb-2">9line.dev Partnership</h3>
                <p className="text-green-700 font-light">Manageable monthly subscription with continuous evolution</p>
              </div>
              <ul className="space-y-4 text-sm text-green-800 font-light">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                  <span>Save 70-85% vs. traditional rebuilds ($200-700/mo vs. $15K-50K)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                  <span>Always current with latest capabilities (monthly updates)</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                  <span>67% average conversion increase, no business disruption</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                  <span>Track 3-5 competitors + 25-50 keywords with AI analysis</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                  <span>Typical ROI payback within 30-60 days</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-slate-600 font-light mb-6 max-w-3xl mx-auto">
              Stop the expensive rebuild cycle. Establish a long-term relationship where we continuously improve your digital presence while you focus on running your business.
            </p>
            <button
              onClick={() => handleCTAClick('START YOUR PARTNERSHIP', 'partnership_value')}
              className="px-8 py-4 bg-slate-900 text-white hover:bg-slate-800 transition-colors text-sm font-medium tracking-wide"
            >
              START YOUR PARTNERSHIP
            </button>
          </div>
        </div>
      </section>

      <section className="py-32 px-8 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4 tracking-tight">
              Why Not WordPress, Wix, or Squarespace?
            </h2>
            <p className="text-slate-600 font-light max-w-2xl mx-auto">
              Smart business owners need AI-powered solutions, not DIY headaches that drain time and money.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 mb-24">
              {/* WordPress Problems Card */}
              <div className="border border-slate-200 bg-white p-8">
                <Shield className="w-8 h-8 text-orange-600 mb-6" strokeWidth={1.5} />
                <h3 className="text-2xl font-light mb-3">WordPress Problems</h3>
                <p className="text-slate-600 font-light leading-relaxed mb-4">Platform maintenance issues.</p>
                <ul className="space-y-3 text-sm text-slate-500 font-light leading-relaxed">
                  <li className="flex items-start gap-2">
                    <Lock className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                    <span>Constant security vulnerabilities and updates</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Settings className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                    <span>Technical complexity requires expert maintenance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                    <span>Plugin conflicts and compatibility issues</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Eye className="w-4 h-4 text-orange-600 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                    <span>No built-in competitive intelligence</span>
                  </li>
                </ul>
              </div>

              {/* Wix & Squarespace Problems Card */}
              <div className="border border-slate-200 bg-white p-8">
                <Gauge className="w-8 h-8 text-red-600 mb-6" strokeWidth={1.5} />
                <h3 className="text-2xl font-light mb-3">Wix & Squarespace Limits</h3>
                <p className="text-slate-600 font-light leading-relaxed mb-4">DIY platform limitations that hurt your business.</p>
                <ul className="space-y-3 text-sm text-slate-500 font-light leading-relaxed">
                  <li className="flex items-start gap-2">
                    <Gauge className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                    <span>3-6 second load times (Google recommends under 2s)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Users className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                    <span>DIY design—no professional guidance or strategy</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Smartphone className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                    <span>Generic templates (74% bounce rate typical)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Search className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                    <span>No competitive analysis or market intelligence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <TrendingUp className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                    <span>Limited SEO capabilities hurt search rankings</span>
                  </li>
                </ul>
              </div>

              {/* 9line.dev Solution Card */}
              <div className="bg-slate-900 text-white p-8">
                <Brain className="w-8 h-8 text-blue-400 mb-6" strokeWidth={1.5} />
                <h3 className="text-2xl font-light mb-3">9line.dev Professional Solution</h3>
                <p className="text-slate-300 font-light leading-relaxed mb-4">Expert-managed service that delivers real results.</p>
                <ul className="space-y-3 text-sm text-slate-300 font-light">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                    <span>Optimized load times for better user experience</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                    <span>Professional strategy and competitive intelligence</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                    <span>Custom design optimized for your market</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                    <span>AI-powered SEO optimization for higher rankings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                    <span>Continuous optimization vs set-and-forget platforms</span>
                  </li>
                </ul>
              </div>
            </div>

          <div className="text-center">
            <p className="text-lg text-slate-600 font-light mb-6">
              Stop wasting time and money on DIY platforms that don't deliver results. Get professional intelligence and optimization that actually moves the needle.
            </p>
            <button
              onClick={() => handleCTAClick('SEE WHERE YOU RANK', 'competitive_comparison')}
              className="px-8 py-4 bg-slate-900 text-white hover:bg-slate-800 transition-colors text-sm font-medium tracking-wide"
            >
              SEE WHERE YOU RANK
            </button>
          </div>
        </div>
      </section>

      <section ref={servicesRef} className="py-32 px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4 tracking-tight">AI Intelligence Platform</h2>
            <p className="text-slate-600 font-light">We don't build and leave. We don't just report. We use AI to continuously improve based on real performance data.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
            <div className="border border-slate-200 bg-white p-8">
              <Eye className="w-8 h-8 text-slate-900 mb-6" strokeWidth={1.5} />
              <h3 className="text-2xl font-light mb-3">AI Monitor</h3>
              <p className="text-slate-600 font-light leading-relaxed mb-4">Smart competitive intelligence powered by AI.</p>
              <p className="text-sm text-slate-500 font-light leading-relaxed">AI analyzes performance data specific to your industry patterns. Know exactly where you stand and when competitors make moves. Intelligent automation, not just reports.</p>
            </div>

            <div className="border border-slate-200 bg-white p-8">
              <Shield className="w-8 h-8 text-slate-900 mb-6" strokeWidth={1.5} />
              <h3 className="text-2xl font-light mb-3">Smart Audit</h3>
              <p className="text-slate-600 font-light leading-relaxed mb-4">AI-driven optimization opportunities discovery.</p>
              <p className="text-sm text-slate-500 font-light leading-relaxed">Stop paying for tools you don't know how to use. AI identifies exactly what needs fixing based on real performance data and predictive industry analysis. Technical SEO, design, speed—everything automated.</p>
            </div>

            <div className="border border-slate-200 bg-white p-8">
              <Code className="w-8 h-8 text-slate-900 mb-6" strokeWidth={1.5} />
              <h3 className="text-2xl font-light mb-3">AI Evolve</h3>
              <p className="text-slate-600 font-light leading-relaxed mb-4">Continuous intelligent implementation based on AI.</p>
              <p className="text-sm text-slate-500 font-light leading-relaxed">Unlike static providers who just keep sites running, AI makes them smarter every month. Design improvements, speed optimization, search ranking—always learning and improving automatically.</p>
            </div>

            <div className="border border-slate-200 bg-white p-8">
              <Smartphone className="w-8 h-8 text-slate-900 mb-6" strokeWidth={1.5} />
              <h3 className="text-2xl font-light mb-3">AI Build & Deploy</h3>
              <p className="text-slate-600 font-light leading-relaxed mb-4">Automatically rebuild with the latest technology stack.</p>
              <p className="text-sm text-slate-500 font-light leading-relaxed">Mobile-first responsive architecture that automatically updates with cutting-edge frameworks. Your site evolves with technology seamlessly through intelligent automation.</p>
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
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
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

              <div className="border-t border-slate-200 pt-6 mb-6">
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

              <div className="border-t border-slate-200 pt-6">
                <div className="flex items-center gap-2 mb-4">
                  <Lightbulb className="w-4 h-4 text-blue-600" strokeWidth={1.5} />
                  <div className="text-xs font-medium text-slate-400 tracking-wider">AI-POWERED SUGGESTIONS</div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <AlertTriangle className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                    <div>
                      <div className="text-sm font-medium text-slate-700 mb-1">High Priority</div>
                      <div className="text-xs text-slate-600">Add missing meta descriptions to 8 pages. Expected +15% organic traffic.</div>
                      <button className="text-xs text-blue-600 hover:text-blue-700 mt-1 font-medium">Implement →</button>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-green-50 border border-green-200 rounded-lg">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                    <div>
                      <div className="text-sm font-medium text-slate-700 mb-1">Quick Win</div>
                      <div className="text-xs text-slate-600">Optimize 3 images for faster loading. 0.4s speed improvement.</div>
                      <button className="text-xs text-blue-600 hover:text-blue-700 mt-1 font-medium">Auto-fix →</button>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 p-3 bg-slate-50 border border-slate-200 rounded-lg">
                    <TrendingUp className="w-4 h-4 text-slate-500 mt-0.5 flex-shrink-0" strokeWidth={1.5} />
                    <div>
                      <div className="text-sm font-medium text-slate-700 mb-1">Growth Opportunity</div>
                      <div className="text-xs text-slate-600">Target 5 new keywords competitors are ranking for. Est. +25% traffic.</div>
                      <button className="text-xs text-blue-600 hover:text-blue-700 mt-1 font-medium">Plan campaign →</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-24">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-light mb-3 tracking-tight">Competitive Intelligence</h3>
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

      <section className="py-32 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-light mb-4 tracking-tight">From Losing to Winning</h3>
            <p className="text-slate-600 font-light">Real client transformations that drive business growth</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-white border border-slate-200 p-8">
              <div className="flex items-center gap-3 mb-8">
                <Users className="w-8 h-8 text-slate-900" strokeWidth={1.5} />
                <h4 className="text-lg font-light text-slate-900">Customer Growth</h4>
              </div>
              <div className="space-y-4">
                <div className="text-center py-3 px-4 bg-slate-50 border border-slate-200">
                  <div className="text-xs text-slate-500 font-light mb-1">BEFORE</div>
                  <div className="text-slate-700 font-light">Losing visitors</div>
                </div>
                <div className="text-center">
                  <ArrowRight className="w-5 h-5 text-slate-400 mx-auto" strokeWidth={1.5} />
                </div>
                <div className="text-center py-3 px-4 bg-slate-50 border border-slate-200">
                  <div className="text-xs text-slate-500 font-light mb-1">AFTER</div>
                  <div className="text-3xl font-light text-slate-900 mb-1">+67%</div>
                  <div className="text-xs text-slate-500 font-light">more customers</div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 p-8">
              <div className="flex items-center gap-3 mb-8">
                <MousePointerClick className="w-8 h-8 text-slate-900" strokeWidth={1.5} />
                <h4 className="text-lg font-light text-slate-900">Visitor Retention</h4>
              </div>
              <div className="space-y-4">
                <div className="text-center py-3 px-4 bg-slate-50 border border-slate-200">
                  <div className="text-xs text-slate-500 font-light mb-1">BEFORE</div>
                  <div className="text-slate-700 font-light">72% leaving</div>
                </div>
                <div className="text-center">
                  <ArrowRight className="w-5 h-5 text-slate-400 mx-auto" strokeWidth={1.5} />
                </div>
                <div className="text-center py-3 px-4 bg-slate-50 border border-slate-200">
                  <div className="text-xs text-slate-500 font-light mb-1">AFTER</div>
                  <div className="text-3xl font-light text-slate-900 mb-1">15%</div>
                  <div className="text-xs text-slate-500 font-light">bounce rate</div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 p-8">
              <div className="flex items-center gap-3 mb-8">
                <Smartphone className="w-8 h-8 text-slate-900" strokeWidth={1.5} />
                <h4 className="text-lg font-light text-slate-900">Mobile Experience</h4>
              </div>
              <div className="space-y-4">
                <div className="text-center py-3 px-4 bg-slate-50 border border-slate-200">
                  <div className="text-xs text-slate-500 font-light mb-1">BEFORE</div>
                  <div className="text-slate-700 font-light">43% mobile</div>
                </div>
                <div className="text-center">
                  <ArrowRight className="w-5 h-5 text-slate-400 mx-auto" strokeWidth={1.5} />
                </div>
                <div className="text-center py-3 px-4 bg-slate-50 border border-slate-200">
                  <div className="text-xs text-slate-500 font-light mb-1">AFTER</div>
                  <div className="text-3xl font-light text-slate-900 mb-1">78%</div>
                  <div className="text-xs text-slate-500 font-light">mobile optimized</div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 p-8">
              <div className="flex items-center gap-3 mb-8">
                <Zap className="w-8 h-8 text-slate-900" strokeWidth={1.5} />
                <h4 className="text-lg font-light text-slate-900">Loading Speed</h4>
              </div>
              <div className="space-y-4">
                <div className="text-center py-3 px-4 bg-slate-50 border border-slate-200">
                  <div className="text-xs text-slate-500 font-light mb-1">BEFORE</div>
                  <div className="text-slate-700 font-light">4.8s slow</div>
                </div>
                <div className="text-center">
                  <ArrowRight className="w-5 h-5 text-slate-400 mx-auto" strokeWidth={1.5} />
                </div>
                <div className="text-center py-3 px-4 bg-slate-50 border border-slate-200">
                  <div className="text-xs text-slate-500 font-light mb-1">AFTER</div>
                  <div className="text-3xl font-light text-slate-900 mb-1">0.9s</div>
                  <div className="text-xs text-slate-500 font-light">lightning fast</div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 p-8">
              <div className="flex items-center gap-3 mb-8">
                <Search className="w-8 h-8 text-slate-900" strokeWidth={1.5} />
                <h4 className="text-lg font-light text-slate-900">Search Visibility</h4>
              </div>
              <div className="space-y-4">
                <div className="text-center py-3 px-4 bg-slate-50 border border-slate-200">
                  <div className="text-xs text-slate-500 font-light mb-1">BEFORE</div>
                  <div className="text-slate-700 font-light">Hidden online</div>
                </div>
                <div className="text-center">
                  <ArrowRight className="w-5 h-5 text-slate-400 mx-auto" strokeWidth={1.5} />
                </div>
                <div className="text-center py-3 px-4 bg-slate-50 border border-slate-200">
                  <div className="text-xs text-slate-500 font-light mb-1">AFTER</div>
                  <div className="text-3xl font-light text-slate-900 mb-1">+89%</div>
                  <div className="text-xs text-slate-500 font-light">search traffic</div>
                </div>
              </div>
            </div>

            <div className="bg-white border border-slate-200 p-8">
              <div className="flex items-center gap-3 mb-8">
                <TrendingUp className="w-8 h-8 text-slate-900" strokeWidth={1.5} />
                <h4 className="text-lg font-light text-slate-900">Google Rankings</h4>
              </div>
              <div className="space-y-4">
                <div className="text-center py-3 px-4 bg-slate-50 border border-slate-200">
                  <div className="text-xs text-slate-500 font-light mb-1">BEFORE</div>
                  <div className="text-slate-700 font-light">Page 7</div>
                </div>
                <div className="text-center">
                  <ArrowRight className="w-5 h-5 text-slate-400 mx-auto" strokeWidth={1.5} />
                </div>
                <div className="text-center py-3 px-4 bg-slate-50 border border-slate-200">
                  <div className="text-xs text-slate-500 font-light mb-1">AFTER</div>
                  <div className="text-3xl font-light text-slate-900 mb-1">Page 1</div>
                  <div className="text-xs text-slate-500 font-light">top rankings</div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 bg-slate-900 text-white hover:bg-slate-800 transition-colors text-sm font-medium tracking-wide"
            >
              SEE YOUR POTENTIAL
            </button>
          </div>
        </div>
      </section>

      <section className="py-32 px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4 tracking-tight">Your Website Is Your Digital Gateway</h2>
            <p className="text-slate-600 font-light">The professional representation that shows your commitment to excellence</p>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-slate-100 border border-slate-200 p-12 mb-16">
            <div className="max-w-3xl mx-auto text-center">
              <TrendingUp className="w-16 h-16 text-slate-900 mx-auto mb-8" strokeWidth={1.5} />
              <p className="text-2xl text-slate-700 font-light mb-8 leading-relaxed">
                "You are a hard-working professional that delivers best-in-class work to your clients. Your website is the gateway and digital representation—it should show that."
              </p>
              <p className="text-lg text-slate-600 font-light leading-relaxed">
                Your website is the digital representation of your business online. When potential clients find you, they're not just evaluating your services—they're evaluating your professionalism, attention to detail, and commitment to excellence.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6">
              <Eye className="w-12 h-12 text-slate-900 mx-auto mb-4" strokeWidth={1.5} />
              <h3 className="text-xl font-light mb-3">First Impressions Matter</h3>
              <p className="text-slate-600 font-light leading-relaxed">
                Within seconds, visitors judge your credibility. A professional, fast-loading site instantly communicates competence and trustworthiness.
              </p>
            </div>

            <div className="text-center p-6">
              <Shield className="w-12 h-12 text-slate-900 mx-auto mb-4" strokeWidth={1.5} />
              <h3 className="text-xl font-light mb-3">Trust & Authority</h3>
              <p className="text-slate-600 font-light leading-relaxed">
                Your digital presence reflects your work standards. A cutting-edge, well-maintained site shows you stay current with best practices.
              </p>
            </div>

            <div className="text-center p-6">
              <Users className="w-12 h-12 text-slate-900 mx-auto mb-4" strokeWidth={1.5} />
              <h3 className="text-xl font-light mb-3">Client Confidence</h3>
              <p className="text-slate-600 font-light leading-relaxed">
                When clients see your website performs flawlessly across all devices, they gain confidence in your ability to deliver excellence.
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-slate-600 font-light mb-6 max-w-3xl mx-auto">
              Don't let an outdated or slow website undermine the quality work you deliver. Your digital gateway should reflect the same excellence your clients experience working with you.
            </p>
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
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white border border-slate-200 rounded-full flex items-center justify-center hover:bg-slate-50 transition-colors"
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
                    "Their AI-powered competitive intelligence showed exactly where we were losing to competitors. The smart automation handles everything while I focus on my business. 80% of our leads come from our AI-optimized site."
                  </p>
                  <div>
                    <div className="font-medium text-sm">Tom Richardson</div>
                    <div className="text-xs text-slate-500 font-light mt-1">Owner, Richardson HVAC</div>
                  </div>
                </div>

                <div className="flex-shrink-0 w-96 snap-start border border-slate-200 bg-white p-10">
                  <p className="text-slate-600 font-light mb-8 leading-relaxed italic">
                    "The AI-driven monthly intelligence reports show exactly how we stack against big dental chains. Machine learning optimization helped us outrank them consistently. Google sends us 15-20 qualified patients weekly. Best business investment ever."
                  </p>
                  <div>
                    <div className="font-medium text-sm">Dr. Sarah Kim</div>
                    <div className="text-xs text-slate-500 font-light mt-1">Owner, Lakeside Dental</div>
                  </div>
                </div>

                <div className="flex-shrink-0 w-96 snap-start border border-slate-200 bg-white p-10">
                  <p className="text-slate-600 font-light mb-8 leading-relaxed italic">
                    "While competitors waste money on WordPress agencies and Wix consultants, I get AI-powered enterprise intelligence at a fraction of the cost. Smart automation consistently outranks companies spending 10x more. It's not even close."
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
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white border border-slate-200 rounded-full flex items-center justify-center hover:bg-slate-50 transition-colors"
            >
              <ChevronRight className="w-5 h-5 text-slate-600" />
            </button>
          </div>
        </div>
      </section>

      <section ref={pricingRef} className="py-32 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4 tracking-tight">Pricing</h2>
            <p className="text-slate-600 font-light mb-4">Starting at $199/month · Enterprise-level intelligence at a fraction of the cost</p>
            <p className="text-center text-xs text-slate-500 font-light mb-8">
              Trusted by 500+ businesses · No setup fees · Cancel anytime
            </p>
            
            <div className="flex items-center justify-center gap-4 mb-8">
              <span className={`text-sm font-medium ${!isYearly ? 'text-slate-900' : 'text-slate-500'}`}>
                Monthly
              </span>
              <button
                onClick={() => setIsYearly(!isYearly)}
                className={`relative inline-flex h-6 w-12 items-center rounded-full transition-colors ${
                  !isYearly ? 'bg-slate-900' : 'bg-slate-300'
                }`}
              >
                <span
                  className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                    isYearly ? 'translate-x-7' : 'translate-x-1'
                  }`}
                />
              </button>
              <span className={`text-sm font-medium ${isYearly ? 'text-slate-900' : 'text-slate-500'}`}>
                Yearly
              </span>
              {isYearly && (
                <span className="ml-2 px-2 py-1 bg-slate-100 text-slate-600 text-xs font-light rounded-full">
                  Save up to $840
                </span>
              )}
            </div>
          </div>

          {/* Mobile Layout - Stacked Cards */}
          <div className="lg:hidden space-y-6 mt-4">
            <div className="mx-auto max-w-sm">
              <div className="p-8 border border-slate-200 rounded-lg">
                <div className="mb-8">
                  <h3 className="text-sm font-medium tracking-wider mb-2">WEBSITE ESSENTIALS</h3>
                  <p className="text-xs text-slate-500 font-light mb-4">Starting at · Professional website · Mobile-first design</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-light">
                      {isYearly ? '$1,910' : '$199'}
                    </span>
                    <span className="text-slate-500 font-light">
                      {isYearly ? '/year' : '/month'}
                    </span>
                  </div>
                  {isYearly && (
                    <div className="text-xs text-slate-500 font-light mt-2">
                      $199/month billed annually · Save $278
                    </div>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="text-sm text-slate-600 font-light flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Design and Development</span>
                  </li>
                  <li className="text-sm text-slate-600 font-light flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Mobile-first responsive architecture</span>
                  </li>
                  <li className="text-sm text-slate-600 font-light flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Includes Hosting</span>
                  </li>
                  <li className="text-sm text-slate-600 font-light flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Automated SEO and Meta Tag optimizations</span>
                  </li>
                  <li className="text-sm text-slate-600 font-light flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Unlimited minor edits</span>
                  </li>
                  <li className="text-sm text-slate-600 font-light flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>$100 fee per page after 5 pages</span>
                  </li>
                </ul>

                <div className="mb-4 p-3 bg-slate-50 border border-slate-200 rounded">
                  <p className="text-xs text-slate-600 font-light italic">
                    "Professional website without the agency overhead"
                  </p>
                </div>

                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full py-3 text-sm font-medium tracking-wide transition-colors bg-slate-900 text-white hover:bg-slate-800 rounded"
                >
                  GET STARTED
                </button>
              </div>
            </div>

            <div className="mx-auto max-w-sm mt-4">
              <div className="p-8 border-2 border-slate-900 rounded-lg relative">
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-4 py-1 text-xs font-medium tracking-wider">
                  MOST POPULAR
                </div>
                <div className="mb-8">
                  <h3 className="text-sm font-medium tracking-wider mb-2">GROWTH INTELLIGENCE</h3>
                  <p className="text-xs text-slate-900 font-medium mb-4">Website + SEO · Competitive insights</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-light">
                      {isYearly ? '$5,364' : '$497'}
                    </span>
                    <span className="text-slate-500 font-light">
                      {isYearly ? '/year' : '/month'}
                    </span>
                  </div>
                  {isYearly && (
                    <div className="text-xs text-slate-500 font-light mt-2">
                      $497/month billed annually · Save $600
                    </div>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="text-sm text-slate-600 font-light flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Everything in Website Essentials</span>
                  </li>
                  <li className="text-sm text-slate-600 font-light flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Track 3 competitors + 25 keywords</span>
                  </li>
                  <li className="text-sm text-slate-600 font-light flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Enhanced unlimited minor edits</span>
                  </li>
                  <li className="text-sm text-slate-600 font-light flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Performance dashboard + reports</span>
                  </li>
                  <li className="text-sm text-slate-600 font-light flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>AI-powered competitive insights</span>
                  </li>
                  <li className="text-sm text-slate-600 font-light flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>24/7 Support</span>
                  </li>
                  <li className="text-sm text-slate-600 font-light flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Lifetime Updates</span>
                  </li>
                </ul>

                <div className="mb-4 p-3 bg-slate-50 border border-slate-200 rounded">
                  <p className="text-xs text-slate-600 font-light italic">
                    "Complete growth platform for expanding businesses"
                  </p>
                </div>

                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full py-3 text-sm font-medium tracking-wide transition-colors bg-slate-900 text-white hover:bg-slate-800 rounded"
                >
                  GET STARTED
                </button>
              </div>
            </div>

            <div className="mx-auto max-w-sm">
              <div className="p-8 border border-slate-200 rounded-lg">
                <div className="mb-8">
                  <h3 className="text-sm font-medium tracking-wider mb-2">MARKET DOMINATOR</h3>
                  <p className="text-xs text-slate-500 font-light mb-4">Full intelligence · Advanced optimization</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-light">
                      {isYearly ? '$7,524' : '$697'}
                    </span>
                    <span className="text-slate-500 font-light">
                      {isYearly ? '/year' : '/month'}
                    </span>
                  </div>
                  {isYearly && (
                    <div className="text-xs text-slate-500 font-light mt-2">
                      $697/month billed annually · Save $840
                    </div>
                  )}
                </div>

                <ul className="space-y-3 mb-8">
                  <li className="text-sm text-slate-600 font-light flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Everything in Growth Intelligence</span>
                  </li>
                  <li className="text-sm text-slate-600 font-light flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Track 5 competitors + 50 keywords</span>
                  </li>
                  <li className="text-sm text-slate-600 font-light flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Unlimited minor edits (no page fees)</span>
                  </li>
                  <li className="text-sm text-slate-600 font-light flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Advanced competitive analysis</span>
                  </li>
                  <li className="text-sm text-slate-600 font-light flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Priority 24/7 Support + same-day response</span>
                  </li>
                  <li className="text-sm text-slate-600 font-light flex items-start gap-2">
                    <span className="text-green-500 mt-1">✓</span>
                    <span>Premium Lifetime Updates</span>
                  </li>
                </ul>

                <div className="mb-4 p-3 bg-slate-50 border border-slate-200 rounded">
                  <p className="text-xs text-slate-600 font-light italic">
                    "Full competitive intelligence for market leaders"
                  </p>
                </div>

                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full py-3 text-sm font-medium tracking-wide transition-colors bg-slate-900 text-white hover:bg-slate-800 rounded"
                >
                  GET STARTED
                </button>
              </div>
            </div>
          </div>

          {/* Desktop Layout - Original horizontal scroll preserved for large screens */}
          <div className="relative hidden lg:block mt-4">
            <div
              ref={pricingScrollRef}
              className="overflow-x-auto scrollbar-hide snap-x snap-mandatory"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <div className="flex gap-8 pb-4">
                <div className="flex-shrink-0 w-80 snap-start p-10 border border-slate-200">
                  <div className="mb-12">
                    <h3 className="text-sm font-medium tracking-wider mb-2">WEBSITE ESSENTIALS</h3>
                    <p className="text-xs text-slate-500 font-light mb-4">Starting at · Professional website · Mobile-first design</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-light">
                        {isYearly ? '$1,910' : '$199'}
                      </span>
                      <span className="text-slate-500 font-light">
                        {isYearly ? '/year' : '/month'}
                      </span>
                    </div>
                    {isYearly && (
                      <div className="text-xs text-slate-500 font-light mt-2">
                        $199/month billed annually · Save $278
                      </div>
                    )}
                  </div>

                  <ul className="space-y-3 mb-12">
                    <li className="text-sm text-slate-600 font-light flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Design and Development</span>
                    </li>
                    <li className="text-sm text-slate-600 font-light flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Mobile-first responsive architecture</span>
                    </li>
                    <li className="text-sm text-slate-600 font-light flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Includes Hosting</span>
                    </li>
                    <li className="text-sm text-slate-600 font-light flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Automated SEO and Meta Tag optimizations</span>
                    </li>
                    <li className="text-sm text-slate-600 font-light flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Unlimited minor edits</span>
                    </li>
                    <li className="text-sm text-slate-600 font-light flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>$100 fee per page after 5 pages</span>
                    </li>
                  </ul>

                  <div className="mb-4 p-3 bg-slate-50 border border-slate-200 rounded">
                    <p className="text-xs text-slate-600 font-light italic">
                      "Professional website without the agency overhead"
                    </p>
                  </div>

                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full py-3 text-sm font-medium tracking-wide transition-colors border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white"
                  >
                    GET STARTED
                  </button>
                </div>

                <div className="flex-shrink-0 w-80 md:w-auto snap-start p-10 border-2 border-slate-900 relative mt-4">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-4 py-1 text-xs font-medium tracking-wider">
                    MOST POPULAR
                  </div>
                  <div className="mb-12">
                    <h3 className="text-sm font-medium tracking-wider mb-2">GROWTH INTELLIGENCE</h3>
                    <p className="text-xs text-slate-900 font-medium mb-4">Website + SEO · Competitive insights</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-light">
                        {isYearly ? '$5,364' : '$497'}
                      </span>
                      <span className="text-slate-500 font-light">
                        {isYearly ? '/year' : '/month'}
                      </span>
                    </div>
                    {isYearly && (
                      <div className="text-xs text-slate-500 font-light mt-2">
                        $497/month billed annually · Save $600
                      </div>
                    )}
                  </div>

                  <ul className="space-y-3 mb-12">
                    <li className="text-sm text-slate-600 font-light flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Everything in Website Essentials</span>
                    </li>
                    <li className="text-sm text-slate-600 font-light flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Track 3 competitors + 25 keywords</span>
                    </li>
                    <li className="text-sm text-slate-600 font-light flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Enhanced unlimited minor edits</span>
                    </li>
                    <li className="text-sm text-slate-600 font-light flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Performance dashboard + reports</span>
                    </li>
                    <li className="text-sm text-slate-600 font-light flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>AI-powered competitive insights</span>
                    </li>
                    <li className="text-sm text-slate-600 font-light flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>24/7 Support</span>
                    </li>
                    <li className="text-sm text-slate-600 font-light flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Lifetime Updates</span>
                    </li>
                  </ul>

                  <div className="mb-4 p-3 bg-slate-50 border border-slate-200 rounded">
                    <p className="text-xs text-slate-600 font-light italic">
                      "Complete growth platform for expanding businesses"
                    </p>
                  </div>

                  <button
                    onClick={() => setIsModalOpen(true)}
                    className="w-full py-3 text-sm font-medium tracking-wide transition-colors bg-slate-900 text-white hover:bg-slate-800"
                  >
                    GET STARTED
                  </button>
                </div>

                <div className="flex-shrink-0 w-80 md:w-auto snap-start p-10 border border-slate-200">
                  <div className="mb-12">
                    <h3 className="text-sm font-medium tracking-wider mb-2">MARKET DOMINATOR</h3>
                    <p className="text-xs text-slate-500 font-light mb-4">Full intelligence · Advanced optimization</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-light">
                        {isYearly ? '$7,524' : '$697'}
                      </span>
                      <span className="text-slate-500 font-light">
                        {isYearly ? '/year' : '/month'}
                      </span>
                    </div>
                    {isYearly && (
                      <div className="text-xs text-slate-500 font-light mt-2">
                        $697/month billed annually · Save $840
                      </div>
                    )}
                  </div>

                  <ul className="space-y-3 mb-12">
                    <li className="text-sm text-slate-600 font-light flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Everything in Growth Intelligence</span>
                    </li>
                    <li className="text-sm text-slate-600 font-light flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Track 5 competitors + 50 keywords</span>
                    </li>
                    <li className="text-sm text-slate-600 font-light flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Unlimited minor edits (no page fees)</span>
                    </li>
                    <li className="text-sm text-slate-600 font-light flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Advanced competitive analysis</span>
                    </li>
                    <li className="text-sm text-slate-600 font-light flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Priority 24/7 Support + same-day response</span>
                    </li>
                    <li className="text-sm text-slate-600 font-light flex items-start gap-2">
                      <span className="text-green-500 mt-1">✓</span>
                      <span>Premium Lifetime Updates</span>
                    </li>
                  </ul>

                  <div className="mb-4 p-3 bg-slate-50 border border-slate-200 rounded">
                    <p className="text-xs text-slate-600 font-light italic">
                      "Full competitive intelligence for market leaders"
                    </p>
                  </div>

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
              onClick={() => scroll(pricingScrollRef, 'right')}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white border border-slate-200 rounded-full flex items-center justify-center hover:bg-slate-50 transition-colors lg:hidden"
            >
              <ChevronRight className="w-5 h-5 text-slate-600" />
            </button>
          </div>

          <p className="text-center text-xs text-slate-500 font-light mt-8">
            All plans include continuous improvements and optimization · No rebuild fees · Cancel anytime
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
                  Agencies charge $5K-15K/month and often disappear after delivering a report. We provide AI-powered enterprise intelligence for 1/5th the cost, plus smart automation implements everything. You get the strategy AND the execution, continuously optimized by AI with website continuous optimization.
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
                  One new customer per month pays for the entire service. Our average client sees 67% increase in conversions. If your average customer value is $2,000+, the math works from day one. Plus you get continuous website optimization vs. one-time projects.
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
                  AI-powered industry-specific intelligence, not generic reports. Machine learning monitors what actually works in YOUR market, implements based on real performance data, and continuously optimizes. No one else combines deep AI intelligence with smart automated implementation.
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
                  Markets change constantly. Google updates algorithms, competitors launch new strategies, customer behavior shifts. One-time projects become outdated quickly. AI-powered continuous intelligence ensures you stay ahead of every market change and competitor move.
                </div>
              )}
            </div>

            <div className="border border-slate-200 bg-white overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === 7 ? null : 7)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-light pr-4">How does the subscription model save money vs. traditional rebuilds?</span>
                <ChevronDown className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${openFaq === 7 ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === 7 && (
                <div className="px-8 pb-6 text-slate-600 font-light leading-relaxed">
                  Traditional agencies charge $15K-50K+ for complete rebuilds every 2-3 years. Our subscription starts at just $200/month for professional websites, with SEO and competitive intelligence available from $500/month. Instead of expensive disruptions, you get predictable monthly investment with ongoing improvements and no surprise rebuild costs.
                </div>
              )}
            </div>

            <div className="border border-slate-200 bg-white overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === 8 ? null : 8)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-light pr-4">How do you keep websites updated with the latest technology?</span>
                <ChevronDown className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${openFaq === 8 ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === 8 && (
                <div className="px-8 pb-6 text-slate-600 font-light leading-relaxed">
                  Our AI automatically monitors and implements the latest frameworks, security updates, and performance optimizations. We rebuild your site's foundation with cutting-edge technology without business disruption. Your site always uses mobile-first responsive design and the fastest available tech stack—no expensive migration projects needed.
                </div>
              )}
            </div>

            <div className="border border-slate-200 bg-white overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === 9 ? null : 9)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-light pr-4">Is SEO optimization included, or do I need to pay extra?</span>
                <ChevronDown className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${openFaq === 9 ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === 9 && (
                <div className="px-8 pb-6 text-slate-600 font-light leading-relaxed">
                  SEO and competitive intelligence are included in our Growth Intelligence ($500/month) and Market Dominator ($700/month) plans. Our AI continuously monitors search rankings and automatically adjusts meta tags, content structure, and technical SEO based on what's working in your market. You get ongoing SEO optimization without paying separate agencies or monthly SEO fees.
                </div>
              )}
            </div>

            <div className="border-b border-slate-200">
              <button
                onClick={() => setOpenFaq(openFaq === 10 ? null : 10)}
                className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-slate-50 transition-colors"
              >
                <span className="font-light pr-4">Why not just use WordPress, Wix, or Squarespace?</span>
                <ChevronDown className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${openFaq === 10 ? 'rotate-180' : ''}`} />
              </button>
              {openFaq === 10 && (
                <div className="px-8 pb-6 text-slate-600 font-light leading-relaxed">
                  WordPress requires constant security updates and technical maintenance. Wix and Squarespace are slow and make YOU do all the optimization work. Our AI-powered platform handles all technical complexity while continuously monitoring and improving your market position. You get enterprise-level intelligence without the DIY headaches.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>


      <section ref={contactRef} className="py-32 px-8 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-light mb-4 tracking-tight">Get Started Today</h2>
            <p className="text-slate-600 font-light">Ready to see how you rank against competitors? Let's get your intelligence report started.</p>
          </div>
          
          <div className="bg-slate-50 border border-slate-200 p-12 max-w-2xl mx-auto">
            <ContactForm
              onSubmit={handleFormSubmit}
              onCancel={() => {}}
            />
          </div>
        </div>
      </section>

      <section className="py-32 px-8 bg-slate-900 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-light mb-8 tracking-tight">
            Get Your Intelligence Advantage
          </h2>
          <p className="text-lg text-slate-400 mb-12 font-light leading-relaxed">
            Free competitive intelligence report. See exactly where you rank vs. competitors.
          </p>
          <div className="flex justify-center mb-6">
            <button
              onClick={() => handleCTAClick('SEE WHERE YOU RANK', 'footer_cta')}
              className="px-10 py-4 bg-white text-slate-900 hover:bg-slate-100 transition-colors text-sm font-medium tracking-wide"
            >
              SEE WHERE YOU RANK
            </button>
          </div>
          <p className="text-sm text-slate-500 font-light">
            Results in 24 hours · No commitment
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
