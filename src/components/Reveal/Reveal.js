import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  opacity: ${(props) => (props.$shown ? 1 : 0)};
  transform: translateY(${(props) => (props.$shown ? '0' : '18px')});
  transition:
    opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  transition-delay: ${(props) => props.$delay}ms;
  will-change: opacity, transform;

  /* Motion is decoration only — never let it hide content. */
  @media (prefers-reduced-motion: reduce) {
    opacity: 1;
    transform: none;
    transition: none;
  }
`;

/**
 * Fades + lifts its children into view the first time they intersect the
 * viewport. Falls back to visible when IntersectionObserver is unavailable
 * or the user prefers reduced motion.
 */
const Reveal = ({ children, delay = 0, as }) => {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

    if (prefersReduced || typeof IntersectionObserver === 'undefined') {
      setShown(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Wrapper ref={ref} as={as} $shown={shown} $delay={delay}>
      {children}
    </Wrapper>
  );
};

export default Reveal;
