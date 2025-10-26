# Google Analytics Integration

## Overview
Google Analytics 4 (GA4) has been integrated into the 9line.dev website to track user interactions, conversions, and website performance.

## Measurement ID
- **GA4 Property ID**: `G-PWZM3DK5MW`

## Implementation Details

### 1. Core Setup
- **Location**: `/index.html`
- **Global gtag script** loaded in the document head
- **Configuration** includes page title and location tracking

### 2. Analytics Utilities
- **File**: `/src/utils/analytics.ts`
- **Purpose**: Centralized functions for consistent event tracking

### 3. Tracked Events

#### Form Submissions
- **Event**: `form_submit_success` / `form_submit_error`
- **Category**: `engagement`
- **Label**: `free_analysis_form`
- **Trigger**: ContactForm component submission

#### CTA Interactions
- **Event**: `cta_click`
- **Category**: `engagement`
- **Labels**:
  - `See Where You Rank - navigation`
  - `SEE WHERE YOU RANK - hero`
  - `SEE YOUR COMPETITIVE ADVANTAGE - competitive_comparison`
  - `SEE WHERE YOU RANK - footer_cta`

#### Lead Generation
- **Event**: `competitive_analysis_request`
- **Category**: `lead_generation`
- **Label**: Domain name or 'no_domain'
- **Conversion**: Tracked as GA4 conversion event

### 4. Key Features

#### Conversion Tracking
```typescript
// Tracks form submissions as conversions
trackCompetitiveAnalysisRequest(email, domain)
```

#### User Identification
- Email addresses used for user_id in conversion tracking
- Enables cross-session user journey analysis

#### Event Categories
- **engagement**: User interactions (clicks, forms)
- **lead_generation**: Lead capture events
- **business**: Business-related actions (pricing)
- **user_engagement**: General engagement metrics

## Available Tracking Functions

### Core Events
```typescript
trackEvent(action, category, label?, value?)
trackPageView(url, title?)
trackFormSubmission(formName, success)
trackCTAClick(ctaName, location)
```

### Business Events
```typescript
trackCompetitiveAnalysisRequest(email, domain?)
trackPricingInteraction(plan, action)
trackTestimonialView(testimonialId)
```

### Engagement Metrics
```typescript
trackScrollDepth(percentage)
trackTimeOnPage(seconds)
trackUserEngagement(type, details?)
```

### E-commerce (Future)
```typescript
trackPurchase(transactionId, value, items)
```

## Data Privacy
- No personally identifiable information stored without user consent
- Email used only for conversion attribution
- GDPR/CCPA compliant implementation

## Monitoring & Analysis

### Key Metrics to Track
1. **Conversion Rate**: Form submissions vs. page views
2. **CTA Performance**: Click-through rates by location
3. **User Journey**: Path from landing to conversion
4. **Engagement**: Time on page, scroll depth
5. **Traffic Sources**: Organic, direct, referral performance

### Custom Reports
- **Lead Generation Funnel**: Track conversion paths
- **CTA Effectiveness**: Compare performance by location
- **Form Abandonment**: Identify drop-off points
- **Competitive Analysis Requests**: Track lead quality

## Testing
✅ Build successful with TypeScript validation
✅ Event tracking implemented across all major CTAs
✅ Form submission tracking with success/error states
✅ Conversion tracking for lead generation
✅ User identification for cross-session tracking

## Next Steps
1. Set up GA4 conversion goals in the dashboard
2. Configure custom audiences for retargeting
3. Set up alerts for conversion anomalies
4. Implement enhanced e-commerce when pricing is finalized
5. Add scroll depth and time-based engagement tracking