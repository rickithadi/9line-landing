import React from 'react';
import SlideNavigation from '../components/SlideNavigation';

const Slide1Hero: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
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

      <SlideNavigation currentSlide={1} totalSlides={10} baseUrl="/9dlj4rmvjdekpli2ktpeyt" />
    </div>
  );
};

export default Slide1Hero;