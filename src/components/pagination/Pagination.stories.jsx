import Pagination from './Pagination';
import { bgColors } from '../common';
export default {
  title: 'Example/Pagination',
  component: Pagination,
  // argTypes: { bgColor: { control: 'text' } },
  argTypes: {
    bgColor: { control: 'select', options: bgColors },
  },
};

const Template = (args) => <Pagination {...args} />;

export const Default = Template.bind({});
export const Color = Template.bind({});

Color.args = {
  bgColor: 'bg-red-300',
};
