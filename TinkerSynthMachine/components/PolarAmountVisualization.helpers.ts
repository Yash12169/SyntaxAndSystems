import { mix, normalize, convertPolarToCartesian } from '../utils/utils';
interface PlotAsPolarCoordinateParams{
  point: [number,number],
  width: number,
  height: number,
  sampleIndex:number,
  samplesPerRow: number,
  omegaRatio: number,
  omegaRadiusSubtractAmount:number,
  radiusMultiple?:number
}
/*
  Given a cartesian point, figure out what that point would be in polar coordinates, and then convert it back to cartesian coordinates.

  This is super confusing (sorry, future-Josh!), but essentially we want to convert our cartesian coordinates to be circular, while still returning X/y values so it can be plotted.

  For example, `sampleIndex` is our defacto `x` in cartesian-land, but we can also think of it as the degrees in polar coordinates. Let's say we have 500 samplesPerRow:
    - 125/500 is 1/4 of the canvas width, but it can also be 90-degrees (out of the 360 degrees we want for a circular effect).
    - 250/500 is 1/2 the width, or 180-degrees.

  Meanwhile, our Y values represent how far away we are from the top of the canvas, but it could also be the `radius` of our polar coordinate!
*/
export const plotAsPolarCoordinate = ({
  point,
  width,
  height,
  sampleIndex,
  samplesPerRow,
  omegaRatio,
  omegaRadiusSubtractAmount,
  radiusMultiple = 1,
}: PlotAsPolarCoordinateParams) => {
  // Normalize the value from 0π to 2π, and then add 0.5π.
  // The added 0.5π is so that the slopes point upwards, instead of to the left.
  // It's effectively a way to rotate by 90deg.
  const theta =
    normalize(sampleIndex, 0, samplesPerRow - 1, 0, 2 * Math.PI) +
    Math.PI * 0.5;

  const radius =
    mix(omegaRadiusSubtractAmount - point[1], point[1], omegaRatio) *
    radiusMultiple;

  const polarPoint: [number, number] = [theta, radius];

  const [x, y] = convertPolarToCartesian(polarPoint);

  const centeredPolarPoint = [x + width / 2, y + height / 2];

  return centeredPolarPoint;
};
