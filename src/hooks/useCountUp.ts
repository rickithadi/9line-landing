import { useState, useEffect, useRef } from 'react';

interface UseCountUpOptions {
  start?: number;
  end: number;
  duration?: number;
  threshold?: number;
}

export function useCountUp({ start = 0, end, duration = 2000, threshold = 0.5 }: UseCountUpOptions) {
  const [count, setCount] = useState(start);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
          
          const startTime = Date.now();
          const startValue = start;
          const endValue = end;
          const totalChange = endValue - startValue;

          const updateCount = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentValue = Math.round(startValue + (totalChange * easeOutQuart));
            
            setCount(currentValue);
            
            if (progress < 1) {
              requestAnimationFrame(updateCount);
            }
          };
          
          requestAnimationFrame(updateCount);
        }
      },
      { threshold }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [start, end, duration, threshold, hasStarted]);

  return { count, elementRef };
}