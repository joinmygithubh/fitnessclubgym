import React, { useEffect, useRef, useState } from 'react';

/**
 * AnimatedCounter Component
 * Animates a number from 0 to target value when scrolled into view.
 * 
 * Props:
 * - value: string or number (e.g. '01', '04', '10+', '500+', '2')
 * - duration: duration in ms (default 1200ms)
 * - className: CSS classes for styling
 */
const AnimatedCounter = ({ value, duration = 1200, className = '' }) => {
  const [displayValue, setDisplayValue] = useState('0');
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const node = elementRef.current;
    if (!node || hasAnimated) return;

    const valStr = String(value ?? '');
    // Extract numbers and non-numeric prefix/suffix
    const match = valStr.match(/^(\D*)(\d+)(\D*)$/);

    if (!match) {
      setDisplayValue(valStr);
      return;
    }

    const prefix = match[1] || '';
    const numericTarget = parseInt(match[2], 10);
    const suffix = match[3] || '';
    const isZeroPadded = match[2].length > 1 && match[2].startsWith('0');
    const padLength = match[2].length;

    // Initially display 0 formatted
    const formatCount = (num) => {
      let str = String(num);
      if (isZeroPadded) {
        str = str.padStart(padLength, '0');
      }
      return `${prefix}${str}${suffix}`;
    };

    setDisplayValue(formatCount(0));

    if (!('IntersectionObserver' in window)) {
      setDisplayValue(valStr);
      setHasAnimated(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          observer.unobserve(entry.target);

          let startTime = null;

          const step = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);
            // Ease out quad easing formula
            const easeOutProgress = 1 - (1 - progress) * (1 - progress);
            const currentCount = Math.floor(easeOutProgress * numericTarget);

            setDisplayValue(formatCount(currentCount));

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setDisplayValue(valStr);
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, [value, duration, hasAnimated]);

  return (
    <span ref={elementRef} className={`inline-block ${className}`}>
      {displayValue}
    </span>
  );
};

export default AnimatedCounter;
