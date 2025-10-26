import { useState } from 'react';

interface ContactFormProps {
  onSubmit: (data: { email: string; domain?: string }) => void;
  onCancel: () => void;
}

export function ContactForm({ onSubmit, onCancel }: ContactFormProps) {
  const [email, setEmail] = useState('');
  const [domain, setDomain] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');
    
    try {
      // Submit to Formspree
      const response = await fetch('https://formspree.io/f/movpqyyp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          email: email.trim(),
          domain: domain.trim() || 'No website yet',
          source: '9line.dev Free Analysis Form',
          timestamp: new Date().toISOString()
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
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
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h2 className="text-2xl font-light mb-2 tracking-tight">Get Your Free Analysis</h2>
        <p className="text-slate-600 font-light">
          See exactly where you rank vs. competitors and get actionable insights to dominate your market.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
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
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label htmlFor="domain" className="block text-sm font-medium text-slate-900 mb-2">
            Website Domain (Optional)
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

        {submitStatus === 'success' && (
          <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
            <p className="text-green-700 text-sm font-medium">✓ Request submitted successfully!</p>
            <p className="text-green-600 text-xs mt-1">We'll send your competitive analysis within 24 hours.</p>
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
            disabled={isSubmitting || !email.trim() || submitStatus === 'success'}
            className="flex-1 px-6 py-3 bg-slate-900 text-white hover:bg-slate-800 disabled:bg-slate-400 disabled:cursor-not-allowed transition-colors text-sm font-medium tracking-wide"
          >
            {isSubmitting ? 'Submitting...' : submitStatus === 'success' ? 'Submitted!' : 'GET FREE ANALYSIS'}
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
        Free AI-powered competitive analysis • See how you compare • No commitment • Results in 24 hours
      </p>
    </div>
  );
}