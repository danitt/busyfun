import Busylight from 'busylight';
import { prompt } from 'enquirer';
import Ora from 'ora';
import { argv } from 'yargs';
import { cycleGradient } from './effects/gradient';
import { cycleRainbow } from './effects/rainbow';

// Init Vars
const busylight = Busylight.get();
const defaultColourSlices = 1000;
const spinner = Ora();

// CLI
interface Choice {
  label: string;
  value: any;
}
const mainChoices: readonly Choice[] = [
  { label: 'Launch effect', value: 'EFFECT' },
  { label: 'Exit', value: 'EXIT' },
] as const;
const effectChoices: readonly Choice[] = [
  { label: 'Pulse', value: 'PULSE' },
  { label: 'Cycle the colour spectrum', value: 'RAINBOW' },
  { label: 'Cycle through a custom gradient range', value: 'GRADIENT' },
] as const;

/**
 * Launches given effect
 */
function runEffect(effect: string): void {
  switch (effect) {
    case 'RAINBOW':
      cycleRainbow(busylight, defaultColourSlices);
      break;
    case 'GRADIENT':
      cycleGradient(busylight, defaultColourSlices);
      break;
    case 'PULSE':
      busylight.pulse();
      break;
    default:
      spinner.fail(`Unknown effect ${effect}`);
      break;
  }
}

// IIFE
(async (): Promise<void> => {
  spinner.info('Busyfun: Busylight helper tool 🌈\n');

  if (argv.effect) {
    // If CLI arguments provided, skip prompt menu
    const effectArg = String(argv.effect).toUpperCase();
    const effectChoice = effectChoices.find(c => c.value === effectArg);
    if (!effectChoice) {
      spinner.fail(`Invalid effect "${effectArg}" provided, valid choices are ${effectChoices.map(c => c.value)}`);
      process.exit();
    }
    spinner.info(`Running effect ${effectChoice.value}`);
    runEffect(effectChoice.value);
  } else {
    // Launch prompt
    while (true) {
      // Main Menu
      const mainMenu: any = await prompt({
        type: 'select',
        name: 'answer',
        message: 'Please select an action',
        choices: mainChoices.map(c => c.label),
      });
      // Trigger Action
      const answerLabel: string = mainMenu.answer;
      const mainChoice = mainChoices.find(c => c.label === answerLabel);
      switch (mainChoice?.value) {
        case 'EFFECT':
          const effectMenu: any = await prompt({
            type: 'select',
            name: 'answer',
            message: 'Please select an effect',
            choices: effectChoices.map(c => c.label),
          });
          const effectLabel: string = effectMenu.answer;
          const effectChoice = effectChoices.find(c => c.label === effectLabel);
          spinner.info(`Running ${effectChoice?.value} effect..`);
          runEffect(effectChoice?.value ?? '');
          break;
        case 'EXIT':
          spinner.succeed('Exiting');
          process.exit();
      }
    }
  }
})();
