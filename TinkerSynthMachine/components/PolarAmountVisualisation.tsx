import React from 'react';
import { useSpring, animated, SpringConfig } from 'react-spring';

import { range, mix } from '../utils/utils';
import { plotAsPolarCoordinate } from './PolarAmountVisualization.helpers';

const COLORS = [
  'hsl(190deg 100% 55%)',
  'hsl(150deg 100% 60%)',
  'hsl(54deg 100% 60%)',
  'hsl(25deg 100% 55%)',
  'hsl(5deg 100% 55%)',
];

const devicePixelRatio = 2;

const MAX_DENSITY = devicePixelRatio * 2;
const SPRING_CONFIG = {
  tension: 120,
  friction: 18,
};

const calculatePointsForLine = (
  value: number,
  width: number,
  height: number,
  rowIndex: number,
  numOfLines: number
): Array<[number, number]> => {
  const omegaRatio = value / 100;
  const numOfPointsPerLine = Math.ceil(width / MAX_DENSITY);
  const rowHeight = height / numOfLines;
  const rowNum = rowIndex + 1;
  const y = height * (rowNum / numOfLines) - rowHeight / 2;

  return range(numOfPointsPerLine).map((colIndex) => {
    const x = colIndex * MAX_DENSITY;

    const [polarX, polarY] = plotAsPolarCoordinate({
      point: [x, y],
      width,
      height,
      sampleIndex: colIndex,
      samplesPerRow: numOfPointsPerLine,
      omegaRatio,
      omegaRadiusSubtractAmount: height,
      radiusMultiple: 0.7,
    });

    return [mix(polarX, x, omegaRatio), mix(polarY, y, omegaRatio)];
  });
};

const getPolylinePointsAsString = (points: Array<[number, number]>) =>
  points.map((point) => `${point[0]},${point[1]}`).join(' ');

interface Props {
  width: number;
  height: number;
  horizontalPadding?: number;
  verticalPadding?: number;
  numOfLines?: number;
  value: number;
  springConfig?: SpringConfig;
  prefersReducedMotion: boolean;
}

const PolarAmountVisualization: React.FC<Props> = ({
  width,
  height,
  horizontalPadding = 20,
  verticalPadding = 40,
  numOfLines = 5,
  value,
  springConfig = SPRING_CONFIG,
  prefersReducedMotion,
}) => {
  const innerWidth = width - horizontalPadding;
  const innerHeight = height - verticalPadding;

  const spring = useSpring({
    value,
    config: springConfig,
    immediate: prefersReducedMotion,
  });

  return (
    <svg
      width={innerWidth}
      height={innerHeight}
      fill="none"
      style={{
        display: 'block',
        overflow: 'visible',
      }}
    >
      {range(numOfLines).map((rowIndex) => (
        <animated.polyline
          suppressHydrationWarning
          key={rowIndex}
          points={spring.value.to((value) => {
            const line = calculatePointsForLine(
              value,
              innerWidth,
              innerHeight,
              rowIndex,
              numOfLines
            );
            return getPolylinePointsAsString(line);
          })}
          stroke={COLORS[rowIndex]}
          strokeWidth={devicePixelRatio > 1 ? 2.5 : 2}
          strokeLinecap="round"
        />
      ))}
    </svg>
  );
};

export default PolarAmountVisualization;
