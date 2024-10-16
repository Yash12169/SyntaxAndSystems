"use client";
import React from 'react';

import { range, normalize } from '../utils/utils';
import useToggle from '../hooks/use-toogle';
// import usePrefersReducedMotion from '@/hooks/use-prefers-reduced-motion';
const RESOLUTION = 2;

const useOscillation = (
  totalWidth: number,
  totalHeight: number,
  prefersReducedMotion: boolean
) => {
  const padding = 8;
  const left = padding;
  const top = padding;
  const innerWidth = totalWidth - padding * 2;
  const innerHeight = totalHeight - padding * 2;

  const numOfPoints = innerWidth / RESOLUTION;

  const maxVal = 3 * Math.PI;

  const [offset, setOffset] = React.useState(0);

  // Speed in hertz: how many times should the wave cycle per second?
  const speed = 1;

  React.useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    let animationFrameId: number;
    const lastTickAt = performance.now();

    const tick = () => {
      const now = performance.now();

      const timeDelta = (now - lastTickAt) / 1000;

      setOffset(offset + timeDelta / (1 / speed));

      animationFrameId = window.requestAnimationFrame(tick);
    };

    tick();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefersReducedMotion]);

  const points = range(numOfPoints).map((i) => {
    const ratio = i / numOfPoints;
    const x = left + ratio * innerWidth;

    const y =
      top +
      innerHeight / 2 +
      Math.sin(normalize(ratio + offset, 0, 1, 0, maxVal)) *
        (innerHeight / 2);

    return [x, y];
  });

  return points;
};

const LoadingSine = ({
  isPoweredOn,
  prefersReducedMotion,
  width = 48,
  height = 34,
}: {
  isPoweredOn: boolean;
  prefersReducedMotion: boolean;
  width?: number;
  height?: number;
}) => {
  const [hasBegun, toggleBegun] = useToggle(false);

  const points = useOscillation(width, height, prefersReducedMotion);

  React.useEffect(() => {
    if (!isPoweredOn) {
      toggleBegun(false);
      return;
    }

    toggleBegun(true);
  }, [isPoweredOn, toggleBegun]);

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 48 34"
      fill="none"
      style={{ backfaceVisibility: 'hidden' }}
    >
      <rect width="48" height="34" rx="4" fill="#2B2B2B" />
      <polyline
        data-layer-name="sine-wave"
        points={points.map((p) => p.join(',')).join(' ')}
        stroke="#32FF98"
        strokeWidth="2"
        strokeLinecap="round"
        style={{
          opacity: hasBegun ? 1 : 0,
          transition: 'opacity 350ms',
        }}
      />
    </svg>
  );
};

export default React.memo(LoadingSine);
