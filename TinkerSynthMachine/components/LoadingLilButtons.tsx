"use client";
import React from 'react';

interface LoadingLilButtonsProps {
  isPoweredOn: boolean;
}

const LoadingLilButtons = ({ isPoweredOn }: LoadingLilButtonsProps) => {
  return (
    <div
      style={{
        background: '#2b2b2b',
        borderRadius: '4px',
      }}
    >
      <svg
        width="24"
        height="17"
        viewBox="0 0 24 17"
        fill="none"
        style={{ opacity: isPoweredOn ? 1 : 0, display: 'block', transition: 'opacity 300ms' }}
      >
        <circle
          cx="7.5"
          cy="8.5"
          r="3.5"
          style={{
            fill: '#d90000',
            animation: 'glowing 2000ms linear infinite both',
            animationDelay: '0ms',
          }}
        />
        <circle
          cx="16.5"
          cy="8.5"
          r="3.5"
          style={{
            fill: '#d90000',
            animation: 'glowing 1700ms linear infinite both',
            animationDelay: '1000ms',
          }}
        />
      </svg>

      {/* Define keyframes for glowing animation */}
      <style jsx>{`
        @keyframes glowing {
          0% {
            opacity: 0;
          }
          60% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingLilButtons;
