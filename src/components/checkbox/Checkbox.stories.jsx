import { accentColors, fontColors, fontSizes, fontWeights, scale } from '../common';
import Checkbox from './Checkbox';

export default {
  component: Checkbox,
  title: 'Checkbox',
  argTypes: {
    label: { control: 'text' },
    checkboxSize: { control: { sort: 'requiredFirst', type: 'select' }, options: scale },
    checkboxColor: { control: { sort: 'requiredFirst', type: 'select' }, options: accentColors },
    fontSize: { control: { sort: 'requiredFirst', type: 'select' }, options: fontSizes },
    fontWeight: { control: { sort: 'requiredFirst', type: 'select' }, options: fontWeights },
    fontColor: { control: { sort: 'requiredFirst', type: 'select' }, options: fontColors },
  },
};

const Template = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'checkbox',
  active: true,
};

export const Disable = Template.bind({});
Disable.args = {
  ...Default.args,
  active: false,
};

export const AllSelect = Template.bind({});
AllSelect.args = {
  subCheckboxsControl: true,
  ...Default.args,
};
