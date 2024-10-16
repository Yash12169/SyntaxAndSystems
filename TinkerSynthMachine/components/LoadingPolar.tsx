"use client";
import React from 'react';

import useToggle from '../hooks/use-toogle';
import PolarAmountVisualization from './PolarAmountVisualisation';

const useAnimatedPolarity = () => {
  const [isPolar, setIsPolar] = React.useState(true);

  React.useEffect(() => {
    let timeoutId: number;

    const update = () => {
      setIsPolar((isPolar) => !isPolar);

      timeoutId = window.setTimeout(update, 1600);
    };

    update();

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, []);

  return isPolar;
};

interface Props {
  isPoweredOn: boolean;
  prefersReducedMotion: boolean;
  width?: number;
  height?: number;
  padding?: number;
}

const LoadingPolar = ({
  isPoweredOn,
  prefersReducedMotion,
  width = 36,
  height = 38,
  padding = 2,
}: Props) => {
  const [hasBegun, toggleBegun] = useToggle(false);

  const isPolar = useAnimatedPolarity();

  React.useEffect(() => {
    if (!isPoweredOn) {
      toggleBegun(false);
      return;
    }

    const timeoutId = window.setTimeout(() => {
      toggleBegun();
    }, 200);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isPoweredOn, toggleBegun]);

  return (
    <div
      style={{
        padding,
        borderRadius: '4px',
        background: '#2b2b2b',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
          opacity: hasBegun ? 1 : 0,
          transition: 'opacity 350ms',
          transform: isPolar ? 'translateX(0)' : 'translateX(1px)',
        }}
      >
        <PolarAmountVisualization
          width={width - padding * 2}
          height={height - padding * 2}
          horizontalPadding={0}
          verticalPadding={0}
          numOfLines={5}
          value={isPolar ? 100 : 0}
          prefersReducedMotion={prefersReducedMotion}
          springConfig={{
            tension: 40,
            friction: 18,
          }}
        />
      </div>
    </div>
  );
};

export default LoadingPolar;
