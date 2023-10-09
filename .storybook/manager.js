// .storybook/manager.js

import { addons } from '@storybook/manager-api';
import ssomaTheme from '../.storybook/ssomaTheme';

addons.setConfig({
  theme: ssomaTheme,
});