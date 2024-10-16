import React from 'react';
import { useSpring, animated } from 'react-spring';

import { random, normalize } from '../utils/utils';

interface LoadingSliderProps {
  isPoweredOn: boolean;
  prefersReducedMotion: boolean;
  width?: number;
  height?: number;
}

const LoadingSlider: React.FC<LoadingSliderProps> = ({
  isPoweredOn,
  prefersReducedMotion,
  width = 20,
  height = 52,
}) => {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    if (!isPoweredOn) {
      setValue(0);
      return;
    }

    let timeoutId: number;

    const update = () => {
      setValue(random(0, 100));

      const minTime = prefersReducedMotion ? 2000 : 800;
      const maxTime = prefersReducedMotion ? 4000 : 1600;

      timeoutId = window.setTimeout(update, random(minTime, maxTime));
    };

    timeoutId = window.setTimeout(update, random(200, 600));

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isPoweredOn, prefersReducedMotion]);

  const spring = useSpring({
    transform: `translateY(${normalize(value, 0, 100, 4, -height + 4)}px)`,
    immediate: prefersReducedMotion,
  });

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 20 52"
      fill="none"
      style={{
        display: 'block',
        overflow: 'visible',
        backfaceVisibility: 'hidden',
        fill: 'none',
      }}
    >
      <rect x="2" width="16" height="52" rx="4" fill="#2B2B2B" />
      {[5, 11, 17, 23, 29, 35, 41, 47].map((y) => (
        <line
          key={y}
          x1="6"
          y1={y}
          x2="14"
          y2={y}
          stroke="#fff"
          strokeOpacity="0.51"
          strokeWidth="2"
        />
      ))}
      <animated.rect
        y={height - 8}
        width="20"
        height="8"
        rx="4"
        fill="#FF27FF"
        style={spring}
      />
    </svg>
  );
};

export default LoadingSlider;
