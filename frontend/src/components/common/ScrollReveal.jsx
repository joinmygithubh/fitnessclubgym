import React, { useEffect, useRef, useState } from 'react';

/**
 * ScrollReveal Component
 * Smoothly reveals children when they enter the viewport using IntersectionObserver.
 * 
 * Props:
 * - variant: 'fade-up' | 'fade-in' | 'slide-left' | 'slide-right' | 'scale-in'
 * - delay: number in ms (e.g. 100, 200, 300)
 * - duration: number in ms (default 600)
 * - threshold: intersection ratio (default 0.12)
 * - className: additional Tailwind or CSS classes
 * - children: React node
 */
const ScrollReveal = ({
  variant = 'fade-up',
  delay = 0,
  duration = 600,
  threshold = 0.12,
  className = '',
  children,
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const node = elementRef.current;
    if (!node) return;

    // Fallback if IntersectionObserver is not supported
    if (!('IntersectionObserver' in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Unobserve to trigger animation once
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    observer.observe(node);

    return () => {
      if (node) observer.unobserve(node);
    };
  }, [threshold]);

  const variantClass = `reveal-${variant}`;
  const inlineStyles = {
    transitionDuration: `${duration}ms`,
    ...(delay ? { transitionDelay: `${delay}ms` } : {}),
  };

  return (
    <div
      ref={elementRef}
      style={inlineStyles}
      className={`reveal-base ${variantClass} ${
        isVisible ? 'is-visible' : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
