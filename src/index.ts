import * as Busylight from 'busylight';

// IIFE
(async (): Promise<void> => {
  // INIT
  // ..Get light instance
  const busylight = Busylight.get();

  // FEATURES
  // ..pulse
  // busylight.pulse();

  // ..colour cycle
  busylight.blink(['red', 'orange', 'yellow', 'green', '#c0ffee', 'indigo', 'violet'], 2000);

  // process.exit();
})();
