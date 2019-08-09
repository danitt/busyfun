import * as Busylight from 'busylight';
import * as Rainbow from 'color-rainbow';

// IIFE
(async (): Promise<void> => {
  // INIT
  // ..Get light instance
  const busylight = Busylight.get();

  // FEATURES
  // ..pulse
  // busylight.pulse();

  // ..colour cycle
  const colours = Rainbow.create(1000);
  const coloursHex: string[] = colours.map((c: any): string => c.hexString());
  busylight.blink(coloursHex, 20);

  // process.exit();
})();
