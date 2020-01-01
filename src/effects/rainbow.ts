import Busylight from 'busylight';
import Rainbow from 'color-rainbow';

/**
 * Cycle through colour spectrum, using specified number of colour slices
 *
 * Note: increasing the slices can produce a smoother gradient, but has also been found to create a noticeable
 * flicker on certain devices
 */
export function cycleRainbow(busylight: Busylight.Busylight, numSlices = 1000): void {
  const colours = Rainbow.create(numSlices);
  const coloursHex: string[] = colours.map((c: any): string => c.hexString());
  busylight.blink(coloursHex, 20);
}
