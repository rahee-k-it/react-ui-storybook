import Button from './Button';
import { faAppleWhole } from '@fortawesome/free-solid-svg-icons';
import { backgroundColors, fontColors, fontSizes, fontWeights } from '../common';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    borderRadius: {
      control: 'select',
      options: ['rounded-none', 'rounded', 'rounded-lg', 'rounded-2xl'],
    },
    bgColor: { control: 'select', options: backgroundColors },
    children: { control: 'text' },
    color: { control: 'select', options: fontColors },
    fontSize: { control: 'select', options: fontSizes },
    fontWeight: { control: 'select', options: fontWeights },
    flexDirection: {
      control: 'select',
      options: ['flex-row', 'flex-row-reverse', 'flex-col', 'flex-col-reverse'],
    },
    hoverColor: { control: 'text' },
    padding: { control: 'select', options: ['p-0', 'p-1', 'p-2', 'p-3', 'p-4', 'p-5'] },
    svgMargin: { control: 'text' },
    textDecoration: {
      control: 'select',
      options: ['no-underline', 'underline', 'overline', 'line-through'],
    },
  },
};

const Template = (args) => <Button {...args}></Button>;

export const Default = Template.bind({});
export const Disabled = Template.bind({});
export const Icon = Template.bind({});
export const Text = Template.bind({});

Default.args = {
  borderRadius: 'rounded-2xl',
  bgColor: 'bg-gray-100',
  children: 'Default',
  color: 'text-white',
  fontSize: 'text-base',
  hoverColor: 'tomato',
  padding: 'p-5',
  textDecoration: 'line-through',
};

Disabled.args = {
  children: 'Disable',
  disabled: true,
  color: 'text-gray-100',
  bgColor: 'text-gray-300',
};

Icon.args = {
  children: 'Icon',
  icon: faAppleWhole,
  color: 'text-blue-900',
  bgColor: 'bg-inherit',
};

Text.args = {
  children: 'Text',
  bgColor: 'bg-inherit',
  textDecoration: 'underline',
  hoverColor: 'tomato',
};
