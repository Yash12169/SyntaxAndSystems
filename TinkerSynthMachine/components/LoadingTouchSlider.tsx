import React from 'react';
import { useSpring, animated } from 'react-spring';

import { range, random } from '../utils/utils';

const useBlinkingLights = (
  initialValue: number,
  maxNum: number,
  isPoweredOn: boolean
) => {
  const [num, setNum] = React.useState(initialValue);

  React.useEffect(() => {
    if (!isPoweredOn) {
      setNum(0);
      return;
    }

    let timeoutId: number;

    const update = () => {
      setNum(random(1, maxNum));

      timeoutId = window.setTimeout(update, random(1500, 2200));
    };
    update();

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isPoweredOn, maxNum]);

  return num;
};

const getColorForCircle = (index: number) => {
  if (index < 6) {
    return '#1AD9FF';
  } else if (index < 12) {
    return '#32FF98';
  } else {
    return '#FFEB33';
  }
};

const springConfig = {
  tension: 40,
  friction: 6,
  clamp: true,
};

// HACK: the `width` and `height` need to be their default values, otherwise the circles won't render correctly.
interface Props extends React.SVGProps<SVGSVGElement> {
  isPoweredOn: boolean;
  width?: number;
  height?: number;
  count?: number;
}
const LoadingTouchSlider = ({
  isPoweredOn,
  width = 52,
  height = 16,
  count = 16,
  ...delegated
}: Props) => {
  const numToShow = useBlinkingLights(0, 16, isPoweredOn);

  const props = useSpring({
    numToShow,
    config: springConfig,
    clamp: true,
  });

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      className='block'
      style={{ display: 'block' }} // Inline CSS instead of styled component
      {...delegated}
    >
      <rect width="52" height="16" rx="4" fill="#2B2B2B" />

      {range(count).map((i) => {
        const colIndex = Math.floor(i / 2); // 0, 0, 1, 1, 2, 2...
        const x = colIndex * 6 + 5; // 5, 5, 11, 11, 17, 17...

        const y = i % 2 === 0 ? 5 : 11;

        return (
          <animated.circle
            key={i}
            cx={x}
            cy={y}
            r={2}
            fill={getColorForCircle(i)}
            style={{
              opacity: props.numToShow.to((value: number) => {
                return value > i ? 1 : 0;
              }),
            }}
          />
        );
      })}
    </svg>
  );
};

export default LoadingTouchSlider;
