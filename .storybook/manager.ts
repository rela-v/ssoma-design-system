// .storybook/manager.js

import { addons } from '@storybook/manager-api';
import ssomaTheme from './ssomaTheme';

addons.setConfig({
  theme: ssomaTheme,
});