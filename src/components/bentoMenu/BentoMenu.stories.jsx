import { backgroundColors, borderRadiuses, fontColors } from '../common';
import BentoMenu from './BentoMenu';

export default {
  title: 'BentoMenu',
  component: BentoMenu,
  argTypes: {
    titleColor: {
      control: 'select',
      options: fontColors,
    },
    wrapperBorderRadius: {
      control: 'select',
      options: borderRadiuses,
    },
    wrapperBgColor: {
      control: 'select',
      options: backgroundColors,
    },
    containerBgColor: {
      control: 'select',
      options: backgroundColors,
    },
    gridTemplateColumns: {
      control: 'select',
      options: ['grid-cols-1', 'grid-cols-2', 'grid-cols-3', 'grid-cols-4', 'grid-cols-5'],
    },
    gridTemplateRows: {
      control: 'select',
      options: ['grid-rows-1', 'grid-rows-2', 'grid-rows-3', 'grid-rows-4', 'grid-rows-5'],
    },
  },
};

const Template = (args) => <BentoMenu {...args}></BentoMenu>;

export const Default = Template.bind({});

Default.args = {
  clickTitle: 'Bentos',
  title: 'Menu',
  wrapperWidth: 'w-96',
  wrapperBgColor: 'bg-gray-100',
  wrapperPadding: 'p-5',
  containerBgColor: 'bg-white',
  gridTemplateColumns: 'grid-cols-3',
  gridTemplateRows: 'grid-rows-3',
  gridAutoRows: 'auto-rows-fr',
  titleColor: 'text-red-blue',
};
