"use client";
import React from 'react';
import { useSpring, animated } from 'react-spring';

import { random } from '../utils/utils';
import useToggle from '../hooks/use-toogle';

const useBezier = (
  width: number,
  height: number,
  prefersReducedMotion: boolean
) => {
  const padding = 8;

  const defaultCurve = {
    startPoint: [padding, height - padding],
    controlPoint1: [width / 2, 0],
    endPoint: [width - padding, height - padding],
  };

  const [curve, setCurve] = React.useState(defaultCurve);

  React.useEffect(() => {
    let timeoutId: number;

    const update = () => {
      setCurve({
        startPoint: [
          random(padding, padding * 2),
          random(padding, height - padding),
        ],
        controlPoint1: [
          random(padding, width - padding),
          random(-height * 0.3, height),
        ],
        endPoint: [
          random(width - padding * 2, width - padding),
          random(padding, height - padding),
        ],
      });

      timeoutId = window.setTimeout(update, random(250, 1500));
    };

    update();

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [width, height]);

  const [startX, startY] = curve.startPoint;
  const [controlPointX, controlPointY] = curve.controlPoint1;
  const [endX, endY] = curve.endPoint;

  return useSpring({
    d: `
      M ${startX},${startY}
      Q ${controlPointX},${controlPointY}
        ${endX},${endY}`,
    config: { tension: 10, friction: 5 },
    immediate: prefersReducedMotion,
  });
};

const LoadingBezier = ({
  isPoweredOn,
  prefersReducedMotion,
  width = 64,
  height = 38,
}: {
  isPoweredOn: boolean;
  prefersReducedMotion: boolean;
  width?: number;
  height?: number;
}) => {
  const [hasBegun, toggleBegun] = useToggle(false);

  const bezierSpring = useBezier(width, height, prefersReducedMotion);

  React.useEffect(() => {
    if (!isPoweredOn) {
      toggleBegun(false);
      return;
    }

    const timeoutId = window.setTimeout(() => {
      toggleBegun();
    }, 400);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isPoweredOn, toggleBegun]);

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 64 38"
      fill="none"
    >
      <rect width="64" height="38" rx="4" fill="#2B2B2B" />
      <animated.path
        {...bezierSpring}
        stroke="#FF27FF"
        strokeWidth="4"
        strokeLinecap="round"
        style={{
          opacity: hasBegun ? 1 : 0,
          transition: 'opacity 750ms',
        }}
      />
    </svg>
  );
};

export default LoadingBezier;
