import { useState, useEffect } from 'react';

interface UseTypewriterOptions {
  speed?: number;
  delay?: number;
}

interface UseTypewriterReturn {
  displayText: string;
  isComplete: boolean;
}

export const useTypewriter = (
  text: string, 
  options: UseTypewriterOptions = {}
): UseTypewriterReturn => {
  const { speed = 50, delay = 0 } = options;
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    if (delay > 0 && !hasStarted) {
      const delayTimer = setTimeout(() => {
        setHasStarted(true);
      }, delay);
      return () => clearTimeout(delayTimer);
    } else {
      setHasStarted(true);
    }
  }, [delay, hasStarted]);

  useEffect(() => {
    if (!hasStarted || currentIndex >= text.length) {
      if (currentIndex >= text.length) {
        setIsComplete(true);
      }
      return;
    }

    const timer = setTimeout(() => {
      setDisplayText(text.slice(0, currentIndex + 1));
      setCurrentIndex(currentIndex + 1);
    }, speed);

    return () => clearTimeout(timer);
  }, [currentIndex, text, speed, hasStarted]);

  return { displayText, isComplete };
};