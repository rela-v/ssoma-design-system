import { create } from '@storybook/theming/create';

export default create({
  base: 'light',
  // Typography
  fontBase: '"Urbanist", sans-serif',
  fontCode: 'monospace',

  brandTitle: 'Custom Storybook per Ssoma',
  brandImage: 'https://github.com/rela-v/ssoma-design-system/blob/main/ssoma-design-system-logo.png',
  brandTarget: '_self',

  //
  colorPrimary: '#EE233B',
  colorSecondary: '#AAF3EE',

  // UI
  appBg: '#ffffff',
  appContentBg: '#ffffff',
  appBorderColor: '#585C6D',
  appBorderRadius: 4,

  // Text colors
  textColor: '#10162F',
  textInverseColor: '#ffffff',

  // Toolbar default and active colors
  barTextColor: '#9E9E9E',
  barSelectedColor: '#585C6D',
  barBg: '#ffffff',

  // Form colors
  inputBg: '#ffffff',
  inputBorder: '#10162F',
  inputTextColor: '#10162F',
  inputBorderRadius: 2,
});