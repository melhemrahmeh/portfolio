import { useEffect, useState } from 'react';

/**
 * Returns the id of the section currently closest to the top of the viewport.
 * Used to highlight the matching link in the header.
 *
 * We pick the last section whose top has passed the offset line rather than
 * relying on IntersectionObserver ratios, which are unreliable when sections
 * have very different heights (Experience is many times taller than Contact).
 */
export default function useActiveSection(ids, offset = 140) {
  const [active, setActive] = useState(ids[0] ?? null);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    const handler = () => {
      // Bottom of page: always select the final section, otherwise a short
      // last section can never win the "passed the line" test.
      const scrolledToEnd =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 2;

      if (scrolledToEnd) {
        setActive(ids[ids.length - 1]);
        return;
      }

      let current = ids[0];
      ids.forEach((id) => {
        const node = document.getElementById(id);
        if (node && node.getBoundingClientRect().top <= offset) {
          current = id;
        }
      });
      setActive(current);
    };

    handler();
    window.addEventListener('scroll', handler, { passive: true });
    window.addEventListener('resize', handler);

    return () => {
      window.removeEventListener('scroll', handler);
      window.removeEventListener('resize', handler);
    };
  }, [ids, offset]);

  return active;
}
