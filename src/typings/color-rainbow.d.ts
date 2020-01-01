declare module 'color-rainbow' {
  import Color from 'color';
  export function create(numSlices: number): Color[];

  export interface ColorRainbow {
    colorIndex: number;
    numberOfColors: number;

    // eslint-disable-next-line @typescript-eslint/no-misused-new
    constructor(numberOfColors: number): void;

    next(): Color;
  }
}
