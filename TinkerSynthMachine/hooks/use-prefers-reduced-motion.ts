import * as React from 'react';

const QUERY = '(prefers-reduced-motion: no-preference)';

interface Options {
  // By default, this hook will always initialize as `false`, since we don't know during SSR if the user prefers reduced motion or not. But, for components that *only* render on the client, we can opt to use the client's preference as the initial value.
  clientOnly?: boolean;
}

export default function usePrefersReducedMotion({
  clientOnly,
}: Options = {}) {
  const [prefersReducedMotion, setPrefersReducedMotion] =
    React.useState(() => {
      if (!clientOnly) {
        return false;
      }

      return !window.matchMedia(QUERY).matches;
    });

  React.useEffect(() => {
    setPrefersReducedMotion(!window.matchMedia(QUERY).matches);

    const mediaQueryList = window.matchMedia(QUERY);

    const listener = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(!event.matches);
    };

    if (mediaQueryList.addEventListener) {
      mediaQueryList.addEventListener('change', listener);
    } else {
      mediaQueryList.addListener(listener);
    }

    return () => {
      if (mediaQueryList.removeEventListener) {
        mediaQueryList.removeEventListener('change', listener);
      } else {
        mediaQueryList.removeListener(listener);
      }
    };
  }, [setPrefersReducedMotion]);

  return prefersReducedMotion;
}
