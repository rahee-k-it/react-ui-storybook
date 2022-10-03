import GlobalStyles from '../src/GlobalStyles';
import { addDecorator } from '@storybook/react';
import '../src/assets/styles/tailwind.css';
<<<<<<< HEAD
import '../src/assets/styles/styles.scss';
=======
>>>>>>> 84db2ba6d120c4ea232424607ff92b3cd7497418

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
