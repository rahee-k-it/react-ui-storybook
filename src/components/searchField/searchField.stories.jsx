import SearchField from './searchField';
import {
  fontColors,
  fontSizes,
  fontWeights,
  backgroundColors,
  borderColors,
  borderRadiuses,
} from '../common';

export default {
  title: 'SearchField',
  component: SearchField,
  argTypes: {
    fontColor: { control: 'select', options: fontColors },
    fontSize: { control: 'select', options: fontSizes },
    fontWeight: { control: 'select', options: fontWeights },
    bgColor: { control: 'select', options: backgroundColors },
    borderColor: { control: 'select', options: borderColors },
    borderRadius: { control: 'select', options: borderRadiuses },
  },
  args: {
    fontColor: 'text-black',
    fontSize: 'text-base',
    fontWeight: 'font-normal',
    bgColor: 'bg-white',
    borderColor: 'border-transparent',
    borderRadius: 'rounded-full',
    onClick: () => {},
  },
};

const Template = (args) => <SearchField {...args} />;

export const Default = Template.bind({});

Default.parameters = {
  controls: { exclude: ['disabled'] },
};

export const Disabled = Template.bind({});

Disabled.args = {
  disabled: true,
  ...Default.args,
};
Disabled.parameters = {
  controls: { exclude: ['fontColor', 'fontSize', 'fontWeight', 'bgColor'] },
};
