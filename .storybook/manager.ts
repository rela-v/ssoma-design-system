// .storybook/manager.js

import { addons } from '@storybook/manager-api';
import SsomaTheme from './SsomaTheme';

addons.setConfig({
  theme: SsomaTheme,
});