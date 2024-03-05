// https://tailwindcss.com/docs/responsive-design
// https://tailwindcss.com/docs/configuration#referencing-in-java-script
import resolveConfig from 'tailwindcss/resolveConfig';
import tailwindConfig from '../../tailwind.config.js';

// ScreenType is broken in Tailwind
type Screens = Record<string, string>;

const fullConfig = resolveConfig(tailwindConfig);
const screens = fullConfig?.theme?.screens as Screens;

function makeNumber(input: string) {
  return Number(input.split('px')[0]);
}

const UI = {
  XS_BREAKPOINT: makeNumber(screens.xs),
  SM_BREAKPOINT: makeNumber(screens.sm),
  MD_BREAKPOINT: makeNumber(screens.md),
  LG_BREAKPOINT: makeNumber(screens.lg),
  XL_BREAKPOINT: makeNumber(screens.xl),
  '2XL_BREAKPOINT': makeNumber(screens['2xl']),
  '3XL_BREAKPOINT': makeNumber(screens['3xl']),
  '4XL_BREAKPOINT': makeNumber(screens['4xl']),
  '5XL_BREAKPOINT': makeNumber(screens['5xl']),
  CONTAINER_MAX_WIDTH: 1200, //px
  CONTAINER_PADDING_X: 5, // vw
};

export default UI;
