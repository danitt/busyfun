import * as Busylight from 'busylight';
import * as Rainbow from 'color-rainbow';
import * as tinygradient from 'tinygradient';

// IIFE
(async (): Promise<void> => {
  // INIT
  // ..Get light instance
  const busylight = Busylight.get();

  // FEATURES
  // ..pulse
  // busylight.pulse();

  // ..rainbow colour cycle
  // const colours = Rainbow.create(1000);
  // const coloursHex: string[] = colours.map((c: any): string => c.hexString());
  // busylight.blink(coloursHex, 20);

  // ..cycle custom colour gradient
  const gradient = tinygradient('purple', 'orange', 'purple', 'orange', 'pink');
  const coloursRgb = gradient.rgb(1000);
  const coloursHex: string[] = coloursRgb.map((c: any): string => c.toHexString());
  busylight.blink(coloursHex, 20);

  // process.exit();
})();
