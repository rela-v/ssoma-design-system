import { create } from '@storybook/theming/create';
import logo from './ssoma-logo.svg'
export default create({
  base: 'light',
  // Typography
  fontBase: '"Urbanist", sans-serif',
  fontCode: 'monospace',
  brandTitle: 'Ssoma Design System',
  brandUrl: './',
  brandImage: logo,

  //
  colorPrimary: '#000000',
  colorSecondary: '#EE233B',

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