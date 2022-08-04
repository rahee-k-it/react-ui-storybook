import { backgroundColors, borderRadiuses, fontColors } from '../common';
import BentoMenu from './BentoMenu';
import { faAppleWhole, faBars, faEllipsis, faList } from '@fortawesome/free-solid-svg-icons';

export default {
  title: 'BentoMenu',
  component: BentoMenu,

  argTypes: {
    children: { control: 'object' },

    title: { control: 'text' },
    titleColor: {
      control: 'select',
      options: fontColors,
    },

    clickTitle: { control: 'text' },
    wrapperPadding: {
      control: 'select',
      options: ['p-5', 'p-10', 'p-12', 'p-14', 'p-24', 'p-28', 'p-36'],
    },
    wrapperWidth: {
      control: 'select',
      options: [
        'w-72',
        'w-80',
        'w-96',
        'w-auto',
        'w-1/2',
        'w-1/3',
        'w-1/4',
        'w-fit',
        'w-max',
        'w-min',
      ],
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
    gridAutoRows: {
      control: 'select',
      options: ['auto-rows-auto', 'auto-rows-min', 'auto-rows-max', 'auto-rows-fr'],
    },
  },
};

const Template = (args) => <BentoMenu {...args}></BentoMenu>;

export const Primary = Template.bind({});
export const Secondary = Template.bind({});
export const ColorBento = Template.bind({});

Primary.args = {
  title: 'Menu',
  clickTitle: '',
  iconTitle: faBars,
  children: ['메일', '스토리', '페이지', '그룹', '이벤트', '광고', '게시물', '친구', '동영상'],
  wrapperWidth: 'w-96',
  wrapperBgColor: 'bg-gray-100',
  containerBgColor: 'bg-white',
  gridTemplateColumns: 'grid-cols-2',
  gridAutoRows: 'auto-rows-fr',
  titleColor: 'text-red-blue',
  iconBox: [
    faBars,
    faList,
    faAppleWhole,
    faAppleWhole,
    faAppleWhole,
    faAppleWhole,
    faAppleWhole,
    faAppleWhole,
    faAppleWhole,
  ],
};

Secondary.args = {
  title: 'Bento',
  iconTitle: faList,
  children: ['메일', '스토리', '페이지', '그룹', '이벤트', '광고', '게시물', '친구', '동영상'],
  wrapperWidth: 'w-96',
  wrapperBgColor: 'bg-gray-100',
  containerBgColor: 'bg-white',
  gridTemplateColumns: 'grid-cols-3',
  gridAutoRows: 'auto-rows-fr',
  titleColor: 'text-red-blue',
  iconBox: [faBars, faList, faAppleWhole],
};

ColorBento.args = {
  title: 'Color',
  iconTitle: faEllipsis,
  wrapperWidth: 'w-96',
  wrapperBgColor: 'bg-red-100',
  containerBgColor: 'bg-green-100',
  gridTemplateColumns: 'grid-cols-4',
  children: ['메일', '스토리', '페이지', '그룹', '이벤트', '광고', '게시물', '친구', '동영상'],
  gridAutoRows: 'auto-rows-fr',
};
