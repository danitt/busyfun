import Busylight from 'busylight';
import tinygradient from 'tinygradient';

/**
 * Cycle between a given colour array, using specified number of slices to adjust transition smoothness
 *
 * Note: increasing the slices can produce a smoother gradient, but has also been found to create a noticeable
 * flicker on certain devices
 */
export function cycleGradient(busylight: Busylight.Busylight, numSlices = 1000): void {
  const gradient = tinygradient('purple', 'orange', 'purple', 'orange', 'pink');
  const coloursRgb = gradient.rgb(numSlices);
  const coloursHex: string[] = coloursRgb.map((c: any): string => c.toHexString());
  busylight.blink(coloursHex, 20);
}
