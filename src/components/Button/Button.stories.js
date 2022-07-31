import Button from './Button';
import { faAppleWhole } from '@fortawesome/free-solid-svg-icons';
import { fontColors, fontSizes, fontWeights } from '../common';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
    children: { control: 'text' },
    color: { control: 'select', options: fontColors },
    fontSize: { control: 'select', options: fontSizes },
    fontWeight: { control: 'select', options: fontWeights },
    iconPosition: { control: 'select', options: ['front', 'end'] },
  },
};

const Template = (args) => <Button {...args}></Button>;

export const Default = Template.bind({});
export const Disabled = Template.bind({});
export const Outline = Template.bind({});
export const Contained = Template.bind({});
export const Underline = Template.bind({});
export const Icon = Template.bind({});
export const HoverLetter = Template.bind({});

Default.args = {};

Disabled.args = {
  children: 'Disable',
  disabled: true,
  color: 'text-black',
  hoverColor: 'text-red-900',
};

// Outline.args = {
//   variant: 'outline',
//   children: 'Outline',
//   bgColor: 'white',
//   border: '1px solid #2ecc71',
//   bordeRadius: '3px',
//   padding: '5px',
// };

// Contained.args = {
//   variant: 'contained',
// };

// Underline.args = {
//   children: 'Underline',
//   bgColor: 'inherit',
//   underline: 'underline',
//   border: 'none',
// };

Icon.args = {
  children: 'Icon',
  icon: faAppleWhole,
  border: 'none',
  color: 'text-blue-900',
  fontSize: 'text-2xl',
  hoverColor: 'text-red-900',
  bgColor: 'bg-inherit',
};

// HoverLetter.args = {
//   children: 'Hover Letters',
//   border: 'none',
//   bgColor: 'inherit',
//   hoverColor: '#1abc9c',
// };
