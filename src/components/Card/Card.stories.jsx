import { Card } from './Card';
import { fontColors, backgroundColors, fontSizes, fontWeights, borderRadiuses } from '../common';

export default {
  title: 'Card',
  component: Card,
  argTypes: {
    headerBgColor: { control: 'select', options: backgroundColors },
    contentBgColor: { control: 'select', options: backgroundColors },
    border: { control: 'boolean' },
    borderRadiusSize: { control: 'select', options: borderRadiuses },
    shadow: { control: 'boolean' },
    shadowDirection: {
      control: 'select',
      options: ['up', 'up-right', 'right', 'down-right', 'down', 'down-left', 'left', 'up-left'],
    },
    subtitle: { control: 'text' },
    subtitleColor: { control: 'select', options: fontColors },
    subtitleFontSize: { control: 'select', options: fontSizes },
    subtitleFontWeight: { control: 'select', options: fontWeights },
    title: { control: 'text' },
    titleColor: { control: 'select', options: fontColors },
    titleFontSize: { control: 'select', options: fontSizes },
    titleFontWeight: { control: 'select', options: fontWeights },
    content: { control: 'text' },
    contentColor: { control: 'select', options: fontColors },
    contentFontSize: { control: 'select', options: fontSizes },
    contentFontWeight: { control: 'select', options: fontWeights },
  },
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
export const ColorCard = Template.bind({});
export const BorderCard = Template.bind({});
export const ShadowCard = Template.bind({});

ColorCard.args = {
  headerBgColor: 'bg-red-300',
  contentBgColor: 'bg-red-100',
  subtitleColor: 'text-red-500',
  titleColor: 'text-red-900',
  contentColor: 'text-red-700',
};

BorderCard.args = {
  border: true,
  borderRadiusSize: 'rounded-3xl',
};

ShadowCard.args = {
  shadow: true,
  shadowDirection: 'down-right',
};
