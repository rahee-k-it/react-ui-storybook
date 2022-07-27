import Button from './Button';
import { faAppleWhole } from '@fortawesome/free-solid-svg-icons';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    onClick: { action: 'clicked' },
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

Default.args = {
  size: 'small',
  padding: '10px',
  margin: '0px',
  shadow: '0px 0px 0px 0px black',
  width: '50px',
  height: '20px',
  bgColor: '#9b59b6',
  color: 'black',
  children: 'Button',
  opacity: '1',
  fontSize: '13px',
  fontWeight: '400',
  bordeRadius: '4px',
  borderStyle: 'solid',
  borderWidth: '1px 1px 1px 1px',
  borderColor: 'black',
  border: 'none',
  hoverColor: '',
  hoverBgColor: '',
};

Disabled.args = {
  children: 'Disable',
  disabled: true,
  bgColor: '#bdc3c7',
  padding: '5px',
  bordeRadius: '4px',
  opacity: 0.5,
  border: 'none',
};

Outline.args = {
  variant: 'outline',
  children: 'Outline',
  bgColor: 'white',
  border: '1px solid #2ecc71',
  color: '#2ecc71',
  bordeRadius: '3px',
  padding: '5px',
};

Contained.args = {
  variant: 'contained',
};

Underline.args = {
  children: 'Underline',
  bgColor: 'inherit',
  color: 'rgba(235, 77, 75,1.0)',
  underline: 'underline',
  border: 'none',
};

Icon.args = {
  children: '',
  fIcon: faAppleWhole,
  bgColor: 'inherit',
  border: 'none',
  color: 'tomato',
  fontSize: '20px',
};

HoverLetter.args = {
  children: 'Hover Letters',
  border: 'none',
  bgColor: 'inherit',
  hoverColor: '#1abc9c',
};
