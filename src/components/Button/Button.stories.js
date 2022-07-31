import Button from './Button';
import { faAppleWhole } from '@fortawesome/free-solid-svg-icons';
import { backgroundColors, fontColors, fontSizes, fontWeights } from '../common';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    bgColor: { control: 'select', options: backgroundColors },
    children: { control: 'text' },
    color: { control: 'select', options: fontColors },
    fontSize: { control: 'select', options: fontSizes },
    fontWeight: { control: 'select', options: fontWeights },
    flexDirection: {
      control: 'select',
      options: ['flex-row', 'flex-col'],
    },
    iconPosition: { control: 'select', options: ['front', 'end'] },
    textDecoration: {
      control: 'select',
      options: ['underline', 'no-underline'],
    },
  },
};

const Template = (args) => <Button {...args}></Button>;

export const Default = Template.bind({});
export const Disabled = Template.bind({});
export const Icon = Template.bind({});
export const Text = Template.bind({});

Default.args = {};

Disabled.args = {
  children: 'Disable',
  disabled: true,
  color: 'text-gray-100',
  textDecoration: 'no-underline',
};

Icon.args = {
  children: 'Icon',
  icon: faAppleWhole,
  color: 'text-blue-900',
  bgColor: 'bg-inherit',
  textDecoration: 'no-underline',
};

Text.args = {
  children: 'Text',
  bgColor: 'bg-inherit',
  textDecoration: 'underline',
};
