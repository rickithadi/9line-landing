// Google Analytics utility functions
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// Check if gtag is available
const isGtagAvailable = (): boolean => {
  return typeof window !== 'undefined' && typeof window.gtag === 'function';
};

// Track page views
export const trackPageView = (url: string, title?: string): void => {
  if (!isGtagAvailable()) return;
  
  window.gtag('config', 'G-PWZM3DK5MW', {
    page_path: url,
    page_title: title || document.title,
  });
};

// Track custom events
export const trackEvent = (
  action: string,
  category: string,
  label?: string,
  value?: number
): void => {
  if (!isGtagAvailable()) return;
  
  window.gtag('event', action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};

// Track form submissions
export const trackFormSubmission = (formName: string, success: boolean = true): void => {
  trackEvent(
    success ? 'form_submit_success' : 'form_submit_error',
    'engagement',
    formName,
    success ? 1 : 0
  );
};

// Track CTA clicks
export const trackCTAClick = (ctaName: string, location: string): void => {
  trackEvent('cta_click', 'engagement', `${ctaName} - ${location}`);
};

// Track competitive analysis requests
export const trackCompetitiveAnalysisRequest = (email: string, domain?: string): void => {
  trackEvent('competitive_analysis_request', 'lead_generation', domain || 'no_domain');
  
  // Track as conversion (email is used for conversion tracking context)
  window.gtag('event', 'conversion', {
    send_to: 'G-PWZM3DK5MW',
    event_category: 'lead_generation',
    event_label: 'free_analysis_form',
    user_id: email, // Use email for user identification
  });
};

// Track pricing interactions
export const trackPricingInteraction = (plan: string, action: 'view' | 'click'): void => {
  trackEvent(`pricing_${action}`, 'business', plan);
};

// Track testimonial interactions
export const trackTestimonialView = (testimonialId: string): void => {
  trackEvent('testimonial_view', 'engagement', testimonialId);
};

// Track scroll depth
export const trackScrollDepth = (percentage: number): void => {
  trackEvent('scroll_depth', 'engagement', `${percentage}%`, percentage);
};

// Track time on page
export const trackTimeOnPage = (seconds: number): void => {
  trackEvent('time_on_page', 'engagement', undefined, seconds);
};

// Enhanced ecommerce tracking (for future use)
export const trackPurchase = (transactionId: string, value: number, items: any[]): void => {
  if (!isGtagAvailable()) return;
  
  window.gtag('event', 'purchase', {
    transaction_id: transactionId,
    value: value,
    currency: 'USD',
    items: items,
  });
};

// Track user engagement
export const trackUserEngagement = (engagementType: string, details?: string): void => {
  trackEvent(engagementType, 'user_engagement', details);
};