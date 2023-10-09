// .storybook/preview.ts

// Replace your-framework with the framework you are using (e.g., react, vue3)
import { Preview } from '@storybook/react';
import ssomaTheme from '../.storybook/ssomaTheme';

const preview: Preview = {
  parameters: {
    docs: {
      theme: ssomaTheme,
    },
  },
};

export default preview;