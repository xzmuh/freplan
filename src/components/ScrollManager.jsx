import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollManager() {
  const location = useLocation();

  useLayoutEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const root = document.documentElement;
    const previousScrollBehavior = root.style.scrollBehavior;

    root.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);

    const restoreScrollBehavior = requestAnimationFrame(() => {
      root.style.scrollBehavior = previousScrollBehavior;
    });

    return () => cancelAnimationFrame(restoreScrollBehavior);
  }, [location.pathname]);

  useEffect(() => {
    const revealTargets = Array.from(
      document.querySelectorAll('main section, main header')
    );

    revealTargets.forEach((element, index) => {
      element.classList.add('reveal-section');
      element.classList.remove('is-visible');
      element.style.setProperty('--reveal-delay', `${Math.min(index, 4) * 80}ms`);
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '0px 0px -12% 0px',
        threshold: 0.12,
      }
    );

    requestAnimationFrame(() => {
      revealTargets.forEach((element) => observer.observe(element));
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  return null;
}
