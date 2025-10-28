import { useState } from 'react';
import { trackFormSubmission, trackCompetitiveAnalysisRequest } from '../utils/analytics';

interface ContactFormProps {
  onSubmit: (data: { email: string; domain?: string }) => void;
  onCancel: () => void;
}

export function ContactForm({ onSubmit, onCancel }: ContactFormProps) {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [phone, setPhone] = useState('');
  const [domain, setDomain] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // Submit to Formspree
      const response = await fetch('https://formspree.io/f/mdkpegok', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          company: company.trim(),
          phone: phone.trim(),
          domain: domain.trim() || 'No website yet',
          message: message.trim(),
          source: '9line.dev Contact Form',
          timestamp: new Date().toISOString()
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        
        // Clear all form fields on successful submission
        setName('');
        setEmail('');
        setCompany('');
        setPhone('');
        setDomain('');
        setMessage('');
        
        // Track successful form submission
        trackFormSubmission('contact_form', true);
        trackCompetitiveAnalysisRequest(email.trim(), domain.trim() || undefined);
        
        // Also call the parent onSubmit for modal closure
        await onSubmit({
          email: email.trim(),
          domain: domain.trim() || undefined
        });
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      
      // Track failed form submission
      trackFormSubmission('contact_form', false);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-light mb-2 tracking-tight">Get Started</h2>
        <p className="text-slate-600 font-light">
          Tell us about your business and goals. We'll get back to you within 24 hours with a personalized plan.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-900 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-3 border border-slate-200 focus:border-slate-900 focus:outline-none transition-colors text-sm"
              placeholder="John Smith"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-900 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-3 border border-slate-200 focus:border-slate-900 focus:outline-none transition-colors text-sm"
              placeholder="john@company.com"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="company" className="block text-sm font-medium text-slate-900 mb-2">
              Company/Business
            </label>
            <input
              type="text"
              id="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full px-4 py-3 border border-slate-200 focus:border-slate-900 focus:outline-none transition-colors text-sm"
              placeholder="Your Business Name"
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-slate-900 mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-3 border border-slate-200 focus:border-slate-900 focus:outline-none transition-colors text-sm"
              placeholder="(555) 123-4567"
            />
          </div>
        </div>

        <div>
          <label htmlFor="domain" className="block text-sm font-medium text-slate-900 mb-2">
            Current Website (Optional)
          </label>
          <input
            type="text"
            id="domain"
            value={domain}
            onChange={(e) => setDomain(e.target.value)}
            className="w-full px-4 py-3 border border-slate-200 focus:border-slate-900 focus:outline-none transition-colors text-sm"
            placeholder="yourwebsite.com"
          />
          <p className="text-xs text-slate-500 font-light mt-1">
            Leave blank if you don't have a website yet
          </p>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-900 mb-2">
            How can we help you?
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className="w-full px-4 py-3 border border-slate-200 focus:border-slate-900 focus:outline-none transition-colors text-sm resize-none"
            placeholder="Tell us about your business goals and what you'd like to achieve..."
          />
        </div>

        {submitStatus === 'success' && (
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-700 text-sm font-medium">✓ Message sent successfully!</p>
            <p className="text-green-600 text-xs mt-1">We'll get back to you within 24 hours with a personalized plan.</p>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-700 text-sm font-medium">There was an error submitting your request.</p>
            <p className="text-red-600 text-xs mt-1">Please try again or contact us directly.</p>
          </div>
        )}

        <div className="flex gap-3 pt-4">
          <button
            type="submit"
            disabled={isSubmitting || !name.trim() || !email.trim() || submitStatus === 'success'}
            className="flex-1 px-6 py-3 bg-slate-900 text-white hover:bg-slate-800 disabled:bg-slate-400 disabled:cursor-not-allowed transition-colors text-sm font-medium tracking-wide"
          >
            {isSubmitting ? 'Submitting...' : submitStatus === 'success' ? 'Submitted!' : 'SEND MESSAGE'}
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="px-6 py-3 border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors text-sm font-medium tracking-wide"
          >
            {submitStatus === 'success' ? 'Close' : 'Cancel'}
          </button>
        </div>
      </form>

      <p className="text-xs text-slate-500 font-light mt-6 leading-relaxed">
        Free consultation • No commitment • 24-hour response • Personalized business plan
      </p>
    </div>
  );
}