import GlobalStyles from '../src/GlobalStyles';
import { addDecorator } from '@storybook/react';
import '../src/assets/styles/tailwind.css';
import '../src/assets/styles/styles.scss';

addDecorator((story) => (
  <>
    <GlobalStyles />
    {story()}
  </>
));

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
