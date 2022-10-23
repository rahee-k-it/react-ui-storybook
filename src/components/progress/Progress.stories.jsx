import Progress from './Progress';
import { borderRadiuses, fontSizes } from '../common';
import ProgressDesription from './Progress.md';

const progressLabelColorList = [
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
    showPercentage: { control: 'boolean' },
    bgColor: {
      control: 'select',
      options: progressBgColorList,
    },
    labelColor: {
      control: 'select',
      options: progressLabelColorList,
    },
    size: { control: 'select', options: fontSizes },
    borderRadius: { control: 'select', options: borderRadiuses },
    label: {
      control: 'text',
    },
    showLabel: { control: 'boolean' },
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
export const WitoutPercentage = Template.bind({});
export const WithoutLabel = Template.bind({});
export const ColorProgress = (args) => (
  <>
    {['gray', 'blue', 'red', 'green', 'yellow', 'indigo', 'purple'].map((item, index) => (
      <Progress
        key={`progress-${index}`}
        id={index}
        label={item}
        bgColor={progressBgColorList[index]}
        labelColor={progressLabelColorList[index]}
        {...args}
      ></Progress>
    ))}
  </>
);

Default.args = {
  label: 'Label',
  value: 50,
};

WitoutPercentage.args = {
  showPercentage: false,
  label: 'Label',
  value: 50,
};

WithoutLabel.args = {
  showLabel: false,
  label: '',
  value: 50,
};

ColorProgress.args = {
  value: 50,
};
ColorProgress.parameters = { controls: { exclude: ['label', 'labelColor', 'bgColor'] } };
