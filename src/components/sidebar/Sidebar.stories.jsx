import Sidebar from './Sidebar';

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
  component: Sidebar,
  title: 'Sidebar',

  argTypes: {
    bgColor: {
      control: 'select',
      options: progressBgColorList,
    },
  },
};

const Template = (args) => <Sidebar {...args}></Sidebar>;

export const Default = Template.bind({});
