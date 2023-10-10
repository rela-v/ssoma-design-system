// .storybook/preview.ts

// Replace your-framework with the framework you are using (e.g., react, vue3)
import { Preview } from '@storybook/react';
import SsomaTheme from '../.storybook/SsomaTheme';

const preview: Preview = {
  parameters: {
    docs: {
      theme: SsomaTheme,
    },
  },
};

export default preview;