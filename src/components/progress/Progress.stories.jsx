import Progress from './Progress';
import { borderRadiuses, fontSizes } from '../common';
import ProgressDesription from './Progress.md';

const progressTextColorList = [
  'text-gray-700',
  'text-blue-700',
  'text-red-700',
  'text-green-700',
  'text-yellow-500',
  'text-indigo-700',
  'text-purple-700',
];

const progressBgColorList = [
  'bg-gray-600',
  'bg-blue-600',
  'bg-red-600',
  'bg-green-600',
  'bg-yellow-400',
  'bg-indigo-600',
  'bg-purple-600',
];

export default {
  title: 'Progress',
  component: Progress,
  argTypes: {
    value: { control: { type: 'range', max: 100, min: 0, step: 1 } },
    isValue: { control: 'boolean' },
    bgColor: {
      control: 'select',
      options: progressBgColorList,
    },
    textColor: {
      control: 'select',
      options: progressTextColorList,
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
    {['gray', 'blue', 'red', 'green', 'yellow', 'indigo', 'purple'].map((item, index) => (
      <Progress
        key={`progress-${index}`}
        id={index}
        label={item}
        bgColor={progressBgColorList[index]}
        textColor={progressTextColorList[index]}
        {...args}
      ></Progress>
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
