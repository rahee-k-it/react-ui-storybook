import { Card } from './Card';
import { Color, FontSize, FontWeight } from '../common';

export default {
  title: 'Example/Card',
  component: Card,
  argTypes: {
    titleColor: { control: 'select', options: Color },
  },
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});
export const ColorCard = Template.bind({});
export const BorderCard = Template.bind({});
export const ShadowCard = Template.bind({});

ColorCard.args = {
  headerColor: '#ff9f43',
  bodyColor: '#F8EFBA',
};

BorderCard.args = {
  borderRadiusSize: 'xl',
  border: true,
};

ShadowCard.args = {
  shadow: true,
  shadowDirection: 'down-right',
};
