import Progress from './Progress';
import { borderRadiuses, fontSizes } from '../common';
import ProgressDesription from './Progress.md';

const progressColorList = ['gray', 'blue', 'red', 'green', 'yellow', 'indigo', 'purple'];

export default {
  title: 'Progress',
  component: Progress,
  argTypes: {
    value: { control: { type: 'range', max: 100, min: 0, step: 1 } },
    isValue: { control: 'boolean' },
    bgColor: {
      control: 'select',
      options: progressColorList,
    },
    size: { control: 'select', options: fontSizes },
    borderRadius: { control: 'select', options: borderRadiuses },
    label: {
      control: 'text',
    },
    isLabel: { control: 'boolean' },
  },
  parameters: {
    docs: {
      description: {
        component: ProgressDesription,
      },
    },
  },
};

const Template = (args) => <Progress {...args}></Progress>;

export const Default = Template.bind({});
export const LabelInside = Template.bind({});
export const LabelOutside = Template.bind({});
export const ColorProgress = (args) => (
  <>
    {progressColorList.map((item, index) => (
      <Progress id={index} label={item} bgColor={item} {...args}></Progress>
    ))}
  </>
);

Default.args = {
  isValue: false,
  isLabel: false,
  label: '',
};

LabelInside.args = {
  isValue: true,
  isLabel: false,
  label: '',
};

LabelOutside.args = {
  isValue: false,
  isLabel: true,
  label: 'Outside label',
};

ColorProgress.args = {
  isValue: false,
  isLabel: true,
};
