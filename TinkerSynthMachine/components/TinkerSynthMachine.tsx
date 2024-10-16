"use client";

import React from 'react';


import LoadingSine from './LoadingSine';
import LoadingTouchSlider from './LoadingTouchSlider';
import LoadingEarth from './LoadingEarth';
import Spacer from './Spacer';
import LoadingPowerButton from './PowerButton';
import LoadingBezier from './PinkGraph';
import LoadingLilButtons from './LoadingLilButtons';
import LoadingSlider from './LoadingSlider';
import LoadingPolar from './LoadingPolar';
import LoadingCase from './LoadingCase';
import usePrefersReducedMotion from '../hooks/use-prefers-reduced-motion';



const PANEL_WIDTH = 128;
const PANEL_HEIGHT = 160;

const TinkersynthMachine = () => {
  const [isPoweredOn, setIsPoweredOn] = React.useState(false);
  const [isPressingBtn, setIsPressingBtn] = React.useState(false);

  const buttonRef = React.useRef<HTMLButtonElement>(null);

  const prefersReducedMotion = usePrefersReducedMotion();

  return (
    <div style={{ position: 'relative' }}>
      <div
        style={{
          position: 'absolute',
          zIndex: 1,
          bottom: 0,
          left: 0,
          overflow: 'hidden',
          borderRadius: '2px',
        }}
      >
        <LoadingCase />
      </div>

      <button
        ref={buttonRef}
        style={{
          position: 'relative',
          zIndex: 2,
          padding: '10px',
          WebkitTapHighlightColor: 'transparent',
          width: PANEL_WIDTH,
          height: PANEL_HEIGHT,
        }}
        onClick={() => setIsPoweredOn(!isPoweredOn)}
        onPointerDown={() => {
          window.addEventListener(
            'pointerup',
            (event) => {
              if (!buttonRef.current?.contains(event.target as Node)) {
                setIsPoweredOn(!isPoweredOn);
              }
            },
            {
              once: true,
            }
          );
        }}
        onKeyDown={(event: React.KeyboardEvent) => {
          if (event.key === ' ' || event.key === 'Enter') {
            setIsPressingBtn(true);
          }
        }}
        onKeyUp={(event: React.KeyboardEvent) => {
          if (event.key === ' ' || event.key === 'Enter') {
            setIsPressingBtn(false);
          }
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
          aria-hidden="true"
        >
          <LoadingSine
            isPoweredOn={isPoweredOn}
            prefersReducedMotion={prefersReducedMotion}
          />
          <Spacer size={8} />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <LoadingTouchSlider isPoweredOn={isPoweredOn} />
            <LoadingTouchSlider isPoweredOn={isPoweredOn} />
          </div>
        </div>

        <Spacer size={8} />

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
          aria-hidden="true"
        >
          <LoadingBezier
            isPoweredOn={isPoweredOn}
            prefersReducedMotion={prefersReducedMotion}
          />
          <Spacer size={8} />
          <LoadingPolar
            isPoweredOn={isPoweredOn}
            prefersReducedMotion={prefersReducedMotion}
          />
        </div>

        <Spacer size={8} />

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
          aria-hidden="true"
        >
          <div style={{ display: 'flex' }}>
            <LoadingSlider
              isPoweredOn={isPoweredOn}
              prefersReducedMotion={prefersReducedMotion}
            />
            <LoadingSlider
              isPoweredOn={isPoweredOn}
              prefersReducedMotion={prefersReducedMotion}
            />
          </div>
          <Spacer size={8} />
          <LoadingEarth isPoweredOn={isPoweredOn} />
          <Spacer size={8} />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <LoadingLilButtons isPoweredOn={isPoweredOn} />
            <LoadingPowerButton isPressingBtn={isPressingBtn} />
          </div>
        </div>
      </button>
    </div>
  );
};

export default TinkersynthMachine;
