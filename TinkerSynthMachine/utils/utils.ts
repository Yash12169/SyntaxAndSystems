type Point = [number,number];
export const mix = (
  v1: number,
  v2: number,
  ratio: number = 0.5
): number => v1 * ratio + v2 * (1 - ratio);

export const normalize = (
  number: number,
  currentScaleMin: number,
  currentScaleMax: number,
  newScaleMin = 0,
  newScaleMax = 1
) => {
  // FIrst, normalize the value between 0 and 1.
  const standardNormalization =
    (number - currentScaleMin) / (currentScaleMax - currentScaleMin);

  // Next, transpose that value to our desired scale.
  return (
    (newScaleMax - newScaleMin) * standardNormalization + newScaleMin
  );
};
export const random = (
  min: number,
  max: number,
  { rounded }: { rounded: boolean } = { rounded: true }
) => {
  const partialVal = Math.random() * (max - min);

  if (rounded) {
    return Math.floor(partialVal) + min;
  } else {
    return partialVal + min;
  }
};


/* eslint-disable */
export const range = (
  start: number,
  end?: number,
  step: number = 1
) => {
  let output = [];
  if (typeof end === 'undefined') {
    end = start;
    start = 0;
  }
  for (let i = start; i < end; i += step) {
    output.push(i);
  }
  return output;
};
/* eslint-enable */
export const convertPolarToCartesian = ([θ, radius]: Point): [
  number,
  number,
] => {
  const x = radius * Math.cos(θ);
  const y = radius * Math.sin(θ);

  return [x, y];
};


