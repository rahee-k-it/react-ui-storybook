import Button from './Button';
import { backgroundColors, borderRadiuses, fontColors, fontSizes, fontWeights } from '../common';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    borderRadius: {
      control: 'select',
      options: borderRadiuses,
    },
    bgColor: { control: 'select', options: backgroundColors },
    children: { control: 'text' },
    color: { control: 'select', options: fontColors },
    hoverColor: { control: 'select', options: ['none', 'black', 'gray', 'red', 'blue', 'green'] },
    fontSize: { control: 'select', options: fontSizes },
    fontWeight: { control: 'select', options: fontWeights },
    flexDirection: {
      control: 'select',
      options: ['flex-row', 'flex-row-reverse', 'flex-col', 'flex-col-reverse'],
    },
    padding: { control: 'select', options: ['p-0', 'p-1', 'p-2', 'p-3', 'p-4', 'p-5'] },
    textDecoration: {
      control: 'select',
      options: ['no-underline', 'underline', 'overline', 'line-through'],
    },
  },
};

const Template = (args) => <Button {...args}></Button>;

export const Default = Template.bind({});
export const Disabled = Template.bind({});
export const Text = Template.bind({});

Default.args = {
  borderRadius: 'rounded-2xl',
  bgColor: 'bg-gray-100',
  children: 'Default',
  color: 'text-black',
  fontSize: 'text-base',
  hoverColor: 'tomato',
  padding: 'p-2',
  textDecoration: 'underline',
};

Disabled.args = {
  children: 'Disable',
  disabled: true,
  color: 'text-gray-300',
  bgColor: 'bg-gray-100',
};

Text.args = {
  children: 'Text',
  bgColor: 'bg-inherit',
  textDecoration: 'underline',
  hoverColor: 'red',
};
