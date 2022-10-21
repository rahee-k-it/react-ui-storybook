import Radio from './Radio';
import RadioGroup from './RadioGroup';
import { accentColors, fontColors, fontSizes, fontWeights, scale } from '../common';

export default {
  component: Radio,
  title: 'Radio',
  argTypes: {
    name: { table: { disable: true } },
    value: { control: 'text' },
    disabled: { control: 'boolean' },
    groupDisabled: { table: { disable: true } },
    onChange: { table: { disable: true } },
    label: { control: 'text' },
    checkboxSize: { control: 'select', options: scale },
    checkboxColor: { control: 'select', options: accentColors },
    fontSize: { control: 'select', options: fontSizes },
    fontWeight: { control: 'select', options: fontWeights },
    fontColor: { control: 'select', options: fontColors },
    horizon: { control: 'boolean' },
  },
};

export const Default = (args) => (
  <Radio
    {...args}
    onChange={(value) => {
      console.log(value);
    }}
  />
);
Default.args = {
  name: 'age',
  value: '30s',
  disabled: false,
  label: '30대',
};
