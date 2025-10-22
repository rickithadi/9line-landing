import React from 'react';
import { useNavigate } from 'react-router-dom';

interface SlideNavigationProps {
  currentSlide: number;
  totalSlides: number;
  baseUrl: string;
}

const SlideNavigation: React.FC<SlideNavigationProps> = ({ currentSlide, totalSlides, baseUrl }) => {
  const navigate = useNavigate();

  const goToSlide = (slideNumber: number) => {
    navigate(`${baseUrl}/${slideNumber}`);
  };

  const nextSlide = () => {
    if (currentSlide < totalSlides) {
      goToSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 1) {
      goToSlide(currentSlide - 1);
    }
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-gray-200 p-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Previous Button */}
        <button
          onClick={prevSlide}
          disabled={currentSlide === 1}
          className={`px-4 py-2 rounded-sm text-sm font-medium transition-colors ${
            currentSlide === 1
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-gray-900 text-white hover:bg-gray-800'
          }`}
        >
          ← Previous
        </button>

        {/* Slide Indicators */}
        <div className="flex items-center space-x-2">
          {Array.from({ length: totalSlides }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => goToSlide(i + 1)}
              className={`w-3 h-3 rounded-full transition-colors ${
                currentSlide === i + 1
                  ? 'bg-gray-900'
                  : 'bg-gray-300 hover:bg-gray-500'
              }`}
            />
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          disabled={currentSlide === totalSlides}
          className={`px-4 py-2 rounded-sm text-sm font-medium transition-colors ${
            currentSlide === totalSlides
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-gray-900 text-white hover:bg-gray-800'
          }`}
        >
          Next →
        </button>
      </div>
      
      {/* Slide Counter */}
      <div className="text-center mt-2 text-xs text-gray-500">
        {currentSlide} of {totalSlides}
      </div>
    </div>
  );
};

export default SlideNavigation;