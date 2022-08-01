import BentoMenu from './BentoMenu';

export default {
  title: 'BentoMenu',
  component: BentoMenu,
};

const Template = (args) => <BentoMenu {...args}></BentoMenu>;

export const Default = Template.bind({});

Default.args = {};
